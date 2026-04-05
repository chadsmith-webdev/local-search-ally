# Rogers AR Service Area Redesign Spec

## Goal

Redesign the Rogers, Arkansas service-area page so it keeps the strong opening and closing sections the user already likes, while replacing the generic middle-page rhythm with a more intentional alternating composition: editorial sections for emotional stakes and proof, structured sections for scannable conversion content.

## Current Page Assessment

The current page is functional, on-brand, and technically sound, but it feels over-systematized through the middle. Too many sections rely on the same dark card, grid, and box treatment, so the page reads as a sequence of similar blocks rather than a designed narrative.

What should stay:

- The overall brand tone and dark visual system
- The final CTA section and its broad structure
- The core content model already written for Rogers
- The existing SEO metadata and schema implementation

What should change:

- The hero should become a full-height opening scene with vertically centered content
- The middle sections should alternate between editorial and structured presentation modes
- Section spacing, hierarchy, and visual density should feel designed section-by-section instead of using one repeated pattern

## Scope

This redesign is limited to the Rogers page experience.

In scope:

- `src/app/service-areas/rogers-ar/page.js`
- `src/app/service-areas/rogers-ar/page.module.css`
- Minor supporting copy adjustments within those sections if needed to improve hierarchy and pacing

Out of scope:

- Other service-area pages
- Global typography tokens, navbar structure, or sitewide spacing rules
- SEO metadata logic, JSON-LD shape, route structure, or URL changes
- Rewriting the page into a different information architecture

## Design Direction

Use a mixed composition system.

That means the page should not look like one continuous stack of matching cards. Instead, it should alternate between two visual languages:

1. Editorial sections
   These sections should feel broader, more atmospheric, and more typographic. They carry narrative weight, emotional framing, and credibility.

2. Structured sections
   These sections should feel clearer, tighter, and more operational. They carry scannable information, process clarity, and conversion support.

This approach preserves clarity while giving the page a more professional cadence.

## Section-by-Section Design

### Hero

The hero becomes a full-height section using `100dvh` with content vertically centered within the visible viewport area.

Intent:

- Feel like a confident opening scene rather than the first content block in a stack
- Create visual separation from the rest of the page immediately
- Reduce crowding by limiting competing secondary elements inside the hero

Structure:

- Eyebrow
- Strong H1
- One supporting paragraph cluster
- Primary and secondary CTA row
- One restrained supporting trust line

Rules:

- No side card inside the hero
- Hero copy width should stay disciplined so the headline reads as a single focal object
- Vertical spacing should prioritize calm over density
- Motion, if present, should remain restrained and should not delay comprehension

### Brief Section

The current brief panel below the hero should become a transition object between the opening scene and the main body.

Intent:

- Act as the bridge from narrative opening into practical page content
- Read as one premium summary module, not a standard card block

Structure:

- Left side: short framing copy and why Rogers matters
- Right side: signal list or concise operating notes

Rules:

- Use one composed container with stronger asymmetry and cleaner spacing
- Avoid a heavy boxed dashboard look
- Keep this section compact enough that it feels transitional, not like another destination section

### Problem Section

This should become an editorial section.

Intent:

- Reintroduce the stakes emotionally
- Make invisibility feel specific to home service trades in Rogers

Presentation:

- Larger typographic treatment
- Fewer visible borders
- More open spacing and stronger paragraph rhythm
- Supporting stat or citation elements can appear, but they should feel embedded rather than tiled

Rules:

- This section should not look like the brief section repeated
- It should feel like a designed essay slice with evidence, not a generic feature grid

### Built for Rogers Section

This should become a structured section.

Intent:

- Translate the editorial stakes into concrete local relevance
- Make the page feel operationally specific

Presentation:

- Cleaner grid or split layout
- Trade chips, focus areas, or service relevance blocks are acceptable
- Strong alignment and repeatable spacing are more important than decorative effects

Rules:

- This is the first “organized” section after the editorial problem section
- It should feel crisp and useful, not dramatic

### Process Section

This should remain structured, but move away from generic card repetition.

Intent:

- Show the three-step service process with clearer visual sequencing
- Make the work feel methodical and credible

Presentation:

- Prefer a timeline, numbered track, or connected-step composition over three unrelated boxes
- Each step should read as part of one system

Rules:

- Strong step labels
- Clear start-to-finish progression
- Minimal decorative clutter
- On mobile, the sequence should remain obvious without relying on horizontal arrangements

### Proof Section

This should become the second editorial section.

Intent:

- Restore page energy before the FAQ and CTA
- Let proof feel like grounded confidence, not a stats widget

Presentation:

- Larger statements, testimonial-style confidence framing, or citation-led credibility blocks
- More open composition than the structured sections
- Strong contrast between this section and the process section before it

Rules:

- Avoid making this another statistics grid with identical card styling
- The content can still include numbers and evidence, but the presentation should feel more designed and less templated

### FAQ Section

This should become a quieter structured section.

Intent:

- Answer objections cleanly without inflating the visual temperature right before the CTA

Presentation:

- Tighter, premium accordion or stacked QA treatment
- Better typography and spacing than a default FAQ list

Rules:

- Keep it calm and readable
- Let it feel like the final reassurance layer before action
- Do not compete visually with the final CTA

### Final CTA

Keep the current section mostly intact.

Intent:

- Preserve the one section the user explicitly said is already working

Allowed changes:

- Only small spacing or adjacency adjustments if needed to support the redesigned FAQ section above it

Not allowed:

- Full redesign of CTA structure
- Copy overhaul without a strong implementation reason

## Layout System

The page should use deliberate alternation in width, density, and framing.

Editorial sections:

- Wider breathing room
- Fewer hard borders
- More typographic emphasis
- More negative space

Structured sections:

- Tighter alignment
- Clear internal organization
- Repeatable spacing logic
- Higher scan efficiency

This alternation should be visible even without reading the copy.

## Motion

Motion must stay subordinate to layout clarity.

Rules:

- Hero can retain restrained entrance motion
- Middle sections should avoid broad reveal choreography that changes perceived layout structure
- Any animation used in the redesigned middle must support orientation, not style for its own sake
- Respect reduced motion preferences

## Accessibility

The redesign must preserve or improve the current accessibility baseline.

Requirements:

- Maintain semantic section and heading order
- Preserve focus-visible states on interactive elements
- Keep contrast at or above the improved current version
- Ensure mobile reading comfort for all body copy and labels
- Avoid using layout devices that make content order confusing on small screens

## Mobile Behavior

Mobile must be treated as the default reading environment.

Requirements:

- Full-height hero must still feel centered and usable on mobile using `100dvh`
- Editorial sections must not become oversized walls of copy
- Structured sections must collapse into clean vertical stacks with obvious hierarchy
- Process sequence must remain legible without side-scrolling or visual guesswork

## Data and Content Handling

No content model changes are required.

Existing arrays and structured content in `page.js` should be reused where possible. The redesign should come from composition and section framing, not from introducing new CMS-like abstractions or unnecessary component complexity.

If small copy changes are needed, they should only improve hierarchy, emphasis, or scannability and should remain aligned with the Local Search Ally brand voice.

## Error Handling and Regression Guardrails

Because this is a redesign in an existing route, the main risk is not runtime logic failure but presentational regression.

Guardrails:

- Do not break metadata exports or JSON-LD output
- Do not break CTA links or anchor behavior
- Do not let hero height create overflow bugs under the fixed navbar
- Do not introduce layout utilities in Tailwind for structural layout; continue using CSS Modules for layout per project rules
- Do not let the final CTA drift away from its current approved structure

## Testing and Verification

Verification should cover both build safety and layout intent.

Required checks:

- Run production build successfully
- Review the Rogers page visually at desktop, tablet, and mobile widths
- Confirm hero remains vertically centered and readable with fixed navbar present
- Confirm the middle sections show visible editorial/structured alternation
- Confirm FAQ to CTA handoff still feels calm and intentional
- Confirm reduced-motion behavior still avoids disruptive reveal patterns

## Implementation Notes

This redesign should remain route-local unless a very small shared refinement is clearly necessary.

Preferred implementation shape:

- Keep the route in `page.js`
- Reorganize JSX section wrappers only as needed to support the new compositions
- Keep layout logic concentrated in `page.module.css`
- Avoid splitting into new components unless a section becomes materially cleaner as an isolated unit

## Success Criteria

The redesign is successful if:

- The hero feels like a full opening scene
- The final CTA still feels strong and familiar
- The middle of the page no longer reads as a stack of similar dark cards
- Editorial sections feel more narrative and premium
- Structured sections feel clearer and more operational
- The page feels professionally designed at a glance before the copy is even read
