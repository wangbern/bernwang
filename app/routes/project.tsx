import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link, useLocation, useSearchParams } from "react-router";
import { DiamondArrow } from "~/components/diamond-arrow";
import { Footer } from "~/components/footer";
import { ProjectBody } from "~/components/project-body";
import { TopBar } from "~/components/top-bar";
import { recordProjectVisit } from "~/lib/experiments-popup";
import {
  prepareProjectMorph,
  PROJECT_MORPH_MS,
  setProjectExitMorphEnabled,
} from "~/lib/project-morph";
import { getProjectByTitle } from "~/lib/projects";
import type { Route } from "./+types/project";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Bernice's Project" }];
}

export default function Project() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const titleParam = searchParams.get("title") ?? "";
  const project = getProjectByTitle(titleParam);
  const mainRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollRafRef = useRef(0);
  const [heroInView, setHeroInView] = useState(true);
  const [playVisible, setPlayVisible] = useState(false);

  useEffect(() => {
    setPlayVisible(false);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const delay = reducedMotion ? 0 : PROJECT_MORPH_MS + 60;
    const id = window.setTimeout(() => setPlayVisible(true), delay);
    return () => window.clearTimeout(id);
  }, [project?.slug, location.key]);

  const scrollToFirstSection = () => {
    const main = mainRef.current;
    const firstId = project?.sections[0]?.id;
    if (!main || !firstId) return;

    const targetEl = document.getElementById(firstId);
    if (!targetEl) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const topBar = main.querySelector(".site-top-bar");
    const topBarHeight = topBar?.getBoundingClientRect().height ?? 0;
    // Extra breathing room under the sticky top bar after auto-scroll.
    const topBarGap = 45;

    const sectionTop =
      targetEl.getBoundingClientRect().top -
      main.getBoundingClientRect().top +
      main.scrollTop;
    const target = Math.max(
      0,
      Math.min(
        sectionTop - topBarHeight - topBarGap,
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

  useEffect(() => {
    if (!project) return;
    // Keep `enter` on <html> through the inbound morph; flip to `exit` after it settles.
    const id = window.setTimeout(() => {
      prepareProjectMorph(project.title, "exit");
    }, PROJECT_MORPH_MS + 100);
    try {
      recordProjectVisit(project.slug, location.key);
    } catch {
      // ignore storage errors
    }
    return () => window.clearTimeout(id);
  }, [project?.slug, project?.title, location.key]);

  useEffect(() => {
    if (!project) return;
    const hero = heroRef.current;
    if (!hero) return;

    const scrollRoot = hero.closest("main");

    const update = (visible: boolean) => {
      setHeroInView(visible);
      setProjectExitMorphEnabled(visible);
      if (document.documentElement.dataset.projectMorph === "exit") {
        prepareProjectMorph(project.title, "exit");
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Require a meaningful slice of the hero so a 1px sliver doesn’t morph.
        update(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      {
        root: scrollRoot,
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    observer.observe(hero);
    return () => {
      observer.disconnect();
      // Do not re-enable here. Unmount runs inside the view-transition update;
      // flipping enabled back on would let the home card claim shared names
      // without an old hero snapshot, which makes the card jump.
    };
  }, [project?.slug, project?.title]);

  useEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id || !project) return;

    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.hash, project?.slug]);

  if (!project) {
    return (
      <main className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-transparent">
        <p className="text-ink/70">Project not found.</p>
        <Link to="/" viewTransition className="text-sm font-medium text-heading underline">
          Back home
        </Link>
      </main>
    );
  }

  const inlineSectionMeta = project.slug === "game-jams";
  const metaRows = [
    { label: "collaboration", value: project.collaboration },
    { label: "role(s)", value: project.roles },
    { label: "tools", value: project.tools },
  ].filter((row) => row.value);

  return (
    <main
      ref={mainRef}
      className="fixed inset-0 overflow-auto bg-transparent"
    >
      <div className="flex min-h-full flex-col">
        <TopBar />
        <div
          ref={heroRef}
          className={[
            "project-hero",
            heroInView ? "project-hero--morphable" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div
            className={[
              "project-hero__media",
              heroInView ? "project-morph-frame" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <img src={project.image} alt="" className="project-hero__image" />
            <div className="project-hero__veil" aria-hidden />
          </div>
          <div className="project-hero__copy">
            <h1
              className={[
                "project-hero__title",
                heroInView ? "project-morph-title" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {project.title}
            </h1>
            <p
              className={[
                "project-hero__description",
                heroInView ? "project-morph-description" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {project.description}
            </p>
          </div>
          {project.hasLink && project.playUrl && !inlineSectionMeta ? (
            <a
              href={project.playUrl}
              target="_blank"
              rel="noreferrer"
              className={[
                "project-meta__play",
                playVisible ? "project-meta__play--visible" : "",
                heroInView ? "project-morph-play" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={
                {
                  "--play-chars": Math.max(project.playLabel.length, 1),
                } as CSSProperties
              }
            >
              <span className="project-meta__play-inner">
                <span className="project-meta__play-label">{project.playLabel}</span>
                <DiamondArrow direction="right" />
              </span>
            </a>
          ) : null}
        </div>
        {metaRows.length > 0 && !inlineSectionMeta ? (
          <section className="project-meta px-8 pb-10 md:px-16">
            <table className="project-meta__table">
              <tbody>
                {metaRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ) : null}
        {project.sections.length > 0 && !inlineSectionMeta ? (
          <button
            type="button"
            className="project-body__scroll"
            onClick={scrollToFirstSection}
            aria-label="Scroll to first section"
          >
            <DiamondArrow direction="down" />
          </button>
        ) : null}
        <div className="mx-auto w-full max-w-7xl px-8 py-10">
          <ProjectBody
            sections={project.sections}
            inlineMeta={
              inlineSectionMeta
                ? {
                    collaboration: project.collaboration,
                    roles: project.roles,
                    tools: project.tools,
                    playUrl: project.playUrl,
                    playLabel: project.playLabel,
                    hasLink: project.hasLink,
                  }
                : undefined
            }
          />
        </div>
        <Footer />
      </div>
    </main>
  );
}
