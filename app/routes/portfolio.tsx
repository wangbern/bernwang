import { useState } from "react";
import { Link } from "react-router";
import portfolio from "~/assets/portfolio.png";
import portfolioOpened from "~/assets/portfolio-opened.png";
import type { Route } from "./+types/portfolio";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Bernice's Portfolio" }];
}

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="fixed inset-0 overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="size-full cursor-pointer border-0 bg-transparent p-0"
        aria-label={isOpen ? "Close portfolio" : "Open portfolio"}
      >
        <img
          src={isOpen ? portfolioOpened : portfolio}
          alt="Portfolio"
          className="size-full object-contain"
        />
      </button>
      <Link
        to="/project"
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-md backdrop-blur hover:bg-white"
      >
        all good things
      </Link>
      <Link
        to="/"
        className="absolute bottom-6 left-6 z-10 rounded-md bg-white/90 px-4 py-2 text-sm font-medium text-gray-900 shadow-md backdrop-blur hover:bg-white"
      >
        About me
      </Link>
    </main>
  );
}
