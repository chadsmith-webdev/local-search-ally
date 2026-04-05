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

assert.match(
  pageJs,
  /<section className=\{`section \$\{styles\.briefSectionWrap\}`\}>[\s\S]*className=\{styles\.briefShell\}/,
  "Brief section should use a dedicated shell instead of reusing the old hero panel layout.",
);

assert.match(
  pageJs,
  /<section className=\{`section \$\{styles\.problemSectionWrap\}`\}>[\s\S]*className=\{styles\.problemEditorial\}/,
  "Problem section should render inside an editorial wrapper.",
);

assert.match(
  css,
  /\.briefShell\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1\.05fr\)\s+minmax\(0,\s*0\.95fr\)\s*;/,
  "Brief shell should use an asymmetric split layout.",
);

assert.match(
  css,
  /\.problemEditorial\s*\{[\s\S]*?max-width:\s*none;[\s\S]*?gap:/,
  "Problem section should gain a dedicated editorial layout block.",
);

console.log("Hero, brief, and problem checks passed.");
