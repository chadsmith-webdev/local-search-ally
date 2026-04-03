"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const SERVICES = [
  {
    eyebrow: "Local SEO",
    heading: "Get into the Map Pack for your trade in your city.",
    body: [
      'When someone in Rogers searches \u201cHVAC repair\u201d or a homeowner in Bentonville needs an emergency plumber, the three businesses in the map results get the overwhelming majority of calls. This service is built around getting you into that position.',
      "I handle GBP optimization, local citation cleanup, keyword research for your trade and service area, on-page SEO for your site, and content built to rank for searches your customers are actually making. Every month you get a report on what moved — rankings and calls, not impressions.",
      'Local SEO compounds. The contractor ranking first for \u201cplumber Fayetteville AR\u201d didn\'t get there in a week, but most of them got there because their competitors weren\'t paying attention. That gap is usually still open.',
      "Most businesses see their rankings moving in 60–90 days. I'll give you a realistic read on your trade and city before we start — not after you've already paid.",
    ],
    pricing: "Starting at $499/month",
    contract: "No contracts.",
    cta: { label: "Run your free audit first →", href: "/audit" },
    ctaNote: "It shows you exactly where you stand in search.",
    badge: null,
  },
  {
    eyebrow: "Web Design & Development",
    heading: "A site built to get you calls, not compliments.",
    body: [
      "Most contractor websites look fine and do nothing. Someone finds you in search, lands on the page, can't find the phone number without scrolling, has no idea what areas you serve, and leaves. The average contractor site converts under 2% of visitors. A site built for local search — fast, mobile, structured around how a homeowner actually decides to call — gets closer to 8–12%.",
      "The ranking you worked for turns into a visit. Whether that visit turns into a call depends entirely on what they find when they get there.",
      "I build custom sites for home service trades with click-to-call on every page, dedicated service pages for each job type you want to rank for, LocalBusiness schema markup so Google understands who you are, and a layout that answers the three questions every visitor has in the first ten seconds: Do you do what I need? Do you serve my area? Can I trust you?",
      "This isn't a template with your logo dropped in. And it's not built separately from your SEO — a site that doesn't convert wastes whatever position you've earned in search. I build both, so they work together. Most sites take 2–4 weeks from kickoff to launch.",
    ],
    pricing: "Starting at $799 one-time",
    contract: "No contracts.",
    cta: { label: "See what this looks like in the portfolio →", href: "/portfolio" },
    ctaNote: null,
    badge: null,
  },
  {
    eyebrow: "Google Business Profile",
    heading: "Your GBP is doing the first job interview. Most are failing it.",
    body: [
      "Before a homeowner calls you, they look at your Google Business Profile. They check your photos, read a couple of reviews, and decide in about thirty seconds whether you look like someone they'd trust with their house. Most contractor profiles are incomplete, outdated, and giving the wrong impression — not because the business is bad, but because nobody's paid attention to the profile.",
      "A fully optimized, actively managed GBP ranks higher than a neglected one. Google weighs activity — businesses that post regularly, respond to reviews, and keep their information accurate outrank ones that don't. This isn't a one-time setup. It's an ongoing signal.",
      "I handle the full profile audit and cleanup, category optimization, photo uploads, Q&A, weekly posts, and monthly adjustments based on what's actually moving things for your trade in your area.",
      "If you're not ready for full Local SEO yet, this is the right place to start — it's the highest-leverage single thing most contractors can do for their Map Pack position.",
    ],
    pricing: "Starting at $199/month",
    contract: "No contracts.",
    cta: { label: "Check your GBP with the free audit →", href: "/audit" },
    ctaNote: null,
    badge: "Most people start here.",
  },
  {
    eyebrow: "Reputation Management",
    heading: "You've done the work. Your reviews should show it.",
    body: [
      "78% of people trust online reviews as much as a personal recommendation. A contractor with twelve reviews and a 4.2 rating loses calls to a competitor with sixty reviews and a 4.8 — even if the work quality is the opposite. Reviews show up before your website, before your description, before anything else on your profile.",
      "Most contractors with few reviews aren't short on satisfied customers. They're short on a consistent way to ask.",
      "I set up a review request process that fits how your jobs actually close — text, email, or both — and write response templates for positive and negative reviews so you're not staring at the screen trying to figure out what to say every time one comes in. You get monthly reporting on review count, rating trend, and how you compare to the competitors showing up for your trade in your city.",
      "One thing I won't do: fake reviews, purchased reviews, or anything that puts your GBP at risk. The goal is a steady flow from real customers. It's slower than a shortcut and the only approach that holds up.",
    ],
    pricing: "Starting at $149/month",
    contract: "No contracts.",
    cta: { label: "See your current review standing in the free audit →", href: "/audit" },
    ctaNote: null,
    badge: null,
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="relative bg-[#0a0a0a]"
      style={{ paddingTop: "var(--section-spacing)", paddingBottom: "var(--section-spacing)" }}
      aria-labelledby="services-grid-heading"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #1e1e1e 20%, #1e1e1e 80%, transparent)" }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          paddingLeft: "var(--page-gutter)",
          paddingRight: "var(--page-gutter)",
        }}
      >
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: "720px", marginBottom: "5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7bafd4] bg-[rgba(123,175,212,0.1)] px-3 py-1 rounded">
              What I Do
            </span>
          </motion.div>
          <motion.h2
            id="services-grid-heading"
            variants={fadeUp}
            className="font-serif font-extrabold leading-[1.08] tracking-[-0.03em] text-[#f8f9fa]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            Here's what I do about each one.
          </motion.h2>
        </motion.div>

        {/* Service blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          {SERVICES.map((service, i) => (
            <ServiceBlock key={service.eyebrow} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceBlock({ service, index }) {
  const { eyebrow, heading, body, pricing, contract, cta, ctaNote, badge } = service;

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "2.5rem",
        paddingBottom: "5rem",
        borderBottom: "1px solid #1e1e1e",
      }}
      className="service-block"
    >
      {/* Top row — eyebrow + heading */}
      <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <span className="inline-block font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7bafd4] bg-[rgba(123,175,212,0.1)] px-3 py-1 rounded">
            {eyebrow}
          </span>
          {badge && (
            <span className="inline-block font-mono text-[0.6rem] font-bold tracking-[0.15em] uppercase text-[#0a1118] bg-[#7bafd4] px-3 py-1 rounded">
              {badge}
            </span>
          )}
        </div>

        <h3
          className="font-serif font-extrabold leading-[1.1] tracking-[-0.02em] text-[#f8f9fa]"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", maxWidth: "760px" }}
        >
          {heading}
        </h3>
      </motion.div>

      {/* Body copy + pricing + CTA */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2.5rem",
          alignItems: "start",
        }}
        className="service-body-grid"
      >
        {/* Body paragraphs */}
        <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          {body.map((para, j) => (
            <p
              key={j}
              className="text-[#b0b0b0] font-sans leading-[1.7]"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}
            >
              {para}
            </p>
          ))}
        </motion.div>

        {/* Pricing card */}
        <motion.div
          variants={fadeUp}
          style={{
            background: "#141414",
            border: "1px solid #1e1e1e",
            borderRadius: "12px",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
          className="service-pricing-card"
        >
          <div>
            <div
              className="font-mono font-bold text-[#f0f0f0]"
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", lineHeight: 1.2 }}
            >
              {pricing}
            </div>
            <div className="font-sans text-[#7bafd4] text-[0.8rem] font-semibold mt-1">
              {contract}
            </div>
          </div>

          <div
            className="h-px"
            style={{ background: "#1e1e1e" }}
            aria-hidden="true"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Link
              href={cta.href}
              className="font-sans text-[0.875rem] font-semibold text-[#7bafd4] hover:text-[#f0f0f0] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
            >
              {cta.label}
            </Link>
            {ctaNote && (
              <p className="font-sans text-[#888888] text-[0.8rem] leading-[1.5]">
                {ctaNote}
              </p>
            )}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .service-body-grid {
            grid-template-columns: 1fr 340px !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
