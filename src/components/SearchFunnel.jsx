"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// ── Count-up hook ─────────────────────────────────────────────
function useCountUp(end, duration = 1600, delay = 0, skip = false) {
  const [value, setValue] = useState(skip ? end : 0);
  useEffect(() => {
    if (skip) { setValue(end); return; }
    let timeoutId;
    let rafId;
    timeoutId = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
        setValue(eased * end);
        if (progress < 1) rafId = requestAnimationFrame(tick);
        else setValue(end);
      };
      rafId = requestAnimationFrame(tick);
    }, delay);
    return () => { clearTimeout(timeoutId); cancelAnimationFrame(rafId); };
  }, [end, duration, delay, skip]);
  return value;
}

// ── Flow particle — travels down one edge of the funnel ───────
function FunnelParticle({ side, delay }) {
  const left  = { cx: [15,  92,  95,  152, 155, 182], cy: [55, 185, 188, 318, 321, 435] };
  const right = { cx: [405, 328, 325, 268, 265, 238], cy: [55, 185, 188, 318, 321, 435] };
  const p = side === "left" ? left : right;
  return (
    <motion.circle
      r={2.5}
      fill="#7bafd4"
      filter="url(#sfGlow)"
      initial={{ cx: p.cx[0], cy: p.cy[0], opacity: 0 }}
      animate={{
        cx: p.cx,
        cy: p.cy,
        opacity: [0, 0.9, 0.9, 0.9, 0.9, 0],
      }}
      transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 0.8, delay, ease: "linear" }}
    />
  );
}

// ── Variant factories ─────────────────────────────────────────
const sectionV = {
  hidden: { opacity: 0, y: 14 },
  visible: (d) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut", delay: d } }),
};
const badgeV = {
  hidden: { opacity: 0, x: 18 },
  visible: (d) => ({ opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut", delay: d } }),
};

// ── Component ─────────────────────────────────────────────────
export default function SearchFunnel() {
  const reduced = useReducedMotion();

  const v1 = useCountUp(8.5,  1500,  450, reduced);
  const v2 = useCountUp(3.91, 1500,  850, reduced);
  const v3 = useCountUp(3.12, 1500, 1250, reduced);

  // Formatted display strings
  const n1 = `${v1.toFixed(1)} BILLION`;
  const n2 = `${v2.toFixed(2)} BILLION`;
  const n3 = `${v3.toFixed(2)} BILLION`;

  // Pulse props — skip for reduced motion
  const pulse = reduced
    ? {}
    : { animate: { opacity: [0.6, 1, 0.6] }, transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } };

  // Section entrance props
  const sec = (delay) =>
    reduced
      ? {}
      : { variants: sectionV, custom: delay, initial: "hidden", animate: "visible" };

  const badge = (delay) =>
    reduced
      ? {}
      : { variants: badgeV, custom: delay, initial: "hidden", animate: "visible" };

  return (
    <div
      style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
      aria-label="Local Search Opportunity Funnel"
    >
      <svg
        viewBox="0 0 420 520"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", maxHeight: "520px" }}
        role="img"
        aria-label="Funnel: 8.5 billion global searches → 3.91 billion with local intent → 3.12 billion daily conversions"
      >
        <defs>
          <pattern id="sfGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#7bafd4" strokeWidth="0.4" opacity="0.12" />
          </pattern>
          <filter id="sfGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="sfStrongGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="sfFill1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#7bafd4" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3a5570" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="sfFill2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#7bafd4" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#4a6b8a" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="sfFill3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#7bafd4" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#7bafd4" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="sfOrb" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#7bafd4" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#7bafd4" stopOpacity="0" />
          </radialGradient>
        </defs>

        <style>{`.sf { font-family: var(--font-mono, 'JetBrains Mono', 'Courier New', monospace); }`}</style>

        {/* Background */}
        <rect width="420" height="520" fill="#0a0f16" rx="12" />
        <rect width="420" height="520" fill="url(#sfGrid)" rx="12" />

        {/* Corner brackets — static, intentionally not animated */}
        <path d="M 14,44 L 14,14 L 44,14" fill="none" stroke="#7bafd4" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M 376,14 L 406,14 L 406,44" fill="none" stroke="#7bafd4" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M 14,476 L 14,506 L 44,506" fill="none" stroke="#7bafd4" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M 376,506 L 406,506 L 406,476" fill="none" stroke="#7bafd4" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

        {/* Header */}
        <text x="210" y="39" textAnchor="middle" className="sf" fontSize="8" fontWeight="500" fill="#7bafd4" letterSpacing="3" opacity="0.65">
          LOCAL SEARCH OPPORTUNITY FUNNEL
        </text>

        {/* ────── SECTION 1 — Global Searches ────── */}
        <motion.g {...sec(0.3)}>
          <polygon points="15,55 405,55 328,185 92,185" fill="url(#sfFill1)" />
          <polygon points="15,55 405,55 328,185 92,185" fill="none" stroke="#7bafd4" strokeWidth="1.5" filter="url(#sfGlow)" opacity="0.75" />
          <text x="210" y="107" textAnchor="middle" className="sf" fontSize="27" fontWeight="700" fill="#f8f9fa" letterSpacing="-0.5">
            {n1}
          </text>
          <text x="210" y="130" textAnchor="middle" className="sf" fontSize="9" fontWeight="400" fill="#7bafd4" letterSpacing="2.5" opacity="0.9">
            GLOBAL SEARCHES / DAY
          </text>
          <text x="210" y="150" textAnchor="middle" className="sf" fontSize="7.5" fill="#666" letterSpacing="1" opacity="0.8">
            All Google searches worldwide
          </text>
        </motion.g>

        {/* Badge 1 */}
        <motion.g {...badge(0.95)}>
          <rect x="336" y="188" width="66" height="27" rx="4" fill="#0e1520" stroke="#7bafd4" strokeWidth="0.75" opacity="0.9" />
          <text x="369" y="206" textAnchor="middle" className="sf" fontSize="12" fontWeight="700" fill="#7bafd4">↓ 46%</text>
          <line x1="328" y1="201" x2="336" y2="201" stroke="#7bafd4" strokeWidth="1" strokeDasharray="3,2" opacity="0.35" />
        </motion.g>

        {/* ────── SECTION 2 — Local Intent ────── */}
        <motion.g {...sec(0.75)}>
          <polygon points="95,188 325,188 268,318 152,318" fill="url(#sfFill2)" />
          <polygon points="95,188 325,188 268,318 152,318" fill="none" stroke="#7bafd4" strokeWidth="1.5" filter="url(#sfGlow)" opacity="0.85" />
          <text x="210" y="238" textAnchor="middle" className="sf" fontSize="23" fontWeight="700" fill="#f8f9fa" letterSpacing="-0.5">
            {n2}
          </text>
          <text x="210" y="260" textAnchor="middle" className="sf" fontSize="9" fontWeight="400" fill="#7bafd4" letterSpacing="2" opacity="0.9">
            WITH LOCAL INTENT
          </text>
          <text x="210" y="279" textAnchor="middle" className="sf" fontSize="7.5" fill="#666" letterSpacing="1" opacity="0.8">
            46% of all Google searches
          </text>
        </motion.g>

        {/* Badge 2 */}
        <motion.g {...badge(1.4)}>
          <rect x="275" y="319" width="66" height="27" rx="4" fill="#0e1520" stroke="#7bafd4" strokeWidth="0.75" opacity="0.9" />
          <text x="308" y="337" textAnchor="middle" className="sf" fontSize="12" fontWeight="700" fill="#7bafd4">↓ 80%</text>
          <line x1="268" y1="333" x2="275" y2="333" stroke="#7bafd4" strokeWidth="1" strokeDasharray="3,2" opacity="0.35" />
        </motion.g>

        {/* ────── SECTION 3 — Conversions ────── */}
        <motion.g {...sec(1.15)}>
          {/* Fill — pulses */}
          <motion.polygon
            points="155,321 265,321 238,435 182,435"
            fill="url(#sfFill3)"
            {...pulse}
          />
          {/* Border — pulses in sync */}
          <motion.polygon
            points="155,321 265,321 238,435 182,435"
            fill="none"
            stroke="#7bafd4"
            strokeWidth="2"
            filter="url(#sfStrongGlow)"
            {...pulse}
          />
          <text x="210" y="364" textAnchor="middle" className="sf" fontSize="18" fontWeight="700" fill="#7bafd4" filter="url(#sfGlow)" letterSpacing="-0.5">
            {n3}
          </text>
          <text x="210" y="384" textAnchor="middle" className="sf" fontSize="8" fontWeight="500" fill="#7bafd4" letterSpacing="2.5" opacity="0.9">
            DAILY CONVERSIONS
          </text>
          <text x="210" y="402" textAnchor="middle" className="sf" fontSize="7" fill="#666" letterSpacing="1" opacity="0.8">
            offline purchases from local search
          </text>
        </motion.g>

        {/* Bottom glow orb — pulses independently, slightly offset */}
        <motion.ellipse
          cx="210" cy="450" rx="58" ry="16"
          fill="url(#sfOrb)"
          filter="url(#sfStrongGlow)"
          {...(reduced ? {} : {
            animate: { opacity: [0.4, 0.85, 0.4], ry: [14, 19, 14] },
            transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
          })}
        />

        {/* Flow particles — 2 per side, staggered */}
        {!reduced && (
          <>
            <FunnelParticle side="left"  delay={0.4} />
            <FunnelParticle side="left"  delay={2.4} />
            <FunnelParticle side="right" delay={1.4} />
            <FunnelParticle side="right" delay={3.4} />
          </>
        )}

        {/* Source note */}
        <text x="210" y="506" textAnchor="middle" className="sf" fontSize="6.5" fill="#444" letterSpacing="1.5" opacity="0.9">
          SRC: BRIGHTLOCAL · SEARCHENGINEROUNDTABLE · THINK WITH GOOGLE
        </text>
      </svg>
    </div>
  );
}
