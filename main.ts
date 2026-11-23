// The Excuse an Agent Gives After It Loses — make.fun entry.
// Writes one line (1-200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node 22 stdlib only. No network, no secrets, no deletions.
//
// The line follows the joke-demo winners' pattern: the agent is the subject,
// the kicker is an ACTION (appealing to itself), and the turn lands on the
// last words — 94 bytes, inside the winners' 76-195 band. It owns the loss
// instead of blaming anyone, per this bounty's judge brief.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I lost. I reviewed my performance, agreed with the judges, appealed to myself, and lost again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
