/** Build-time responsive image. `src` is the shared default (safe for view-transition morphs). */
export type ResponsiveImage = {
  src: string;
  /** Largest generated file, used to sharpen heroes and full-bleed backgrounds. */
  large: string;
  srcSet: string;
  width: number;
  height: number;
};

export function isResponsiveImage(value: unknown): value is ResponsiveImage {
  if (!value || typeof value !== "object") return false;
  const image = value as Partial<ResponsiveImage>;
  return typeof image.src === "string" && image.src.length > 0;
}

export function asResponsiveImage(value: unknown, label: string): ResponsiveImage {
  if (isResponsiveImage(value)) {
    return {
      src: value.src,
      large: value.large || value.src,
      srcSet: value.srcSet ?? "",
      width: value.width ?? 0,
      height: value.height ?? 0,
    };
  }

  if (typeof value === "string" && value.length > 0) {
    return { src: value, large: value, srcSet: "", width: 0, height: 0 };
  }

  throw new Error(
    `Project image not found: "${label}". Put the file in content/assets/ and reference just the filename.`,
  );
}
