"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import CTAForm from "@/components/CTAForm";
import Starfield from "@/components/Starfield";

/* ── Reveal hook (matches homepage motion-reveal pattern) ── */

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      node.classList.add("visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.14 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0 }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className='svc-reveal'
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Icon components ── */

function IconBase({ children }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      style={{ width: "1.2rem", height: "1.2rem", display: "block" }}
    >
      {children}
    </svg>
  );
}

function SearchSignalIcon() {
  return (
    <IconBase>
      <circle cx='11' cy='11' r='5.5' />
      <path d='M15 15l5 5' />
      <path d='M11 3v2' />
      <path d='M3 11h2' />
      <path d='M17 11h2' />
      <path d='M11 17v2' />
    </IconBase>
  );
}

function CallFlowIcon() {
  return (
    <IconBase>
      <path d='M7.5 5.5c.6 2.1 1.7 4 3.3 5.7 1.7 1.6 3.6 2.7 5.7 3.3l1.8-1.8a1.4 1.4 0 0 1 1.4-.33l2 .67a1.4 1.4 0 0 1 .95 1.33V19a1.5 1.5 0 0 1-1.5 1.5C11.4 20.5 3.5 12.6 3.5 3.5A1.5 1.5 0 0 1 5 2h3.6a1.4 1.4 0 0 1 1.33.95l.67 2a1.4 1.4 0 0 1-.33 1.4L8.5 8.1' />
      <path d='M14 6h4v4' />
      <path d='M18 6l-5 5' />
    </IconBase>
  );
}

function MapPulseIcon() {
  return (
    <IconBase>
      <path d='M12 21s6-5.55 6-11a6 6 0 1 0-12 0c0 5.45 6 11 6 11Z' />
      <circle cx='12' cy='10' r='2.2' />
      <path d='M19 7c1.2.3 2.1.7 2.8 1.2' />
      <path d='M2.2 8.2c.7-.5 1.6-.9 2.8-1.2' />
    </IconBase>
  );
}

function BadgeStarIcon() {
  return (
    <IconBase>
      <path d='M12 3.5 14 7l3.8.6-2.7 2.7.7 3.8L12 12.4 8.2 14l.7-3.8L6.2 7.6 10 7l2-3.5Z' />
      <path d='M7 15.5v4l5-2.2 5 2.2v-4' />
    </IconBase>
  );
}

function SiteGridIcon() {
  return (
    <IconBase>
      <rect x='3' y='4' width='18' height='15.5' rx='2.5' />
      <path d='M3 8h18' />
      <path d='M8 19.5V8' />
      <path d='M14 19.5V8' />
    </IconBase>
  );
}

function CircuitSchemaIcon() {
  return (
    <IconBase>
      <path d='M6 6h4v4H6Z' />
      <path d='M14 14h4v4h-4Z' />
      <path d='M10 8h3a2 2 0 0 1 2 2v4' />
      <path d='M12 8v-3' />
      <path d='M12 3h3' />
      <path d='M18 12h3' />
    </IconBase>
  );
}

function TrendPulseIcon() {
  return (
    <IconBase>
      <path d='M4 17l5-5 3.5 3.5L20 8' />
      <path d='M14 8h6v6' />
      <path d='M4 20h16' />
    </IconBase>
  );
}

function ShieldCheckIcon() {
  return (
    <IconBase>
      <path d='M12 3l7 3.5v5c0 4.7-3 8.3-7 9.5-4-1.2-7-4.8-7-9.5v-5L12 3Z' />
      <path d='M9 12l2 2 4-4' />
    </IconBase>
  );
}

/* ── Data ── */

const gapPoints = [
  {
    title: "You show up on page two. Or not at all.",
    detail:
      "The customer searched, scrolled through the first few results, and called one of your competitors. Your business never entered the picture.",
    Icon: SearchSignalIcon,
  },
  {
    title: "Your site gets visits but not calls.",
    detail:
      "Traffic with no clear path to contact is just noise. If the layout, copy, or flow does not push toward a phone call, that visitor is gone in seconds.",
    Icon: CallFlowIcon,
  },
  {
    title: "You are invisible on the map.",
    detail:
      "When someone searches your trade plus a city name, the Map Pack decides who gets seen first. An unoptimized profile means you are not in that conversation.",
    Icon: MapPulseIcon,
  },
];

const services = [
  {
    title: "Local SEO",
    slug: "local-seo",
    tagline: "Show up when someone nearby searches for your trade",
    desc: "Local SEO is the foundation. It connects your business to the searches that actually lead to booked work. Citations, listings, on-page signals, and review strategy built around your specific trade and service area.",
    includes: [
      "Google Business Profile optimization",
      "Citation and listing cleanup",
      "Review generation strategy",
      "On-page SEO for service and location pages",
      "Monthly visibility reporting",
    ],
    outcome:
      "Your business starts appearing in the results where buyers are already looking. Calls come from people who searched for exactly what you do.",
    price: "Starting at $499/mo",
    priceAnchor: "A single booked job typically covers 1–2 months of service. Everything past that is a return on investment.",
    Icon: SearchSignalIcon,
    featured: true,
  },
  {
    title: "Google Business Profile",
    slug: "gbp-optimization",
    tagline: "Get into the Map Pack where buyers look first",
    desc: "Your GBP listing is usually the first thing a local customer sees. Most contractors set it up once and never touch it again. That is a missed opportunity every single day.",
    includes: [
      "Full profile audit and optimization",
      "Category, attribute, and service setup",
      "Photo strategy and posting schedule",
      "Q&A management and response templates",
    ],
    outcome:
      "Profile views turn into calls instead of scroll-pasts. You show up in the map results when it matters.",
    price: "Starting at $199",
    priceAnchor: "Your GBP is the highest-converting asset you own. For a fraction of the cost of a small gig, you lock down visibility for years.",
    Icon: BadgeStarIcon,
    featured: false,
  },
  {
    title: "Website design and development",
    slug: "web-development",
    tagline: "A site that does the selling for you",
    desc: "Mobile-first, fast-loading websites with SEO built into the structure. Not bolted on after. Built on modern frameworks because the speed difference shows up in rankings and in whether someone stays long enough to call.",
    includes: [
      "Custom design and development",
      "Mobile-first responsive layout",
      "On-page SEO foundation baked in",
      "Contact forms with click-to-call priority",
    ],
    outcome:
      "Visitors land on a page that loads fast, looks trustworthy, and makes calling you the obvious next step.",
    price: "Starting at $799",
    priceAnchor: "If an outdated site costs you just one mid-sized job a year, you are already losing more than this costs to build right.",
    Icon: SiteGridIcon,
    featured: false,
  },
  {
    title: "Reputation building",
    slug: "reputation-building",
    tagline: "Turn happy customers into visible proof",
    desc: "Reviews do not happen on their own. This sets up the system: follow-up messages, response templates, and monthly tracking so reviews come in steady instead of in random bursts.",
    includes: [
      "Review generation system",
      "Response templates for positive and negative reviews",
      "GBP review management",
      "Monthly reputation monitoring",
    ],
    outcome:
      "A consistent stream of fresh reviews that builds trust before a buyer ever picks up the phone.",
    price: "Starting at $99/mo",
    priceAnchor: "The cheapest, most direct way to build trust at scale. If it helps close one fence-sitter every six months, it paid for itself.",
    Icon: ShieldCheckIcon,
    featured: false,
  },
  {
    title: "Content and keywords",
    slug: "content-keywords",
    tagline: "Rank for the searches that lead to real calls",
    desc: "Generic service pages rank for nothing. Pages built around specific jobs in specific towns rank for the searches that lead to calls. This is how you stop competing with national directories.",
    includes: [
      "Keyword research for your trade and area",
      "Service page copywriting",
      "Location page creation",
      "Blog content strategy",
    ],
    outcome:
      "You rank for searches like 'plumber Rogers AR' and 'HVAC repair Bentonville.' The exact terms your next customer types.",
    price: "Starting at $299/mo",
    priceAnchor: "Rank for high-margin jobs, not just generic terms. The ROI on one targeted installation search covers the whole year.",
    Icon: CircuitSchemaIcon,
    featured: false,
  },
  {
    title: "SEO audit",
    slug: "seo-audits",
    tagline: "Find out exactly what is costing you calls",
    desc: "A full audit of your website and local presence. Technical SEO, content gaps, citation issues, competitor analysis. You get a clear report with prioritized fixes, not a 40-page PDF you will never read.",
    includes: [
      "Technical SEO analysis",
      "Local citation audit",
      "Competitor gap analysis",
      "Prioritized action plan",
    ],
    outcome:
      "You know exactly where you stand, what is broken, and what to fix first. No guessing.",
    price: "Starting at $299",
    priceAnchor: "Stop guessing why the phone isn't ringing. A clear roadmap is cheaper than another month of lost leads.",
    Icon: TrendPulseIcon,
    featured: false,
  },
];

const callExpectations = [
  "A plain-language read on what is helping or hurting your local visibility",
  "A shortlist of fixes most likely to matter first",
  "A clear answer on whether it makes sense to work together",
];

/* ── Section wrapper ── */

function Section({ id, eyebrow, title, subtitle, children, tone = "default" }) {
  const ref = useReveal();
  const sectionStyle =
    tone === "contrast"
      ? {
          background:
            "linear-gradient(180deg, rgba(1,33,105,0.12), rgba(1,33,105,0.04))",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }
      : { borderTop: "1px solid var(--border)" };

  return (
    <section
      id={id}
      className='svc-section'
      style={{
        padding: "clamp(4.5rem, 8vw, 8rem) clamp(1.25rem, 4vw, 2.5rem)",
        ...sectionStyle,
      }}
    >
      <div
        ref={ref}
        className='svc-reveal'
        style={{ maxWidth: "1120px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center" }}>
          <p className='svc-eyebrow'>{eyebrow}</p>
          <h2
            className='svc-heading'
            style={{ maxWidth: "none", margin: "0 auto" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className='svc-subtitle' style={{ margin: "0.75rem auto 0" }}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ── Main component ── */

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <style>{`
        /* ── Reveal animation (matches homepage) ── */
        .svc-reveal {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 650ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .svc-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Typography ── */
        .svc-eyebrow {
          margin: 0 0 0.85rem;
          font-family: var(--font-mono);
          color: var(--carolina);
          letter-spacing: 0.13em;
          text-transform: uppercase;
          font-size: 0.72rem;
        }
        .svc-heading {
          margin: 0;
          font-size: clamp(1.35rem, 6vw, 2.5rem);
          line-height: 1.18;
        }
        .svc-subtitle {
          margin: 0.75rem 0 0;
          color: var(--muted);
          line-height: 1.75;
          max-width: 64ch;
          font-size: 0.98rem;
        }

        /* ── Hero ── */
        .svc-hero {
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
          background:
            radial-gradient(circle at 90% 8%, rgba(123, 175, 212, 0.18), transparent 36%),
            radial-gradient(circle at 8% 0%, rgba(1, 33, 105, 0.24), transparent 34%),
            linear-gradient(180deg, #090d14, #06080c);
        }
        .svc-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(123, 175, 212, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123, 175, 212, 0.07) 1px, transparent 1px);
          background-size: 34px 34px;
          mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.65), transparent 80%);
          pointer-events: none;
          opacity: 0.3;
        }
        .svc-hero-inner {
          max-width: 780px;
          margin: 0 auto;
          padding: clamp(6rem, 10vw, 9rem) 1.5rem clamp(4rem, 6vw, 5.5rem);
          position: relative;
          z-index: 1;
        }
        .svc-hero-title {
          margin: 0 0 1rem;
          line-height: 1.08;
          letter-spacing: -0.02em;
          font-size: clamp(1.8rem, 4vw, 3.2rem);
        }
        .svc-hero-accent {
          display: block;
          margin-top: 0.14em;
          color: var(--carolina);
          font-style: italic;
          font-size: 0.94em;
          line-height: 1.08;
        }
        .svc-hero-copy {
          margin: 0 0 1.7rem;
          color: var(--muted);
          line-height: 1.75;
          max-width: 52ch;
          font-size: 1.02rem;
        }
        .svc-hero-actions {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
        }
        .svc-hero-actions a {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }

        /* ── Gap rows ── */
        .gap-list {
          margin-top: 2.75rem;
          display: grid;
          gap: 0;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
        .gap-row {
          display: grid;
          grid-template-columns: 3.5rem 1fr;
          gap: 1.25rem;
          align-items: start;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(123, 175, 212, 0.08);
        }
        .gap-row:first-child { padding-top: 0; }
        .gap-row:last-child { border-bottom: 0; padding-bottom: 0; }
        .gap-num {
          font-family: var(--font-mono);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--carolina);
          opacity: 0.18;
          line-height: 1;
          margin-top: 0.15rem;
          user-select: none;
        }
        .gap-body { display: grid; gap: 0.3rem; }
        .gap-title-row {
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }
        .gap-icon {
          color: var(--carolina);
          opacity: 0.75;
          flex-shrink: 0;
        }
        .gap-icon svg { width: 1.1rem; height: 1.1rem; }
        .gap-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text);
          margin: 0;
        }
        .gap-detail {
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Accordion ── */
        .accordion-wrap {
          margin-top: 2.75rem;
          max-width: 880px;
          margin-left: auto;
          margin-right: auto;
        }
        .accordion-item {
          border-bottom: 1px solid var(--border);
          transition: background-color 0.2s;
        }
        .accordion-item:first-child { border-top: 1px solid var(--border); }
        .accordion-trigger {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 1.75rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          text-align: left;
        }
        .accordion-trigger:focus-visible {
          outline: 2px solid var(--carolina);
          outline-offset: 4px;
          border-radius: 6px;
        }
        .accordion-trigger:hover .accordion-title {
          color: var(--carolina);
          text-shadow: 0 0 12px rgba(123,175,212,0.3);
        }
        .accordion-title {
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-weight: 700;
          color: var(--text);
          transition: color 0.2s, text-shadow 0.2s;
          margin: 0;
        }
        .accordion-tagline {
          color: var(--muted);
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
        .accordion-badge {
          background-color: rgba(123,175,212,0.15);
          border: 1px solid var(--carolina);
          color: var(--carolina);
          font-size: 0.65rem;
          font-weight: bold;
          padding: 0.2rem 0.65rem;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: inline-block;
          margin-bottom: 0.5rem;
        }
        .accordion-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--carolina);
          font-size: 1.1rem;
          transition: transform 0.3s, border-color 0.2s, box-shadow 0.2s;
        }
        .accordion-content {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        }
        .accordion-body {
          padding-bottom: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: start;
        }

        /* ── Includes list ── */
        .includes-list {
          margin: 0 0 1.25rem;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.6rem;
        }
        .includes-list li {
          display: flex;
          gap: 0.6rem;
          align-items: flex-start;
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.55;
        }
        .includes-check {
          color: var(--carolina);
          font-weight: 700;
          flex-shrink: 0;
          line-height: 1.55;
        }

        /* ── Outcome card ── */
        .outcome-card {
          background: rgba(13,17,23,0.7);
          border: 1px solid var(--border);
          border-left: 4px solid var(--carolina);
          border-radius: 0 10px 10px 0;
          padding: 1.5rem;
          backdrop-filter: blur(12px);
          box-shadow: inset 4px 0 12px rgba(123,175,212,0.05);
        }
        .outcome-label {
          color: var(--muted);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
          font-family: var(--font-mono);
        }
        .outcome-text {
          color: var(--text);
          font-size: 0.95rem;
          line-height: 1.65;
          margin: 0;
        }
        .pricing-wrap {
          margin: 1.5rem 0;
          padding-top: 1.25rem;
          border-top: 1px dashed rgba(123, 175, 212, 0.2);
        }
        .pricing-amount {
          font-family: var(--font-display);
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--carolina);
          margin: 0 0 0.35rem;
          line-height: 1.1;
        }
        .pricing-anchor {
          font-size: 0.85rem;
          color: var(--text);
          opacity: 0.85;
          line-height: 1.55;
          margin: 0;
        }

        /* ── Strategy call exchange ── */
        .call-exchange {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          margin-top: 2.75rem;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
        }
        .call-offer { display: grid; gap: 1.2rem; }
        .call-offer-headline {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;
          line-height: 1.2;
          color: var(--text);
          margin: 0;
        }
        .call-offer-headline em {
          font-style: normal;
          color: var(--carolina);
        }
        .call-offer-sub {
          color: var(--muted);
          font-size: 0.92rem;
          line-height: 1.6;
          margin: 0;
        }
        .call-offer .btn-glow {
          justify-self: start;
          min-height: 44px;
        }
        .call-outcomes { display: grid; gap: 0; }
        .call-outcome-row {
          display: grid;
          grid-template-columns: 2rem 1fr;
          gap: 0.75rem;
          align-items: start;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(123, 175, 212, 0.08);
        }
        .call-outcome-row:last-child { border-bottom: 0; padding-bottom: 0; }
        .call-outcome-num {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--carolina);
          opacity: 0.6;
          margin-top: 0.12rem;
        }
        .call-outcome-text {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.55;
          margin: 0;
        }

        /* ── Final CTA band ── */
        .final-band {
          margin-top: 2rem;
          border: 1px solid var(--border-hover);
          border-radius: 16px;
          padding: 2.5rem;
          background: linear-gradient(135deg, rgba(123,175,212,0.14), rgba(1,33,105,0.2));
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.16);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .final-left { display: grid; gap: 1.2rem; }
        .final-headline {
          font-family: var(--font-display);
          font-size: 1.55rem;
          font-weight: 800;
          line-height: 1.25;
          color: var(--text);
          margin: 0;
        }
        .final-sub {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }
        .final-trust { display: grid; gap: 0.6rem; margin-top: 0.4rem; }
        .final-trust-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--muted);
          font-size: 0.85rem;
        }
        .final-trust-icon {
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 50%;
          background: rgba(123, 175, 212, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--carolina);
          font-size: 0.72rem;
          flex-shrink: 0;
        }

        /* ── Motion ── */
        .motion-arrow {
          transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        a:hover .motion-arrow {
          transform: translateX(4px);
        }

        /* ── Responsive ── */
        @media (max-width: 780px) {
          .final-band {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 1.5rem;
          }
          .final-left { text-align: center; }
          .final-trust { justify-items: center; }
        }
        @media (max-width: 768px) {
          .accordion-body { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          .call-exchange {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            text-align: center;
          }
          .call-offer .btn-glow { justify-self: center; }
        }
        @media (max-width: 640px) {
          .svc-hero-inner {
            padding: 4.5rem 1.1rem 2.5rem;
          }
          .svc-hero-title {
            font-size: clamp(1.55rem, 6.5vw, 2rem);
          }
          .svc-hero-actions {
            width: 100%;
            flex-direction: column;
          }
          .svc-hero-actions a {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
          .gap-row {
            grid-template-columns: 1fr;
            gap: 0.4rem;
            padding: 1.25rem 0;
          }
          .gap-num {
            font-size: 1.15rem;
            margin-top: 0;
            margin-bottom: 0.5rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .svc-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .motion-arrow { transition: none; }
        }
      `}</style>

      {/* ────── Hero ────── */}
      <section className='svc-hero'>
        <Starfield />
        <div className='svc-hero-inner'>
          <div className='svc-reveal visible'>
            <p className='svc-eyebrow'>
              What we fix
            </p>
            <h1 className='svc-hero-title'>
              Right now, someone is searching
              for your trade in your town.
              <span className='svc-hero-accent'>
                Will they find you or your competitor?
              </span>
            </h1>
            <p className='svc-hero-copy'>
              Every service here targets a specific part of the path between
              a local search and a booked call. No filler packages. Just the
              work that makes your phone ring from the right people.
            </p>
            <div className='svc-hero-actions'>
              <Link href='/contact' className='btn-glow'>
                Book your strategy call <span className='motion-arrow'>→</span>
              </Link>
              <a href='#services-list' className='btn-outline-glow'>
                See what we do <span className='motion-arrow'>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────── The Gap ────── */}
      <Section
        id='the-gap'
        eyebrow='The gap'
        title='The work that is costing you calls right now'
        subtitle='These are not future risks. They are happening in your market today, and each one is a fixable problem.'
      >
        <div className='gap-list'>
          {gapPoints.map(({ title, detail, Icon }, index) => (
            <Reveal key={title} delay={index * 80}>
              <div className='gap-row'>
                <span className='gap-num'>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className='gap-body'>
                  <div className='gap-title-row'>
                    <span className='gap-icon'>
                      <Icon />
                    </span>
                    <h3 className='gap-title'>{title}</h3>
                  </div>
                  <p className='gap-detail'>{detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Link href='/contact' className='btn-glow'>
            Find out which gaps are costing you{" "}
            <span className='motion-arrow'>→</span>
          </Link>
        </div>
      </Section>

      {/* ────── Service Accordion ────── */}
      <Section
        id='services-list'
        eyebrow='Where the work happens'
        title='Each service targets a different part of the path to a booked call'
        subtitle='Start with one. Stack as needed. Every piece connects.'
        tone='contrast'
      >
        <div className='accordion-wrap'>
          {services.map((service, i) => (
            <div
              key={service.title}
              id={service.slug}
              className='accordion-item'
            >
              <button
                className='accordion-trigger'
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`svc-panel-${i}`}
              >
                <div>
                  {service.featured && (
                    <span className='accordion-badge'>
                      Most contractors start here
                    </span>
                  )}
                  <p className='accordion-title'>{service.title}</p>
                  <p className='accordion-tagline'>{service.tagline}</p>
                </div>
                <div
                  className='accordion-icon'
                  style={{
                    borderColor:
                      open === i ? "var(--carolina)" : "var(--border)",
                    transform: open === i ? "rotate(45deg)" : "none",
                    boxShadow:
                      open === i
                        ? "0 0 10px rgba(123,175,212,0.3)"
                        : "none",
                  }}
                >
                  +
                </div>
              </button>

              <div
                id={`svc-panel-${i}`}
                className='accordion-content'
                style={{
                  maxHeight: open === i ? "700px" : "0px",
                  opacity: open === i ? 1 : 0,
                }}
              >
                <div className='accordion-body'>
                  {/* Left: description + includes */}
                  <div>
                    <p
                      style={{
                        color: "var(--muted)",
                        lineHeight: 1.75,
                        marginBottom: "1.25rem",
                        fontSize: "0.95rem",
                      }}
                    >
                      {service.desc}
                    </p>
                    <ul className='includes-list'>
                      {service.includes.map((item) => (
                        <li key={item}>
                          <span className='includes-check'>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: outcome + CTA */}
                  <div className='outcome-card'>
                    <p className='outcome-label'>What this changes</p>
                    <p className='outcome-text'>{service.outcome}</p>
                    <div className='pricing-wrap'>
                      <p className='pricing-amount'>{service.price}</p>
                      <p className='pricing-anchor'>{service.priceAnchor}</p>
                    </div>
                    <Link
                      href='/contact'
                      className='btn-glow'
                      style={{
                        display: "block",
                        textAlign: "center",
                        fontSize: "0.9rem",
                      }}
                    >
                      Talk about {service.title.toLowerCase()}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ────── Strategy Call ────── */}
      <Section
        id='strategy-call'
        eyebrow='Talk to a real person'
        title='What you will get from the call'
        subtitle='No hard pitch. You leave with clear priorities and a realistic next move.'
      >
        <div className='call-exchange'>
          <Reveal>
            <div className='call-offer'>
              <p className='call-offer-headline'>
                <em>Free.</em> 30 minutes.
                <br />
                No pitch.
              </p>
              <p className='call-offer-sub'>
                Just a clear read on where you stand and what would move the
                needle first.
              </p>
              <Link href='/contact' className='btn-glow'>
                Book your strategy call{" "}
                <span className='motion-arrow'>→</span>
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className='call-outcomes'>
              {callExpectations.map((item, i) => (
                <div className='call-outcome-row' key={i}>
                  <span className='call-outcome-num'>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className='call-outcome-text'>{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ────── FAQ ────── */}
      <Section
        id='faq'
        eyebrow='Common questions'
        title='The questions you are probably already asking'
        subtitle='If the answer you need is not here, ask on the strategy call. No topic is off limits.'
        tone='contrast'
      >
        <Reveal>
          <div
            style={{
              maxWidth: 680,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "2.75rem",
            }}
          >
            <FAQSection />
          </div>
        </Reveal>
      </Section>

      {/* ────── Final CTA ────── */}
      <Section
        id='final-cta'
        eyebrow='Next step'
        title='Your next customer is already searching.'
        subtitle='If there is a fit, you will know exactly what to do next. If there is not, you still leave with useful direction.'
      >
        <Reveal>
          <div className='final-band'>
            <div className='final-left'>
              <p className='final-headline'>
                Get a clear read on where you stand and what to fix first.
              </p>
              <p className='final-sub'>
                No contracts, no agency runaround. Just a direct conversation
                about your local visibility and the fastest path to more calls.
              </p>
              <div className='final-trust'>
                <div className='final-trust-item'>
                  <span className='final-trust-icon'>✓</span>
                  Free, no obligation
                </div>
                <div className='final-trust-item'>
                  <span className='final-trust-icon'>✓</span>
                  30 minutes, focused on your business
                </div>
                <div className='final-trust-item'>
                  <span className='final-trust-icon'>✓</span>
                  You leave with a clear next step either way
                </div>
              </div>
            </div>
            <CTAForm />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
