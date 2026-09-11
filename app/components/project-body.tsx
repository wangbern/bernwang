import type { CSSProperties, MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { DiamondArrow } from "~/components/diamond-arrow";
import type { ProjectSection } from "~/lib/project-body";
import { prepareChromeTransition } from "~/lib/top-bar-transition";

export type SectionInlineMeta = {
  collaboration?: string;
  roles?: string;
  tools?: string;
  playUrl?: string;
  playLabel?: string;
  hasLink?: boolean;
};

type ProjectBodyProps = {
  sections: ProjectSection[];
  className?: string;
  /** When set, section titles become links (e.g. deep links from system lists). */
  getTitleHref?: (section: ProjectSection, index: number) => string | undefined;
  /** Repeat a compact credits table (and play control) on each section. */
  inlineMeta?: SectionInlineMeta;
};

/** Markdown `#system` tags are plain <a>s — route them through view transitions. */
function useProseLinkNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (event: MouseEvent<HTMLElement>) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const anchor = (event.target as HTMLElement | null)?.closest("a");
    if (!(anchor instanceof HTMLAnchorElement)) return;
    if (anchor.target && anchor.target !== "_self") return;
    if (anchor.hasAttribute("download")) return;

    const url = new URL(anchor.href, window.location.origin);
    if (url.origin !== window.location.origin) return;

    event.preventDefault();
    prepareChromeTransition(location.pathname, url.pathname);
    navigate(`${url.pathname}${url.search}${url.hash}`, { viewTransition: true });
  };
}

function resolveInlineMeta(
  section: ProjectSection,
  fallback?: SectionInlineMeta,
): SectionInlineMeta {
  return {
    collaboration: section.collaboration || fallback?.collaboration || "",
    roles: section.roles || fallback?.roles || "",
    tools: section.tools || fallback?.tools || "",
    playUrl: section.playUrl || fallback?.playUrl || "",
    playLabel: section.playLabel || fallback?.playLabel || "play",
    hasLink: fallback?.hasLink ?? true,
  };
}

function SectionMetaTable({
  roles,
  tools,
  collaboration,
}: Pick<SectionInlineMeta, "roles" | "tools" | "collaboration">) {
  const rows = [
    { label: "roles", value: roles },
    { label: "tools", value: tools },
    { label: "collaboration", value: collaboration },
  ].filter((row) => row.value);

  if (rows.length === 0) return null;

  return (
    <table className="project-meta__table project-meta__table--compact">
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <td>{row.label}</td>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function SectionPlayLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="project-section__play"
      style={
        {
          "--play-chars": Math.max(label.length, 1),
        } as CSSProperties
      }
    >
      <span className="project-section__play-inner">
        <span className="project-section__play-label">{label}</span>
        <DiamondArrow direction="right" />
      </span>
    </a>
  );
}

export function ProjectBody({
  sections,
  className,
  getTitleHref,
  inlineMeta,
}: ProjectBodyProps) {
  const location = useLocation();
  const onProseClick = useProseLinkNavigation();

  if (sections.length === 0) return null;

  return (
    <div className={className ?? "project-body mt-10 space-y-25"}>
      {sections.map((section, index) => {
        const hasImage = Boolean(section.image);
        const imageFirst = section.side === "left";
        const titleHref = getTitleHref?.(section, index);
        const meta = inlineMeta ? resolveInlineMeta(section, inlineMeta) : undefined;
        const table = meta ? (
          <SectionMetaTable
            roles={meta.roles}
            tools={meta.tools}
            collaboration={meta.collaboration}
          />
        ) : null;

        const title = section.title ? (
          titleHref ? (
            <h2 className="text-3xl font-semibold text-heading">
              <Link
                to={titleHref}
                viewTransition
                className="hover:underline hover:underline-offset-4"
                onClick={() =>
                  prepareChromeTransition(
                    location.pathname,
                    new URL(titleHref, window.location.origin).pathname,
                  )
                }
              >
                {section.title}
              </Link>
            </h2>
          ) : (
            <h2 className="text-3xl font-semibold text-heading">
              {section.title}
            </h2>
          )
        ) : null;

        const play =
          meta?.hasLink && meta.playUrl ? (
            <SectionPlayLink href={meta.playUrl} label={meta.playLabel || "play"} />
          ) : null;

        const heading =
          title || play ? (
            <div className="project-section__heading">
              {title}
              {play}
            </div>
          ) : null;

        const text = (
          <div className="min-w-0 flex-1">
            {heading}
            {table}
            {section.textHtml ? (
              <div
                className={
                  heading || table
                    ? "project-body__prose mt-4 space-y-4 text-lg leading-relaxed text-ink"
                    : "project-body__prose space-y-4 text-lg leading-relaxed text-ink"
                }
                onClick={onProseClick}
                dangerouslySetInnerHTML={{ __html: section.textHtml }}
              />
            ) : null}
          </div>
        );

        if (!hasImage) {
          return (
            <section
              key={section.id}
              id={section.id}
              className="project-section mx-auto max-w-2xl scroll-mt-24"
            >
              {text}
            </section>
          );
        }

        return (
          <section
            key={section.id}
            id={section.id}
            className={`project-section flex scroll-mt-24 flex-col items-center gap-8 md:items-start md:gap-12 ${
              imageFirst ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <img
              src={section.image}
              alt=""
              className="w-full max-w-xl shrink-0 object-contain md:w-[min(48%,28rem)]"
            />
            {text}
          </section>
        );
      })}
    </div>
  );
}
