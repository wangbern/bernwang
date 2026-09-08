import { Link } from "react-router";
import type { ProjectSection } from "~/lib/project-body";

type ProjectBodyProps = {
  sections: ProjectSection[];
  className?: string;
  /** When set, section titles become links (e.g. deep links from system lists). */
  getTitleHref?: (section: ProjectSection, index: number) => string | undefined;
};

export function ProjectBody({
  sections,
  className,
  getTitleHref,
}: ProjectBodyProps) {
  if (sections.length === 0) return null;

  return (
    <div className={className ?? "project-body mt-10 space-y-25"}>
      {sections.map((section, index) => {
        const hasImage = Boolean(section.image);
        const imageFirst = section.side === "left";
        const titleHref = getTitleHref?.(section, index);

        const title = section.title ? (
          titleHref ? (
            <h2 className="text-3xl font-semibold text-heading">
              <Link
                to={titleHref}
                className="hover:underline hover:underline-offset-4"
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

        const text = (
          <div className="min-w-0 flex-1">
            {title}
            {section.textHtml ? (
              <div
                className={
                  section.title
                    ? "project-body__prose mt-4 space-y-4 text-lg leading-relaxed text-ink"
                    : "project-body__prose space-y-4 text-lg leading-relaxed text-ink"
                }
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

        const image = (
          <img
            src={section.image}
            alt=""
            className="w-full max-w-xl shrink-0 object-contain md:w-[min(48%,28rem)]"
          />
        );

        return (
          <section
            key={section.id}
            id={section.id}
            className={`project-section flex scroll-mt-24 flex-col items-center gap-8 md:items-start md:gap-12 ${
              imageFirst ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {image}
            {text}
          </section>
        );
      })}
    </div>
  );
}
