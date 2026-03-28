"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "./FAQSection";
import CTAForm from "./CTAForm";

const heroSignals = [
  {
    title: "Visibility scan",
    detail:
      "Review how you appear in local search before buyers choose someone else.",
    Icon: SearchSignalIcon,
  },
  {
    title: "Lead path check",
    detail: "Find the friction between search traffic and booked calls.",
    Icon: CallFlowIcon,
  },
  {
    title: "Local intent",
    detail: "Tighten the location signals that support trust and action.",
    Icon: MapPulseIcon,
  },
];

const problemPoints = [
  {
    title: "Hard to find locally",
    detail:
      "You do the work, but when someone nearby searches for your trade, your competitors show up first.",
    Icon: SearchSignalIcon,
  },
  {
    title: "Visitors leave without calling",
    detail:
      "People land on your site and leave. No clear path from \u2018I need this fixed\u2019 to \u2018I just booked a call.\u2019",
    Icon: CallFlowIcon,
  },
  {
    title: "Referrals are the only pipeline",
    detail:
      "When word-of-mouth slows down, there is nothing else generating calls. That is a single point of failure.",
    Icon: MapPulseIcon,
  },
];

const stakes = [
  {
    label: "Calls going to competitors",
    detail:
      "People ready to book are calling someone else because they found them first.",
    level: 92,
    severity: "high",
  },
  {
    label: "Relying only on word-of-mouth",
    detail:
      "When referrals slow down, there is nothing else filling the pipeline.",
    level: 74,
    severity: "mid",
  },
  {
    label: "Less skilled competitors winning work",
    detail:
      "They are not better at the job. They are just easier to find online.",
    level: 61,
    severity: "mid",
  },
];

const guideCredentials = [
  {
    value: "5+",
    label: "Years doing local SEO",
  },
  {
    value: "100%",
    label: "Built for contractors and local service businesses",
  },
  {
    value: "1:1",
    label: "Direct access to the person doing the work",
  },
];

const guidePrinciples = [
  "Start with the visibility problems that are costing calls right now.",
  "Fix the on-site path so search traffic has a clearer route to contact.",
  "Track what changes, keep what works, and cut what does not.",
];

const fitGood = [
  "Home service trades that want more qualified local calls",
  "Owners who want a practical, no-fluff strategy",
  "Businesses ready to improve both visibility and conversion",
];

const fitBad = [
  "Businesses looking for overnight ranking promises",
  "Teams shopping for the cheapest possible option only",
  "Brands focused on broad national campaigns with no local intent",
];

const steps = [
  {
    title: "Audit",
    detail:
      "We review your local visibility, service pages, and competitor presence to find the highest-impact gaps.",
    Icon: AuditGridIcon,
  },
  {
    title: "Fix Priority Gaps",
    detail:
      "We improve what matters first: local relevance, on-page clarity, and lead paths that support calls.",
    Icon: WrenchSignalIcon,
  },
  {
    title: "Grow and Track",
    detail:
      "We monitor progress and adjust based on what improves visibility and call quality.",
    Icon: TrendPulseIcon,
  },
];

const services = [
  {
    title: "Google Business Profile",
    detail:
      "Get into the map results when someone nearby searches for what you do. Most contractors leave easy wins on the table here.",
    Icon: BadgeStarIcon,
  },
  {
    title: "Local SEO + service pages",
    detail:
      "Rank for the jobs and areas you actually want. Not vanity keywords\u2009\u2014\u2009the searches that lead to real calls.",
    Icon: SiteGridIcon,
  },
  {
    title: "Website conversion",
    detail:
      "Stop losing the visitors you already get. Small changes to layout, copy, and contact flow turn traffic into booked work.",
    Icon: CallFlowIcon,
  },
  {
    title: "Technical SEO + schema",
    detail:
      "Help search engines trust and surface your pages faster. The part most agencies skip because it\u2019s not flashy.",
    Icon: CircuitSchemaIcon,
  },
];

const demos = [
  {
    trade: "Plumbing",
    goal: "Generate emergency and maintenance calls from local search",
    stack: "Service pages, LocalBusiness schema, click-to-call priority",
    cta: "View plumbing demo",
    Icon: PipeMarkIcon,
  },
  {
    trade: "HVAC",
    goal: "Capture seasonal demand with clear offer and booking paths",
    stack: "Location intent pages, FAQ schema, conversion-focused layout",
    cta: "View HVAC demo",
    Icon: AirFlowIcon,
  },
  {
    trade: "Electrical",
    goal: "Build trust for higher-ticket jobs and panel upgrades",
    stack: "Authority content structure, review strategy, lead form flow",
    cta: "View electrical demo",
    Icon: BoltMarkIcon,
  },
];

const technicalPoints = [
  {
    title: "Schema tied to page intent",
    detail:
      "Without structured data, Google guesses what your pages are about. With it, your services, service areas, and reviews show up faster\u2009\u2014\u2009and in richer results.",
    Icon: CircuitSchemaIcon,
  },
  {
    title: "Site architecture built to surface",
    detail:
      "Most contractor sites are a flat pile of pages. A clear hierarchy tells search engines which pages matter and how they connect to each other.",
    Icon: SiteGridIcon,
  },
  {
    title: "Pages matched to real searches",
    detail:
      "Generic service pages rank for nothing. Pages built around specific jobs in specific towns rank for the searches that lead to calls.",
    Icon: MapPulseIcon,
  },
  {
    title: "Tracking that filters the noise",
    detail:
      "Most analytics count bot visits and accidental clicks as wins. This measures qualified calls and form fills\u2009\u2014\u2009the signals that tell you what is actually working.",
    Icon: TrendPulseIcon,
  },
];

const callExpectations = [
  "A plain-language read on what is helping or hurting your local visibility",
  "A shortlist of fixes most likely to matter first",
  "A clear answer on whether it makes sense to work together",
];

const cinematicSectionIds = new Set(["problem", "plan", "final-cta"]);

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

function AuditGridIcon() {
  return (
    <IconBase>
      <rect x='3.5' y='3.5' width='17' height='17' rx='2.5' />
      <path d='M8.5 3.5v17' />
      <path d='M15.5 3.5v17' />
      <path d='M3.5 8.5h17' />
      <path d='M3.5 15.5h17' />
    </IconBase>
  );
}

function WrenchSignalIcon() {
  return (
    <IconBase>
      <path d='M14.5 5.5a3.5 3.5 0 0 0-4.7 4.6L4.5 15.4a1.8 1.8 0 0 0 2.5 2.5l5.3-5.3a3.5 3.5 0 0 0 4.6-4.7l-2.4 2.4-2.4-2.4 2.4-2.4Z' />
      <path d='M18 3v3' />
      <path d='M19.5 4.5h-3' />
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

function PipeMarkIcon() {
  return (
    <IconBase>
      <path d='M6 5v6a3 3 0 0 0 3 3h9' />
      <path d='M10 5v5a2 2 0 0 0 2 2h6' />
      <path d='M18 8v8' />
      <path d='M4 5h8' />
    </IconBase>
  );
}

function AirFlowIcon() {
  return (
    <IconBase>
      <path d='M4 9c1.7-1.7 4.4-1.7 6.1 0 .9.9 2.1 1.3 3.3 1.3h6.6' />
      <path d='M4 14c1.2-1.2 3.2-1.2 4.4 0 .8.8 1.8 1.2 2.9 1.2H20' />
      <path d='M15 6h5' />
    </IconBase>
  );
}

function BoltMarkIcon() {
  return (
    <IconBase>
      <path d='M13 2 6 13h5l-1 9 8-12h-5l1-8Z' />
    </IconBase>
  );
}

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
      className='motion-reveal'
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Section({ id, eyebrow, title, subtitle, children, tone = "default" }) {
  const ref = useReveal();
  const isCinematic = cinematicSectionIds.has(id);
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
      className={
        isCinematic ? "story-section story-section-cinematic" : "story-section"
      }
      style={{
        padding: "clamp(4.5rem, 8vw, 8rem) clamp(1.25rem, 4vw, 2.5rem)",
        ...sectionStyle,
      }}
    >
      <div
        ref={ref}
        className='motion-reveal'
        style={{ maxWidth: "1120px", margin: "0 auto" }}
      >
        <div style={{ textAlign: "center" }}>
          <p className='story-eyebrow'>{eyebrow}</p>
          <h2
            className='story-title'
            style={{ maxWidth: "none", margin: "0 auto" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className='story-subtitle' style={{ margin: "0.75rem auto 0" }}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function PlanTimeline() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`plan-timeline ${visible ? "plan-timeline-visible" : ""}`}
      ref={ref}
    >
      <div className='plan-track' aria-hidden='true'>
        <div className='plan-track-fill' />
      </div>
      {steps.map(({ title, detail, Icon }, idx) => (
        <div
          className='plan-node'
          key={title}
          style={{ transitionDelay: `${idx * 180}ms` }}
        >
          <div className='plan-node-dot'>
            <span className='plan-node-num'>
              {String(idx + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className='plan-node-title'>{title}</h3>
          <p className='plan-node-detail'>{detail}</p>
        </div>
      ))}
    </div>
  );
}

function FitBoard() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className='fit-board' ref={ref}>
      <div className='fit-col fit-col-good'>
        <h3 className='fit-col-title fit-col-title-good'>Best fit</h3>
        <ul className='fit-list'>
          {fitGood.map((item, i) => (
            <li
              key={item}
              className={`fit-item fit-item-good ${visible ? "fit-item-visible" : ""}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className='fit-icon fit-icon-good'>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='fit-divider'>
        <span className='fit-vs'>vs</span>
      </div>
      <div className='fit-col fit-col-bad'>
        <h3 className='fit-col-title fit-col-title-bad'>Not a fit</h3>
        <ul className='fit-list'>
          {fitBad.map((item, i) => (
            <li
              key={item}
              className={`fit-item fit-item-bad ${visible ? "fit-item-visible" : ""}`}
              style={{ transitionDelay: `${i * 120 + 200}ms` }}
            >
              <span className='fit-icon fit-icon-bad'>✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ListCard({ title, items, icon = "✓", kind = "neutral" }) {
  const borderColor = kind === "alert" ? "#bf3f3f" : "var(--carolina)";
  const iconColor = kind === "alert" ? "#bf3f3f" : "var(--carolina)";

  return (
    <div
      className='story-card story-card-elevated'
      style={{
        borderLeft: `4px solid ${borderColor}`,
      }}
    >
      <h3
        style={{
          margin: "0 0 0.8rem",
          fontSize: "1.05rem",
          color: "var(--text)",
          fontFamily: "var(--font-display)",
        }}
      >
        {title}
      </h3>
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "grid",
          gap: "0.7rem",
        }}
      >
        {items.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              gap: "0.65rem",
              alignItems: "flex-start",
            }}
          >
            <span
              style={{ color: iconColor, fontWeight: 700, lineHeight: 1.5 }}
            >
              {icon}
            </span>
            <span
              style={{
                color: "var(--muted)",
                lineHeight: 1.65,
                fontSize: "0.95rem",
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const trustItems = [
  { label: "Home service trades only", Icon: MapPulseIcon },
  { label: "Google Business Profile optimization", Icon: BadgeStarIcon },
  { label: "Built to get you found locally", Icon: CircuitSchemaIcon },
  { label: "Local intent focus", Icon: SearchSignalIcon },
  { label: "Strategy-first process", Icon: CallFlowIcon },
  { label: "No generic packages", Icon: WrenchSignalIcon },
  { label: "NWA-based specialist", Icon: MapPulseIcon },
  { label: "Transparent reporting", Icon: TrendPulseIcon },
];

function TrustMarquee() {
  return (
    <div className='trust-strip'>
      <div className='trust-track' aria-hidden='true'>
        {[...trustItems, ...trustItems].map(({ label, Icon }, i) => (
          <span className='trust-item' key={i}>
            <span className='trust-item-icon'>
              <Icon />
            </span>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

function LeakMeter() {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setProgress(1);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        setProgress((prev) => Math.max(prev, ratio));
        if (ratio >= 0.95) {
          setProgress(1);
          observer.unobserve(entry.target);
        }
      },
      { threshold: Array.from({ length: 40 }, (_, i) => i / 39) },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className='leak-meter-wrap' ref={wrapRef}>
      {stakes.map(({ label, detail, level, severity }) => {
        const w = Math.min(level, Math.round(level * progress));
        return (
          <div className='leak-row' key={label}>
            <div className='leak-row-head'>
              <span className='leak-label'>{label}</span>
              <span className='leak-pct'>{w}%</span>
            </div>
            <p className='leak-detail'>{detail}</p>
            <div className='leak-track'>
              <div
                className={`leak-fill leak-fill-${severity}`}
                style={{ width: `${w}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SignalBackdrop() {
  return (
    <div className='hero-backdrop' aria-hidden='true'>
      <div className='hero-radar-center'>
        <div className='hero-radar-ring hero-radar-ring-a' />
        <div className='hero-radar-ring hero-radar-ring-b' />
        <div className='hero-radar-core' />
        <div className='hero-radar-sweep' />
      </div>
      <div className='hero-scan-line hero-scan-line-a' />
      <div className='hero-scan-line hero-scan-line-b' />
      <div className='hero-signal-node hero-signal-node-a' />
      <div className='hero-signal-node hero-signal-node-b' />
      <div className='hero-signal-node hero-signal-node-c' />
    </div>
  );
}

function CardHeader({ Icon, title }) {
  return (
    <div className='story-card-head'>
      <span className='story-card-icon'>
        <Icon />
      </span>
      <h3>{title}</h3>
    </div>
  );
}

export default function HomeClient({ posts }) {
  const featuredPosts = posts.slice(0, 3);

  return (
    <>
      <style>{`
        @keyframes radarPulse {
          0% { transform: scale(0.82); opacity: 0.06; }
          55% { opacity: 0.24; }
          100% { transform: scale(1.18); opacity: 0; }
        }
        @keyframes radarSweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes scanDrift {
          0% { transform: translateX(-12%); opacity: 0; }
          40% { opacity: 0.45; }
          100% { transform: translateX(12%); opacity: 0; }
        }
        @keyframes floatNode {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.35; }
          50% { transform: translateY(-10px) scale(1.08); opacity: 0.85; }
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .leak-meter-wrap {
          margin-top: 2.75rem;
          display: grid;
          gap: 1.75rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .leak-row {
          display: grid;
          gap: 0.35rem;
        }
        .leak-row-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 0.5rem;
        }
        .leak-label {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text);
        }
        .leak-pct {
          font-size: 0.78rem;
          font-family: var(--font-mono, monospace);
          color: var(--carolina);
          opacity: 0.75;
          flex-shrink: 0;
        }
        .leak-detail {
          font-size: 0.84rem;
          color: var(--muted);
          margin: 0 0 0.5rem;
          line-height: 1.5;
        }
        .leak-track {
          height: 6px;
          border-radius: 999px;
          background: rgba(123, 175, 212, 0.12);
          overflow: hidden;
        }
        .leak-fill {
          height: 100%;
          border-radius: 999px;
          transition: width 120ms ease-out;
        }
        .leak-fill-high {
          background: linear-gradient(90deg, #7bafd4 0%, #b44f4f 100%);
        }
        .leak-fill-mid {
          background: linear-gradient(90deg, #7bafd4 0%, #c98a3c 100%);
        }
        @media (prefers-reduced-motion: reduce) {
          .leak-fill { transition: none; }
        }
        .motion-reveal {
          opacity: 0;
          transform: translateY(26px);
          transition:
            opacity 650ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .motion-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .story-section {
          position: relative;
        }
        @media (min-width: 981px) {
          .story-section-cinematic {
            min-height: 78vh;
            display: grid;
            align-items: center;
          }
        }
        .story-shell {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          border-bottom: 1px solid var(--border);
          background:
            radial-gradient(circle at 90% 8%, rgba(123, 175, 212, 0.22), transparent 36%),
            radial-gradient(circle at 8% 0%, rgba(1, 33, 105, 0.28), transparent 34%),
            linear-gradient(180deg, #090d14, #06080c);
        }
        .story-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(123, 175, 212, 0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123, 175, 212, 0.09) 1px, transparent 1px);
          background-size: 34px 34px;
          mask-image: radial-gradient(circle at center, rgba(0, 0, 0, 0.75), transparent 80%);
          pointer-events: none;
          opacity: 0.35;
        }
        .hero-backdrop {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-radar-ring,
        .hero-radar-core,
        .hero-radar-sweep {
          position: absolute;
          inset: 0;
          border-radius: 50%;
        }
        .hero-radar-center {
          position: absolute;
          left: 50%;
          top: 50%;
          width: clamp(34rem, 72vw, 62rem);
          aspect-ratio: 1;
          transform: translate(-50%, -50%);
        }
        .hero-radar-ring {
          border: 1px solid rgba(123, 175, 212, 0.14);
        }
        .hero-radar-ring-a {
          animation: radarPulse 4.5s linear infinite;
        }
        .hero-radar-ring-b {
          animation: radarPulse 4.5s linear infinite 1.5s;
        }
        .hero-radar-core {
          background: radial-gradient(circle, rgba(123, 175, 212, 0.14), rgba(123, 175, 212, 0.02) 52%, transparent 72%);
          opacity: 0.62;
        }
        .hero-radar-sweep {
          background: conic-gradient(from 120deg, transparent 0deg, rgba(123, 175, 212, 0.22) 48deg, transparent 90deg);
          mix-blend-mode: screen;
          animation: radarSweep 10s linear infinite;
          opacity: 0.52;
        }
        .hero-scan-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(123, 175, 212, 0.45), transparent);
          opacity: 0;
        }
        .hero-scan-line-a {
          top: 25%;
          animation: scanDrift 7s linear infinite;
        }
        .hero-scan-line-b {
          top: 68%;
          animation: scanDrift 8.5s linear infinite 1.2s;
        }
        .hero-signal-node {
          position: absolute;
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: var(--carolina);
          box-shadow: 0 0 22px rgba(123, 175, 212, 0.42);
          animation: floatNode 4s ease-in-out infinite;
        }
        .hero-signal-node-a { left: 66%; top: 30%; }
        .hero-signal-node-b { left: 74%; top: 49%; animation-delay: 1.2s; }
        .hero-signal-node-c { left: 60%; top: 66%; animation-delay: 2.1s; }
        .hero-wrap {
          max-width: 860px;
          margin: 0 auto;
          min-height: 100vh;
          box-sizing: border-box;
          padding: clamp(5.25rem, 8vw, 7rem) 1.5rem clamp(4rem, 6vw, 5.5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .hero-title {
          margin: 0 0 1rem auto;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.04;
          letter-spacing: -0.02em;
          font-size: clamp(2rem, 4.4vw, 4.2rem);
          width: 100%;
        }
        .hero-title-lead {
          display: block;
        }
        .hero-title-lead-line {
          display: block;
          white-space: nowrap;
        }
        .hero-title-accent {
          display: block;
          margin-top: 0.14em;
          color: var(--carolina);
          font-style: italic;
          font-size: 0.94em;
          line-height: 1.02;
          white-space: nowrap;
        }
        .hero-copy {
          margin: 0 auto 1.7rem;
          color: var(--muted);
          line-height: 1.75;
          max-width: 52ch;
          font-size: 1.02rem;
        }
        .hero-actions {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .hero-actions a,
        .story-section-action a,
        .story-card-link {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
        }
        .motion-arrow {
          transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        a:hover .motion-arrow,
        .story-card:hover .motion-arrow {
          transform: translateX(4px);
        }
        .trust-strip {
          width: 100%;
          overflow: hidden;
          background: rgba(6, 8, 12, 0.97);
          border-top: 1px solid rgba(123, 175, 212, 0.1);
          border-bottom: 1px solid rgba(123, 175, 212, 0.1);
          padding: 0.8rem 0;
        }
        .trust-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 44s linear infinite;
        }
        .trust-strip:hover .trust-track {
          animation-play-state: paused;
        }
        .trust-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0 2.75rem;
          font-size: 0.77rem;
          color: var(--muted);
          white-space: nowrap;
          font-family: var(--font-mono);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-right: 1px solid rgba(123, 175, 212, 0.1);
        }
        .trust-item-icon {
          color: var(--carolina);
          opacity: 0.75;
          flex-shrink: 0;
        }
        .hero-card {
          background: rgba(13, 17, 23, 0.58);
          border: 1px solid var(--border-hover);
          border-radius: 16px;
          padding: 1.25rem;
          box-shadow: 0 14px 50px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
          position: relative;
          overflow: hidden;
          margin-top: 2rem;
          width: 100%;
          max-width: 36rem;
          text-align: left;
        }
        .hero-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(130deg, rgba(123, 175, 212, 0.12), transparent 46%);
          pointer-events: none;
        }
        .hero-card h3 {
          margin: 0 0 0.9rem;
          font-size: 0.92rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--carolina);
          font-family: var(--font-mono);
        }
        .hero-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.82rem;
        }
        .hero-list li {
          color: var(--muted);
          line-height: 1.5;
          font-size: 0.9rem;
          display: grid;
          grid-template-columns: 2.25rem 1fr;
          gap: 0.7rem;
          align-items: start;
          position: relative;
        }
        .hero-list-icon {
          width: 2.25rem;
          height: 2.25rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(123, 175, 212, 0.08);
          color: var(--carolina);
          border: 1px solid rgba(123, 175, 212, 0.18);
        }
        .story-eyebrow {
          margin: 0 0 0.85rem;
          font-family: var(--font-mono);
          color: var(--carolina);
          letter-spacing: 0.13em;
          text-transform: uppercase;
          font-size: 0.72rem;
        }
        .story-title {
          margin: 0;
          font-size: clamp(1.5rem, 3.2vw, 2.5rem);
          line-height: 1.18;
          max-width: 18ch;
        }
        .story-subtitle {
          margin: 0.75rem 0 0;
          color: var(--muted);
          line-height: 1.75;
          max-width: 64ch;
          font-size: 0.98rem;
        }
        .story-section-action {
          margin-top: 1.2rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .story-grid-3 {
          margin-top: 2.75rem;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(1rem, 2vw, 1.5rem);
        }
        .story-grid-2 {
          margin-top: 2.75rem;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1rem, 2vw, 1.5rem);
        }
        .story-card {
          background: color-mix(in oklab, var(--surface) 88%, white 12%);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.4rem;
          height: 100%;
          transition:
            transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 260ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .story-card-elevated,
        .story-card-interactive,
        .blog-item {
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
        }
        .story-card-interactive:hover,
        .story-card-elevated:hover,
        .blog-item:hover {
          transform: translateY(-5px);
          border-color: var(--border-hover);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(123, 175, 212, 0.06);
        }
        .story-card-head {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.72rem;
        }
        .story-card-icon {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 0.8rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--carolina);
          background: linear-gradient(135deg, rgba(123, 175, 212, 0.16), rgba(1, 33, 105, 0.12));
          border: 1px solid rgba(123, 175, 212, 0.18);
          transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 260ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .story-card:hover .story-card-icon {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 0 18px rgba(123, 175, 212, 0.2);
        }
        .story-card h3 {
          margin: 0;
          font-size: 1rem;
          font-family: var(--font-display);
          color: var(--text);
        }
        .story-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 0.93rem;
        }
        .guide-photo-card {
          display: grid;
          gap: 0.95rem;
        }
        .guide-quote {
          margin: 0;
          padding: 0.1rem 0 0.2rem;
          border: 0;
          background: transparent;
        }
        .guide-quote-text {
          margin: 0;
          color: color-mix(in oklab, var(--text) 85%, var(--muted) 15%);
          line-height: 1.65;
          font-size: 0.9rem;
          font-style: italic;
        }
        .guide-quote-attribution {
          display: block;
          margin-top: 0.5rem;
          color: color-mix(in oklab, var(--carolina) 66%, var(--muted) 34%);
          font-size: 0.74rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          opacity: 0.76;
        }
        .guide-credentials {
          display: grid;
          gap: 0.72rem;
        }
        .guide-credential {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          gap: 0.9rem;
          padding: 0.9rem 1rem;
          border-radius: 12px;
          border: 1px solid rgba(123, 175, 212, 0.12);
          background: color-mix(in oklab, var(--surface) 92%, white 8%);
          box-shadow: inset 3px 0 0 rgba(123, 175, 212, 0.88);
        }
        .guide-credential-value {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--carolina);
          min-width: 2.6rem;
        }
        .guide-credential-label {
          color: var(--muted);
          font-size: 0.92rem;
          line-height: 1.5;
        }
        .guide-sidebar {
          display: grid;
          gap: 1.1rem;
          align-content: start;
          padding-top: 0.25rem;
        }
        .guide-sidebar-heading {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text);
          margin: 0;
        }
        .guide-sidebar p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 0.93rem;
        }
        .guide-principles {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.7rem;
        }
        .guide-principles li {
          padding-left: 1rem;
          position: relative;
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.92rem;
        }
        .guide-principles li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.72rem;
          width: 0.38rem;
          height: 0.38rem;
          border-radius: 999px;
          background: var(--carolina);
          box-shadow: 0 0 0 4px rgba(123, 175, 212, 0.1);
        }
        .guide-sidebar-link {
          color: var(--carolina);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          transition: text-decoration 200ms;
        }
        .guide-sidebar-link:hover {
          text-decoration: underline;
        }
        .fit-board {
          margin-top: 2.75rem;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0;
          max-width: 780px;
          margin-left: auto;
          margin-right: auto;
        }
        .fit-col {
          padding: 0 clamp(0.8rem, 2vw, 1.8rem);
        }
        .fit-col-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          margin: 0 0 1.1rem;
        }
        .fit-col-title-good {
          color: var(--carolina);
        }
        .fit-col-title-bad {
          color: #bf3f3f;
        }
        .fit-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 0.85rem;
        }
        .fit-item {
          display: flex;
          gap: 0.65rem;
          align-items: flex-start;
          opacity: 0;
          transform: translateY(10px);
          transition:
            opacity 420ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fit-item-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fit-item-good.fit-item-visible {
          opacity: 1;
        }
        .fit-item-bad.fit-item-visible span:last-child {
          color: color-mix(in oklab, var(--muted) 70%, transparent 30%);
          text-decoration: line-through;
          text-decoration-color: rgba(191, 63, 63, 0.35);
          text-decoration-thickness: 1.5px;
        }
        .fit-icon {
          font-weight: 700;
          line-height: 1.5;
          flex-shrink: 0;
        }
        .fit-icon-good {
          color: var(--carolina);
          text-shadow: 0 0 8px rgba(123, 175, 212, 0.4);
        }
        .fit-icon-bad {
          color: #bf3f3f;
          opacity: 0.7;
        }
        .fit-item span:last-child {
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.95rem;
          transition: color 400ms, text-decoration-color 400ms;
        }
        .fit-item-good.fit-item-visible span:last-child {
          color: var(--text);
        }
        .fit-divider {
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(123, 175, 212, 0.2) 20%,
            rgba(123, 175, 212, 0.2) 80%,
            transparent 100%
          );
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .fit-vs {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--muted);
          background: var(--bg-contrast, var(--bg));
          padding: 0.5rem 0.2rem;
          opacity: 0.55;
        }
        @media (max-width: 640px) {
          .fit-board {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .fit-divider {
            width: 100%;
            height: 1px;
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(123, 175, 212, 0.2) 20%,
              rgba(123, 175, 212, 0.2) 80%,
              transparent 100%
            );
          }
          .fit-vs {
            top: 50%;
            left: 50%;
            padding: 0.2rem 0.5rem;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .fit-item {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
        .plan-timeline {
          margin-top: 2.75rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1rem, 2.5vw, 2rem);
          position: relative;
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
        }
        .plan-track {
          position: absolute;
          top: 1.35rem;
          left: calc(1.35rem + 4%);
          right: calc(1.35rem + 4%);
          height: 2px;
          background: rgba(123, 175, 212, 0.12);
          border-radius: 999px;
          overflow: hidden;
        }
        .plan-track-fill {
          width: 0%;
          height: 100%;
          background: linear-gradient(90deg, var(--carolina), color-mix(in oklab, var(--carolina) 40%, transparent 60%));
          border-radius: 999px;
          transition: width 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
        }
        .plan-timeline-visible .plan-track-fill {
          width: 100%;
        }
        .plan-node {
          display: grid;
          gap: 0.6rem;
          justify-items: center;
          text-align: center;
          opacity: 0;
          transform: translateY(14px);
          transition:
            opacity 500ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .plan-timeline-visible .plan-node {
          opacity: 1;
          transform: translateY(0);
        }
        .plan-node-dot {
          width: 2.7rem;
          height: 2.7rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: color-mix(in oklab, var(--surface) 85%, white 15%);
          border: 2px solid rgba(123, 175, 212, 0.25);
          position: relative;
          z-index: 1;
          transition: border-color 500ms, box-shadow 500ms;
        }
        .plan-timeline-visible .plan-node-dot {
          border-color: var(--carolina);
          box-shadow: 0 0 14px rgba(123, 175, 212, 0.2);
        }
        .plan-node-num {
          font-size: 0.78rem;
          font-family: var(--font-mono, monospace);
          font-weight: 700;
          color: var(--carolina);
          letter-spacing: 0.05em;
        }
        .plan-node-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: 1.02rem;
          color: var(--text);
        }
        .plan-node-detail {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.9rem;
          max-width: 28ch;
        }
        @media (max-width: 700px) {
          .plan-timeline {
            grid-template-columns: 1fr;
            gap: 2.2rem;
            padding-left: 3rem;
          }
          .plan-track {
            top: 0;
            bottom: 0;
            left: 1.35rem;
            right: auto;
            width: 2px;
            height: auto;
          }
          .plan-track-fill {
            width: 100%;
            height: 0%;
            transition: height 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
          }
          .plan-timeline-visible .plan-track-fill {
            height: 100%;
            width: 100%;
          }
          .plan-node {
            justify-items: start;
            text-align: left;
            position: relative;
            padding-left: 0.5rem;
          }
          .plan-node-dot {
            position: absolute;
            left: -3rem;
            top: 0;
          }
          .plan-node-detail {
            max-width: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .plan-node {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .plan-track-fill {
            transition: none;
          }
        }
        .plan-success {
          margin-top: 3rem;
          padding: 2rem;
          border: 1px solid var(--border);
          border-radius: 12px;
          background: var(--surface);
        }
        .plan-success-heading {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .plan-success-items {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .plan-success-item {
          text-align: center;
        }
        .plan-success-icon {
          display: block;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .plan-success-item p {
          font-size: 0.92rem;
          color: var(--muted);
          line-height: 1.5;
          margin: 0;
        }
        @media (max-width: 600px) {
          .plan-success-items {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }
        .svc-manifest {
          margin-top: 2.75rem;
          display: grid;
          gap: 0;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }
        .svc-row {
          display: grid;
          grid-template-columns: 2.2rem 1fr;
          gap: 1rem;
          align-items: start;
          padding: 1.5rem 0.75rem;
          border-bottom: 1px solid rgba(123, 175, 212, 0.08);
          border-radius: 10px;
          transition: background 0.2s ease-out, transform 0.2s ease-out;
        }
        .svc-row:hover {
          background: rgba(123, 175, 212, 0.04);
          transform: translateX(4px);
        }
        .svc-row:first-child {
          padding-top: 1rem;
        }
        .svc-row:last-child {
          border-bottom: 0;
        }
        .svc-icon {
          width: 2.2rem;
          height: 2.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--carolina);
          opacity: 0.85;
          margin-top: 0.1rem;
          flex-shrink: 0;
        }
        .svc-icon svg {
          width: 1.25rem;
          height: 1.25rem;
        }
        .svc-content {
          display: grid;
          gap: 0.3rem;
        }
        .svc-title {
          font-family: var(--font-display);
          font-size: 1.08rem;
          font-weight: 700;
          color: var(--text);
          margin: 0;
        }
        .svc-detail {
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.65;
          margin: 0;
        }
        .svc-cta-wrap {
          margin-top: 2.5rem;
          text-align: center;
        }
        .svc-cta-wrap .btn-outline-glow:focus-visible {
          outline: 2px solid var(--carolina);
          outline-offset: 3px;
        }
        .svc-cta-wrap .btn-outline-glow {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .svc-row {
            transition: none;
          }
          .svc-row:hover {
            transform: none;
          }
        }
        .story-card-link {
          margin-top: 0.9rem;
          color: var(--carolina);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.85rem;
        }
        .story-card-link:hover {
          text-decoration: underline;
        }

        /* ── Demo Browser Frames ── */
        .demo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          margin-top: 2.75rem;
        }
        @media (max-width: 840px) {
          .demo-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .demo-frame {
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--surface);
          overflow: hidden;
          transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;
        }
        .demo-frame:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.18);
        }
        .demo-chrome {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.85rem;
          background: rgba(123, 175, 212, 0.06);
          border-bottom: 1px solid var(--border);
        }
        .demo-dots {
          display: flex;
          gap: 5px;
          flex-shrink: 0;
        }
        .demo-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(123, 175, 212, 0.22);
        }
        .demo-url {
          flex: 1;
          background: rgba(0,0,0,0.12);
          border-radius: 5px;
          padding: 0.22rem 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--muted);
          letter-spacing: 0.02em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .demo-body {
          padding: 1.35rem 1.25rem 1.5rem;
        }
        .demo-trade {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 1rem;
        }
        .demo-trade-icon {
          color: var(--carolina);
          opacity: 0.85;
          flex-shrink: 0;
        }
        .demo-trade-icon svg {
          width: 1.15rem;
          height: 1.15rem;
        }
        .demo-trade-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text);
          margin: 0;
        }
        .demo-field {
          margin-bottom: 0.65rem;
        }
        .demo-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--carolina);
          opacity: 0.7;
          margin-bottom: 0.15rem;
        }
        .demo-value {
          color: var(--muted);
          font-size: 0.86rem;
          line-height: 1.55;
          margin: 0;
        }
        .demo-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          margin-top: 0.6rem;
          color: var(--carolina);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.82rem;
          min-height: 44px;
        }
        .demo-cta:hover {
          text-decoration: underline;
        }
        .demo-cta:focus-visible {
          outline: 2px solid var(--carolina);
          outline-offset: 2px;
          border-radius: 4px;
        }
        @media (prefers-reduced-motion: reduce) {
          .demo-frame {
            transition: none;
          }
          .demo-frame:hover {
            transform: none;
          }
        }

        /* ── Technical Terminal ── */
        .tech-terminal {
          margin-top: 2.75rem;
          max-width: 640px;
          margin-left: auto;
          margin-right: auto;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: color-mix(in oklab, var(--bg) 94%, black 6%);
          overflow: hidden;
        }
        .tech-terminal-bar {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.5rem 0.9rem;
          background: rgba(0, 0, 0, 0.18);
          border-bottom: 1px solid var(--border);
        }
        .tech-terminal-dots {
          display: flex;
          gap: 5px;
        }
        .tech-terminal-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .tech-terminal-dots span:nth-child(1) { background: #ff5f57; }
        .tech-terminal-dots span:nth-child(2) { background: #febc2e; }
        .tech-terminal-dots span:nth-child(3) { background: #28c840; }
        .tech-terminal-title {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--muted);
          letter-spacing: 0.04em;
        }
        .tech-terminal-body {
          padding: 1.5rem 1.35rem 1.75rem;
          display: grid;
          gap: 0;
        }
        .tech-line {
          display: grid;
          grid-template-columns: 1.4rem 1fr;
          gap: 0.7rem;
          align-items: start;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(123, 175, 212, 0.06);
        }
        .tech-line:first-child {
          padding-top: 0;
        }
        .tech-line:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }
        .tech-prompt {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--carolina);
          opacity: 0.7;
          margin-top: 0.08rem;
          user-select: none;
        }
        .tech-line-content {
          display: grid;
          gap: 0.2rem;
        }
        .tech-line-title {
          font-family: var(--font-mono);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--carolina);
          margin: 0;
        }
        .tech-line-detail {
          color: var(--muted);
          font-size: 0.84rem;
          line-height: 1.6;
          margin: 0;
        }

        /* ── Strategy Call Value Exchange ── */
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
        @media (max-width: 700px) {
          .call-exchange {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
        }
        .call-offer {
          display: grid;
          gap: 1.2rem;
        }
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
        .call-offer .btn-glow:focus-visible {
          outline: 2px solid var(--carolina);
          outline-offset: 3px;
        }
        @media (max-width: 700px) {
          .call-offer .btn-glow {
            justify-self: center;
          }
        }
        .call-outcomes {
          display: grid;
          gap: 0;
        }
        .call-outcome-row {
          display: grid;
          grid-template-columns: 2rem 1fr;
          gap: 0.75rem;
          align-items: start;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(123, 175, 212, 0.08);
        }
        .call-outcome-row:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }
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

        /* ── Problem Numbered Rows ── */
        .prob-list {
          margin-top: 2.75rem;
          display: grid;
          gap: 0;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
        .prob-row {
          display: grid;
          grid-template-columns: 3.5rem 1fr;
          gap: 1.25rem;
          align-items: start;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(123, 175, 212, 0.08);
        }
        .prob-row:first-child {
          padding-top: 0;
        }
        .prob-row:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }
        .prob-num {
          font-family: var(--font-mono);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--carolina);
          opacity: 0.18;
          line-height: 1;
          margin-top: 0.15rem;
          user-select: none;
        }
        .prob-body {
          display: grid;
          gap: 0.3rem;
        }
        .prob-title-row {
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }
        .prob-icon {
          color: var(--carolina);
          opacity: 0.75;
          flex-shrink: 0;
        }
        .prob-icon svg {
          width: 1.1rem;
          height: 1.1rem;
        }
        .prob-title {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text);
          margin: 0;
        }
        .prob-detail {
          color: var(--muted);
          font-size: 0.88rem;
          line-height: 1.6;
          margin: 0;
        }
        .step-num {
          display: inline-block;
          margin-bottom: 0.7rem;
          font-size: 0.78rem;
          font-family: var(--font-mono);
          color: var(--carolina);
          letter-spacing: 0.08em;
        }
        .blog-item {
          display: block;
          text-decoration: none;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: color-mix(in oklab, var(--surface) 90%, white 10%);
          padding: 1.4rem;
          transition:
            border-color var(--transition-base),
            transform 0.25s ease-out,
            box-shadow 0.25s ease-out;
          height: 100%;
        }
        .blog-item:hover {
          border-color: var(--border-hover);
          transform: translateY(-3px);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.14);
        }
        .blog-item:focus-visible {
          outline: 2px solid var(--carolina);
          outline-offset: 3px;
        }
        .blog-item h3 {
          margin: 0.45rem 0 0.6rem;
          font-size: 1rem;
          line-height: 1.4;
          color: var(--text);
        }
        .blog-item p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
          font-size: 0.88rem;
        }
        .blog-date {
          color: var(--carolina);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          letter-spacing: 0.03em;
        }

        /* ── Blog Featured Layout ── */
        .blog-featured {
          margin-top: 2.75rem;
          display: grid;
          gap: 1.5rem;
        }
        .blog-hero-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: color-mix(in oklab, var(--surface) 90%, white 10%);
          overflow: hidden;
          text-decoration: none;
          transition:
            border-color var(--transition-base),
            transform 0.25s ease-out,
            box-shadow 0.25s ease-out;
        }
        .blog-hero-card:hover {
          border-color: var(--border-hover);
          transform: translateY(-3px);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.14);
        }
        .blog-hero-card:focus-visible {
          outline: 2px solid var(--carolina);
          outline-offset: 3px;
        }
        .blog-hero-left {
          padding: 1.8rem 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.5rem;
        }
        .blog-hero-left h3 {
          font-size: 1.2rem;
          line-height: 1.35;
          color: var(--text);
          margin: 0.3rem 0 0;
        }
        .blog-hero-right {
          padding: 1.8rem 1.6rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-left: 1px solid var(--border);
        }
        .blog-hero-right p {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.65;
          margin: 0;
        }
        .blog-secondary {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 700px) {
          .blog-hero-card {
            grid-template-columns: 1fr;
          }
          .blog-hero-right {
            border-left: 0;
            border-top: 1px solid var(--border);
            padding-top: 1.2rem;
          }
          .blog-secondary {
            grid-template-columns: 1fr;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .blog-item,
          .blog-hero-card {
            transition: none;
          }
          .blog-item:hover,
          .blog-hero-card:hover {
            transform: none;
          }
        }
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
        .final-left {
          display: grid;
          gap: 1.2rem;
        }
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
        .final-trust {
          display: grid;
          gap: 0.6rem;
          margin-top: 0.4rem;
        }
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
        @media (max-width: 780px) {
          .final-band {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 1.5rem;
          }
          .final-left {
            text-align: center;
          }
          .final-trust {
            justify-items: center;
          }
        }
        @media (max-width: 980px) {
          .story-grid-2,
          .story-grid-3 {
            grid-template-columns: 1fr;
          }
          .hero-wrap {
            padding-top: 5.4rem;
            min-height: auto;
          }
          .story-title {
            max-width: none;
          }
          .hero-radar-center {
            width: 30rem;
          }
          .hero-signal-node-a { left: 68%; top: 24%; }
          .hero-signal-node-b { left: 76%; top: 44%; }
          .hero-signal-node-c { left: 58%; top: 61%; }
        }
        @media (max-width: 740px) {
          .hero-radar-center {
            width: 24rem;
          }
          .hero-radar-core,
          .hero-radar-sweep { opacity: 0.44; }
          .hero-signal-node-a { left: 66%; top: 21%; }
          .hero-signal-node-b { left: 74%; top: 40%; }
          .hero-signal-node-c { left: 57%; top: 56%; }
        }
        @media (max-width: 640px) {
          .hero-radar-center {
            width: 20.5rem;
          }
          .hero-radar-core,
          .hero-radar-sweep { opacity: 0.38; }
          .hero-wrap {
            min-height: auto;
            padding: 4.25rem 1.1rem 2.5rem;
          }
          .hero-title {
            font-size: clamp(1.55rem, 6.5vw, 2rem);
          }
          .hero-title-lead-line,
          .hero-title-accent {
            white-space: normal;
          }
          .hero-title-accent {
            font-size: 1em;
          }
          .hero-copy {
            font-size: 0.88rem;
            line-height: 1.6;
            margin-bottom: 1.25rem;
          }
          .hero-card {
            max-width: 100%;
            padding: 0.9rem;
            margin-top: 1.25rem;
          }
          .hero-list {
            gap: 0.6rem;
          }
          .hero-list li {
            font-size: 0.83rem;
          }
          .hero-list-icon {
            width: 1.85rem;
            height: 1.85rem;
          }
          .hero-actions {
            width: 100%;
            flex-direction: column;
          }
          .hero-actions a {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .trust-track {
            animation: none;
          }
          .motion-reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .hero-radar-ring,
          .hero-radar-sweep,
          .hero-scan-line,
          .hero-signal-node {
            animation: none !important;
          }
          .story-card,
          .story-card-icon,
          .motion-arrow,
          .blog-item {
            transition: none !important;
          }
        }
      `}</style>

      <section className='story-shell'>
        <SignalBackdrop />
        <div className='hero-wrap'>
          <div className='motion-reveal visible'>
            <p className='story-eyebrow'>
              NWA roots, serving home service trades
            </p>
            <h1 className='hero-title'>
              <span className='hero-title-lead'>
                <span className='hero-title-lead-line'>Your next customer</span>
                <span className='hero-title-lead-line'>
                  just searched Google.
                </span>
              </span>
              <span className='hero-title-accent'>
                They found your competitor.
              </span>
            </h1>
            <p className='hero-copy'>
              Home service buyers usually choose from the first trustworthy
              options they see. Local Search Ally helps you improve local
              visibility, tighten your lead path, and turn more searches into
              booked calls.
            </p>
            <div className='hero-actions'>
              <Link href='/contact' className='btn-glow'>
                Book your strategy call <span className='motion-arrow'>→</span>
              </Link>
              <Link href='/services' className='btn-outline-glow'>
                See how it works <span className='motion-arrow'>→</span>
              </Link>
            </div>
          </div>
          <div
            className='hero-card motion-reveal visible'
            style={{ transitionDelay: "120ms" }}
          >
            <h3>What you get on the first call</h3>
            <ul className='hero-list'>
              {heroSignals.map(({ title, detail, Icon }) => (
                <li key={title}>
                  <span className='hero-list-icon'>
                    <Icon />
                  </span>
                  <span>
                    <strong
                      style={{
                        color: "var(--text)",
                        display: "block",
                        marginBottom: "0.16rem",
                      }}
                    >
                      {title}
                    </strong>
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TrustMarquee />

      <Section
        id='problem'
        eyebrow='The gap'
        title='Good work does not guarantee the phone rings.'
        subtitle='Most customers pick from whoever shows up first. If that is not you, skill alone will not close the gap.'
      >
        <div className='prob-list'>
          {problemPoints.map(({ title, detail, Icon }, index) => (
            <Reveal key={title} delay={index * 80}>
              <div className='prob-row'>
                <span className='prob-num'>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className='prob-body'>
                  <div className='prob-title-row'>
                    <span className='prob-icon'>
                      <Icon />
                    </span>
                    <h3 className='prob-title'>{title}</h3>
                  </div>
                  <p className='prob-detail'>{detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id='guide'
        eyebrow='Who is behind this'
        title='I get it. You are good at your trade, not at marketing it.'
        subtitle='That is not a weakness. It is a gap, and it is exactly what Local Search Ally was built to close.'
      >
        <div className='story-grid-2'>
          <Reveal>
            <div className='story-card story-card-elevated guide-photo-card'>
              <Image
                src='/images/chad.avif'
                alt='Chad Smith'
                width={560}
                height={560}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  border: "1px solid var(--border)",
                }}
              />
              <blockquote className='guide-quote'>
                <p className='guide-quote-text'>
                  "Good contractors stay invisible online all the time. Not
                  because they&apos;re bad at their job. The ones who show up
                  just figured out how local search works. That&apos;s a
                  learnable thing, and it&apos;s what I do."
                </p>
                <span className='guide-quote-attribution'>
                  — Chad Smith, Local Search Ally
                </span>
              </blockquote>
              <div className='guide-credentials'>
                {guideCredentials.map(({ value, label }) => (
                  <div className='guide-credential' key={label}>
                    <span className='guide-credential-value'>{value}</span>
                    <span className='guide-credential-label'>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className='guide-sidebar'>
              <h3 className='guide-sidebar-heading'>
                Straight answers, direct execution
              </h3>
              <p>
                You work directly with the person doing the analysis and the
                work. No account managers, no vague reporting, and no recycled
                agency playbook.
              </p>
              <p>
                If something is weak, I will tell you. If something is working,
                I will protect it. The only metric that matters is whether your
                phone rings more from the right searches.
              </p>
              <ul className='guide-principles'>
                {guidePrinciples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href='/about' className='guide-sidebar-link'>
                See how I work <span className='motion-arrow'>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        id='fit'
        eyebrow='Is this right for you'
        title='Who this is for and who it is not for'
        subtitle='Honest fit means better results. Here is who gets the most from this.'
        tone='contrast'
      >
        <FitBoard />
      </Section>

      <Section
        id='plan'
        eyebrow='How it works'
        title='Three steps from invisible to booked'
        subtitle='No long mystery playbook. Just a practical sequence that maps to visibility and lead quality.'
      >
        <PlanTimeline />
        <Reveal delay={200}>
          <div className='plan-success'>
            <h3 className='plan-success-heading'>
              What this looks like when it is working
            </h3>
            <div className='plan-success-items'>
              <div className='plan-success-item'>
                <span className='plan-success-icon'>📞</span>
                <p>
                  Your phone rings from people who searched for your exact
                  service in your area
                </p>
              </div>
              <div className='plan-success-item'>
                <span className='plan-success-icon'>📅</span>
                <p>
                  Your schedule fills from online searches, not just referrals
                </p>
              </div>
              <div className='plan-success-item'>
                <span className='plan-success-icon'>📈</span>
                <p>
                  You see which searches bring calls and which pages earn work
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Link href='/contact' className='btn-glow'>
            Book your strategy call <span className='motion-arrow'>→</span>
          </Link>
        </div>
      </Section>

      <Section
        id='stakes'
        eyebrow='The cost of waiting'
        title='Every week this stays unfixed, calls go somewhere else'
        subtitle='These are not hypothetical risks. They are happening right now in your market.'
        tone='contrast'
      >
        <Reveal>
          <LeakMeter />
        </Reveal>
      </Section>

      <Section
        id='services'
        eyebrow='What you get'
        title='Where the work happens'
        subtitle='Each piece targets a different part of the path between someone searching and your phone ringing.'
      >
        <div className='svc-manifest'>
          {services.map(({ title, detail, Icon }, index) => (
            <Reveal key={title} delay={index * 40}>
              <div className='svc-row'>
                <span className='svc-icon'>
                  <Icon />
                </span>
                <div className='svc-content'>
                  <h3 className='svc-title'>{title}</h3>
                  <p className='svc-detail'>{detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className='svc-cta-wrap'>
          <Link href='/services' className='btn-outline-glow'>
            See full service breakdown <span className='motion-arrow'>→</span>
          </Link>
        </div>
      </Section>

      <Section
        id='demo-websites'
        eyebrow='Built to convert'
        title='What a contractor website should actually look like'
        subtitle='Each build is structured for local search, designed to convert, and built the same way a client site would be.'
        tone='contrast'
      >
        <div className='demo-grid'>
          {demos.map(({ trade, goal, stack, cta, Icon }, index) => (
            <Reveal key={trade} delay={index * 100}>
              <div className='demo-frame'>
                <div className='demo-chrome'>
                  <span className='demo-dots'>
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className='demo-url'>
                    localsearchally.com/{trade.toLowerCase()}-demo
                  </span>
                </div>
                <div className='demo-body'>
                  <div className='demo-trade'>
                    <span className='demo-trade-icon'>
                      <Icon />
                    </span>
                    <h3 className='demo-trade-name'>{trade}</h3>
                  </div>
                  <div className='demo-field'>
                    <div className='demo-label'>Goal</div>
                    <p className='demo-value'>{goal}</p>
                  </div>
                  <div className='demo-field'>
                    <div className='demo-label'>Built with</div>
                    <p className='demo-value'>{stack}</p>
                  </div>
                  <Link href='/portfolio' className='demo-cta'>
                    {cta} <span className='motion-arrow'>→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Link href='/portfolio' className='btn-outline-glow'>
            View all sample builds <span className='motion-arrow'>→</span>
          </Link>
        </div>
      </Section>

      <Section
        id='technical-credibility'
        eyebrow='Under the hood'
        title='The layer most agencies skip'
        subtitle='None of this is visible to your customers. All of it is visible to Google.'
      >
        <Reveal>
          <div className='tech-terminal'>
            <div className='tech-terminal-bar'>
              <span className='tech-terminal-dots'>
                <span />
                <span />
                <span />
              </span>
              <span className='tech-terminal-title'>local-search-audit</span>
            </div>
            <div className='tech-terminal-body'>
              {technicalPoints.map(({ title, detail }) => (
                <div className='tech-line' key={title}>
                  <span className='tech-prompt'>→</span>
                  <div className='tech-line-content'>
                    <h3 className='tech-line-title'>{title}</h3>
                    <p className='tech-line-detail'>{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        id='strategy-call'
        eyebrow='Talk to a real person'
        title='What you will get from the call'
        subtitle='No hard pitch. You leave with clear priorities and a realistic next move.'
        tone='contrast'
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
                Book your strategy call <span className='motion-arrow'>→</span>
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

      {featuredPosts.length > 0 && (
        <Section
          id='blog'
          eyebrow='Learn before you commit'
          title='Practical local search resources'
          subtitle='No email gate. No sales funnel. Just useful reads about how this stuff works.'
        >
          <div className='blog-featured'>
            {/* Featured hero post */}
            <Reveal>
              <Link
                href={`/blog/${featuredPosts[0].slug}`}
                className='blog-hero-card'
              >
                <div className='blog-hero-left'>
                  <span className='blog-date'>
                    {new Date(featuredPosts[0].date).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      },
                    )}
                  </span>
                  <h3>{featuredPosts[0].title}</h3>
                  <span
                    className='story-card-link'
                    style={{ marginTop: "0.4rem" }}
                  >
                    Read article <span className='motion-arrow'>→</span>
                  </span>
                </div>
                <div className='blog-hero-right'>
                  <p>{featuredPosts[0].description}</p>
                </div>
              </Link>
            </Reveal>

            {/* Secondary posts */}
            {featuredPosts.length > 1 && (
              <div className='blog-secondary'>
                {featuredPosts.slice(1).map((post, index) => (
                  <Reveal key={post.slug} delay={(index + 1) * 90}>
                    <Link href={`/blog/${post.slug}`} className='blog-item'>
                      <span className='blog-date'>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                      <span
                        className='story-card-link'
                        style={{ marginTop: "0.8rem" }}
                      >
                        Read article <span className='motion-arrow'>→</span>
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Link href='/blog' className='btn-outline-glow'>
              View all articles <span className='motion-arrow'>→</span>
            </Link>
          </div>
        </Section>
      )}

      <Section
        id='faq'
        eyebrow='Common questions'
        title='The questions you are probably already asking'
        subtitle='If the answer you need is not here, ask on the strategy call. No topic is off limits.'
      >
        <Reveal>
          <div
            style={{ maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}
          >
            <FAQSection limit={5} />
          </div>
        </Reveal>
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <Link href='/services#faq' className='btn-outline-glow'>
            View all FAQs <span className='motion-arrow'>→</span>
          </Link>
        </div>
      </Section>

      <Section
        id='final-cta'
        eyebrow='Next Step'
        title='Your next customer is already searching.'
        subtitle='If there is a fit, you will know exactly what to do next. If there is not, you still leave with useful direction.'
        tone='contrast'
      >
        <Reveal>
          <div className='final-band'>
            <div className='final-left'>
              <p className='final-headline'>
                Get a clear read on where you stand — and what to fix first.
              </p>
              <p className='final-sub'>
                No contracts, no agency runaround. Just a direct conversation
                about your local visibility and the fastest path to more calls.
              </p>
              <div className='final-trust'>
                <div className='final-trust-item'>
                  <span className='final-trust-icon'>✓</span>
                  Free — no obligation
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
