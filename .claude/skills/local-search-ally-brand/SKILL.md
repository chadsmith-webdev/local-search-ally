---
name: local-search-ally-brand
description: >
  Create on-brand assets and review or rewrite copy for Local Search Ally.
  Use this skill whenever the user asks to create, design, write, review, audit,
  or refine any content or collateral for Local Search Ally — including website
  copy, blog posts, social posts, email templates, proposals, one-pagers, slide
  decks, and flyers. Also trigger for copy review tasks: "does this sound right",
  "rewrite this section", "check this against the brand voice", "audit this page",
  or any request to improve, tighten, or evaluate written content for Local Search
  Ally. Always read BRAND.md before producing or reviewing any output.
---

# Local Search Ally Brand Skill

This skill ensures every asset produced for Local Search Ally is on-brand,
on-message, and consistent — whether it's a PDF proposal, a social post, or
a slide deck.

## Step 1: Always Read the Brand Reference First

Before producing ANY output, read the full brand reference:

  /mnt/skills/user/local-search-ally-brand/references/BRAND.md

This file contains the complete brand system: positioning, brand script,
voice rules, colors, fonts, ICP, services, and logo guidance.

**For interactive tools, dashboards, or UI-heavy artifacts**, also read:

  /mnt/skills/user/local-search-ally-brand/references/DESIGN_SYSTEM.md

This file contains surface architecture, elevation rules, glassmorphism specs,
component patterns, and layout principles for product/tool interfaces.

## Step 2: Identify the Asset Type

Choose the right output format and approach based on what's requested:

| Asset | Format | Approach |
|---|---|---|
| Proposal / one-pager | PDF via HTML→wkhtmltopdf | Use `pdf` skill approach |
| Slide deck | PPTX | Use `pptx` skill approach |
| Social media post | Styled HTML artifact | See Social section below |
| Email template | HTML file | See Email section below |
| Report / case study | PDF via HTML→wkhtmltopdf | See Document section below |
| Flyer / graphic | HTML artifact or SVG | See Graphic section below |
| Portfolio page content | Markdown / HTML | Reference demo site specs from BRAND.md → Proof |
| Location/service area page | Markdown / HTML | Use ICP city list from BRAND.md → ICP |
| Tool / dashboard / grader | React or HTML artifact | Use DESIGN_SYSTEM.md |

If the asset type involves PPTX or complex PDF, read the relevant public skill
first: `/mnt/skills/public/pptx/SKILL.md` or `/mnt/skills/public/pdf/SKILL.md`.

## Step 3: Apply Brand Standards

### Colors (always use these exact values)
```
--carolina: #7bafd4   → Primary accent, links, highlights, borders
--slate:    #2E3A4D   → Deep brand moments, dark badges, feature sections
--steel:    #4A6B8A   → Secondary accent, mid-tone emphasis, hover states
--bg:       #0a0a0a   → Page/slide background
--surface:  #141414   → Cards, elevated sections, nav
--surface2: #1e1e1e   → Secondary surface, subtle contrast
--text:     #f0f0f0   → All primary body and heading text
--muted:    #888888   → Captions, labels, supporting text
```

**Color rules:**
- Carolina blue does the interactive work: borders, accents, labels, CTAs
- Slate navy is for depth and badge-level emphasis only
- Steel blue bridges the gap between muted and Carolina — secondary buttons, hover states, subtle emphasis
- All backgrounds are dark — never invert to a light theme

### Typography
- **Display / headings:** Georgia or Fraunces (serif, weight 700)
- **Body / UI:** Helvetica Neue, Arial, or Urbanist (sans-serif, weight 400)
- **Data / metrics / technical:** JetBrains Mono (monospace, weight 400–500) — use for scores, percentages, status indicators, and audit data in tools/dashboards only
- **Captions / labels:** Same sans-serif, weight 600, uppercase, 0.15em letter-spacing
- Heading sizes use fluid scaling where possible (`clamp()` in HTML)
- Letter-spacing on headings: −0.02em

### Logo Representation
When including the logo in assets:
- Icon: location pin SVG in white, standalone (no container square)
- Wordmark: "Local Search" in `#f0f0f0` + "Ally" in `#7bafd4` (Carolina)
- Tagline (optional): "NWA Contractor SEO" in small uppercase sans-serif
- Never distort, recolor (pin ball is always Carolina blue), or add effects

### Voice Rules (always apply to any written content)

**Core framing:** The contractor is the hero. Local Search Ally is the guide.
The villain is invisibility. Every piece of copy should reinforce this story.

- **Problem-first.** Lead with what the contractor is losing before offering anything.
- **Personal.** Write as Chad. "I" not "we." One person talking to another.
- **Honest confidence.** Don't claim results that don't exist yet. The credibility is the transparency itself — plus industry data, the method, and the commitment to show work as it happens.
- **Specific.** Name the trade, the city, the number. Lean on third-party data when personal proof isn't available yet. Vague claims get cut.
- **Low-pressure.** Every CTA is an offer, not a push.
- **No jargon.** Never use banned words (see BRAND.md → Banned Words). Name the actual thing.
- **Never overclaim.** "I proved it on myself first" and similar lines are off-limits until there's real proof to back them up.
- **Use current ICP language.** The site says "home service trades" — not "contractors" generically.

See BRAND.md → Voice & Tone for the full pillar breakdown, spectrum, structural
rules, do/don't examples, banned words, and drift pattern checklist.

---

## Asset-Specific Guidance

### Social Media Posts

For each post, produce a styled HTML preview artifact AND the raw copy text.

**Format options:**
- Instagram / Facebook: square (1080×1080 implied), bold headline, 1–2 sentences, CTA
- LinkedIn: text-first, more detail allowed, conversational
- Short-form (Twitter/X): one punchy line, no fluff

**Structure for a social post HTML preview:**
```html
<!-- Dark background card matching brand -->
<div style="background:#0a0a0a; color:#f0f0f0; font-family:'Helvetica Neue',Arial,sans-serif;
     padding:3rem; max-width:540px; border:1px solid rgba(255,255,255,0.08); border-radius:12px;">
  <!-- Eyebrow -->
  <div style="font-size:0.65rem; font-weight:600; letter-spacing:0.18em; text-transform:uppercase;
       color:#7bafd4; margin-bottom:1rem;">Local Search Ally</div>
  <!-- Headline in serif -->
  <h2 style="font-family:Georgia,serif; font-size:1.6rem; font-weight:700;
       letter-spacing:-0.02em; line-height:1.2; margin:0 0 1rem; color:#f0f0f0;">
    HEADLINE HERE
  </h2>
  <!-- Body -->
  <p style="font-size:0.95rem; color:#888; line-height:1.7; margin:0 0 1.5rem;">
    BODY COPY HERE
  </p>
  <!-- CTA -->
  <div style="display:inline-block; border:1px solid rgba(123,175,212,0.4);
       color:#7bafd4; font-size:0.8rem; font-weight:600; padding:0.5rem 1.25rem;
       border-radius:6px; letter-spacing:0.05em;">
    CTA TEXT
  </div>
</div>
```

Apply brand voice to all copy. CTAs should be low-pressure (see BRAND.md → CTAs).

---

### Email Templates

Output as a standalone HTML file. Structure:
1. Header: logo lockup on dark background
2. Body: `#f0f0f0` text on `#141414` surface, generous padding
3. CTA button: Carolina border + text (outline style)
4. Footer: muted text, localsearchally.com, Siloam Springs AR

Keep subject lines problem-first. Example:
- ✓ "You're losing jobs you don't even know about"
- ✗ "Exciting news from Local Search Ally!"

---

### Proposals & One-Pagers (PDF)

Use wkhtmltopdf to render HTML → PDF:
```bash
wkhtmltopdf \
  --page-size A4 \
  --margin-top 0 --margin-bottom 0 --margin-left 0 --margin-right 0 \
  --background --enable-local-file-access --encoding utf-8 \
  input.html output.pdf
```

**Since Google Fonts won't load in wkhtmltopdf**, always use system font fallbacks
in the PDF HTML source:
```css
--font-display: Georgia, 'Times New Roman', serif;
--font-body: 'Helvetica Neue', Arial, sans-serif;
```

Structure for proposals:
1. Cover page: brand dark bg, logo, prospect name, date
2. Problem statement (lead with their pain — the invisibility villain)
3. Proposed approach (3-step plan: Audit → Fix Priority Gaps → Grow and Track)
4. Deliverables + timeline
5. Pricing (use confirmed numbers from BRAND.md → Services, or "custom quote" if not finalized)
6. Agreement plan (no contracts, transparency pledge)
7. CTA: "Let's Talk — It's Free"

---

### Slide Decks (PPTX)

Read `/mnt/skills/public/pptx/SKILL.md` first.

Slide design rules:
- Background: `#0a0a0a` (near-black)
- Title font: Georgia/serif, white (`#f0f0f0`)
- Accent elements: Carolina blue (`#7bafd4`)
- Body font: Arial/Helvetica, muted gray (`#888888`) for supporting text
- Max 3 colors per slide: bg + text + carolina
- No clip art, stock photo placeholders, or decorative gradients
- Slide count: keep decks lean — 10 slides max for a standard pitch

---

### Flyers & Graphics (HTML/SVG artifact)

Follow the frontend-design skill aesthetic principles:
- Dark background always
- Single strong headline in serif
- Minimal copy — let whitespace breathe
- Carolina blue as the one accent
- Include logo lockup in corner

---

### Copy Review & Rewrite

When asked to review, audit, or rewrite existing copy (website pages, blog drafts,
emails, social posts, proposals):

**Step 1: Read BRAND.md → Voice & Tone first.** The full voice rules, banned word
list, structural rules, and drift patterns are all there.

**Step 2: Go section by section.** For each block of copy, mark it as one of:
- ✅ Keep as-is — already on-voice
- ✏️ Rewritten — with before/after and a one-line reason
- 💬 Note — flagged for context but not changed

**Step 3: Apply the drift pattern checklist before delivering.**
Check every piece of copy against these common failure modes (all in BRAND.md):
- Rule-of-three endings
- Banned words sneaking in
- Vague specifics — claims without numbers, trades, or locations
- Repeated promises on the same page
- "We" instead of "I"
- Sentences that sound like stock photo captions
- Hero language — positioning LSA as the hero instead of the guide

**Step 4: Deliver as a structured markdown document** with:
- Section-by-section review (keep / rewritten / note)
- Before/after for every rewrite with a one-line rationale
- Summary table at the end showing what changed and why
- Save to `/mnt/user-data/outputs/` and present with `present_files`

**What not to change:**
- Copy that's already specific, plain, and on-voice — even if it could be
  slightly improved. Over-editing kills authentic voice.
- The transparency pledge sections — these are the strongest copy on the site.
- CTAs that already use approved low-pressure language.

---

## Quality Checklist

Before delivering any asset or copy review, verify:
- [ ] All colors match the exact hex values above (for visual assets)
- [ ] No light backgrounds used (for visual assets)
- [ ] Voice is plain-spoken and problem-first
- [ ] The contractor is the hero, LSA is the guide
- [ ] No banned words present (see banned word table in BRAND.md)
- [ ] No rule-of-three endings
- [ ] "I" used throughout — never "we"
- [ ] CTAs are low-pressure and specific
- [ ] No vague claims without specifics (numbers, trades, locations)
- [ ] No hero language (LSA as the hero instead of the guide)
- [ ] Logo represented correctly if included (for visual assets)
- [ ] Typography hierarchy is clear (for visual assets)
- [ ] File is saved to `/mnt/user-data/outputs/` and presented with `present_files`
