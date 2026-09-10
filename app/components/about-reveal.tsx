import { useEffect, useRef } from "react";
import coverImageUrl from "~/assets/IMG_5645.jpeg";
import revealImageUrl from "~/assets/high res for interactive.png";

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

  useEffect(() => {
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
      loadImage(coverImageUrl),
      loadImage(revealImageUrl),
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
  }, []);

  return (
    <div ref={rootRef} className="about-reveal" aria-hidden="true">
      <img
        className="about-reveal__image"
        src={revealImageUrl}
        alt=""
        draggable={false}
      />
      <canvas ref={canvasRef} className="about-reveal__canvas" />
    </div>
  );
}
