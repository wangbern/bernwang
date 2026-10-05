import { Footer } from "~/components/footer";
import { ProjectTitleCard } from "~/components/project-title-card";
import { TopBar } from "~/components/top-bar";
import { getExperimentProjects } from "~/lib/projects";
import type { Route } from "./+types/experiments";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Experiments — Bernice Wang" }];
}

export default function Experiments() {
  const projects = getExperimentProjects();

  return (
    <main className="fixed inset-0 overflow-auto bg-transparent">
      <div className="flex min-h-full flex-col">
        <TopBar />
        <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-8 sm:py-10">
          <h1 className="text-3xl font-semibold text-heading sm:text-4xl">Experiments</h1>
          {projects.length === 0 ? (
            <p className="mt-6 text-base text-ink/70">
              No experiments listed yet.
            </p>
          ) : (
            <ul className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <li key={project.slug}>
                  <ProjectTitleCard
                    image={project.image}
                    title={project.title}
                    description={project.description}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
        <Footer />
      </div>
    </main>
  );
}
