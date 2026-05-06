/\* \============================================================

   LOCAL SEARCH ALLY — COMPONENTS

   components.css

   ARCHITECTURE RULES:

   1\. Import tokens.css BEFORE this file. Always.

   2\. Every value here must reference a token from tokens.css.

      No raw hex, px, rem, or ms values — only var(--token).

   3\. Each component block starts with a banner comment that

      defines: what it is, when to use it, what NOT to override.

   4\. States are always defined in this order where applicable:

      default → hover → focus-visible → active → disabled → error

   \============================================================ \*/

/\* ──────────────────────────────────────────────────────────

   BASE RESET & GLOBAL DEFAULTS

────────────────────────────────────────────────────────── \*/

\*,

\*::before,

\*::after {

  box-sizing: border-box;

  margin: 0;

  padding: 0;

}

html {

  /\* Prevent font size inflation on mobile \*/

  \-webkit-text-size-adjust: 100%;

  text-size-adjust: 100%;

}

body {

  background-color  : var(--color-bg);

  color             : var(--color-text);

  font-family       : var(--font-ui);

  font-size         : var(--text-base);

  font-weight       : var(--weight-normal);

  line-height       : var(--leading-normal);

  letter-spacing    : var(--tracking-normal);

  \-webkit-font-smoothing : antialiased;

  \-moz-osx-font-smoothing: grayscale;

}

/\* Form element font inheritance — browsers don't do this by default \*/

input,

select,

textarea,

button {

  font-family : inherit;

  font-size   : inherit;

}

img,

video,

svg {

  display   : block;

  max-width : 100%;

}

/\* ──────────────────────────────────────────────────────────

   ACCESSIBILITY — GLOBAL

   These rules must never be removed or overridden.

────────────────────────────────────────────────────────── \*/

/\* Focus ring — full-opacity brand color, meets 3:1 for UI components.

   Applied globally via :focus-visible so keyboard users always see it.

   Do NOT reduce opacity or remove this rule.                          \*/

:focus-visible {

  outline        : 2px solid var(--color-brand);

  outline-offset : 3px;

  border-radius  : var(--radius-xs);

}

/\* Skip-to-content — keyboard navigation shortcut.

   Sits off-screen until focused. Required on every page.             \*/

.skip-link {

  position      : absolute;

  top           : \-100%;

  left          : var(--space-4);

  z-index       : var(--z-skip);

  padding       : var(--space-3) var(--space-5);

  background    : var(--color-brand);

  color         : var(--color-bg);

  font-family   : var(--font-ui);

  font-size     : var(--text-sm);

  font-weight   : var(--weight-bold);

  border-radius : var(--radius-sm);

  text-decoration: none;

  transition    : top var(--duration-fast) var(--ease-out);

}

.skip-link:focus {

  top: var(--space-4);

}

/\* Reduced motion — kills all animations and transitions.

   This rule must exist and must remain comprehensive.                 \*/

@media (prefers-reduced-motion: reduce) {

  \*,

  \*::before,

  \*::after {

    animation-duration       : 0.01ms \!important;

    animation-iteration-count: 1      \!important;

    transition-duration      : 0.01ms \!important;

    scroll-behavior          : auto   \!important;

  }

}

/\* Visually hidden — for screen reader labels that have no visual counterpart \*/

.sr-only {

  position   : absolute;

  width      : 1px;

  height     : 1px;

  padding    : 0;

  margin     : \-1px;

  overflow   : hidden;

  clip       : rect(0, 0, 0, 0);

  white-space: nowrap;

  border     : 0;

}

/\* ──────────────────────────────────────────────────────────

   SCROLLBAR

────────────────────────────────────────────────────────── \*/

::-webkit-scrollbar       { width: 6px; }

::-webkit-scrollbar-track { background: var(--color-bg); }

::-webkit-scrollbar-thumb {

  background    : var(--color-surface-2);

  border-radius : var(--radius-xs);

}

::selection {

  background: var(--carolina-100, rgba(123, 175, 212, 0.15));

}

/\* ──────────────────────────────────────────────────────────

   LAYOUT UTILITIES

   Use these class names in JSX/HTML. Do not replicate these

   rules inline — compose them.

────────────────────────────────────────────────────────── \*/

/\* Full-width vertical rhythm wrapper for page sections \*/

.section {

  width          : 100%;

  padding-top    : var(--space-section);

  padding-bottom : var(--space-section);

}

.section--sm {

  padding-top    : var(--space-section-sm);

  padding-bottom : var(--space-section-sm);

}

/\* Standard content container — max-width \+ fluid horizontal gutter \*/

.container {

  max-width    : 1200px;

  width        : 100%;

  margin-left  : auto;

  margin-right : auto;

  padding-left : var(--space-page-gutter);

  padding-right: var(--space-page-gutter);

}

/\* Narrow — text-heavy sections: blog posts, FAQs, legal \*/

.container--narrow {

  max-width    : 800px;

  width        : 100%;

  margin-left  : auto;

  margin-right : auto;

  padding-left : var(--space-page-gutter);

  padding-right: var(--space-page-gutter);

}

/\* Wide — data-heavy sections: portfolio grids, comparison tables \*/

.container--wide {

  max-width    : 1440px;

  width        : 100%;

  margin-left  : auto;

  margin-right : auto;

  padding-left : var(--space-page-gutter);

  padding-right: var(--space-page-gutter);

}

/\* ──────────────────────────────────────────────────────────

   TYPOGRAPHY COMPONENTS

   Heading classes: apply to the correct semantic element.

   Do not use .heading-hero on an \<h3\>.

   Do not use these for non-heading text — use body classes.

────────────────────────────────────────────────────────── \*/

.heading-hero {

  font-family   : var(--font-display);

  font-size     : var(--text-hero);

  font-weight   : var(--weight-black);

  line-height   : var(--leading-tight);

  letter-spacing: var(--tracking-tight);

  color         : var(--color-text);

}

.heading-1 {

  font-family   : var(--font-display);

  font-size     : var(--text-heading);

  font-weight   : var(--weight-black);

  line-height   : var(--leading-tight);

  letter-spacing: var(--tracking-tight);

  color         : var(--color-text);

}

.heading-2 {

  font-family   : var(--font-display);

  font-size     : var(--text-subhead);

  font-weight   : var(--weight-bold);

  line-height   : var(--leading-snug);

  letter-spacing: var(--tracking-tight);

  color         : var(--color-text);

}

.heading-3 {

  font-family   : var(--font-ui);

  font-size     : var(--text-md);

  font-weight   : var(--weight-bold);

  line-height   : var(--leading-snug);

  color         : var(--color-text);

}

/\* Body text — default is var(--text-base). Override size only. \*/

.body-lg {

  font-size  : var(--text-md);

  line-height: var(--leading-loose);

  color      : var(--color-text);

}

.body-base {

  font-size  : var(--text-base);

  line-height: var(--leading-normal);

  color      : var(--color-text);

}

.body-sm {

  font-size  : var(--text-sm);

  line-height: var(--leading-normal);

  color      : var(--color-text-muted);

}

/\* Label — monospace eyebrow text above section headings.

   Use ONLY for section labels. Not for body copy.        \*/

.label {

  font-family   : var(--font-mono);

  font-size     : var(--text-xs);

  font-weight   : var(--weight-normal);

  color         : var(--color-brand);

  text-transform: uppercase;

  letter-spacing: var(--tracking-widest);

  opacity       : 0.7;

}

/\* ──────────────────────────────────────────────────────────

   BUTTONS

   Use .btn as a base. Add a modifier: \--primary, \--secondary,

   \--ghost, \--danger. Never override padding or font-size

   on individual instances — adjust the token instead.

   Composition pattern in JSX:

     \<button class="btn btn--primary"\>Get Started\</button\>

     \<a href="/contact" class="btn btn--secondary"\>Learn More\</a\>

────────────────────────────────────────────────────────── \*/

/\* Base — shared structure for all button variants \*/

.btn {

  display        : inline-flex;

  align-items    : center;

  justify-content: center;

  gap            : var(--space-2);

  padding        : var(--space-3) var(--space-6);  /\* 12px 24px \*/

  font-family    : var(--font-ui);

  font-size      : var(--text-sm);                 /\* 0.8rem \~13px \*/

  font-weight    : var(--weight-bold);

  letter-spacing : var(--tracking-wide);

  line-height    : 1;

  text-decoration: none;

  white-space    : nowrap;

  cursor         : pointer;

  border         : 1px solid transparent;

  border-radius  : var(--radius-sm);

  transition     :

    filter          var(--duration-base) var(--ease-out),

    transform       var(--duration-fast) var(--ease-out),

    box-shadow      var(--duration-base) var(--ease-out),

    background      var(--duration-base) var(--ease-out),

    border-color    var(--duration-base) var(--ease-out),

    color           var(--duration-base) var(--ease-out),

    opacity         var(--duration-base) var(--ease-out);

}

/\* Primary — gradient fill. The single most important action on a page.

   Use once per viewport. Never on secondary actions.                   \*/

.btn--primary {

  background : var(--gradient-cta);

  color      : var(--color-bg);

  border-color: transparent;

  box-shadow : var(--shadow-glow);

}

.btn--primary:hover {

  filter    : brightness(1.1);

  transform : translateY(-1px);

  box-shadow: var(--shadow-glow-lg);

}

.btn--primary:focus-visible {

  outline       : 2px solid var(--color-brand);

  outline-offset: 3px;

  filter        : brightness(1.1);

}

.btn--primary:active {

  transform : translateY(0) scale(0.98);

  filter    : brightness(0.95);

  box-shadow: var(--shadow-glow);

}

.btn--primary:disabled,

.btn--primary\[aria-disabled="true"\] {

  opacity       : 0.38;

  cursor        : not-allowed;

  pointer-events: none;

  box-shadow    : none;

  filter        : none;

  transform     : none;

}

/\* Secondary — outline. Supporting actions alongside a primary button.

   Can appear multiple times per viewport.                              \*/

.btn--secondary {

  background  : transparent;

  color       : var(--color-brand);

  border-color: var(--color-brand-border);

}

.btn--secondary:hover {

  background  : var(--color-brand-dim);

  border-color: var(--color-brand);

  color       : var(--color-text);

}

.btn--secondary:focus-visible {

  outline       : 2px solid var(--color-brand);

  outline-offset: 3px;

  background    : var(--color-brand-dim);

}

.btn--secondary:active {

  transform  : scale(0.98);

  background : var(--carolina-100, rgba(123, 175, 212, 0.15));

}

.btn--secondary:disabled,

.btn--secondary\[aria-disabled="true"\] {

  opacity       : 0.38;

  cursor        : not-allowed;

  pointer-events: none;

}

/\* Ghost — no border, no background. Inline actions, icon buttons.

   Never use as a primary CTA.                                      \*/

.btn--ghost {

  background  : transparent;

  color       : var(--color-text-muted);

  border-color: transparent;

}

.btn--ghost:hover {

  background: var(--color-brand-dim);

  color     : var(--color-text);

}

.btn--ghost:focus-visible {

  outline       : 2px solid var(--color-brand);

  outline-offset: 3px;

}

.btn--ghost:active  { transform: scale(0.97); }

.btn--ghost:disabled,

.btn--ghost\[aria-disabled="true"\] {

  opacity       : 0.38;

  cursor        : not-allowed;

  pointer-events: none;

}

/\* Danger — destructive actions only (delete, remove, cancel subscription).

   Requires explicit user confirmation before triggering.                   \*/

.btn--danger {

  background  : transparent;

  color       : var(--color-status-error);

  border-color: rgba(255, 77, 77, 0.3);

}

.btn--danger:hover {

  background  : rgba(255, 77, 77, 0.1);

  border-color: var(--color-status-error);

}

.btn--danger:focus-visible {

  outline       : 2px solid var(--color-status-error);

  outline-offset: 3px;

}

.btn--danger:active { transform: scale(0.98); }

.btn--danger:disabled,

.btn--danger\[aria-disabled="true"\] {

  opacity       : 0.38;

  cursor        : not-allowed;

  pointer-events: none;

}

/\* Size modifiers — use when context requires a smaller/larger button.

   Default (.btn alone) is medium.                                     \*/

.btn--sm {

  padding    : var(--space-2) var(--space-4);

  font-size  : var(--text-xs);

  border-radius: var(--radius-xs);

}

.btn--lg {

  padding  : var(--space-4) var(--space-8);  /\* 16px 32px \*/

  font-size: var(--text-base);

}

/\* ──────────────────────────────────────────────────────────

   FORM INPUTS

   All inputs share the .input base. Use modifiers for

   specific types. Wrap label \+ input in .field.

   Composition:

     \<div class="field"\>

       \<label class="field\_\_label" for="email"\>Email\</label\>

       \<input class="input" id="email" type="email" /\>

       \<p class="field\_\_hint"\>We'll never share your email.\</p\>

     \</div\>

────────────────────────────────────────────────────────── \*/

/\* Field wrapper — manages label/input/hint vertical rhythm \*/

.field {

  display       : flex;

  flex-direction: column;

  gap           : var(--space-2);

}

.field\_\_label {

  font-size  : var(--text-sm);

  font-weight: var(--weight-bold);

  color      : var(--color-text);

  cursor     : pointer;

}

.field\_\_hint {

  font-size: var(--text-xs);

  color    : var(--color-text-muted);

}

.field\_\_error {

  font-size: var(--text-xs);

  color    : var(--color-status-error);

}

/\* Base input — used for text, email, tel, url, number, search \*/

.input {

  width        : 100%;

  padding      : var(--space-3) var(--space-4);   /\* 12px 16px \*/

  background   : var(--color-surface);

  color        : var(--color-text);

  font-family  : var(--font-ui);

  font-size    : var(--text-base);

  border       : 1px solid var(--color-border-strong);

  border-radius: var(--radius-md);

  outline      : none;

  transition   :

    border-color var(--duration-base) var(--ease-out),

    box-shadow   var(--duration-base) var(--ease-out);

  /\* Prevent zoom on iOS — minimum 16px renders without zoom \*/

}

.input::placeholder {

  color  : var(--color-text-subtle);

  opacity: 1;

}

.input:hover {

  border-color: var(--color-brand-border);

}

.input:focus {

  border-color: var(--color-brand);

  box-shadow  : 0 0 0 3px var(--color-brand-dim);

  outline     : none;

}

.input:disabled {

  opacity      : 0.38;

  cursor       : not-allowed;

  border-color : var(--color-border);

}

/\* Error state — apply to .input when .field\_\_error is shown \*/

.input--error {

  border-color: var(--color-status-error);

}

.input--error:focus {

  border-color: var(--color-status-error);

  box-shadow  : 0 0 0 3px rgba(255, 77, 77, 0.15);

}

/\* Textarea — same rules as .input, height is explicit \*/

.textarea {

  composes  : input; /\* if using CSS Modules — otherwise copy .input rules \*/

  min-height: 120px;

  resize    : vertical;

}

/\* If not using CSS Modules, use .input on a \<textarea\> directly.

   The only textarea-specific rule is min-height and resize.     \*/

textarea.input {

  min-height: 120px;

  resize    : vertical;

}

/\* Select — same visual as .input but with dropdown arrow \*/

select.input {

  appearance           : none;

  \-webkit-appearance   : none;

  background-image     : url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237a838d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

  background-repeat    : no-repeat;

  background-position  : right var(--space-4) center;

  padding-right        : var(--space-10);

}

/\* ──────────────────────────────────────────────────────────

   STATUS BADGES

   Inline indicators for state, category, or signal.

   Use ONLY for status — not for decoration.

   Usage rules:

   \- Success (green): active, live, complete, verified

   \- Warning (yellow): pending, expiring, needs attention

   \- Error (red): failed, expired, blocked, error

   \- Neutral: draft, inactive, unknown

   \- Brand: featured, new, highlighted

   Never use a status badge as a navigation element.

   Never use color alone — always include the text label.

────────────────────────────────────────────────────────── \*/

.badge {

  display      : inline-flex;

  align-items  : center;

  gap          : var(--space-1);

  padding      : var(--space-1) var(--space-3);

  font-family  : var(--font-mono);

  font-size    : var(--text-xs);

  font-weight  : var(--weight-bold);

  letter-spacing: var(--tracking-widest);

  text-transform: uppercase;

  border-radius: var(--radius-pill);

  border       : 1px solid transparent;

  white-space  : nowrap;

}

/\* Success \*/

.badge--success {

  background  : rgba(0, 255, 136, 0.1);

  color       : var(--color-status-success);

  border-color: rgba(0, 255, 136, 0.2);

}

/\* Warning \*/

.badge--warning {

  background  : rgba(255, 204, 0, 0.1);

  color       : var(--color-status-warning);

  border-color: rgba(255, 204, 0, 0.2);

}

/\* Error \*/

.badge--error {

  background  : rgba(255, 77, 77, 0.1);

  color       : var(--color-status-error);

  border-color: rgba(255, 77, 77, 0.2);

}

/\* Neutral — draft, inactive, unknown states \*/

.badge--neutral {

  background  : var(--color-surface-2);

  color       : var(--color-text-muted);

  border-color: var(--color-border-strong);

}

/\* Brand — new features, highlights \*/

.badge--brand {

  background  : var(--color-brand-dim);

  color       : var(--color-brand);

  border-color: var(--color-brand-border);

}

/\* Dot indicator — prepend to badge text for visual emphasis.

   Always paired with text — never standalone.               \*/

.badge\_\_dot {

  width        : 6px;

  height       : 6px;

  border-radius: var(--radius-full);

  background   : currentColor;

  flex-shrink  : 0;

}

/\* ──────────────────────────────────────────────────────────

   CARDS & SURFACES

   Cards are bounded content containers.

   .card is the base. Modifiers change surface depth.

   Use .card for: service features, portfolio items, FAQ items,

   stat blocks, testimonials.

   Do NOT use .card for: full-width page sections (use .section),

   navigation (use nav), forms (use .field wrappers).

────────────────────────────────────────────────────────── \*/

/\* Base card — sits on \--color-surface \*/

.card {

  background   : var(--color-surface);

  border       : 1px solid var(--color-border);

  border-radius: var(--radius-lg);

  padding      : var(--space-6);

  transition   : border-color var(--duration-base) var(--ease-out);

}

/\* Elevated — for interactive cards (hover lifts) \*/

.card--elevated {

  background   : var(--color-surface);

  border       : 1px solid var(--color-border);

  border-radius: var(--radius-lg);

  padding      : var(--space-6);

  box-shadow   : var(--shadow-sm);

  transition   :

    border-color var(--duration-base) var(--ease-out),

    box-shadow   var(--duration-base) var(--ease-out),

    transform    var(--duration-fast) var(--ease-out);

}

.card--elevated:hover {

  border-color: var(--color-brand-border);

  box-shadow  : var(--shadow-md);

  transform   : translateY(-2px);

}

/\* Glass — for floating overlays: modals, tooltips, dropdowns, sticky panels.

   Do NOT apply to inline content blocks — backdrop-filter creates a stacking

   context that breaks children with position:fixed.                          \*/

.card--glass {

  background    : rgba(26, 34, 46, 0.85);

  backdrop-filter      : blur(12px);

  \-webkit-backdrop-filter: blur(12px);

  border        : 1px solid var(--color-brand-border);

  border-radius : var(--radius-lg);

  padding       : var(--space-6);

  box-shadow    : inset 0 0 15px rgba(123, 175, 212, 0.05), var(--shadow-md);

}

/\* Stat card — numeric metric display blocks \*/

.card--stat {

  background   : var(--color-surface);

  border       : 1px solid var(--color-border);

  border-radius: var(--radius-lg);

  padding      : var(--space-6);

  position     : relative;

  overflow     : hidden;

}

.card--stat::before {

  content     : "";

  position    : absolute;

  top         : 0;

  left        : 0;

  right       : 0;

  height      : 2px;

  background  : var(--gradient-cyber);

  opacity     : 0.6;

}

/\* Card sub-elements \*/

.card\_\_label {

  font-family   : var(--font-mono);

  font-size     : var(--text-xs);

  color         : var(--color-brand);

  text-transform: uppercase;

  letter-spacing: var(--tracking-widest);

  opacity       : 0.7;

  margin-bottom : var(--space-2);

}

.card\_\_title {

  font-family: var(--font-display);

  font-size  : var(--text-md);

  font-weight: var(--weight-bold);

  color      : var(--color-text);

  margin-bottom: var(--space-2);

}

.card\_\_body {

  font-size  : var(--text-sm);

  line-height: var(--leading-loose);

  color      : var(--color-text-muted);

}

.card\_\_stat-value {

  font-family   : var(--font-display);

  font-size     : var(--text-2xl);

  font-weight   : var(--weight-black);

  color         : var(--color-text);

  line-height   : var(--leading-tight);

  letter-spacing: var(--tracking-tight);

}

.card\_\_stat-label {

  font-size  : var(--text-xs);

  color      : var(--color-text-muted);

  margin-top : var(--space-1);

}

/\* ──────────────────────────────────────────────────────────

   NAVIGATION

   .nav is the top-level wrapper. Handles layout only.

   .nav\_\_link handles state. .nav\_\_cta is the right-side CTA.

   Do NOT override .nav\_\_link color directly — use the hover

   and active states defined here.

────────────────────────────────────────────────────────── \*/

.nav {

  position  : sticky;

  top       : 0;

  z-index   : var(--z-sticky);

  width     : 100%;

  background: rgba(10, 10, 10, 0.8);

  backdrop-filter      : blur(12px);

  \-webkit-backdrop-filter: blur(12px);

  border-bottom: 1px solid var(--color-border);

}

.nav\_\_inner {

  max-width  : 1200px;

  margin     : 0 auto;

  padding    : 0 var(--space-page-gutter);

  height     : 64px;

  display    : flex;

  align-items: center;

  justify-content: space-between;

  gap        : var(--space-8);

}

.nav\_\_logo {

  font-family   : var(--font-display);

  font-size     : var(--text-md);

  font-weight   : var(--weight-black);

  color         : var(--color-text);

  text-decoration: none;

  letter-spacing: var(--tracking-tight);

  flex-shrink   : 0;

}

.nav\_\_links {

  display    : flex;

  align-items: center;

  gap        : var(--space-1);

  list-style : none;

}

.nav\_\_link {

  font-size     : var(--text-sm);

  font-weight   : var(--weight-medium);

  color         : var(--color-text-muted);

  text-decoration: none;

  padding       : var(--space-2) var(--space-3);

  border-radius : var(--radius-sm);

  transition    : color var(--duration-fast) var(--ease-out),

                  background var(--duration-fast) var(--ease-out);

}

.nav\_\_link:hover {

  color     : var(--color-text);

  background: var(--color-brand-dim);

}

.nav\_\_link:focus-visible {

  outline       : 2px solid var(--color-brand);

  outline-offset: 2px;

  color         : var(--color-text);

}

/\* Active — current page indicator \*/

.nav\_\_link--active {

  color: var(--color-text);

}

.nav\_\_link--active::after {

  content     : "";

  display     : block;

  height      : 2px;

  background  : var(--color-brand);

  border-radius: var(--radius-pill);

  margin-top  : 2px;

}

/\* Right-side CTA — single action, uses .btn .btn--primary \*/

.nav\_\_cta {

  flex-shrink: 0;

}

/\* Mobile menu toggle — visible below 768px \*/

.nav\_\_toggle {

  display : none;

  padding : var(--space-2);

  background: transparent;

  border  : none;

  color   : var(--color-text);

  cursor  : pointer;

  border-radius: var(--radius-sm);

}

.nav\_\_toggle:focus-visible {

  outline       : 2px solid var(--color-brand);

  outline-offset: 2px;

}

@media (max-width: 768px) {

  .nav\_\_links { display: none; }

  .nav\_\_cta   { display: none; }

  .nav\_\_toggle{ display: flex; }

  /\* When mobile menu is open — toggled via JS by adding .is-open to .nav \*/

  .nav.is-open .nav\_\_links {

    display       : flex;

    flex-direction: column;

    align-items   : flex-start;

    position      : absolute;

    top           : 64px;

    left          : 0;

    right         : 0;

    background    : var(--color-overlay);

    border-bottom : 1px solid var(--color-border);

    padding       : var(--space-4) var(--space-page-gutter);

    gap           : var(--space-1);

  }

  .nav.is-open .nav\_\_cta {

    display: flex;

    padding: var(--space-4) var(--space-page-gutter);

    background: var(--color-overlay);

    width: 100%;

  }

  .nav.is-open .nav\_\_cta .btn {

    width: 100%;

    justify-content: center;

  }

}

/\* ──────────────────────────────────────────────────────────

   PROSE — rich text content (blog posts, service pages)

   Apply .prose to the wrapper element of any server-rendered

   or CMS-driven HTML content. Do NOT apply to UI components.

────────────────────────────────────────────────────────── \*/

.prose {

  color      : var(--color-text);

  font-family: var(--font-ui);

  font-size  : var(--text-base);

  line-height: var(--leading-loose);

  max-width  : 72ch;

}

.prose h1,

.prose h2,

.prose h3,

.prose h4 {

  font-family  : var(--font-display);

  font-weight  : var(--weight-black);

  line-height  : var(--leading-tight);

  color        : var(--color-text);

  margin-top   : var(--space-8);

  margin-bottom: var(--space-4);

}

.prose h1 { font-size: var(--text-heading); }

.prose h2 { font-size: var(--text-subhead); }

.prose h3 { font-size: var(--text-md); }

.prose h4 { font-size: var(--text-base); }

.prose p          { margin-bottom: var(--space-5); }

.prose ul,

.prose ol         { margin: 0 0 var(--space-5) var(--space-6); }

.prose li         { margin-bottom: var(--space-2); }

.prose a {

  color          : var(--color-brand);

  text-decoration: underline;

  text-underline-offset: 3px;

  transition     : color var(--duration-fast) var(--ease-out);

}

.prose a:hover        { color: var(--color-brand-dark); }

.prose strong         { color: var(--color-text); font-weight: var(--weight-bold); }

.prose blockquote {

  border-left  : 3px solid var(--color-brand);

  padding      : var(--space-3) 0 var(--space-3) var(--space-5);

  margin       : var(--space-6) 0;

  color        : var(--color-text-muted);

  font-style   : italic;

}

.prose code {

  font-family  : var(--font-mono);

  font-size    : 0.875em;

  background   : var(--color-surface);

  color        : var(--color-brand);

  padding      : 0.15em 0.4em;

  border-radius: var(--radius-xs);

}

.prose pre {

  background   : var(--color-surface);

  border       : 1px solid var(--color-border);

  border-radius: var(--radius-md);

  padding      : var(--space-5);

  overflow-x   : auto;

  margin       : var(--space-6) 0;

}

.prose pre code {

  background: none;

  padding   : 0;

  color     : var(--color-text);

  font-size : var(--text-sm);

}

.prose hr {

  border     : none;

  border-top : 1px solid var(--color-border);

  margin     : var(--space-10) 0;

}

/\* ──────────────────────────────────────────────────────────

   HUD / CYBER EFFECTS

   Decorative elements that reinforce the brand aesthetic.

   All optional — pages function fully without them.

   Apply only to sections that intentionally use the theme.

────────────────────────────────────────────────────────── \*/

/\* Tech grid background — hero sections, feature backgrounds \*/

.tech-grid {

  position        : relative;

  background-image:

    radial-gradient(circle, rgba(123, 175, 212, 0.12) 1px, transparent 1px),

    linear-gradient(to right,  rgba(123, 175, 212, 0.04) 1px, transparent 1px),

    linear-gradient(to bottom, rgba(123, 175, 212, 0.04) 1px, transparent 1px);

  background-size :

    32px 32px,

    128px 128px,

    128px 128px;

  background-position: center center;

}

/\* HUD frame — corner bracket decoration on image or card components.

   Requires two child elements with classes .bracket-bl and .bracket-br

   for the bottom corners.                                             \*/

.hud-frame {

  position: relative;

  overflow: hidden;

}

.hud-frame::before,

.hud-frame::after,

.hud-frame .bracket-bl,

.hud-frame .bracket-br {

  content       : "";

  position      : absolute;

  width         : 16px;

  height        : 16px;

  border        : 1px solid var(--color-brand);

  opacity       : 0.4;

  z-index       : var(--z-raised);

  pointer-events: none;

}

.hud-frame::before  { top: 0; left:  0; border-right:  none; border-bottom: none; }

.hud-frame::after   { top: 0; right: 0; border-left:   none; border-bottom: none; }

.hud-frame .bracket-bl { bottom: 0; left:  0; border-right: none; border-top: none; }

.hud-frame .bracket-br { bottom: 0; right: 0; border-left:  none; border-top: none; }

/\* Pulsing node — decorative dot for stat blocks or feature callouts \*/

.pulsing-node {

  width        : 6px;

  height       : 6px;

  background   : var(--color-brand);

  border-radius: var(--radius-full);

  box-shadow   : 0 0 8px var(--color-brand);

  animation    : pulse-node 2s var(--ease-in-out) infinite;

}

@keyframes pulse-node {

  0%, 100% { opacity: 0.3; transform: scale(0.8); }

  50%       { opacity: 1;   transform: scale(1.3); }

}

/\* Scanning line — single instance per section, motion decorative only \*/

.scanning-line {

  position     : absolute;

  left         : 0;

  right        : 0;

  height       : 2px;

  background   : var(--gradient-cyber);

  border-radius: var(--radius-xs);

  opacity      : 0.4;

  pointer-events: none;

  will-change  : transform;

  animation    : scanning 3s linear infinite;

}

@keyframes scanning {

  from { transform: translateY(0); }

  to   { transform: translateY(500px); }

}

/\* Noise texture overlay — apply to .noise parent element.

   Low opacity — preserves readability of content beneath.  \*/

.noise {

  position: relative;

}

.noise::before {

  content          : "";

  position         : absolute;

  inset            : 0;

  z-index          : var(--z-raised);

  pointer-events   : none;

  opacity          : 0.015;

  background-image : url("/images/noise.svg");

  filter           : contrast(120%) brightness(120%);

}

/\* ──────────────────────────────────────────────────────────

   ANIMATIONS — REUSABLE KEYFRAMES

   Use these class names to apply entrance animations.

   All respect prefers-reduced-motion via the global rule above.

────────────────────────────────────────────────────────── \*/

.animate-fade-up {

  animation: fadeUp var(--duration-slow) var(--ease-out) both;

}

.animate-fade-in {

  animation: fadeIn var(--duration-slow) var(--ease-out) both;

}

/\* Stagger children — add data-delay="1" through "5" to stagger items \*/

\[data-delay="1"\] { animation-delay: 0.1s; }

\[data-delay="2"\] { animation-delay: 0.2s; }

\[data-delay="3"\] { animation-delay: 0.3s; }

\[data-delay="4"\] { animation-delay: 0.4s; }

\[data-delay="5"\] { animation-delay: 0.5s; }

@keyframes fadeUp {

  from { opacity: 0; transform: translateY(16px); }

  to   { opacity: 1; transform: translateY(0);    }

}

@keyframes fadeIn {

  from { opacity: 0; }

  to   { opacity: 1; }

}

@keyframes spin {

  to { transform: rotate(360deg); }

}

/\* Loading spinner — use on any element needing a spin state \*/

.spin {

  animation: spin 1s linear infinite;

}

