"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion as m, AnimatePresence, useTransform, useScroll, useMotionValue, useSpring } from "framer-motion";
import { H1, Body, Eyebrow } from "@/components/ui/Typography";

// ─── Brand tokens ───────────────────────────────────────────────────────────
const C = {
  bg:           "#0a0a0a",
  surface:      "#141414",
  surface2:     "#1e1e1e",
  carolina:     "#7bafd4",
  carolinaDark: "#5a93bc",
  carolinaDim:  "rgba(123,175,212,0.12)",
  slate:        "#2E3A4D",
  steel:        "#4A6B8A",
  text:         "#f0f0f0",
  muted:        "#888888",
  border:       "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.14)",
  red:          "#c0524a",
  yellow:       "#c49a3c",
  green:        "#4e9a6f",
};

const TRADES = [
  "HVAC", "Plumbing", "Electrical", "Roofing",
  "Landscaping", "Remodeling", "General Contracting", "Other",
];

const SECTION_META = {
  gbp:         { label: "Google Business Profile", icon: "📍", msg: "Checking your Google Business Profile…" },
  reviews:     { label: "Reviews",                  icon: "⭐", msg: "Scanning your reviews…" },
  onpage:      { label: "On-Page SEO",              icon: "📄", msg: "Auditing your website pages…" },
  technical:   { label: "Technical SEO",            icon: "⚙️", msg: "Checking technical setup & schema…" },
  citations:   { label: "Local Citations",          icon: "📋", msg: "Looking for your citations…" },
  backlinks:   { label: "Backlinks",                icon: "🔗", msg: "Analyzing backlinks…" },
  competitors: { label: "Competitor Comparison",    icon: "🏆", msg: "Comparing you to top competitors…" },
};
const SECTION_IDS = ["gbp", "reviews", "onpage", "technical", "citations", "backlinks", "competitors"];

// ─── Score gauge ─────────────────────────────────────────────────────────────
function ScoreGauge({ score, size = 100 }) {
  const r = 44, cx = 60, cy = 60, circ = 2 * Math.PI * r;
  const color = score >= 70 ? C.green : score >= 50 ? C.yellow : C.red;
  const dash = (score / 100) * circ * 0.75;
  return (
    <m.svg 
      initial={{ scale: 0, rotate: 0 }}
      animate={{ scale: 1, rotate: 135 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      width={size} height={size} viewBox="0 0 120 120"
    >
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.surface2} strokeWidth="7"
        strokeDasharray={`${circ * 0.75} ${circ * 0.25}`} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="7"
        strokeDasharray={`${dash} ${circ - dash + circ * 0.25}`} strokeLinecap="round"
        style={{ transition: "stroke-dasharray 1.2s ease" }} />
    </m.svg>
  );
}

// ─── Blueprint 3D ──────────────────────────────────────────────────────────
function Blueprint3D({ completedIds }) {
  const rotation = (completedIds.length / SECTION_IDS.length) * 360;
  
  return (
    <div style={{
      width: 140, height: 140, position: "relative",
      perspective: "800px", margin: "0 auto 40px",
    }}>
      {/* 3D Wireframe Grid */}
      <m.div
        animate={{ 
          rotateX: [20, 30, 20], 
          rotateY: rotation 
        }}
        transition={{ 
          rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotateY: { type: "spring", stiffness: 50, damping: 20 }
        }}
        style={{
          width: "100%", height: "100%", position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute", inset: 0,
              border: `1px solid ${C.carolina}`,
              opacity: 0.15,
              transform: `rotateY(${i * 30}deg)`,
            }}
          />
        ))}
        
        {/* Scanning Disk */}
        <m.div
          animate={{ y: [ -20, 100, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute", top: 0, left: "-10%", width: "120%", height: 2,
            background: `linear-gradient(90deg, transparent, ${C.carolina}, transparent)`,
            boxShadow: `0 0 15px ${C.carolina}`,
            zIndex: 5,
          }}
        />
      </m.div>

      {/* Orbiting Nodes */}
      <m.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ position: "absolute", inset: -20, borderRadius: "50%", border: `1px dashed ${C.carolinaDim}` }}
      />
    </div>
  );
}

// ─── Section card ─────────────────────────────────────────────────────────────
function SectionCard({ section, locked, visible, isFocused, onFocus, competitorNames }) {
  const meta = SECTION_META[section.id] || {};
  const statusColor = section.status === "green" ? C.green : section.status === "yellow" ? C.yellow : C.red;
  const open = isFocused;

  return (
    <m.div
      onClick={() => !locked && onFocus(open ? null : section.id)}
      initial={false}
      animate={{ 
        scale: open ? 1.05 : 1,
        rotateX: open ? 5 : 0,
        z: open ? 100 : 0,
        backgroundColor: open ? C.surface2 : C.surface,
        borderColor: open ? C.carolina : C.border,
      }}
      whileHover={!locked && !open ? { 
        y: -4, 
        backgroundColor: "rgba(123, 175, 212, 0.05)",
        borderColor: "rgba(123, 175, 212, 0.3)" 
      } : {}}
      style={{
        borderRadius: 12, padding: "20px 24px",
        cursor: locked ? "default" : "pointer",
        opacity: visible ? (locked ? 0.38 : 1) : 0,
        transformStyle: "preserve-3d",
        position: "relative",
        zIndex: open ? 100 : 1,
        boxShadow: open ? "0 40px 80px rgba(0,0,0,0.8)" : "none",
        transition: "opacity 0.35s ease, transform 0.35s ease, background 0.15s, border-color 0.15s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <m.span 
          animate={{ scale: open ? 1.2 : 1, rotate: open ? [0, -10, 10, 0] : 0 }}
          style={{ fontSize: 22, flexShrink: 0 }}
        >
          {meta.icon}
        </m.span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.muted, marginBottom: 4, fontFamily: "var(--font-mono)" }}>
            {meta.label}
          </div>
          <div style={{ fontSize: "0.95rem", fontWeight: 600, color: locked ? C.muted : C.text, lineHeight: 1.4, fontFamily: "var(--font-ui)" }}>
            {locked ? "Unlock with your email →" : section.headline}
          </div>
          {locked && section.id === "competitors" && competitorNames?.length > 0 && (
            <div style={{ fontSize: "0.75rem", color: C.carolina, fontFamily: "var(--font-mono)", marginTop: 4, letterSpacing: "0.03em" }}>
              {competitorNames.join(" · ")}
            </div>
          )}
        </div>
        <div style={{ textAlign: "right", flexShrink: 0, minWidth: 50 }}>
          <m.div 
            animate={{ color: statusColor, scale: open ? 1.1 : 1 }}
            style={{ fontSize: "1.6rem", fontWeight: 700, lineHeight: 1, fontFamily: "var(--font-mono)" }}
          >
            {section.score}
          </m.div>
          <div style={{ fontSize: "0.55rem", color: C.muted, letterSpacing: "0.1em", fontFamily: "var(--font-mono)" }}>/10</div>
        </div>
      </div>

      <AnimatePresence>
        {open && !locked && (
          <m.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ marginTop: 20, paddingTop: 20, borderTop: `1px solid ${C.border}` }}>
              <p style={{ fontSize: "0.95rem", color: C.text, lineHeight: 1.8, margin: "0 0 20px", fontFamily: "var(--font-ui)" }}>
                {section.finding}
              </p>
              <m.div 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                style={{ 
                  background: "rgba(123, 175, 212, 0.05)", 
                  borderRadius: 8, padding: "16px 20px", 
                  borderLeft: `3px solid ${C.carolina}` 
                }}
              >
                <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.carolina, marginBottom: 6, fontFamily: "var(--font-mono)" }}>
                  Priority Action
                </div>
                <div style={{ fontSize: "0.95rem", color: C.text, fontFamily: "var(--font-ui)", fontWeight: 500 }}>
                  {section.priority_action}
                </div>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

// ─── Loading view ──────────────────────────────────────────────────────────────
function LoadingView({ businessName, completedIds }) {
  const completedCount = completedIds.length;
  const activeIndex = Math.min(completedCount, SECTION_IDS.length - 1);
  const msg = SECTION_META[SECTION_IDS[activeIndex]]?.msg || "Wrapping up…";

  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <m.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ textAlign: "center", maxWidth: 440, width: "100%" }}
      >
        <Blueprint3D completedIds={completedIds} />

        <m.h2 
          key={businessName}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 800, color: C.text, margin: "0 0 8px", letterSpacing: "-0.02em" }}
        >
          Auditing {businessName}
        </m.h2>
        <m.p 
          key={msg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ color: C.carolina, fontSize: "0.9rem", margin: "0 0 32px", fontFamily: "var(--font-mono)", fontWeight: 600, letterSpacing: "0.05em" }}
        >
          {msg}
        </m.p>

        <div style={{ display: "grid", gap: 8 }}>
          {SECTION_IDS.map((id, i) => {
            const meta = SECTION_META[id];
            const done = completedIds.includes(id);
            const active = !done && i === completedCount;
            return (
              <m.div 
                key={id} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: done || active ? 1 : 0.2, 
                  x: 0,
                  backgroundColor: active ? "rgba(123, 175, 212, 0.08)" : done ? "rgba(123, 175, 212, 0.03)" : "transparent"
                }}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  borderRadius: 8, padding: "12px 16px",
                  border: `1px solid ${active ? C.carolina : "transparent"}`,
                  transition: "all 0.4s ease",
                }}
              >
                <m.span 
                  animate={active ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{ fontSize: 16, minWidth: 20 }}
                >
                  {done ? "✓" : meta.icon}
                </m.span>
                <span style={{ fontSize: "0.85rem", flex: 1, textAlign: "left", color: done ? C.carolina : active ? C.text : C.muted, fontFamily: "var(--font-ui)", fontWeight: active ? 600 : 400 }}>
                  {meta.label}
                </span>
                {done && <m.span initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ fontSize: "0.6rem", color: C.carolina, fontWeight: 700, fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}>ANALYZED</m.span>}
              </m.div>
            );
          })}
        </div>
      </m.div>
    </div>
  );
}

// ─── Copy link button ──────────────────────────────────────────────────────────
function CopyLinkButton({ auditId }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(`${window.location.origin}/audit/${auditId}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button onClick={copy} style={{
      background: copied ? C.carolinaDim : "transparent",
      border: `1px solid ${copied ? C.carolina + "55" : C.border}`,
      borderRadius: 6, color: copied ? C.carolina : C.muted,
      padding: "6px 12px", fontSize: "0.68rem", cursor: "pointer",
      display: "flex", alignItems: "center", gap: 5,
      transition: "all 0.2s", fontFamily: "var(--font-mono)", letterSpacing: "0.06em",
    }}>
      {copied ? "✓ COPIED" : "⎘ SHARE"}
    </button>
  );
}

// ─── Input helpers ─────────────────────────────────────────────────────────────
const labelStyle = { display: "block", fontSize: "0.63rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.muted, marginBottom: 5, fontFamily: "var(--font-ui)" };
const inputStyle = (err) => ({
  width: "100%", background: err ? "rgba(192,82,74,0.15)" : C.slate,
  border: `1px solid ${err ? C.red + "77" : "transparent"}`,
  borderRadius: 6, padding: "12px 14px",
  color: C.text, fontSize: "0.9rem", outline: "none",
  boxSizing: "border-box", fontFamily: "var(--font-ui)",
  transition: "border-color 0.15s",
});

export default function AuditClient() {
  const [mounted, setMounted] = useState(false);
  const [step, setStep]           = useState("form");
  const [form, setForm]           = useState({ businessName: "", websiteUrl: "", primaryTrade: "", serviceCity: "", noWebsite: false });
  const [errors, setErrors]       = useState({});
  const [result, setResult]       = useState(null);
  const [apiError, setApiError]   = useState(null);
  const [email, setEmail]         = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const [completedIds, setCompletedIds]       = useState([]);
  const [auditId, setAuditId]     = useState("");
  const [focusedId, setFocusedId] = useState(null);

  // Card parallax ref — must live here (Rules of Hooks: no hooks after early returns)
  const cardRef = useRef();
  const handleCardMove = (e) => {
    const el = cardRef.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${x * 4}deg) rotateX(${-y * 3}deg)`;
  };
  const handleCardLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = `perspective(1200px) rotateY(0deg) rotateX(0deg)`;
  };

  useEffect(() => {
    setMounted(true);
    setAuditId(Math.random().toString(36).slice(2, 9)); 
  }, []);

  // Stagger section reveal after results land
  useEffect(() => {
    if (step !== "results" || !result) return;
    let i = 0;
    const t = setInterval(() => {
      i++;
      setVisibleSections((result.sections || []).slice(0, i));
      if (i >= (result.sections || []).length) clearInterval(t);
    }, 180);
    return () => clearInterval(t);
  }, [step, result]);

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  const setCheck = k => e => setForm(f => ({ ...f, [k]: e.target.checked }));

  const validate = () => {
    const e = {};
    if (!form.businessName.trim() || form.businessName.trim().length < 2) e.businessName = "Required";
    if (!form.noWebsite && !form.websiteUrl.trim()) e.websiteUrl = "Required";
    if (!form.primaryTrade) e.primaryTrade = "Required";
    if (!form.serviceCity.trim() || form.serviceCity.trim().length < 2) e.serviceCity = "Required";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = useCallback(async () => {
    if (!validate()) return;
    setStep("loading");
    setApiError(null);
    setCompletedIds([]);
    setVisibleSections([]);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          websiteUrl: form.noWebsite
            ? ""
            : form.websiteUrl.startsWith("http")
              ? form.websiteUrl
              : `https://${form.websiteUrl}`,
        }),
      });

      if (!res.ok || !res.body) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Something went wrong. Please try again.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let finalResult = null;

      let event = "";
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("event: ")) {
            event = line.slice(7).trim();
          } else if (line.startsWith("data: ")) {
            try {
              const data = JSON.parse(line.slice(6));
              if (event === "section") {
                setCompletedIds(prev => [...prev, data.id]);
              } else if (event === "complete") {
                finalResult = data;
              } else if (event === "error") {
                throw new Error(data.message || "Audit failed. Please try again.");
              }
            } catch (parseErr) {
              if (parseErr.message?.includes("audit")) throw parseErr;
            }
          }
        }
      }

      if (!finalResult) throw new Error("No results returned. Please try again.");
      setResult(finalResult);
      setStep("results");
    } catch (err) {
      setApiError(err.name === "AbortError"
        ? "The audit took too long — try again, it usually completes."
        : err.message || "Something went wrong. Please try again.");
      setStep("form");
    }
  }, [form, validate]);

  const reset = () => {
    setStep("form"); setResult(null); setEmail(""); setEmailSent(false);
    setVisibleSections([]); setCompletedIds([]); setErrors({}); setApiError(null);
    setFocusedId(null);
  };

  const errMsg = msg => (
    <div style={{ color: C.red, fontSize: "0.74rem", marginTop: 4, fontFamily: "var(--font-ui)" }}>{msg}</div>
  );

  const overallColor = result
    ? result.overall_score >= 70 ? C.green : result.overall_score >= 50 ? C.yellow : C.red
    : C.carolina;

  if (!mounted) {
    return <div style={{ minHeight: "100vh", background: C.bg }} />;
  }

  // ── LOADING ──────────────────────────────────────────────────────────────────
  if (step === "loading") {
    return <LoadingView businessName={form.businessName} completedIds={completedIds} />;
  }

  // ── RESULTS ───────────────────────────────────────────────────────────────────
  if (step === "results" && result) {
    const allS = result.sections || [];
    return (
      <div style={{ minHeight: "100vh", background: C.bg, perspective: "1200px" }}>
        
        {/* Scrim Overlay */}
        <AnimatePresence>
          {focusedId && (
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFocusedId(null)}
              style={{
                position: "fixed", inset: 0,
                background: "rgba(0,0,0,0.7)",
                backdropFilter: "blur(4px)",
                zIndex: 40,
                cursor: "zoom-out",
              }}
            />
          )}
        </AnimatePresence>

        <div style={{ padding: "26px 20px 64px", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>

            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, gap: 12 }}>
              <div>
                <Eyebrow className="mb-2">Local SEO Audit</Eyebrow>
                <H1 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", lineHeight: 1.1 }}>
                  {result.business_name}
                </H1>
              </div>
              <div style={{ display: "flex", gap: 7, flexShrink: 0 }}>
                <CopyLinkButton auditId={auditId} />
                <button onClick={reset} style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 6, color: C.muted, padding: "6px 11px", fontSize: "0.66rem", cursor: "pointer", fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}>
                  ↺ NEW
                </button>
              </div>
            </div>

            {/* Overall score */}
            <m.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ background: C.slate, borderRadius: 12, padding: "20px 24px", marginBottom: 10, display: "flex", alignItems: "center", gap: 24, border: `1px solid ${C.border}` }}
            >
              <div style={{ position: "relative", flexShrink: 0 }}>
                <ScoreGauge score={result.overall_score} size={96} />
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 6 }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: 700, color: overallColor, lineHeight: 1, fontFamily: "var(--font-mono)" }}>{result.overall_score}</div>
                  <div style={{ fontSize: "0.55rem", color: C.muted, letterSpacing: "0.1em", fontFamily: "var(--font-mono)" }}>/100</div>
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "inline-block", background: overallColor + "22", borderRadius: 4, padding: "2px 10px", marginBottom: 8 }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: overallColor, fontFamily: "var(--font-mono)" }}>
                    {result.overall_label}
                  </span>
                </div>
                <p style={{ fontSize: "0.95rem", color: C.text, lineHeight: 1.6, margin: "0 0 7px", fontFamily: "var(--font-ui)", fontWeight: 500 }}>{result.summary}</p>
                {result.competitor_names?.length > 0 && (
                  <div style={{ fontSize: "0.75rem", color: C.muted, fontFamily: "var(--font-mono)" }}>
                    Top competitors: {result.competitor_names.join(" · ")}
                  </div>
                )}
              </div>
            </m.div>

            {/* Sections */}
            <div style={{ display: "grid", gap: 8, marginBottom: 10 }}>
              {allS.map((s, i) => (
                <SectionCard
                  key={s.id}
                  section={s}
                  locked={i >= 4}
                  visible={visibleSections.some(v => v.id === s.id)}
                  isFocused={focusedId === s.id}
                  onFocus={setFocusedId}
                  competitorNames={s.id === "competitors" ? result.competitor_names : undefined}
                />
              ))}
            </div>

            {/* Email gate */}
            {!emailSent ? (
              <m.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ background: C.slate, borderRadius: 12, padding: 24, marginBottom: 10, border: `1px solid ${C.borderStrong}` }}
              >
                <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.carolina, marginBottom: 8, fontFamily: "var(--font-mono)" }}>
                  Your Full Action Plan Is Ready
                </div>
                <p style={{ color: C.text, fontSize: "0.95rem", lineHeight: 1.6, margin: "0 0 18px", fontFamily: "var(--font-ui)" }}>
                  Get the prioritized fix list for all 7 sections — plus a PDF report to keep.
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    style={{ ...inputStyle(false), flex: 1, background: C.bg }}
                    onKeyDown={e => e.key === "Enter" && email.includes("@") && setEmailSent(true)}
                  />
                  <button
                    onClick={() => email.includes("@") && setEmailSent(true)}
                    style={{
                      background: `linear-gradient(135deg, ${C.carolina} 0%, ${C.steel} 100%)`,
                      border: "none", borderRadius: 6, color: C.slate,
                      fontWeight: 700, fontSize: "0.75rem", padding: "0 20px",
                      cursor: "pointer", whiteSpace: "nowrap",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      fontFamily: "var(--font-mono)",
                      opacity: email.includes("@") ? 1 : 0.5,
                      transition: "all 0.2s",
                    }}
                  >
                    Send It →
                  </button>
                </div>
              </m.div>
            ) : (
              <m.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ background: "rgba(74, 222, 128, 0.05)", border: `1px solid rgba(74, 222, 128, 0.2)`, borderRadius: 12, padding: 24, marginBottom: 10, textAlign: "center" }}
              >
                <div style={{ fontSize: "0.75rem", color: C.green, fontWeight: 700, letterSpacing: "0.12em", marginBottom: 8, fontFamily: "var(--font-mono)" }}>
                  ✓ REPORT ON THE WAY
                </div>
                <p style={{ color: C.muted, fontSize: "0.9rem", margin: "0 0 16px", fontFamily: "var(--font-ui)" }}>
                  Check your inbox. Your full action plan is headed your way.
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/localsearchally"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", background: C.carolinaDim, borderRadius: 6, color: C.carolina, fontSize: "0.75rem", fontWeight: 700, padding: "10px 20px", textDecoration: "none", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}
                >
                  Book a Free Strategy Call →
                </a>
              </m.div>
            )}

            {/* Re-audit */}
            <div style={{ opacity: focusedId ? 0.2 : 1, transition: "opacity 0.3s" }}>
              <div style={{ background: C.surface2, borderRadius: 8, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                <div style={{ fontSize: "0.85rem", color: C.muted, lineHeight: 1.4, fontFamily: "var(--font-ui)" }}>
                  <strong style={{ color: C.text }}>Track your progress.</strong> Run this again in 30 days.
                </div>
                <button onClick={reset} style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 6, color: C.carolina, padding: "6px 13px", fontSize: "0.65rem", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
                  Re-Audit →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


  // ── FORM ──────────────────────────────────────────────────────────────────────

  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, perspective: "1200px" }}>
      <m.div 
        ref={cardRef}
        key="audit-form-entry"
        initial={{ opacity: 0, rotateY: -40, rotateX: 14, scale: 0.85, z: -200 }}
        animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1, z: 0 }}
        transition={{ delay: 0.05, type: "spring", stiffness: 60, damping: 18, mass: 1.0 }}
        onMouseMove={handleCardMove}
        onMouseLeave={handleCardLeave}
        style={{ width: "100%", maxWidth: 490, transformStyle: "preserve-3d", transition: "transform 0.2s ease" }}
      >

        <div style={{ textAlign: "center", marginBottom: 26 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: C.carolinaDim, borderRadius: 100, padding: "5px 14px", marginBottom: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.carolina, display: "inline-block" }} />
            <span style={{ fontSize: "0.63rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.carolina, fontFamily: "var(--font-ui)" }}>
              Free · No Account Needed
            </span>
          </div>
          <H1 style={{ fontSize: "clamp(1.8rem, 6vw, 2.75rem)", marginBottom: "1rem" }}>
            See Exactly How Your Business<br />Shows Up in Google
          </H1>
          <p style={{ color: C.muted, fontSize: "0.9rem", lineHeight: 1.6, margin: 0, fontFamily: "var(--font-ui)" }}>
            Real audit. Real data. 60–90 seconds.
          </p>
        </div>

        {apiError && (
          <div style={{ background: "rgba(192,82,74,0.1)", borderRadius: 6, padding: "11px 14px", marginBottom: 14, color: C.red, fontSize: "0.84rem", lineHeight: 1.5, fontFamily: "var(--font-ui)" }}>
            {apiError}
          </div>
        )}

        <div style={{ background: C.surface, borderRadius: 12, padding: 24, border: `1px solid ${C.border}`, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
          <div style={{ display: "grid", gap: 14 }}>

            {/* Business name */}
            <div>
              <label style={labelStyle}>Business Name</label>
              <input value={form.businessName} onChange={set("businessName")} placeholder="Rogers HVAC Pro" style={inputStyle(errors.businessName)} />
              {errors.businessName && errMsg(errors.businessName)}
            </div>

            {/* Website */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                <label style={{ ...labelStyle, marginBottom: 0 }}>Website URL</label>
                <label style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer" }}>
                  <input type="checkbox" checked={form.noWebsite} onChange={setCheck("noWebsite")} style={{ accentColor: C.carolina, width: 13, height: 13 }} />
                  <span style={{ fontSize: "0.68rem", color: C.muted, fontFamily: "var(--font-ui)" }}>No website yet</span>
                </label>
              </div>
              {!form.noWebsite ? (
                <>
                  <input value={form.websiteUrl} onChange={set("websiteUrl")} placeholder="rogershvacpro.com" style={inputStyle(errors.websiteUrl)} />
                  {errors.websiteUrl && errMsg(errors.websiteUrl)}
                </>
              ) : (
                <div style={{ background: "rgba(192,82,74,0.1)", borderRadius: 6, padding: "10px 14px", fontSize: "0.8rem", color: C.red, fontFamily: "var(--font-ui)" }}>
                  No website = invisible in Google search. We'll show you what to do about it.
                </div>
              )}
            </div>

            {/* Trade + City */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label style={labelStyle}>Primary Trade</label>
                <m.select 
                   value={form.primaryTrade} 
                   onChange={set("primaryTrade")} 
                   style={{ ...inputStyle(errors.primaryTrade), appearance: "none" }}
                >
                  <option value="">Select…</option>
                  {TRADES.map(t => <option key={t} value={t}>{t}</option>)}
                </m.select>
                {errors.primaryTrade && errMsg(errors.primaryTrade)}
              </div>
              <div>
                <label style={labelStyle}>City / Service Area</label>
                <input value={form.serviceCity} onChange={set("serviceCity")} placeholder="Rogers, AR" style={inputStyle(errors.serviceCity)} />
                {errors.serviceCity && errMsg(errors.serviceCity)}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <button
              onClick={handleSubmit}
              style={{
                width: "100%", padding: "13px 22px",
                background: `linear-gradient(135deg, ${C.carolina} 0%, ${C.steel} 100%)`,
                border: "none", borderRadius: 6,
                color: C.slate, fontWeight: 700, fontSize: "0.75rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", fontFamily: "var(--font-mono)",
                transition: "opacity 0.15s, filter 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.filter = "brightness(1.1)"}
              onMouseLeave={e => e.currentTarget.style.filter = "brightness(1)"}
            >
              Run My Free Audit →
            </button>
          </div>
          <p style={{ textAlign: "center", color: C.muted, fontSize: "0.72rem", marginTop: 11, marginBottom: 0, fontFamily: "var(--font-ui)" }}>
            No spam. No sales pitch before you see your results.
          </p>
        </div>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <span style={{ fontSize: "0.62rem", color: "#444", letterSpacing: "0.14em", fontFamily: "var(--font-ui)" }}>
            LOCAL SEARCH ALLY · SILOAM SPRINGS, AR
          </span>
        </div>
      </m.div>
    </div>
  );
}
