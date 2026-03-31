"use client";
import { useState } from "react";
import Logo from "./Logo"; // Use existing Logo component

const TRADES = ["HVAC", "Plumbing", "Electrical", "Roofing", "Landscaping", "Remodeling", "Other"];

const CATEGORIES = [
  {
    id: "gbp",
    label: "Google Business Profile",
    weight: 30,
    questions: [
      { id: "gbp_claimed",  text: "Is your Google Business Profile claimed and verified?" },
      { id: "gbp_services", text: "Does your GBP list all the services you actually offer?" },
      { id: "gbp_reviews",  text: "Do you have 10 or more Google reviews — with responses to each?" },
    ],
  },
  {
    id: "website",
    label: "Website Basics",
    weight: 30,
    questions: [
      { id: "web_clicktocall",  text: "Is your phone number a tap-to-call link on mobile?" },
      { id: "web_cities",       text: "Does your website clearly list the cities and areas you serve?" },
      { id: "web_servicepages", text: "Do you have a dedicated page for each main service you offer?" },
    ],
  },
  {
    id: "citations",
    label: "Citations & Consistency",
    weight: 20,
    questions: [
      { id: "cit_listed", text: "Is your business listed on Yelp, BBB, or Angi?" },
      { id: "cit_nap",    text: "Is your business name, address, and phone number the same everywhere it appears online?" },
    ],
  },
  {
    id: "authority",
    label: "Local Authority",
    weight: 20,
    questions: [
      { id: "auth_gsc",     text: "Have you set up Google Search Console for your website?" },
      { id: "auth_content", text: "Does your site have blog posts or pages targeting local search terms (e.g. 'HVAC repair Rogers AR')?" },
    ],
  },
];

function scoreAnswers(answers) {
  const scores = {};
  CATEGORIES.forEach((cat) => {
    const yes = cat.questions.filter((q) => answers[q.id] === "yes").length;
    scores[cat.id] = Math.round((yes / cat.questions.length) * cat.weight);
  });
  return { total: Object.values(scores).reduce((a, b) => a + b, 0), scores };
}

function getPriorityFixes(answers) {
  const all = [
    { id: "gbp_reviews",      label: "Get to 10+ reviews with responses",             detail: "This is the single biggest lever for getting into the Map Pack. Reviews with responses tell Google your business is active and trusted." },
    { id: "gbp_services",     label: "Fill out every service in your GBP",             detail: "Google shows you for searches it can match to your listed services. Missing services means missing calls." },
    { id: "gbp_claimed",      label: "Claim and verify your Google Business Profile",  detail: "You can't rank in the Map Pack without a verified profile. This is the foundation everything else builds on." },
    { id: "web_clicktocall",  label: "Add a tap-to-call button on mobile",             detail: "Most local searches happen on phones. If your number isn't a clickable link, you're losing high-intent visitors the moment they find you." },
    { id: "web_cities",       label: "Name every city you serve on your website",      detail: "Search engines can't show you for a city you haven't mentioned. Even a short list in the footer helps." },
    { id: "web_servicepages", label: "Build a dedicated page for each service",        detail: "A generic Services page ranks for nothing. Separate pages for each service rank for their own searches." },
    { id: "cit_nap",          label: "Clean up your business info across directories", detail: "Inconsistent name, address, or phone across listings confuses search engines and erodes trust." },
    { id: "cit_listed",       label: "Get listed on Yelp, BBB, and Angi",             detail: "These are high-authority citations. Google uses them to verify your business is real and where it says it is." },
    { id: "auth_gsc",         label: "Set up Google Search Console",                  detail: "Without it, you're flying blind. GSC shows what searches bring people to your site — and which pages are closest to ranking." },
    { id: "auth_content",     label: "Create at least one local content page",        detail: "A page targeting 'AC repair Bentonville AR' gives search engines a clear reason to show you for that search." },
  ];
  return all.filter((f) => answers[f.id] !== "yes").slice(0, 3);
}

function getScoreConfig(score) {
  if (score <= 40) return { label: "Critical gaps",         color: "#e05555", shadow: "0 0 24px rgba(224,85,85,0.3)",    desc: "Your business is losing calls to competitors right now." };
  if (score <= 70) return { label: "Solid start, key gaps", color: "#e09f3e", shadow: "0 0 24px rgba(224,159,62,0.3)",   desc: "You're ranking for some things, but key gaps are sending calls elsewhere." };
  if (score <= 90) return { label: "Strong foundation",     color: "#7bafd4", shadow: "var(--glow-md)",                  desc: "Close — a few targeted fixes will move the needle." };
  return           { label: "Fully optimized",              color: "#4caf50", shadow: "0 0 24px rgba(76,175,80,0.3)",    desc: "Rare. Let's protect what's working." };
}

// ── Shared primitives ─────────────────────────────────────────────────────────

function Eyebrow({ children }) {
  return (
    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--carolina)", marginBottom: "0.75rem" }}>
      {children}
    </p>
  );
}

function ProgressBar({ step, total }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>
          Step {step} of {total}
        </span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--carolina)" }}>
          {pct}%
        </span>
      </div>
      <div className="h-px rounded-full overflow-hidden" style={{ background: "var(--border-solid)" }}>
        <div className="h-full rounded-full"
             style={{ width: `${pct}%`, background: "var(--gradient-accent)", boxShadow: "var(--glow-sm)", transition: "width var(--transition-slow)" }} />
      </div>
    </div>
  );
}

function Card({ children, className = "", style = {} }) {
  return (
    <div className={`rounded-xl p-6 ${className}`}
         style={{ background: "var(--surface)", border: "1px solid var(--border-solid)", ...style }}>
      {children}
    </div>
  );
}

function FieldLabel({ children }) {
  return (
    <label className="block mb-2" style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>
      {children}
    </label>
  );
}

function TextInput({ type = "text", placeholder, value, onChange }) {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={onChange}
      className="w-full rounded-lg px-4 py-3 outline-none"
      style={{
        fontFamily: "var(--font-body)", fontSize: "0.9rem",
        background: "var(--surface-hover)", border: "1px solid var(--border-solid)", color: "var(--text)",
        transition: "border-color var(--transition-fast), box-shadow var(--transition-fast)",
      }}
      onFocus={(e) => { e.target.style.borderColor = "var(--border-hover)"; e.target.style.boxShadow = "var(--glow-sm)"; }}
      onBlur={(e)  => { e.target.style.borderColor = "var(--border-solid)"; e.target.style.boxShadow = "none"; }}
    />
  );
}

function PrimaryBtn({ children, onClick, disabled, fullWidth }) {
  return (
    <button onClick={onClick} disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm ${fullWidth ? "w-full" : ""}`}
      style={{
        fontFamily: "var(--font-body)", letterSpacing: "0.01em",
        background: disabled ? "var(--surface-hover)" : "var(--gradient-accent)",
        color: "var(--text)", border: "1px solid var(--border-hover)",
        boxShadow: disabled ? "none" : "var(--glow-sm)",
        opacity: disabled ? 0.45 : 1, cursor: disabled ? "not-allowed" : "pointer",
        transition: "opacity var(--transition-fast), box-shadow var(--transition-fast)",
      }}
    >
      {children}
    </button>
  );
}

function GhostBtn({ children, onClick }) {
  return (
    <button onClick={onClick}
      className="text-sm transition-colors"
      style={{ fontFamily: "var(--font-body)", color: "var(--muted)", background: "none", border: "none", cursor: "pointer", transition: "color var(--transition-fast)" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
    >
      {children}
    </button>
  );
}

function AnswerBtn({ value, label, selected, onClick }) {
  return (
    <button onClick={() => onClick(value)}
      className="flex-1 py-3 px-3 rounded-lg text-sm"
      style={{
        fontFamily: "var(--font-body)", fontWeight: selected ? 600 : 400,
        border: `1px solid ${selected ? "var(--border-hover)" : "var(--border-solid)"}`,
        background: selected ? "rgba(123,175,212,0.08)" : "var(--surface-hover)",
        color: selected ? "var(--carolina)" : "var(--muted)",
        boxShadow: selected ? "var(--glow-sm)" : "none",
        cursor: "pointer", transition: "all var(--transition-fast)",
      }}
    >
      {label}
    </button>
  );
}

function TradeBtn({ value, selected, onClick }) {
  return (
    <button onClick={() => onClick(value)}
      className="px-3.5 py-2 rounded-lg text-sm"
      style={{
        fontFamily: "var(--font-body)", fontWeight: selected ? 600 : 400,
        border: `1px solid ${selected ? "var(--border-hover)" : "var(--border-solid)"}`,
        background: selected ? "rgba(123,175,212,0.08)" : "var(--surface-hover)",
        color: selected ? "var(--carolina)" : "var(--muted)",
        boxShadow: selected ? "var(--glow-sm)" : "none",
        cursor: "pointer", transition: "all var(--transition-fast)",
      }}
    >
      {value}
    </button>
  );
}

function ScoreRing({ score, color, shadow }) {
  const r = 54, circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <svg width="148" height="148" viewBox="0 0 148 148">
      <circle cx="74" cy="74" r={r} fill="none" stroke="var(--border-solid)" strokeWidth="6" />
      <circle cx="74" cy="74" r={r} fill="none" stroke={color} strokeWidth="6"
        strokeDasharray={`${dash} ${circ}`} strokeDashoffset={circ * 0.25}
        strokeLinecap="round"
        style={{ filter: `drop-shadow(0 0 8px ${color})`, transition: "stroke-dasharray 1.2s cubic-bezier(0.4,0,0.2,1)" }}
      />
      <text x="74" y="68" textAnchor="middle" fill="var(--text)" fontSize="34" fontWeight="700"
            fontFamily="var(--font-display)">{score}</text>
      <text x="74" y="89" textAnchor="middle" fill="var(--muted)" fontSize="12"
            fontFamily="var(--font-body)">out of 100</text>
    </svg>
  );
}

function CategoryBar({ cat, score }) {
  const pct = Math.round((score / cat.weight) * 100);
  const barColor = pct >= 80 ? "var(--carolina)" : pct >= 50 ? "#e09f3e" : "#e05555";
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between mb-1.5">
        <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--font-size-sm)", color: "var(--text)" }}>
          {cat.label}
        </span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--muted)" }}>
          {score}/{cat.weight}
        </span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: "var(--border-solid)" }}>
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: barColor, transition: "width 0.8s var(--transition-slow)" }} />
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════

export default function LocalSEOGrader({ initialBizInfo = null, onStartQuiz = null }) {
  const hasInitialData = initialBizInfo?.name && initialBizInfo?.trade && initialBizInfo?.city;
  const [step, setStep] = useState(hasInitialData ? "cat" : "entry");
  const [bizInfo, setBizInfo] = useState(initialBizInfo || { name: "", trade: "", city: "" });
  const [answers, setAnswers] = useState({});
  const [catIndex, setCatIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const TOTAL_STEPS = 2 + CATEGORIES.length;
  const currentCat = CATEGORIES[catIndex];
  const canAdvanceEntry = bizInfo.name.trim() && bizInfo.trade && bizInfo.city.trim();
  const catAnswered = currentCat?.questions.every((q) => answers[q.id] !== undefined);

  const { total, scores } = scoreAnswers(answers);
  const scoreConfig = getScoreConfig(total);
  const fixes = getPriorityFixes(answers);

  function handleReset() {
    setStep("entry"); setCatIndex(0); setAnswers({});
    setEmail(""); setEmailSent(false);
  }

  const pageClass = "text-[var(--text)]";
  const innerStyle = { maxWidth: 640, margin: "0 auto", padding: "1.5rem" };

  // ── Entry ─────────────────────────────────────────────────────────────────
  if (step === "entry") {
    return (
      <div className={pageClass}>
        <div style={innerStyle}>
          <div className="mb-6"><Logo /></div>
          <ProgressBar step={1} total={TOTAL_STEPS} />
          <Eyebrow>Free Local SEO Grader</Eyebrow>
          <h1 className="mb-3 leading-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-2xl)", fontWeight: 700, letterSpacing: "-0.01em", color: "var(--text)" }}>
            See how easy it is to find your business on Google.
          </h1>
          <p className="mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)", fontSize: "var(--font-size-sm)", color: "var(--muted)" }}>
            10 questions. 60 seconds. No signup required.
          </p>

          <Card className="relative overflow-hidden">
            <div className="mb-5">
              <FieldLabel>Business Name</FieldLabel>
              <TextInput placeholder="Rogers HVAC Co." value={bizInfo.name}
                onChange={(e) => setBizInfo((p) => ({ ...p, name: e.target.value }))} />
            </div>

            <div className="mb-5">
              <FieldLabel>Trade Type</FieldLabel>
              <div className="flex flex-wrap gap-2">
                {TRADES.map((t) => (
                  <TradeBtn key={t} value={t} selected={bizInfo.trade === t}
                    onClick={(v) => setBizInfo((p) => ({ ...p, trade: v }))} />
                ))}
              </div>
            </div>

            <div className="mb-7">
              <FieldLabel>Your City</FieldLabel>
              <TextInput placeholder="Rogers, AR" value={bizInfo.city}
                onChange={(e) => setBizInfo((p) => ({ ...p, city: e.target.value }))} />
            </div>

            <PrimaryBtn fullWidth onClick={() => setStep("cat")} disabled={!canAdvanceEntry}>
              Check my visibility →
            </PrimaryBtn>
          </Card>
        </div>
      </div>
    );
  }

  // ── Questions ─────────────────────────────────────────────────────────────
  if (step === "cat") {
    return (
      <div className={pageClass}>
        <div style={innerStyle}>
          <div className="flex justify-between items-center mb-6">
            <Logo size={28} showText={false} />
            <div className="text-right">
              <span className="block text-[0.6rem] uppercase tracking-widest text-[var(--muted)] mb-1">Diagnostic Mode</span>
              <span className="block text-[var(--carolina)] text-xs font-mono">Status: Analyzing...</span>
            </div>
          </div>
          
          <ProgressBar step={catIndex + 2} total={TOTAL_STEPS} />

          <div className="mb-8">
            <Eyebrow>{currentCat.label}</Eyebrow>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted)" }}>
              Analysis section {catIndex + 1} of {CATEGORIES.length} · {currentCat.weight} point weight
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            {currentCat.questions.map((q, i) => (
              <Card key={q.id} className="!p-5 relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--carolina)] to-transparent opacity-[0.03] h-[2px] w-full top-0 left-0 animate-[scan_3s_linear_infinite]" />
                
                <p className="mb-4 leading-relaxed font-medium"
                   style={{ fontFamily: "var(--font-body)", fontSize: "var(--font-size-sm)", color: "var(--text)" }}>
                  <span className="mr-2" style={{ color: "var(--muted)", fontSize: "0.8rem" }}>0{catIndex + 1}.{i + 1}</span>
                  {q.text}
                </p>
                <div className="flex gap-2">
                  {[["yes", "Yes"], ["no", "No"], ["unsure", "Not sure"]].map(([val, lbl]) => (
                    <AnswerBtn key={val} value={val} label={lbl}
                      selected={answers[q.id] === val}
                      onClick={(v) => setAnswers((prev) => ({ ...prev, [q.id]: v }))} />
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4">
            <GhostBtn onClick={() => catIndex === 0 ? setStep("entry") : setCatIndex((i) => i - 1)}>
              ← Back
            </GhostBtn>
            <PrimaryBtn onClick={() => catIndex < CATEGORIES.length - 1 ? setCatIndex((i) => i + 1) : setStep("results")}
              disabled={!catAnswered}>
              {catIndex < CATEGORIES.length - 1 ? "Next Section →" : "Generate Report →"}
            </PrimaryBtn>
          </div>
        </div>

        <style>{`
          @keyframes scan {
            0% { transform: translateY(0); }
            100% { transform: translateY(180px); }
          }
        `}</style>
      </div>
    );
  }

  // ── Results ───────────────────────────────────────────────────────────────
  return (
    <div className={pageClass}>
      <div style={innerStyle}>
        <div className="flex justify-between items-center mb-8">
          <Logo size={28} showText={false} />
          <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[var(--carolina)] font-bold">Analysis Complete</span>
        </div>

        {/* Score hero */}
        <Card className="text-center !py-10 mb-5 relative overflow-hidden" style={{ boxShadow: scoreConfig.shadow }}>
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ background: "radial-gradient(circle at center, var(--carolina) 0%, transparent 70%)" }} />
          
          <Eyebrow>Diagnostic Score</Eyebrow>
          <div className="flex justify-center my-5 relative z-10">
            <ScoreRing score={total} color={scoreConfig.color} shadow={scoreConfig.shadow} />
          </div>
          <span className="inline-block px-4 py-1 rounded-full text-[0.65rem] font-bold uppercase mb-3 relative z-10"
                style={{ fontFamily: "var(--font-body)", letterSpacing: "0.15em", background: `${scoreConfig.color}22`, border: `1px solid ${scoreConfig.color}55`, color: scoreConfig.color }}>
            {scoreConfig.label}
          </span>
          <p className="leading-relaxed px-4 relative z-10" style={{ fontFamily: "var(--font-body)", fontSize: "var(--font-size-sm)", color: "var(--muted)" }}>
            {bizInfo.name && <><span style={{ color: "var(--text)", fontWeight: 600 }}>{bizInfo.name}</span> — </>}
            {scoreConfig.desc}
          </p>
        </Card>

        {/* Category breakdown */}
        <Card className="mb-5 border-t-2" style={{ borderTopColor: "var(--border-hover)" }}>
          <div className="mb-6">
            <Eyebrow>Detailed Breakdown</Eyebrow>
          </div>
          {CATEGORIES.map((cat) => <CategoryBar key={cat.id} cat={cat} score={scores[cat.id]} />)}
        </Card>

        {/* Priority fixes */}
        <Card className="mb-5 overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[var(--carolina)] opacity-50" />
          <div className="mb-4">
            <Eyebrow>Required Action Items</Eyebrow>
            <p className="leading-relaxed" style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--muted)" }}>
              Based on your answers, these are the highest-impact gaps to close.
            </p>
          </div>
          {fixes.map((fix, i) => (
            <div key={i} className="flex gap-4 py-5"
                 style={{ borderTop: i > 0 ? "1px solid var(--border-solid)" : "none" }}>
              <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
                   style={{ background: "var(--surface-hover)", border: "1px solid var(--border-solid)", color: "var(--carolina)", boxShadow: "var(--glow-sm)" }}>
                {i + 1}
              </div>
              <div>
                <p className="font-bold mb-1.5" style={{ fontFamily: "var(--font-body)", fontSize: "var(--font-size-base)", color: "var(--text)" }}>
                  {fix.label}
                </p>
                <p className="leading-relaxed text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}>
                  {fix.detail}
                </p>
              </div>
            </div>
          ))}
        </Card>

        {/* Primary CTA */}
        <div className="rounded-xl p-8 text-center mb-6 relative group"
             style={{ background: "var(--gradient-surface)", border: "1px solid var(--border-hover)", boxShadow: "var(--glow-md)" }}>
          <div className="absolute inset-0 bg-[var(--carolina)] opacity-[0.02] group-hover:opacity-[0.05] transition-opacity" />
          <p className="font-bold mb-3 leading-snug relative z-10"
             style={{ fontFamily: "var(--font-display)", fontSize: "var(--font-size-xl)", letterSpacing: "-0.01em", color: "var(--text)" }}>
            Ready to reclaim your local market?
          </p>
          <p className="mb-8 leading-relaxed max-w-sm mx-auto relative z-10"
             style={{ fontFamily: "var(--font-body)", fontSize: "var(--font-size-sm)", color: "var(--muted)" }}>
            I&apos;ll walk through your exact results on a free 30-minute strategy call. No pressure, just a plan.
          </p>
          <a href="https://localsearchally.com/contact" target="_blank" rel="noopener noreferrer"
             className="inline-block px-8 py-4 rounded-lg font-bold text-sm no-underline relative z-10"
             style={{
               fontFamily: "var(--font-body)", letterSpacing: "0.05em", textTransform: "uppercase",
               background: "var(--gradient-accent)", color: "var(--text)", boxShadow: "var(--glow-md)",
             }}>
            Book My Strategy Call →
          </a>
        </div>

        {/* Email capture */}
        <Card className="mb-8 relative border-dashed">
          {!emailSent ? (
            <>
              <div className="mb-4">
                <Eyebrow>Export Complete Report</Eyebrow>
                <p className="leading-relaxed" style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "var(--muted)" }}>
                  Get the full category-by-category analysis sent to your inbox.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap mb-2">
                <div className="flex-1 min-w-[240px]">
                  <TextInput type="email" placeholder="owner@yourbiz.com"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <PrimaryBtn onClick={() => email.includes("@") && setEmailSent(true)}
                  disabled={!email.includes("@")}>
                  Email Report
                </PrimaryBtn>
              </div>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full border border-[var(--carolina)] flex items-center justify-center text-[var(--carolina)]"
                     style={{ background: "rgba(123,175,212,0.08)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="font-bold mb-1" style={{ fontFamily: "var(--font-body)", color: "var(--text)" }}>Report Dispatched</p>
              <p className="text-sm" style={{ fontFamily: "var(--font-body)", color: "var(--muted)" }}>Check your inbox in the next few minutes.</p>
            </div>
          )}
        </Card>

        <div className="text-center mb-10">
          <GhostBtn onClick={handleReset}>
            <span style={{ fontSize: "0.75rem", tracking: "0.05em", textTransform: "uppercase" }}>
              Start New Analysis
            </span>
          </GhostBtn>
        </div>
      </div>
    </div>
  );
}
