# CLAUDE.md — Local Search Ally Website

This file gives Claude Code the context needed to work on the Local Search Ally
website without requiring repeated explanation. Read it fully before touching
any code or copy.

---

## Project Overview

**Company:** Local Search Ally
**Founder:** Chad Smith
**Location:** Siloam Springs, AR (serving all of Northwest Arkansas)
**Website:** localsearchally.com
**Audit tool:** audit.localsearchally.com
**Phone:** (479) 380-8626
**Focus:** Local SEO and web development for NWA home service trades (HVAC,
plumbing, roofing, electrical, landscaping, remodeling, etc.)

This is the primary marketing and lead-generation website. The site's job is
to turn invisible contractors into found ones — and to convert visitors into
booked strategy calls. The redesign is complete. Work from the current
codebase. Do not rewrite from scratch.

---

## Tech Stack

| Layer      | Choice                                                             |
| ---------- | ------------------------------------------------------------------ |
| Framework  | Next.js (App Router)                                               |
| Language   | JavaScript — no TypeScript                                         |
| Styling    | CSS Modules (layout) + Tailwind CSS v4 (color, typography, states) |
| Blog       | MDX — posts live in `src/posts/`                                   |
| 3D / WebGL | Three.js via React Three Fiber + `@react-three/drei`               |
| Animations | Framer Motion (page loads, scroll, UI transitions)                 |
| Deployment | Vercel                                                             |

### Deployment workflow

- `main` is the production branch. Commits that land on `main` deploy to the
  live site after a successful Vercel build.
- Non-`main` branches create preview deployments only.
- Standard release path: push feature branch → review preview → merge PR into
  `main` → production goes live.
- If a production deployment fails, the live site does not update until a
  succeeding deployment is created.

### Folder structure

```
.claude/
  skills/                         # Brand + design system references
    frontend-design/
    local-search-ally-brand/
src/
  app/                            # App Router pages and layouts
    api/                          # API routes
    audit/                        # SEO audit tool
    blog/                         # Blog route
    resources/                    # Downloads & Guides
    service-areas/                # NWA service area pages
    services/                     # Services pages (incl. citation-building)
      citation-building/
    about/
    contact/
    portfolio/
    privacy/
    terms/
    layout.js                     # Root layout
    page.js                       # Homepage
    globals.css                   # Global styles and design tokens
    HomeClient.js                 # Client component for homepage interactivity
  components/                     # Shared UI components
  lib/                            # Utilities, helpers, MDX config
  posts/                          # MDX blog post files
public/                           # Static assets
next.config.mjs
tailwind.config.js
postcss.config.mjs
jsconfig.json
```

### Folders to never modify

- `.next/` — Next.js build cache, auto-generated
- `node_modules/` — dependencies, never touch
- `.vscode/` — editor settings
- `.continue/` — VS Code AI extension config
- `.agents/` — leftover from experimentation, safe to delete

### Key conventions

- **Server vs. Client components:** Default to Server Components. Only add
  `"use client"` when needed (event handlers, hooks, Framer Motion, R3F). The
  `HomeClient.jsx` pattern — a thin client wrapper over a server page — is
  correct; keep using it.
- **No TypeScript:** Use JSDoc comments for prop documentation where clarity
  is needed.
- **CSS architecture:** Tailwind handles color (`text-carolina`, `bg-surface`),
  typography, and interactive states. All layout CSS — `display`, `flex`,
  `grid`, `gap`, `margin`, `padding`, `width`, `max-width`, `position`,
  `overflow`, `border-radius`, `height` — goes in CSS Modules (`.module.css`
  files colocated with the component). Shared layout patterns (`.container`,
  `.section`) are defined in `globals.css`. Never use Tailwind for layout.
- **MDX blog:** Posts go in `src/posts/`. Frontmatter handles title, date,
  description, and slug.

---

## Site Structure

This is the current live navigation. Use these paths — do not invent new ones
without being asked.

| Page              | Path                            | Purpose                             |
| ----------------- | ------------------------------- | ----------------------------------- |
| Homepage          | `/`                             | Primary conversion page             |
| Services          | `/services`                     | Full service breakdown with pricing |
| Citation Building | `/services/citation-building`   | Dedicated citation service page     |
| Service Areas     | `/service-areas`                | NWA service area landing pages      |
| Portfolio         | `/portfolio`                    | Demo builds and sample work         |
| Resources         | `/resources`                    | Downloads & Guides hub              |
| Blog              | `/blog`                         | Educational content, no email gate  |
| About             | `/about`                        | Chad's story and values             |
| Contact           | `/contact`                      | Strategy call booking (Calendly)    |
| Privacy           | `/privacy`                      | Privacy policy                      |
| Terms             | `/terms`                        | Terms of service                    |
| SEO Audit Tool    | `audit.localsearchally.com/...` | Standalone subdomain — external     |

**Nav discrepancy note:** The homepage uses the updated nav (Services, Service
Areas, Portfolio, Resources, Blog, About, Contact). The services and about
pages still reflect an older nav without Resources or Service Areas. These
pages are due for a nav update to match the homepage.

**About page copy note:** The current about page copy is outdated. It
references the old story framing ("proving it works on my own projects for
years") and the old timeline. When editing or rewriting the about page, use
the updated founder story from the brand reference in `.claude/skills/`.

---

## Design System

### Colors

These are the canonical token values. Both `:root` and the `@theme` Tailwind
block in `globals.css` have been updated to match. Do not hardcode hex values
in components — always reference CSS variables or Tailwind tokens.

```css
/* Brand */
--carolina: #7bafd4; /* Primary accent — links, borders, highlights, CTAs */
--carolina-dark: #4d8cb9; /* Hover/pressed state for Carolina elements */
--carolina-dim: rgba(123, 175, 212, 0.08); /* Subtle tinted backgrounds */
--slate: #1a222e; /* Deep brand moments, dark badges, feature sections */
--steel: #3a5570; /* Secondary accent, hover states, mid-tone emphasis */

/* Backgrounds */
--bg: #0a0a0a; /* Page background */
--surface: #141414; /* Cards, nav, elevated sections */
--surface2: #1e1e1e; /* Secondary surface, subtle contrast */

/* Text */
--text: #f8f9fa; /* All primary body and heading text */
--muted: #6c757d; /* Captions, labels, supporting text */

/* Borders */
--border: rgba(255, 255, 255, 0.06); /* Default subtle border */
--border-strong: rgba(255, 255, 255, 0.12); /* Hover/active/focus border */

/* Status */
--red: #ff4d4d; /* Error / destructive */
--yellow: #ffcc00; /* Warning */
--green: #00ff88; /* Success */

/* Gradients */
--gradient-cta: linear-gradient(135deg, #7bafd4 0%, #3a5570 100%);
--gradient-cyber: linear-gradient(
  90deg,
  transparent,
  var(--carolina),
  transparent
);
```

**Color rules:**

- Always dark backgrounds — never invert to a light theme
- Carolina blue handles all interactive work: CTAs, links, borders, accents
- Carolina-dark is the hover variant — use exclusively on interactive state changes
- Slate navy is for depth only: badges, dark feature blocks, card headers
- Steel bridges muted → Carolina: secondary buttons, subtle emphasis
- Status colors (red/yellow/green) are for data and tool indicators only —
  never decorative
- Use `--border` for dividers; `--border-strong` when more definition is needed

### Typography

- **Display / headings:** Bricolage Grotesque — weight 700, letter-spacing −0.02em
- **Body / UI:** Space Grotesk — weight 400, line-height 1.7
- **Data / metrics / technical:** JetBrains Mono — weight 400–500 (tool UIs
  and dashboards only — never in marketing copy)
- **Labels / eyebrows:** Space Grotesk, weight 600, ALL CAPS, letter-spacing 0.15–0.2em
- Load all fonts via `next/font` — never a CDN `<link>` tag
- Use `clamp()` for fluid heading sizes

**Type scale:**

```
Hero / H1: clamp(2.5rem, 6vw, 4.5rem)
H2:        clamp(1.75rem, 3vw, 2.5rem)
H3:        1.2–1.35rem, weight 500
Body:      1rem
Small:     0.875rem
Eyebrow:   0.65–0.75rem, uppercase, tracking 0.15em
Mono data: 0.85–1.1rem
```

### Logo

- **Icon:** Location pin SVG — white body, pin ball always Carolina blue
  (`#7bafd4`), no container square
- **Wordmark:** "Local Search" in `#f8f9fa` + "Ally" in `#7bafd4` — never a
  single uniform color
- **Tagline (optional):** "NWA Contractor SEO" in small uppercase Space Grotesk
- Never stretch, rotate, recolor, or add drop shadows

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

### Shared Layout Classes (globals.css)

```css
.section          /* Full-width vertical rhythm wrapper */
.container        /* Max 1200px, centered, horizontal gutter */
.container-narrow /* Max 800px, centered, horizontal gutter */
.container-cinematic /* Max 1200px — premium content sections */
```

Never recreate these in component CSS Modules. Use them directly in JSX.

### UI Effects

These utility classes are defined in `globals.css` — use them, don't rewrite:

```
.glass-module     /* HUD glass — floating elements only (modals, tooltips, dropdowns, panels) */
.module-header    /* Mono label for glass-module panel headers */
.tech-grid        /* Dot/line grid background texture */
.hud-frame        /* Corner bracket decoration */
.pulsing-node     /* Animated dot indicator */
.scan-line        /* Animated scanning line (fixed position) */
.scanning-line    /* Inline scanning line (relative position) */
.noise            /* Film grain texture overlay */
```

---

## Animation System

### Philosophy

Animations should feel like the site breathing — not performing. Every
animation must serve comprehension or reinforce brand confidence. No animation
for animation's sake.

### Page Load (Framer Motion)

```js
// Standard entry variant — reuse across components
export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
```

- Stagger children by 0.1s for text blocks
- Use `AnimatePresence` in root layout for page transitions

### Scroll (Framer Motion)

- Use `whileInView` + `viewport={{ once: true }}` — animate once only
- Same `fadeUp` variant for section reveals
- Never animate content that conveys critical information in a way that delays
  reading

### 3D (React Three Fiber)

- R3F for ambient/background only — not for content delivery
- Appropriate uses: hero particle field, subtle floating geometry, pin scene
- Always wrap in `Suspense` with a plain dark fallback
- Use `@react-three/drei` helpers before writing raw Three.js
- Keep polygon counts low — these are mobile users on job sites
- Canvas must never block interaction (`style={{ pointerEvents: 'none' }}`)

### Performance Rules

```js
// Required pattern for all R3F components
const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => <div className='w-full h-full bg-[#0a0a0a]' />,
});
```

- Lazy-load all R3F canvases with `next/dynamic` and `ssr: false`
- Wrap heavy Framer Motion sections in `LazyMotion` with `domAnimation` bundle
- Respect `prefers-reduced-motion` — use Framer Motion's `useReducedMotion()`

---

## Tailwind v4 Known Issues

**Layout utilities silently fail in client components.** Classes like `flex`,
`grid`, `gap-8`, `p-6`, `mx-auto`, `h-full`, `overflow-hidden`, `rounded-xl`
do not generate CSS reliably for dynamic/client-side JSX. Use CSS Modules for
all layout instead.

**`mx-auto` ≠ `margin: 0 auto`.** Tailwind v4 maps `mx-auto` to
`margin-inline: auto` (CSS Logical Properties), which behaves differently
inside flex containers. Use `margin: 0 auto` in a CSS Module instead.

**`h-full` inside Framer Motion `m.div` collapses to zero.** Give the `m.div`
`display: flex; flex-direction: column;` in the CSS Module, and use `flex: 1`
on the child.

**`<Image fill>` breaks `overflow: hidden` under 3D transforms.** `fill`
renders the `<img>` as `position: absolute`, which escapes `overflow: hidden`
when any ancestor has a 3D CSS transform. For images inside tilt/3D card
components, use explicit `width`/`height` props with `object-fit: cover` in
the CSS Module instead.

---

## Brand Positioning

**One-liner (use everywhere):**

> "The best contractor in town shouldn't be the hardest to find. I make sure they're not."

**Key differentiators (ranked):**

1. No contracts — zero risk to try
2. Radical transparency — clients always know what's happening
3. Local — in NWA, understands the market
4. Full stack — SEO + web dev as one service

**The villain is invisibility.** Every page frames the problem as being
invisible on Google — not as "needing better marketing."

**Chad is the guide, not the hero.** The home service trade owner is always
the hero. Never position Local Search Ally as the hero.

---

## Voice & Tone

Write as Chad — one person talking to one person. Plain-spoken, honest, direct.

**Core rules:**

- "I" always — never "we"
- Lead with the problem, not the service
- Name the trade, the city, the number — vague claims get cut
- Every CTA is a door held open, not a push
- If it sounds like a stock photo caption, delete it

### Banned Words

| Banned            | Use Instead                                        |
| ----------------- | -------------------------------------------------- |
| solutions         | results                                            |
| leverage          | use                                                |
| synergy           | (cut it)                                           |
| cutting-edge      | current / proven                                   |
| dominate          | rank above / show up first / get into the Map Pack |
| moves the needle  | actually works                                     |
| complete solution | one place / one person                             |
| powered by        | built on / using                                   |
| best-in-class     | proven                                             |
| transform         | fix / improve / rank                               |
| digital presence  | website / GBP / listings                           |
| drive traffic     | get found / rank for                               |
| strategic content | (name what it actually does)                       |
| online presence   | website / GBP / listings                           |

### Approved CTAs

- "Let's Talk — It's Free"
- "Start With a Free Conversation"
- "See Where You Stand Online"
- "Get an Honest Assessment"
- "Run Your Free SEO Audit"
- "Book your strategy call →"
- "See Where You Stand — It's Free"

**Never use:** "Buy Now," "Sign Up," "Get Started Today," "Act Fast," or
anything that implies urgency or pressure.

---

## Services

The services page (`/services`) currently shows individual services with
starting prices. This is the live version.

| Service                  | Starting Price | Notes                                           |
| ------------------------ | -------------- | ----------------------------------------------- |
| Local SEO                | $499/mo        | GBP, citations, on-page SEO, monthly reports    |
| GBP Optimization         | $199           | Full profile audit, photo strategy, post mgmt   |
| Web Design & Development | $799           | Mobile-first, SEO-built, lead-gen focused       |
| Reputation Building      | $99/mo         | Review systems, templates, monitoring           |
| Content & Keywords       | $299/mo        | Service pages, location pages, blog content     |
| SEO Audits               | $299           | Technical SEO, citation audit, competitor gap   |
| Citation Building        | (see sub-page) | Dedicated page at `/services/citation-building` |

**Tiered pricing (planned homepage/pricing section):**
A three-tier bundled model is in progress. Do not implement it unless
explicitly asked. The tiers when ready are:

| Plan       | Price     | Best For                                                          |
| ---------- | --------- | ----------------------------------------------------------------- |
| Visibility | $497/mo   | Trades with a decent website not showing up in the Map Pack       |
| Growth     | $797/mo   | Trades ready to rank above competitors and turn search into calls |
| Full Stack | $1,197/mo | Trades that want everything — found, converting site, reputation  |

All plans and services: month-to-month, no long-term contracts.

---

## Proof & Credibility

No client case studies yet. Current credibility anchors:

**GBP Review — The Harmonie Grace Foundation (5 stars):**
Chad ran a live audit at a local marketing cohort. The organization left a
review: "incredibly accurate and highlighted areas I hadn't fully considered...
not only informative but also actionable... knowledgeable, thorough, and
genuinely invested in helping organizations improve."

Note: This is a nonprofit, not a contractor. Use it to validate the audit
process and communication style — not as contractor social proof.

**Workshop / Speaking:** Chad has presented to a local marketing cohort and
run a live local SEO audit as the centerpiece demo.

**Demo sites (live at localsearchally.com/portfolio):**

- Plumbing — emergency and maintenance calls from local search
- HVAC — seasonal demand capture with clear booking paths
- Electrical — trust for higher-ticket jobs and panel upgrades

Reference demo sites as proof of build quality and technical approach —
not as client results.

### Approved Third-Party Stats

Only use these — never fabricate or invent sources.

| Stat                                                                                    | Source                   |
| --------------------------------------------------------------------------------------- | ------------------------ |
| 46% of all Google searches have local intent                                            | Search Engine Roundtable |
| 97% of consumers use Google to evaluate local businesses                                | BrightLocal              |
| 8 in 10 US consumers search for a local business online at least once a week            | BrightLocal              |
| 51% of consumers use Google Maps for local search                                       | Backlinko                |
| 96% of users learn about local businesses online                                        | SEO.com                  |
| 72% of consumers use Google to search for local business information                    | BrightLocal              |
| 78% of local mobile searches result in an offline purchase                              | Safari Digital           |
| 88% of consumers who search for a local service on mobile call or visit within 24 hours | Think With Google        |
| 50% of consumers who perform a local search visit a store within one day                | Think With Google        |
| 28% of searches for something nearby result in a purchase                               | Think With Google        |
| 61% of consumers say they are likely to choose a business that has a website            | BrightLocal              |
| 60% of consumers say a business's website quality affects their perception              | BrightLocal              |
| 30% of consumers say a business's website affects their decision to recommend it        | BrightLocal              |
| 20% of consumers say a business's website affects their decision to leave a review      | BrightLocal              |

---

## Ideal Customer Profile

**Primary:** Established NWA home service trade owner

- Owner-operator or small team (1–10 employees)
- 5–20+ years of trade experience
- Based in NWA: Rogers, Bentonville, Fayetteville, Springdale, surrounding areas
- Trades: HVAC, plumbing, roofing, electrical, landscaping, remodeling

**Psychographic profile:**
Not skeptical of online marketing — disengaged from it. They've claimed their
GBP. Box checked. Referrals are steady. The real trigger is referral anxiety:
the quiet awareness that the pipeline runs entirely through people they already
know. Secondary layer: prior learned helplessness — they set up their GBP,
nothing obviously changed, and concluded "SEO doesn't work for me" when the
actual problem was an incomplete setup they had no way to diagnose.

**Copy implication:** Name the specific situation, not the general problem.
"You claimed your GBP and left it there" lands harder than "you're invisible
online." Diagnostic framing ("see where you stand") converts better than
outcome promises ("get more calls").

**Site language:** Use "home service trades" — not "contractors" generically.

---

## 3-Step Service Process

Use this framing everywhere. Do not use older versions.

1. **Audit** — Review local visibility, service pages, and competitor presence
   to find the highest-impact gaps.
2. **Fix Priority Gaps** — Improve what matters first: local relevance,
   on-page clarity, and lead paths that support calls.
3. **Grow and Track** — Monitor progress and adjust based on what improves
   visibility and call quality.

---

## Transparency Pledge

Use verbatim or close paraphrase. Do not water down these lines — they are
the strongest copy on the site.

- "I will never claim results I haven't achieved."
- "I will tell you if something is outside my skill set."
- "I will never lock you into a contract."
- "I will communicate clearly and often."

---

## Code Quality Standards

### General

- **Mobile-first always** — home service trade owners are often on phones at
  job sites
- **No TypeScript** — plain JavaScript throughout; JSDoc for type hints
- **CSS Modules for all layout** — Never use Tailwind utilities for layout
  properties. They do not generate reliably for client components in Tailwind
  v4. Put all layout in a colocated `.module.css` file.
- **Tailwind for non-layout only** — color, typography, hover/focus states,
  transitions, and shadows
- Keep components small and single-purpose — if a file exceeds ~150 lines,
  it probably needs splitting

### File Naming

- Components: PascalCase `.jsx` (`HeroSection.jsx`, `ServiceCard.jsx`)
- Component styles: same name + `.module.css` (`HeroSection.module.css`),
  colocated in same folder
- Utilities/helpers: camelCase `.js` (`formatDate.js`, `getMdxPosts.js`)
- Pages: Next.js convention (`page.js`, `layout.js`)
- 3D/R3F components: PascalCase `.jsx`, suffix `Scene` or `Canvas`

### SEO (this site lives or dies on local SEO)

- Every page needs a `generateMetadata()` export with title, description, and
  Open Graph tags
- Homepage and service pages need `LocalBusiness` JSON-LD schema
- Blog posts need `Article` JSON-LD schema built from MDX frontmatter
- All images need descriptive `alt` text — never empty or generic
- Use Next.js `<Image>` component always — never raw `<img>` tags

### Performance

- Minimize render-blocking resources — Core Web Vitals affect local rankings
- Lazy-load R3F canvases with `next/dynamic + ssr: false`
- Use `next/font` for all web fonts — never a CDN `<link>` tag
- Prefer Server Components; only reach for `"use client"` when necessary

### Accessibility

- All interactive elements need keyboard focus states (`focus-visible:` variants)
- Phone numbers must be `<a href="tel:+14793808626">` links — critical for
  mobile users
- One `<h1>` per page, then `<h2>`, `<h3>` — never skip levels

### Forms & CTAs

- Keep forms minimal — name + phone is enough to start a conversation
- Click-to-call is the highest-priority CTA on mobile
- Contact page integrates Calendly for strategy call booking
- Never use `<form>` default submission — handle with a server action or
  API route

### Stable Files — Do Not Rewrite

- `src/posts/` — MDX blog content
- `src/app/api/` — API routes
- `src/app/audit/` — SEO audit tool
- `globals.css` — Global styles and design tokens
- `layout.js` — Root layout
- `robots.js`, `sitemap.js`, `manifest.json`

Extend and edit what exists. Do not rebuild components unless explicitly asked.

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
- [ ] No "online presence" or "digital presence" — name the actual thing
