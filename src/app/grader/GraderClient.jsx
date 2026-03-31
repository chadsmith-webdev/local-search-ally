"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import LocalSEOGrader from "@/components/LocalSEOGrader";

// ── Reveal Animation Component ─────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, style = {}, delay = 0 }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

// ── FAQ Accordion Section ────────────────────────────────────────────────────
function FAQAccordion({ questions }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col gap-4">
      {questions.map((faq, i) => (
        <div key={i} className="border-b border-[var(--border)] last:border-0 pb-1">
          <button
            className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-bold text-[var(--text)] group-hover:text-[var(--carolina)] transition-colors">
              {faq.q}
            </span>
            <span className={`text-[var(--carolina)] transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-350 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
            <p className="text-[var(--muted)] leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main Page Content ─────────────────────────────────────────────────────────
export default function GraderClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#090d14]" />}>
      <GraderContent />
    </Suspense>
  );
}

function GraderContent() {
  const graderRef = useRef(null);
  const searchParams = useSearchParams();
  const [isStarted, setIsStarted] = useState(false);
  const [heroBizInfo, setHeroBizInfo] = useState({ name: "", trade: "", city: "" });

  useEffect(() => {
    const name = searchParams.get("name");
    const trade = searchParams.get("trade");
    const city = searchParams.get("city");

    if (name || trade || city) {
      setHeroBizInfo({
        name: name || "",
        trade: trade || "",
        city: city || ""
      });

      if (name && trade && city) {
        setIsStarted(true);
        // Scroll to tool after a short delay to allow rendering
        setTimeout(() => {
          graderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [searchParams]);

  const trades = ["HVAC", "Plumbing", "Electrical", "Roofing", "Other"];

  const handleStart = (e) => {
    e.preventDefault();
    if (heroBizInfo.name && heroBizInfo.trade && heroBizInfo.city) {
      setIsStarted(true);
      // Wait for DOM update, then scroll
      requestAnimationFrame(() => {
        graderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  };

  const graderFaqs = [
    {
      q: "Is this actually free?",
      a: "Yes. No credit card, no account. Answer 10 questions and get your score. If you want the full report emailed to you, that&apos;s also free — I just ask for your email address."
    },
    {
      q: "Do I need to create an account?",
      a: "No. The grader runs in your browser. Your answers are not stored unless you choose to email yourself the report."
    },
    {
      q: "How accurate is this?",
      a: "Accurate enough to find the real gaps. It catches the problems most contractors know about but haven&apos;t fixed, and surfaces a few they didn&apos;t know to look for."
    }
  ];

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1); }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .grader-shell { background: radial-gradient(circle at 50% 0%, rgba(123, 175, 212, 0.08) 0%, transparent 70%); }
        .bucket-card { border-left: 2px solid var(--carolina); background: var(--surface); padding: 1.5rem; border-radius: 4px 16px 16px 4px; border: 1px solid var(--border-solid); }
        .hero-input { background: var(--surface-hover); border: 1px solid var(--border-solid); color: var(--text); border-radius: 12px; transition: all 0.3s ease; }
        .hero-input:focus { border-color: var(--carolina); box-shadow: var(--glow-sm); outline: none; }
        .beam { width: 1px; height: 100px; background: linear-gradient(to bottom, var(--carolina), transparent); margin: 0 auto; opacity: 0.5; }
      `}</style>

      <div className="grader-shell min-h-screen pt-24 pb-16">
        {/* Above the Fold — Utility Hero */}
        <section className="px-6 mb-24 text-center">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="inline-block px-3 py-1 rounded-full border border-[var(--carolina)]/20 bg-[var(--carolina)]/5 mb-6">
                <span className="font-mono text-[var(--carolina)] text-[0.6rem] tracking-[0.2em] uppercase">
                  Free Tool — For Home Service Trades
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight">
                Find out exactly why customers <br className="hidden md:block" />
                aren&apos;t finding you on Google.
              </h1>
              
              <p className="text-[var(--muted)] text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                10 questions. 60 seconds. A weighted score out of 100 — <br className="hidden md:block" />
                and the 3 specific gaps costing you calls right now.
              </p>

              {/* Utility Row (Option 3) */}
              {!isStarted && (
                <div className="max-w-4xl mx-auto mb-16">
                  <form onSubmit={handleStart} className="glass-card p-2 md:p-3 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 md:items-center">
                    <input 
                      type="text" 
                      placeholder="Business Name"
                      className="hero-input flex-1 px-4 py-3 text-sm"
                      value={heroBizInfo.name}
                      onChange={(e) => setHeroBizInfo(p => ({...p, name: e.target.value}))}
                      required
                    />
                    <select 
                      className="hero-input flex-1 px-4 py-3 text-sm appearance-none cursor-pointer"
                      value={heroBizInfo.trade}
                      onChange={(e) => setHeroBizInfo(p => ({...p, trade: e.target.value}))}
                      required
                    >
                      <option value="">Select Trade Type</option>
                      {trades.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <input 
                      type="text" 
                      placeholder="City, ST"
                      className="hero-input flex-1 px-4 py-3 text-sm"
                      value={heroBizInfo.city}
                      onChange={(e) => setHeroBizInfo(p => ({...p, city: e.target.value}))}
                      required
                    />
                    <button 
                      type="submit"
                      disabled={!heroBizInfo.name || !heroBizInfo.trade || !heroBizInfo.city}
                      className="bg-[var(--gradient-accent)] text-[var(--text)] font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-[var(--glow-sm)] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm whitespace-nowrap"
                    >
                      Check My Visibility →
                    </button>
                  </form>
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 items-center text-[0.7rem] uppercase tracking-widest text-[var(--muted)] mt-6 opacity-60">
                    <span className="flex items-center gap-1.5"><span className="text-[var(--carolina)]">✓</span> No signup</span>
                    <span className="flex items-center gap-1.5"><span className="text-[var(--carolina)]">✓</span> 60 seconds</span>
                    <span className="flex items-center gap-1.5"><span className="text-[var(--carolina)]">✓</span> Local expertise</span>
                  </div>
                </div>
              )}
            </Reveal>

            {/* Diagnostic Tool (Anchored) */}
            {isStarted && (
              <div ref={graderRef} className="max-w-2xl mx-auto pt-8">
                <div className="beam mb-8" />
                <div className="glass-card shadow-2xl rounded-3xl overflow-hidden text-left border border-[var(--carolina)]/20 animate-[fadeIn_0.5s_ease-out]">
                  <LocalSEOGrader 
                    key={heroBizInfo.name || 'empty'}
                    initialBizInfo={heroBizInfo.name ? heroBizInfo : null} 
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Value Prop — Glass Grid */}
        <section className="px-6 py-24 border-t border-[var(--border-solid)]/30">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">What this grader <br />actually checks</h2>
                  <p className="text-[var(--muted)] text-lg mb-8 leading-relaxed">
                    This isn&apos;t a generic software crawl. This is a weighted diagnostic based on the actual checklist I use to audit local businesses.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded bg-[var(--carolina)]/10 flex items-center justify-center text-[var(--carolina)] mt-1">✓</div>
                      <p className="text-[var(--text)] font-medium">Google Business Profile Completeness</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded bg-[var(--carolina)]/10 flex items-center justify-center text-[var(--carolina)] mt-1">✓</div>
                      <p className="text-[var(--text)] font-medium">Website Trust & Conversion Signals</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded bg-[var(--carolina)]/10 flex items-center justify-center text-[var(--carolina)] mt-1">✓</div>
                      <p className="text-[var(--text)] font-medium">Local Authority & Citations</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="bucket-card">
                    <h3 className="font-bold mb-2">GBP Health — 30pts</h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">Verification, specialized services, and active review management strategy.</p>
                  </div>
                  <div className="bucket-card">
                    <h3 className="font-bold mb-2">Web Relevance — 30pts</h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">Mobile-first tap-to-call, localized city service pages, and technical SEO basics.</p>
                  </div>
                  <div className="bucket-card">
                    <h3 className="font-bold mb-2">Social Proof — 40pts</h3>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">Local authority content, Search Console alignment, and directory consistency.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-24 border-t border-[var(--border-solid)]/30 bg-[var(--surface-hover)]/30 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h2 className="text-3xl font-extrabold mb-12 text-center">Diagnostic FAQ</h2>
              <FAQAccordion questions={graderFaqs} />
            </Reveal>
          </div>
        </section>

        {/* Global CTA */}
        {!isStarted && (
          <section className="px-6 py-32 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--carolina)]/5 blur-[120px] rounded-full" />
            <div className="max-w-2xl mx-auto relative z-10">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Stop guessing. <br />Start growing.</h2>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="btn-glow inline-flex items-center gap-2 text-lg px-8 py-4 mb-6"
                >
                  Scroll back up to start &rarr;
                </button>
                <p className="text-[var(--muted)] text-sm uppercase tracking-widest font-medium">Free. 60 Seconds. Zero Risk.</p>
              </Reveal>
            </div>
          </section>
        )}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
