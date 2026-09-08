import { useEffect, useRef } from "react";

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

function drawCursor(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  pop: number,
  hue: number,
) {
  const s = 1 + pop * 0.55;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);

  ctx.globalAlpha = 0.55;
  ctx.strokeStyle = `hsla(${hue}, 65%, 78%, 1)`;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(0, -7);
  ctx.lineTo(0, 7);
  ctx.moveTo(-7, 0);
  ctx.lineTo(7, 0);
  ctx.stroke();

  ctx.globalAlpha = 0.28;
  ctx.fillStyle = `hsla(${hue + 40}, 75%, 75%, 1)`;
  ctx.beginPath();
  ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function CursorFx() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!prefersFinePointer() || prefersReducedMotion()) return;

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
    let visible = false;
    let raf = 0;
    let running = false;
    let popT = 0;
    let cursorHue = 300;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const kick = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
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

    const onClick = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const x = event.clientX;
      const y = event.clientY;
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
      if (visible) drawCursor(ctx, mouseX, mouseY, popT, cursorHue);

      if (alive > 0 || visible || popT > 0) {
        raf = requestAnimationFrame(tick);
      } else {
        running = false;
        lastTs = 0;
        ctx.clearRect(0, 0, w, h);
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onClick, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onClick);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="cursor-fx" aria-hidden="true" />
  );
}
