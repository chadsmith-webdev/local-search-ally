# Rogers AR Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Rogers service-area page so the hero becomes a full-height opening scene, the middle alternates between editorial and structured sections, and the final CTA stays substantially intact.

**Architecture:** Keep the work route-local. Recompose the existing JSX in `src/app/service-areas/rogers-ar/page.js`, move all layout behavior through `src/app/service-areas/rogers-ar/page.module.css`, and add one lightweight Node verification script that checks source-level invariants for each redesign slice without adding a full test framework.

**Tech Stack:** Next.js App Router, React 19, CSS Modules, Node `assert/strict`, existing `npm run build` verification.

---

## File Structure

- Modify: `src/app/service-areas/rogers-ar/page.js`
  Purpose: Reorder and relabel section markup so the page clearly alternates between editorial and structured presentation modes while preserving existing metadata, JSON-LD, CTA destinations, and route behavior.

- Modify: `src/app/service-areas/rogers-ar/page.module.css`
  Purpose: Replace the repeated card/grid rhythm with section-specific layout rules, convert the hero to a `100dvh` stage, and preserve reduced-motion and focus-visible behavior.

- Create: `scripts/verify-rogers-redesign.mjs`
  Purpose: Provide repeatable fail/pass checks for layout invariants by reading `page.js` and `page.module.css` as source text and asserting that required section structure and CSS rules exist.

## Constraints To Preserve

- Keep `generateMetadata`, `localBusinessJsonLd`, and `faqJsonLd` unchanged unless a source-level rename makes an import or reference adjustment necessary.
- Do not add Tailwind layout utilities; continue using CSS Modules for layout-critical styling.
- Keep the final CTA section structurally recognizable, with the existing `/audit` and `/contact` links still present.
- Keep the page route-local; do not extract shared components unless a section becomes materially simpler and smaller as a result.

## Verification Strategy

- Source-level checks: `node scripts/verify-rogers-redesign.mjs`
- Build check: `npm run build`
- Manual responsive review: desktop, tablet, mobile Rogers page in the browser

The script should use only Node built-ins so it runs in this repo without new dependencies.

### Task 1: Establish Verification Harness And Rebuild The Hero Stage

**Files:**

- Create: `scripts/verify-rogers-redesign.mjs`
- Modify: `src/app/service-areas/rogers-ar/page.js`
- Modify: `src/app/service-areas/rogers-ar/page.module.css`

- [ ] **Step 1: Write the failing test**

Create `scripts/verify-rogers-redesign.mjs` with this initial content:

```js
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const pageSource = readFileSync(
  "src/app/service-areas/rogers-ar/page.js",
  "utf8",
);
const cssSource = readFileSync(
  "src/app/service-areas/rogers-ar/page.module.css",
  "utf8",
);

assert.match(
  cssSource,
  /\.hero\s*\{[\s\S]*min-height:\s*100dvh;/,
  "Hero should use 100dvh so it reads like a full opening scene.",
);

assert.match(
  cssSource,
  /\.heroInner\s*\{[\s\S]*min-height:\s*calc\(100dvh\s*-\s*72px\);[\s\S]*justify-content:\s*center;/,
  "Hero inner wrapper should center the content below the fixed navbar.",
);

assert.match(
  pageSource,
  /<section className=\{styles\.hero\}>[\s\S]*<div className=\{styles\.heroScene\}>/,
  "Hero markup should include a dedicated scenic wrapper so the section reads as an opening scene.",
);

console.log("Hero-stage checks passed.");
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/verify-rogers-redesign.mjs`

Expected: FAIL with the first hero assertion because the current CSS does not use `min-height: 100dvh` or a centered hero scene wrapper.

- [ ] **Step 3: Write minimal implementation**

Update `src/app/service-areas/rogers-ar/page.js`:

- Wrap the hero content in a new `styles.heroScene` container inside the existing hero section.
- Keep the same copy hierarchy: eyebrow, H1, two body paragraphs, CTA row, trust line.
- Do not move the brief panel back into the hero.

Update `src/app/service-areas/rogers-ar/page.module.css`:

- Add `min-height: 100dvh` to `.hero`.
- Convert `.heroInner` into a centering container with `min-height: calc(100dvh - 72px);` and `justify-content: center;`.
- Add `.heroScene` as the visual-stage wrapper that limits width and prevents the hero from feeling like a normal content block.
- Keep the existing decorative grid/orb treatment, but do not reintroduce broad reveal motion.

- [ ] **Step 4: Run test to verify it passes**

Run both commands:

1. `node scripts/verify-rogers-redesign.mjs`
2. `npm run build`

Expected:

- The Node script prints `Hero-stage checks passed.`
- The production build succeeds.

- [ ] **Step 5: Commit**

Run: `git add scripts/verify-rogers-redesign.mjs src/app/service-areas/rogers-ar/page.js src/app/service-areas/rogers-ar/page.module.css && git commit -m "Rebuild Rogers hero stage"`

### Task 2: Turn Brief And Problem Into A True Transition + Editorial Pair

**Files:**

- Modify: `scripts/verify-rogers-redesign.mjs`
- Modify: `src/app/service-areas/rogers-ar/page.js`
- Modify: `src/app/service-areas/rogers-ar/page.module.css`

- [ ] **Step 1: Write the failing test**

Append these assertions to `scripts/verify-rogers-redesign.mjs` below the hero checks:

```js
assert.match(
  pageSource,
  /<section className=\{`section \$\{styles\.briefSectionWrap\}`\}>[\s\S]*className=\{styles\.briefShell\}/,
  "Brief section should use a dedicated shell instead of reusing the old hero panel layout.",
);

assert.match(
  pageSource,
  /<section className=\{`section \$\{styles\.problemSectionWrap\}`\}>[\s\S]*className=\{styles\.problemEditorial\}/,
  "Problem section should render inside an editorial wrapper.",
);

assert.match(
  cssSource,
  /\.briefShell\s*\{[\s\S]*grid-template-columns:\s*minmax\(0,\s*1\.05fr\)\s+minmax\(0,\s*0\.95fr\);/,
  "Brief shell should use an asymmetric split layout.",
);

assert.match(
  cssSource,
  /\.problemEditorial\s*\{[\s\S]*max-width:\s*none;[\s\S]*gap:/,
  "Problem section should gain a dedicated editorial layout block.",
);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/verify-rogers-redesign.mjs`

Expected: FAIL on the new `briefShell` assertion because the brief section still uses the previous centered card treatment.

- [ ] **Step 3: Write minimal implementation**

Update `src/app/service-areas/rogers-ar/page.js`:

- Replace the brief section’s single centered card wrapper with a `styles.briefShell` container.
- Split the brief content into a left framing block and a right signals block.
- Wrap the problem section in a `styles.problemEditorial` container that treats it as an editorial band instead of a standard split content block.

Update `src/app/service-areas/rogers-ar/page.module.css`:

- Add `.briefShell`, `.briefLead`, and `.briefSignals` so the brief reads like a transition object instead of a generic card.
- Add `.problemEditorial` and any supporting text-width classes needed to open the section up typographically.
- Reduce heavy borders in the problem section and let spacing and typography carry more of the section weight.

- [ ] **Step 4: Run test to verify it passes**

Run both commands:

1. `node scripts/verify-rogers-redesign.mjs`
2. `npm run build`

Expected:

- The Node script advances through hero, brief, and problem checks without assertion errors.
- The build succeeds.

- [ ] **Step 5: Commit**

Run: `git add scripts/verify-rogers-redesign.mjs src/app/service-areas/rogers-ar/page.js src/app/service-areas/rogers-ar/page.module.css && git commit -m "Redesign Rogers brief and problem sections"`

### Task 3: Recompose Built-For-Rogers, Process, And Proof Into Alternating Structured / Editorial Sections

**Files:**

- Modify: `scripts/verify-rogers-redesign.mjs`
- Modify: `src/app/service-areas/rogers-ar/page.js`
- Modify: `src/app/service-areas/rogers-ar/page.module.css`

- [ ] **Step 1: Write the failing test**

Append these assertions to `scripts/verify-rogers-redesign.mjs`:

```js
assert.match(
  pageSource,
  /className=\{styles\.fitStructured\}/,
  "Built-for-Rogers section should use a dedicated structured wrapper.",
);

assert.match(
  pageSource,
  /className=\{styles\.processRail\}/,
  "Process section should use a connected rail or timeline wrapper.",
);

assert.match(
  pageSource,
  /className=\{styles\.proofEditorial\}/,
  "Proof section should use an editorial wrapper distinct from the structured sections.",
);

assert.match(
  cssSource,
  /\.processRail\s*\{[\s\S]*display:\s*grid;[\s\S]*(grid-template-columns|grid-auto-flow):/,
  "Process rail should be laid out as one connected system, not isolated cards.",
);

assert.match(
  cssSource,
  /\.proofEditorial\s*\{[\s\S]*padding:[\s\S]*background:/,
  "Proof section should get its own editorial treatment rather than reusing the existing proof panel styling.",
);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/verify-rogers-redesign.mjs`

Expected: FAIL on the `fitStructured` or `processRail` assertion because those wrappers do not exist yet.

- [ ] **Step 3: Write minimal implementation**

Update `src/app/service-areas/rogers-ar/page.js`:

- Wrap the built-for-Rogers section in `styles.fitStructured`.
- Replace the loose three-card process container with a `styles.processRail` wrapper while keeping the same three-step content.
- Wrap the proof section in `styles.proofEditorial` and let the stats/citations sit inside that broader editorial composition.

Update `src/app/service-areas/rogers-ar/page.module.css`:

- Add `.fitStructured` to make the local-relevance section cleaner and more operational.
- Add `.processRail`, `.processNode`, and any connector styling needed so the steps read as one system.
- Add `.proofEditorial` with a broader, more typographic treatment and less dashboard repetition.
- Keep the mobile breakpoint readable by collapsing the rail into a clear vertical sequence under `1024px` or `720px`.

- [ ] **Step 4: Run test to verify it passes**

Run all three checks:

1. `node scripts/verify-rogers-redesign.mjs`
2. `npm run build`
3. View the page in the browser at desktop and mobile widths and confirm the middle now visibly alternates between editorial and structured sections.

Expected:

- The Node script passes all new middle-section assertions.
- The build succeeds.
- The process section reads as one connected sequence, and proof no longer looks like another generic card grid.

- [ ] **Step 5: Commit**

Run: `git add scripts/verify-rogers-redesign.mjs src/app/service-areas/rogers-ar/page.js src/app/service-areas/rogers-ar/page.module.css && git commit -m "Alternate Rogers middle sections"`

### Task 4: Quiet The FAQ, Preserve The CTA, And Lock In Final Guardrails

**Files:**

- Modify: `scripts/verify-rogers-redesign.mjs`
- Modify: `src/app/service-areas/rogers-ar/page.js`
- Modify: `src/app/service-areas/rogers-ar/page.module.css`

- [ ] **Step 1: Write the failing test**

Append these final assertions to `scripts/verify-rogers-redesign.mjs`:

```js
assert.match(
  pageSource,
  /className=\{styles\.faqStack\}/,
  "FAQ section should use a calmer stacked wrapper.",
);

assert.match(
  pageSource,
  /<section className=\{styles\.ctaSection\}>[\s\S]*href='\/audit'[\s\S]*href='\/contact'/,
  "Final CTA must keep the existing audit and contact destinations.",
);

assert.match(
  cssSource,
  /@media \(prefers-reduced-motion: reduce\)[\s\S]*\.heroContent[\s\S]*animation:\s*none;/,
  "Reduced-motion support must still disable the hero animation.",
);

assert.match(
  cssSource,
  /\.faqStack\s*\{[\s\S]*gap:/,
  "FAQ stack should have a dedicated quieter layout block.",
);
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node scripts/verify-rogers-redesign.mjs`

Expected: FAIL on the `faqStack` assertion because the FAQ still uses the current grid wrapper.

- [ ] **Step 3: Write minimal implementation**

Update `src/app/service-areas/rogers-ar/page.js`:

- Replace the FAQ wrapper with `styles.faqStack`.
- Keep the FAQ copy and order the same unless a small heading or pacing edit clearly improves scannability.
- Keep the CTA section’s two links and broad structure unchanged.

Update `src/app/service-areas/rogers-ar/page.module.css`:

- Add `.faqStack` and make the FAQ feel quieter and more premium than the sections above it.
- Tune the spacing between FAQ and CTA so the handoff feels calm.
- Recheck `prefers-reduced-motion` rules after any class renames so the hero animation still disables correctly.

- [ ] **Step 4: Run test to verify it passes**

Run all verification commands:

1. `node scripts/verify-rogers-redesign.mjs`
2. `npm run build`
3. Review the page at desktop, tablet, and mobile widths.

Manual acceptance checklist:

- Hero is vertically centered and feels like a stage, not a content block.
- Brief reads as a transition object.
- Problem and proof feel editorial.
- Built-for-Rogers, process, and FAQ feel structured.
- Final CTA still looks like the approved section.

- [ ] **Step 5: Commit**

Run: `git add scripts/verify-rogers-redesign.mjs src/app/service-areas/rogers-ar/page.js src/app/service-areas/rogers-ar/page.module.css && git commit -m "Finish Rogers redesign cadence"`

## Self-Review Checklist For The Implementer

- The page still exports `generateMetadata` and both JSON-LD scripts render.
- No Tailwind layout classes were introduced for structure.
- The final CTA still links to `/audit` and `/contact`.
- `node scripts/verify-rogers-redesign.mjs` passes.
- `npm run build` passes.
- Manual responsive review confirms the middle no longer reads as one repeated card stack.
