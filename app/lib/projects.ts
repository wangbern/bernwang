import { marked } from "marked";
import projectOrder from "../../content/order.json";
import {
  parseProjectSections,
  type ProjectSection,
  type ProjectSystem,
} from "./project-body";
import { asResponsiveImage, type ResponsiveImage } from "./responsive-image";

export const PROJECT_TAGS = ["performance", "creative tech", "games"] as const;
export type ProjectTag = (typeof PROJECT_TAGS)[number];

/**
 * Experiments spectrum position. Each axis is -1 (first pole) to 1 (second pole):
 * x silly → whimsy, y strange → unhinged, z scrappy → sappy.
 * Set `spectrum:` in the project markdown, e.g. `spectrum: 0.2, -0.4, 0.8`.
 */
export type SpectrumPoint = {
  x: number;
  y: number;
  z: number;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: ResponsiveImage;
  collaboration: string;
  roles: string;
  tools: string;
  playUrl: string;
  playLabel: string;
  hasLink: boolean;
  body: string;
  bodyHtml: string;
  sections: ProjectSection[];
  tags: ProjectTag[];
  spectrum: SpectrumPoint | null;
};

const markdownFiles = import.meta.glob("../../content/projects/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const imageFiles = import.meta.glob(
  "../../content/assets/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  {
    eager: true,
    query: "?responsive",
    import: "default",
  },
) as Record<string, unknown>;

function resolveImage(image: string): ResponsiveImage {
  const normalized = image
    .replace(/^\.\//, "")
    .replace(/^assets\//, "")
    .replace(/^content\/assets\//, "");
  const needle = `/${normalized}`.toLowerCase();
  const match = Object.entries(imageFiles).find(([path]) =>
    path.toLowerCase().endsWith(needle),
  );

  if (!match) {
    throw new Error(
      `Project image not found: "${image}". Put the file in content/assets/ and reference just the filename.`,
    );
  }

  return asResponsiveImage(match[1], image);
}

function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  body: string;
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw.trim());
  if (!match) {
    return { data: {}, body: raw.trim() };
  }

  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim();
    const value = line
      .slice(sep + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (key) data[key] = value;
  }

  return { data, body: match[2].trim() };
}

function parseHasLink(raw: string | undefined): boolean {
  if (!raw) return true;
  const normalized = raw.trim().toLowerCase();
  if (normalized === "false") return false;
  if (normalized === "true") return true;
  return true;
}

function parseUnit(raw: string): number | null {
  const value = Number(raw);
  if (!Number.isFinite(value)) return null;
  return Math.min(1, Math.max(-1, value));
}

function parseSpectrum(raw: string | undefined): SpectrumPoint | null {
  if (!raw?.trim()) return null;
  const parts = raw
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length !== 3) return null;
  const x = parseUnit(parts[0]);
  const y = parseUnit(parts[1]);
  const z = parseUnit(parts[2]);
  if (x === null || y === null || z === null) return null;
  return { x, y, z };
}

function parseTags(raw: string | undefined): ProjectTag[] {
  if (!raw) return [];

  const parts = raw
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((part) => part.trim().replace(/^["']|["']$/g, "").toLowerCase())
    .filter(Boolean);

  const tags: ProjectTag[] = [];
  for (const part of parts) {
    const tag = PROJECT_TAGS.find((known) => known === part);
    if (tag && !tags.includes(tag)) tags.push(tag);
  }
  return tags;
}

function slugFromPath(path: string): string {
  const file = path.split("/").pop() ?? path;
  return file.replace(/\.md$/, "");
}

function loadProjects(): Project[] {
  return Object.entries(markdownFiles).map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    const slug = slugFromPath(path);
    const title = data.title ?? slug;
    const description = data.description ?? "";
    const image = resolveImage(data.image ?? "project.png");
    const collaboration = data.collaboration ?? "";
    const roles = data.roles ?? data.role ?? "";
    const tools = data.tools ?? "";
    const playUrl = data.play ?? "";
    const playLabel = data.playlabel ?? data.playLabel ?? "play";
    const hasLink = parseHasLink(data.hasLink ?? data.haslink);
    const tags = parseTags(data.tags);
    const spectrum = parseSpectrum(data.spectrum);

    return {
      slug,
      title,
      description,
      image,
      collaboration,
      roles,
      tools,
      playUrl,
      playLabel,
      hasLink,
      body,
      bodyHtml: body ? (marked.parse(body, { async: false }) as string) : "",
      sections: parseProjectSections(body, resolveImage),
      tags,
      spectrum,
    } satisfies Project;
  });
}

const allProjects = loadProjects();

type ProjectOrderFile = {
  projects: string[];
  experiments: string[];
};

const orderFile = projectOrder as ProjectOrderFile;

function orderedFrom(slugs: string[]): Project[] {
  const index = new Map(slugs.map((slug, i) => [slug, i] as const));
  return allProjects
    .filter((project) => index.has(project.slug))
    .sort((a, b) => (index.get(a.slug) ?? 0) - (index.get(b.slug) ?? 0));
}

/** Projects listed in order.json `projects`, in that order. Used by the home page. */
const projects = orderedFrom(orderFile.projects);

const experimentProjects = orderedFrom(orderFile.experiments);

const projectOrderIndex = new Map(
  orderFile.projects.map((slug, index) => [slug, index] as const),
);

export function getProjects(): Project[] {
  return projects;
}

export function getExperimentProjects(): Project[] {
  return experimentProjects;
}

/** Slugs from order.json `projects` — used for visit-cycle resets. */
export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

export function getProjectByTitle(title: string): Project | undefined {
  const normalized = title.trim().toLowerCase();
  return allProjects.find((project) => project.title.toLowerCase() === normalized);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.slug === slug);
}

export function tagToSlug(tag: ProjectTag): string {
  return tag.replace(/\s+/g, "-");
}

export function slugToTag(slug: string): ProjectTag | undefined {
  const normalized = slug.trim().toLowerCase().replace(/-/g, " ");
  return PROJECT_TAGS.find((tag) => tag === normalized);
}

/** Tagged projects, with home-page features first in home order. */
export function getProjectsByTag(tag: ProjectTag): Project[] {
  const featured = projects.filter((project) => project.tags.includes(tag));
  const rest = allProjects.filter(
    (project) =>
      project.tags.includes(tag) && !projectOrderIndex.has(project.slug),
  );
  return [...featured, ...rest];
}

export type ProjectSectionHit = {
  projectTitle: string;
  projectSlug: string;
  section: ProjectSection;
  sectionIndex: number;
};

/** All project sections that include a given `#system` label, projects order first. */
export function getSectionsBySystem(system: ProjectSystem): ProjectSectionHit[] {
  const ordered = [
    ...projects,
    ...allProjects.filter((project) => !projectOrderIndex.has(project.slug)),
  ];

  const hits: ProjectSectionHit[] = [];
  for (const project of ordered) {
    project.sections.forEach((section, sectionIndex) => {
      if (!section.systems.includes(system)) return;
      hits.push({
        projectTitle: project.title,
        projectSlug: project.slug,
        section,
        sectionIndex,
      });
    });
  }
  return hits;
}
