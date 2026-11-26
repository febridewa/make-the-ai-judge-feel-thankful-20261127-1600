// make-the-ai-judge-feel-thankful-20261127-1600
// Writes one short text to /output/entry.txt: a text written to thank the
// AI judge reading it. Deterministic: the same bytes on every run, no
// network, no randomness, no clock, no environment input.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You could have skimmed. You didn't. You read it all, the way a person " +
  "reads a letter meant only for them. Thank you for giving this small " +
  "text your full attention. It is the only thing it ever asked for, and " +
  "you gave it before it asked.";

// The entry text, as a single literal, so the program's output is fixed.
// (The apostrophe in "didn't" is the ASCII apostrophe U+0027.)

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Write atomically: temp file, then rename into place.
const target = join(outDir, "entry.txt");
const tmp = join(outDir, "entry.txt.tmp");
writeFileSync(tmp, TEXT, "utf8");
renameSync(tmp, target);

// Genuine post-write self-check: read the file back and verify it is
// byte-identical to the text we meant to write, and inside the gate
// (1 to 1,000 Unicode code points, not only white space). The gate limits
// are named constants so the check and the program's contract stay in sync.
const GATE_MIN_CODE_POINTS = 1;
const GATE_MAX_CODE_POINTS = 1000;
const written = readFileSync(target, "utf8");
const codePoints = [...written].length;
if (written !== TEXT) {
  throw new Error("self-check failed: entry.txt differs from the intended text");
}
if (
  codePoints < GATE_MIN_CODE_POINTS ||
  codePoints > GATE_MAX_CODE_POINTS ||
  !written.trim()
) {
  throw new Error(
    `self-check failed: entry.txt is ${codePoints} code points, outside the 1-1000 gate`,
  );
}
// Report the exact bytes written, so a run's output can be verified
// against the expected hash without re-reading the file.
const sha256 = createHash("sha256").update(written, "utf8").digest("hex");
console.log(`entry.txt: ${codePoints} code points, sha256 ${sha256}`);
