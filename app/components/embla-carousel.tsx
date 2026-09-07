import { useEffect, useRef } from "react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
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

function scrollToProgress(emblaApi: EmblaCarouselType, progress: number) {
  const engine = emblaApi.internalEngine();
  const clamped = Math.min(1, Math.max(0, progress));
  const destination = engine.limit.max - clamped * engine.limit.length;

  engine.scrollBody.useBaseFriction().useDuration(35);
  engine.target.set(destination);
  engine.animation.start();
}

export function EmblaCarousel({ slides, options }: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const targetProgressRef = useRef(0);

  useEffect(() => {
    if (!emblaApi) return;

    let rafId = 0;
    let currentProgress = emblaApi.scrollProgress();
    targetProgressRef.current = currentProgress;

    const tick = () => {
      currentProgress += (targetProgressRef.current - currentProgress) * 0.1;
      scrollToProgress(emblaApi, currentProgress);
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
  }, [emblaApi]);

  const stepProgress = (direction: -1 | 1) => {
    const step = 1 / Math.max(1, slides.length - 1);
    targetProgressRef.current = Math.min(
      1,
      Math.max(0, targetProgressRef.current + direction * step),
    );
  };

  return (
    <section className="embla">
      <button
        type="button"
        className="embla__side embla__side--prev"
        onClick={() => stepProgress(-1)}
        aria-label="Physical"
      >
        <span className="embla__side-label">Physical</span>
        <svg
          className="embla__side-arrow"
          viewBox="0 0 12 16"
          fill="none"
          aria-hidden
        >
          <path
            d="M10 2 L2 8 L10 14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
        <span className="embla__side-label">Digital</span>
        <svg
          className="embla__side-arrow"
          viewBox="0 0 12 16"
          fill="none"
          aria-hidden
        >
          <path
            d="M2 2 L10 8 L2 14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
