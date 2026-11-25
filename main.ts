// Dad Joke Showdown — one dad joke, written to /output/entry.txt
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I made a belt out of old keyboards. It was a total waste of space; I ran out of spacebar halfway through.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Gate validation: the entry must be 1-200 chars and not only whitespace,
// with no surrounding whitespace of its own.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`Joke is ${JOKE.length} chars; gate requires 1-200 chars.`);
}
if (JOKE.trim() !== JOKE || JOKE.trim().length === 0) {
  throw new Error("Joke must not have surrounding whitespace and must not be blank.");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} chars to ${join(outDir, "entry.txt")}`);
