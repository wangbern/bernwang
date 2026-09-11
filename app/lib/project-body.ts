import { marked } from "marked";

export type ProjectSectionSide = "left" | "right";

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
  image?: string;
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
    if (key === "image") attrs.image = value;
    if (key === "side" && (value === "left" || value === "right")) {
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
 * side: left
 *
 * Markdown text goes here after a blank line.
 * :::
 *
 * - `image` and `title` are optional
 * - `side: left` = image left / text right (default)
 * - `side: right` = text left / image right
 * - omit `image` for a full-width text section
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

    const block = match[1] ?? "";
    const metaSplit = /\r?\n\r?\n/.exec(block);
    let attrs: RowAttrs;
    let textMarkdown: string;

    if (metaSplit) {
      const meta = block.slice(0, metaSplit.index);
      // Meta lines must look like key: value; otherwise the whole block is text
      const looksLikeMeta = meta
        .split(/\r?\n/)
        .every((line) => !line.trim() || /^[\w-]+\s*:/.test(line));
      if (looksLikeMeta) {
        attrs = parseRowAttrs(meta);
        textMarkdown = block.slice(metaSplit.index + metaSplit[0].length);
      } else {
        attrs = { side: "left" };
        textMarkdown = block;
      }
    } else if (/^[\w-]+\s*:/.test(block.trim())) {
      // Meta only, no text body
      attrs = parseRowAttrs(block);
      textMarkdown = "";
    } else {
      attrs = { side: "left" };
      textMarkdown = block;
    }

    const { textHtml, systems } = toSectionContent(textMarkdown);
    sections.push({
      id: projectSectionId(sections.length),
      title: attrs.title,
      image: attrs.image ? resolveImage(attrs.image) : undefined,
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
