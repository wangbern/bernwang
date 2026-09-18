import { useCallback, useEffect, useState } from "react";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";

type ProjectGalleryProps = {
  images: string[];
  className?: string;
};

/** Cross-fading image row with centered dots and no arrows. */
export function ProjectGallery({ images, className }: ProjectGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelected(emblaApi.selectedSnap());
    onSelect();
    emblaApi.on("select", onSelect).on("reinit", onSelect);

    return () => {
      emblaApi.off("select", onSelect).off("reinit", onSelect);
    };
  }, [emblaApi]);

  const goTo = useCallback((index: number) => emblaApi?.goTo(index), [emblaApi]);

  return (
    <div className={`project-gallery ${className ?? ""}`}>
      <div className="project-gallery__viewport" ref={emblaRef}>
        <div className="project-gallery__container">
          {images.map((image) => (
            <div className="project-gallery__slide" key={image}>
              <img src={image} alt="" className="project-gallery__image" />
            </div>
          ))}
        </div>
      </div>

      <div className="project-gallery__dots">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={`project-gallery__dot ${
              index === selected ? "project-gallery__dot--active" : ""
            }`}
            onClick={() => goTo(index)}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === selected}
          />
        ))}
      </div>
    </div>
  );
}
