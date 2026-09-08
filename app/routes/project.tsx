import { useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router";
import { Footer } from "~/components/footer";
import { ProjectBody } from "~/components/project-body";
import { TopBar } from "~/components/top-bar";
import { recordProjectVisit } from "~/lib/experiments-popup";
import { getProjectByTitle } from "~/lib/projects";
import type { Route } from "./+types/project";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Bernice's Project" }];
}

export default function Project() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const titleParam = searchParams.get("title") ?? "";
  const project = getProjectByTitle(titleParam);

  useEffect(() => {
    if (!project) return;
    try {
      recordProjectVisit(project.slug, location.key);
    } catch {
      // ignore storage errors
    }
  }, [project?.slug, location.key]);

  useEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id || !project) return;

    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.hash, project?.slug]);

  if (!project) {
    return (
      <main className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-transparent">
        <p className="text-ink/70">Project not found.</p>
        <Link to="/" className="text-sm font-medium text-heading underline">
          Back home
        </Link>
      </main>
    );
  }

  return (
    <main className="fixed inset-0 overflow-auto bg-transparent">
      <div className="flex min-h-full flex-col">
        <TopBar />
        <div className="relative h-[55vh] w-full overflow-hidden">
          <img
            src={project.image}
            alt=""
            className="size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
            <h1 className="text-4xl font-semibold text-heading md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-3 max-w-xl text-base text-ink md:text-lg">
              {project.description}
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl px-8 py-10">
          <ProjectBody sections={project.sections} />
        </div>
        <Footer />
      </div>
    </main>
  );
}
