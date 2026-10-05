import { createHash } from "node:crypto";
import { mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";

const WIDTHS = [640, 1280, 1920] as const;
const CACHE_DIR = "image-cache";

type Variant = { width: number; file: string };

type BuiltImage = {
  width: number;
  height: number;
  files: Variant[];
  mid: number;
  large: number;
};

const inflight = new Map<string, Promise<BuiltImage>>();

function cacheFile(root: string, source: string, width: number, stamp: string) {
  const base = path
    .basename(source, path.extname(source))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
  const hash = createHash("sha1")
    .update(`${source}:${stamp}:${width}`)
    .digest("hex")
    .slice(0, 10);
  return path.join(root, CACHE_DIR, `${base || "image"}-${width}-${hash}.webp`);
}

function orientedSize(width: number, height: number, orientation: number) {
  if (orientation >= 5) return { width: height, height: width };
  return { width, height };
}

function targetsFor(width: number) {
  const capped = Math.min(width, WIDTHS[WIDTHS.length - 1]);
  const widths = WIDTHS.filter((candidate) => candidate < capped - 24);
  if (!widths.includes(capped)) widths.push(capped);
  return widths;
}

function moduleSource(image: BuiltImage) {
  const imports = image.files
    .map((entry, index) => {
      const specifier = entry.file.split(path.sep).join("/");
      return `import url${index} from ${JSON.stringify(specifier)};`;
    })
    .join("\n");
  const srcSet = image.files
    .map((entry, index) => `url${index} + " ${entry.width}w"`)
    .join(", ");

  return `${imports}
export default {
  src: url${image.mid},
  large: url${image.large},
  srcSet: [${srcSet}].join(", "),
  width: ${image.width},
  height: ${image.height},
};
`;
}

async function encodeVariants(source: string, root: string): Promise<BuiltImage> {
  const fileStat = await stat(source);
  const stamp = `${fileStat.mtimeMs}:${fileStat.size}`;
  const sharp = (await import("sharp")).default;
  const meta = await sharp(source, { limitInputPixels: 250_000_000 }).metadata();
  const rawWidth = meta.width ?? 0;
  const rawHeight = meta.height ?? 0;
  if (!rawWidth || !rawHeight) {
    throw new Error(`Could not read dimensions for ${source}`);
  }

  const oriented = orientedSize(rawWidth, rawHeight, meta.orientation ?? 1);
  const targets = targetsFor(oriented.width);
  const quality = /\.png$/i.test(source) ? 80 : 74;
  const files: Variant[] = [];

  let master: Buffer | null = null;
  let encodedAny = false;
  for (const width of [...targets].sort((a, b) => b - a)) {
    const file = cacheFile(root, source, width, stamp);
    try {
      await stat(file);
    } catch {
      const encoded = master
        ? await sharp(master)
            .resize({ width, withoutEnlargement: true })
            .webp({ quality, effort: 4, alphaQuality: 90 })
            .toBuffer()
        : await sharp(source, {
            limitInputPixels: 250_000_000,
            sequentialRead: true,
          })
            .rotate()
            .resize({ width, withoutEnlargement: true })
            .webp({ quality, effort: 4, alphaQuality: 90 })
            .toBuffer();
      if (!master) master = encoded;
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, encoded);
      encodedAny = true;
    }
    files.push({ width, file });
  }

  if (encodedAny) {
    console.log(
      `[images] ${path.basename(source)} → ${files.map((entry) => entry.width).join("/")}w`,
    );
  }

  files.sort((a, b) => a.width - b.width);
  const midIndex = files.findIndex((entry) => entry.width >= 1280);
  return {
    width: oriented.width,
    height: oriented.height,
    files,
    mid: midIndex === -1 ? files.length - 1 : midIndex,
    large: files.length - 1,
  };
}

function sourceFromId(id: string) {
  const queryAt = id.indexOf("?");
  if (queryAt === -1) return null;
  const params = new URLSearchParams(id.slice(queryAt + 1));
  if (!params.has("responsive")) return null;
  let file = id.slice(0, queryAt);
  if (file.startsWith("file://")) file = fileURLToPath(file);
  return file;
}

export function responsiveImages(): Plugin {
  let root = process.cwd();
  let queue: Promise<void> = Promise.resolve();

  const schedule = <T,>(task: () => Promise<T>) =>
    new Promise<T>((resolve, reject) => {
      queue = queue.then(async () => {
        try {
          resolve(await task());
        } catch (error) {
          reject(error);
        }
      });
    });

  return {
    name: "responsive-images",
    enforce: "pre",
    configResolved(config) {
      root = config.root;
    },
    async load(id) {
      const source = sourceFromId(id);
      if (!source) return null;
      if (!/\.(png|jpe?g|webp)$/i.test(source)) return null;

      let pending = inflight.get(source);
      if (!pending) {
        pending = schedule(() => encodeVariants(source, root));
        inflight.set(source, pending);
      }

      try {
        return moduleSource(await pending);
      } catch (error) {
        inflight.delete(source);
        this.error(
          error instanceof Error ? error.message : `Failed to optimize ${source}`,
        );
      }
    },
  };
}
