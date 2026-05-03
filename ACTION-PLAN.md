# SEO Action Plan — localsearchally.com

**Generated:** May 3, 2026  
**Overall Score:** 69/100  
**Target Score (after all Critical + High fixes):** ~82/100  

---

## Critical — Fix Immediately

### C1. Fix www vs. non-www canonical mismatch
**File:** `src/lib/metadata.js:2`  
**Impact:** Every page on the site — canonicals, sitemap, all JSON-LD, OG images  
**Fix:**
```js
// Change:
url: "https://localsearchally.com",
// To:
url: "https://www.localsearchally.com",
```
Verify Vercel domain settings: www should be the primary domain (not the redirect). After the change, rebuild and confirm `<link rel="canonical">` on any live page reads `https://www.localsearchally.com/`.

---

### C2. Build the 8 missing city service-area pages
**File:** `src/app/service-areas/[city]/page.js` (create dynamic route)  
**Impact:** 8 sitemap entries currently 404 — Googlebot devalues the entire sitemap  
**Fix (preferred):** Create a dynamic `[city]/page.js` route with `generateStaticParams()` covering all 9 cities. Use the Rogers page as the content pattern. Each page needs at minimum one unique 150–200 word section that could not apply to any other city.

**Interim fix (if build time is a concern):** Remove the 8 non-existent entries from `src/app/sitemap.js` until the pages are built.

---

### C3. Create the IndexNow key verification file and rotate the key
**File:** Create `public/indexnow-72bc29c911304f96ba476049493d4a6e.txt`  
**Also:** `src/app/api/indexnow/route.js:4`  
**Fix:**
1. Create `/public/indexnow-72bc29c911304f96ba476049493d4a6e.txt` containing only the key value on a single line
2. Rotate the key (generate a new one at bing.com/indexnow) and set it in Vercel env as `INDEXNOW_KEY`
3. Remove the hardcoded fallback string from `route.js:4` — use only `process.env.INDEXNOW_KEY`

---

### C4. Add mobile gate to InvisibilityHologram import
**File:** `src/components/HeroSection.jsx`  
**Impact:** ~1.5–2.5s LCP recovery on mobile — single biggest performance win  
**Fix:** Add a client-side media query check before triggering the dynamic import:
```jsx
const [isDesktop, setIsDesktop] = useState(false);
useEffect(() => {
  setIsDesktop(window.matchMedia('(min-width: 900px)').matches);
}, []);

// In JSX — only render on desktop:
{isDesktop && <InvisibilityHologram />}
```

---

### C5. Fix schema `Person/@id` on About page
**File:** `src/app/about/page.js`  
**Impact:** Every blog post's author schema points to a node that has no `@id` — the reference is headless  
**Fix:** Add `"@id": "https://www.localsearchally.com/about#chad-smith"` to the Person schema object.

---

### C6. Unify the business entity to a single `@id`
**Files:** `src/app/about/page.js`, `src/app/page.js`, `src/app/layout.js`  
**Impact:** Google sees two separate businesses — `/#localbusiness` and `/#organization`  
**Fix:** In `about/page.js`, change the Organization schema `@id` from `/#organization` to `/#localbusiness`. Add a stub ProfessionalService node to `layout.js` that declares `@id: /#localbusiness` so every page has a resolvable publisher reference.

---

### C7. Remove HowTo schema from homepage
**File:** `src/app/page.js`  
**Impact:** HowTo rich results removed by Google Sept 2023 — pure dead weight  
**Fix:** Remove `howToJsonLd` object and its `<script type="application/ld+json">` tag from `page.js`.

---

## High — Fix Within 1 Week

### H1. Fix inline `provider`/`worksFor` blocks — reference canonical `@id` instead
**Files:** `src/app/services/page.js`, `src/app/about/page.js`  
**Fix:** Replace every inline `LocalBusiness` object inside Service and Person schemas with:
```json
{ "@id": "https://www.localsearchally.com/#localbusiness" }
```
Also: standardize Saturday hours across all schema — pick one and use it everywhere (homepage schema says 09:00-12:00, services says 10:00-14:00).

---

### H2. Add `aggregateRating` to homepage schema
**File:** `src/app/page.js`  
**Impact:** Fastest path to star ratings in organic search results  
**Fix:** Add to the ProfessionalService JSON-LD:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "bestRating": "5",
  "worstRating": "1",
  "reviewCount": "1"
}
```
Update `reviewCount` as more GBP reviews are collected.

---

### H3. Add `Service` schema to `/services/citation-building`
**File:** `src/app/services/citation-building/page.js`  
**Fix:** Add a `Service` JSON-LD block with `@id`, `name`, `description`, `provider: { "@id": ".../#localbusiness" }`, `areaServed`, and `offers`.

---

### H4. Create `/public/llms.txt`
**File:** `public/llms.txt` (new)  
**Impact:** High for AI search readiness — an SEO agency without llms.txt is a credibility gap  
**Fix:** Create the file with the content from the GEO audit section of FULL-AUDIT-REPORT.md. Update whenever services, pricing, or blog inventory changes materially.

---

### H5. Fix the LinkedIn `sameAs` URL typo
**Files:** `src/app/page.js`, `src/app/about/page.js`, `src/components/Footer.jsx`  
**Fix:** Find and correct `chadsmith_localsearchallly` (3 L's) → `chadsmith_localsearchally` (2 L's) in all three files. Verify the correct LinkedIn URL first.

---

### H6. Add a "Leave a review" link to Contact page and Footer
**Files:** `src/app/contact/page.js` (or ContactClient.jsx), `src/components/Footer.jsx`  
**Impact:** The site provides no mechanism to drive GBP review velocity  
**Fix:** Add a direct link to the GBP review flow. Get your Place ID from Google Business Profile Manager, then construct:
```
https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
```
Add a subtle CTA: "Worked with me? Leave a review →" in the footer and on the contact page.

---

### H7. Fix Blog index page — add server-rendered intro content
**File:** `src/app/blog/page.js` or `BlogClient.js`  
**Fix:**
1. Add a 150–200 word editorial intro above the post list (Server Component — not inside BlogClient)
2. Update `generateMetadata()` for blog index with a specific, value-driven description
3. Add "All posts by Chad Smith, Founder, Local Search Ally" author attribution
4. Consider moving the post list to a Server Component; keep Client wrapper only for interactive filtering

---

### H8. Fix hero H1 animation delay for LCP
**File:** `src/components/HeroSection.jsx`  
**Impact:** H1 is the LCP candidate — animation delay pushes it past 2.5s threshold  
**Fix:** Remove `delayChildren: 0.2` from the Framer Motion container variant, or extract the h1 as a statically rendered element outside the animated container. The h1 should appear on first paint, not after animation delay.

---

### H9. Reduce InvisibilityHologram geometry complexity
**File:** `src/components/InvisibilityHologram.jsx`  
**Fix (in order of effort vs. impact):**
1. Lower `dpr` from `[1, 2]` to `[1, 1.5]` — trivial, immediate GPU relief
2. Reduce `PlaneGeometry(18, 18, 80, 80)` → `PlaneGeometry(18, 18, 48, 48)` — cuts vertex count from 6,641 to 2,401
3. Move `computeVertexNormals()` out of the frame loop — run once after mount
4. Share one `displace()` calculation between `CloakMesh` and `VertexPoints`

---

### H10. Move JetBrains Mono to page-level
**File:** `src/app/layout.js`  
**Fix:** Remove `jetbrainsMono` from the root layout font declarations. Import it only in the specific layout or component files that actually use it (audit tool, potentially blog post pages if used in code blocks). This removes one WOFF2 preload from every marketing page's critical path.

---

### H11. Remove `keywords` meta tag from all service sub-pages
**Files:** `src/app/services/local-seo/page.js`, `src/app/services/web-design/page.js`, `src/app/services/gbp-optimization/page.js`, `src/app/services/reputation-management/page.js`, `src/app/services/citation-building/page.js`  
**Fix:** Remove the `keywords` field from every `generateMetadata()` export on service sub-pages. Google has ignored this tag since 2009.

---

### H12. Add 5 critical internal links — blog posts → service pages
**Files:** Each MDX blog post listed below  
**Fix:** Add one contextual in-body link per post to the corresponding service page:

| Post | Add link to |
|---|---|
| `local-seo-for-contractors.mdx` | `/services/local-seo` |
| `local-seo-for-hvac-companies.mdx` | `/services/local-seo` |
| `local-seo-for-plumbers.mdx` | `/services/local-seo` |
| `local-seo-for-roofing-companies.mdx` | `/services/local-seo` |
| `how-to-optimize-your-gbp.mdx` | `/services/gbp-optimization` |
| `google-reviews-for-contractors.mdx` | `/services/reputation-management` |
| `what-are-citations.mdx` | `/services/citation-building` |
| `5-things-contractor-websites-need.mdx` | `/services/web-design` |

Also add city page links: any post that mentions Rogers, Bentonville, Fayetteville, or Springdale by name should link that city mention to the corresponding `/service-areas/[city]` page.

---

### H13. Verify Resources PDFs exist
**Files:** `public/downloads/` directory  
**Fix:** Confirm all 4 PDF files referenced in schema and download buttons exist at their declared paths. If any are missing, either create placeholder PDFs or remove the download buttons until the files are ready.

---

## Medium — Fix Within 1 Month

### M1. Add FAQPage schema to 14 blog posts
**Files:** 14 MDX posts in `src/posts/` that have inline `## FAQ` sections but no `faqs:` frontmatter  
**Fix:** Extract each post's Q&A pairs into a YAML `faqs:` array in frontmatter. The template already handles this — no code changes needed. Priority order: `local-seo-for-hvac-companies`, `how-to-get-in-the-map-pack`, `local-seo-for-contractors`, `local-seo-for-roofing-companies`, `what-are-citations`.

---

### M2. Change `Article` to `BlogPosting` in blog template
**File:** `src/app/blog/[slug]/page.js`  
**Fix:** Change `"@type": "Article"` to `"@type": "BlogPosting"`. Add `"inLanguage": "en-US"` and `"wordCount"` properties. Add `width: 1200, height: 630` to the `ImageObject`.

---

### M3. Add `BreadcrumbList` to blog index, contact, and service-areas pages
**Files:** `src/app/blog/page.js`, `src/app/contact/page.js`, `src/app/service-areas/page.js`  
**Fix:** Add a 2-item `BreadcrumbList` JSON-LD block to each page's metadata:
```json
{ "@type": "BreadcrumbList", "itemListElement": [
  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.localsearchally.com" },
  { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.localsearchally.com/blog" }
]}
```

---

### M4. Fix `areaServed` misuse on service-areas CollectionPage schema
**File:** `src/app/service-areas/page.js`  
**Fix:** Remove `areaServed` from the `CollectionPage` schema (it's not a valid property on WebPage types). The data is correctly set on the `ProfessionalService` entity already.

---

### M5. Add `geo` coordinates to city page LocalBusiness schemas
**File:** `src/app/service-areas/[city]/page.js`  
**Fix:** Add city-center `GeoCoordinates` to each city's `LocalBusiness` schema block. Homepage has these; city pages don't.

---

### M6. Apply LazyMotion + domAnimation to root layout
**File:** `src/app/layout.js`  
**Fix:** Wrap the layout in `<LazyMotion features={domAnimation}>` from `framer-motion/lazy`. This reduces the initial Framer Motion bundle size on every page.

---

### M7. Add security headers to next.config.mjs
**File:** `next.config.mjs`  
**Fix:** Add a `headers()` export:
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

---

### M8. Fix image optimization settings
**File:** `next.config.mjs`, `src/app/blog/[slug]/page.js:150`  
**Fix:**
1. Add `images: { formats: ['image/avif', 'image/webp'] }` to `next.config.mjs`
2. Change `alt={metadata.title}` to use a dedicated `imageAlt` frontmatter field: `alt={metadata.imageAlt || `Featured image for ${metadata.title}`}`
3. Verify the MDX `img` component override in the blog template intercepts all image syntax

---

### M9. Expand About page to ~1,200 words
**File:** `src/app/about/page.js` (and related components)  
**Fix:** Add to the About page:
- The Harmonie Grace Foundation 5-star review, contextualized: "In [month], I ran a live local SEO audit for [organization] at a NWA marketing cohort. They left this review: [quote]. Note: this is a nonprofit, not a contractor — but the audit process and communication approach are the same."
- 100-150 words on the marketing cohort presentation / speaking experience
- Brief methodology section: "Here's how I actually audit a local business"

---

### M10. Fix duplicate content on city pages
**Files:** `src/app/service-areas/[city]/page.js` (or the content data files)  
**Fix:** The three-step process block and "Referrals are fine. Until they're not." section are verbatim across all 9 city pages. Replace these with:
- A 2-sentence reference with a link to `/services` for the full process explanation
- A genuinely city-specific section (150–200 words) per page: specific market data, trade mix, competitive landscape, or notable neighborhoods/zip codes

---

### M11. Add preconnect hints for GA4 domains
**File:** `src/app/layout.js`  
**Fix:**
```jsx
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="preconnect" href="https://www.google-analytics.com" />
```

---

### M12. Fix manifest theme colors
**File:** `src/app/manifest.json`  
**Fix:** Change `theme_color` and `background_color` from `#012169` to `#0a0a0a` to match the design system `--bg` token.

---

### M13. Add `gbp-checklist` to sitemap
**File:** `src/app/sitemap.js`  
**Fix:** Add to the `staticUrls` array:
```js
{ url: `${BASE}/gbp-checklist`, lastModified: new Date("2026-04-27") },
```

---

### M14. Remove double `<main>` from homepage
**File:** `src/app/page.js:269`  
**Fix:** Remove the inner `<main>` wrapper. The root layout's `<main id="main-content">` is the correct single landmark.

---

### M15. Add `priceRange` and `hasMap` to ProfessionalService schema
**File:** `src/app/page.js`  
**Fix:** Add to the business entity JSON-LD:
```json
"priceRange": "$$",
"hasMap": "https://www.google.com/maps?cid=YOUR_GBP_CID"
```
Get the GBP CID from your Google Business Profile URL.

---

## Low — Backlog

### L1. Add `SearchAction` to WebSite schema
**File:** `src/app/layout.js`  
Add `potentialAction: { "@type": "SearchAction", "target": "https://www.localsearchally.com/blog?q={search_term_string}", "query-input": "required name=search_term_string" }` to the WebSite JSON-LD for Sitelinks Searchbox eligibility.

### L2. Add `SpeakableSpecification` to homepage and key service pages
Mark the hero subheadline, first FAQ answer, and services pricing paragraph as speakable for voice assistant and Bing Copilot extraction.

### L3. Rename `apple-business-what-NWA-contractors-need-to-know.mdx`
Rename to all-lowercase (`apple-business-what-nwa-contractors-need-to-know.mdx`). Add a redirect in `next.config.mjs` from the old slug to the new one if any external links exist.

### L4. Add `postalCode` to About page Person schema address
Minor inconsistency — every other address block has `postalCode: "72761"` except the Person schema on `/about`.

### L5. Move GA ID to environment variable
Change `gaId='G-SGQ98MEHWZ'` in `layout.js` to `gaId={process.env.NEXT_PUBLIC_GA_ID}`. Set the variable in Vercel dashboard.

### L6. Verify `og-default.png` exists
Confirm `/public/og-default.png` (1200×630px) exists. Create it if not — used as fallback for blog posts without a feature image.

### L7. Consolidate `react-countup` with existing `useCountUp` hook
`InvisibilityHologram.jsx` already implements a custom count-up hook. Remove the `react-countup` dependency from `StatsSection.jsx` and use the existing hook.

### L8. Add `privacy` and `terms` to sitemap
Low stakes (these pages won't rank for anything meaningful) but technically accurate:
```js
{ url: `${BASE}/privacy`, lastModified: new Date("2026-04-03") },
{ url: `${BASE}/terms`, lastModified: new Date("2026-04-03") },
```

### L9. Fix HVAC post raw `<img>` tag
Replace the JSX `<img>` element in `local-seo-for-hvac-companies.mdx` with markdown image syntax (`![alt](src)`) so it routes through the `next/image` MDX component override.

### L10. Add `dateModified` to blog post frontmatter
Especially for posts that have been substantively updated. The GBP AI Overviews post (published April 2026, cites research from late 2025) is the highest priority — add `dateModified: 2026-04-17` or the actual revision date.

---

## Content Production Queue

Priority order for new blog posts (ranked by cluster health impact × estimated search value):

| Priority | Post | Cluster | Est. Word Count |
|---|---|---|---|
| 1 | "Local SEO for Electricians in NWA" | Trade SEO | 1,800–2,200 |
| 2 | "GBP Categories for Home Service Contractors" | GBP | 1,200–1,500 |
| 3 | "Contractor Website SEO: How to Build Pages That Rank Locally" | Web Design | 1,500–2,000 |
| 4 | "How to Respond to Negative Google Reviews (For Contractors)" | Reputation | 1,200–1,500 |
| 5 | "Local SEO for Landscaping Companies in NWA" | Trade SEO | 1,800–2,000 |
| 6 | "GBP Posts for Contractors: What to Post and When" | GBP | 1,000–1,200 |
| 7 | "Local SEO for Remodeling Contractors in NWA" | Trade SEO | 1,800–2,000 |
| 8 | "How to Remove a Fake Google Review" | Reputation | 800–1,000 |
| 9 | "HVAC SEO in the Bentonville–Rogers Corridor" | NWA Location | 1,200–1,500 |
| 10 | "Local SEO Checklist for NWA Contractors" | Core | 1,500–2,000 |

---

## Quick Wins Summary (can be done in one session)

| Task | Time | Impact |
|---|---|---|
| Fix `siteConfig.url` (1 line) | 5 min | Critical — repairs all canonicals |
| Create `llms.txt` | 30 min | High — AI search visibility |
| Fix LinkedIn URL typo (3 files) | 10 min | High — entity graph |
| Add `aggregateRating` schema | 15 min | High — star ratings in SERP |
| Remove `HowTo` schema | 5 min | Quick cleanup |
| Create IndexNow txt file | 10 min | Activates IndexNow |
| Remove `keywords` meta (5 files) | 15 min | Hygiene |
| Add `gbp-checklist` to sitemap | 5 min | Indexing |
| Fix manifest theme color | 5 min | Hygiene |
| Add preconnect hints | 5 min | Performance |
| Remove double `<main>` | 5 min | HTML validity |
| **Total** | **~2 hours** | |
