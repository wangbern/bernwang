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
    <main className="fixed inset-0 flex w-screen flex-col items-center justify-center overflow-hidden">
      <div
        className="flex flex-col items-center justify-center"
        style={{ paddingTop: "80px" }}
      />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div
        className="flex flex-col items-center justify-center"
        style={{ width: "var(--carousel-width)", paddingTop: "60px" }}
      >
        <h1
          className="flex w-full justify-between font-bold text-heading"
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
