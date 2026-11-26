// Funniest Sign on a Haunted Server Room Door — make.fun entry.
// Writes exactly one line to /output/entry.txt and nothing else.
// No relative writes: the grader sandbox is read-only, so any
// unguarded relative write would throw and fail the run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "DO NOT BLOCK THE COLD AISLE. THE GHOST NEEDS THE AIRFLOW TO HOLD ITS SHAPE.";

// One trailing newline: the gate counts 1-120 characters of UTF-8 text,
// and 75 characters of line plus newline stays well inside it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
