import { useEffect, useRef, useState } from "react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DiamondArrow } from "~/components/diamond-arrow";
import { ProjectTitleCard } from "~/components/project-title-card";
import type { ResponsiveImage } from "~/lib/responsive-image";

export type ProjectSlide = {
  image: ResponsiveImage;
  title: string;
  description: string;
};

type EmblaCarouselProps = {
  slides: ProjectSlide[];
  options?: EmblaOptionsType;
};

function scrollToProgress(emblaApi: EmblaCarouselType, progress: number) {
  const engine = emblaApi.internalEngine();
  const clamped = Math.min(1, Math.max(0, progress));
  const destination = engine.limit.max - clamped * engine.limit.length;
  // Duration 0 clears scroll velocity so the strip cannot spring past the pointer.
  engine.scrollBody.useDuration(0);
  engine.target.set(destination);
  engine.location.set(destination);
  engine.previousLocation.set(destination);
  engine.animation.start();
}

function readProgress(emblaApi: EmblaCarouselType) {
  const { limit, location } = emblaApi.internalEngine();
  if (limit.length === 0) return 0;
  return Math.min(1, Math.max(0, (limit.max - location.get()) / limit.length));
}

const DIRECTION_DEADZONE_PX = 3;

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function settleFade(speed: number) {
  const t = Math.min(1, Math.max(0, (speed - 0.02) / 0.2));
  const calm = 1 - t;
  return calm * calm;
}

function progressPlacingCard(
  emblaApi: EmblaCarouselType,
  card: HTMLElement,
  clientX: number,
) {
  const { limit, location } = emblaApi.internalEngine();
  if (limit.length === 0) return 0;
  const rect = card.getBoundingClientRect();
  const center = rect.left + rect.width / 2;
  const nextLocation = location.get() + (clientX - center);
  return clamp01((limit.max - nextLocation) / limit.length);
}

function endCardAnchorX(
  side: "start" | "end",
  root: { left: number; right: number; width: number },
  cardWidth: number,
) {
  const middle = root.left + root.width / 2;
  const inset = 24;
  if (side === "start") {
    return Math.min(root.left + inset + cardWidth / 2, middle - cardWidth * 0.4);
  }
  return Math.max(root.right - inset - cardWidth / 2, middle + cardWidth * 0.4);
}

function predictCardIndex(
  cards: HTMLElement[],
  aimX: number,
  currentIndex: number,
) {
  if (cards.length === 0) return 0;

  const centers = cards.map((card) => {
    const rect = card.getBoundingClientRect();
    return { center: rect.left + rect.width / 2, width: rect.width };
  });
  let best = 0;
  let bestDist = Infinity;
  centers.forEach((item, index) => {
    const dist = Math.abs(item.center - aimX);
    if (dist < bestDist) {
      bestDist = dist;
      best = index;
    }
  });

  const current = centers[currentIndex];
  if (!current || best === currentIndex) return best;
  const currentDist = Math.abs(current.center - aimX);
  if (currentDist - bestDist < current.width * 0.32) return currentIndex;
  return best;
}

function sideIntensity(progress: number, side: "prev" | "next") {
  // 0 at center → 1 at that side's extreme
  return side === "prev"
    ? Math.max(0, (0.5 - progress) * 2)
    : Math.max(0, (progress - 0.5) * 2);
}

function applySideMotion(
  el: HTMLElement | null,
  intensity: number,
  timeMs: number,
  reduceMotion: boolean,
) {
  if (!el) return;

  // Scale builds earlier and reads clearly; ease slightly so growth feels natural
  const scale = 1 + Math.pow(intensity, 0.85) * 0.39;
  if (reduceMotion || intensity <= 0.001) {
    el.style.transform = intensity > 0 ? `scale(${scale})` : "";
    return;
  }

  // Jitter stays nearly quiet until the very end, then snaps on
  const amp = Math.pow(intensity, 5.5) * 0.2;
  const x =
    Math.sin(timeMs * 0.055) * amp * 2.4 +
    Math.sin(timeMs * 0.113) * amp * 1.2;
  const y =
    Math.cos(timeMs * 0.067) * amp * 1.8 +
    Math.sin(timeMs * 0.091) * amp * 0.9;
  const rot =
    Math.sin(timeMs * 0.079) * amp * 2 +
    Math.cos(timeMs * 0.041) * amp * 1;

  el.style.transform = `scale(${scale}) translate(${x}px, ${y}px) rotate(${rot}deg)`;
}

export function EmblaCarousel({ slides, options }: EmblaCarouselProps) {
  const middleIndex =
    slides.length <= 1 ? 0 : Math.floor((slides.length - 1) / 2);
  const middleProgress =
    slides.length <= 1 ? 0 : middleIndex / (slides.length - 1);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    startSnap: middleIndex,
  });
  const targetProgressRef = useRef(middleProgress);
  const turnBlendRef = useRef(1);
  const inputModeRef = useRef<"pointer" | "arrow">("pointer");
  const aimLockRef = useRef<number | null>(null);
  const endHoldRef = useRef<null | "start" | "end">(null);
  const shownAimRef = useRef<number | null>(null);
  const prevMotionRef = useRef<HTMLSpanElement>(null);
  const nextMotionRef = useRef<HTMLSpanElement>(null);
  const [ready, setReady] = useState(false);
  const [aimedIndex, setAimedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    let rafId = 0;
    let currentProgress = middleProgress;
    // While a finger is dragging, Embla owns the scroll. The loop below
    // would otherwise pull the carousel back to the mouse/arrow target.
    let touchDrag = false;
    let lastMouseX: number | null = null;
    let mouseDirection = 0;
    let pendingDx = 0;
    let pointerX: number | null = null;
    let pointerY: number | null = null;
    let velocityX = 0;
    let lastMoveAt = 0;
    let predictedIndex = middleIndex;
    let lastLinear: number | null = null;
    let settleTarget: number | null = null;
    let desiredProgress = middleProgress;
    let lastTickMs = 0;
    targetProgressRef.current = middleProgress;
    turnBlendRef.current = 1;
    aimLockRef.current = null;
    endHoldRef.current = null;
    inputModeRef.current = "pointer";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Jump to middle immediately — no intro slide from the left
    emblaApi.goTo(middleIndex, true);
    scrollToProgress(emblaApi, middleProgress);
    setReady(true);

    const followTouch = () => {
      const progress = readProgress(emblaApi);
      currentProgress = progress;
      desiredProgress = progress;
      targetProgressRef.current = progress;
      lastLinear = null;
      settleTarget = null;
    };

    const onPointerDown = (
      _api: EmblaCarouselType,
      event: { detail: Event },
    ) => {
      if (event.detail.type.startsWith("touch")) touchDrag = true;
    };

    const onSettle = () => {
      if (!touchDrag) return;
      followTouch();
      touchDrag = false;
    };

    const showAimed = (index: number | null) => {
      if (shownAimRef.current === index) return;
      shownAimRef.current = index;
      setAimedIndex(index);
    };

    const updateAim = () => {
      if (pointerX === null || pointerY === null) return;

      const now = performance.now();
      if (now - lastMoveAt > 40) velocityX *= 0.82;

      const root = emblaApi.rootNode().getBoundingClientRect();
      if (root.width <= 0) return;

      const inBand =
        pointerY >= root.top - 28 && pointerY <= root.bottom + 36;
      const cards = emblaApi
        .slideNodes()
        .map((slide) => slide.querySelector<HTMLElement>(".project-title-card"))
        .filter((card): card is HTMLElement => card !== null);

      if (!inBand || cards.length === 0) {
        aimLockRef.current = null;
        endHoldRef.current = null;
        settleTarget = null;
        showAimed(null);
        return;
      }

      const cardWidth = cards[predictedIndex]?.getBoundingClientRect().width || 1;
      const edgeSpan = Math.min(root.width * 0.2, cardWidth * 0.65);
      if (pointerX <= root.left + edgeSpan) endHoldRef.current = "start";
      else if (pointerX >= root.right - edgeSpan) endHoldRef.current = "end";
      else if (endHoldRef.current) {
        const endIndex = endHoldRef.current === "start" ? 0 : cards.length - 1;
        const endRect = cards[endIndex].getBoundingClientRect();
        const overEnd =
          pointerX >= endRect.left - 20 &&
          pointerX <= endRect.right + 20 &&
          pointerY >= endRect.top - 24 &&
          pointerY <= endRect.bottom + 28;
        if (!overEnd) endHoldRef.current = null;
      }

      if (endHoldRef.current) {
        const endIndex = endHoldRef.current === "start" ? 0 : cards.length - 1;
        const endRect = cards[endIndex].getBoundingClientRect();
        const anchor = endCardAnchorX(
          endHoldRef.current,
          root,
          endRect.width || cardWidth,
        );
        predictedIndex = endIndex;
        showAimed(endIndex);
        settleTarget = progressPlacingCard(emblaApi, cards[endIndex], anchor);
        return;
      }

      const leadCap = cardWidth * 0.18;
      const lead = Math.min(leadCap, Math.max(-leadCap, velocityX * 50));
      predictedIndex = predictCardIndex(cards, pointerX + lead, predictedIndex);
      showAimed(predictedIndex);
      settleTarget = progressPlacingCard(emblaApi, cards[predictedIndex], pointerX);
    };

    const glideProgress = (dt: number) => {
      const gap = desiredProgress - currentProgress;
      const alpha = 1 - Math.exp(-dt / 0.26);
      currentProgress += gap * alpha;
    };

    const tick = (timeMs: number) => {
      if (touchDrag) {
        aimLockRef.current = null;
        endHoldRef.current = null;
        showAimed(null);
        followTouch();
      } else if (
        inputModeRef.current === "pointer" &&
        pointerX !== null
      ) {
        updateAim();
        const root = emblaApi.rootNode().getBoundingClientRect();
        if (root.width > 0) {
          const linear = clamp01((pointerX - root.left) / root.width);
          if (lastLinear === null) {
            lastLinear = linear;
            desiredProgress = currentProgress;
          }
          const delta = linear - lastLinear;
          lastLinear = linear;
          desiredProgress = clamp01(desiredProgress + delta);
        }
        const dt = Math.min(
          0.05,
          lastTickMs > 0 ? (timeMs - lastTickMs) / 1000 : 0.016,
        );
        if (settleTarget !== null) {
          const fade = settleFade(Math.abs(velocityX));
          if (fade > 0) {
            // About 1.4s to settle. The guess drifts toward the card; it does not snap.
            const alpha = (1 - Math.exp(-dt / 1.4)) * fade;
            desiredProgress += (settleTarget - desiredProgress) * alpha;
            desiredProgress = clamp01(desiredProgress);
          }
        }
        glideProgress(dt);
        scrollToProgress(emblaApi, currentProgress);
      } else {
        lastLinear = null;
        settleTarget = null;
        desiredProgress = targetProgressRef.current;
        const dt = Math.min(
          0.05,
          lastTickMs > 0 ? (timeMs - lastTickMs) / 1000 : 0.016,
        );
        glideProgress(dt);
        scrollToProgress(emblaApi, currentProgress);
      }
      lastTickMs = timeMs;

      // Shake still follows the pointer lean, not the card scroll. End cards
      // stop short of the middle, which would otherwise quiet Physical/Digital.
      const root = emblaApi.rootNode().getBoundingClientRect();
      const shakeProgress =
        inputModeRef.current === "pointer" &&
        pointerX !== null &&
        root.width > 0
          ? clamp01((pointerX - root.left) / root.width)
          : currentProgress;
      applySideMotion(
        prevMotionRef.current,
        sideIntensity(shakeProgress, "prev"),
        timeMs,
        reduceMotion,
      );
      applySideMotion(
        nextMotionRef.current,
        sideIntensity(shakeProgress, "next"),
        timeMs,
        reduceMotion,
      );

      rafId = requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const { left, width } = emblaApi.rootNode().getBoundingClientRect();
      if (width <= 0) return;

      inputModeRef.current = "pointer";
      const now = performance.now();
      if (lastMouseX !== null && lastMoveAt > 0) {
        const dt = now - lastMoveAt;
        if (dt > 0 && dt < 80) {
          const instant = (event.clientX - lastMouseX) / dt;
          velocityX = velocityX * 0.55 + instant * 0.45;
        }
      }
      lastMoveAt = now;
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (lastMouseX !== null) {
        pendingDx += event.clientX - lastMouseX;
        if (Math.abs(pendingDx) >= DIRECTION_DEADZONE_PX) {
          const direction = pendingDx > 0 ? 1 : -1;
          if (mouseDirection !== 0 && direction !== mouseDirection) {
            turnBlendRef.current = 0;
          }
          mouseDirection = direction;
          pendingDx = 0;
        }
      }
      lastMouseX = event.clientX;

      // Map embla left edge → start, right edge → end (full range inside the carousel)
      targetProgressRef.current = Math.min(
        1,
        Math.max(0, (event.clientX - left) / width),
      );
    };

    rafId = requestAnimationFrame(tick);
    emblaApi.on("pointerdown", onPointerDown).on("settle", onSettle);
    window.addEventListener("pointermove", onPointerMove);

    return () => {
      cancelAnimationFrame(rafId);
      emblaApi.off("pointerdown", onPointerDown).off("settle", onSettle);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [emblaApi, middleIndex, middleProgress]);

  const stepProgress = (direction: -1 | 1) => {
    inputModeRef.current = "arrow";
    aimLockRef.current = null;
    endHoldRef.current = null;
    if (shownAimRef.current !== null) {
      shownAimRef.current = null;
      setAimedIndex(null);
    }
    turnBlendRef.current = 1;
    const step = 1 / Math.max(1, slides.length - 1);
    targetProgressRef.current = Math.min(
      1,
      Math.max(0, targetProgressRef.current + direction * step),
    );
  };

  return (
    <section
      className="embla"
      style={{ opacity: ready ? 1 : 0 }}
    >
      <button
        type="button"
        className="embla__side embla__side--prev"
        onClick={() => stepProgress(-1)}
        aria-label="Physical"
      >
        <span className="embla__side-motion" ref={prevMotionRef}>
          <span className="embla__side-label">Physical</span>
          <DiamondArrow direction="left" className="embla__side-arrow" />
        </span>
      </button>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className="embla__slide"
              data-aim={index === aimedIndex ? "true" : undefined}
              key={slide.title}
            >
              <ProjectTitleCard
                image={slide.image}
                title={slide.title}
                description={slide.description}
                preload={
                  index === middleIndex
                    ? "high"
                    : Math.abs(index - middleIndex) <= 1
                      ? "eager"
                      : "lazy"
                }
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="embla__side embla__side--next"
        onClick={() => stepProgress(1)}
        aria-label="Digital"
      >
        <span className="embla__side-motion" ref={nextMotionRef}>
          <span className="embla__side-label">Digital</span>
          <DiamondArrow direction="right" className="embla__side-arrow" />
        </span>
      </button>
    </section>
  );
}
