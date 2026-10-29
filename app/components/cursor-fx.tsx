import { useEffect, useRef } from "react";
import cursorStarUrl from "~/assets/cursor-wand.png";

type Kind = 0 | 1; // 0 sparkle, 1 bubble

type Particle = {
  kind: Kind;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  rot: number;
  spin: number;
  hue: number;
  seed: number;
  /** 0 = 4-point star, 1 = tiny glitter speck */
  style: 0 | 1;
  popping: boolean;
  pop: number;
  active: boolean;
};

const MAX_PARTICLES = 64;
const SPARKLE_CAP = 48;
const BUBBLE_CAP = 16;
const SPAWN_MS = 18;
const SPAWN_DIST = 6;
// Size of the whole wand image (longest side); the star head is ~2/3 of it
const STAR_SIZE = 66;
const STAR_COLOR = "#f0a7b9";
const STAR_LAYERS = 1; // source image is already layered
// Chromatic-aberration fringes behind the wand so it stays visible over
// light photos: offset colored copies of the silhouette (offsets in px)
const STAR_FRINGES = [
  { color: "rgba(0, 190, 255, 0.85)", x: -1.5, y: -1 },
  { color: "rgba(255, 0, 140, 0.85)", x: 1.5, y: 1 },
];
// Hotspot: upper-left tip of the star within the PNG (fractions of width/height)
const STAR_ANCHOR_X = 0.076;
const STAR_ANCHOR_Y = 0.026;
// Visual center of the star; the idle wiggle pivots around this point
const STAR_CENTER_X = 0.39;
const STAR_CENTER_Y = 0.34;
// Star sits still, then starts to wiggle after the mouse is idle this long
const STAR_IDLE_MS = 20000;
const STAR_WIGGLE_ROT = 0.2; // max tilt in radians
const STAR_WIGGLE_MOVE = 2.5; // max drift in px
const STAR_WIGGLE_SCALE = 0.06; // +/- scale amount
// Halo of light that breathes around the star head while it wiggles
const STAR_HALO_RADIUS = 0.3; // fraction of the wand width
const STAR_HALO_PULSE = 0.1; // +/- radius amount
const STAR_HALO_BLUR_BOOST = 0.5; // extra glow blur at the peak of a breath
// Glow behind the star head
const STAR_SHADOW_COLOR = "rgb(255, 254, 250, 0.8)";
const STAR_SHADOW_BLUR = 15;
const STAR_SHADOW_X = 0;
const STAR_SHADOW_Y = 0;
// Faint colored glows offset to either side of the white one (offsets in px)
const STAR_GLOW_FRINGES = [
  { color: "rgba(0, 190, 255, 0.25)", x: -2.5, y: -1.5 },
  { color: "rgba(255, 0, 140, 0.25)", x: 2.5, y: 1.5 },
];
// Line separating the star head from the stick (fractions of width/height):
// runs from the gap under the right arm to the gap beside the lower-left arm.
// Only the head side gets the shadow.
const STICK_SPLIT_A = { x: 0.79, y: 0.52 };
const STICK_SPLIT_B = { x: 0.52, y: 0.635 };
// Crosshair under the star fades out once the mouse stops moving
const CROSSHAIR_REST_MS = 250;
// Clicks that miss at the tip fall through to whatever is under the star center
const CLICKABLE_SELECTOR =
  "a[href], button, input, select, textarea, label, summary, [role='button'], [role='link'], [onclick], [tabindex]:not([tabindex='-1'])";

function prefersFinePointer() {
  return window.matchMedia("(pointer: fine) and (hover: hover)").matches;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function createPool(): Particle[] {
  return Array.from({ length: MAX_PARTICLES }, () => ({
    kind: 0,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    size: 0,
    life: 0,
    maxLife: 1,
    rot: 0,
    spin: 0,
    hue: 0,
    seed: 0,
    style: 0,
    popping: false,
    pop: 0,
    active: false,
  }));
}

function acquire(pool: Particle[]): Particle | null {
  for (let i = 0; i < pool.length; i++) {
    if (!pool[i].active) return pool[i];
  }
  return null;
}

function countKind(pool: Particle[], kind: Kind) {
  let n = 0;
  for (let i = 0; i < pool.length; i++) {
    if (pool[i].active && pool[i].kind === kind) n++;
  }
  return n;
}

function rainbowHue() {
  return (performance.now() * 0.05 + Math.random() * 100) % 360;
}

function spawnSparkle(p: Particle, x: number, y: number) {
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.15 + Math.random() * 0.7;
  const isSpeck = Math.random() < 0.4;

  p.kind = 0;
  p.x = x + (Math.random() - 0.5) * 16;
  p.y = y + (Math.random() - 0.5) * 16;
  p.vx = Math.cos(angle) * speed * 0.55;
  p.vy = Math.sin(angle) * speed * 0.55 - (0.15 + Math.random() * 0.35);
  p.style = isSpeck ? 1 : 0;
  p.size = isSpeck ? 1.5 + Math.random() * 2.2 : 5 + Math.random() * 9;
  p.life = 1;
  p.maxLife = isSpeck
    ? 0.28 + Math.random() * 0.35
    : 0.45 + Math.random() * 0.55;
  // Keep stars axis-aligned to the page (points up/down/left/right)
  p.rot = 0;
  p.spin = 0;
  p.hue = rainbowHue();
  p.seed = Math.random() * Math.PI * 2;
  p.popping = false;
  p.pop = 0;
  p.active = true;
}

function spawnBubble(p: Particle, x: number, y: number, from?: Particle) {
  const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.2;
  const speed = 0.4 + Math.random() * 1.05;
  p.kind = 1;
  p.x = from ? from.x : x + (Math.random() - 0.5) * 24;
  p.y = from ? from.y : y + (Math.random() - 0.5) * 24;
  p.vx = Math.cos(angle) * speed * 0.3;
  p.vy = Math.sin(angle) * speed;
  p.size = from ? Math.max(from.size * 1.15, 8) : 8 + Math.random() * 14;
  p.life = 1;
  p.maxLife = 0.9 + Math.random() * 0.85;
  p.rot = Math.random() * Math.PI;
  p.spin = (Math.random() - 0.5) * 0.04;
  p.hue = from ? from.hue : rainbowHue();
  p.seed = Math.random() * Math.PI * 2;
  p.style = 0;
  p.popping = false;
  p.pop = 0;
  p.active = true;
}

function startPop(p: Particle) {
  p.popping = true;
  p.pop = 0;
  p.vx *= 0.2;
  p.vy *= 0.2;
}

function drawStarPath(ctx: CanvasRenderingContext2D, r: number, inset: number) {
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.lineTo(inset, -inset);
  ctx.lineTo(r, 0);
  ctx.lineTo(inset, inset);
  ctx.lineTo(0, r);
  ctx.lineTo(-inset, inset);
  ctx.lineTo(-r, 0);
  ctx.lineTo(-inset, -inset);
  ctx.closePath();
}

function drawSparkle(
  ctx: CanvasRenderingContext2D,
  p: Particle,
  alpha: number,
  twinkle: number,
) {
  const pulse = 0.7 + twinkle * 0.55;
  const r = p.size * 0.5 * pulse;

  ctx.save();
  ctx.translate(p.x, p.y);
  // No rotate — sparkles stay upright relative to the page

  if (p.style === 1) {
    // Tiny glitter speck
    ctx.globalAlpha = alpha * 0.55 * twinkle;
    ctx.fillStyle = `hsla(${p.hue}, 75%, 78%, 1)`;
    ctx.beginPath();
    ctx.arc(0, 0, Math.max(0.6, r), 0, Math.PI * 2);
    ctx.fill();
    if (twinkle > 0.85) {
      ctx.globalAlpha = alpha * (twinkle - 0.7);
      ctx.strokeStyle = `hsla(${p.hue + 40}, 80%, 80%, 1)`;
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(0, -r * 2.2);
      ctx.lineTo(0, r * 2.2);
      ctx.moveTo(-r * 2.2, 0);
      ctx.lineTo(r * 2.2, 0);
      ctx.stroke();
    }
    ctx.restore();
    return;
  }

  // Classic 4-point magical star
  const inset = r * 0.22;
  ctx.globalAlpha = alpha * 0.35 * twinkle;
  ctx.fillStyle = `hsla(${p.hue}, 70%, 78%, 1)`;
  drawStarPath(ctx, r, inset);
  ctx.fill();

  ctx.globalAlpha = alpha * 0.55 * twinkle;
  ctx.strokeStyle = `hsla(${p.hue + 50}, 75%, 80%, 1)`;
  ctx.lineWidth = 0.9;
  ctx.stroke();

  // Bright core
  ctx.globalAlpha = alpha * 0.45 * twinkle;
  ctx.fillStyle = `hsla(${p.hue + 20}, 85%, 85%, 1)`;
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.16, 0, Math.PI * 2);
  ctx.fill();

  // Magical flash: long cross rays when twinkling hard
  if (twinkle > 0.7) {
    const flash = (twinkle - 0.7) / 0.3;
    const ray = r * (1.4 + flash * 1.1);
    ctx.globalAlpha = alpha * flash * 0.65;
    ctx.strokeStyle = `hsla(${p.hue + 80}, 80%, 82%, 1)`;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(0, -ray);
    ctx.lineTo(0, ray);
    ctx.moveTo(-ray, 0);
    ctx.lineTo(ray, 0);
    ctx.stroke();

    // Diagonal secondary rays (8-point twinkle)
    if (flash > 0.55) {
      const d = ray * 0.65;
      ctx.globalAlpha = alpha * (flash - 0.55) * 1.1;
      ctx.beginPath();
      ctx.moveTo(-d, -d);
      ctx.lineTo(d, d);
      ctx.moveTo(d, -d);
      ctx.lineTo(-d, d);
      ctx.stroke();
    }
  }

  ctx.restore();
}

function drawBubble(
  ctx: CanvasRenderingContext2D,
  p: Particle,
  alpha: number,
) {
  const r = p.size * 0.5;
  ctx.save();
  ctx.translate(p.x, p.y);

  ctx.globalAlpha = alpha * 0.22;
  ctx.fillStyle = `hsla(${p.hue}, 70%, 72%, 1)`;
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();

  ctx.globalAlpha = alpha * 0.5;
  ctx.strokeStyle = `hsla(${p.hue + 90}, 75%, 78%, 1)`;
  ctx.lineWidth = 1.15;
  ctx.stroke();

  ctx.globalAlpha = alpha * 0.28;
  ctx.strokeStyle = `hsla(${p.hue + 200}, 70%, 70%, 1)`;
  ctx.lineWidth = 0.75;
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.82, 0, Math.PI * 2);
  ctx.stroke();

  ctx.globalAlpha = alpha * 0.3;
  ctx.fillStyle = `hsla(${p.hue + 30}, 85%, 82%, 1)`;
  ctx.beginPath();
  ctx.ellipse(-r * 0.28, -r * 0.32, r * 0.2, r * 0.12, -0.4, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

function drawBubblePop(ctx: CanvasRenderingContext2D, p: Particle) {
  const t = p.pop;
  const r = p.size * 0.5 * (1 + t * 1.9);
  const fade = 1 - t;

  ctx.save();
  ctx.translate(p.x, p.y);

  ctx.globalAlpha = fade * 0.55;
  ctx.strokeStyle = `hsla(${p.hue + 90}, 75%, 78%, 1)`;
  ctx.lineWidth = Math.max(0.4, 1.4 * (1 - t));
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.stroke();

  ctx.globalAlpha = fade * 0.35;
  ctx.strokeStyle = `hsla(${p.hue + 200}, 70%, 72%, 1)`;
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.arc(0, 0, r * (0.75 + t * 0.2), 0, Math.PI * 2);
  ctx.stroke();

  const shards = 5;
  for (let i = 0; i < shards; i++) {
    const a = p.seed + (i / shards) * Math.PI * 2;
    const dist = r * (0.85 + t * 0.5);
    const span = 0.35 + (1 - t) * 0.25;
    ctx.globalAlpha = fade * 0.5;
    ctx.strokeStyle = `hsla(${p.hue + i * 40}, 75%, 76%, 1)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, 0, dist, a - span, a + span);
    ctx.stroke();

    const dx = Math.cos(a) * dist * 1.08;
    const dy = Math.sin(a) * dist * 1.08;
    ctx.globalAlpha = fade * 0.4;
    ctx.fillStyle = `hsla(${p.hue + i * 35}, 80%, 78%, 1)`;
    ctx.beginPath();
    ctx.arc(dx, dy, 1.2 + (1 - t), 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function createTintedStar(img: HTMLImageElement, dpr: number) {
  const scale = STAR_SIZE / Math.max(img.width, img.height);
  const w = img.width * scale;
  const h = img.height * scale;
  const off = document.createElement("canvas");
  off.width = Math.ceil(w * dpr);
  off.height = Math.ceil(h * dpr);
  const octx = off.getContext("2d");
  if (!octx) return null;
  // Stack the image so its semi-transparent brush strokes read more solid
  for (let i = 0; i < STAR_LAYERS; i++) {
    octx.drawImage(img, 0, 0, off.width, off.height);
  }
  octx.globalCompositeOperation = "source-in";
  octx.fillStyle = STAR_COLOR;
  octx.fillRect(0, 0, off.width, off.height);

  // Fringes: stamp tinted, offset copies of the silhouette behind the star
  const silhouette = document.createElement("canvas");
  silhouette.width = off.width;
  silhouette.height = off.height;
  const fctx = silhouette.getContext("2d");
  if (!fctx) return null;
  for (const fringe of STAR_FRINGES) {
    fctx.globalCompositeOperation = "source-over";
    fctx.clearRect(0, 0, silhouette.width, silhouette.height);
    fctx.drawImage(off, 0, 0);
    fctx.globalCompositeOperation = "source-in";
    fctx.fillStyle = fringe.color;
    fctx.fillRect(0, 0, silhouette.width, silhouette.height);
    octx.globalCompositeOperation = "destination-over";
    octx.drawImage(silhouette, fringe.x * dpr, fringe.y * dpr);
  }
  octx.globalCompositeOperation = "source-over";

  // Split per pixel (not with a clip path) so the two halves meet without a seam
  const stick = document.createElement("canvas");
  stick.width = off.width;
  stick.height = off.height;
  const sctx = stick.getContext("2d");
  if (!sctx) return null;
  const headData = octx.getImageData(0, 0, off.width, off.height);
  const stickData = sctx.createImageData(off.width, off.height);
  const ax = STICK_SPLIT_A.x * off.width;
  const ay = STICK_SPLIT_A.y * off.height;
  const dx = STICK_SPLIT_B.x * off.width - ax;
  const dy = STICK_SPLIT_B.y * off.height - ay;
  for (let py = 0; py < off.height; py++) {
    for (let px = 0; px < off.width; px++) {
      // Cross product sign: positive = stick side of the line
      if ((px - ax) * dy - (py - ay) * dx <= 0) continue;
      const i = (py * off.width + px) * 4;
      for (let c = 0; c < 4; c++) {
        stickData.data[i + c] = headData.data[i + c];
        headData.data[i + c] = 0;
      }
    }
  }
  octx.putImageData(headData, 0, 0);
  sctx.putImageData(stickData, 0, 0);
  return { canvas: off, stick, w, h };
}

type TintedStar = NonNullable<ReturnType<typeof createTintedStar>>;

function drawCursor(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  pop: number,
  hue: number,
  star: TintedStar | null,
  idleT: number,
  wiggle: number,
  crosshair: number,
  dpr: number,
) {
  const s = 1 + pop * 0.55;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);

  if (star) {
    ctx.save();
    const cx = star.w * (STAR_CENTER_X - STAR_ANCHOR_X);
    const cy = star.h * (STAR_CENTER_Y - STAR_ANCHOR_Y);
    // 0..1 breathing cycle, in step with the scale pulse
    const breath = wiggle > 0 ? (0.5 + 0.5 * Math.sin(idleT * 2.2)) * wiggle : 0;
    if (wiggle > 0) {
      ctx.translate(
        cx + Math.sin(idleT * 1.3) * STAR_WIGGLE_MOVE * wiggle,
        cy + Math.sin(idleT * 1.7) * STAR_WIGGLE_MOVE * 0.7 * wiggle,
      );
      ctx.rotate(Math.sin(idleT * 3.1) * STAR_WIGGLE_ROT * wiggle);
      const pulse = 1 + Math.sin(idleT * 2.2) * STAR_WIGGLE_SCALE * wiggle;
      ctx.scale(pulse, pulse);
      ctx.translate(-cx, -cy);

      // Soft radial halo radiating out from the star head
      const r = star.w * STAR_HALO_RADIUS * (1 + (breath - 0.5 * wiggle) * 2 * STAR_HALO_PULSE);
      const halo = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      halo.addColorStop(0, "rgba(255, 253, 245, 0.75)");
      halo.addColorStop(0.35, "rgba(255, 240, 248, 0.4)");
      halo.addColorStop(0.7, `hsla(${(idleT * 40) % 360}, 90%, 85%, 0.15)`);
      halo.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.globalAlpha = wiggle * (0.55 + breath * 0.45);
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 0.9;
    const ox = -star.w * STAR_ANCHOR_X;
    const oy = -star.h * STAR_ANCHOR_Y;
    // Shadow-only passes: draw the head far offscreen and offset its shadow
    // back into place, so just the tinted glow lands (shadow offsets are in
    // device px, so map the jump through the current transform)
    const far = 10000;
    const inv = ctx.getTransform().inverse();
    const p0 = inv.transformPoint({ x: 0, y: 0 });
    const p1 = inv.transformPoint({ x: far, y: 0 });
    ctx.shadowBlur = STAR_SHADOW_BLUR * (1 + breath * STAR_HALO_BLUR_BOOST) * dpr;
    for (const fringe of STAR_GLOW_FRINGES) {
      ctx.shadowColor = fringe.color;
      ctx.shadowOffsetX = -far + fringe.x * dpr;
      ctx.shadowOffsetY = fringe.y * dpr;
      ctx.drawImage(star.canvas, ox + p1.x - p0.x, oy + p1.y - p0.y, star.w, star.h);
    }
    ctx.shadowColor = STAR_SHADOW_COLOR;
    ctx.shadowOffsetX = STAR_SHADOW_X * dpr;
    ctx.shadowOffsetY = STAR_SHADOW_Y * dpr;
    ctx.drawImage(star.canvas, ox, oy, star.w, star.h);
    ctx.shadowColor = "transparent";
    ctx.drawImage(star.stick, ox, oy, star.w, star.h);
    ctx.restore();
  }

  if (crosshair <= 0) {
    ctx.restore();
    return;
  }

  ctx.globalAlpha = 0.55 * crosshair;
  ctx.strokeStyle = `hsla(${hue}, 65%, 78%, 1)`;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(0, -7);
  ctx.lineTo(0, 7);
  ctx.moveTo(-7, 0);
  ctx.lineTo(7, 0);
  ctx.stroke();

  ctx.globalAlpha = 0.28 * crosshair;
  ctx.fillStyle = `hsla(${hue + 40}, 75%, 75%, 1)`;
  ctx.beginPath();
  ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function CursorFx() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const fine = prefersFinePointer();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const pool = createPool();
    let mouseX = -100;
    let mouseY = -100;
    let lastX = mouseX;
    let lastY = mouseY;
    let lastSpawn = 0;
    let lastMove = performance.now();
    let wiggle = 0;
    let wigglePhase = 0;
    let crosshair = 0;
    let visible = false;
    let raf = 0;
    let running = false;
    let popT = 0;
    let cursorHue = 300;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let starImg: HTMLImageElement | null = null;
    let star: TintedStar | null = null;

    const img = new Image();
    img.onload = () => {
      starImg = img;
      star = createTintedStar(img, dpr);
    };
    img.src = cursorStarUrl;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      if (starImg) star = createTintedStar(starImg, dpr);
      if (fine) {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        return;
      }

      canvas.style.width = "100%";
      canvas.style.height = "100%";
      const nextW = canvas.clientWidth || window.innerWidth;
      const nextH = canvas.clientHeight || window.innerHeight;
      if (nextW === w && nextH === h) return;
      w = nextW;
      h = nextH;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const pointFromClient = (clientX: number, clientY: number) => {
      if (fine) return { x: clientX, y: clientY };
      const rect = canvas.getBoundingClientRect();
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    };

    const kick = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const follow = (x: number, y: number) => {
      if (x !== mouseX || y !== mouseY) lastMove = performance.now();
      mouseX = x;
      mouseY = y;
      visible = true;
      cursorHue = (cursorHue + 0.6) % 360;

      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const dist = Math.hypot(dx, dy);
      const now = performance.now();

      if (
        dist > SPAWN_DIST &&
        now - lastSpawn > SPAWN_MS &&
        countKind(pool, 0) < SPARKLE_CAP
      ) {
        const count = dist > 22 ? 3 : 2;
        for (let i = 0; i < count; i++) {
          if (countKind(pool, 0) >= SPARKLE_CAP) break;
          const p = acquire(pool);
          if (!p) break;
          const t = (i + 1) / (count + 1);
          spawnSparkle(p, lastX + dx * t, lastY + dy * t);
        }
        lastSpawn = now;
        lastX = mouseX;
        lastY = mouseY;
      }

      kick();
    };

    const onMove = (event: PointerEvent) => {
      const point = pointFromClient(event.clientX, event.clientY);
      follow(point.x, point.y);
    };

    const burstAt = (x: number, y: number) => {
      popT = 1;

      let bubbles = countKind(pool, 1);
      for (let i = 0; i < pool.length; i++) {
        const p = pool[i];
        if (!p.active || p.kind !== 0) continue;
        const ddx = p.x - x;
        const ddy = p.y - y;
        if (ddx * ddx + ddy * ddy >= 78 * 78) continue;
        if (bubbles >= BUBBLE_CAP) break;
        spawnBubble(p, x, y, p);
        bubbles++;
      }

      const burst = 4 + ((Math.random() * 3) | 0);
      for (let i = 0; i < burst && bubbles < BUBBLE_CAP; i++) {
        const p = acquire(pool);
        if (!p) break;
        spawnBubble(p, x, y);
        bubbles++;
      }

      kick();
    };

    const onClick = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const point = pointFromClient(event.clientX, event.clientY);
      burstAt(point.x, point.y);
    };

    // Extend the hit box: if the tip didn't hit anything clickable,
    // forward the click to the element under the center of the star
    const onStarCenterClick = (event: MouseEvent) => {
      if (!event.isTrusted || event.button !== 0 || !star) return;
      const target = event.target as Element | null;
      if (target?.closest?.(CLICKABLE_SELECTOR)) return;
      const cx = event.clientX + star.w * (STAR_CENTER_X - STAR_ANCHOR_X);
      const cy = event.clientY + star.h * (STAR_CENTER_Y - STAR_ANCHOR_Y);
      const hit = document
        .elementFromPoint(cx, cy)
        ?.closest<HTMLElement>(CLICKABLE_SELECTOR);
      if (!hit) return;
      event.preventDefault();
      event.stopPropagation();
      if (hit.matches("input:not([type='checkbox']):not([type='radio']), select, textarea")) {
        hit.focus();
      } else {
        hit.click();
      }
    };

    const onLeave = () => {
      visible = false;
    };

    let lastTs = 0;
    const tick = (ts: number) => {
      const dt = lastTs ? Math.min(0.033, (ts - lastTs) / 1000) : 0.016;
      lastTs = ts;
      const time = ts * 0.001;

      ctx.clearRect(0, 0, w, h);

      let alive = 0;
      for (let i = 0; i < pool.length; i++) {
        const p = pool[i];
        if (!p.active) continue;

        if (p.popping) {
          p.pop += dt * 4.2;
          p.x += p.vx;
          p.y += p.vy;
          if (p.pop >= 1) {
            p.active = false;
            continue;
          }
          drawBubblePop(ctx, p);
          alive++;
          continue;
        }

        p.life -= dt / p.maxLife;

        if (p.kind === 1 && p.life <= 0.16) {
          startPop(p);
          drawBubblePop(ctx, p);
          alive++;
          continue;
        }

        if (p.life <= 0) {
          p.active = false;
          continue;
        }

        if (p.kind === 0) {
          p.x += p.vx;
          p.y += p.vy;
          p.vy -= 0.008;
          p.vx *= 0.99;

          // Constant shimmer, sharper flashes near the end
          const endBoost = p.life < 0.4 ? (1 - p.life / 0.4) * 0.7 : 0;
          const freq = 7 + endBoost * 26 + (p.seed % 3);
          const wave = Math.sin(time * freq + p.seed);
          const base = 0.55 + wave * 0.45;
          const flash = wave > 0.72 ? 1 : base;
          const twinkle =
            p.life < 0.35
              ? flash * (0.35 + (p.life / 0.35) * 0.65) +
                (wave > 0.5 ? 0.55 : 0)
              : 0.65 + flash * 0.35;

          drawSparkle(ctx, p, Math.min(1, p.life * 1.2), Math.min(1.2, twinkle));
        } else {
          p.x += p.vx + Math.sin(p.life * 8 + i) * 0.12;
          p.y += p.vy;
          p.vy *= 0.994;
          p.vy -= 0.01;
          p.size += 4.5 * dt;
          p.hue = (p.hue + 18 * dt) % 360;
          const fade = p.life > 0.25 ? 1 : 0.55 + (p.life / 0.25) * 0.45;
          drawBubble(ctx, p, fade);
        }
        alive++;
      }

      if (popT > 0) popT = Math.max(0, popT - dt * 3.2);
      // Seconds past the idle threshold (negative while still active)
      const idleT = (performance.now() - lastMove - STAR_IDLE_MS) / 1000;
      const wiggleTarget = idleT > 0 ? 1 : 0;
      wiggle += (wiggleTarget - wiggle) * Math.min(1, dt * (wiggleTarget ? 1.5 : 8));
      if (wiggle < 0.001) wiggle = 0;
      // Freeze the phase while easing out so the star settles without a jump
      if (idleT > 0) wigglePhase = idleT;
      const moving = performance.now() - lastMove < CROSSHAIR_REST_MS;
      const crosshairTarget = moving || popT > 0 ? 1 : 0;
      crosshair += (crosshairTarget - crosshair) * Math.min(1, dt * (crosshairTarget ? 20 : 6));
      if (crosshair < 0.01) crosshair = 0;
      // Touch devices get the sparkle trail only, no wand image
      if (visible && fine) {
        drawCursor(ctx, mouseX, mouseY, popT, cursorHue, star, wigglePhase, wiggle, crosshair, dpr);
      }

      if (alive > 0 || visible || popT > 0) {
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
        lastTs = 0;
        ctx.clearRect(0, 0, w, h);
      }
    };

    let touchId: number | null = null;

    const onCoarsePointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      onClick(event);
    };

    const onCoarsePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      onMove(event);
    };

    const onTouchStart = (event: TouchEvent) => {
      if (touchId !== null) return;
      const touch = event.changedTouches[0];
      if (!touch) return;
      touchId = touch.identifier;
      const point = pointFromClient(touch.clientX, touch.clientY);
      mouseX = point.x;
      mouseY = point.y;
      lastX = mouseX;
      lastY = mouseY;
      visible = true;
      burstAt(mouseX, mouseY);
    };

    const onTouchMove = (event: TouchEvent) => {
      for (let i = 0; i < event.changedTouches.length; i++) {
        const touch = event.changedTouches[i];
        if (touch.identifier !== touchId) continue;
        const point = pointFromClient(touch.clientX, touch.clientY);
        follow(point.x, point.y);
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      for (let i = 0; i < event.changedTouches.length; i++) {
        if (event.changedTouches[i].identifier !== touchId) continue;
        touchId = null;
        visible = false;
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    if (fine) {
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerdown", onClick, { passive: true });
      window.addEventListener("click", onStarCenterClick, true);
      document.documentElement.addEventListener("mouseleave", onLeave);
    } else {
      window.addEventListener("pointerdown", onCoarsePointerDown, { passive: true });
      window.addEventListener("pointermove", onCoarsePointerMove, { passive: true });
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
      window.addEventListener("touchcancel", onTouchEnd, { passive: true });
      document.documentElement.addEventListener("mouseleave", onLeave);
      window.visualViewport?.addEventListener("resize", resize);
      window.visualViewport?.addEventListener("scroll", resize);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (fine) {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerdown", onClick);
        window.removeEventListener("click", onStarCenterClick, true);
        document.documentElement.removeEventListener("mouseleave", onLeave);
      } else {
        window.removeEventListener("pointerdown", onCoarsePointerDown);
        window.removeEventListener("pointermove", onCoarsePointerMove);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
        window.removeEventListener("touchend", onTouchEnd);
        window.removeEventListener("touchcancel", onTouchEnd);
        document.documentElement.removeEventListener("mouseleave", onLeave);
        window.visualViewport?.removeEventListener("resize", resize);
        window.visualViewport?.removeEventListener("scroll", resize);
      }
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="cursor-fx" aria-hidden="true" />
  );
}
