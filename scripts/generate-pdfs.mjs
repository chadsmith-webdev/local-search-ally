/**
 * generate-pdfs.mjs
 * Run with: node scripts/generate-pdfs.mjs
 *
 * Generates all downloadable PDF resources for localsearchally.com/resources.
 * Output goes to public/downloads/ — commit those files to deploy them.
 */

import React from 'react'
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  renderToFile,
} from '@react-pdf/renderer'
import { mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const OUT = join(__dirname, '..', 'public', 'downloads')
mkdirSync(OUT, { recursive: true })

const h = React.createElement

// ─── Brand ────────────────────────────────────────────────────────────────────
const C = {
  bg:       '#030406',
  surface:  '#0a0d12',
  surface2: '#111520',
  surface3: '#181d28',
  border:   'rgba(255,255,255,0.08)',
  borderMid:'rgba(255,255,255,0.14)',
  carolina: '#7bafd4',
  steel:    '#3a5570',
  slate:    '#1a222e',
  text:     '#f8f9fa',
  muted:    '#6c757d',
  mutedLt:  '#8fa3b0',
}

// ─── Shared styles ─────────────────────────────────────────────────────────────
const S = StyleSheet.create({
  // Pages
  page: {
    backgroundColor: C.bg,
    paddingHorizontal: 54,
    paddingTop: 42,
    paddingBottom: 36,
    fontFamily: 'Helvetica',
    color: C.text,
    fontSize: 10,
  },
  coverPage: {
    backgroundColor: C.bg,
    paddingHorizontal: 54,
    paddingTop: 54,
    paddingBottom: 42,
    fontFamily: 'Helvetica',
    color: C.text,
    fontSize: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  // Page chrome
  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 14,
    marginBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  pageHeaderBrand: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: C.carolina,
    letterSpacing: 1.5,
  },
  pageHeaderTitle: {
    fontSize: 8,
    color: C.muted,
  },
  pageFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
    marginTop: 28,
    borderTopWidth: 1,
    borderTopColor: C.border,
  },
  pageFooterText: {
    fontSize: 7.5,
    color: C.muted,
  },
  pageFooterUrl: {
    fontSize: 7.5,
    color: C.carolina,
  },

  // Cover elements
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  logoText: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: C.text,
  },
  logoAccent: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: C.carolina,
  },
  coverTagline: {
    fontSize: 7.5,
    color: C.muted,
    letterSpacing: 1.5,
    marginBottom: 0,
  },
  coverDivider: {
    height: 1,
    backgroundColor: C.borderMid,
    marginVertical: 40,
    width: 48,
  },
  coverEyebrow: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: C.carolina,
    letterSpacing: 2,
    marginBottom: 18,
  },
  coverH1a: {
    fontSize: 46,
    fontFamily: 'Helvetica-Bold',
    color: C.text,
    letterSpacing: -1,
    lineHeight: 1.05,
  },
  coverH1b: {
    fontSize: 46,
    fontFamily: 'Helvetica-Bold',
    color: C.carolina,
    letterSpacing: -1,
    lineHeight: 1.05,
  },
  coverSubtitle: {
    fontSize: 11,
    color: C.mutedLt,
    lineHeight: 1.6,
    marginTop: 18,
    maxWidth: 420,
  },
  coverMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    gap: 12,
  },
  coverMetaPill: {
    backgroundColor: C.surface3,
    borderWidth: 1,
    borderColor: C.borderMid,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 7.5,
    color: C.mutedLt,
    letterSpacing: 1,
  },
  coverBottom: {
    borderTopWidth: 1,
    borderTopColor: C.border,
    paddingTop: 18,
  },
  coverBottomText: {
    fontSize: 8,
    color: C.muted,
  },

  // Typography
  eyebrow: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: C.carolina,
    letterSpacing: 2,
    marginBottom: 8,
  },
  h2: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: C.text,
    letterSpacing: -0.5,
    lineHeight: 1.2,
    marginBottom: 14,
    marginTop: 6,
  },
  h3: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: C.carolina,
    letterSpacing: 0.3,
    marginBottom: 10,
    marginTop: 22,
  },
  body: {
    fontSize: 10,
    color: C.text,
    lineHeight: 1.75,
    marginBottom: 10,
  },
  bodyMuted: {
    fontSize: 9.5,
    color: C.muted,
    lineHeight: 1.75,
    marginBottom: 8,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: C.border,
    marginVertical: 22,
  },

  // Section card (bordered)
  card: {
    backgroundColor: C.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: C.border,
    borderLeftWidth: 3,
    borderLeftColor: C.carolina,
    padding: 16,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: C.carolina,
    letterSpacing: 1,
    marginBottom: 10,
  },

  // Bullet
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 7,
    alignItems: 'flex-start',
  },
  bulletMark: {
    fontSize: 10,
    color: C.carolina,
    marginRight: 8,
    marginTop: 0,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 1.75,
  },
  bulletText: {
    fontSize: 10,
    color: C.text,
    flex: 1,
    lineHeight: 1.7,
  },

  // Checkbox
  checkRow: {
    flexDirection: 'row',
    marginBottom: 9,
    alignItems: 'flex-start',
  },
  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: C.carolina,
    borderRadius: 2,
    marginRight: 9,
    marginTop: 1,
    flexShrink: 0,
    backgroundColor: 'transparent',
  },
  checkText: {
    fontSize: 10,
    color: C.text,
    flex: 1,
    lineHeight: 1.55,
  },
  checkCategory: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: C.carolina,
    letterSpacing: 1.5,
    marginBottom: 8,
    marginTop: 18,
  },

  // Callout (dark accent box)
  callout: {
    backgroundColor: C.slate,
    borderRadius: 8,
    padding: 18,
    marginVertical: 16,
  },
  calloutText: {
    fontSize: 11,
    fontFamily: 'Helvetica-Oblique',
    color: C.text,
    lineHeight: 1.6,
  },
  calloutByline: {
    fontSize: 8.5,
    color: C.mutedLt,
    marginTop: 10,
  },

  // Stat cards (horizontal row)
  statRow: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: 18,
  },
  statCard: {
    flex: 1,
    backgroundColor: C.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: C.border,
    padding: 14,
  },
  statValue: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: C.carolina,
    lineHeight: 1.1,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 8,
    color: C.mutedLt,
    lineHeight: 1.5,
  },
  statSource: {
    fontSize: 7,
    color: C.muted,
    marginTop: 6,
    letterSpacing: 0.5,
  },

  // Fix-it box
  fixBox: {
    backgroundColor: C.surface2,
    borderRadius: 6,
    padding: 14,
    marginTop: 12,
    borderLeftWidth: 2,
    borderLeftColor: C.steel,
  },
  fixLabel: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: C.mutedLt,
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  fixText: {
    fontSize: 9.5,
    color: C.text,
    lineHeight: 1.65,
  },

  // Number callout (for "5 Reasons" style)
  reasonNum: {
    fontSize: 48,
    fontFamily: 'Helvetica-Bold',
    color: C.surface3,
    lineHeight: 1,
    marginBottom: -6,
    letterSpacing: -2,
  },
  reasonTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: C.text,
    letterSpacing: -0.2,
    marginBottom: 10,
  },

  // CTA box at end of docs
  ctaBox: {
    backgroundColor: C.slate,
    borderRadius: 10,
    padding: 26,
    marginTop: 28,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: C.text,
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  ctaBody: {
    fontSize: 9.5,
    color: C.mutedLt,
    textAlign: 'center',
    lineHeight: 1.7,
    marginBottom: 16,
    maxWidth: 380,
  },
  ctaUrl: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: C.carolina,
  },

  // Footnote
  footnote: {
    fontSize: 7.5,
    color: C.muted,
    lineHeight: 1.7,
    marginTop: 8,
  },
})

// ─── Shared UI helpers ─────────────────────────────────────────────────────────
const Logo = () =>
  h(View, { style: S.logoRow },
    h(Text, { style: S.logoText }, 'Local Search '),
    h(Text, { style: S.logoAccent }, 'Ally'),
  )

const Divider = () => h(View, { style: S.divider })

const Bullet = ({ text }) =>
  h(View, { style: S.bulletRow },
    h(Text, { style: S.bulletMark }, '·'),
    h(Text, { style: S.bulletText }, text),
  )

const Check = ({ text }) =>
  h(View, { style: S.checkRow },
    h(View, { style: S.checkbox }),
    h(Text, { style: S.checkText }, text),
  )

const CheckCategory = ({ label }) =>
  h(Text, { style: S.checkCategory }, label)

const PageHdr = ({ docTitle }) =>
  h(View, { style: S.pageHeader },
    h(Text, { style: S.pageHeaderBrand }, 'LOCAL SEARCH ALLY'),
    h(Text, { style: S.pageHeaderTitle }, docTitle),
  )

const PageFtr = ({ left = 'localsearchally.com  ·  (479) 380-8626', right = '' }) =>
  h(View, { style: S.pageFooter },
    h(Text, { style: S.pageFooterText }, left),
    right ? h(Text, { style: S.pageFooterUrl }, right) : null,
  )

const FixIt = ({ text }) =>
  h(View, { style: S.fixBox },
    h(Text, { style: S.fixLabel }, 'FIX IT'),
    h(Text, { style: S.fixText }, text),
  )

const CTA = () =>
  h(View, { style: S.ctaBox },
    h(Text, { style: S.ctaTitle }, "Let's talk — it's free."),
    h(Text, { style: S.ctaBody },
      "Book a free strategy call and I'll look at your GBP, website, and review profile. No pitch. No contract. Just an honest read on where you stand.",
    ),
    h(Text, { style: S.ctaUrl }, 'localsearchally.com'),
  )

// ─── Document 1: The Invisibility Report ──────────────────────────────────────
const InvisibilityReport = () =>
  h(Document, {
    author: 'Chad Smith — Local Search Ally',
    title: 'The Invisibility Report: NWA Edition',
    subject: 'Three local SEO patterns costing NWA contractors calls every day',
    creator: 'localsearchally.com',
  },

  // Cover
  h(Page, { size: 'LETTER', style: S.coverPage },
    h(View, null,
      h(Logo),
      h(Text, { style: S.coverTagline }, 'NWA CONTRACTOR SEO'),
    ),
    h(View, { style: { flex: 1, justifyContent: 'center' } },
      h(View, { style: S.coverDivider }),
      h(Text, { style: S.coverEyebrow }, 'FIELD REPORT · NORTHWEST ARKANSAS · 2026'),
      h(Text, { style: S.coverH1a }, 'The'),
      h(Text, { style: S.coverH1b }, 'Invisibility'),
      h(Text, { style: S.coverH1a }, 'Report'),
      h(Text, { style: S.coverSubtitle },
        "What I found auditing NWA contractors —\nand what it's costing them.",
      ),
      h(View, { style: S.coverMeta },
        h(Text, { style: S.coverMetaPill }, 'PDF'),
        h(Text, { style: S.coverMetaPill }, '~12 MIN READ'),
        h(Text, { style: S.coverMetaPill }, 'FREE'),
      ),
    ),
    h(View, { style: S.coverBottom },
      h(Text, { style: S.coverBottomText },
        'Chad Smith · Local Search Ally · Siloam Springs, AR · localsearchally.com · (479) 380-8626',
      ),
    ),
  ),

  // p2: Introduction
  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: 'The Invisibility Report' }),
    h(Text, { style: S.h2 }, 'I started keeping notes.'),
    h(Text, { style: S.body },
      "When I audit a contractor's local visibility, I write down every gap I find. After running audits across NWA home service trades — HVAC, plumbing, roofing, electrical, landscaping — three problems kept showing up. Every trade. Every city. Every time.",
    ),
    h(Text, { style: S.body },
      "This isn't theory pulled from a marketing blog. It's what I actually find when I look at a real NWA contractor's Google Business Profile, website, and review history.",
    ),
    h(Text, { style: S.body },
      "If your business is solid but your phone is quieter than it should be, one of these three things is probably why.",
    ),
    h(View, { style: S.callout },
      h(Text, { style: S.calloutText },
        '"The best contractor in town shouldn\'t be the hardest to find.\nI make sure they\'re not."',
      ),
      h(Text, { style: S.calloutByline }, '— Chad Smith, Local Search Ally'),
    ),
    h(Divider),
    h(Text, { style: S.h3 }, 'Three patterns. Every audit.'),
    h(Bullet, { text: 'Your Google Business Profile has gaps Google can\'t ignore.' }),
    h(Bullet, { text: 'Your website doesn\'t tell Google who you are or where you work.' }),
    h(Bullet, { text: 'Your reviews are working against you.' }),
    h(PageFtr, { right: 'localsearchally.com/audit' }),
  ),

  // p3: Problem 1 — GBP
  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: 'The Invisibility Report' }),
    h(Text, { style: S.eyebrow }, 'PATTERN 01'),
    h(Text, { style: S.h2 }, 'Your Google Business Profile\nhas gaps.'),
    h(Text, { style: S.body },
      "Most contractors set up their GBP once and never touch it again. The result: outdated info, missing categories, no photos from the last two years, and a description that could belong to any business in any state.",
    ),
    h(Text, { style: S.body },
      "Google uses your GBP to decide whether you're a real, active, relevant business for a specific search. A stale or incomplete profile signals the opposite — and Google responds by ranking you lower.",
    ),
    h(Text, { style: S.h3 }, 'What I keep finding'),
    h(View, { style: S.card },
      h(Bullet, { text: "Primary category set to \"Contractor\" instead of the actual trade (HVAC Contractor, Plumber, Electrician, etc.)" }),
      h(Bullet, { text: "Service area left blank or set to a single city when the business works across NWA" }),
      h(Bullet, { text: "Fewer than 5 photos — none from recent work" }),
      h(Bullet, { text: "No business description, or one written for no one in particular" }),
      h(Bullet, { text: "Phone number that doesn't match the website — a mismatch Google notices" }),
    ),
    h(Text, { style: S.h3 }, 'What to check right now'),
    h(Text, { style: S.body },
      "Open your GBP dashboard at business.google.com. Go to the Info tab. Check three things:",
    ),
    h(Bullet, { text: "Is your primary category your specific trade — not just \"Contractor\"?" }),
    h(Bullet, { text: "Is your service area set to every city you actually work in?" }),
    h(Bullet, { text: "When was your last photo added? If it's been over 60 days, add one today." }),
    h(FixIt, { text: "Set your primary category to your exact trade. For example: if you do HVAC, it should be \"HVAC Contractor\" — not \"General Contractor\" and not \"Home Services.\" Then add your service area cities one by one: Rogers, Bentonville, Fayetteville, Springdale — wherever you actually go." }),
    h(PageFtr, { right: 'localsearchally.com/audit' }),
  ),

  // p4: Problem 2 — Website
  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: 'The Invisibility Report' }),
    h(Text, { style: S.eyebrow }, 'PATTERN 02'),
    h(Text, { style: S.h2 }, "Your website doesn't\ntell Google who you are."),
    h(Text, { style: S.body },
      "Google can't rank you for \"Rogers HVAC repair\" if your website never says \"Rogers\" or \"HVAC repair.\" Most contractor websites I look at say something like \"Quality service at fair prices\" and nothing else specific. That's not a ranking signal — that's noise.",
    ),
    h(Text, { style: S.body },
      "Google needs to match your page to what someone searched. If your content doesn't include the trade, the city, and the specific service, there's nothing to match against.",
    ),
    h(Text, { style: S.h3 }, 'What I keep finding'),
    h(View, { style: S.card },
      h(Bullet, { text: "Homepage title tag is just the company name — no trade, no city" }),
      h(Bullet, { text: "No mention of specific NWA cities anywhere on the site" }),
      h(Bullet, { text: "One generic \"Services\" page instead of individual pages per service" }),
      h(Bullet, { text: "Mobile load time over 5 seconds — most visitors are gone before it loads" }),
      h(Bullet, { text: "Phone number is an image or plain text — not a clickable link for mobile users" }),
    ),
    h(Text, { style: S.h3 }, 'What to check right now'),
    h(Text, { style: S.body },
      "Search Google for your trade + your primary city. For example: \"plumber in Fayetteville AR\" or \"Rogers HVAC repair.\"",
    ),
    h(Bullet, { text: "Are you on page 1? In the Map Pack — the 3 businesses shown above the regular results?" }),
    h(Bullet, { text: "Look at whoever IS ranking. What does their page title say? What's on their homepage?" }),
    h(Bullet, { text: "Now look at your own title tag. Does it name your trade and your city — or just your company name?" }),
    h(FixIt, { text: "Your homepage title tag should follow this format: \"[Trade] in [City, AR] | [Business Name]\". For example: \"Plumber in Fayetteville, AR | Smith Plumbing.\" If you serve multiple cities, each city eventually needs its own page — but start with your primary city and most profitable service." }),
    h(PageFtr, { right: 'localsearchally.com/audit' }),
  ),

  // p5: Problem 3 — Reviews
  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: 'The Invisibility Report' }),
    h(Text, { style: S.eyebrow }, 'PATTERN 03'),
    h(Text, { style: S.h2 }, "Your reviews are\nworking against you."),
    h(Text, { style: S.body },
      "Reviews aren't just social proof — they're a ranking signal. Google wants to send people to businesses that other people trust. Thin reviews, old reviews, or unanswered reviews tell Google you're less active and less relevant than your competitors.",
    ),
    h(Text, { style: S.body },
      "A competitor with 18 reviews and one from last week looks more active to Google than a business with 8 reviews and the newest from eight months ago — even if your work is better.",
    ),
    h(Text, { style: S.h3 }, 'What I keep finding'),
    h(View, { style: S.card },
      h(Bullet, { text: "Fewer than 10 total Google reviews" }),
      h(Bullet, { text: "Last review is 6+ months old" }),
      h(Bullet, { text: "No responses to any reviews — good or bad" }),
      h(Bullet, { text: "One negative review sitting unanswered at the top, pulling the average down" }),
    ),
    h(Text, { style: S.h3 }, 'What to check right now'),
    h(Bullet, { text: "When was your last Google review? Pull up your GBP and check the date." }),
    h(Bullet, { text: "Have you responded to every review — including the good ones?" }),
    h(Bullet, { text: "Do you have a process for asking happy customers to leave a review? If not, that's the fix." }),
    h(FixIt, { text: "After your next completed job, text the customer a direct link to your Google review page. One tap, straight to the review box. Most satisfied customers will do it — they just need the link in hand and a reason to click it. Make the ask feel personal, not automated." }),
    h(PageFtr, { right: 'localsearchally.com/audit' }),
  ),

  // p6: What this costs
  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: 'The Invisibility Report' }),
    h(Text, { style: S.h2 }, "What this costs you."),
    h(Text, { style: S.body },
      "These three patterns compound. A contractor with an incomplete GBP, a generic website, and 4 reviews isn't just ranked a bit lower — they're effectively invisible on local search. Someone is searching for exactly what you do in exactly your city right now, and they're calling someone else.",
    ),
    h(View, { style: S.statRow },
      h(View, { style: S.statCard },
        h(Text, { style: S.statValue }, '97%'),
        h(Text, { style: S.statLabel }, 'of consumers use Google to evaluate local businesses'),
        h(Text, { style: S.statSource }, 'SOURCE: BRIGHTLOCAL'),
      ),
      h(View, { style: S.statCard },
        h(Text, { style: S.statValue }, '88%'),
        h(Text, { style: S.statLabel }, 'of local mobile searchers call or visit within 24 hours'),
        h(Text, { style: S.statSource }, 'SOURCE: THINK WITH GOOGLE'),
      ),
      h(View, { style: S.statCard },
        h(Text, { style: S.statValue }, '28%'),
        h(Text, { style: S.statLabel }, 'of nearby searches result in a purchase'),
        h(Text, { style: S.statSource }, 'SOURCE: THINK WITH GOOGLE'),
      ),
    ),
    h(Text, { style: { ...S.body, marginTop: 4 } },
      "Every day you're not showing up is a day someone else's phone rings instead of yours.",
    ),
    h(Divider),
    h(Text, { style: S.h3 }, "You don't have to fix all of this at once."),
    h(Text, { style: S.body }, "Start with what you can check today:"),
    h(Bullet, { text: "Open your GBP. Check your primary category, service area, and last photo date." }),
    h(Bullet, { text: "Google your trade + your city. See who ranks above you and what they're doing." }),
    h(Bullet, { text: "Count your reviews. Check when the last one came in. Check whether you've responded to all of them." }),
    h(PageFtr, { right: 'localsearchally.com/audit' }),
  ),

  // p7: CTA
  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: 'The Invisibility Report' }),
    h(Text, { style: S.h2 }, "What to do next."),
    h(Text, { style: S.body },
      "If you want to go beyond this report and get a real look at where you stand — I'll do it for free.",
    ),
    h(Text, { style: S.body },
      "Run the free SEO audit at localsearchally.com/audit. It checks for the most common visibility gaps in about 60 seconds — no email required.",
    ),
    h(Text, { style: S.body },
      "Or book a free strategy call at localsearchally.com. I'll review your GBP, website, and review profile and tell you exactly what I'd fix first. No pitch. No contract. Just an honest look at what's costing you calls.",
    ),
    h(CTA),
    h(Divider),
    h(Text, { style: S.footnote },
      "Chad Smith · Local Search Ally · Siloam Springs, AR · (479) 380-8626 · localsearchally.com\n\nStat sources: BrightLocal Local Consumer Review Survey; Think With Google \"How Mobile Search Connects Consumers to Stores\"; Safari Digital Local SEO Statistics. Stats used with attribution only — not fabricated.",
    ),
    h(PageFtr, {}),
  ),
)

// ─── Document 2: NWA Contractor Local SEO Checklist ───────────────────────────
const LocalSEOChecklist = () =>
  h(Document, {
    author: 'Chad Smith — Local Search Ally',
    title: 'NWA Contractor Local SEO Checklist',
    subject: '20-point self-audit for NWA home service trade owners',
    creator: 'localsearchally.com',
  },

  // Cover
  h(Page, { size: 'LETTER', style: S.coverPage },
    h(View, null,
      h(Logo),
      h(Text, { style: S.coverTagline }, 'NWA CONTRACTOR SEO'),
    ),
    h(View, { style: { flex: 1, justifyContent: 'center' } },
      h(View, { style: S.coverDivider }),
      h(Text, { style: S.coverEyebrow }, 'SELF-AUDIT CHECKLIST · NORTHWEST ARKANSAS · 2026'),
      h(Text, { style: S.coverH1a }, 'NWA Contractor'),
      h(Text, { style: S.coverH1b }, 'Local SEO'),
      h(Text, { style: S.coverH1a }, 'Checklist'),
      h(Text, { style: S.coverSubtitle },
        "20 things to check before you call it done.\nWork through it top to bottom — every item you check off is one fewer reason Google has to skip you.",
      ),
      h(View, { style: S.coverMeta },
        h(Text, { style: S.coverMetaPill }, 'PDF'),
        h(Text, { style: S.coverMetaPill }, '20 POINTS'),
        h(Text, { style: S.coverMetaPill }, 'FREE'),
      ),
    ),
    h(View, { style: S.coverBottom },
      h(Text, { style: S.coverBottomText },
        'Chad Smith · Local Search Ally · Siloam Springs, AR · localsearchally.com · (479) 380-8626',
      ),
    ),
  ),

  // Checklist content
  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: 'NWA Contractor Local SEO Checklist' }),
    h(Text, { style: S.h2 }, 'The 20-Point Checklist'),
    h(Text, { style: { ...S.bodyMuted, marginBottom: 18 } },
      "This is what I look at first when I audit a contractor's local visibility. Check each box as you confirm it's done. Every unchecked item is a gap Google can rank you down for.",
    ),

    // Section 1: GBP
    h(View, { style: S.card },
      h(Text, { style: S.cardTitle }, 'SECTION 1 — GOOGLE BUSINESS PROFILE'),
      h(Check, { text: "Business name is exact — matches your sign, truck, and website" }),
      h(Check, { text: "Primary category is your specific trade (not \"Contractor\" or \"Service Provider\")" }),
      h(Check, { text: "You've added all relevant secondary categories" }),
      h(Check, { text: "Service area lists every city you actually work in" }),
      h(Check, { text: "Business hours are current, including any seasonal changes" }),
      h(Check, { text: "At least 10 photos uploaded — work photos, not just a logo" }),
      h(Check, { text: "A new photo has been added in the last 60 days" }),
    ),

    // Section 2: Website
    h(View, { style: S.card },
      h(Text, { style: S.cardTitle }, 'SECTION 2 — YOUR WEBSITE'),
      h(Check, { text: "Homepage title tag includes your trade + city (e.g., \"Fayetteville Plumber | Smith Plumbing\")" }),
      h(Check, { text: "Phone number is a clickable link on mobile — not plain text or an image" }),
      h(Check, { text: "Site loads on mobile in under 3 seconds" }),
      h(Check, { text: "You have a separate page for each major service you offer" }),
      h(Check, { text: "Each service page names the service and the city" }),
      h(Check, { text: "Your service area or address appears on every page (typically in the footer)" }),
    ),
    h(PageFtr, { right: 'localsearchally.com/audit' }),
  ),

  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: 'NWA Contractor Local SEO Checklist' }),

    // Section 3: Citations
    h(View, { style: S.card },
      h(Text, { style: S.cardTitle }, 'SECTION 3 — CITATIONS & LISTINGS'),
      h(Check, { text: "Business is listed on Yelp, Angi, BBB, and HomeAdvisor" }),
      h(Check, { text: "Name, address, and phone are identical across every listing" }),
      h(Check, { text: "No duplicate listings exist for your business on Google" }),
    ),

    // Section 4: Reviews
    h(View, { style: S.card },
      h(Text, { style: S.cardTitle }, 'SECTION 4 — REVIEWS'),
      h(Check, { text: "At least 10 Google reviews total" }),
      h(Check, { text: "Average rating is 4.0 or above" }),
      h(Check, { text: "You've responded to every review — positive and negative" }),
      h(Check, { text: "A new review has come in within the last 60 days" }),
    ),

    // Section 5: Content
    h(View, { style: S.card },
      h(Text, { style: S.cardTitle }, 'SECTION 5 — CONTENT'),
      h(Check, { text: "Your most profitable service has its own dedicated page" }),
      h(Check, { text: "That page describes what you actually do — not just a generic service name" }),
    ),

    h(Divider),
    h(Text, { style: S.h3 }, 'How to use your results'),
    h(Bullet, { text: "All 20 checked: your baseline is solid. Focus next on review volume, posting cadence, and service-specific content." }),
    h(Bullet, { text: "10–19 checked: pick the unchecked items in GBP and Website first — they have the most leverage." }),
    h(Bullet, { text: "Fewer than 10: start with GBP Category and Website Title Tag — two fixes, immediate impact." }),

    h(CTA),
    h(PageFtr, { right: 'localsearchally.com/audit' }),
  ),
)

// ─── Document 3: GBP Optimization Checklist ───────────────────────────────────
const GBPChecklist = () =>
  h(Document, {
    author: 'Chad Smith — Local Search Ally',
    title: 'Google Business Profile Optimization Checklist',
    subject: 'Step-by-step GBP audit for NWA home service trades',
    creator: 'localsearchally.com',
  },

  // Cover
  h(Page, { size: 'LETTER', style: S.coverPage },
    h(View, null,
      h(Logo),
      h(Text, { style: S.coverTagline }, 'NWA CONTRACTOR SEO'),
    ),
    h(View, { style: { flex: 1, justifyContent: 'center' } },
      h(View, { style: S.coverDivider }),
      h(Text, { style: S.coverEyebrow }, 'STEP-BY-STEP AUDIT · NORTHWEST ARKANSAS · 2026'),
      h(Text, { style: { ...S.coverH1a, fontSize: 34 } }, 'Google Business'),
      h(Text, { style: { ...S.coverH1b, fontSize: 34 } }, 'Profile'),
      h(Text, { style: { ...S.coverH1a, fontSize: 34 } }, 'Optimization'),
      h(Text, { style: { ...S.coverH1a, fontSize: 34 } }, 'Checklist'),
      h(Text, { style: S.coverSubtitle },
        "Your GBP is your most important local ranking factor. This checklist walks through every section. Find a gap, fix it before moving on.",
      ),
      h(View, { style: S.coverMeta },
        h(Text, { style: S.coverMetaPill }, 'PDF'),
        h(Text, { style: S.coverMetaPill }, '7 SECTIONS'),
        h(Text, { style: S.coverMetaPill }, 'FREE'),
      ),
    ),
    h(View, { style: S.coverBottom },
      h(Text, { style: S.coverBottomText },
        'Chad Smith · Local Search Ally · Siloam Springs, AR · localsearchally.com · (479) 380-8626',
      ),
    ),
  ),

  // Part 1 & 2
  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: 'GBP Optimization Checklist' }),
    h(Text, { style: S.h2 }, 'Section-by-Section GBP Audit'),
    h(Text, { style: { ...S.bodyMuted, marginBottom: 18 } },
      "Open your GBP dashboard at business.google.com before you start. Work through each section top to bottom. The order matters — the foundation sections (Basic Info, Hours) affect everything else.",
    ),

    h(View, { style: S.card },
      h(Text, { style: S.cardTitle }, 'PART 1 — BASIC INFORMATION'),
      h(Check, { text: "Business name matches your legal trade name — no keyword stuffing added to the name field" }),
      h(Check, { text: "Primary category is your exact trade specialty" }),
      h(Check, { text: "Secondary categories added — up to 9 allowed, use what fits" }),
      h(Check, { text: "Phone number is your primary business line and matches your website exactly" }),
      h(Check, { text: "Website URL is correct and loads without errors" }),
      h(Check, { text: "Business address is accurate — or service area is set if you're mobile-only" }),
      h(Check, { text: "Service area cities match where you actually go to work" }),
    ),

    h(View, { style: S.card },
      h(Text, { style: S.cardTitle }, 'PART 2 — HOURS'),
      h(Check, { text: "Regular hours are current and reflect when you actually answer the phone" }),
      h(Check, { text: "Holiday hours are set for major holidays — don't leave it blank" }),
      h(Check, { text: "\"More hours\" added if applicable (e.g., emergency after-hours, by appointment)" }),
    ),

    h(View, { style: S.card },
      h(Text, { style: S.cardTitle }, 'PART 3 — SERVICES'),
      h(Check, { text: "All major services listed under the Services tab" }),
      h(Check, { text: "Each service has a description — at least 2 sentences describing what you actually do" }),
      h(Check, { text: "Prices added where you're comfortable quoting a starting range" }),
    ),
    h(PageFtr, { right: 'localsearchally.com/audit' }),
  ),

  // Part 4–7
  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: 'GBP Optimization Checklist' }),

    h(View, { style: S.card },
      h(Text, { style: S.cardTitle }, 'PART 4 — PHOTOS'),
      h(Check, { text: "At least 10 photos uploaded total" }),
      h(Check, { text: "Cover photo is professional — not a stock image or a cropped logo" }),
      h(Check, { text: "Logo is uploaded and current" }),
      h(Check, { text: "Work photos show completed jobs — before/after pairs work well" }),
      h(Check, { text: "Team or vehicle photos add a human element" }),
      h(Check, { text: "At least one new photo added in the last 30 days" }),
    ),

    h(View, { style: S.card },
      h(Text, { style: S.cardTitle }, 'PART 5 — POSTS'),
      h(Check, { text: "At least one GBP post published in the last 7 days" }),
      h(Check, { text: "Posts include a call to action (\"Call now,\" \"Book a service,\" \"Learn more\")" }),
      h(Check, { text: "Seasonal promotions posted before the season starts — not during" }),
    ),

    h(View, { style: S.card },
      h(Text, { style: S.cardTitle }, 'PART 6 — REVIEWS'),
      h(Check, { text: "You've responded to every review — 5 stars and 1 star alike" }),
      h(Check, { text: "Responses to negative reviews are calm, professional, and brief" }),
      h(Check, { text: "You have a repeatable process for asking happy customers to leave a review after a job" }),
    ),

    h(View, { style: S.card },
      h(Text, { style: S.cardTitle }, 'PART 7 — Q&A'),
      h(Check, { text: "You've seeded the Q&A section with your own questions and answers" }),
      h(Check, { text: "Questions cover what customers actually ask: service area, pricing range, response time" }),
      h(Check, { text: "Any customer-submitted questions have been answered" }),
    ),

    h(CTA),
    h(PageFtr, { right: 'localsearchally.com/audit' }),
  ),
)

// ─── Document 4: 5 Reasons Your Phone Isn't Ringing ──────────────────────────
const PhoneNotRinging = () =>
  h(Document, {
    author: 'Chad Smith — Local Search Ally',
    title: "5 Reasons Your Phone Isn't Ringing",
    subject: 'A diagnostic guide for NWA home service trade owners',
    creator: 'localsearchally.com',
  },

  // Cover
  h(Page, { size: 'LETTER', style: S.coverPage },
    h(View, null,
      h(Logo),
      h(Text, { style: S.coverTagline }, 'NWA CONTRACTOR SEO'),
    ),
    h(View, { style: { flex: 1, justifyContent: 'center' } },
      h(View, { style: S.coverDivider }),
      h(Text, { style: S.coverEyebrow }, 'DIAGNOSTIC GUIDE · NORTHWEST ARKANSAS · 2026'),
      h(Text, { style: { ...S.coverH1a, fontSize: 40 } }, '5 Reasons'),
      h(Text, { style: { ...S.coverH1b, fontSize: 40 } }, 'Your Phone'),
      h(Text, { style: { ...S.coverH1a, fontSize: 40 } }, "Isn't Ringing"),
      h(Text, { style: S.coverSubtitle },
        "If your business is solid but your phone is quiet, the problem isn't your work — it's your visibility. Here's what I find most often.",
      ),
      h(View, { style: S.coverMeta },
        h(Text, { style: S.coverMetaPill }, 'PDF'),
        h(Text, { style: S.coverMetaPill }, '~8 MIN READ'),
        h(Text, { style: S.coverMetaPill }, 'FREE'),
      ),
    ),
    h(View, { style: S.coverBottom },
      h(Text, { style: S.coverBottomText },
        'Chad Smith · Local Search Ally · Siloam Springs, AR · localsearchally.com · (479) 380-8626',
      ),
    ),
  ),

  // Reasons 1 & 2
  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: "5 Reasons Your Phone Isn't Ringing" }),
    h(Text, { style: { ...S.bodyMuted, marginBottom: 20 } },
      "These are the five things I find most often when I audit a contractor who should be getting more calls. If one sounds familiar, it's probably not the only one.",
    ),

    h(Text, { style: S.reasonNum }, '01'),
    h(Text, { style: S.reasonTitle }, "Your Google Business Profile is incomplete."),
    h(Text, { style: S.body },
      "You set it up once and never went back. Your primary category says \"Contractor.\" Your service area is blank or wrong. Your last photo was from three years ago. Google uses all of this to decide whether you're active, relevant, and worth showing.",
    ),
    h(Text, { style: S.body },
      "An abandoned GBP tells Google you're less serious than your competitors — and Google responds by ranking them above you.",
    ),
    h(FixIt, { text: "Set your primary category to your exact trade. Add your service area cities. Upload at least one photo from a recent job this week. These three things alone can move the needle." }),

    h(Divider),

    h(Text, { style: S.reasonNum }, '02'),
    h(Text, { style: S.reasonTitle }, "Your website doesn't say where you are."),
    h(Text, { style: S.body },
      "Google can't rank you for \"Rogers plumber\" if your website never says \"Rogers\" or \"plumber.\" Most contractor websites are vague — they say \"quality service\" but not \"emergency plumbing in Rogers, AR.\"",
    ),
    h(Text, { style: S.body },
      "Google needs to match your page to a specific search. Without the trade and city in your content, it has nothing to match.",
    ),
    h(FixIt, { text: "Check your homepage title tag right now. Does it say your trade and your city? If it just says your company name, that's the single highest-leverage fix you can make today." }),
    h(PageFtr, { right: 'localsearchally.com/audit' }),
  ),

  // Reasons 3 & 4
  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: "5 Reasons Your Phone Isn't Ringing" }),

    h(Text, { style: S.reasonNum }, '03'),
    h(Text, { style: S.reasonTitle }, "You're not in the Map Pack."),
    h(Text, { style: S.body },
      "The three businesses shown in the map block above Google's regular results get the majority of local clicks. If you're not in it, you're competing for a fraction of the traffic that the top three share.",
    ),
    h(Text, { style: S.body },
      "The Map Pack is driven by your GBP completeness, your review recency, and how well your website matches local search intent. All three work together — you can't win on just one.",
    ),
    h(FixIt, { text: "Treat your GBP like a second website. Keep it active — post weekly, get recent reviews, upload photos regularly. The Map Pack rewards recency and completeness more than any other single factor." }),

    h(Divider),

    h(Text, { style: S.reasonNum }, '04'),
    h(Text, { style: S.reasonTitle }, "Your reviews have gone cold."),
    h(Text, { style: S.body },
      "When was your last Google review? If the answer is \"a few months ago,\" that's a problem. Google and potential customers both notice. A profile with 8 reviews, the newest from last spring, looks less active than one with 12 reviews and one from last week.",
    ),
    h(Text, { style: S.body },
      "Review recency is a ranking signal. A pipeline of steady, recent reviews tells Google you're actively serving customers — and tells customers you're worth calling.",
    ),
    h(FixIt, { text: "Build a simple ask into your close. After a job goes well, text the customer a direct link to your Google review page. Make it easy. Most happy customers will leave one — they just need the link in hand and a reason to use it." }),
    h(PageFtr, { right: 'localsearchally.com/audit' }),
  ),

  // Reason 5 + CTA
  h(Page, { size: 'LETTER', style: S.page },
    h(PageHdr, { docTitle: "5 Reasons Your Phone Isn't Ringing" }),

    h(Text, { style: S.reasonNum }, '05'),
    h(Text, { style: S.reasonTitle }, "You're ranking for the wrong keywords — or none."),
    h(Text, { style: S.body },
      "Some contractors rank well — just not for what their customers are actually searching. \"Emergency AC repair Rogers AR\" and \"air conditioning contractor Rogers\" are different searches with different intent. If your site is built around one but not the other, you're leaving calls on the table.",
    ),
    h(Text, { style: S.body },
      "Other contractors aren't targeting any specific keywords — they have a website that says everything generally and nothing specifically. Google doesn't know what to rank them for, so it doesn't rank them for much.",
    ),
    h(FixIt, { text: "Think about how your customers describe their problem, not how you describe your service. \"My AC stopped working\" becomes \"AC repair near me\" — not \"HVAC maintenance services.\" Write your service pages the way a customer would search, not the way a trade school would define the work." }),

    h(Divider),
    h(Text, { style: S.h3 }, "What to do with this"),
    h(Text, { style: S.body },
      "You don't need to fix all five at once. Pick the one that hit closest to home and start there. The fixes are usually smaller than they look — a title tag change, a GBP category update, one text to a happy customer.",
    ),
    h(Text, { style: S.body },
      "Run the free SEO audit at localsearchally.com/audit to see which of these gaps apply to your business specifically. No email required — results in about 60 seconds.",
    ),

    h(CTA),
    h(Divider),
    h(Text, { style: S.footnote },
      "Chad Smith · Local Search Ally · Siloam Springs, AR · (479) 380-8626 · localsearchally.com",
    ),
    h(PageFtr, {}),
  ),
)

// ─── Generate ──────────────────────────────────────────────────────────────────
async function generate(component, filename) {
  await renderToFile(h(component, null), join(OUT, filename))
  console.log(`✓  ${filename}`)
}

async function main() {
  console.log('Generating PDFs → public/downloads/\n')
  await generate(InvisibilityReport,   'invisibility-report.pdf')
  await generate(LocalSEOChecklist,    'local-seo-checklist.pdf')
  await generate(GBPChecklist,         'gbp-optimization-checklist.pdf')
  await generate(PhoneNotRinging,      '5-reasons-phone-not-ringing.pdf')
  console.log('\nDone. Commit public/downloads/ to deploy.')
}

main().catch((err) => { console.error(err); process.exit(1) })
