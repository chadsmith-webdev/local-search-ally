# CLAUDE.md — Local Search Ally Website

This file gives Claude Code the context needed to work on the Local Search Ally website without requiring repeated explanation. Read it fully before touching any code or copy.

---

## Project Overview

**Company:** Local Search Ally  
**Founder:** Chad Smith  
**Location:** Siloam Springs, AR (serving all of Northwest Arkansas)  
**Website:** localsearchally.com  
**Phone:** (479) 380-8626  
**Focus:** Local SEO and web development for NWA home service trades (HVAC, plumbing, roofing, electrical, landscaping, remodeling)

This is a redesign of the primary marketing and lead-generation website. The site's job is to turn invisible contractors into found ones — and to convert visitors into booked strategy calls.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | JavaScript — no TypeScript |
| Styling | Tailwind CSS (pure — no component library) |
| Blog | MDX — posts live in `src/posts/` |
| 3D / WebGL | Three.js via React Three Fiber (`@react-three/fiber`) + `@react-three/drei` |
| Animations | Framer Motion (page loads, scroll, UI transitions) |
| Deployment | Vercel |

### Folder structure

```
.claude/
  skills/               # Claude Code skill references (brand + design system)
    frontend-design/
    local-search-ally-brand/
src/
  app/                  # App Router pages and layouts
    api/                # API routes
    audit/              # SEO audit tool
    blog/               # Blog route
    layout.js           # Root layout
    page.js             # Homepage
    globals.css         # Global styles
    HomeClient.js       # Client component for homepage interactivity
  components/           # Shared UI components
  lib/                  # Utilities, helpers, MDX config
  posts/                # MDX blog post files
public/                 # Static assets
next.config.mjs
tailwind.config.js
postcss.config.mjs
jsconfig.json
```

### Folders to ignore (do not modify or generate files in these)
- `.next/` — Next.js build cache, auto-generated
- `node_modules/` — dependencies, never touch
- `.vscode/` — editor settings, not part of the project
- `.continue/` — VS Code AI extension config, not relevant to this project
- `.agents/` — non-standard, left over from experimentation; safe to delete

### Key conventions
- **Server vs. Client components:** Default to Server Components. Only add `"use client"` when needed (event handlers, hooks, Framer Motion, R3F). The `HomeClient.js` pattern — a thin client wrapper over a server page — is correct; keep using it.
- **No TypeScript:** Use JSDoc comments for prop documentation instead of TypeScript types where clarity is needed.
- **Tailwind only:** No inline styles unless absolutely necessary for dynamic values (e.g., R3F canvas sizing). No CSS Modules.
- **MDX blog:** Posts go in `src/posts/`. Frontmatter handles title, date, description, and slug. Process via `next-mdx-remote` or `@next/mdx` — whichever is already configured.

---

## Animation System

### Philosophy
Animations should feel like the site breathing — not performing. Think of them like good lighting in a room: you notice when it's wrong, not when it's right. Every animation must serve comprehension or reinforce brand confidence. No animation for animation's sake.

### Page Load Animations (Framer Motion)
- Fade + slight upward translate on hero content (`y: 20 → 0, opacity: 0 → 1`)
- Stagger children by 0.1s for text blocks
- Duration: 0.6s ease-out — fast enough to feel snappy, slow enough to feel intentional
- Use `AnimatePresence` in the root layout for page transitions

```js
// Standard entry variant — reuse across components
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
```

### Scroll Animations (Framer Motion)
- Use `whileInView` + `viewport={{ once: true }}` — animate once, not on every scroll pass
- Section reveals: same `fadeUp` variant
- Stat counters: trigger count-up animation on enter
- Never animate content that conveys critical information (headings, CTAs) in a way that delays reading

### 3D Elements (React Three Fiber)
- Use R3F for ambient/background 3D only — not for content delivery
- Appropriate uses: hero background particle field, subtle floating geometry, location pin 3D scene
- Always wrap R3F canvases in a `Suspense` boundary with a plain dark fallback
- Use `@react-three/drei` helpers (`Float`, `Stars`, `MeshDistortMaterial`, etc.) before writing raw Three.js
- Keep polygon counts low — these are mobile users on job sites
- Canvas must never block interaction with page content (use `style={{ pointerEvents: 'none' }}` on decorative scenes)

### Performance rules
- Lazy-load all R3F canvases with `next/dynamic` and `ssr: false`
- Wrap heavy Framer Motion sections in `LazyMotion` with `domAnimation` feature bundle
- Respect `prefers-reduced-motion` — wrap all animations in a check or use Framer Motion's `useReducedMotion()`

```js
// Required pattern for all R3F components
const HeroScene = dynamic(() => import('@/components/HeroScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#0a0a0a]" />,
})
```

---

## Redesign Scope & Starting Point

This is an active redesign — the existing code is being rebuilt, not patched. When in doubt, write it fresh rather than extending old code.

### What to keep
- `src/posts/` — MDX blog content is good, preserve all files
- `src/app/api/` — API routes may be reusable, review before rewriting
- `src/app/audit/` — SEO audit tool, keep and improve
- `src/app/blog/` — Blog routing, review and clean up
- `globals.css` — Keep, but audit for unused styles
- `layout.js` — Keep root layout, update with new design tokens
- `robots.js`, `sitemap.js`, `manifest.json` — Keep, these are correct

### What to rebuild
- `page.js` + `HomeClient.js` — Full homepage redesign
- `src/components/` — Rebuild components from scratch using the design system below
- `src/lib/` — Review utilities; keep what works, rewrite what doesn't

### File naming conventions going forward
- Components: PascalCase (`HeroSection.js`, `ServiceCard.js`)
- Utilities/helpers: camelCase (`formatDate.js`, `getMdxPosts.js`)
- Pages: Next.js convention (`page.js`, `layout.js`)
- 3D/R3F components: PascalCase, suffix with `Scene` or `Canvas` (`HeroScene.js`, `PinCanvas.js`)

---

## Brand Positioning

**One-liner (use everywhere):**
> "The best contractor in town shouldn't be the hardest to find. I make sure they're not."

**Key differentiators:**
1. No contracts — zero risk to try
2. Radical transparency — clients always know what's happening
3. Local — in NWA, understands the market
4. Full stack — SEO + web dev as one service

**The villain is invisibility.** Every page should frame the problem as being invisible on Google, not as "needing better marketing."

**Chad is the guide, not the hero.** The home service trade owner is the hero. Never position Local Search Ally as the hero.

---

## Voice & Tone

Write as Chad — one person talking to one person. Plain-spoken, honest, direct.

### Core rules
- **"I" always — never "we"**
- Lead with the problem, not the service
- Name the trade, the city, the number — vague claims get cut
- Every CTA is a door held open, not a push
- If it sounds like a stock photo caption, delete it

### Banned words (always swap these)

| Banned | Use Instead |
|---|---|
| solutions | results |
| leverage | use |
| synergy | (cut it) |
| cutting-edge | current / proven |
| dominate | rank above / show up first / get into the Map Pack |
| moves the needle | actually works |
| complete solution | one place / one person |
| powered by | built on / using |
| best-in-class | proven |
| transform | fix / improve / rank |
| digital presence | website / GBP / listings |
| drive traffic | get found / rank for |
| strategic content | (name what it actually does) |

### Approved CTAs (low-pressure and specific)
- "Let's Talk — It's Free"
- "Start With a Free Conversation"
- "See Where You Stand Online"
- "Get an Honest Assessment"
- "Run Your Free SEO Audit"
- "Book your strategy call →"

**Never use:** "Buy Now," "Sign Up," "Get Started Today," "Act Fast"

---

## Design System

### Colors

```css
--carolina: #7bafd4;   /* Primary accent — links, borders, highlights, CTAs */
--slate:    #2E3A4D;   /* Deep brand moments, dark badges, feature sections */
--steel:    #4A6B8A;   /* Secondary accent, hover states, mid-tone emphasis */
--bg:       #0a0a0a;   /* Page background */
--surface:  #141414;   /* Cards, nav, elevated sections */
--surface2: #1e1e1e;   /* Secondary surface, subtle contrast */
--text:     #f0f0f0;   /* All primary body and heading text */
--muted:    #888888;   /* Captions, labels, supporting text */
```

**Rules:**
- Always dark backgrounds — never invert to a light theme
- Carolina blue handles all interactive work: borders, accents, CTAs
- Slate navy is for depth and badge-level emphasis only

### Typography

- **Display / headings:** Georgia or Fraunces — serif, weight 700
- **Body / UI:** Helvetica Neue, Arial, or Urbanist — sans-serif, weight 400
- **Data / metrics / scores:** JetBrains Mono — monospace, weight 400–500 (tool UIs and dashboards only)
- **Labels / eyebrows:** Same sans-serif, weight 600, uppercase, 0.15em letter-spacing
- Heading letter-spacing: −0.02em
- Use `clamp()` for fluid heading sizes where possible

### Logo

- **Icon:** Location pin SVG in white (pin ball is always Carolina blue — never recolor)
- **Wordmark:** "Local Search" in `#f0f0f0` + "Ally" in `#7bafd4`
- **Tagline (optional):** "NWA Contractor SEO" in small uppercase sans-serif
- Never distort or add effects

**SVG icon:**
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="needleGrad" x1="0" x2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="white" stop-opacity="0.5"/>
      <stop offset="0.45" stop-color="white" stop-opacity="1"/>
      <stop offset="1" stop-color="white" stop-opacity="0.35"/>
    </linearGradient>
    <clipPath id="ballClip">
      <circle cx="50" cy="33" r="20"/>
    </clipPath>
  </defs>
  <polygon points="48,52 52,52 50,93" fill="url(#needleGrad)"/>
  <circle cx="50" cy="33" r="20" fill="#7bafd4"/>
  <g clip-path="url(#ballClip)">
    <circle cx="46" cy="28" r="10" fill="white" opacity="0.88"/>
    <circle cx="49.5" cy="30.5" r="10.1" fill="#7bafd4"/>
  </g>
</svg>
```

---

## Site Structure

| Page | Path | Purpose |
|---|---|---|
| Homepage | `/` | Primary conversion page |
| Services | `/services` | Full service breakdown with pricing |
| Portfolio | `/portfolio` | Demo builds and sample work |
| Blog | `/blog` | Educational content, no email gate |
| About | `/about` | Chad's story and values |
| Contact | `/contact` | Strategy call booking (Calendly) |
| Locations | `/locations` | NWA service areas |

---

## Services

**No prices yet — always use "custom quote" or "contact for pricing" until confirmed.**  
All services are no long-term contracts.

| Service | Notes |
|---|---|
| Local SEO | GBP, citations, keyword strategy, on-page SEO, monthly reports |
| Web Design & Development | Mobile-first, SEO-built, lead-gen focused |
| GBP Optimization & Management | Full profile audit, photo strategy, post management |
| Reputation | Review request process, templates, monitoring |
| Free SEO Audit Tool | Primary transitional CTA — available on the website |

---

## 3-Step Service Process (use this framing, not older versions)

1. **Audit** — Review local visibility, service pages, and competitor presence to find the highest-impact gaps.
2. **Fix Priority Gaps** — Improve what matters first: local relevance, on-page clarity, and lead paths that support calls.
3. **Grow and Track** — Monitor progress and adjust based on what improves visibility and call quality.

---

## Ideal Customer Profile

**Primary:** Established NWA home service trade owner

- Owner-operator or small team (1–10 employees)
- 5–20+ years of trade experience
- Based in NWA: Rogers, Bentonville, Fayetteville, Springdale, surrounding areas
- Trades: HVAC, plumbing, roofing, electrical, landscaping, remodeling
- Revenue from referrals; knows they need to be online but doesn't know where to start
- May have been burned by marketing before

**Site language:** Use "home service trades" — not "contractors" generically.

---

## Credibility Anchors

No client case studies yet. Current proof is demo sites and third-party data.

### Demo Sites (live at localsearchally.com/portfolio)
- Plumbing — emergency and maintenance calls from local search
- HVAC — seasonal demand capture with clear booking paths
- Electrical — trust for higher-ticket jobs and panel upgrades

Reference demo sites as proof of build quality and technical approach — not client results.

### Approved Third-Party Stats
Only use these — never fabricate:

| Stat | Source |
|---|---|
| 97% of consumers use Google to evaluate local businesses | BrightLocal |
| 78% of local mobile searches result in an offline purchase | Safari Digital |
| 28% of searches for something nearby result in a purchase | Think With Google |
 46% of Google searches have local intent. | SearchEngineRoundtable |
 | 8 in 10 (80%) US consumers search for a local business online at least once a week. | BrightLocal |
 | 51% of consumers use Google Maps for local search. | Backlinko |
 | 96% of users learn about local businesses online. | SEO.com |
 | 72% of consumers use Google to search for local business information. | BrightLocal |
 | 50% of consumers who perform a local search visit a store within one day. | Think With Google |
 | 78% of local mobile searches result in an offline purchase. | Safari Digital |
 | 61% of consumers say they are likely to choose a business that has a website. | BrightLocal |
 | 88% of consumers who search for a type of business on a mobile device call or visit that business within 24 hours. | Think With Google |
 | 60% of consumers say that the quality of a business's website affects their perception of the business. | BrightLocal |
 | 30% of consumers say that a business's website affects their decision to recommend the business to others. | BrightLocal |
 | 20% of consumers say that a business's website affects their decision to leave a review. | BrightLocal |
 
 ---

## Transparency Pledge

Use verbatim or paraphrase where appropriate:
- "I will never claim results I haven't achieved."
- "I will tell you if something is outside my skill set."
- "I will never lock you into a contract."
- "I will communicate clearly and often."

Do not edit or water down these lines — they are the strongest copy on the site.

---

## Copy Review Checklist

Before committing any copy changes, verify:
- [ ] Leads with the problem, not the service
- [ ] "I" used throughout — no "we"
- [ ] No banned words present
- [ ] No vague claims (name the trade, city, or number — or cut the claim)
- [ ] No rule-of-three endings
- [ ] CTAs are low-pressure and use approved language
- [ ] The contractor is framed as the hero — LSA as the guide
- [ ] No stock-photo-caption sentences

---

## Code Quality Standards

### General
- **Mobile-first always** — home service trade owners are often on phones at job sites
- **No TypeScript** — plain JavaScript throughout; use JSDoc for type hints where helpful
- **No inline styles** unless driven by dynamic runtime values
- Keep components small and single-purpose — if a component file exceeds ~150 lines, it probably needs splitting

### SEO (this site lives or dies on local SEO)
- Every page needs a `generateMetadata()` export with title, description, and Open Graph tags
- Homepage and service pages need `LocalBusiness` JSON-LD schema
- Blog posts need `Article` JSON-LD schema built from MDX frontmatter
- All images need descriptive `alt` text — never empty
- Use Next.js `<Image>` component always — never raw `<img>` tags

### Performance
- Minimize render-blocking resources — Core Web Vitals affect local rankings
- Lazy-load R3F canvases with `next/dynamic + ssr: false` (see Animation System above)
- Use `next/font` for any web fonts — never load fonts from a CDN `<link>` tag
- Prefer Server Components; only reach for `"use client"` when necessary

### Accessibility
- All interactive elements need keyboard focus states (use `focus-visible:` Tailwind variants)
- Phone numbers must be `<a href="tel:+14793808626">` links — critical for mobile users
- Heading hierarchy must be logical — one `<h1>` per page, then `<h2>`, `<h3>`

### Forms & CTAs
- Keep forms minimal — name + phone is enough to start a conversation
- Click-to-call is the highest-priority CTA on mobile
- Contact page integrates Calendly for strategy call booking
- Never use `<form>` default submission — handle with a server action or API route
