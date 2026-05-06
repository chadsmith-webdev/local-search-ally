/\* \============================================================

   LOCAL SEARCH ALLY — DESIGN TOKENS

   tokens.css

   ARCHITECTURE RULES:

   1\. This file contains ONLY custom properties (variables).

   2\. No selectors other than :root belong here.

   3\. components.css consumes these tokens — never raw hex values.

   4\. Adding a new token here is the ONLY approved way to introduce

      a new color, size, or spacing value to the system.

   5\. If you find yourself writing a hex value in components.css,

      stop and add a token here first.

   \============================================================ \*/

@import "tailwindcss";

:root {

  /\* ──────────────────────────────────────────────────────────

     FONTS

     Two families max. Display \= headings/hero. UI \= everything

     else. Mono \= code only.

  ────────────────────────────────────────────────────────── \*/

  \--font-display : "Bricolage Grotesque", serif;

  \--font-ui      : "Space Grotesk", sans-serif;

  \--font-mono    : "JetBrains Mono", monospace;

  /\* ──────────────────────────────────────────────────────────

     TYPE SCALE — Major Third (×1.25)

     Base: 1rem (16px). Each step \= previous × 1.25.

     Use these tokens for ALL font-size declarations.

     Never write a raw rem/px font-size in components.css.

     Step  |  Token         |  Value   |  px equiv

     \-------+----------------+----------+-----------

      \-2   |  \--text-xs     |  0.64rem |  \~10px

      \-1   |  \--text-sm     |  0.8rem  |  \~13px

       0   |  \--text-base   |  1rem    |   16px

      \+1   |  \--text-md     |  1.25rem |   20px

      \+2   |  \--text-lg     |  1.563rem|   25px

      \+3   |  \--text-xl     |  1.953rem|   31px

      \+4   |  \--text-2xl    |  2.441rem|   39px

      \+5   |  \--text-3xl    |  3.052rem|   49px

  ────────────────────────────────────────────────────────── \*/

  \--text-xs   : 0.64rem;

  \--text-sm   : 0.8rem;

  \--text-base : 1rem;

  \--text-md   : 1.25rem;

  \--text-lg   : 1.563rem;

  \--text-xl   : 1.953rem;

  \--text-2xl  : 2.441rem;

  \--text-3xl  : 3.052rem;

  /\* Fluid display sizes — used for hero/section headings only.

     clamp(min, preferred, max). Do not use for body text.     \*/

  \--text-hero    : clamp(2.441rem, 6vw, 3.815rem);

  \--text-heading : clamp(1.953rem, 4vw, 2.441rem);

  \--text-subhead : clamp(1.25rem,  3vw, 1.563rem);

  /\* Line heights \*/

  \--leading-tight  : 1.2;

  \--leading-snug   : 1.35;

  \--leading-normal : 1.6;

  \--leading-loose  : 1.8;

  /\* Letter spacing \*/

  \--tracking-tight  : \-0.02em;

  \--tracking-normal : \-0.01em;

  \--tracking-wide   : 0.05em;

  \--tracking-widest : 0.15em;

  /\* Font weights \*/

  \--weight-normal : 400;

  \--weight-medium : 500;

  \--weight-bold   : 600;

  \--weight-black  : 700;

  /\* ──────────────────────────────────────────────────────────

     COLOR — BRAND PALETTE

     These are raw color values. Use semantic aliases below

     in components — never reference these directly in

     components.css unless building a new semantic alias.

  ────────────────────────────────────────────────────────── \*/

  /\* Carolina blue ramp \*/

  \--carolina-50  : rgba(123, 175, 212, 0.08);  /\* tint — hover bg, dim fills \*/

  \--carolina-100 : rgba(123, 175, 212, 0.15);  /\* subtle bg                  \*/

  \--carolina-200 : rgba(123, 175, 212, 0.4);   /\* border emphasis            \*/

  \--carolina-400 : \#7bafd4;                    /\* brand primary              \*/

  \--carolina-600 : \#4d8cb9;                    /\* dark variant               \*/

  \--carolina-800 : \#2e6a96;                    /\* deepest — use sparingly    \*/

  /\* Slate/steel ramp — structural, backgrounds, borders \*/

  \--slate-900 : \#0a0a0a;   /\* page background                   \*/

  \--slate-800 : \#141414;   /\* surface (cards, panels)           \*/

  \--slate-700 : \#1a222e;   /\* brand dark / glass base           \*/

  \--slate-600 : \#1e1e1e;   /\* surface-2 (nested surfaces)       \*/

  \--slate-500 : \#3a5570;   /\* steel — borders, dividers         \*/

  \--slate-400 : \#4a5568;   /\* muted borders                     \*/

  /\* Text ramp \*/

  \--ink-100 : \#f8f9fa;   /\* primary text — on dark bg          \*/

  \--ink-400 : \#a0aab4;   /\* secondary text — labels, captions  \*/

  \--ink-600 : \#7a838d;   /\* tertiary — metadata, timestamps    \*/

  /\* Status colors — foreground on dark surface ONLY.

     Never use as background with dark text.               \*/

  \--status-red    : \#ff4d4d;

  \--status-yellow : \#ffcc00;

  \--status-green  : \#00ff88;

  /\* Border values \*/

  \--border-subtle : rgba(255, 255, 255, 0.06);

  \--border-base   : rgba(255, 255, 255, 0.12);

  \--border-strong : rgba(255, 255, 255, 0.2);

  \--border-brand  : var(--carolina-400);

  /\* ──────────────────────────────────────────────────────────

     COLOR — SEMANTIC ALIASES

     Reference THESE in components.css, not the raw palette.

     This is the layer that makes the system refactorable —

     swap a brand color here and every component updates.

  ────────────────────────────────────────────────────────── \*/

  /\* Backgrounds \*/

  \--color-bg         : var(--slate-900);   /\* page root             \*/

  \--color-surface    : var(--slate-800);   /\* cards, panels         \*/

  \--color-surface-2  : var(--slate-600);   /\* nested surfaces       \*/

  \--color-overlay    : var(--slate-700);   /\* modals, dropdowns     \*/

  /\* Text \*/

  \--color-text         : var(--ink-100);   /\* primary — always use this for body  \*/

  \--color-text-muted   : var(--ink-400);   /\* secondary labels — never body copy  \*/

  \--color-text-subtle  : var(--ink-600);   /\* metadata only — fails 4.5:1, use sparingly \*/

  \--color-text-brand   : var(--carolina-400);

  \--color-text-brand-dark : var(--carolina-600);

  /\* Interactive / brand \*/

  \--color-brand        : var(--carolina-400);

  \--color-brand-dark   : var(--carolina-600);

  \--color-brand-dim    : var(--carolina-50);

  \--color-brand-border : var(--carolina-200);

  /\* Status — TEXT color on dark surface \*/

  \--color-status-success : var(--status-green);

  \--color-status-warning : var(--status-yellow);

  \--color-status-error   : var(--status-red);

  /\* Borders \*/

  \--color-border         : var(--border-subtle);

  \--color-border-strong  : var(--border-base);

  \--color-border-brand   : var(--border-brand);

  /\* Gradients \*/

  \--gradient-cta   : linear-gradient(135deg, var(--carolina-400) 0%, var(--slate-500) 100%);

  \--gradient-cyber : linear-gradient(90deg, transparent, var(--carolina-400), transparent);

  \--gradient-glow  : radial-gradient(ellipse at top, rgba(123, 175, 212, 0.15) 0%, transparent 60%);

  /\* ──────────────────────────────────────────────────────────

     SPACING SCALE

     Base unit: 0.25rem (4px). All spacing is a multiple.

     Use these tokens for padding, margin, and gap.

     Never write raw px spacing in components.css.

     Token      |  Value   |  px

     \-----------+----------+------

     \--space-1  |  0.25rem |   4px

     \--space-2  |  0.5rem  |   8px

     \--space-3  |  0.75rem |  12px

     \--space-4  |  1rem    |  16px

     \--space-5  |  1.25rem |  20px

     \--space-6  |  1.5rem  |  24px

     \--space-8  |  2rem    |  32px

     \--space-10 |  2.5rem  |  40px

     \--space-12 |  3rem    |  48px

     \--space-16 |  4rem    |  64px

  ────────────────────────────────────────────────────────── \*/

  \--space-1  : 0.25rem;

  \--space-2  : 0.5rem;

  \--space-3  : 0.75rem;

  \--space-4  : 1rem;

  \--space-5  : 1.25rem;

  \--space-6  : 1.5rem;

  \--space-8  : 2rem;

  \--space-10 : 2.5rem;

  \--space-12 : 3rem;

  \--space-16 : 4rem;

  /\* Layout-level spacing — fluid via clamp() \*/

  \--space-page-gutter  : clamp(1.5rem, 6vw, 5rem);

  \--space-section      : clamp(4rem, 8vw, 10rem);

  \--space-section-sm   : clamp(2rem, 4vw, 5rem);

  /\* ──────────────────────────────────────────────────────────

     BORDER RADIUS

     Use these names — never raw px values in components.css.

  ────────────────────────────────────────────────────────── \*/

  \--radius-xs   : 4px;

  \--radius-sm   : 6px;

  \--radius-md   : 8px;

  \--radius-lg   : 12px;

  \--radius-xl   : 16px;

  \--radius-pill : 100px;

  \--radius-full : 50%;

  /\* ──────────────────────────────────────────────────────────

     ELEVATION (box-shadow)

     Conveys depth for floating elements — not decoration.

     sm \= tooltips, md \= dropdowns/popovers, lg \= modals.

  ────────────────────────────────────────────────────────── \*/

  \--shadow-sm  : 0 2px 8px rgba(0, 0, 0, 0.4);

  \--shadow-md  : 0 4px 24px rgba(0, 0, 0, 0.5);

  \--shadow-lg  : 0 8px 48px rgba(0, 0, 0, 0.6);

  \--shadow-glow: 0 0 32px rgba(123, 175, 212, 0.3);

  \--shadow-glow-lg: 0 0 52px rgba(123, 175, 212, 0.5);

  /\* ──────────────────────────────────────────────────────────

     MOTION

     All animation values come from here.

     Components never write raw ms or cubic-bezier values.

  ────────────────────────────────────────────────────────── \*/

  \--duration-fast    : 0.15s;

  \--duration-base    : 0.2s;

  \--duration-slow    : 0.3s;

  \--ease-out         : ease-out;

  \--ease-in-out      : ease-in-out;

  \--ease-spring      : cubic-bezier(0.34, 1.56, 0.64, 1);

  /\* ──────────────────────────────────────────────────────────

     BREAKPOINTS — reference only

     Use these values in @media queries. Do not assign to

     layout properties — CSS custom properties cannot be used

     inside @media() expressions.

     \--bp-sm  : 600px    mobile → small tablet

     \--bp-md  : 768px    tablet

     \--bp-lg  : 900px    large tablet / small desktop

     \--bp-xl  : 1024px   desktop

  ────────────────────────────────────────────────────────── \*/

  /\* ──────────────────────────────────────────────────────────

     Z-INDEX SCALE

     Named layers — never write a raw z-index in components.

  ────────────────────────────────────────────────────────── \*/

  \--z-below    : \-1;

  \--z-base     : 0;

  \--z-raised   : 10;

  \--z-dropdown : 100;

  \--z-sticky   : 200;

  \--z-modal    : 300;

  \--z-toast    : 400;

  \--z-skip     : 9999;

}

/\* ──────────────────────────────────────────────────────────

   TAILWIND v4 THEME BRIDGE

   Registers brand tokens as Tailwind utility classes.

   e.g. text-brand, bg-surface, border-brand-border

   Keep in sync with :root above.

────────────────────────────────────────────────────────── \*/

@theme {

  /\* Colors \*/

  \--color-brand         : \#7bafd4;

  \--color-brand-dark    : \#4d8cb9;

  \--color-bg            : \#0a0a0a;

  \--color-surface       : \#141414;

  \--color-surface-2     : \#1e1e1e;

  \--color-overlay       : \#1a222e;

  \--color-steel         : \#3a5570;

  \--color-text          : \#f8f9fa;

  \--color-text-muted    : \#a0aab4;

  \--color-text-subtle   : \#7a838d;

  \--color-status-success: \#00ff88;

  \--color-status-warning: \#ffcc00;

  \--color-status-error  : \#ff4d4d;

  /\* Fonts \*/

  \--font-family-display : var(--font-display);

  \--font-family-sans    : var(--font-ui);

  \--font-family-mono    : var(--font-mono);

}

