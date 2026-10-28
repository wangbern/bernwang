import type { EmblaOptionsType } from "embla-carousel";
import { Link, useLocation } from "react-router";
import bernLandingUrl from "../../content/assets/bernLanding.png";
import { EmblaCarousel } from "~/components/embla-carousel";
import { getProjects } from "~/lib/projects";
import { prepareChromeTransition } from "~/lib/top-bar-transition";
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
  // Let the first and last cards scroll into the middle, clear of the edge fade.
  containScroll: false,
};

export default function Home() {
  const location = useLocation();

  return (
    <main className="home-screen">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <div className="home-headline-wrap">
        <h1 className="home-headline">
          <span>
            <Link
              to="/about-me"
              viewTransition
              className="home-headline__name"
              onClick={() => prepareChromeTransition(location.pathname, "/about-me")}
            >
              <span className="home-headline__name-text">Bernice</span>
              <img
                src={bernLandingUrl}
                alt=""
                aria-hidden="true"
                className="home-headline__name-img"
              />
            </Link>
          </span>
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
