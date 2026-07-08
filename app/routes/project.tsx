import project from "~/assets/project.png";
import { Link } from "react-router";
import type { Route } from "./+types/project";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Bernice's Project" }];
}

export default function Project() {
  return (
    <main className="fixed inset-0 overflow-hidden">
      <img
        src={project}
        alt="Project"
        className="size-full object-contain"
      />
      <Link
        to="/portfolio"
        className="absolute top-6 right-6 z-10 rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-md backdrop-blur hover:bg-white"
      >
        back
      </Link>
    </main>
  );
}
