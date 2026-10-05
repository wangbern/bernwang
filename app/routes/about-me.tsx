import { useRef } from "react";
import aboutMeImage from "~/assets/profile.jpg?responsive";
import { SiteImage } from "~/components/site-image";
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
  { year: "2026", thing: "Game Sound Con", href: "#", roles: "Presenter (AGT Audio)" },
  { year: "2026", thing: "Game Audio Network Guild", href: "#", roles: "Music Award, 1st (AGT Audio)" },
  { year: "2026", thing: "USC Games Expo Audience Choice Award", href: "#", roles: "Experimental Design (AGT)" },
  { year: "2026", thing: "All Good Things (AGT)", href: "#", roles: "Thesis Publication / Director" },
  { year: "2026", thing: "Mirrored Glass Collaboration", href: "#", roles: "Live Media Artist" },
  { year: "2025", thing: "the Grand LA", href: "#", roles: "Installation, Designer" },
  { year: "2025", thing: "LA River & Viterbi", href: "#", roles: "Videographer" },
  { year: "2025", thing: "the Wind & the Wisp, BAFTA Finalist", href: "#", roles: "Lead Designer" },
  { year: "2025", thing: "Nirvana", href: "#", roles: "Motion Capture Choreographer" },
  {
    year: "2025",
    thing: "Tokyo Geidai Exchange Program",
    href: "#",
    roles: "Game Designer",
  },
  { year: "2024", thing: "Annenberg Fellowship", href: "#", roles: "Grant & Scholarship Awardee" },
  { year: "2024", thing: "Indiecade Internship", href: "#", roles: "Designer" },
  { year: "2024", thing: "Heidi Duckler Dance", href: "#", roles: "Guerilla Pop Up Designer" },
  {
    year: "2024",
    thing: "Earth and Ash",
    href: "#",
    roles: "Lead Designer",
  },
  { year: "2024", thing: "Tableau Short Film", href: "#", roles: "Choreographer, Dancer" },
  { year: "2024", thing: "the Man in the Night Short Film", href: "#", roles: "Choreographer" },
  { year: "2024", thing: "USC: the Vatican", href: "#", roles: "Videographer" },
  { year: "2024", thing: "Sony Pictures Entertainment", href: "#", roles: "EZ Track Metadata Recording Operator (Cooke Lens)" },
  { year: "2023", thing: "Whisper of Water", href: "#", roles: "Motion Capture Actor, Dancer" },
  {
    year: "2023",
    thing: "Gavin Degraw x Musicians on Call Charity",
    href: "#",
    roles: "Event Photographer",
  },
  {
    year: "2023",
    thing: "La Mirada Theater",
    href: "#",
    roles: "Dance Ensemble",
  },
  { year: "2023", thing: "Arthur Murray", href: "#", roles: "Ballroom Instructor" },
  { year: "2022", thing: "Chang Cho", href: "#", roles: "Multimedia Capstone" },
  { year: "2022", thing: "WACsmash", href: "#", roles: "Lead Producer" },
  {
    year: "2021",
    thing: "UCLA Ideas in Action",
    href: "#",
    roles: "Awardee",
  },
  { year: "2017", thing: "Elephant Preschool in Taipei, Taiwan", href: "#", roles: "English Teacher" },
  { year: "2017", thing: "Herb Albert Emerging Artist Scholarship", href: "#", roles: "Dancer" },
  {
    year: "2016",
    thing: "UCLA Full Architecture Summer Scholarship",
    href: "#",
    roles: "Student",
  },
  { year: "2015", thing: "UCI Full Dance Summer Scholarship", href: "#", roles: "Student" },
  { year: "2015", thing: "American Ballet Theatre", href: "#", roles: "Children Cast" },
  {
    year: "2013",
    thing: "Inland Pacific Ballet",
    href: "#",
    roles: "Corps de Ballet",
  },
  {
    year: "2012",
    thing: "Joffrey Ballet",
    href: "#",
    roles: "Children Cast",
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
          <div className="flex flex-1 flex-col py-8 lg:flex-row lg:py-10">
            <div className="flex w-full items-center justify-center px-4 sm:px-8 lg:w-1/2">
              <SiteImage
                image={aboutMeImage}
                alt=""
                sizes="(min-width: 1024px) 28rem, calc(100vw - 2rem)"
                priority
                className="w-full max-w-md object-contain"
              />
            </div>
            <div className="mt-8 flex w-full items-center justify-start px-4 sm:px-8 lg:-ml-24 lg:mt-0 lg:w-1/2 lg:px-0">
              <div className="min-w-0 max-w-xl text-left">
                <h1 className="text-4xl font-semibold text-heading md:text-5xl">
                  Bernice Wang
                </h1>
                <p className="mt-2 text-base text-ink/70">
                  Creative of games, movement, and media.
                </p>
                <div className="mt-8 space-y-4 text-base leading-relaxed text-ink">
                  <p>
                    Bernice is a designer, producer, and performer invested in serving and innovating the arts. Whether this means creating emotional characters and narratives through visuals, games, and stage, or connecting technology and movement in exciting ways... Bernice puts her all in effective and efficient, yet beautiful experiences.
                  </p>
                </div>
                <div className="mt-8 space-y-3 text-base leading-relaxed text-ink">
                  <p>
                    <EmailWithCopy />
                  </p>
                  <p>
                    <a
                      href="https://drive.google.com/file/d/1jROKvbdYHSvlaYwlm5rC8x94OhzQ2oqj/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
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
          <div className="about-experience px-4 pb-16 sm:px-8 md:px-16">
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
