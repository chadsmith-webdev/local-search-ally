# Local Search Ally — Design System

UI and component rules for interactive tools, dashboards, and product interfaces.
Read BRAND.md first for colors, fonts, and voice. This file extends the brand
into product design territory.

**When to use this file:**
- Building interactive tools (SEO Grader, audit dashboards, calculators)
- Creating data-heavy UI components (score cards, metric displays, tables)
- Designing any artifact that feels more like an "app" than a "page"

**When NOT to use this file:**
- Blog posts, proposals, social media, email templates → BRAND.md only
- Static marketing pages → BRAND.md only

---

## Creative Direction: Mission Control

The design language for LSA tools is inspired by aerospace interfaces and data
terminals. The goal: make the user feel like an operator of a sophisticated
system, not a visitor to a generic SaaS dashboard.

Key principles:
- Clarity meets technical sophistication
- Layered depth over flat layouts
- High-contrast typography scales
- Intentional asymmetry over rigid grids

---

## Surface Architecture

### The "No-Line" Rule

Do NOT use 1px solid borders to define sections or layout regions. Borders make
an interface feel dated. Instead, define boundaries through:
- **Background color shifts:** `--surface` sections sitting on `--bg`
- **Tonal transitions:** Switching from `--surface` to `--surface2`

### Surface Hierarchy (layered glass sheets)

Think of the UI as stacked sheets of frosted glass:

| Layer | Token | Hex | Purpose |
|---|---|---|---|
| Base | `--bg` | #0a0a0a | Foundation layer |
| Content blocks | `--surface` | #141414 | Primary containment |
| Secondary | `--surface2` | #1e1e1e | Subtle contrast |
| Interactive | `--slate` | #2E3A4D | Elements demanding focus |
| Recessed wells | `--bg` on `--surface` | — | Data tables, code blocks |

**Nesting:** An inner module (e.g., a data table) should sit in a `--bg` "well"
inside a larger `--surface` section to create recessed technical depth.

### Glassmorphism (floating elements only)

Modals, dropdowns, and tooltips use glass effects:
- **Fill:** `--slate` at 40–60% opacity
- **Effect:** `backdrop-filter: blur(12px)`
- **Gradients:** Primary CTAs use a subtle linear gradient from `--carolina`
  (#7bafd4) to `--steel` (#4A6B8A) at 135° for depth that flat colors lack

---

## Typography in Tools

Tools use the full three-font stack:

| Context | Font | Weight | Example |
|---|---|---|---|
| Tool headlines | Fraunces / Georgia | 700 | "Your SEO Visibility Score" |
| Body / descriptions | Urbanist / Helvetica Neue | 400 | Explanatory paragraphs |
| Scores, metrics, status | JetBrains Mono | 400–500 | "78/100", "STATUS: ACTIVE" |
| Labels / eyebrows | Urbanist uppercase | 600 | "OVERALL SCORE" |

**Hierarchy rule:** Pair a large Fraunces headline with small JetBrains Mono
metadata to create data-rich density. Example: big "Visibility Score" heading
with a small `JetBrains Mono` "CALCULATED: 2025-03-31" beneath it.

---

## Elevation & Depth

### Tonal Layering (not shadows)

Depth comes from luminance shifts between surface tokens, not drop shadows.
Place a `--bg` card on a `--surface` section for soft natural lift.

### Ambient Shadows (floating glass elements only)

For glassmorphic components:
- Blur: `32px`
- Opacity: `6%`
- Color: tinted blue-grey (not pure black) — e.g., `rgba(46, 58, 77, 0.06)`

### Ghost Borders (accessibility fallback)

If a border is required for accessibility:
- Use `--border` (rgba(255,255,255,0.08)) at default
- Use `--border-strong` (rgba(255,255,255,0.14)) for hover/focus
- Never use 100% opaque borders

---

## Component Patterns

### Buttons
- **Primary:** Gradient fill (`--carolina` → `--steel`, 135°). Border-radius:
  0.375rem. Text: JetBrains Mono, label-size, uppercase.
- **Secondary (HUD style):** Ghost border with 10% `--carolina` tint background.
  On hover: increase tint to 20%, add `0 0 15px` outer glow in `--carolina`.
- **Tertiary:** Text-only in JetBrains Mono with underscore prefix
  (e.g., `_VIEW_DETAILS`).

### Input Fields
- Fill: `--slate` (#2E3A4D), no border
- On focus: 1px ghost border of `--carolina` at 40% opacity
- Active indicator: 2px vertical accent bar on the left in `--carolina`

### Score Cards / Metric Displays
- Score number: JetBrains Mono, large (2–3rem), `--carolina` or `--text`
- Label: Urbanist uppercase, small, `--muted`
- Background: `--surface` with `--bg` recessed well for the score area
- Category scores: smaller JetBrains Mono, `--steel` for secondary metrics

### Data Tables
- Sit in a `--bg` recessed well inside a `--surface` container
- No row dividers — use `spacing.4` (1rem) vertical padding between rows
- Header row: JetBrains Mono, uppercase, `--muted`, weight 500
- Data cells: JetBrains Mono, `--text`
- Hover row: background shift to `--surface2`

### Tooltips & Overlays
- Always glassmorphic: `--slate` at 50% opacity + `backdrop-filter: blur(12px)`
- Text: JetBrains Mono, small, `--text`
- Feel: "system diagnostic" readout

---

## Layout Principles

### Asymmetric Grids
Prefer intentional asymmetry over equal columns:
- Wide content area (8 cols) + narrow technical sidebar (3 cols)
- Hero metric (large) flanked by secondary metrics (small)

### Negative Space
High-end design breathes. Don't crowd. Generous padding signals premium.

### Do / Don't

**Do:**
- Embrace negative space — expensive design isn't crowded
- Use JetBrains Mono for anything with numbers or status
- Use asymmetric layouts for data-dense screens
- Use tonal layering for depth

**Don't:**
- Use pure black (#000) or pure white (#FFF) — use `--bg` and `--text` tokens
- Use standard 1px borders — use background color shifts
- Use border-radius larger than 0.75rem — engineered, not bubbly
- Use bright saturated red for errors — use a muted red that fits the palette
