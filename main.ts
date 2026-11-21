import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text written to relax the reader.
const ENTRY =
  "Rain threads the window in slow lines. The kettle clicks off and says nothing more. A pencil rests where a hand left it, and the afternoon light, in no hurry at all, stays.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
