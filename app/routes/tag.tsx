import { Link, useParams } from "react-router";
import { Footer } from "~/components/footer";
import { ProjectTitleCard } from "~/components/project-title-card";
import { TopBar } from "~/components/top-bar";
import { getProjectsByTag, slugToTag } from "~/lib/projects";
import type { Route } from "./+types/tag";

export function meta({ params }: Route.MetaArgs) {
  const tag = slugToTag(params.tag ?? "");
  const label = tag ?? "Tag";
  return [{ title: `${label} — Bernice Wang` }];
}

export default function Tag() {
  const { tag: tagSlug } = useParams();
  const tag = slugToTag(tagSlug ?? "");

  if (!tag) {
    return (
      <main className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-transparent">
        <p className="text-ink/70">Tag not found.</p>
        <Link to="/" className="text-sm font-medium text-heading underline">
          Back home
        </Link>
      </main>
    );
  }

  const projects = getProjectsByTag(tag);

  return (
    <main className="fixed inset-0 overflow-auto bg-transparent">
      <div className="flex min-h-full flex-col">
        <TopBar />
        <div className="mx-auto w-full max-w-5xl px-8 py-10">
          <h1 className="text-4xl font-semibold capitalize text-heading">
            {tag}
          </h1>
          {projects.length === 0 ? (
            <p className="mt-6 text-base text-ink/70">
              No projects with this tag yet.
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
