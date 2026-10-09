import { useEffect, useRef, useState } from "react";
import coverImage from "~/assets/IMG_5645.jpeg?responsive";
import type { ResponsiveImage } from "~/lib/responsive-image";

const BRUSH_RADIUS = 110;
const BRUSH_ALPHA = 0.42;
const HEAL_RATE = 0.018;
const STEP = 10;
/** Extra heal frames after the pointer stops before idling. */
const HEAL_COOLDOWN = 90;

function prefersFinePointer() {
  return window.matchMedia("(pointer: fine) and (hover: hover)").matches;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number,
) {
  const ir = img.naturalWidth / img.naturalHeight;
  const cr = w / h;
  let dw: number;
  let dh: number;
  let dx: number;
  let dy: number;
  if (ir > cr) {
    dh = h;
    dw = h * ir;
    dx = (w - dw) / 2;
    dy = 0;
  } else {
    dw = w;
    dh = w / ir;
    dx = 0;
    dy = (h - dh) / 2;
  }
  ctx.drawImage(img, dx, dy, dw, dh);
}

const PORTRAIT_SITE_BG =
  "(max-width: 900px) and (orientation: portrait)";

/** Same framing as `.site-bg::before` on portrait phones. */
function drawPortraitCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number,
) {
  const boxW = h;
  const boxH = w;
  const ir = img.naturalWidth / img.naturalHeight;
  const br = boxW / boxH;
  let dw: number;
  let dh: number;
  let ox: number;
  let oy: number;
  if (ir > br) {
    dh = boxH;
    dw = boxH * ir;
    ox = (boxW - dw) / 2;
    oy = 0;
  } else {
    dw = boxW;
    dh = boxW / ir;
    ox = 0;
    oy = (boxH - dh) / 2;
  }

  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.rotate(Math.PI / 2);
  ctx.drawImage(img, -boxW / 2 + ox, -boxH / 2 + oy, dw, dh);
  ctx.restore();
}

function coarseBrushRadius(w: number, h: number) {
  return Math.min(BRUSH_RADIUS, Math.max(72, Math.round(Math.min(w, h) * 0.16)));
}

function paintBrush(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  alpha: number,
) {
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
  gradient.addColorStop(0, `rgba(0,0,0,${alpha})`);
  gradient.addColorStop(0.35, `rgba(0,0,0,${alpha * 0.45})`);
  gradient.addColorStop(0.7, `rgba(0,0,0,${alpha * 0.12})`);
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

export function AboutReveal() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealImage, setRevealImage] = useState<ResponsiveImage | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let cancelled = false;
    void import("~/assets/high res for interactive.png?responsive").then(
      (mod) => {
        if (!cancelled) setRevealImage(mod.default);
      },
    );
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!revealImage || prefersFinePointer() || prefersReducedMotion()) return;

    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const portraitQuery = window.matchMedia(PORTRAIT_SITE_BG);
    let coverImg: HTMLImageElement | null = null;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let brushRadius = coarseBrushRadius(window.innerWidth, window.innerHeight);
    let raf = 0;
    let running = false;
    let lastX = -1;
    let lastY = -1;
    let pointerInside = false;
    let painted = false;
    let healIdle = 0;
    let activeId: number | null = null;
    let portrait = portraitQuery.matches;
    let cancelled = false;

    const paintCover = () => {
      if (!coverImg) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      if (portrait) drawPortraitCover(ctx, coverImg, w, h);
      else drawCover(ctx, coverImg, w, h);
      painted = false;
      healIdle = 0;
    };

    const resize = () => {
      const rect = root.getBoundingClientRect();
      const nextW = Math.round(rect.width || window.innerWidth);
      const nextH = Math.round(rect.height || window.innerHeight);
      const nextDpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const nextPortrait = portraitQuery.matches;
      if (
        coverImg &&
        nextW === w &&
        nextH === h &&
        nextDpr === dpr &&
        nextPortrait === portrait
      ) {
        return;
      }
      portrait = nextPortrait;
      dpr = nextDpr;
      w = nextW;
      h = nextH;
      brushRadius = coarseBrushRadius(w, h);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      paintCover();
    };

    const toLocal = (clientX: number, clientY: number) => {
      const rect = root.getBoundingClientRect();
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

    const strokeTo = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.globalAlpha = 1;

      if (lastX < 0 || lastY < 0) {
        paintBrush(ctx, x, y, brushRadius, BRUSH_ALPHA);
      } else {
        const dx = x - lastX;
        const dy = y - lastY;
        const dist = Math.hypot(dx, dy);
        const steps = Math.max(1, Math.ceil(dist / STEP));
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          paintBrush(
            ctx,
            lastX + dx * t,
            lastY + dy * t,
            brushRadius,
            BRUSH_ALPHA * 0.85,
          );
        }
      }

      lastX = x;
      lastY = y;
      painted = true;
      healIdle = 0;
      kick();
    };

    const tick = () => {
      if (!coverImg) {
        running = false;
        return;
      }

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = HEAL_RATE;
      if (portrait) drawPortraitCover(ctx, coverImg, w, h);
      else drawCover(ctx, coverImg, w, h);
      ctx.globalAlpha = 1;

      if (pointerInside) {
        healIdle = 0;
        raf = requestAnimationFrame(tick);
        return;
      }

      if (painted) {
        healIdle += 1;
        if (healIdle < HEAL_COOLDOWN) {
          raf = requestAnimationFrame(tick);
          return;
        }
        paintCover();
      }

      running = false;
    };

    const onTouchStart = (event: TouchEvent) => {
      if (activeId !== null) return;
      const touch = event.changedTouches[0];
      if (!touch) return;
      activeId = touch.identifier;
      pointerInside = true;
      const point = toLocal(touch.clientX, touch.clientY);
      strokeTo(point.x, point.y);
    };

    const onTouchMove = (event: TouchEvent) => {
      for (let i = 0; i < event.changedTouches.length; i++) {
        const touch = event.changedTouches[i];
        if (touch.identifier !== activeId) continue;
        pointerInside = true;
        const point = toLocal(touch.clientX, touch.clientY);
        strokeTo(point.x, point.y);
      }
    };

    const onTouchEnd = (event: TouchEvent) => {
      for (let i = 0; i < event.changedTouches.length; i++) {
        if (event.changedTouches[i].identifier !== activeId) continue;
        activeId = null;
        pointerInside = false;
        lastX = -1;
        lastY = -1;
        if (painted) kick();
      }
    };

    void Promise.all([
      loadImage(coverImage.large),
      loadImage(revealImage.large),
    ]).then(([cover]) => {
      if (cancelled) return;
      coverImg = cover;
      resize();
      root.dataset.ready = "true";
      window.addEventListener("resize", resize, { passive: true });
      portraitQuery.addEventListener("change", resize);
      window.visualViewport?.addEventListener("resize", resize);
      window.visualViewport?.addEventListener("scroll", resize);
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchmove", onTouchMove, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
      window.addEventListener("touchcancel", onTouchEnd, { passive: true });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      portraitQuery.removeEventListener("change", resize);
      window.visualViewport?.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("scroll", resize);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [revealImage]);

  useEffect(() => {
    if (!revealImage) return;
    if (!prefersFinePointer() || prefersReducedMotion()) return;

    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let coverImg: HTMLImageElement | null = null;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let running = false;
    let lastX = -1;
    let lastY = -1;
    let pointerInside = false;
    let painted = false;
    let healIdle = 0;
    let cancelled = false;

    const fillCover = () => {
      if (!coverImg) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;
      drawCover(ctx, coverImg, w, h);
      painted = false;
      healIdle = 0;
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      fillCover();
    };

    const kick = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const strokeTo = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.globalAlpha = 1;

      if (lastX < 0 || lastY < 0) {
        paintBrush(ctx, x, y, BRUSH_RADIUS, BRUSH_ALPHA);
      } else {
        const dx = x - lastX;
        const dy = y - lastY;
        const dist = Math.hypot(dx, dy);
        const steps = Math.max(1, Math.ceil(dist / STEP));
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          paintBrush(
            ctx,
            lastX + dx * t,
            lastY + dy * t,
            BRUSH_RADIUS,
            BRUSH_ALPHA * 0.85,
          );
        }
      }

      lastX = x;
      lastY = y;
      painted = true;
      healIdle = 0;
      kick();
    };

    const tick = () => {
      if (!coverImg) {
        running = false;
        return;
      }

      // Softly restore the original background so painted trails fade.
      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = HEAL_RATE;
      drawCover(ctx, coverImg, w, h);
      ctx.globalAlpha = 1;

      if (pointerInside) {
        healIdle = 0;
        raf = requestAnimationFrame(tick);
        return;
      }

      if (painted) {
        healIdle += 1;
        if (healIdle < HEAL_COOLDOWN) {
          raf = requestAnimationFrame(tick);
          return;
        }
        fillCover();
      }

      running = false;
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointerInside = true;
      strokeTo(event.clientX, event.clientY);
    };

    const onLeave = () => {
      pointerInside = false;
      lastX = -1;
      lastY = -1;
      if (painted) kick();
    };

    void Promise.all([
      loadImage(coverImage.large),
      loadImage(revealImage.large),
    ]).then(([cover]) => {
      if (cancelled) return;
      coverImg = cover;
      resize();
      root.dataset.ready = "true";
      window.addEventListener("resize", resize, { passive: true });
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [revealImage]);

  return (
    <div ref={rootRef} className="about-reveal" aria-hidden="true">
      {revealImage ? (
        <img
          className="about-reveal__image"
          src={revealImage.large}
          alt=""
          draggable={false}
          decoding="async"
        />
      ) : null}
      <canvas ref={canvasRef} className="about-reveal__canvas" />
    </div>
  );
}
