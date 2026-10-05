import type { EmblaOptionsType } from "embla-carousel";
import { EmblaCarousel } from "~/components/embla-carousel";
import { getProjects } from "~/lib/projects";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bernice Wang" },
    { name: "description", content: "Bernice Wang's portfolio" },
  ];
}

const SLIDES = getProjects().map(({ image, title, description }) => ({
  image,
  title,
  description,
}));

const OPTIONS: EmblaOptionsType = {
  dragFree: "snap",
  align: "center",
};

export default function Home() {
  return (
    <main className="home-screen">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className="home-headline-wrap">
        <h1 className="home-headline">
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
