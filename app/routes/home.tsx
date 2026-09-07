import type { EmblaOptionsType } from "embla-carousel";
import { Link } from "react-router";
import aboutme from "~/assets/aboutme.png";
import portfolio from "~/assets/portfolio.png";
import project from "~/assets/project.png";
import { EmblaCarousel } from "~/components/embla-carousel";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bernice Wang" },
    { name: "description", content: "Bernice Wang's portfolio" },
  ];
}

const OPTIONS: EmblaOptionsType = { dragFree: "snap" };

const SLIDES = [
  {
    image: project,
    title: "All Good Things",
    description: "A selected body of work exploring form, material, and narrative.",
  },
  {
    image: portfolio,
    title: "Portfolio",
    description: "Recent projects spanning print, object, and spatial design.",
  },
  {
    image: aboutme,
    title: "About Me",
    description: "Designer focused on tactile process and digital craft.",
  },
  {
    image: project,
    title: "Studio Work",
    description: "Collaborations and commissions developed in the studio.",
  },
  {
    image: portfolio,
    title: "Selected Projects",
    description: "Highlights from ongoing and completed series.",
  },
  {
    image: aboutme,
    title: "Process",
    description: "Sketches, studies, and experiments behind the finished work.",
  },
];

export default function Home() {
  return (
    <main className="fixed inset-0 flex w-screen flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center" style={{ paddingTop: "80px" }}> 
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div
        className="flex flex-col items-center justify-center"
        style={{ width: "var(--carousel-width)", paddingTop: "60px" }}
      >
        <h1
          className="flex w-full justify-between font-bold"
          style={{ fontSize: "4rem", lineHeight: "1.2", letterSpacing: "0.05em" }}
        >
          <span>Bernice</span>
          <span>does</span>
          <span>a</span>
          <span>lot</span>
          <span>of</span>
          <span>things.</span>
        </h1>
      </div>
    </main>
  );
}
