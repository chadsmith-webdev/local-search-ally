# Local Search Ally — Design System

**Version:** 1.0
**Format:** Cyber Industrial / Mission Control
**Purpose:** Canonical design reference for the LSA website and tools. Hand this file to Claude Code as a design guide.

---

## 01. Identity & Narrative

The Local Search Ally website is a technical command center. It bridges the gap between digital data and physical trade services. The aesthetic is **Cyber Industrial**: grittier than Silicon Valley, more sophisticated than a generic agency.

**Core Brand Pillars:**

- **Technical Authority** — Local SEO framed as high-precision engineering.
- **Blue-Collar Precision** — Data visualized through the lens of tools, schematics, and mechanical systems.
- **The Invisibility Villain** — "Cloaking Levels" identify and solve search visibility issues.

**Voice anchor:** The contractor is the hero. LSA is the guide. The villain is invisibility. First-person "I" — never "we."

---

## 02. Design Tokens

### Color Palette

```css
:root {
  /* Brand Accents */
  --carolina: #7bafd4; /* Primary accent, links, CTAs, borders */
  --carolina-dark: #4d8cb9; /* Hover/pressed state */
  --carolina-dim: rgba(123, 175, 212, 0.08); /* Subtle tinted backgrounds */
  --slate: #1a222e; /* Deep brand moments, badges, focus elements */
  --steel: #3a5570; /* Secondary accent, mid-tone emphasis */

  /* Surfaces */
  --bg: #0a0a0a; /* Page background */
  --surface: #141414; /* Cards, nav, elevated sections */
  --surface2: #1e1e1e; /* Secondary surface, subtle contrast */

  /* Text */
  --text: #f8f9fa; /* All primary body + heading text */
  --muted: #6c757d; /* Captions, labels, supporting text */

  /* Borders */
  --border: rgba(255, 255, 255, 0.06); /* Default dividers */
  --border-strong: rgba(255, 255, 255, 0.12); /* Emphasized borders */

  /* Status (data only — never decorative) */
  --red: #ff4d4d; /* Error, negative status */
  --yellow: #ffcc00; /* Caution, pending */
  --green: #00ff88; /* Success, positive status */
}
```

### Color Rules

- **Carolina** does the interactive work: borders, accents, labels, CTAs.
- **Carolina-dark** is the hover variant for interactive state changes.
- **Slate** is for depth and badge-level emphasis only.
- **Steel** bridges muted and Carolina — secondary buttons, hover states.
- **Status colors** (red/yellow/green) appear in data, audit scores, and tool indicators only. Not decoration.
- **Backgrounds stay dark.** Never invert to a light theme.

> **Exception:** Floating HUD elements (modals, tooltips, dropdowns, glass panels) may use a subtle Carolina-tinted `1px solid` border. This is part of the glass HUD system — not a layout border. See Section 04.

> **Exception:** The hero HUD container (`InvisibilityHologram`) uses a `1px solid` border with L-shaped corner brackets as part of the diagnostic terminal aesthetic. This is a deliberate design choice — not a layout border.

### Typography

| Context                    | Font                    | Weight  | Example                     |
| -------------------------- | ----------------------- | ------- | --------------------------- |
| Display / headings         | Bricolage Grotesque     | 700     | "Your SEO Visibility Score" |
| Body / UI                  | Space Grotesk           | 400     | Explanatory paragraphs      |
| Data / metrics / technical | **JetBrains Mono**      | 400–500 | "78/100", "STATUS: ACTIVE"  |
| Captions / labels          | Space Grotesk uppercase | 600     | "OVERALL SCORE"             |

**Hierarchy rules:**

- Heading letter-spacing: `-0.02em`
- Label letter-spacing: `0.15em`, uppercase
- Use fluid scaling with `clamp()` where possible
- Pair large display headlines with small JetBrains Mono metadata for data-rich density (e.g., big "Visibility Score" + "CALCULATED: 2025-03-31" in mono beneath it)

---

## 03. Surface Architecture

### The "No-Line" Rule

Do NOT use `1px solid` borders to define major sections or layout regions. Borders make an interface feel dated. Define boundaries through:

- **Background color shifts** — `--surface` sections sitting on `--bg`
- **Tonal transitions** — switching from `--surface` to `--surface2`

### Surface Hierarchy (stacked frosted-glass sheets)

| Layer             | Token                 | Purpose                      |
| ----------------- | --------------------- | ---------------------------- |
| Base              | `--bg`                | Foundation layer             |
| Content blocks    | `--surface`           | Primary containment          |
| Secondary         | `--surface2`          | Subtle contrast              |
| Interactive/focus | `--slate`             | Elements demanding attention |
| Recessed wells    | `--bg` on `--surface` | Data tables, code blocks     |

**Nesting pattern:** An inner module (e.g., data table) sits in a `--bg` "well" inside a larger `--surface` section to create recessed technical depth.

---

## 04. The Glass HUD System

Floating elements (modals, dropdowns, tooltips, diagnostic panels) use glassmorphism to simulate HUD overlays.

```css
.glass-module {
  background: rgba(26, 34, 46, 0.85); /* --slate at 85% */
  backdrop-filter: blur(12px);
  border: 1px solid rgba(123, 175, 212, 0.2);
  box-shadow: inset 0 0 15px rgba(123, 175, 212, 0.05);
}

.module-header {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: var(--carolina);
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border-bottom: 1px solid var(--steel);
}
```

**Primary CTA gradient** (use when flat color feels too flat):

```css
background: linear-gradient(135deg, var(--carolina) 0%, var(--steel) 100%);
```

---

## 05. 3D Invisibility Visualization

The hero element of the diagnostic page is a 3D hologram of the client's current visibility state.

**Tech stack:** Three.js / React Three Fiber

**Implementation:**

- **Geometry:** `PlaneGeometry` with a displacement map creating a topographic "cloak"
- **Material:** Wireframe enabled, color `#7bafd4` (Carolina)
- **Animation:** Slow sine-wave vertex oscillation — creates a "breathing" energy field
- **Logic:** Displacement scale is tied to the _Invisibility Score_. Higher invisibility = more erratic, distorted wireframe. Lower invisibility = calm, structured topography.

---

## 06. Component Patterns

### Data Card (JetBrains Mono metric with label)

```html
<div class="data-card">
  <div class="label">OVERALL SCORE</div>
  <div class="metric">78<span class="denom">/100</span></div>
  <div class="meta">CALCULATED 2026-04-21</div>
</div>
```

```css
.data-card {
  background: var(--surface);
  padding: 2rem;
  /* no border — rely on surface contrast */
}
.label {
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
}
.metric {
  font-family: "JetBrains Mono", monospace;
  font-size: 3.5rem;
  font-weight: 500;
  color: var(--text);
}
.denom {
  color: var(--muted);
  font-size: 1.5rem;
}
.meta {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.7rem;
  color: var(--carolina);
  opacity: 0.6;
}
```

### CTA Buttons

**Primary CTA** — gradient fill, high-contrast, used for the single most important action on a page:

```css
.btn-primary {
  background: var(--gradient-cta); /* linear-gradient(135deg, #7bafd4 0%, #3a5570 100%) */
  border: none;
  color: #0a0a0a;
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  transition: all 0.2s;
}
.btn-primary:hover {
  filter: brightness(1.1);
}
```

**Secondary CTA** — outline style, low-pressure, used for supporting actions:

```css
.btn-secondary {
  background: transparent;
  border: 1px solid rgba(123, 175, 212, 0.4);
  color: var(--carolina);
  font-family: "Space Grotesk", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  transition: all 0.2s;
}
.btn-secondary:hover {
  background: var(--carolina-dim);
  border-color: var(--carolina);
  color: var(--text);
}
```

---

## 07. Coding Assistant Handoff Prompt

Paste this at the start of any new Claude Code session when building LSA pages or components:

```
I am developing the Local Search Ally platform.

STYLE: Cyber Industrial / Mission Control FUI
TECH STACK: Next.js, Tailwind CSS, Framer Motion, Three.js

COLOR TOKENS:
- Background: #0a0a0a (--bg)
- Surface: #141414 (--surface)
- Slate (depth/focus): #1a222e (--slate)
- Steel (secondary): #3a5570 (--steel)
- Carolina (primary accent): #7bafd4 (--carolina)
- Text: #f8f9fa (--text)
- Muted: #6c757d (--muted)

TYPOGRAPHY:
- Headings: Bricolage Grotesque 700
- Body: Space Grotesk 400
- Data/metrics: JetBrains Mono 400–500
- Labels: Space Grotesk 600 uppercase, 0.15em letter-spacing

RULES:
- Dark theme only — never invert
- No 1px borders for major layout regions; use surface shifts instead
- Glassmorphism only for floating elements (modals, tooltips, HUD panels)
- Status colors (red/yellow/green) are for data indicators only, never decorative
- CTAs are low-pressure outline buttons, not filled

TASK: Build a [Component Name] that looks like a technical diagnostic module.
Use JetBrains Mono for labels and metrics. Use surface contrast for containment.
The UI should feel like a high-precision tool for a contractor, not a generic SaaS.
```

---

## 08. Quality Checklist

Before shipping any page or component:

- [ ] All colors match token hex values exactly
- [ ] Background is dark — no light theme elements
- [ ] JetBrains Mono used for all data, scores, timestamps, status
- [ ] Labels use uppercase Space Grotesk with 0.15em letter-spacing
- [ ] No 1px borders defining layout regions (surface shifts only)
- [ ] Status colors appear only on data indicators
- [ ] CTAs use outline style with low-pressure language
- [ ] "I" voice throughout any visible copy — never "we"
- [ ] Contractor is positioned as hero, LSA as guide

---

**File reference:** `local-search-ally-design-system-v1.md`
**Ready for:** Claude Code handoff
