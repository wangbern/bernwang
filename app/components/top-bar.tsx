import { NavLink, useLocation } from "react-router";
import { prepareChromeTransition } from "~/lib/top-bar-transition";
import { PROJECT_TAGS, tagToSlug, type ProjectTag } from "~/lib/projects";

export type TopBarLink = {
  label: string;
  to: string;
};

type TopBarProps = {
  leftLinks?: TopBarLink[];
  rightLinks?: TopBarLink[];
  showTitle?: boolean;
};

const DEFAULT_LEFT: TopBarLink[] = [
  { label: "home", to: "/" },
  { label: "about bernice", to: "/about-me" },
];

const DEFAULT_RIGHT: TopBarLink[] = PROJECT_TAGS.map((tag: ProjectTag) => ({
  label: tag,
  to: `/tag/${tagToSlug(tag)}`,
}));

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    "site-top-bar__link",
    isActive
      ? "pointer-events-none text-ink/35"
      : "text-ink hover:opacity-60",
  ].join(" ");

export function TopBar({
  leftLinks = DEFAULT_LEFT,
  rightLinks = DEFAULT_RIGHT,
  showTitle = true,
}: TopBarProps) {
  const location = useLocation();

  const prepareTopBarTransition = (to: string) => {
    prepareChromeTransition(location.pathname, to);
  };

  return (
    <nav className="site-top-bar sticky top-0 z-20 backdrop-blur">
      <div className="site-top-bar__group site-top-bar__group--start">
        {leftLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === "/"}
            viewTransition
            className={linkClassName}
            onClick={() => prepareTopBarTransition(link.to)}
          >
            {link.label === "about bernice" ? (
              <>
                about{" "}
                <span className="text-[var(--color-heading)]">bernice</span>
              </>
            ) : (
              link.label
            )}
          </NavLink>
        ))}
      </div>
      {showTitle ? (
        <p className="site-top-bar__center" />
      ) : (
        <span className="site-top-bar__center" />
      )}
      <div className="site-top-bar__group site-top-bar__group--end">
        {rightLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            viewTransition
            className={linkClassName}
            onClick={() => prepareTopBarTransition(link.to)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
