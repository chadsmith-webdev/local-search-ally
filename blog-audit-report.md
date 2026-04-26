# Blog Audit Report

**Audit Date:** 2026-04-26  
**Total Posts:** 15  
**New Post Audited:** `local-seo-for-plumbers.mdx`  
**Agents Run:** blog-reviewer (quality) + blog-seo (on-page SEO)

---

## Summary Dashboard

| Metric | Count |
|--------|-------|
| Posts audited in depth | 1 (new post) |
| Quality score — new post | 72/100 → **~82/100 after fixes applied** |
| SEO checks passed — new post | 6/9 → **8/9 after fixes applied** |
| Broken internal links found (site-wide) | 3 → **0 after fixes applied** |
| Orphan pages (0 inbound links) | 6 of 15 |
| Dead-end pages (0 outbound links) | 6 of 15 |
| Stale content (90+ days) | 0 |
| Time-sensitive copy at risk | 1 |
| Site-wide code bug fixed | 1 (OG/Twitter images) |

---

## Fixes Applied This Session

### Code fix — `src/app/blog/[slug]/page.js`
`generateMetadata` was missing `images` in both the `openGraph` and `twitter` blocks. Every blog post was publishing without `og:image` or `twitter:image` despite frontmatter having an `image` field. Fixed by adding:
```js
openGraph: { ..., siteName: "Local Search Ally", images: [{ url, width: 1200, height: 630 }] }
twitter: { ..., images: [url] }
```
This fix applies retroactively to all 15 posts.

### Post fixes — `src/posts/local-seo-for-plumbers.mdx`

| Fix | Before | After |
|-----|--------|-------|
| Title length | 70 chars (10 over) | 57 chars ✓ |
| Meta description | 164 chars, no stat | 158 chars, Safari Digital 78% stat ✓ |
| Author field | missing | `author: "Chad Smith"` ✓ |
| Banned phrase | "moves the needle" | "won't help your ranking" ✓ |
| Banned word root | "highest-leverage" | "highest-impact" ✓ |
| Internal links | 1 | 3 (+ GBP guide + reviews guide) ✓ |
| Alt text — image 1 | 44 words | 12 words ✓ |
| Alt text — image 2 | 24 words | 12 words ✓ |

### Broken link fixes — existing posts

| File | Broken link | Fix applied |
|------|-------------|-------------|
| `contractor-google-reviews-nwa.mdx` | `/blog/how-to-get-into-the-google-map-pack` | → `/blog/how-to-get-in-the-map-pack` |
| `contractor-google-reviews-nwa.mdx` | `/blog/google-business-profile-optimization-checklist` | → `/blog/how-to-optimize-your-google-business-profile-as-a-contractor` |
| `local-search-ally-seo-foundation.mdx` | `/blog/local-search-ally-ui-ux-lessons` (Part 4, never written) | → "Part 4 — coming." (link removed) |

---

## New Post Quality Score: `local-seo-for-plumbers.mdx`

### Score Breakdown (after fixes)

| Category | Score | Max | Notes |
|----------|-------|-----|-------|
| Content Quality | 23 | 25 | Strong burstiness (~0.67), rich TTR, no AI phrases, clear first-person voice. Minor gap: experience signals thin (one light marker). |
| SEO Optimization | 16 | 20 | Title now 57 chars ✓, meta 158 chars with stat ✓, 3 internal links ✓. Remaining gap: 84% BrightLocal stat not in approved list — needs source verification. |
| E-E-A-T | 14 | 20 | Author field added. Named sources throughout. Gap: no in-body byline, no author bio section, experience anecdotes are illustrative rather than documented. |
| Technical | 12 | 15 | Frontmatter complete. Note: `<img>` tags in `<figure>` JSX are replaced by `mdxComponents.img` override in `page.js` — functionally correct, but className styling is dropped by the override. Not a blocker. |
| AI Citation Readiness | 19 | 20 | Key Takeaways box present, 4 FAQ Q&As with direct-answer openers, named entities throughout. |
| **Total** | **84** | **100** | Strong — publish-ready |

---

## Remaining Open Items (new post)

### Must-verify before publishing
- **84% BrightLocal stat** (line 78, 118): "84% of consumers use Google to find reviews" — not in the CLAUDE.md approved stats list. Replace with the approved BrightLocal stat ("97% of consumers use Google to evaluate local businesses") or verify the 84% figure against a live BrightLocal source.
- **42% Backlinko Map Pack stat** (line 31, 45): Not in the approved stats list. Verify against a live Backlinko source or replace with the approved "28% of searches for something nearby result in a purchase" (Think With Google).

### Recommended (before or after publishing)
- Add a first-person experience sentence in the GBP or emergency section (e.g., "I've audited GBP profiles for plumbers in Rogers and Bentonville — almost every one was missing at least two secondary categories.")
- Opening anecdote ($4,000 job) reads illustrative — grounding it with "A plumber I audited in Bentonville..." strengthens E-E-A-T.
- Add `FAQPage` JSON-LD schema for the 4 FAQ items — direct featured snippet opportunity for "how long does local SEO take for a plumbing business."

---

## Site-Wide: Orphan Pages

Six posts have zero inbound links from other posts. These are invisible to Google's link graph.

| Orphan Page | Suggested link sources |
|-------------|----------------------|
| `why-contractors-lose-jobs-to-less-skilled-competitors` | `local-seo-for-contractors` (intro), `how-to-get-in-the-map-pack` |
| `apple-business-what-NWA-contractors-need-to-know` | `gbp-ai-overviews`, `local-seo-for-contractors` |
| `contractor-google-reviews-nwa` | `local-seo-for-contractors` (reviews section), `how-to-get-more-google-reviews-as-a-contractor` |
| `gbp-ai-overviews` | `local-seo-for-contractors`, `how-to-optimize-your-google-business-profile-as-a-contractor` |
| `local-seo-for-hvac-companies` | `local-seo-for-contractors` (should link to trade clusters), `why-contractors-lose-jobs` |
| `local-seo-for-plumbers` | `local-seo-for-contractors` should link back to this + HVAC post |

**Priority fix:** The pillar post (`local-seo-for-contractors`) should link out to all trade cluster posts (HVAC + plumbing). Right now it links to the reviews guide and GBP guide but not to the trade-specific clusters.

---

## Site-Wide: Dead-End Pages

Six posts have no outbound links to other blog posts — they receive PageRank but don't pass it.

| Dead-End Page | Recommended outbound links to add |
|---------------|----------------------------------|
| `5-things-contractor-websites-need` | Link to `what-are-citations`, `how-to-get-in-the-map-pack` |
| `apple-business-what-NWA-contractors-need-to-know` | Link to `gbp-ai-overviews`, `how-to-optimize-your-google-business-profile-as-a-contractor` |
| `gbp-ai-overviews` | Link to `how-to-optimize-your-google-business-profile-as-a-contractor`, `local-seo-for-contractors` |
| `how-to-optimize-your-google-business-profile-as-a-contractor` | Link to `what-are-citations`, `how-to-get-more-google-reviews-as-a-contractor` |
| `what-are-citations` | Link to `how-to-get-in-the-map-pack`, `local-seo-for-contractors` |
| `why-contractors-lose-jobs-to-less-skilled-competitors` | Link to `local-seo-for-contractors`, `how-to-get-in-the-map-pack` |

---

## Site-Wide: Time-Sensitive Content

| Post | Issue | Action |
|------|-------|--------|
| `apple-business-what-NWA-contractors-need-to-know` | Contains "launches this Tuesday" — written Apr 12, now 2 weeks old. Launch has already happened. | Update opening copy to past tense; verify Apple Business platform status and update with post-launch observations. |

---

## Freshness (All Posts)

All 15 posts were published within the last 46 days (Mar 11 – Apr 25, 2026). No posts are stale. No refreshes needed at this time.

---

## Cannibalization Check

| Topic | Posts | Verdict |
|-------|-------|---------|
| Google reviews | `how-to-get-more-google-reviews-as-a-contractor` + `contractor-google-reviews-nwa` | **Differentiate** — first post covers the system (process, cadence); second covers review *content quality* for AI/ranking. Different intents, but titles are similar. Clarify in each title/meta which angle it covers. |
| Google Business Profile | `how-to-optimize-your-google-business-profile-as-a-contractor` + `gbp-ai-overviews` | **No conflict** — setup guide vs. AI overview signal. Clearly different. |
| Local SEO (trade-specific) | `local-seo-for-contractors` + `local-seo-for-hvac-companies` + `local-seo-for-plumbers` | **No conflict** — pillar + clusters is the intended architecture. Working correctly. |

---

## Prioritized Action Queue

| Priority | Task | File(s) | Effort |
|----------|------|---------|--------|
| 1 | ✅ Fix OG/Twitter image bug | `page.js` | Done |
| 2 | ✅ Fix 3 broken internal links | `contractor-google-reviews-nwa`, `local-search-ally-seo-foundation` | Done |
| 3 | ✅ Fix plumber post: title, meta, banned phrases, author, links, alt text | `local-seo-for-plumbers` | Done |
| 4 | Verify 84% BrightLocal + 42% Backlinko stats; replace if unverifiable | `local-seo-for-plumbers` | 15 min |
| 5 | Link pillar post → HVAC + plumbing cluster posts (fix 2 orphans) | `local-seo-for-contractors` | 10 min |
| 6 | Add outbound links to 4 dead-end posts (GBP guide, citations, 5-things, why-lose-jobs) | Multiple | 30 min |
| 7 | Update Apple Business post: remove "this Tuesday" launch framing | `apple-business-what-NWA-contractors-need-to-know` | 20 min |
| 8 | Link to `contractor-google-reviews-nwa` + `gbp-ai-overviews` from pillar post (fix remaining orphans) | `local-seo-for-contractors` | 15 min |
| 9 | Add FAQPage schema for plumber post FAQ block | `page.js` or MDX | 30 min |
| 10 | Add first-person experience sentence to plumber GBP section | `local-seo-for-plumbers` | 5 min |
