import { useEffect, useState, type CSSProperties, type PointerEvent } from "react";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { SiteImage } from "~/components/site-image";
import type { ResponsiveImage } from "~/lib/responsive-image";

type ProjectGalleryProps = {
  images: ResponsiveImage[];
  sizes: string;
  className?: string;
  /** Fires with the slide that is actually showing. */
  onActiveIndex?: (index: number) => void;
};

/** How long each image stays before the next gradual crossfade. */
const AUTO_MS = 5200;

/** Cross-fading image row with centered dots and no arrows. */
function neighborIndexes(index: number, count: number) {
  if (count <= 1) return [0];
  return [
    index,
    (index + 1) % count,
    (index - 1 + count) % count,
  ];
}

export function ProjectGallery({
  images,
  sizes,
  className,
  onActiveIndex,
}: ProjectGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 55 },
    [Fade()],
  );
  const [selected, setSelected] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(
    () => new Set(neighborIndexes(0, images.length)),
  );
  const [held, setHeld] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const canAuto = images.length > 1 && !reduceMotion && Boolean(emblaApi);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const next = emblaApi.selectedSnap();
      setSelected(next);
      setLoaded((current) => {
        const merged = new Set(current);
        for (const index of neighborIndexes(next, images.length)) merged.add(index);
        return merged;
      });
    };
    onSelect();
    emblaApi.on("select", onSelect).on("reinit", onSelect);

    return () => {
      emblaApi.off("select", onSelect).off("reinit", onSelect);
    };
  }, [emblaApi, images.length]);

  useEffect(() => {
    onActiveIndex?.(selected);
  }, [onActiveIndex, selected]);

  const holdFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    setHeld(true);
  };

  const releaseFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    setHeld(false);
  };

  return (
    <div
      className={`project-gallery${held ? " project-gallery--held" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{ "--gallery-auto-ms": `${AUTO_MS}ms` } as CSSProperties}
    >
      <div className="project-gallery__viewport" ref={emblaRef}>
        <div className="project-gallery__container">
          {images.map((image, index) => (
            <div className="project-gallery__slide" key={`${image.src}-${index}`}>
              {loaded.has(index) ? (
                <SiteImage
                  image={image}
                  sizes={sizes}
                  priority={false}
                  className="project-gallery__image"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div
        className="project-gallery__dots"
        onPointerEnter={holdFromPointer}
        onPointerLeave={releaseFromPointer}
      >
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            className={`project-gallery__dot ${
              index === selected ? "project-gallery__dot--active" : ""
            }`}
            onClick={() => {
              setLoaded((current) => {
                const merged = new Set(current);
                for (const neighbor of neighborIndexes(index, images.length)) {
                  merged.add(neighbor);
                }
                return merged;
              });
              emblaApi?.goTo(index, true);
            }}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === selected ? "true" : undefined}
          >
            {canAuto && index === selected ? (
              <span
                className="project-gallery__dot-progress"
                onAnimationEnd={(event) => {
                  if (event.target !== event.currentTarget) return;
                  if (event.animationName !== "gallery-dot-fill") return;
                  emblaApi?.goToNext();
                }}
              />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
