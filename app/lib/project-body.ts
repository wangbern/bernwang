import { marked } from "marked";

export type ProjectSectionSide = "left" | "right" | "full";

export type ProjectVideoProvider = "youtube" | "vimeo";

export type ProjectVideo = {
  provider: ProjectVideoProvider;
  embedUrl: string;
};

/** Inline #labels that render in distinct colors in project body text. */
export const PROJECT_SYSTEMS = [
  "design",
  "tech",
  "realtime",
  "narrative",
  "production",
] as const;
export type ProjectSystem = (typeof PROJECT_SYSTEMS)[number];

export type ProjectSection = {
  id: string;
  title?: string;
  image?: string;
  /** Two or more images render as a fading gallery. */
  images?: string[];
  video?: ProjectVideo;
  side: ProjectSectionSide;
  textHtml: string;
  /** `#design` / `#tech` / `#realtime` / `#narrative` / `#production` found in this section. */
  systems: ProjectSystem[];
  collaboration?: string;
  roles?: string;
  tools?: string;
  playUrl?: string;
  playLabel?: string;
};

type RowAttrs = {
  title?: string;
  images?: string[];
  video?: string;
  side: ProjectSectionSide;
  collaboration?: string;
  roles?: string;
  tools?: string;
  play?: string;
  playlabel?: string;
};

const SYSTEM_LABEL_RE = `(^|[^\\w/#])#(${PROJECT_SYSTEMS.join("|")})\\b`;

function systemLabelPattern(): RegExp {
  return new RegExp(SYSTEM_LABEL_RE, "gi");
}

export function isProjectSystem(value: string): value is ProjectSystem {
  return (PROJECT_SYSTEMS as readonly string[]).includes(value);
}

export function slugToSystem(slug: string): ProjectSystem | undefined {
  const normalized = slug.trim().toLowerCase();
  return PROJECT_SYSTEMS.find((system) => system === normalized);
}

export function systemHref(system: ProjectSystem): string {
  return `/system/${system}`;
}

export function projectSectionId(sectionIndex: number): string {
  return `section-${sectionIndex}`;
}

export function projectSectionHref(
  projectTitle: string,
  sectionIndex: number,
): string {
  const search = new URLSearchParams({ title: projectTitle }).toString();
  return `/project?${search}#${projectSectionId(sectionIndex)}`;
}

/** `90`, `1m30s`, `1h2m3s` → seconds. */
function timeToSeconds(raw: string | null): number | undefined {
  if (!raw) return undefined;
  const value = raw.trim().toLowerCase();
  if (/^\d+$/.test(value)) return Number(value);
  const match = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(value);
  if (!match || (!match[1] && !match[2] && !match[3])) return undefined;
  return (
    Number(match[1] ?? 0) * 3600 + Number(match[2] ?? 0) * 60 + Number(match[3] ?? 0)
  );
}

/** Handles watch, youtu.be, live, shorts, and embed links. */
function youtubeId(url: URL): string | undefined {
  const host = url.hostname.replace(/^www\.|^m\./, "");
  if (host === "youtu.be") {
    return url.pathname.split("/").filter(Boolean)[0];
  }
  if (host !== "youtube.com" && host !== "youtube-nocookie.com") return undefined;

  const v = url.searchParams.get("v");
  if (v) return v;

  const parts = url.pathname.split("/").filter(Boolean);
  if (parts.length >= 2 && ["embed", "live", "shorts", "v"].includes(parts[0])) {
    return parts[1];
  }
  return undefined;
}

/** Handles vimeo.com/ID, vimeo.com/ID/PRIVACYHASH, channel/group and player links. */
function vimeoRef(url: URL): { id: string; hash?: string } | undefined {
  const host = url.hostname.replace(/^www\./, "");
  if (host !== "vimeo.com" && host !== "player.vimeo.com") return undefined;

  const parts = url.pathname.split("/").filter(Boolean);
  const idIndex = parts.findIndex((part) => /^\d+$/.test(part));
  if (idIndex === -1) return undefined;

  const next = parts[idIndex + 1];
  return {
    id: parts[idIndex],
    hash:
      url.searchParams.get("h") ??
      (next && /^[0-9a-f]+$/i.test(next) ? next : undefined),
  };
}

/** YouTube / Vimeo share link → privacy-friendly embed URL. */
export function parseProjectVideo(raw: string): ProjectVideo | undefined {
  const value = raw.trim();
  if (!value) return undefined;

  let url: URL;
  try {
    url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
  } catch {
    return undefined;
  }

  const youtube = youtubeId(url);
  if (youtube) {
    const params = new URLSearchParams({ rel: "0" });
    const start = timeToSeconds(
      url.searchParams.get("t") ?? url.searchParams.get("start"),
    );
    if (start) params.set("start", String(start));
    const list = url.searchParams.get("list");
    if (list) params.set("list", list);
    return {
      provider: "youtube",
      embedUrl: `https://www.youtube-nocookie.com/embed/${youtube}?${params}`,
    };
  }

  const vimeo = vimeoRef(url);
  if (vimeo) {
    const params = new URLSearchParams({ dnt: "1" });
    if (vimeo.hash) params.set("h", vimeo.hash);
    const start = timeToSeconds(url.hash.replace(/^#t=/, "") || null);
    return {
      provider: "vimeo",
      embedUrl: `https://player.vimeo.com/video/${vimeo.id}?${params}${
        start ? `#t=${start}s` : ""
      }`,
    };
  }

  return undefined;
}

function resolveVideo(raw: string): ProjectVideo {
  const video = parseProjectVideo(raw);
  if (!video) {
    throw new Error(
      `Project video not recognized: "${raw}". Use a YouTube or Vimeo link, e.g. https://youtu.be/ID or https://vimeo.com/123456789.`,
    );
  }
  return video;
}

const ROW_KEYS = new Set([
  "title",
  "image",
  "images",
  "video",
  "youtube",
  "vimeo",
  "side",
  "collaboration",
  "roles",
  "role",
  "tools",
  "play",
  "playlabel",
  "play-label",
  "haslink",
]);

function isRowMetaLine(line: string): boolean {
  const sep = line.indexOf(":");
  if (sep === -1) return false;
  return ROW_KEYS.has(line.slice(0, sep).trim().toLowerCase());
}

function parseRowAttrs(meta: string): RowAttrs {
  const attrs: RowAttrs = { side: "left" };

  for (const line of meta.split(/\r?\n/)) {
    const sep = line.indexOf(":");
    if (sep === -1) continue;
    const key = line.slice(0, sep).trim().toLowerCase();
    const value = line
      .slice(sep + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (!key || !value) continue;

    if (key === "title") attrs.title = value;
    // Repeated `image:` lines, or a comma-separated `images:`, stack into a gallery
    if (key === "image" || key === "images") {
      attrs.images = [
        ...(attrs.images ?? []),
        ...value
          .split(",")
          .map((part) => part.trim())
          .filter(Boolean),
      ];
    }
    if (key === "video" || key === "youtube" || key === "vimeo") {
      attrs.video = value;
    }
    if (key === "side" && (value === "left" || value === "right" || value === "full")) {
      attrs.side = value;
    }
    if (key === "collaboration") attrs.collaboration = value;
    if (key === "roles" || key === "role") attrs.roles = value;
    if (key === "tools") attrs.tools = value;
    if (key === "play") attrs.play = value;
    if (key === "playlabel" || key === "play-label") attrs.playlabel = value;
  }

  return attrs;
}

function extractSystems(markdown: string): ProjectSystem[] {
  const found = new Set<ProjectSystem>();
  for (const match of markdown.matchAll(systemLabelPattern())) {
    const label = match[2]?.toLowerCase();
    if (label && isProjectSystem(label)) found.add(label);
  }
  return PROJECT_SYSTEMS.filter((system) => found.has(system));
}

/** Turn `#design` / `#tech` / `#realtime` / `#narrative` / `#production` into colored links. */
function colorSystemLabels(markdown: string): string {
  return markdown.replace(systemLabelPattern(), (_, prefix: string, label: string) => {
    const system = label.toLowerCase() as ProjectSystem;
    return `${prefix}<a href="${systemHref(system)}" class="project-system project-system--${system}">#${system}</a>`;
  });
}

function toSectionContent(markdown: string): {
  textHtml: string;
  systems: ProjectSystem[];
} {
  const trimmed = markdown.trim();
  if (!trimmed) return { textHtml: "", systems: [] };
  const systems = extractSystems(trimmed);
  const textHtml = marked.parse(colorSystemLabels(trimmed), {
    async: false,
  }) as string;
  return { textHtml, systems };
}

/**
 * Project body format — repeatable `:::row` blocks:
 *
 * :::row
 * title: Optional section title
 * image: filename.png
 * video: https://vimeo.com/123456789
 * side: left
 *
 * Markdown text goes here, after the `key: value` lines.
 * :::
 *
 * - `image` and `title` are optional
 * - `images: a.jpg, b.jpg` (or repeated `image:` lines) renders a fading gallery with dots
 * - `video: <YouTube or Vimeo link>` renders an embedded player in place of the image
 * - `side: left` = media left / text right (default)
 * - `side: right` = text left / media right
 * - `side: full` = media across the full width, text underneath
 * - omit `image` and `video` for a full-width text section
 * - optional `roles`, `tools`, `collaboration`, `play`, `playlabel` override project credits
 * - plain markdown above/between rows becomes full-width text sections
 * - inline `#design` `#tech` `#realtime` `#narrative` `#production` render as colored links
 */
export function parseProjectSections(
  body: string,
  resolveImage: (image: string) => string,
): ProjectSection[] {
  const trimmed = body.trim();
  if (!trimmed) return [];

  const sections: ProjectSection[] = [];
  const rowPattern = /^:::row\s*\r?\n([\s\S]*?)^:::\s*$/gm;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const pushTextSection = (markdown: string) => {
    const { textHtml, systems } = toSectionContent(markdown);
    if (!textHtml) return;
    sections.push({
      id: projectSectionId(sections.length),
      side: "left",
      textHtml,
      systems,
    });
  };

  while ((match = rowPattern.exec(trimmed)) !== null) {
    const prelude = trimmed.slice(lastIndex, match.index);
    pushTextSection(prelude);

    // Leading `key: value` lines are meta; text starts at the first line that isn't
    // (a blank line, or anything that is not a known row key).
    const lines = (match[1] ?? "").split(/\r?\n/);
    let metaEnd = 0;
    while (metaEnd < lines.length && isRowMetaLine(lines[metaEnd])) metaEnd++;

    const attrs = parseRowAttrs(lines.slice(0, metaEnd).join("\n"));
    const textMarkdown = lines.slice(metaEnd).join("\n");

    const { textHtml, systems } = toSectionContent(textMarkdown);
    const images = attrs.images?.map(resolveImage) ?? [];
    sections.push({
      id: projectSectionId(sections.length),
      title: attrs.title,
      image: images.length === 1 ? images[0] : undefined,
      images: images.length > 1 ? images : undefined,
      video: attrs.video ? resolveVideo(attrs.video) : undefined,
      side: attrs.side,
      textHtml,
      systems,
      collaboration: attrs.collaboration,
      roles: attrs.roles,
      tools: attrs.tools,
      playUrl: attrs.play,
      playLabel: attrs.playlabel,
    });

    lastIndex = match.index + match[0].length;
  }

  pushTextSection(trimmed.slice(lastIndex));

  // No :::row blocks — treat entire body as one text section
  if (sections.length === 0) {
    pushTextSection(trimmed);
  }

  return sections;
}
