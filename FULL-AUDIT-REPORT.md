# Full SEO Audit Report — localsearchally.com

**Audit date:** May 3, 2026  
**Auditor:** Claude Code SEO Audit System  
**Site:** https://www.localsearchally.com  
**Business:** Local Search Ally — Local SEO & Web Development, NWA AR  
**Stack:** Next.js 16.2.1 (App Router), Vercel, Tailwind CSS v4, React 19  

---

## Overall SEO Health Score: 69 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 74 | 16.3 |
| Content Quality | 23% | 74 | 17.0 |
| On-Page SEO | 20% | 72 | 14.4 |
| Schema / Structured Data | 10% | 65 | 6.5 |
| Performance (CWV) | 10% | 52 | 5.2 |
| AI Search Readiness | 10% | 71 | 7.1 |
| Images | 5% | 55 | 2.8 |
| **Total** | | | **69.3** |

**Interpretation:** The site has a strong content and structural foundation — honest voice, well-implemented JSON-LD across most pages, AI crawlers explicitly allowed, and a blog content library well above average for a solo agency. The score is held back by three concentrated problem areas: a site-wide www vs. non-www canonical mismatch that undermines every page's indexing signal, a homepage 3D hero that fails Core Web Vitals on mobile, and a schema graph with broken cross-references and missing properties. All three are fixable without a redesign.

---

## Top 5 Critical Issues

1. **www vs. non-www canonical mismatch** — every canonical tag on every page points to `localsearchally.com` while the live site is `www.localsearchally.com`. Google sees 30+ pages where the canonical URL is a redirect target, not the actual URL. Fix: change `siteConfig.url` to `https://www.localsearchally.com` in `src/lib/metadata.js`.

2. **8 city service-area pages 404** — the sitemap lists 9 city URLs but only `/service-areas/rogers-ar` exists as a static route. The other 8 will 404 every time Googlebot crawls them. Fix: build a `[city]/page.js` dynamic route with `generateStaticParams()`, or remove the 8 non-existent entries from the sitemap immediately.

3. **IndexNow key verification file missing** — the key file `indexnow-72bc29c911304f96ba476049493d4a6e.txt` is referenced in code but doesn't exist in `/public/`. Every IndexNow submission is silently rejected by Bing. Fix: create the file, rotate the key to an env var.

4. **Homepage LCP fails on mobile** — the `<h1>` sits inside a Framer Motion container with a `delayChildren: 0.2` stagger, and `InvisibilityHologram` (a full Three.js scene with Bloom post-processing) is imported even on mobile where it's hidden via CSS. Estimated mobile LCP: 3.5–5.5s (threshold: 2.5s).

5. **Schema graph is fragmented** — the homepage defines `ProfessionalService` with `@id: /#localbusiness`; the About page defines `Organization` with `@id: /#organization`; the `Person` schema on About has no `@id` at all. These are treated as three separate entities by Google's Knowledge Graph. Cross-references between pages point to IDs that are never defined on those pages.

---

## Top 5 Quick Wins

1. Fix `siteConfig.url` — one line change, repairs canonicals, sitemap, all JSON-LD `@id` values, and OG images site-wide.
2. Create `/public/llms.txt` — 30 minutes of work, zero code, dramatically improves AI search readiness. An SEO agency without `llms.txt` is a credibility gap.
3. Fix the LinkedIn `sameAs` URL typo (`localsearchallly` → `localsearchally`) — appears in 3 schema nodes and the Footer, breaks entity graph consolidation.
4. Add `aggregateRating` schema to homepage — you have 1 real 5-star GBP review (Harmonie Grace Foundation). Even `ratingValue: 5, reviewCount: 1` unlocks star ratings in SERP.
5. Remove the `HowTo` JSON-LD block from the homepage — Google removed HowTo rich results in September 2023. Dead payload, 0 benefit.

---

## 1. Technical SEO (Score: 74/100)

### Crawlability — Pass

`robots.txt` is well-configured. Global wildcard allows `/`, disallows `/api/`. AI crawlers (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot) are explicitly and correctly allowed. No CSS, JS, or image resources blocked. The sitemap reference in robots.txt points to `https://localsearchally.com/sitemap.xml` — uses non-www (see canonical issue below).

### Indexability & Canonicals — Needs Work

**Critical — www vs. non-www mismatch:** `siteConfig.url` in `src/lib/metadata.js:2` is set to `https://localsearchally.com`. The live site redirects non-www → www (confirmed: `curl -L` follows to `https://www.localsearchally.com/`). This means:
- Every `<link rel="canonical">` on every page = a redirect URL, not the final URL
- Every sitemap entry = a redirect URL
- Every JSON-LD `@id` and `url` = a redirect URL
- OG images resolve from the wrong origin

**Fix:** Change line 2 in `src/lib/metadata.js`:
```js
url: "https://www.localsearchally.com",
```

**Critical — 8 service area city pages 404:** Sitemap lists `/service-areas/rogers-ar` through `/service-areas/lowell-ar` (9 cities). Only Rogers has a `page.js`. The other 8 are sitemap entries pointing to 404 responses. This devalues the entire sitemap as an accurate crawl signal.

**High — `metadataBase` uses non-www:** In `layout.js:45`, `metadataBase: new URL(siteConfig.url)` serializes relative OG image paths with the non-www origin. Social crawlers (Facebook, LinkedIn) may receive a redirect when trying to fetch OG images.

**High — `keywords` meta tag on service sub-pages:** Google has ignored `keywords` meta since 2009. All 5 service sub-pages include it. Remove from `services/local-seo/page.js`, `services/web-design/page.js`, `services/gbp-optimization/page.js`, `services/reputation-management/page.js`, `services/citation-building/page.js`.

**Medium — Double `<main>` on homepage:** `app/page.js:269` wraps all sections in a `<main>` element, but the root layout already wraps everything in `<main id="main-content">`. Two `<main>` elements per document is invalid HTML. Remove the inner `<main>` from `page.js`.

**Medium — `googleVerification` field is empty:** `src/lib/metadata.js:6` has `googleVerification: ""`. Confirm Search Console verification is active via another method (DNS or HTML file). If not, add the verification token.

**Medium — Static `lastModified` dates in sitemap:** All static pages use `2026-04-15` or `2026-04-03`. As of May 2026 several pages (About, etc.) have been updated more recently. Google discounts identical batch dates.

**Low — IndexNow key hardcoded in source:** `src/app/api/indexnow/route.js:4` has a fallback hardcoded key string. This is in version control. Move to env var exclusively: `process.env.INDEXNOW_KEY`.

**Low — Blog post list renders client-side:** `BlogClient.js` renders the post list as a `"use client"` component. Googlebot will see an empty post list before JavaScript executes. Convert to Server Component with Client wrapper only for interactive filtering.

**Low — GA ID hardcoded in layout:** `layout.js:88` has `gaId='G-SGQ98MEHWZ'` hardcoded. Move to `process.env.NEXT_PUBLIC_GA_ID`.

### Security — Pass with gaps

HTTPS enforced by Vercel. No custom security headers configured in `next.config.mjs`:
- `Content-Security-Policy` — not set
- `X-Frame-Options` — not explicitly set (may inherit Vercel default)
- `Permissions-Policy` — not set
- `Referrer-Policy` — not set

**Fix:** Add a `headers()` export to `next.config.mjs` with at minimum:
```js
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ],
  }];
}
```

### URL Structure — Pass

Clean lowercase hyphenated slugs throughout. No trailing slashes on path-based URLs (consistent). One clean redirect: `/locations` → `/service-areas` (301, single hop). No redirect chains.

**Low — Uppercase in blog slug:** The file `apple-business-what-NWA-contractors-need-to-know.mdx` produces a URL with a capital `NWA`. URLs are case-sensitive; any internal link using lowercase will 404. Rename the file to all-lowercase and add a redirect.

### Mobile — Pass

Viewport meta set correctly via Next.js `viewport` export. All fonts loaded via `next/font/google` (no CDN link tags). Phone number `(479) 380-8626` renders as `<a href="tel:+14793808626">` in Footer, Navbar, and GuideSection. Skip link implemented.

---

## 2. Content Quality (Score: 74/100)

### E-E-A-T Summary by Page

| Page | Experience | Expertise | Authority | Trust | Composite |
|---|---|---|---|---|---|
| Homepage | 82 | 80 | 72 | 91 | **82** |
| Services | 74 | 85 | 70 | 88 | **80** |
| About | 91 | 83 | 62 | 93 | **83** |
| Blog Index | 30 | 35 | 40 | 35 | **35** |
| Blog Posts (avg) | 80 | 84 | 72 | 86 | **81** |
| Contact | 72 | 45 | 50 | 88 | **64** |
| Portfolio | 85 | 78 | 60 | 82 | **76** |
| Resources | 76 | 72 | 55 | 74 | **69** |
| Service Areas | 73 | 76 | 60 | 75 | **71** |
| City Pages | 65 | 72 | 55 | 74 | **66** |
| **Site avg** | | | | | **75** |

**Trustworthiness is the site's strongest pillar** — the phone number, address, email, transparency pledges, no-contract signals, and schema implementation are consistently excellent. **Authoritativeness is the ceiling constraint** — until there are client results to document or third-party mentions to cite, this category is capped around 60–72.

### Critical — Blog Index is thin (Score: 35/100)

The blog index at `/blog` has under 100 words of static content. Post cards are rendered client-side via `BlogClient.js`. The page has no introductory text, no author attribution, and a placeholder metadata description ("Local SEO tips and contractor marketing strategies from Local Search Ally."). This page cannot rank for any meaningful query in its current state.

**Fix:** Add a 150–200 word editorial introduction above the post list (server-rendered). Update the metadata title/description to include specific value (who writes it, what trades it serves, what readers will find). Add "All posts by Chad Smith, Founder, Local Search Ally" attribution.

### Critical — Near-duplicate city pages

9 city pages share identical: three-step process block (Audit/Fix/Grow with verbatim sentences), "Referrals are fine. Until they're not." section, FAQ questions (3 of 5 are generic across all cities), CTA sections. Each page needs ≥1 unique section of 150–200 words that could not apply to any other city: neighborhood-specific demand data, named competitor patterns, trade mix specific to that market, or specific zip codes served.

### High — Resources PDFs may not exist

`/resources` page has schema declaring 4 downloadable PDFs at `/downloads/*.pdf` paths. Source comments indicate these files may not have been placed yet. If any download link 404s, the page fails its primary conversion purpose. Verify all 4 PDFs exist in `/public/downloads/` before this page is live.

### High — Duplicate content across site

Three content blocks are repeated near-verbatim in 5+ locations:
1. Three-step process (Audit / Fix Priority Gaps / Grow and Track) — appears on homepage, ServicesDetail, ServicesPricing, serviceAreasLanding, and all 9 city pages
2. "Referrals are fine. Until they're not." section — appears on serviceAreasLanding and all city pages
3. 88% Think With Google stat + context sentence — appears in 5 posts and on the homepage

The process section on city pages should be condensed to 2 sentences with a link to the full Services page explanation.

### Medium — About page thin on authority signals

About page is ~750 words — thin for the page that carries the entire site's E-E-A-T credentials. The Harmonie Grace Foundation 5-star review (the only documented third-party validation) is not referenced here. The workshop/speaking experience is not documented.

**Fix:** Add the Foundation review with context (nonprofit, validates audit methodology). Add 100–150 words on the marketing cohort presentation. Expand to ~1,200 words total.

### Medium — Contact page content deficit

Contact page has ~250 words — below the 500-word floor for any page that should rank. Metadata description is 27 characters ("No pitch, no pressure."). Add a "What to expect" section (3–5 bullets about what happens after contact) to serve both SEO content depth and conversion friction reduction.

### Medium — HVAC blog post uses raw `<img>` tag

`local-seo-for-hvac-companies.mdx` uses a JSX `<img>` tag (not markdown syntax), bypassing the MDX `next/image` override. The image has a visible "AI-generated" figcaption — a QRG flag for images in SEO content.

### Low — Blog feature image alt text

All blog post feature images use `alt={metadata.title}` in the template (`blog/[slug]/page.js:150`). This repeats the full post title as alt text — keyword stuffing risk and not a description of the image. Add an `imageAlt` frontmatter field and use it as the alt text.

### Low — Portfolio metadata description count error

`/portfolio` metadata description references "five trade-specific builds" but the page shows six (plumbing, HVAC, electrical, roofing, remodeling, landscaping). Update the count.

---

## 3. On-Page SEO (Score: 72/100)

### Title Tags & Meta Descriptions

Homepage title: "Local Search Ally | NWA Contractor SEO" — clear, includes primary keyword, under 60 characters. Good.

Blog index meta description: "Local SEO tips and contractor marketing strategies from Local Search Ally." — generic, not specific to audience, trade, or geography. Rewrite.

Contact meta description: "No pitch, no pressure." — 27 characters, not indexable value. Rewrite.

Service sub-pages all include a `keywords` meta tag — remove (see Technical SEO section).

### Heading Hierarchy

One H1 per page on all pages audited. Heading levels flow logically. No heading skips detected.

**Medium — Homepage H1 doesn't include primary keyword:** The H1 is "Is invisibility hiding you from 3.12 billion daily local searches?" — engaging, but no keyword phrase. Metadata title includes the keyword; H1 does not. Recommendation: ensure the H1 or an early H2 contains "local SEO" + "[trade]" + "NWA" or similar primary phrase.

### Internal Linking

**Critical gap:** Zero blog posts link to a service page in their body copy. The blog is building topical authority for queries the service pages need to rank for, but PageRank flows to the audit tool CTA instead of the pages that convert.

**Fix:** Add at minimum one contextual in-body link per blog post to the relevant service page:
- Trade posts → `/services/local-seo`
- GBP posts → `/services/gbp-optimization`
- Review posts → `/services/reputation-management`
- Citation post → `/services/citation-building`
- Website post → `/services/web-design`

**High gap:** Zero blog posts link to any city page. Trade posts mention Bentonville, Rogers, Fayetteville, Springdale by name in body copy but never link to `/service-areas/[city]`. This is a 10-minute fix in each post that strengthens geographic relevance.

**Medium gap:** `5-things-contractor-websites-need` doesn't link to `/services/web-design`. The one web design spoke is disconnected from its pillar.

**Medium gap:** `how-to-optimize-your-gbp` doesn't link to `/services/gbp-optimization` or to the GBP checklist on `/resources`.

**Medium gap:** `local-seo-for-hvac-companies` is missing the review system link that both the plumbing and roofing posts include.

**Medium gap:** Brand/case study series (Parts 1–4) is an isolated island — no inbound links from service pages or other blog posts. Part 3 (SEO Foundation) especially deserves a link from `/services/local-seo` as a proof-of-expertise signal.

### Page-Level OG Tags

OG tags present on all pages reviewed. Twitter Card configured in root layout and blog posts but not on service pages or service area pages. Service pages fall back to the generic root layout OG image.

---

## 4. Schema / Structured Data (Score: 65/100)

### Schema Inventory

| Page | Types Present |
|---|---|
| Root layout (all pages) | `WebSite` |
| Homepage | `ProfessionalService`, `FAQPage` (15 Q&A), `HowTo` |
| `/services` | `Service` (with `OfferCatalog`), `FAQPage` |
| `/services/citation-building` | `FAQPage` |
| `/about` | `Person`, `Organization` |
| `/blog` | `CollectionPage` + `ItemList` |
| `/blog/[slug]` | `Article`, `BreadcrumbList`, conditional `FAQPage` |
| `/contact` | `ContactPage` |
| `/service-areas` | `CollectionPage` |
| `/service-areas/[city]` | `LocalBusiness`, `FAQPage` |

### Critical Issues

**Critical — `HowTo` schema is dead weight (removed Sept 2023):** Google discontinued HowTo rich results in September 2023. The `howToJsonLd` block in `src/app/page.js` produces zero SERP benefit. Remove it.

**Critical — `Person/@id` missing on About page:** The canonical definition of `https://localsearchally.com/about#chad-smith` never declares its own `@id`. Every page that uses this author reference (all 18 blog posts) is pointing to a node that doesn't identify itself. Add `"@id": "https://localsearchally.com/about#chad-smith"` to the Person schema in `about/page.js`.

**Critical — Dual business entities with no link:** Homepage uses `ProfessionalService` with `@id: /#localbusiness`. About page uses `Organization` with `@id: /#organization`. Google treats these as two separate businesses. Consolidate: change About's Organization `@id` to `/#localbusiness`, or add `"sameAs": ["https://localsearchally.com/#localbusiness"]` to the Organization node.

**Critical — `provider` blocks define inline LocalBusiness instead of referencing canonical `@id`:** The `Service` schema on `/services` and `worksFor` on `/about` each define a full inline LocalBusiness object with potentially different data (Saturday hours differ: `09:00-12:00` on homepage vs `10:00-14:00` on services page). Replace all inline business objects with `{ "@id": "https://localsearchally.com/#localbusiness" }`.

### High Issues

**High — `WebSite` in layout references `/#localbusiness` but that `@id` is only defined on the homepage:** On all other pages, the `publisher` reference in the WebSite schema is a dangling pointer. Fix: add a stub ProfessionalService node to the root layout that declares the `@id`:
```json
{ "@type": "ProfessionalService", "@id": "https://www.localsearchally.com/#localbusiness", "name": "Local Search Ally", "url": "https://www.localsearchally.com" }
```

**High — `/services/citation-building` has no `Service` schema:** It only has a FAQPage block. Add a `Service` schema block with `@id`, `name`, `description`, `provider` (reference), and `areaServed`.

**High — `Article` should be `BlogPosting`:** The more specific `BlogPosting` type is preferred for blog content and explicitly listed in Google's supported rich result types. Change `@type: "Article"` to `"BlogPosting"` in `blog/[slug]/page.js`.

**High — `areaServed` misused on `CollectionPage`:** The `/service-areas` page applies `areaServed` to a `CollectionPage` schema — this property doesn't belong on a WebPage type. Remove it from the CollectionPage schema; it's already correctly set on the `ProfessionalService` entity.

### Medium Issues

**Medium — `aggregateRating` missing:** No star rating schema anywhere on the site. You have at least 1 verified 5-star GBP review. Add `aggregateRating: { "@type": "AggregateRating", "ratingValue": "5", "bestRating": "5", "reviewCount": "1" }` to the homepage `ProfessionalService` block. This is the fastest path to star ratings in organic search.

**Medium — `priceRange` missing from `ProfessionalService`:** Add `"priceRange": "$$"` to the homepage business entity.

**Medium — `hasMap` missing from `ProfessionalService`:** For SABs, `hasMap` pointing to the GBP URL helps Google associate the schema entity with the GBP listing. Add `"hasMap": "https://www.google.com/maps?cid=YOUR_GBP_CID"`.

**Medium — `SearchAction` missing from `WebSite` schema:** Sitelinks Searchbox eligibility requires a `potentialAction: SearchAction` on the WebSite node. Add it pointing to `/blog?q={search_term_string}`.

**Medium — `BreadcrumbList` missing from `/blog`, `/contact`, `/service-areas`:** These pages have no breadcrumb schema. Add 2-item breadcrumbs (Home → [Page]) to each.

**Medium — `image` on `ProfessionalService` is `/icon.png`:** This is almost certainly the favicon (small, wrong aspect ratio). Google recommends a minimum 112×112px logo image. Replace with a proper logo file or OG image.

**Medium — `Article` image missing `width` and `height`:** Google recommends including dimensions in `ImageObject` nodes. Update in `blog/[slug]/page.js`:
```json
"image": { "@type": "ImageObject", "url": "...", "width": 1200, "height": 630 }
```

**Medium — `wordCount` and `inLanguage` missing from all Article/BlogPosting blocks:** Add `"inLanguage": "en-US"` and `"wordCount": content.trim().split(/\s+/).length` to the blog post JSON-LD.

**Medium — FAQPage on only 4 of 18 blog posts:** The blog post renderer supports FAQPage schema when frontmatter `faqs:` is present. 14 posts have inline `## FAQ` sections but no `faqs:` frontmatter. Adding the YAML arrays to those 14 posts activates schema with zero code changes.

**Low — `dateModified` on `Service` and `Organization` schemas:** `Service` extends `Intangible` and `Organization` does not extend `CreativeWork` — `dateModified` is not a valid property on either. Remove from those schema blocks.

**Low — LinkedIn `sameAs` URL typo:** `chadsmith_localsearchallly` has 3 L's. Appears in `page.js`, `about/page.js`, and `Footer.jsx`. Verify correct URL and fix all three.

---

## 5. Performance / Core Web Vitals (Score: 52/100)

### Estimated Lab Scores

| Metric | Homepage | /services | /blog | Threshold |
|---|---|---|---|---|
| LCP | 3.5–5.5s | 2.2–3.2s | 2.0–3.0s | ≤2.5s |
| INP | 200–350ms | 150–250ms | 100–180ms | ≤200ms |
| CLS | 0.05–0.15 | 0.02–0.05 | 0.08–0.12 | ≤0.1 |
| TTFB | 80–200ms | 80–200ms | 80–200ms | ≤600ms |
| TBT | 400–700ms | 300–500ms | 200–350ms | ≤200ms |

*Note: Estimated from source analysis — no live Lighthouse run available. Real field data from CrUX would override these estimates.*

### Critical — Mobile gate missing for `InvisibilityHologram`

The Three.js scene is hidden on mobile via `display: none` in CSS (`@media (max-width: 900px)`), but `display: none` does **not** prevent the `next/dynamic` import from being triggered. Mobile users pay the full Three.js parse cost (~800KB+ bundle) with zero visual benefit. Estimated mobile LCP recovery from this fix alone: **1.5–2.5 seconds**.

```jsx
// In HeroSection.jsx — only import on desktop
const [isDesktop, setIsDesktop] = useState(false);
useEffect(() => {
  setIsDesktop(window.matchMedia("(min-width: 900px)").matches);
}, []);

{isDesktop && <InvisibilityHologram />}
```

### Critical — Hero H1 is inside an animated "use client" component

`HeroSection.jsx` is `"use client"`. The `<h1>` is wrapped in a Framer Motion container with `initial="hidden"` and `delayChildren: 0.2`. The h1 won't render until JS hydrates AND the 0.2s stagger delay clears AND the 0.6s animation completes — roughly 800ms+ after hydration. On a slow mobile connection this pushes LCP to 3.5–5s+.

**Fix:** Extract static content (h1, CTAs) to a Server Component or remove the `delayChildren` from the container. The h1 should be visible on first paint.

### Critical — `InvisibilityHologram` is the heaviest component on the site

Inside the component: `PlaneGeometry(18, 18, 80, 80)` = 6,641 vertices with CPU-side Perlin noise calculated every frame, `computeVertexNormals()` called every frame (expensive), `UnrealBloomPass` post-processing (doubles GPU work), two geometry objects (`CloakMesh` and `VertexPoints`) running the same `displace()` calculation twice, and `dpr={[1, 2]}` at full Retina resolution.

**Fixes (in priority order):**
1. Add mobile gate (above)
2. Reduce `PlaneGeometry` from `80×80` to `48×48` (cuts vertex count from 6,641 to 2,401)
3. Move `computeVertexNormals()` out of the frame loop (run once after load)
4. Share one `displace()` call between `CloakMesh` and `VertexPoints`
5. Lower `dpr` from `[1, 2]` to `[1, 1.5]`

### High — Total Blocking Time from JS bundle

Combined parse cost on mid-range Android: Three.js 0.183 (~580KB), @react-three/fiber 9.x (~120KB), @react-three/drei 10.x (~200KB), Framer Motion 12.x (~50KB), EffectComposer/UnrealBloomPass (~100KB). Estimated TBT: 400–700ms on the homepage.

**Fixes:**
- Apply `LazyMotion` with `domAnimation` feature bundle in the root layout (reduces Framer Motion initial parse)
- Import only specific drei utilities (`/core/Html`, `/core/Float`) rather than the full library

### High — JetBrains Mono loaded globally

`layout.js` loads JetBrains Mono for all pages via `next/font/google`. This font is only used in tool UIs, dashboards, and mono data displays — never in above-the-fold content on marketing pages. Removing it from the root layout saves one WOFF2 preload request on every page.

**Fix:** Move `jetbrainsMono` font to the specific pages/components that use it (audit tool, blog posts if used there).

### High — No preconnect hints for Google Analytics

GA4 connects to `www.googletagmanager.com` and `www.google-analytics.com`. Without preconnect hints, DNS + TCP + TLS happens at first script execution rather than in parallel with page load.

**Fix:** Add to root layout:
```jsx
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="preconnect" href="https://www.google-analytics.com" />
```

### Medium — CLS risk from canvas sizing

`InvisibilityHologram` renders without an SSR fallback that reserves the same dimensions as the final canvas. If the canvas container height isn't explicitly defined in `HeroSection.module.css` before the component loads, the canvas load will cause a layout shift.

### Low — `react-countup` duplicates existing custom hook

`StatsSection.jsx` imports `react-countup` (15KB). `InvisibilityHologram.jsx` already has a hand-rolled `useCountUp` hook. One implementation should be chosen and shared.

### Low — Blog MDX images may bypass Next.js optimization

If blog post MDX uses raw markdown image syntax (`![alt](src)`) that maps through MDX but the `img` component override in `blog/[slug]/page.js` doesn't intercept it, images won't go through Next.js's optimization pipeline (WebP/AVIF conversion, size optimization). Verify the MDX component override is catching all image syntax.

---

## 6. AI Search Readiness / GEO (Score: 71/100)

### Crawler Access — Pass

All major AI crawlers explicitly allowed: GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot. Wildcard allows CCBot and other training crawlers. `/api/` correctly blocked.

### llms.txt — MISSING

No `llms.txt` exists at `/public/llms.txt`. For an SEO agency that actively discusses AI search readiness with clients, this is a credibility gap. An AI assistant asked "Who does local SEO for NWA contractors?" cannot easily cite this site if there's no machine-readable summary.

**Create `/public/llms.txt` with:**
```
# Local Search Ally

> Local SEO and web development for NWA home service trades — HVAC, plumbing, roofing,
> electrical, landscaping, and remodeling. Based in Siloam Springs, AR. Month-to-month,
> no contracts. Founder: Chad Smith.

## Services
- [Local SEO](https://www.localsearchally.com/services/local-seo): GBP, citations, on-page SEO, monthly reporting. Starts at $497/mo.
- [GBP Optimization](https://www.localsearchally.com/services/gbp-optimization): Full profile audit, photo strategy, post management. Starts at $199.
- [Web Design](https://www.localsearchally.com/services/web-design): Mobile-first, SEO-built contractor sites. Starts at $799.
- [Reputation Management](https://www.localsearchally.com/services/reputation-management): Review systems, templates, monitoring. Starts at $99/mo.
- [Citation Building](https://www.localsearchally.com/services/citation-building): NAP cleanup and directory submissions.
- [Free SEO Audit](https://audit.localsearchally.com): Live local visibility audit — no email required.

## Service Areas
Rogers AR, Bentonville AR, Fayetteville AR, Springdale AR, Siloam Springs AR, Centerton AR, Bella Vista AR, Cave Springs AR, Lowell AR

## Blog
[https://www.localsearchally.com/blog]

## About
- [Chad Smith](https://www.localsearchally.com/about): Founder. Local SEO, GBP optimization, citation building, contractor web design.

## Contact
- Phone: (479) 380-8626
- [Strategy Call](https://www.localsearchally.com/contact)
```

### Citability — Strong on some pages, weak on others

**Strong:** Homepage AEO paragraph (always in DOM, includes entity name + location + services + date). 15-question FAQPage schema with specific dollar amounts and timelines. Blog posts with sourced statistics and answer-first structure. `gbp-ai-overviews.mdx` is the most citation-ready piece of content on the site — names researchers, cites specific studies.

**Weak:** FAQ answers sit inside a Framer Motion accordion with `aria-hidden={!open}` on closed state. While answers are technically in the DOM, `aria-hidden` may signal to some crawlers that collapsed content is inactive. 14 of 18 blog posts have inline FAQ sections but no `faqs:` frontmatter, so no FAQPage schema is generated for them.

### Platform-Specific Scores

| Platform | Score | Primary Gap |
|---|---|---|
| Google AI Overviews | 74/100 | 14 posts missing FAQ schema, no AggregateRating |
| ChatGPT / Claude | 68/100 | No llms.txt, no Wikipedia entity, no external authority |
| Perplexity | 76/100 | Strong sourced stats in posts; blog meta descriptions weak |
| Bing Copilot | 63/100 | No SpeakableSpecification, Twitter card missing on service pages |

### Missing: SpeakableSpecification

For voice/AI assistant queries, marking specific passages as speakable improves extraction for Bing Copilot and Google Assistant. Adding it to the hero subheadline, first FAQ answer, and pricing paragraph on the services page is a forward-looking signal.

---

## 7. Images (Score: 55/100)

### Missing OG Images for Service Pages and Service Area Pages

OG image generation exists for homepage, blog index, and blog posts. Service pages (`/services`, `/services/*`) and service area pages (`/service-areas/*`) fall back to the generic root layout OG image — no per-page social preview. This limits social share quality for these pages.

### Blog Feature Image Alt Text

All 18 blog post feature images use `alt={metadata.title}` — the full post title repeated as alt text. This is not a description of the image content and is a keyword stuffing signal.

**Fix:** Add `imageAlt` field to frontmatter; use it in `blog/[slug]/page.js` image alt attribute. Fall back to a descriptive auto-generated string if not set.

### OG Default Image May Not Exist

`blog/[slug]/page.js` falls back to `/og-default.png` for posts without a feature image. No evidence this file exists in `/public/`. If missing, social share previews for those posts show a broken image. Verify or create `/public/og-default.png` (1200×630px).

### Next.js Image Optimization

`next/image` is used throughout marketing pages. Blog MDX content needs verification — if any posts use raw markdown `![alt](src)` that isn't being intercepted by the MDX `img` component override, those images bypass optimization (WebP/AVIF, lazy loading, size).

Add to `next.config.mjs` for explicit format negotiation:
```js
images: {
  formats: ['image/avif', 'image/webp'],
}
```

---

## 8. Local SEO (Score: 68/100)

### NAP Consistency — Pass

Name, Address (city+state), and Phone are consistent across all schema nodes, footer, and visible HTML. Phone renders as `tel:` link in every location audited. One minor gap: the `Person` schema on the About page is missing `postalCode: "72761"` that every other address node includes.

### GBP Signals — Partially Implemented

Google Maps embed is present on the contact page with the actual GBP pin — a meaningful positive signal. Missing:
- No direct "Leave a review" link (GBP review flow URL)
- No `hasMap` pointing to GBP URL in schema
- No evidence of active GBP posts (no on-page documentation of post cadence)
- GBP primary category not declared in schema

### Reviews — Critical Gap

No `aggregateRating` schema. No visible review widget. No "Leave a review" CTA anywhere on the site. One documented real review (Harmonie Grace Foundation, 5 stars) is not referenced anywhere visible on the site. Review velocity is a known local ranking factor — the site provides no mechanism to drive review requests from site visitors.

### Location Pages

9 city pages built. Rogers and Bentonville have the most differentiated content; other cities lean more heavily on the shared template. All city pages missing:
- City-specific images with descriptive alt text
- Internal blog links targeting that city's trade queries
- `geo` coordinates on city page `LocalBusiness` schema (homepage has them; city pages don't)

### Local Keyword Targeting — Good primary, weak city×trade

Homepage and service area pages correctly target "local SEO [city] AR" intent. Blog covers trade-specific SEO (HVAC, plumbing, roofing). **Gap:** No content targeting city×trade combinations ("HVAC SEO Bentonville AR", "plumber SEO Fayetteville") — the queries the ICP is trying to rank for. The site talks about how to rank for these queries without itself ranking for any of them.

---

## 9. Sitemap (Score: 78/100)

### Structure

Sitemap generated via `src/app/sitemap.js` using Next.js App Router convention. 18 blog posts correctly included with frontmatter dates. 9 city pages listed.

### Issues

**Critical — www vs. non-www:** All sitemap URLs use `https://localsearchally.com` (non-www) while the live site is www. Sitemap entries are redirect URLs, not canonical URLs. Fixed by the `siteConfig.url` change.

**High — 8 city 404s:** Covered under Technical SEO.

**High — `/gbp-checklist` missing from sitemap:** Lead magnet landing page with full metadata and canonical URL is not in the sitemap. Add it.

**Medium — Duplicate content in Google reviews posts:** Three posts target near-identical queries around Google reviews for contractors. Cannibalization risk. Consider canonicalizing the two older posts toward `google-reviews-for-contractors` (the complete guide) and adding explicit internal links from both to it.

**Low — `apple-business-what-NWA-contractors-need-to-know` has uppercase in slug.** Rename file to all-lowercase; add redirect if any inbound links exist.

**Low — `privacy` and `terms` not in sitemap.** Low-stakes but technically incomplete for accuracy.

---

## 10. Content Cluster Architecture

### Current State Summary

7 content clusters identified. Most are functional but all have gaps:

| Cluster | Hub | Spokes | Health |
|---|---|---|---|
| Local SEO Core | `local-seo-for-contractors` | 4 posts | Good — needs service page links |
| Google Business Profile | `how-to-optimize-your-gbp` | 3 posts | Good — needs deeper sub-topics |
| Reputation / Reviews | `google-reviews-for-contractors` | 2 posts | OK — missing negative review handling |
| Trade-Specific SEO | `local-seo-for-contractors` | 3 posts (HVAC, plumbing, roofing) | Incomplete — 3 trades missing |
| Web Design | `5-things-contractor-websites-need` | 0 other posts | Weak — single spoke, no hub |
| NWA Location | `/service-areas` | 9 city pages | Isolated — no blog links in |
| Brand / Case Study | `how-i-built-this-website` | 3 posts (Parts 2–4) | Isolated — no inbound from service pages |

### Top 10 Priority Content Gaps

1. "Local SEO for Electricians in NWA" — completes the trade cluster, 4th core NWA trade, high-ticket queries
2. "GBP Categories for Home Service Contractors" — every post references categories, no dedicated post exists
3. "Contractor Website SEO: How to Build Pages That Rank Locally" — creates a web design cluster hub
4. "How to Respond to Negative Google Reviews" — high-anxiety query, currently only mentioned in passing
5. "Local SEO for Landscaping Companies in NWA" — ICP trade, no content, distinct seasonal demand pattern
6. "GBP Posts for Contractors: What to Post and When" — every post says "post regularly," none show how
7. "Local SEO for Remodeling Contractors in NWA" — ICP trade, no content, higher-ticket jobs
8. "How to Remove a Fake Google Review" — high-intent, high-anxiety query for contractors
9. "HVAC SEO in the Bentonville–Rogers Corridor" — first city×trade blog post, creates a repeatable template
10. "Local SEO Checklist for NWA Contractors" — bridges blog content and audit tool, becomes most-linked post on site

---

## Appendix: File Reference Map

| Issue | File(s) |
|---|---|
| `siteConfig.url` www fix | `src/lib/metadata.js:2` |
| IndexNow key file | `public/indexnow-72bc29c911304f96ba476049493d4a6e.txt` (create) |
| IndexNow hardcoded key | `src/app/api/indexnow/route.js:4` |
| Homepage H1 animation delay | `src/components/HeroSection.jsx` |
| Mobile gate for 3D scene | `src/components/HeroSection.jsx` |
| Three.js perf fixes | `src/components/InvisibilityHologram.jsx` |
| Remove HowTo schema | `src/app/page.js` |
| Add aggregateRating | `src/app/page.js` |
| Fix Person @id | `src/app/about/page.js` |
| Unify business @id | `src/app/about/page.js`, `src/app/page.js` |
| Fix provider inline nodes | `src/app/services/page.js`, `src/app/about/page.js` |
| Add citation-building Service schema | `src/app/services/citation-building/page.js` |
| BlogPosting + dimensions | `src/app/blog/[slug]/page.js` |
| Add FAQ frontmatter | `src/posts/*.mdx` (14 files) |
| JetBrains Mono to page-level | `src/app/layout.js` |
| LazyMotion in layout | `src/app/layout.js` |
| Preconnect hints | `src/app/layout.js` |
| Security headers | `next.config.mjs` |
| Remove keywords meta | `src/app/services/*/page.js` |
| Remove double `<main>` | `src/app/page.js:269` |
| Fix blog image alt | `src/app/blog/[slug]/page.js:150` |
| LinkedIn URL typo | `src/app/page.js`, `src/app/about/page.js`, `src/components/Footer.jsx` |
| Manifest theme_color | `src/app/manifest.json` |
| City page geo coordinates | `src/app/service-areas/[city]/page.js` |
| Verify PDFs exist | `public/downloads/*.pdf` |
| Create llms.txt | `public/llms.txt` |
| Add gbp-checklist to sitemap | `src/app/sitemap.js` |
| Fix city 404s | `src/app/service-areas/[city]/page.js` (build dynamic route) |
| Rename NWA blog slug | `src/posts/apple-business-what-NWA-contractors-need-to-know.mdx` |
