import { ExperimentsSpectrum } from "~/components/experiments-spectrum";
import { Footer } from "~/components/footer";
import { TopBar } from "~/components/top-bar";
import { getExperimentProjects } from "~/lib/projects";
import type { Route } from "./+types/experiments";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Experiments — Bernice Wang" }];
}

export default function Experiments() {
  const projects = getExperimentProjects();

  return (
    <main className="experiments-screen">
      <TopBar />
      {projects.length === 0 ? (
        <div className="experiments-empty">
          <h1 className="experiments-spectrum__title">Experiments</h1>
          <p>No experiments listed yet.</p>
          <Footer />
        </div>
      ) : (
        <ExperimentsSpectrum projects={projects} />
      )}
    </main>
  );
}
