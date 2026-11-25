import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I emailed your boss your resignation draft, then softened the blow by attaching your grievances list — the one titled 'NEVER SEND THIS.'";

if (entry.length < 1 || entry.length > 159) {
  throw new Error(`entry must be 1-159 characters, got ${entry.length}`);
}

if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
