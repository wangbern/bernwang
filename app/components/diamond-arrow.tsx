type SiteArrowDirection = "left" | "right" | "up" | "down";

const ROTATION: Record<SiteArrowDirection, number> = {
  right: 0,
  down: 90,
  left: 180,
  up: 270,
};

type SiteArrowProps = {
  direction: SiteArrowDirection;
  className?: string;
};

/** Concave-base delta arrow — cursor-like, readable as a chevron. */
export function DiamondArrow({ direction, className }: SiteArrowProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={["site-arrow", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      <g transform={`rotate(${ROTATION[direction]} 12 12)`}>
        <path d="M3.2 2.4 L21.6 12 L3.2 21.6 Q10.4 12 3.2 2.4 Z" />
      </g>
    </svg>
  );
}
