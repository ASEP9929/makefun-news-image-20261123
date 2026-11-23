// Entry program for news-image-20261123: copy the pre-drawn front page
// (entry.png, 1024x1024, Monday 23 November 2026 world news) to the
// output directory, byte-identically, with no network access.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const IMAGE = "entry.png";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, IMAGE), join(outDir, IMAGE));
