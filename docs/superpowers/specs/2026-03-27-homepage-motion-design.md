# Homepage Motion and Icon Design Spec

Date: 2026-03-27
Project: Local Search Ally homepage motion and icon layer
Status: Approved and implemented

## 1. Objective

Add a bold but controlled icon and motion system to the homepage so it feels more alive, visually attractive, and more distinct without reducing clarity or trust.

## 2. Design Direction

Chosen direction:

- Command Center Hybrid

Style definition:

- Clean technical base
- Selective trade-inspired accents
- Bold motion concentrated in high-impact areas
- Line-based iconography with Carolina blue emphasis

This should feel:

- Practical
- Controlled
- Modern
- Premium
- Slightly cinematic

This should not feel:

- Cartoonish
- Gamer-like
- Futuristic for its own sake
- Heavy industrial cosplay
- Over-animated

## 3. User and Brand Context

Audience:

- Home service trades, especially plumbers, HVAC, and electricians

Use case:

- Understand the offer quickly
- Build trust
- Book a strategy call

Brand tone:

- Blue-collar direct
- Data-driven
- Honest
- Confident, not inflated

## 4. Motion Intensity

Requested intensity:

- Bold

Interpretation:

- Use one strong hero motion moment
- Use layered but controlled supporting motion in cards and section reveals
- Avoid constant movement everywhere
- Motion must stay behind readability and CTA clarity

## 5. Icon System

Icon style:

- Thin-to-medium line icons
- Geometric and clean
- Slightly technical, not playful
- Consistent stroke language across sections

Icon usage:

1. Hero support area

- Visibility/search icon
- Calls/leads icon
- Local signal/location icon

2. Section cards

- Problem cards
- Plan cards
- Services/capabilities cards
- Technical credibility cards

3. Link and CTA accents

- Directional arrows
- Subtle moving affordances on hover

Rules:

- Icons support hierarchy, not replace it
- No emoji
- No mixed icon families
- No oversized decorative icons above every heading

## 6. Motion Architecture

### Hero Motion

Primary hero moment:

- Animated system backdrop behind hero content

Elements:

- Signal sweep lines
- Soft pulse/radar effect around a focal point
- Subtle moving grid or scan texture
- Optional glow accents tied to brand colors

Constraints:

- Motion must remain behind content
- No motion over headline text
- Keep contrast and legibility intact

### Scroll Reveal Layer

Add:

- Fade + upward translate reveals for major sections
- Slight stagger for grouped cards
- Consistent timing and easing throughout

Do not add:

- Bounce
- Elastic motion
- Large parallax shifts
- Layout-changing animations

### Card Interaction Layer

Add:

- Hover lift
- Border glow increase
- Slight icon shift or glow on hover
- CTA arrow nudge on interactive elements

Use cases:

- Problem cards
- Plan cards
- Service items
- Blog cards
- Demo cards

### CTA Interaction Layer

Buttons and links should have:

- Crisp hover feedback
- Slight press state compression
- Subtle directional motion on arrows
- Strong but restrained glow language

### FAQ Interaction Enhancement

Accordion already improved.
No major new animation beyond maintaining consistency with the broader motion system.

## 7. Technical Constraints

Performance rules:

1. Animate transform and opacity only where practical
2. Avoid layout-thrashing properties
3. Keep motion smooth on mobile
4. Limit simultaneous hero animations to a manageable set

Accessibility rules:

1. Respect prefers-reduced-motion
2. Provide non-animated fallback behavior
3. Preserve focus visibility and interactive clarity
4. Never use motion as the only signal for interaction or state

## 8. Implementation Scope

Files expected to change:

- src/components/HomeClient.js
- Possibly small supporting utility/component extraction if needed

Possible optional additions:

- Small internal icon helpers in the homepage component
- Lightweight reveal hook if needed for section choreography

Avoid unless clearly necessary:

- New animation library dependency
- Large abstraction layer
- Site-wide motion system changes outside homepage scope

## 9. Success Criteria

1. Homepage feels more distinctive and alive immediately on load
2. Hero has a memorable motion moment without hurting readability
3. Cards feel interactive and polished
4. Icons improve scanability and section recognition
5. Motion remains accessible and performant
6. Page still feels trustworthy and conversion-focused

## 10. Non-Goals

1. Full-site animation overhaul
2. Rewriting the homepage structure again
3. Adding decorative clutter
4. Using motion to compensate for weak copy or layout

## 11. Next Step

Implementation is now in place in src/components/HomeClient.js. Next steps are
to visually review the motion balance, then connect real demo URLs when those
pages are ready.
