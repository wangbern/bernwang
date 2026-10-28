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

/** Close mark drawn in the same concave, sharp-tipped style as DiamondArrow. */
export function DiamondX({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={["site-arrow", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    >
      <path d="M3 3 Q8.6 6.6 12 9.4 Q15.4 6.6 21 3 Q17.4 8.6 14.6 12 Q17.4 15.4 21 21 Q15.4 17.4 12 14.6 Q8.6 17.4 3 21 Q6.6 15.4 9.4 12 Q6.6 8.6 3 3 Z" />
    </svg>
  );
}
