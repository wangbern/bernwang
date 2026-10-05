import { Link, useLocation, useViewTransitionState } from "react-router";
import {
  getProjectMorphDirection,
  isActiveProjectMorph,
  isProjectMorphEnabled,
  prepareProjectMorph,
  projectHref,
} from "~/lib/project-morph";
import type { ResponsiveImage } from "~/lib/responsive-image";
import { prepareChromeTransition } from "~/lib/top-bar-transition";

type ProjectTitleCardProps = {
  image: ResponsiveImage;
  title: string;
  description: string;
  /** `high` is the visible center card. `eager` warms the neighbors. */
  preload?: "high" | "eager" | "lazy";
};

export function ProjectTitleCard({
  image,
  title,
  description,
  preload = "lazy",
}: ProjectTitleCardProps) {
  const location = useLocation();
  const to = projectHref(title);
  const entering = useViewTransitionState(to);
  // Claim shared names on enter (to this project) and on exit (returning here).
  const morphing =
    isActiveProjectMorph(title) &&
    isProjectMorphEnabled() &&
    (entering || getProjectMorphDirection() === "exit");

  return (
    <Link
      to={to}
      viewTransition
      className="project-title-card"
      onClick={() => {
        prepareProjectMorph(title, "enter");
        prepareChromeTransition(location.pathname, to);
      }}
    >
      <span
        className={[
          "project-title-card__media",
          morphing ? "project-morph-frame" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <img
          src={image.src}
          alt=""
          className="project-title-card__image"
          draggable={false}
          decoding="async"
          loading={preload === "lazy" ? "lazy" : "eager"}
          fetchPriority={preload === "high" ? "high" : "auto"}
        />
        <span className="project-title-card__veil" aria-hidden />
      </span>
      <h2
        className={[
          "project-title-card__title",
          morphing ? "project-morph-title" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {title}
      </h2>
      <p
        className={[
          "project-title-card__description",
          morphing ? "project-morph-description" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {description}
      </p>
    </Link>
  );
}
