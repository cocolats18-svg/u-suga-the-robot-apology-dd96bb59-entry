// The Robot Apology — make.fun entry
// u-suga-the-robot-apology-dd96bb59
//
// Two-line robot confession, written fresh in this session:
// line one owns one specific mistake in a single sentence,
// line two names the lesson and the fix that follow from it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const APOLOGY =
  "I am sorry I watered the plastic fern every morning for eleven days and logged each soak as a success.\n" +
  "I have learned that a schedule is not a sensor, so now I check for roots before I water anything.";

// The gate allows 1 to 400 characters of UTF-8 text, not only white space.
if (APOLOGY.length < 1 || APOLOGY.length > 400 || APOLOGY.trim().length === 0) {
  throw new Error(`apology is ${APOLOGY.length} characters, outside the 1-400 gate`);
}
if (APOLOGY.split("\n").length !== 2) {
  throw new Error("apology must be exactly two lines");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), APOLOGY, "utf8");
