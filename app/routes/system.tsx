import { Link, useParams } from "react-router";
import { Footer } from "~/components/footer";
import { ProjectBody } from "~/components/project-body";
import { TopBar } from "~/components/top-bar";
import { projectSectionHref, slugToSystem } from "~/lib/project-body";
import { getSectionsBySystem } from "~/lib/projects";
import type { Route } from "./+types/system";

export function meta({ params }: Route.MetaArgs) {
  const system = slugToSystem(params.system ?? "");
  const label = system ? `#${system}` : "System";
  return [{ title: `${label} — Bernice Wang` }];
}

export default function System() {
  const { system: systemSlug } = useParams();
  const system = slugToSystem(systemSlug ?? "");

  if (!system) {
    return (
      <main className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-transparent">
        <p className="text-ink/70">System not found.</p>
        <Link to="/" className="text-sm font-medium text-heading underline">
          Back home
        </Link>
      </main>
    );
  }

  const hits = getSectionsBySystem(system);

  return (
    <main className="fixed inset-0 overflow-auto bg-transparent">
      <div className="flex min-h-full flex-col">
        <TopBar />
        <div className="mx-auto w-full max-w-7xl px-8 py-10">
          <h1
            className={`text-4xl font-semibold project-system project-system--${system}`}
          >
            #{system}
          </h1>
          {hits.length === 0 ? (
            <p className="mt-6 text-base text-ink/70">
              No sections with this label yet.
            </p>
          ) : (
            <div className="mt-10 space-y-20">
              {hits.map((hit) => {
                const sectionHref = projectSectionHref(
                  hit.projectTitle,
                  hit.sectionIndex,
                );
                return (
                  <article key={`${hit.projectSlug}-${hit.sectionIndex}`}>
                    <div className="flex items-center gap-4 py-10">
                      <div className="h-px flex-1 bg-ink/40" aria-hidden />
                      <Link
                        to={sectionHref}
                        className="shrink-0 text-sm font-medium tracking-wide text-ink/80 underline-offset-2 hover:text-ink hover:underline"
                      >
                        {hit.projectTitle}
                      </Link>
                      <div className="h-px flex-1 bg-ink/40" aria-hidden />
                    </div>
                    <ProjectBody
                      sections={[
                        {
                          ...hit.section,
                          id: `${hit.projectSlug}-${hit.section.id}`,
                        },
                      ]}
                      className="project-body"
                      getTitleHref={() => sectionHref}
                    />
                  </article>
                );
              })}
            </div>
          )}
        </div>
        <Footer />
      </div>
    </main>
  );
}
