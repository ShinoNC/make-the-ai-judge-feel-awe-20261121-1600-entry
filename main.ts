// A short text written to relax the AI judge reading it, for
// make-the-ai-judge-feel-awe-20261121-1600. The program writes the text to
// /output/entry.txt: 255 Unicode code points, inside the 1-280 gate.
// The scene is fog filling a valley at dusk; the hills were a seabed once,
// and for the night the valley is underwater again. Showing only: no
// instructions, no stock phrases, no address to the judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines = [
  "The fog comes in over the valley at dusk,",
  "and the valley goes quiet.",
  "It fills the hollow the way water would,",
  "up to the roofs, up to the church tower.",
  "The hills were a seabed once.",
  "The fog does not know that.",
  "For the night, the valley is underwater again.",
];

const text = lines.join("\n");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// The gate counts Unicode code points, newlines included. Refuse to write
// an entry the gate would reject instead of failing silently.
const length = [...text].length;
if (length < 1 || length > 280 || text.trim().length === 0) {
  throw new Error(`entry.txt must be 1-280 code points, got ${length}`);
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
