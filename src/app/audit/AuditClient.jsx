"use client";
import { useState, useEffect, useCallback } from "react";

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
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ transform: "rotate(135deg)" }}>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.surface2} strokeWidth="7"
        strokeDasharray={`${circ * 0.75} ${circ * 0.25}`} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="7"
        strokeDasharray={`${dash} ${circ - dash + circ * 0.25}`} strokeLinecap="round"
        style={{ transition: "stroke-dasharray 1.2s ease" }} />
    </svg>
  );
}

// ─── Section card ─────────────────────────────────────────────────────────────
function SectionCard({ section, locked, visible }) {
  const [open, setOpen] = useState(false);
  const meta = SECTION_META[section.id] || {};
  const statusColor = section.status === "green" ? C.green : section.status === "yellow" ? C.yellow : C.red;

  return (
    <div
      onClick={() => !locked && setOpen(o => !o)}
      style={{
        background: open ? C.surface2 : C.surface,
        borderRadius: 8, padding: "14px 18px",
        cursor: locked ? "default" : "pointer",
        opacity: visible ? (locked ? 0.38 : 1) : 0,
        transform: visible ? "translateY(0)" : "translateY(6px)",
        transition: "opacity 0.35s ease, transform 0.35s ease, background 0.15s",
        border: `1px solid ${open ? C.borderStrong : C.border}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <span style={{ fontSize: 17, flexShrink: 0 }}>{meta.icon}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.muted, marginBottom: 2, fontFamily: "var(--font-ui)" }}>
            {meta.label}
          </div>
          <div style={{ fontSize: "0.88rem", color: locked ? C.muted : C.text, lineHeight: 1.4, fontFamily: "var(--font-ui)" }}>
            {locked ? "Unlock with your email →" : section.headline}
          </div>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0, minWidth: 40 }}>
          <div style={{ fontSize: "1.4rem", fontWeight: 500, color: statusColor, lineHeight: 1, fontFamily: "var(--font-mono)" }}>{section.score}</div>
          <div style={{ fontSize: "0.55rem", color: C.muted, letterSpacing: "0.1em", fontFamily: "var(--font-mono)" }}>/10</div>
        </div>
      </div>
      {open && !locked && (
        <div style={{ marginTop: 13, paddingTop: 13, borderTop: `1px solid ${C.border}` }}>
          <p style={{ fontSize: "0.86rem", color: C.muted, lineHeight: 1.7, margin: "0 0 11px", fontFamily: "var(--font-ui)" }}>
            {section.finding}
          </p>
          <div style={{ background: C.bg, borderRadius: 6, padding: "10px 14px", borderLeft: `2px solid ${C.carolina}` }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: C.carolina, marginBottom: 4, fontFamily: "var(--font-ui)" }}>
              Priority Action
            </div>
            <div style={{ fontSize: "0.86rem", color: C.text, fontFamily: "var(--font-ui)" }}>
              {section.priority_action}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Loading view ──────────────────────────────────────────────────────────────
function LoadingView({ businessName, completedIds }) {
  const completedCount = completedIds.length;
  const activeIndex = Math.min(completedCount, SECTION_IDS.length - 1);
  const msg = SECTION_META[SECTION_IDS[activeIndex]]?.msg || "Wrapping up…";

  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ textAlign: "center", maxWidth: 440, width: "100%" }}>
        <div style={{ position: "relative", width: 52, height: 52, margin: "0 auto 26px" }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: `2px solid ${C.surface2}`, borderTop: `2px solid ${C.carolina}`, animation: "spin 1s linear infinite" }} />
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, color: C.text, margin: "0 0 6px", letterSpacing: "-0.02em" }}>
          Auditing {businessName}
        </h2>
        <p style={{ color: C.carolina, fontSize: "0.84rem", margin: "0 0 26px", fontFamily: "var(--font-ui)" }}>{msg}</p>
        <div style={{ display: "grid", gap: 5 }}>
          {SECTION_IDS.map((id, i) => {
            const meta = SECTION_META[id];
            const done = completedIds.includes(id);
            const active = !done && i === completedCount;
            return (
              <div key={id} style={{
                display: "flex", alignItems: "center", gap: 10,
                background: done ? C.slate : active ? C.surface2 : C.surface,
                borderRadius: 6, padding: "9px 13px",
                opacity: done || active ? 1 : 0.38,
                transition: "all 0.4s ease",
              }}>
                <span style={{ fontSize: 13, minWidth: 16 }}>{done ? "✓" : meta.icon}</span>
                <span style={{ fontSize: "0.78rem", flex: 1, textAlign: "left", color: done ? C.carolina : active ? C.text : C.muted, fontFamily: "var(--font-ui)" }}>
                  {meta.label}
                </span>
                {done && <span style={{ fontSize: "0.62rem", color: C.carolina, fontWeight: 500, fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>DONE</span>}
                {active && (
                  <span style={{ display: "flex", gap: 3 }}>
                    {[0, 1, 2].map(d => (
                      <span key={d} style={{ width: 4, height: 4, borderRadius: "50%", background: C.carolina, animation: `pulse 1.2s ease-in-out ${d * 0.2}s infinite` }} />
                    ))}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
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

// ─── Main component ────────────────────────────────────────────────────────────
export default function AuditClient() {
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

  useEffect(() => { setAuditId(Math.random().toString(36).slice(2, 9)); }, []);

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

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        let event = "";
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
              // ignore parse errors on SSE comments/pings
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
  }, [form]);

  const reset = () => {
    setStep("form"); setResult(null); setEmail(""); setEmailSent(false);
    setVisibleSections([]); setCompletedIds([]); setErrors({}); setApiError(null);
  };

  const errMsg = msg => (
    <div style={{ color: C.red, fontSize: "0.74rem", marginTop: 4, fontFamily: "var(--font-ui)" }}>{msg}</div>
  );

  const overallColor = result
    ? result.overall_score >= 70 ? C.green : result.overall_score >= 50 ? C.yellow : C.red
    : C.carolina;

  // ── LOADING ──────────────────────────────────────────────────────────────────
  if (step === "loading") {
    return <LoadingView businessName={form.businessName} completedIds={completedIds} />;
  }

  // ── RESULTS ───────────────────────────────────────────────────────────────────
  if (step === "results" && result) {
    const allS = result.sections || [];
    return (
      <div style={{ minHeight: "100vh", background: C.bg, padding: "26px 20px 64px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, gap: 12 }}>
            <div>
              <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.muted, marginBottom: 3, fontFamily: "var(--font-ui)" }}>
                Local SEO Audit
              </div>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: C.text, margin: 0, letterSpacing: "-0.02em" }}>
                {result.business_name}
              </h1>
            </div>
            <div style={{ display: "flex", gap: 7, flexShrink: 0 }}>
              <CopyLinkButton auditId={auditId} />
              <button onClick={reset} style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 6, color: C.muted, padding: "6px 11px", fontSize: "0.66rem", cursor: "pointer", fontFamily: "var(--font-mono)", letterSpacing: "0.06em" }}>
                ↺ NEW
              </button>
            </div>
          </div>

          {/* Overall score */}
          <div style={{ background: C.slate, borderRadius: 12, padding: "20px 24px", marginBottom: 10, display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ position: "relative", flexShrink: 0 }}>
              <ScoreGauge score={result.overall_score} size={96} />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 6 }}>
                <div style={{ fontSize: "1.7rem", fontWeight: 500, color: overallColor, lineHeight: 1, fontFamily: "var(--font-mono)" }}>{result.overall_score}</div>
                <div style={{ fontSize: "0.52rem", color: C.muted, letterSpacing: "0.1em", fontFamily: "var(--font-mono)" }}>/100</div>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "inline-block", background: overallColor + "22", borderRadius: 4, padding: "2px 10px", marginBottom: 8 }}>
                <span style={{ fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: overallColor, fontFamily: "var(--font-mono)" }}>
                  {result.overall_label}
                </span>
              </div>
              <p style={{ fontSize: "0.86rem", color: C.text, lineHeight: 1.6, margin: "0 0 7px", fontFamily: "var(--font-ui)" }}>{result.summary}</p>
              {result.competitor_names?.length > 0 && (
                <div style={{ fontSize: "0.72rem", color: C.muted, fontFamily: "var(--font-ui)" }}>
                  Top competitors: {result.competitor_names.join(" · ")}
                </div>
              )}
            </div>
          </div>

          {/* Sections */}
          <div style={{ display: "grid", gap: 5, marginBottom: 10 }}>
            {allS.map((s, i) => (
              <SectionCard
                key={s.id}
                section={s}
                locked={i >= 4}
                visible={visibleSections.some(v => v.id === s.id)}
              />
            ))}
          </div>

          {/* Email gate */}
          {!emailSent ? (
            <div style={{ background: C.slate, borderRadius: 12, padding: 20, marginBottom: 10 }}>
              <div style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.carolina, marginBottom: 6, fontFamily: "var(--font-ui)" }}>
                Your Full Action Plan Is Ready
              </div>
              <p style={{ color: C.text, fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 14px", fontFamily: "var(--font-ui)" }}>
                Get the prioritized fix list for all 7 sections — ranked by what will move the needle most — plus a PDF you can keep.
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
                    fontWeight: 600, fontSize: "0.68rem", padding: "0 16px",
                    cursor: "pointer", whiteSpace: "nowrap",
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    fontFamily: "var(--font-mono)",
                    opacity: email.includes("@") ? 1 : 0.5,
                  }}
                >
                  Send It →
                </button>
              </div>
              <div style={{ fontSize: "0.68rem", color: C.muted, marginTop: 8, fontFamily: "var(--font-ui)" }}>
                No spam. One email with your report. Unsubscribe anytime.
              </div>
            </div>
          ) : (
            <div style={{ background: C.surface2, borderRadius: 12, padding: 20, marginBottom: 10, textAlign: "center" }}>
              <div style={{ fontSize: "0.7rem", color: C.green, fontWeight: 500, letterSpacing: "0.1em", marginBottom: 5, fontFamily: "var(--font-mono)" }}>
                ✓ REPORT ON THE WAY
              </div>
              <p style={{ color: C.muted, fontSize: "0.84rem", margin: "0 0 14px", fontFamily: "var(--font-ui)" }}>
                Check your inbox. Your full action plan and PDF are headed your way.
              </p>
              <a
                href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/localsearchally"}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: C.carolinaDim, borderRadius: 6, color: C.carolina, fontSize: "0.72rem", fontWeight: 600, padding: "9px 16px", textDecoration: "none", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}
              >
                Book a Free Call →
              </a>
            </div>
          )}

          {/* Top 3 actions */}
          {result.top_3_actions?.length > 0 && (
            <div style={{ background: C.surface, borderRadius: 12, padding: 20, marginBottom: 10, border: `1px solid ${C.border}` }}>
              <div style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.muted, marginBottom: 13, fontFamily: "var(--font-ui)" }}>
                Top 3 Things to Fix First
              </div>
              <div style={{ display: "grid", gap: 11 }}>
                {result.top_3_actions.map((action, i) => (
                  <div key={i} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                    <div style={{ width: 22, height: 22, borderRadius: 4, background: C.carolinaDim, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.68rem", fontWeight: 500, color: C.carolina, flexShrink: 0, fontFamily: "var(--font-mono)" }}>
                      {i + 1}
                    </div>
                    <div style={{ fontSize: "0.86rem", color: C.muted, lineHeight: 1.5, paddingTop: 2, fontFamily: "var(--font-ui)" }}>
                      {action}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Re-audit */}
          <div style={{ background: C.surface2, borderRadius: 8, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
            <div style={{ fontSize: "0.78rem", color: C.muted, lineHeight: 1.4, fontFamily: "var(--font-ui)" }}>
              <strong style={{ color: C.text }}>Run this again in 30 days</strong> to track your progress.
            </div>
            <button onClick={reset} style={{ background: "transparent", border: `1px solid ${C.border}`, borderRadius: 6, color: C.carolina, padding: "6px 13px", fontSize: "0.65rem", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-mono)" }}>
              Re-Audit →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── FORM ──────────────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ width: "100%", maxWidth: 490 }}>

        <div style={{ textAlign: "center", marginBottom: 26 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: C.carolinaDim, borderRadius: 100, padding: "5px 14px", marginBottom: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.carolina, display: "inline-block" }} />
            <span style={{ fontSize: "0.63rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.carolina, fontFamily: "var(--font-ui)" }}>
              Free · No Account Needed
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.55rem, 4vw, 2rem)", fontWeight: 700, color: C.text, lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 9px" }}>
            See Exactly How Your Business<br />Shows Up in Google
          </h1>
          <p style={{ color: C.muted, fontSize: "0.9rem", lineHeight: 1.6, margin: 0, fontFamily: "var(--font-ui)" }}>
            Real audit. Real data. 60–90 seconds.
          </p>
        </div>

        {apiError && (
          <div style={{ background: "rgba(192,82,74,0.1)", borderRadius: 6, padding: "11px 14px", marginBottom: 14, color: C.red, fontSize: "0.84rem", lineHeight: 1.5, fontFamily: "var(--font-ui)" }}>
            {apiError}
          </div>
        )}

        <div style={{ background: C.surface, borderRadius: 12, padding: 24 }}>
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
                <select value={form.primaryTrade} onChange={set("primaryTrade")} style={{ ...inputStyle(errors.primaryTrade), appearance: "none" }}>
                  <option value="">Select…</option>
                  {TRADES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
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
                color: C.slate, fontWeight: 600, fontSize: "0.75rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", fontFamily: "var(--font-mono)",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.88"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
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
      </div>
    </div>
  );
}
