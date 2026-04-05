import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const cssPath = path.join(
  rootDir,
  "src/app/service-areas/rogers-ar/page.module.css",
);
const pagePath = path.join(rootDir, "src/app/service-areas/rogers-ar/page.js");

const [css, pageJs] = await Promise.all([
  readFile(cssPath, "utf8"),
  readFile(pagePath, "utf8"),
]);

assert.match(
  css,
  /\.hero\s*\{[\s\S]*?min-height:\s*100dvh\s*;[\s\S]*?\}/,
  ".hero must include min-height: 100dvh",
);

assert.match(
  css,
  /\.heroInner\s*\{[\s\S]*?min-height:\s*calc\(100dvh\s*-\s*72px\)\s*;[\s\S]*?justify-content:\s*center\s*;[\s\S]*?\}/,
  ".heroInner must include min-height: calc(100dvh - 72px) and justify-content: center",
);

assert.match(
  pageJs,
  /<section className=\{styles\.hero\}>[\s\S]*?<div className=\{styles\.heroScene\}>/,
  "Hero markup must include heroScene wrapper inside hero section",
);

console.log("Hero-stage checks passed.");
