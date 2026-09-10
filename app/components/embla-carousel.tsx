import { useEffect, useRef, useState } from "react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { DiamondArrow } from "~/components/diamond-arrow";
import { ProjectTitleCard } from "~/components/project-title-card";

export type ProjectSlide = {
  image: string;
  title: string;
  description: string;
};

type EmblaCarouselProps = {
  slides: ProjectSlide[];
  options?: EmblaOptionsType;
};

function scrollToProgress(
  emblaApi: EmblaCarouselType,
  progress: number,
  instant = false,
) {
  const engine = emblaApi.internalEngine();
  const clamped = Math.min(1, Math.max(0, progress));
  const destination = engine.limit.max - clamped * engine.limit.length;

  engine.scrollBody.useBaseFriction().useDuration(instant ? 0 : 35);
  engine.target.set(destination);
  if (instant) {
    engine.location.set(destination);
    engine.previousLocation.set(destination);
  }
  engine.animation.start();
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
  const prevMotionRef = useRef<HTMLSpanElement>(null);
  const nextMotionRef = useRef<HTMLSpanElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    let rafId = 0;
    let currentProgress = middleProgress;
    targetProgressRef.current = middleProgress;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Jump to middle immediately — no intro slide from the left
    emblaApi.goTo(middleIndex, true);
    scrollToProgress(emblaApi, middleProgress, true);
    setReady(true);

    const tick = (timeMs: number) => {
      currentProgress += (targetProgressRef.current - currentProgress) * 0.1;
      scrollToProgress(emblaApi, currentProgress);

      applySideMotion(
        prevMotionRef.current,
        sideIntensity(currentProgress, "prev"),
        timeMs,
        reduceMotion,
      );
      applySideMotion(
        nextMotionRef.current,
        sideIntensity(currentProgress, "next"),
        timeMs,
        reduceMotion,
      );

      rafId = requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const { left, width } = emblaApi.rootNode().getBoundingClientRect();
      if (width <= 0) return;

      // Map embla left edge → start, right edge → end (full range inside the carousel)
      targetProgressRef.current = Math.min(
        1,
        Math.max(0, (event.clientX - left) / width),
      );
    };

    rafId = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onPointerMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [emblaApi, middleIndex, middleProgress]);

  const stepProgress = (direction: -1 | 1) => {
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
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.title}>
              <ProjectTitleCard
                image={slide.image}
                title={slide.title}
                description={slide.description}
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
