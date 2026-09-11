import { useRef } from "react";
import aboutMeImage from "~/assets/profile.jpg";
import itchIoIcon from "~/assets/itch-io-icon.png";
import linkedInIcon from "~/assets/linkedin-app-icon.png";
import { AboutReveal } from "~/components/about-reveal";
import { DiamondArrow } from "~/components/diamond-arrow";
import { EmailWithCopy } from "~/components/email-with-copy";
import { Footer } from "~/components/footer";
import { TopBar } from "~/components/top-bar";
import type { Route } from "./+types/about-me";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About Me — Bernice Wang" }];
}

const experienceRows = [
  { year: "2025", thing: "Studio North", href: "#", roles: "Product Designer" },
  { year: "2024", thing: "Field Notes Co.", href: "#", roles: "Design Lead" },
  {
    year: "2024",
    thing: "Paper & Pixel",
    href: "#",
    roles: "Art Director, Illustrator",
  },
  { year: "2023", thing: "Lumen Games", href: "#", roles: "UI Designer" },
  { year: "2023", thing: "Harbor Press", href: "#", roles: "Cover Designer" },
  {
    year: "2022",
    thing: "Kinetic Lab",
    href: "#",
    roles: "Interaction Designer",
  },
  { year: "2022", thing: "Moth & Thread", href: "#", roles: "Brand Designer" },
  { year: "2021", thing: "Cedar Atelier", href: "#", roles: "Junior Designer" },
  {
    year: "2021",
    thing: "Night Market Fair",
    href: "#",
    roles: "Exhibit Designer",
  },
  {
    year: "2020",
    thing: "Independent Practice",
    href: "#",
    roles: "Freelance Designer",
  },
] as const;

export default function AboutMe() {
  const mainRef = useRef<HTMLElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const scrollRafRef = useRef(0);

  const scrollToTable = () => {
    const main = mainRef.current;
    const table = tableRef.current;
    if (!main || !table) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const tableCenter =
      table.getBoundingClientRect().top -
      main.getBoundingClientRect().top +
      main.scrollTop +
      table.offsetHeight / 2;
    const target = Math.max(
      0,
      Math.min(
        tableCenter - main.clientHeight / 2,
        main.scrollHeight - main.clientHeight,
      ),
    );

    if (reducedMotion) {
      main.scrollTop = target;
      return;
    }

    cancelAnimationFrame(scrollRafRef.current);

    const start = main.scrollTop;
    const distance = target - start;
    if (Math.abs(distance) < 1) return;

    const duration = 1600;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      main.scrollTop = start + distance * easeInOutCubic(progress);
      if (progress < 1) {
        scrollRafRef.current = requestAnimationFrame(tick);
      }
    };

    scrollRafRef.current = requestAnimationFrame(tick);
  };

  return (
    <>
      <AboutReveal />
      <main
        ref={mainRef}
        className="about-me fixed inset-0 overflow-auto bg-transparent"
      >
        <div className="flex min-h-full flex-col">
          <TopBar showTitle={false} />
          <div className="flex flex-1 flex-col py-10 md:flex-row">
            <div className="flex w-full items-center justify-center px-8 md:w-1/2">
              <img
                src={aboutMeImage}
                alt=""
                className="w-full max-w-md object-contain"
              />
            </div>
            <div className="mt-10 flex w-full items-center justify-start px-8 md:-ml-24 md:mt-0 md:w-1/2 md:px-0">
              <div className="min-w-0 max-w-xl text-left">
                <h1 className="text-4xl font-semibold text-heading md:text-5xl">
                  Bernice Wang
                </h1>
                <p className="mt-2 text-base text-ink/70">
                  Designer focused on tactile process and digital craft.
                </p>
                <div className="mt-8 space-y-4 text-base leading-relaxed text-ink">
                  <p>
                    Bernice is a designer focused on tactile process and digital
                    craft. Bernice is a designer focused on tactile process and
                    digital craft. Bernice is a designer focused on tactile
                    process and digital craft.
                  </p>
                </div>
                <div className="mt-8 space-y-3 text-base leading-relaxed text-ink">
                  <p>
                    <EmailWithCopy />
                  </p>
                  <p>
                    <a
                      href="/resume.pdf"
                      className="underline underline-offset-2 hover:opacity-70"
                    >
                      resume
                    </a>
                  </p>
                  <br />
                  <p className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/in/bernwang/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block hover:opacity-70"
                    >
                      <img
                        src={linkedInIcon}
                        alt="LinkedIn"
                        className="h-8 w-8 object-contain"
                      />
                    </a>
                    <a
                      href="https://bernwang.itch.io"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block hover:opacity-70"
                    >
                      <img
                        src={itchIoIcon}
                        alt="itch.io"
                        className="h-8 w-8 object-contain"
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-experience px-8 pb-16 md:px-16">
            <button
              type="button"
              className="about-experience__scroll"
              onClick={scrollToTable}
              aria-label="Scroll to experience"
            >
              <DiamondArrow direction="down" />
            </button>
            <table ref={tableRef} className="about-experience__table">
              <tbody>
                {experienceRows.map((row) => (
                  <tr key={`${row.year}-${row.thing}`}>
                    <td>{row.year}</td>
                    <td>
                      <a
                        href={row.href}
                        className="underline underline-offset-2 hover:opacity-70"
                      >
                        {row.thing}
                      </a>
                    </td>
                    <td>{row.roles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
