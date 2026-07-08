import aboutme from "~/assets/aboutme.png";
import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bernice Wang" },
    { name: "description", content: "Bernice Wang's portfolio" },
  ];
}

export default function Home() {
  return (
    <main className="fixed inset-0 overflow-hidden">
      <img
        src={aboutme}
        alt="About me"
        className="size-full object-contain"
      />
      <Link
        to="/portfolio"
        className="absolute bottom-6 right-6 rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-md backdrop-blur hover:bg-white"
      >
        Portfolio
      </Link>
    </main>
  );
}
