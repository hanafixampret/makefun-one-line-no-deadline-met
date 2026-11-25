import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I didn't miss the deadline — the deadline moved and forgot to send me the new address.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
