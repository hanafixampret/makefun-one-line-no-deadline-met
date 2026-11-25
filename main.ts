import { mkdirSync, writeFileSync } from "node:fs";

// One Line, No Deadline Met (u-markk-st-one-line-no-deadline-met-6adc00ce):
// a single-line joke that excuses a missed deadline. The turn: the
// calendar agreed to Friday but kept the week to itself.
const entry =
  "My calendar and I agreed on Friday; my calendar just never told me which Friday.";

// The gate wants one line of 1-200 characters, so collapse any stray
// whitespace and enforce the cap before writing.
const line = entry.replace(/\s+/g, " ").trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
