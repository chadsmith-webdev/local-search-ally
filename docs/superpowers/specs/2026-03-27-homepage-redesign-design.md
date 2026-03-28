# Homepage Redesign Design Spec

Date: 2026-03-27
Project: Local Search Ally homepage redesign
Status: Approved and in implementation

## 1. Objective

Rebuild the homepage experience from scratch while preserving SEO and brand continuity.

Primary conversion goal:

- Book a strategy call

## 2. Non-Negotiables

Keep and preserve:

- Existing schema markup implementation patterns
- Brand colors (Carolina and Duke blue system)
- Existing blog system and content

Do not do:

- Fake social proof
- Imply demo sites are client case studies

## 3. Positioning

Primary audience:

- Home service trades (initial focus: plumbers, HVAC, electricians)

Market position:

- Hybrid positioning: rooted in NWA credibility, open to broader geographic clients

Voice and tone:

- Blue-collar direct
- Data-driven

Trust stack priority:

1. Founder specialization and fit
2. Transparent process and expectations
3. Technical credibility (local SEO + schema + site structure)

## 4. Messaging Framework

Framework:

- StoryBrand-aligned homepage narrative

Flow:

1. Customer problem
2. Guide credibility
3. Plan
4. Clear CTA
5. Success/failure stakes

## 5. Approved Homepage Section Architecture

1. Hero

- Promise for home service trades
- Primary CTA: book strategy call

2. Problem

- Practical local visibility pain points

3. Stakes

- Cost of inaction section

4. Guide / Founder Story

- Why this business exists and who it is for

5. Who This Is For / Not For

- Qualification and disqualification to sharpen positioning

6. 3-Step Plan

- Audit, fix priority gaps, grow lead flow

7. Services / Capabilities

- What execution looks like in practical terms

8. Demo Websites Section

- Sample websites for home service trades
- Explicitly framed as demos/samples

9. Technical Credibility

- Local SEO systems, schema, structure, tracking logic

10. What You Will Get From the Call

- Friction-reduction and expectation-setting

11. Blog / Resources

- Authority support, secondary depth

12. FAQ

- Objection handling

13. Final CTA

- Strong close with strategy call action

## 6. Locked Copy Direction (Section-Level)

### Stakes

Headline:

- What it costs to stay hard to find

Points:

1. You miss calls from people already searching for your service
2. You rely too much on referrals and inconsistent word of mouth
3. Competitors with a weaker reputation can still win if they show up first

### What You Will Get From the Call

Headline:

- What you will get from the call

Support line:

- No hard pitch. Just a clear look at what is working, what is not, and what to do next.

Points:

1. A plain-language read on what is helping or hurting local visibility
2. A shortlist of fixes most likely to matter first
3. A clear answer on whether it makes sense to work together

### Demo Websites Framing

Section promise:

- Sample websites for home service trades, built to convert and structured for local SEO

Card framing rules:

1. Identify trade type
2. State business goal
3. Show local SEO/conversion components
4. Use clear view-demo CTA

### Who It Is For / Not For

Direction:

- Keep current draft direction approved in chat
- Revisit later if needed

## 7. Design and UX Principles

1. Clarity over cleverness
2. Intentional, non-generic layout hierarchy
3. Keep conversion path visible throughout page
4. Use trust-through-transparency in place of missing testimonial proof
5. Keep mobile behavior first-class and legible

## 8. Implementation Guardrails

1. Preserve existing schema and blog architecture while redesigning UI
2. Keep legal/metadata/SEO routing intact
3. Make no claim that demo websites are client outcomes
4. Avoid adding sections that dilute strategy call CTA

## 9. Success Criteria

1. Homepage clearly speaks to home service trades
2. Visitor understands process in under 30 seconds
3. Primary CTA appears in hero and final close (plus contextual repeats)
4. Stakes and call-expectation sections reduce hesitation
5. Demo section builds credibility without overstating proof

## 10. Next Step

Implementation has started. The first delivery is the homepage rebuild in
[src/components/HomeClient.js](src/components/HomeClient.js), aligned to this
section architecture while preserving schema/blog systems.
