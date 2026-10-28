import { useRef } from "react";
import { Link, useLocation } from "react-router";
import aboutMeImage from "~/assets/profile.jpg?responsive";
import { SiteImage } from "~/components/site-image";
import itchIoIcon from "~/assets/itch-io-icon.png";
import { AboutReveal } from "~/components/about-reveal";
import { DiamondArrow } from "~/components/diamond-arrow";
import { EmailWithCopy } from "~/components/email-with-copy";
import { Footer } from "~/components/footer";
import { TopBar } from "~/components/top-bar";
import { PROJECT_SYSTEMS, systemHref } from "~/lib/project-body";
import { prepareChromeTransition } from "~/lib/top-bar-transition";
import type { Route } from "./+types/about-me";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Bernice Wang: About Me" }];
}

const experienceRows = [
  { year: "2026", thing: "Game Sound Con", href: "https://www.gamesoundcon.com/schedule", roles: "Presenter (AGT Audio)" },
  { year: "2026", thing: "Game Audio Network Guild", href: "https://www.audiogang.org/student-game-music-sound-design-competition/", roles: "Music Award, 1st (AGT Audio)" },
  { year: "2026", thing: "USC Games Expo Audience Choice Award", href: "https://www.uscgamesexpo.com/2026-expo-games", roles: "Experimental Design (AGT)" },
  { year: "2026", thing: "All Good Things (AGT)", href: "https://www.linkedin.com/company/all-good-things-scheherazadegames", roles: "Thesis Publication / Director" },
  { year: "2026", thing: "Mirrored Glass Collaboration", href: "https://www.mirroredglass.org/potc", roles: "Live Media Artist" },
  { year: "2025", thing: "the Grand LA", href: "https://www.instagram.com/p/DIhPS3mTOwV/", roles: "Installation, Designer" },
  { year: "2025", thing: "LA River & Viterbi", href: "https://viterbischool.usc.edu/news/2024/02/three-usc-schools-collaborate-to-reimagine-the-la-river/", roles: "Videographer" },
  { year: "2025", thing: "the Wind & the Wisp, BAFTA Finalist", href: "https://www.bafta.org/media-centre/press-releases/2026-student-awards-finalists/", roles: "Lead Designer" },
  { year: "2025", thing: "Nirvana, Oscars Semi-Finalist", href: "https://www.oscars.org/news/meet-2025-student-academy-awards-semifinalists", roles: "Motion Capture Choreographer" },
  {
    year: "2025",
    thing: "Tokyo Geidai Exchange Program",
    href: "https://games.geidai.ac.jp/06/index.html?id=geidaiusc",
    roles: "Game Designer",
  },
  { year: "2024", thing: "Annenberg Fellowship", href: "https://treaandrea.squarespace.com/radical-play/2024-2025#", roles: "Grant & Scholarship Awardee" },
  { year: "2024", thing: "Indiecade Internship", href: "https://bernwang.itch.io/changelings", roles: "Designer" },
  { year: "2024", thing: "Heidi Duckler Dance", href: "https://heididuckler.org/projects/ebb-flow-exposition-park-2024/", roles: "Guerilla Pop Up Designer" },
  {
    year: "2024",
    thing: "Earth and Ash",
    href: "https://digitallibrary.usc.edu/CS.aspx?VP3=DamView&VBID=2A3BXZ6RTOE5Z&PN=1&DocRID=2A3BF1MGMDQ36&FR_=1&W=1536&H=826",
    roles: "Lead Designer",
  },
  { year: "2024", thing: "Tableau Short Film", href: "https://vimeo.com/960615556?share=copy", roles: "Choreographer, Dancer" },
  { year: "2024", thing: "the Man in the Night Short Film", href: "https://www.instagram.com/reel/DZwiB3EhrHy/?rpxt=MXBibzl2ZHZ6M3Bheg==", roles: "Choreographer" },
  { year: "2024", thing: "USC: the Vatican", href: "https://polymathic.usc.edu/ahmanson-lab/building-virtual-renaissance-library-julius-iis-stanza-della-segnatura", roles: "Videographer" },
  { year: "2024", thing: "Sony Pictures Entertainment", href: "https://www.imdb.com/title/tt30319894/", roles: "EZ Track Metadata Recording Operator (Cooke Lens)" },
  { year: "2023", thing: "Whisper of Water", href: "https://angelahwy.com/Film", roles: "Motion Capture Actor, Dancer" },
  {
    year: "2023",
    thing: "Gavin Degraw x Musicians on Call Charity",
    href: "https://www.musiciansoncall.org/",
    roles: "Event Photographer",
  },
  {
    year: "2023",
    thing: "La Mirada Theater",
    href: "https://lamiradatheatre.gov/",
    roles: "Dance Ensemble",
  },
  { year: "2023", thing: "Arthur Murray", href: "https://arthurmurraydiamondbar.com/", roles: "Ballroom Instructor" },
  { year: "2022", thing: "Chang Cho", href: "https://wacd.ucla.edu/announcements/archive/2022/spring/may/ucla-department-of-world-arts-and-cultures-dance-presents-dance-senior-projects-2022-soulstice-copy", roles: "Multimedia Capstone" },
  { year: "2022", thing: "WACsmash", href: "https://wacsmash.com/about", roles: "Lead Producer" },
  {
    year: "2021",
    thing: "UCLA Ideas in Action",
    href: "#",
    roles: "Awardee",
  },
  { year: "2017", thing: "Elephant Preschool in Taipei, Taiwan", href: "#", roles: "English Teacher" },
  { year: "2017", thing: "Herb Albert Emerging Artist Scholarship", href: "https://www.herbalpertfoundation.org/legacy-gift-recipient/herb-alpert-scholarships-emerging-young-artists/", roles: "Dancer" },
  {
    year: "2016",
    thing: "UCLA Full Architecture Summer Scholarship",
    href: "#",
    roles: "Student",
  },
  { year: "2015", thing: "UCI Full Dance Summer Scholarship", href: "#", roles: "Student" },
  { year: "2015", thing: "American Ballet Theatre", href: "https://www.abt.org/", roles: "Children Cast" },
  {
    year: "2013",
    thing: "Inland Pacific Ballet",
    href: "https://ipballet.org/",
    roles: "Corps de Ballet",
  },
  {
    year: "2012",
    thing: "Joffrey Ballet",
    href: "https://joffrey.org/",
    roles: "Children Cast",
  },
] as const;

export default function AboutMe() {
  const mainRef = useRef<HTMLElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const scrollRafRef = useRef(0);
  const location = useLocation();

  const scrollToTable = () => {
    const main = mainRef.current;
    const table = tableRef.current;
    if (!main || !table) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const tableTop =
      table.getBoundingClientRect().top -
      main.getBoundingClientRect().top +
      main.scrollTop;
    const target = Math.max(
      0,
      Math.min(
        tableTop -
          (main.querySelector(".site-top-bar")?.getBoundingClientRect().height ?? 0) -
          70,
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
          <div className="scroll-fold">
          <div className="flex flex-1 flex-col about-me__hero py-8 lg:justify-center">
          <div className="flex w-full flex-col lg:flex-row">
            <div className="flex w-full items-center justify-center px-4 sm:px-8 lg:w-1/2 lg:items-end">
              <SiteImage
                image={aboutMeImage}
                alt=""
                sizes="(min-width: 1024px) 28rem, calc(100vw - 2rem)"
                priority
                className="w-full max-w-md object-contain"
              />
            </div>
            <div className="mt-8 flex w-full justify-start px-4 sm:px-8 lg:-ml-24 lg:mt-0 lg:w-1/2 lg:px-0 lg:pb-9">
              <div className="flex min-w-0 max-w-xl flex-col text-left">
                <div className="flex flex-1 flex-col justify-center">
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
                  <p>
                    They're also big on thrifting and treasure finding, make jewelry in their free time, and is notorious for referencing fanfic and IPs like old Barbie, Pixie Hollow, Harry Potter, and more.
                  </p>
                  <p className="flex flex-wrap gap-x-3 gap-y-1">
                    {PROJECT_SYSTEMS.map((system) => (
                      <Link
                        key={system}
                        to={systemHref(system)}
                        viewTransition
                        className={`project-system project-system--${system}`}
                        onClick={() =>
                          prepareChromeTransition(
                            location.pathname,
                            systemHref(system),
                          )
                        }
                      >
                        #{system}
                      </Link>
                    ))}
                  </p>
                </div>
                </div>
                <div className="mt-8 space-y-1 text-base leading-relaxed text-ink">
                  <p>
                    <EmailWithCopy buttonClassName="email-copy-button--large" />
                  </p>
                  <p>
                    <a
                      href="https://drive.google.com/file/d/1bewXxpYm1DV2q4r-P_mZ2FsFeOOP7sDW/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-2 hover:opacity-70"
                    >
                      resume
                    </a>
                  </p>
                  <p className="flex items-center gap-3 pt-2">
                    <a
                      href="https://www.linkedin.com/in/bernwang/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block hover:opacity-70"
                    >
                      <svg
                        viewBox="0 0 512 512"
                        role="img"
                        aria-label="LinkedIn"
                        className="h-8 w-8"
                      >
                        <rect width="512" height="512" rx="90" fill="#fff" />
                        <g fill="var(--color-site)">
                          <circle cx="131" cy="131" r="36" />
                          <rect x="97" y="200" width="68" height="212" />
                          <path d="M207 200h65v29c10-18 34-36 70-36 72 0 85 47 85 108v111h-68v-98c0-24-1-54-34-54-34 0-39 26-39 52v100h-79z" />
                        </g>
                      </svg>
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
                        className="h-9 w-9 object-contain brightness-0 invert"
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <button
            type="button"
            className="about-experience__scroll"
            onClick={scrollToTable}
            aria-label="Scroll to experience"
          >
            <DiamondArrow direction="down" />
          </button>
          </div>
          <div className="about-experience px-4 pb-16 sm:px-8 md:px-16">
            <table ref={tableRef} className="about-experience__table">
              <tbody>
                {experienceRows.map((row) => (
                  <tr key={`${row.year}-${row.thing}`}>
                    <td>{row.year}</td>
                    <td>
                      {row.href && row.href !== "#" ? (
                        <a
                          href={row.href}
                          {...(row.href.startsWith("http")
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                          className="underline underline-offset-2 hover:opacity-70"
                        >
                          {row.thing}
                        </a>
                      ) : (
                        row.thing
                      )}
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
