import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { DiamondArrow } from "~/components/diamond-arrow";
import { ProjectGallery } from "~/components/project-gallery";
import { SiteImage } from "~/components/site-image";
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

function SectionVideo({
  video,
  title,
  className,
}: {
  video: NonNullable<ProjectSection["video"]>;
  title?: string;
  className: string;
}) {
  return (
    <div className={`project-section__video ${className}`}>
      <iframe
        src={video.embedUrl}
        title={title ?? "Embedded video"}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

function finePointer(): boolean {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function BulletList({
  bullets,
  onClick,
  className,
}: {
  bullets: string[];
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  className?: string;
}) {
  return (
    <ul
      className={["project-section__bullets", className].filter(Boolean).join(" ")}
      onClick={onClick}
    >
      {bullets.map((bullet, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: bullet }} />
      ))}
    </ul>
  );
}

function SectionProse({
  html,
  className,
  onClick,
}: {
  html: string;
  className: string;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}) {
  return (
    <div
      className={className}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function SectionReveal({
  bullets,
  proseHtml,
  proseClassName,
  open,
  pinned,
  onToggle,
  onProseClick,
  onHoverChange,
  spaced = false,
}: {
  bullets: string[];
  proseHtml: string;
  proseClassName: string;
  open: boolean;
  pinned: boolean;
  spaced?: boolean;
  onToggle: () => void;
  onProseClick: (event: MouseEvent<HTMLElement>) => void;
  onHoverChange: (hovered: boolean) => void;
}) {
  const summaryRef = useRef<HTMLDivElement>(null);
  const originalRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const active = open ? originalRef.current : summaryRef.current;
    if (!active) return;

    const apply = () => {
      const next = open ? originalRef.current : summaryRef.current;
      if (!next) return;
      setHeight(next.scrollHeight);
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(active);
    return () => observer.disconnect();
  }, [open, bullets, proseHtml]);

  return (
    <div
      className="project-section__writing"
      onMouseLeave={() => {
        if (finePointer()) onHoverChange(false);
      }}
    >
      <div
        className={spaced ? "project-section__reveal mt-4" : "project-section__reveal"}
        style={height != null ? { height } : undefined}
      >
        <div
          ref={summaryRef}
          className={
            open
              ? "project-section__summary is-hidden"
              : "project-section__summary"
          }
          aria-hidden={open}
          inert={open ? true : undefined}
        >
          <BulletList bullets={bullets} onClick={onProseClick} />
        </div>
        <div
          ref={originalRef}
          className={
            open
              ? "project-section__original is-shown"
              : "project-section__original"
          }
          aria-hidden={!open}
          inert={open ? undefined : true}
        >
          <SectionProse
            html={proseHtml}
            className={proseClassName}
            onClick={onProseClick}
          />
        </div>
      </div>
      <button
        type="button"
        className={
          open && !pinned
            ? "project-section__more is-hidden"
            : "project-section__more"
        }
        aria-expanded={open}
        onMouseEnter={() => {
          if (finePointer()) onHoverChange(true);
        }}
        onClick={(event) => {
          if (finePointer() && event.detail !== 0) return;
          onToggle();
        }}
      >
        read more
      </button>
    </div>
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

function ProjectSectionView({
  section,
  titleHref,
  inlineMeta,
  onProseClick,
}: {
  section: ProjectSection;
  titleHref?: string;
  inlineMeta?: SectionInlineMeta;
  onProseClick: (event: MouseEvent<HTMLElement>) => void;
}) {
  const location = useLocation();
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const open = hovered || pinned;

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
      <h2 className="text-3xl font-semibold text-heading">{section.title}</h2>
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

  const proseClassName =
    "project-body__prose space-y-4 text-lg leading-relaxed text-ink";
  const canReveal = section.reveal && section.bullets.length > 0 && Boolean(section.textHtml);
  const hasText = Boolean(heading || table || section.bullets.length || section.textHtml);
  const stacked = section.side === "full" || !hasText;
  const mediaSizes = stacked
    ? "(min-width: 1024px) 64rem, calc(100vw - 2rem)"
    : "(min-width: 768px) min(48vw, 28rem), calc(100vw - 2rem)";
  const spaced = Boolean(heading || table) && !(stacked && (section.video || section.images || section.image));

  const writing = canReveal ? (
    <SectionReveal
      bullets={section.bullets}
      proseHtml={section.textHtml}
      proseClassName={proseClassName}
      open={open}
      pinned={pinned}
      spaced={spaced}
      onToggle={() => setPinned((value) => !value)}
      onProseClick={onProseClick}
      onHoverChange={setHovered}
    />
  ) : section.bullets.length > 0 ? (
    <BulletList
      bullets={section.bullets}
      onClick={onProseClick}
      className={spaced ? "mt-4" : undefined}
    />
  ) : section.textHtml ? (
    <SectionProse
      html={section.textHtml}
      className={spaced ? `${proseClassName} mt-4` : proseClassName}
      onClick={onProseClick}
    />
  ) : null;

  // Media on its own line when asked for, or when there is no text to sit beside.
  const media = section.video ? (
    <SectionVideo
      video={section.video}
      title={section.title}
      className={stacked ? "w-full" : "w-full shrink-0 md:w-[min(56%,34rem)]"}
    />
  ) : section.images ? (
    <ProjectGallery
      images={section.images}
      sizes={
        stacked
          ? "(min-width: 1024px) 64rem, calc(100vw - 2rem)"
          : "(min-width: 768px) min(56vw, 34rem), calc(100vw - 2rem)"
      }
      className={stacked ? "w-full" : "w-full shrink-0 md:w-[min(56%,34rem)]"}
    />
  ) : section.image ? (
    <SiteImage
      image={section.image}
      sizes={mediaSizes}
      className={
        stacked
          ? "w-full object-contain"
          : "w-full max-w-xl shrink-0 object-contain md:w-[min(48%,28rem)]"
      }
    />
  ) : null;

  const copy = (
    <div
      className={
        stacked && media
          ? "project-section__copy project-section__copy--stacked w-full"
          : "project-section__copy"
      }
    >
      {heading && !(stacked && media) ? heading : null}
      {table && !(stacked && media) ? table : null}
      {writing}
    </div>
  );

  const sectionClass = [
    "project-section",
    "scroll-mt-24",
    canReveal ? "project-section--reveal" : "",
    open ? "project-section--open" : "",
    pinned ? "project-section--pinned" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (!media) {
    return (
      <section
        id={section.id}
        className={`${sectionClass} mx-auto max-w-2xl`}
      >
        {heading}
        {table}
        {writing}
      </section>
    );
  }

  if (stacked) {
    return (
      <section
        id={section.id}
        className={`${sectionClass} project-section--stacked mx-auto flex w-full max-w-5xl flex-col items-center gap-8`}
      >
        {heading || table ? (
          <div className="w-full">
            {heading}
            {table}
          </div>
        ) : null}
        {media}
        {writing ? copy : null}
      </section>
    );
  }

  return (
    <section
      id={section.id}
      className={`${sectionClass} flex flex-col items-center gap-8 md:items-stretch md:gap-12 ${
        section.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {media}
      <div className="project-section__copy min-w-0 w-full flex-1">
        {heading}
        {table}
        {writing}
      </div>
    </section>
  );
}

export function ProjectBody({
  sections,
  className,
  getTitleHref,
  inlineMeta,
}: ProjectBodyProps) {
  const onProseClick = useProseLinkNavigation();

  if (sections.length === 0) return null;

  return (
    <div className={className ?? "project-body mt-8 space-y-16 md:mt-10 md:space-y-25"}>
      {sections.map((section, index) => (
        <ProjectSectionView
          key={section.id}
          section={section}
          titleHref={getTitleHref?.(section, index)}
          inlineMeta={inlineMeta}
          onProseClick={onProseClick}
        />
      ))}
    </div>
  );
}
