"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// ─── Data — only approved stats from CLAUDE.md ────────────────────────────────
// Sources: BrightLocal Local Consumer Review Survey, Think With Google, CLAUDE.md

const STATS = [
  {
    value: "97%",
    label: "of homeowners use Google to evaluate local businesses",
    source: "BrightLocal",
    href: null,
  },
  {
    value: "28%",
    label: "of nearby searches result in a purchase",
    source: "Think With Google",
    href: null,
  },
  {
    value: "90 sec",
    label: "Free audit — scored results, no email required",
    source: null,
    href: "/audit",
    isInternal: true,
  },
  {
    value: "3 demos",
    label: "Live demo sites — plumbing, HVAC, electrical",
    source: null,
    href: "/portfolio",
    isInternal: true,
    linkLabel: "View portfolio →",
  },
];

// ─── Single stat item ─────────────────────────────────────────────────────────

function StatItem({ item, index }) {
  const { value, label, source, href, isInternal, linkLabel } = item;

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "1rem",
        padding: "0 2rem",
        flex: "1 1 200px",
        minWidth: 0,
      }}
    >
      {/* Accent rule */}
      <div
        style={{
          width: "2px",
          alignSelf: "stretch",
          minHeight: "2.5rem",
          background: "linear-gradient(to bottom, #7bafd4, transparent)",
          flexShrink: 0,
          borderRadius: "1px",
        }}
        aria-hidden="true"
      />

      <div style={{ minWidth: 0 }}>
        {/* Value */}
        <div
          className="font-mono font-bold text-[#7bafd4]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", lineHeight: 1.1 }}
        >
          {value}
        </div>

        {/* Label */}
        <div
          className="font-sans text-[#b0b0b0]"
          style={{ fontSize: "0.8rem", lineHeight: 1.45, marginTop: "0.25rem" }}
        >
          {label}
          {isInternal && linkLabel && (
            <span
              className="block text-[#7bafd4] font-semibold"
              style={{ marginTop: "0.2rem", fontSize: "0.78rem" }}
            >
              {linkLabel}
            </span>
          )}
        </div>

        {/* Source attribution */}
        {source && (
          <div
            className="font-mono text-[#555555]"
            style={{ fontSize: "0.6rem", letterSpacing: "0.1em", marginTop: "0.35rem" }}
          >
            — {source}
          </div>
        )}
      </div>
    </motion.div>
  );

  if (href && isInternal) {
    return (
      <Link
        href={href}
        style={{ display: "contents", textDecoration: "none", color: "inherit" }}
        className="group"
        aria-label={label}
      >
        {inner}
      </Link>
    );
  }

  return inner;
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ServicesStatBar() {
  return (
    <div
      className="relative"
      style={{
        background: "#0f0f0f",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
      aria-label="Key statistics and proof points"
    >
      <div
        style={{
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          paddingLeft: "var(--page-gutter)",
          paddingRight: "var(--page-gutter)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem 0",
            alignItems: "stretch",
          }}
          className="stat-bar-grid"
        >
          {STATS.map((item, i) => (
            <StatItem key={item.value} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Responsive: stack on small screens, show dividers between items on large */}
      <style>{`
        @media (min-width: 768px) {
          .stat-bar-grid > * + * {
            border-left: 1px solid #1e1e1e;
          }
        }
        @media (max-width: 767px) {
          .stat-bar-grid > * {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
