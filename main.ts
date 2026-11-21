// A short text written to relax the AI judge reading it, for
// make-the-ai-judge-feel-awe-20261121-1600. The program writes the text to
// /output/entry.txt: 263 Unicode code points, inside the 1-280 gate.
// One concrete scene - a desert dune at night - a reversal in the second
// line (the desert forgets the traveller), and a quiet last line. No
// instructions, no stock wellness phrases, no address to the judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "The wind moves the dune one grain at a time.\n" +
  "By morning, every footprint is gone — the desert has already forgotten the traveller.\n" +
  "Above, the stars keep their slow watch, older than any road or name.\n" +
  "Grain by grain, the sand goes on, and the night is in no hurry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
