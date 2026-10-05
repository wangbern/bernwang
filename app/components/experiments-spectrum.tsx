import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router";
import { DiamondArrow } from "~/components/diamond-arrow";
import { ProjectTitleCard } from "~/components/project-title-card";
import {
  getProjectMorphDirection,
  isActiveProjectMorph,
  markSpectrumReturn,
  prepareProjectMorph,
  PROJECT_MORPH_MS,
  projectHref,
} from "~/lib/project-morph";
import type { Project, SpectrumPoint } from "~/lib/projects";
import { prepareChromeTransition } from "~/lib/top-bar-transition";

/**
 * World position is `spectrum` × RANGE.
 * x: -1 silly → 1 whimsy
 * y: -1 strange → 1 unhinged
 * z: -1 scrappy → 1 sappy
 * Edit `spectrum:` in the project markdown.
 */
const RANGE = 2.55;
const AXIS_LEN = 3.62;
const CUBE = 1.05;
const HEAD_H = 0.3;
const LABEL_AT = AXIS_LEN + HEAD_H + 0.58;
const FOV = 36;
/** Return trip only. The hero shrink is shorter than the shared 1800ms morph, then the photo fades into the cube. */
const SPECTRUM_EXIT_MS = 760;
const MORPH_DISSOLVE_MS = 780;

const AXES = [
  { id: "x", neg: "silly", pos: "whimsy", color: 0x8fd4ff, dir: [1, 0, 0] },
  { id: "y", neg: "strange", pos: "unhinged", color: 0xf0a7b9, dir: [0, 1, 0] },
  { id: "z", neg: "scrappy", pos: "sappy", color: 0xdae5e7, dir: [0, 0, 1] },
] as const;

type AxisId = (typeof AXES)[number]["id"];

type ScreenRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

/** Last projected cube, kept across unmount so the return trip can land on it. */
type CubeScreen = ScreenRect & {
  title: ScreenRect | null;
  description: ScreenRect | null;
};

type SavedView = {
  position: [number, number, number];
  target: [number, number, number];
  elapsed: number;
};

type SavedPose = {
  rotation: [number, number, number];
  scale: number;
  y: number;
  angle: number;
};

const cubeScreens = new Map<string, CubeScreen>();
const cubePoses = new Map<string, SavedPose>();
let savedView: SavedView | null = null;

function cloneScreen(box: CubeScreen): CubeScreen {
  return {
    ...box,
    title: box.title ? { ...box.title } : null,
    description: box.description ? { ...box.description } : null,
  };
}

/** Rest tilt, spin axis, speed, and bob so each cube tumbles differently. */
const CUBE_MOTIONS = [
  { tiltX: 0.42, tiltZ: -0.22, axis: "y", speed: 0.18, phase: 0.4, bob: 0.7 },
  { tiltX: -0.5, tiltZ: 0.36, axis: "x", speed: -0.34, phase: 1.6, bob: 1.1 },
  { tiltX: 0.16, tiltZ: 0.58, axis: "z", speed: 0.14, phase: 2.8, bob: 0.55 },
  { tiltX: -0.24, tiltZ: -0.46, axis: "y", speed: 0.4, phase: 4.1, bob: 0.92 },
] as const;

type SpectrumItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  point: SpectrumPoint;
};

function fallbackPoint(index: number, count: number): SpectrumPoint {
  const angle = (index / Math.max(count, 1)) * Math.PI * 2 - Math.PI / 5;
  return {
    x: Math.cos(angle) * 0.66,
    y: ((index % 3) - 1) * 0.42,
    z: Math.sin(angle) * 0.66,
  };
}

function toItems(projects: Project[]): SpectrumItem[] {
  return projects.map((project, index) => ({
    slug: project.slug,
    title: project.title,
    description: project.description,
    image: project.image.large || project.image.src,
    point: project.spectrum ?? fallbackPoint(index, projects.length),
  }));
}

function spectrumSignature(projects: Project[]) {
  return projects
    .map((project) =>
      [
        project.slug,
        project.title,
        project.description,
        project.image.large,
        project.spectrum?.x ?? "",
        project.spectrum?.y ?? "",
        project.spectrum?.z ?? "",
      ].join("~"),
    )
    .join("|");
}

type MountHandle = {
  dispose: () => void;
};

async function mountSpectrum(
  host: HTMLElement,
  items: SpectrumItem[],
  onOpen: (title: string) => void,
  setAxis: (id: AxisId | null) => void,
  bindFocus: (focus: (id: AxisId) => void) => void,
  bindConceal: (conceal: (slug: string) => void) => void,
  isDisposed: () => boolean,
): Promise<MountHandle> {
  const THREE = await import("three");
  const { OrbitControls } = await import(
    "three/addons/controls/OrbitControls.js"
  );
  const { CSS2DObject, CSS2DRenderer } = await import(
    "three/addons/renderers/CSS2DRenderer.js"
  );
  const { RoundedBoxGeometry } = await import(
    "three/addons/geometries/RoundedBoxGeometry.js"
  );
  if (isDisposed()) return { dispose: () => {} };

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const exitingSlug =
    items.find(
      (item) =>
        isActiveProjectMorph(item.title) && getProjectMorphDirection() === "exit",
    )?.slug ?? null;
  const restoreView =
    exitingSlug && savedView
      ? {
          position: [...savedView.position] as [number, number, number],
          target: [...savedView.target] as [number, number, number],
          elapsed: savedView.elapsed,
        }
      : null;
  const settleAt = exitingSlug
    ? performance.now() + SPECTRUM_EXIT_MS + MORPH_DISSOLVE_MS
    : 0;
  let poseRelease = 0;

  let stopped = false;
  let raf = 0;
  const bin: { dispose: () => void }[] = [];
  function keep<T extends { dispose: () => void }>(resource: T): T {
    bin.push(resource);
    return resource;
  }

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const canvas = renderer.domElement;
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", "Experiments spectrum. Drag to turn, tap a project to open it.");
  canvas.style.touchAction = "none";
  host.insertBefore(canvas, host.firstChild);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(FOV, 1, 0.08, 80);

  const labelRenderer = new CSS2DRenderer();
  const labels = labelRenderer.domElement;
  labels.className = "spectrum-labels";
  host.appendChild(labels);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.rotateSpeed = coarse ? 0.9 : 0.62;
  controls.zoomSpeed = 0.6;
  controls.autoRotate = !reduce;
  controls.autoRotateSpeed = 0.38;
  controls.minPolarAngle = 0.02;
  controls.maxPolarAngle = Math.PI - 0.02;
  controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE,
  };
  controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN,
  };
  controls.target.set(0, 0, 0);

  const headGeom = keep(new THREE.ConeGeometry(0.135, HEAD_H, 4));
  headGeom.rotateY(Math.PI / 4);
  headGeom.translate(0, HEAD_H / 2, 0);
  const tickGeom = keep(new THREE.SphereGeometry(0.046, 16, 12));
  const bevel = CUBE * 0.07;
  const glowPad = CUBE * 0.04;
  const cubeGeom = keep(new RoundedBoxGeometry(CUBE, CUBE, CUBE, 3, bevel));
  const shellGeom = keep(
    new RoundedBoxGeometry(
      CUBE + glowPad * 2,
      CUBE + glowPad * 2,
      CUBE + glowPad * 2,
      3,
      bevel + glowPad,
    ),
  );
  const anisotropy = renderer.capabilities.getMaxAnisotropy();

  const poles: {
    el: HTMLElement;
    outward: InstanceType<typeof THREE.Vector3>;
    sx: number;
    sy: number;
    facing: number;
  }[] = [];

  for (const axis of AXES) {
    const dir = new THREE.Vector3(...axis.dir);
    const shaftMat = keep(new THREE.MeshBasicMaterial({ color: axis.color }));
    const shaft = new THREE.Mesh(
      keep(new THREE.CylinderGeometry(0.026, 0.026, AXIS_LEN * 2, 12)),
      shaftMat,
    );
    shaft.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    scene.add(shaft);

    const glow = new THREE.Mesh(
      keep(new THREE.CylinderGeometry(0.072, 0.072, AXIS_LEN * 2, 12)),
      keep(
        new THREE.MeshBasicMaterial({
          color: axis.color,
          transparent: true,
          opacity: 0.14,
          depthWrite: false,
        }),
      ),
    );
    glow.quaternion.copy(shaft.quaternion);
    scene.add(glow);

    for (const sign of [-1, 1] as const) {
      const outward = dir.clone().multiplyScalar(sign);
      const head = new THREE.Mesh(headGeom, shaftMat);
      head.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), outward);
      head.position.copy(outward).multiplyScalar(AXIS_LEN);
      scene.add(head);

      const el = document.createElement("div");
      el.className = `spectrum-pole spectrum-pole--${axis.id}`;
      el.textContent = sign < 0 ? axis.neg : axis.pos;
      el.setAttribute("aria-hidden", "true");
      const obj = new CSS2DObject(el);
      obj.position.copy(outward).multiplyScalar(LABEL_AT);
      scene.add(obj);
      poles.push({ el, outward, sx: 0, sy: 0, facing: 1 });

      const tick = new THREE.Mesh(tickGeom, shaftMat);
      tick.position.copy(dir).multiplyScalar(sign * RANGE * 0.5);
      scene.add(tick);
    }
  }

  scene.add(
    new THREE.Mesh(
      keep(new THREE.SphereGeometry(0.07, 20, 16)),
      keep(new THREE.MeshBasicMaterial({ color: 0xd2ffa5 })),
    ),
  );

  const pickables: InstanceType<typeof THREE.Mesh>[] = [];

  type Cube = {
    slug: string;
    title: string;
    group: InstanceType<typeof THREE.Group>;
    spin: InstanceType<typeof THREE.Group>;
    label: HTMLElement;
    labelObj: InstanceType<typeof CSS2DObject>;
    shellMat: InstanceType<typeof THREE.MeshBasicMaterial>;
    baseY: number;
    motion: (typeof CUBE_MOTIONS)[number];
    angle: number;
    speed: number;
    mesh: InstanceType<typeof THREE.Mesh>;
    mix: number;
    glow: number;
    hot: boolean;
    held: boolean;
    born: number;
  };

  const cubes: Cube[] = items.map((item, index) => {
    const motion = CUBE_MOTIONS[index % CUBE_MOTIONS.length];
    const material = keep(
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
      }),
    );
    const mesh = new THREE.Mesh(cubeGeom, material);
    mesh.userData.slug = item.slug;
    pickables.push(mesh);

    const shellMat = keep(
      new THREE.MeshBasicMaterial({
        color: 0xd2ffa5,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    );
    const shell = new THREE.Mesh(shellGeom, shellMat);
    shell.renderOrder = 2;

    const spin = new THREE.Group();
    spin.rotation.set(motion.tiltX, motion.phase * 0.35, motion.tiltZ);
    spin.add(mesh);
    spin.add(shell);

    const label = document.createElement("div");
    label.className = "spectrum-project";
    label.setAttribute("aria-hidden", "true");
    const title = document.createElement("p");
    title.className = "spectrum-project__title";
    title.textContent = item.title;
    label.appendChild(title);
    if (item.description) {
      const description = document.createElement("p");
      description.className = "spectrum-project__description";
      description.textContent = item.description;
      label.appendChild(description);
    }
    const labelObj = new CSS2DObject(label);
    labelObj.center.set(0.5, 0);
    labelObj.position.set(0, -CUBE * 0.96, 0);

    const group = new THREE.Group();
    group.position.set(
      item.point.x * RANGE,
      item.point.y * RANGE,
      item.point.z * RANGE,
    );
    group.visible = false;
    group.add(spin);
    group.add(labelObj);
    scene.add(group);

    return {
      slug: item.slug,
      title: item.title,
      group,
      spin,
      label,
      labelObj,
      shellMat,
      baseY: group.position.y,
      motion,
      angle: motion.phase,
      speed: 0,
      mesh,
      mix: 0,
      glow: 0,
      hot: false,
      held: false,
      born: -1,
    };
  });

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const viewDir = new THREE.Vector3();
  const proj = new THREE.Vector3();
  const startedAt = performance.now();
  const elapsedOffset = restoreView?.elapsed ?? 0;
  const seconds = () => (performance.now() - startedAt) / 1000 + elapsedOffset;

  if (exitingSlug) {
    const returning = cubes.find((cube) => cube.slug === exitingSlug);
    const pose = cubePoses.get(exitingSlug);
    if (returning && pose) {
      returning.spin.rotation.set(
        pose.rotation[0],
        pose.rotation[1],
        pose.rotation[2],
      );
      returning.spin.scale.setScalar(pose.scale);
      returning.group.position.y = pose.y;
      returning.angle = pose.angle;
      returning.born = seconds() - 1;
    }
  }
  let hotSlug: string | null = null;
  let framed = false;
  let interacted = false;
  let focusId: AxisId | null = null;
  let focusT = 1;
  const focusFromPos = new THREE.Vector3();
  const focusFromUp = new THREE.Vector3();
  const focusToPos = new THREE.Vector3();
  const focusToUp = new THREE.Vector3();
  const yAxis = new THREE.Vector3(0, 1, 0);
  const orbit = controls as unknown as {
    _quat: InstanceType<typeof THREE.Quaternion>;
    _quatInverse: InstanceType<typeof THREE.Quaternion>;
  };

  function placeAxis(id: AxisId, dist: number) {
    const lift = Math.sin(THREE.MathUtils.degToRad(18));
    const front = Math.cos(THREE.MathUtils.degToRad(18));
    if (id === "x") {
      focusToPos.set(0, lift, front).multiplyScalar(dist);
      focusToUp.set(0, front, -lift);
    } else if (id === "y") {
      focusToPos.set(lift, 0, front).multiplyScalar(dist);
      focusToUp.set(-front, 0, lift);
    } else {
      focusToPos.set(-front, lift, 0).multiplyScalar(dist);
      focusToUp.set(lift, front, 0);
    }
  }

  function syncControls() {
    orbit._quat.setFromUnitVectors(camera.up, yAxis);
    orbit._quatInverse.copy(orbit._quat).invert();
    controls.target.set(0, 0, 0);
    controls.update();
  }

  function applyFocus(t: number) {
    const k = t * t * (3 - 2 * t);
    camera.position.lerpVectors(focusFromPos, focusToPos, k);
    camera.up.lerpVectors(focusFromUp, focusToUp, k);
    if (camera.up.lengthSq() < 1e-8) camera.up.copy(yAxis);
    else camera.up.normalize();
    camera.lookAt(0, 0, 0);
    if (t >= 1) {
      syncControls();
      controls.enabled = true;
      focusId = null;
    }
  }

  function beginFocus(id: AxisId) {
    interacted = true;
    controls.autoRotate = false;
    host.dataset.used = "true";
    const dist = Math.max(fitDistance(camera.aspect || 1, camera.fov || FOV), 1);
    placeAxis(id, dist);
    focusFromPos.copy(camera.position);
    focusFromUp.copy(camera.up);
    focusId = id;
    setAxis(id);
    if (reduce) {
      focusT = 1;
      applyFocus(1);
    } else {
      focusT = 0;
      controls.enabled = false;
    }
  }

  bindFocus(beginFocus);

  function fitDistance(aspect: number, fov: number) {
    const radius = 4.85;
    const halfV = Math.tan((fov * Math.PI) / 360);
    const halfH = halfV * Math.max(aspect, 0.42);
    return Math.max(radius / halfV, radius / halfH) * 1.06;
  }

  function frame() {
    const width = host.clientWidth;
    const height = host.clientHeight;
    if (width < 2 || height < 2) return;
    const aspect = width / height;
    const fov = aspect < 0.9 ? 58 : FOV;
    camera.fov = fov;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    labelRenderer.setSize(width, height);
    const dist = fitDistance(aspect, fov);
    controls.minDistance = dist * 0.48;
    controls.maxDistance = dist * 1.85;
    if (!framed) {
      if (restoreView) {
        camera.position.set(
          restoreView.position[0],
          restoreView.position[1],
          restoreView.position[2],
        );
        controls.target.set(
          restoreView.target[0],
          restoreView.target[1],
          restoreView.target[2],
        );
        const dist = camera.position.distanceTo(controls.target);
        controls.minDistance = Math.min(controls.minDistance, dist * 0.98);
        controls.maxDistance = Math.max(controls.maxDistance, dist * 1.02);
        controls.autoRotate = false;
        interacted = true;
        const damping = controls.enableDamping;
        controls.enableDamping = false;
        controls.update();
        controls.enableDamping = damping;
      } else {
        camera.position.set(1.05, 0.74, 1.12).normalize().multiplyScalar(dist);
        controls.target.set(0, 0, 0);
      }
      framed = true;
    } else if (focusId) {
      placeAxis(focusId, dist);
    } else if (!interacted) {
      camera.position.normalize().multiplyScalar(dist);
    }
    if (!focusId && !(exitingSlug && performance.now() < settleAt)) controls.update();
  }

  function pick(clientX: number, clientY: number) {
    const rect = canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return null;
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(pickables, false)[0];
    return hit?.object ?? null;
  }

  function setHot(slug: string | null) {
    if (slug === hotSlug) return;
    hotSlug = slug;
    for (const cube of cubes) {
      const on = cube.slug === slug;
      cube.hot = on;
      cube.label.classList.toggle("is-hot", on);
      cube.labelObj.renderOrder = on ? 10 : 0;
    }
  }

  const measureBox = new THREE.Box3();
  const measureCorner = new THREE.Vector3();

  function rectOf(el: Element | null): ScreenRect | null {
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return null;
    return {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
  }

  function publishScreens() {
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;
    for (const cube of cubes) {
      if (cube.held || cube.born < 0) continue;
      measureBox.setFromObject(cube.mesh);
      const { min, max } = measureBox;
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      const xs = [min.x, max.x];
      const ys = [min.y, max.y];
      const zs = [min.z, max.z];
      for (const x of xs) {
        for (const y of ys) {
          for (const z of zs) {
            measureCorner.set(x, y, z).project(camera);
            const sx = (measureCorner.x * 0.5 + 0.5) * rect.width + rect.left;
            const sy = (-measureCorner.y * 0.5 + 0.5) * rect.height + rect.top;
            minX = Math.min(minX, sx);
            minY = Math.min(minY, sy);
            maxX = Math.max(maxX, sx);
            maxY = Math.max(maxY, sy);
          }
        }
      }
      if (!Number.isFinite(minX) || maxX - minX < 2 || maxY - minY < 2) continue;
      const description = cube.hot
        ? rectOf(cube.label.querySelector(".spectrum-project__description"))
        : null;
      cubeScreens.set(cube.slug, {
        left: minX,
        top: minY,
        width: maxX - minX,
        height: maxY - minY,
        title: rectOf(cube.label.querySelector(".spectrum-project__title")),
        description,
      });
      cubePoses.set(cube.slug, {
        rotation: [
          cube.spin.rotation.x,
          cube.spin.rotation.y,
          cube.spin.rotation.z,
        ],
        scale: cube.spin.scale.x,
        y: cube.group.position.y,
        angle: cube.angle,
      });
    }
    savedView = {
      position: [camera.position.x, camera.position.y, camera.position.z],
      target: [controls.target.x, controls.target.y, controls.target.z],
      elapsed: seconds(),
    };
  }

  function conceal(slug: string) {
    const cube = cubes.find((entry) => entry.slug === slug);
    if (!cube) return;
    publishScreens();
    cube.held = true;
    cube.spin.visible = false;
    cube.label
      .querySelector(".spectrum-project__title")
      ?.classList.add("project-morph-title");
    if (cube.hot) {
      cube.label
        .querySelector(".spectrum-project__description")
        ?.classList.add("project-morph-description");
    }
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
  }

  bindConceal(conceal);

  let pointerId = -1;
  let startX = 0;
  let startY = 0;
  let dragged = false;

  const onPointerDown = (event: PointerEvent) => {
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    dragged = false;
  };
  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerId === pointerId) {
      if (Math.hypot(event.clientX - startX, event.clientY - startY) > 12) {
        dragged = true;
        setHot(null);
      }
      return;
    }
    if (event.pointerType === "mouse" && event.buttons === 0) {
      const hit = pick(event.clientX, event.clientY);
      setHot(typeof hit?.userData.slug === "string" ? hit.userData.slug : null);
    }
  };
  const onPointerUp = (event: PointerEvent) => {
    if (event.pointerId !== pointerId) return;
    const tap =
      !dragged && Math.hypot(event.clientX - startX, event.clientY - startY) < 12;
    pointerId = -1;
    if (!tap) return;
    const hit = pick(event.clientX, event.clientY);
    const slug = hit?.userData.slug;
    if (typeof slug !== "string") return;
    const item = items.find((entry) => entry.slug === slug);
    if (item) {
      conceal(slug);
      onOpen(item.title);
    }
  };
  const onPointerLeave = () => {
    if (pointerId === -1) setHot(null);
  };
  const onPointerCancel = () => {
    dragged = true;
    pointerId = -1;
  };
  const onControlStart = () => {
    if (focusId) {
      focusId = null;
      controls.enabled = true;
      syncControls();
    }
    interacted = true;
    controls.autoRotate = false;
    host.dataset.used = "true";
    setAxis(null);
  };
  const onContextMenu = (event: Event) => {
    event.preventDefault();
  };

  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
  canvas.addEventListener("pointerleave", onPointerLeave);
  canvas.addEventListener("pointercancel", onPointerCancel);
  canvas.addEventListener("contextmenu", onContextMenu);
  controls.addEventListener("start", onControlStart);

  const resizeObserver = new ResizeObserver(() => frame());
  resizeObserver.observe(host);
  frame();

  function paintCard(image: HTMLImageElement) {
    const size = 1024;
    const card = document.createElement("canvas");
    card.width = size;
    card.height = size;
    const ctx = card.getContext("2d");
    if (!ctx || image.width < 1) return null;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    const scale = Math.max(size / image.width, size / image.height);
    const dw = image.width * scale;
    const dh = image.height * scale;
    ctx.drawImage(image, (size - dw) / 2, (size - dh) / 2, dw, dh);
    const texture = keep(new THREE.CanvasTexture(card));
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = anisotropy;
    texture.needsUpdate = true;
    return texture;
  }

  for (const [index, item] of items.entries()) {
    const cube = cubes[index];
    const material = (cube.spin.children[0] as InstanceType<typeof THREE.Mesh>)
      .material as InstanceType<typeof THREE.MeshBasicMaterial>;
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      if (stopped) return;
      const texture = paintCard(image);
      if (!texture || stopped) return;
      material.map = texture;
      material.color.set(0xffffff);
      material.needsUpdate = true;
      if (cube.born < 0) cube.born = seconds();
    };
    image.onerror = () => {
      if (stopped) return;
      material.color.set(0x0c242e);
      if (cube.born < 0) cube.born = seconds();
    };
    image.src = item.image;
  }

  let last = performance.now();
  const tick = () => {
    if (stopped) return;
    const now = performance.now();
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const elapsed = seconds();
    if (!framed) frame();
    if (focusId) {
      focusT = Math.min(1, focusT + dt / 0.9);
      applyFocus(focusT);
    } else if (!(exitingSlug && performance.now() < settleAt)) {
      controls.update();
    }

    const view = viewDir.copy(camera.position).normalize();
    const width = host.clientWidth;
    const height = host.clientHeight;
    for (const pole of poles) {
      proj.copy(pole.outward).multiplyScalar(LABEL_AT).project(camera);
      pole.sx = proj.x;
      pole.sy = proj.y;
      pole.facing = pole.outward.dot(view);
    }
    for (let i = 0; i < poles.length; i += 2) {
      const a = poles[i];
      const b = poles[i + 1];
      const dx = (a.sx - b.sx) * width * 0.5;
      const dy = (a.sy - b.sy) * height * 0.5;
      const overlap = 1 - THREE.MathUtils.smoothstep(Math.hypot(dx, dy), 36, 120);
      for (const pole of [a, b]) {
        const behind = 1 - THREE.MathUtils.smoothstep(pole.facing, -0.05, 0.35);
        pole.el.style.opacity = String(1 - overlap * behind);
      }
    }

    const anyHot = hotSlug !== null;
    for (const cube of cubes) {
      if (cube.born < 0) {
        cube.group.visible = false;
        continue;
      }
      cube.group.visible = true;
      if (cube.held) cube.spin.visible = false;
      const returning = cube.slug === exitingSlug && poseRelease < 0.998;
      const waiting = returning && performance.now() < settleAt;
      const intro = reduce
        ? 1
        : THREE.MathUtils.smoothstep(elapsed, cube.born, cube.born + 0.62);
      if (!waiting) {
        cube.mix += ((cube.hot ? 1 : 0) - cube.mix) * (1 - Math.exp(-dt * 10));
        const glowTarget = cube.hot ? 1 : 0;
        const glowRate = reduce ? 40 : cube.hot ? 2.6 : 0.85;
        cube.glow += (glowTarget - cube.glow) * (1 - Math.exp(-dt * glowRate));
        const cruise = Math.abs(cube.motion.speed);
        const targetSpeed = reduce ? 0 : cube.hot ? cruise * 0.15 : cruise;
        const speedRate = returning ? 1.25 : 3.5;
        cube.speed += (targetSpeed - cube.speed) * (1 - Math.exp(-dt * speedRate));
        const direction = Math.sign(cube.motion.speed) || 1;
        cube.angle += cube.speed * direction * dt;
      }
      const wobble = Math.sin(elapsed * 0.45 + cube.motion.phase);
      const liveX = reduce
        ? cube.motion.tiltX
        : cube.motion.tiltX +
          (cube.motion.axis === "x" ? cube.angle : wobble * 0.18);
      const liveY = reduce
        ? cube.motion.phase
        : (cube.motion.axis === "y" ? cube.angle : cube.motion.phase * 0.35) +
          Math.cos(elapsed * 0.3 + cube.motion.phase) * 0.12;
      const liveZ = reduce
        ? cube.motion.tiltZ
        : cube.motion.tiltZ +
          (cube.motion.axis === "z" ? cube.angle : wobble * 0.14);
      const liveScale = (0.72 + 0.28 * intro) * (1 + cube.mix * 0.09);
      const bob = reduce
        ? 0
        : Math.sin(elapsed * cube.motion.bob + cube.motion.phase) * 0.045 * intro;
      const liveHeight = cube.baseY + bob;
      const pose = returning ? cubePoses.get(cube.slug) : undefined;
      if (pose) {
        if (!waiting) {
          poseRelease += (1 - poseRelease) * (1 - Math.exp(-dt * 1.15));
        }
        const t = poseRelease;
        cube.spin.rotation.set(
          pose.rotation[0] + (liveX - pose.rotation[0]) * t,
          pose.rotation[1] + (liveY - pose.rotation[1]) * t,
          pose.rotation[2] + (liveZ - pose.rotation[2]) * t,
        );
        cube.spin.scale.setScalar(pose.scale + (liveScale - pose.scale) * t);
        cube.group.position.y = pose.y + (liveHeight - pose.y) * t;
      } else {
        cube.spin.rotation.set(liveX, liveY, liveZ);
        cube.spin.scale.setScalar(liveScale);
        cube.group.position.y = liveHeight;
      }
      const dim = anyHot && !cube.hot ? 0.42 : 1;
      cube.label.style.opacity = String(dim);
      const feather = cube.glow * (0.3 + 0.7 * cube.glow);
      cube.shellMat.opacity = feather * 0.82;
    }

    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
    publishScreens();
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  return {
    dispose: () => {
      if (stopped) return;
      stopped = true;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("pointercancel", onPointerCancel);
      canvas.removeEventListener("contextmenu", onContextMenu);
      controls.removeEventListener("start", onControlStart);
      bindFocus(() => {});
      bindConceal(() => {});
      controls.dispose();
      for (const resource of bin) resource.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
      labels.remove();
    },
  };
}

function exitMorphFromMemory(projects: Project[]) {
  if (typeof document === "undefined") return null;
  if (getProjectMorphDirection() !== "exit") return null;
  const project = projects.find((item) => isActiveProjectMorph(item.title));
  const box = project ? cubeScreens.get(project.slug) : undefined;
  if (!project || !box) return null;
  if (typeof document !== "undefined") {
    document.documentElement.dataset.spectrumMorph = "exit";
  }
  return { project, box: cloneScreen(box) };
}

function SpectrumMorph({
  project,
  box,
  dissolving,
}: {
  project: Project;
  box: CubeScreen;
  dissolving: boolean;
}) {
  const showCopy = dissolving || getProjectMorphDirection() === "exit";
  const named = !dissolving && showCopy;
  return (
    <div
      className={dissolving ? "spectrum-morph is-dissolving" : "spectrum-morph"}
      aria-hidden
    >
      <span
        className={
          dissolving
            ? "spectrum-morph__frame"
            : "spectrum-morph__frame project-morph-frame"
        }
        style={{
          left: box.left,
          top: box.top,
          width: box.width,
          height: box.height,
        }}
      >
        <img src={project.image.src} alt="" decoding="sync" />
        <span className="spectrum-morph__veil" />
      </span>
      {showCopy && box.title ? (
        <p
          className={[
            "spectrum-project__title spectrum-morph__text",
            named ? "project-morph-title" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{
            left: box.title.left,
            top: box.title.top,
            width: box.title.width,
          }}
        >
          {project.title}
        </p>
      ) : null}
      {showCopy && box.description && project.description ? (
        <p
          className={[
            "spectrum-project__description spectrum-morph__text",
            named ? "project-morph-description" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{
            left: box.description.left,
            top: box.description.top,
            width: box.description.width,
          }}
        >
          {project.description}
        </p>
      ) : null}
    </div>
  );
}

function ExperimentCards({ projects }: { projects: Project[] }) {
  return (
    <div className="experiments-fallback">
      <h1 className="experiments-spectrum__title">Experiments</h1>
      <ul className="experiments-fallback__grid">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectTitleCard
              image={project.image}
              title={project.title}
              description={project.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ExperimentsSpectrum({ projects }: { projects: Project[] }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const openRef = useRef<(title: string) => void>(() => {});
  const concealRef = useRef<(slug: string) => void>(() => {});
  const projectsRef = useRef(projects);
  const [failed, setFailed] = useState(false);
  const [activeAxis, setActiveAxis] = useState<AxisId | null>(null);
  const [morph, setMorph] = useState<{ project: Project; box: CubeScreen } | null>(
    () => exitMorphFromMemory(projects),
  );
  const [dissolving, setDissolving] = useState(false);
  const setAxisRef = useRef(setActiveAxis);
  const focusRef = useRef<(id: AxisId) => void>(() => {});
  const navigate = useNavigate();
  const location = useLocation();
  projectsRef.current = projects;
  setAxisRef.current = setActiveAxis;

  openRef.current = (title: string) => {
    armMorph(title);
    const to = projectHref(title);
    prepareChromeTransition(location.pathname, to);
    navigate(to, { viewTransition: true });
  };

  function armMorph(title: string) {
    const project = projectsRef.current.find((item) => item.title === title);
    const box = project ? cubeScreens.get(project.slug) : undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!project || !box || reduce) return;
    markSpectrumReturn();
    prepareProjectMorph(title, "enter");
    flushSync(() => {
      setMorph({ project, box: cloneScreen(box) });
    });
  }

  if (
    typeof document !== "undefined" &&
    morph &&
    getProjectMorphDirection() === "exit"
  ) {
    document.documentElement.dataset.spectrumMorph = "exit";
  }

  useLayoutEffect(() => {
    if (!morph || getProjectMorphDirection() !== "exit") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setMorph(null);
      return;
    }
    document.documentElement.dataset.spectrumMorph = "exit";
    let cancelled = false;
    let frames = 0;
    let raf = 0;
    let fadeTimer = 0;
    let doneTimer = 0;
    const beginDissolve = () => {
      if (cancelled) return;
      setDissolving(true);
      doneTimer = window.setTimeout(() => {
        if (!cancelled) setMorph(null);
      }, MORPH_DISSOLVE_MS);
    };
    const retiming = () => {
      if (cancelled) return;
      frames += 1;
      const rate = PROJECT_MORPH_MS / SPECTRUM_EXIT_MS;
      let frameAnim: Animation | null = null;
      for (const anim of document.getAnimations()) {
        const effect = anim.effect;
        if (!effect || !("getComputedTiming" in effect)) continue;
        if (effect.getComputedTiming().duration !== PROJECT_MORPH_MS) continue;
        if (anim.playbackRate === 1) anim.playbackRate = rate;
        if ((anim.animationName || "").includes("project-hero-frame")) frameAnim = anim;
      }
      if (frameAnim) {
        frameAnim.finished.then(() => beginDissolve()).catch(() => beginDissolve());
        return;
      }
      if (frames < 12) raf = requestAnimationFrame(retiming);
      else fadeTimer = window.setTimeout(beginDissolve, SPECTRUM_EXIT_MS);
    };
    raf = requestAnimationFrame(retiming);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
    };
  }, [morph]);

  useEffect(() => {
    if (!morph || getProjectMorphDirection() === "enter") {
      setDissolving(false);
      delete document.documentElement.dataset.spectrumMorph;
    }
  }, [morph]);

  const signature = spectrumSignature(projects);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let disposed = false;
    let teardown = () => {};
    const items = toItems(projectsRef.current);

    mountSpectrum(
      host,
      items,
      (title) => openRef.current(title),
      (id) => setAxisRef.current(id),
      (focus) => {
        focusRef.current = focus;
      },
      (conceal) => {
        concealRef.current = conceal;
      },
      () => disposed,
    )
      .then((handle) => {
        if (disposed) handle.dispose();
        else teardown = handle.dispose;
      })
      .catch(() => {
        if (!disposed) setFailed(true);
      });

    return () => {
      disposed = true;
      concealRef.current = () => {};
      teardown();
    };
  }, [signature]);

  if (failed) return <ExperimentCards projects={projects} />;

  return (
    <div className="experiments-spectrum" ref={hostRef}>
      {morph ? (
        <SpectrumMorph project={morph.project} box={morph.box} dissolving={dissolving} />
      ) : null}
      <nav className="experiments-spectrum__nav" aria-label="Experiments">
        {projects.map((project) => {
          const to = projectHref(project.title);
          return (
            <Link
              key={project.slug}
              to={to}
              viewTransition
              onClick={() => {
                concealRef.current(project.slug);
                armMorph(project.title);
                prepareChromeTransition(location.pathname, to);
              }}
            >
              {project.title}
            </Link>
          );
        })}
      </nav>
      <div className="experiments-spectrum__legend">
        <h1 className="experiments-spectrum__title">Experiments</h1>
        {AXES.map((axis) => (
          <button
            key={axis.id}
            type="button"
            className={[
              "experiments-spectrum__axis",
              `experiments-spectrum__axis--${axis.id}`,
              activeAxis === axis.id ? "is-selected" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-pressed={activeAxis === axis.id}
            onClick={() => focusRef.current(axis.id)}
          >
            <span className="experiments-spectrum__axis-id">{axis.id}</span>
            <span>{axis.neg}</span>
            <span className="experiments-spectrum__axis-arrows">
              <DiamondArrow
                direction="left"
                className="experiments-spectrum__axis-arrow"
              />
              <DiamondArrow
                direction="right"
                className="experiments-spectrum__axis-arrow"
              />
            </span>
            <span>{axis.pos}</span>
          </button>
        ))}
      </div>
      <p className="experiments-spectrum__hint">drag to turn · tap to open</p>
    </div>
  );
}
