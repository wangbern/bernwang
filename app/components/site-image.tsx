import type { ResponsiveImage } from "~/lib/responsive-image";

type SiteImageProps = {
  image: ResponsiveImage;
  alt?: string;
  /** How wide the image will paint. Required whenever `srcSet` should be used. */
  sizes: string;
  /** Paint immediately. Use for the one image that should lead the page. */
  priority?: boolean;
  className?: string;
  draggable?: boolean;
};

export function SiteImage({
  image,
  alt = "",
  sizes,
  priority = false,
  className,
  draggable,
}: SiteImageProps) {
  const responsive = Boolean(image.srcSet);

  return (
    <img
      src={image.src}
      srcSet={responsive ? image.srcSet : undefined}
      sizes={responsive ? sizes : undefined}
      alt={alt}
      className={className}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      draggable={draggable}
    />
  );
}
