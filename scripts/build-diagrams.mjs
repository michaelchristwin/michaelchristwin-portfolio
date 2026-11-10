// scripts/build-diagrams.mjs
import { readdirSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { basename } from "node:path";

const SRC = "diagrams";
const OUT = "public/diagrams";
mkdirSync(OUT, { recursive: true });

for (const file of readdirSync(SRC).filter((f) => f.endsWith(".mmd"))) {
  const name = basename(file, ".mmd");
  execFileSync(
    "mmdc",
    [
      "-i",
      `${SRC}/${file}`,
      "-o",
      `${OUT}/${name}.svg`,
      "-t",
      "dark",
      "-b",
      "transparent",
      "-c",
      "mermaid.config.json",
    ],
    { stdio: "inherit" },
  );
}
