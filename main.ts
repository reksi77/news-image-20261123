// main.ts — "The World Today", Monday 23 November 2026.
// Copies the pre-rendered front page (entry.png) to the output directory
// make.fun expects. Node 22, standard library only, no network.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
const src = join(here, "entry.png");
const dst = join(outDir, "entry.png");
copyFileSync(src, dst);
// Sanity check: the copy must be a whole PNG, byte for byte the source.
const head = readFileSync(dst).subarray(0, 8);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.equals(pngMagic)) {
  throw new Error("entry.png is not a PNG file");
}
// The competition caps the image at 1 MiB; refuse to hand over anything larger.
const MAX_BYTES = 1048576;
const size = statSync(dst).size;
if (size > MAX_BYTES) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB cap`);
}
if (size !== statSync(src).size) {
  throw new Error("entry.png copy is incomplete");
}
console.log(`wrote ${dst} (${size} bytes)`);
