"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, style = {}, delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

export default function HomeClient({ posts }) {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .h1 { animation: fadeUp 0.8s ease forwards; }
        .h2 { animation: fadeUp 0.8s ease 0.2s forwards; opacity: 0; }
        .h3 { animation: fadeUp 0.8s ease 0.4s forwards; opacity: 0; }
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.revealed { opacity: 1; transform: translateY(0); }
        .btn-primary {
          background-color: var(--carolina);
          color: #000;
          padding: 0.9rem 2rem;
          border-radius: 6px;
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
          transition: opacity 0.2s;
        }
        .btn-primary:hover { opacity: 0.85; }
        .btn-outline {
          border: 1px solid var(--carolina);
          color: var(--carolina);
          padding: 0.9rem 2rem;
          border-radius: 6px;
          font-weight: bold;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.2s;
        }
        .btn-outline:hover { background-color: rgba(123,175,212,0.1); }
        .card {
          background-color: var(--surface);
          border: 1px solid var(--duke);
          border-radius: 10px;
          padding: 2rem;
          transition: border-color 0.3s, transform 0.3s;
          height: 100%;
        }
        .card:hover { border-color: var(--carolina); transform: translateY(-4px); }
        .timeline-item {
          position: relative;
          padding-left: 2rem;
          padding-bottom: 2.5rem;
          border-left: 2px solid var(--duke);
        }
        .timeline-item:last-child { border-left: 2px solid transparent; padding-bottom: 0; }
        .timeline-dot {
          position: absolute;
          left: -6px;
          top: 4px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--carolina);
        }
        .blog-card {
          background-color: var(--surface);
          border: 1px solid var(--duke);
          border-radius: 10px;
          padding: 2rem;
          text-decoration: none;
          display: block;
          transition: border-color 0.3s, transform 0.3s;
        }
        .blog-card:hover { border-color: var(--carolina); transform: translateY(-4px); }
        .pledge-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.5rem;
          border-left: 3px solid var(--carolina);
          background-color: var(--surface);
          border-radius: 0 8px 8px 0;
          margin-bottom: 1rem;
        }
          @media (max-width: 768px) {
  .hero-section { padding: 5rem 1.5rem 4rem !important; }
  .two-col { grid-template-columns: 1fr !important; gap: 2rem !important; }
  .three-col { grid-template-columns: 1fr !important; }
  .hide-mobile { display: none !important; }
  .form-row { grid-template-columns: 1fr !important; }
}
      `}</style>

      {/* 1. HERO */}
<section className="hero-section" style={{
  padding: "12rem 8rem 10rem",
  borderBottom: "1px solid var(--duke)",
  position: "relative",
  overflow: "hidden",
}}>
  {/* Grid background */}
  <div style={{
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(123,175,212,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(123,175,212,0.06) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)",
    pointerEvents: "none",
  }} />
  {/* Glow */}
  <div style={{
    position: "absolute",
    top: "-150px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(1,33,105,0.5) 0%, transparent 70%)",
    pointerEvents: "none",
  }} />

  <div style={{ maxWidth: "750px", position: "relative" }}>
    <p className="h1" style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1.5rem" }}>
      Local SEO & Web Development • Siloam Springs, AR
    </p>
    <h1 className="h1" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)", fontWeight: "800", lineHeight: 1.1, marginBottom: "1.5rem" }}>
      Your next customer just searched Google.{" "}
      <span style={{ color: "var(--carolina)" }}>They found your competitor.</span>
    </h1>
    <p className="h2" style={{ color: "var(--muted)", fontSize: "1.1rem", maxWidth: "580px", marginBottom: "2.5rem", lineHeight: 1.9 }}>
      Most NWA contractors do great work — but they're invisible online. I've spent years figuring out how local search actually works. Now I use that to help contractors like you get found and get hired.
    </p>
    <div className="h3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Link href="/contact" className="btn-primary">Let's Talk About Your Business</Link>
      <Link href="/about" className="btn-outline">Read My Story</Link>
    </div>
    <div style={{ display: "flex", gap: "2.5rem", marginTop: "3.5rem", flexWrap: "wrap" }}>
      {[
        { label: "Based in Siloam Springs, AR" },
        { label: "Built on Transparency" },
        { label: "Startup Energy, Real Skills" },
      ].map((item) => (
        <p key={item.label} style={{ color: "var(--muted)", fontSize: "0.85rem", margin: 0 }}>
          <span style={{ color: "var(--carolina)", marginRight: "0.5rem" }}>✓</span>{item.label}
        </p>
      ))}
    </div>
  </div>
</section>

      {/* 2. PROBLEM */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1rem" }}>The Problem</p>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: "800", marginBottom: "1rem" }}>
            You're great at what you do. But nobody can find you online.
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: "580px", margin: "0 auto", lineHeight: 1.9 }}>
            Every day, homeowners in NWA search Google for contractors. If you're not showing up, you're losing jobs to competitors who are — even if their work isn't as good as yours.
          </p>
        </Reveal>
        <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {[
            { icon: "🫥", title: "Invisible on Google Maps", desc: "Your competitors are in the Map Pack. You're buried on page 3 — or not showing up at all." },
            { icon: "💾", title: "Outdated or No Website", desc: "Your website doesn't reflect the quality of your work — or worse, you don't have one and leads go to someone who does." },
            { icon: "🗣️", title: "Relying on Word of Mouth", desc: "Referrals are great — but they don't scale. When they dry up, you need a system that keeps the phone ringing." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="card">
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ color: "var(--text)", marginBottom: "0.75rem", fontSize: "1.05rem" }}>{item.title}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. GUIDE */}
<section style={{ borderTop: "1px solid var(--duke)", borderBottom: "1px solid var(--duke)", padding: "5rem 2rem" }}>
  <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }} className="two-col">

    {/* Left — photo + stats */}
    <Reveal>
      <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid var(--duke)", marginBottom: "1.5rem" }}>
        <img
          src="/images/chad.jpg"
          alt="Chad Smith — Local Search Ally"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        {[
          { stat: "5+", label: "Years of hands-on local SEO experience" },
          { stat: "100%", label: "Focused exclusively on contractors" },
          { stat: "One Person", label: "SEO + web development no hand-offs" },
        ].map((item) => (
          <div key={item.label} style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--duke)",
            borderLeft: "4px solid var(--carolina)",
            borderRadius: "0 8px 8px 0",
            padding: "1rem 1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}>
            <span style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--carolina)", whiteSpace: "nowrap" }}>{item.stat}</span>
            <span style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.5 }}>{item.label}</span>
          </div>
        ))}
      </div>
    </Reveal>

    {/* Right — text */}
    <Reveal delay={200}>
      <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1rem" }}>
        Meet Your Guide
      </p>
      <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: "800", marginBottom: "1.5rem", lineHeight: 1.3 }}>
        I proved the method on myself first.
      </h2>
      <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
        I'm Chad, the founder of Local Search Ally — and I want to be upfront: I'm not a big agency with decades under my belt. I'm a startup founder in Siloam Springs who's obsessed with local SEO, and I've been proving it works on my own projects for years before ever offering it to anyone else.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
        I started by teaching myself SEO on my own projects — ranking my own sites, optimizing Google Business Profiles, and learning what actually works in local search. The results I got for myself are what convinced me I could do this for others.
      </p>
      <p style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
        Now I'm building web development skills too — so you get SEO and a site built to convert, all from one person who's accountable for both.
      </p>
      <Link href="/about" className="btn-outline">My Full Story</Link>
    </Reveal>
  </div>
</section>

      {/* 4. PLAN */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1rem" }}>The Plan</p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: "800", marginBottom: "1rem" }}>
            Getting found online doesn't have to be complicated.
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.9 }}>
            No jargon, no mystery. Just clear steps to get your business visible where it counts.
          </p>
        </Reveal>
        <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
          {[
            { number: "01", title: "We Talk (For Free)", desc: "Book a no-pressure conversation. I'll look at your current online presence, ask about your business, and be honest about what I can help with — and what I can't." },
            { number: "02", title: "Plan & Build", desc: "I'll optimize your Google Business Profile, clean up your citations, and build a site that converts. You'll know exactly what I'm doing and why — no surprises." },
            { number: "03", title: "Optimize & Grow", desc: "We launch, monitor, and keep improving. The goal is simple: when someone in NWA searches for your trade, you show up." },
          ].map((step, i) => (
            <Reveal key={step.number} delay={i * 150}>
              <div className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: "800", color: "var(--duke)", marginBottom: "1rem", opacity: 0.7 }}>{step.number}</div>
                <h3 style={{ color: "var(--carolina)", fontSize: "1.2rem", marginBottom: "1rem" }}>{step.title}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ textAlign: "center" }}>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "1.05rem", padding: "1rem 2.5rem" }}>
            Start With Step 1 — It's Free
          </Link>
        </Reveal>
      </section>

      {/* 5. WHAT I OFFER */}
<section style={{ borderTop: "1px solid var(--duke)", padding: "5rem 2rem" }}>
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
    <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
      <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1rem" }}>What I Offer</p>
      <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: "800", marginBottom: "1rem" }}>
        Local SEO expertise. Web development growing daily.
      </h2>
      <p style={{ color: "var(--muted)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.9 }}>
        Everything I offer points at one thing: more calls from people ready to hire.
      </p>
    </Reveal>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
      {[
        {
          label: "Core Strength",
          title: "Local SEO",
          desc: "Get your business ranking where your customers are searching — Google Maps, local results, and beyond. This is where my deepest experience lives.",
          tags: ["GBP Optimization", "Citations", "On-Page SEO"],
          highlight: true,
        },
        {
          label: "Growing Daily",
          title: "Web Design & Development",
          desc: "Fast, mobile-first websites built to convert visitors into calls. Every site is SEO-optimized from the ground up — because that's what I know best.",
          tags: ["Mobile-First", "SEO-Built", "Lead Gen"],
          highlight: false,
        },
        {
          label: "Clarity",
          title: "SEO Audits",
          desc: "Find out exactly why you're not ranking. A detailed, actionable report covering technical SEO, citation gaps, and competitor analysis — no fluff.",
          tags: ["Technical SEO", "Competitor Analysis", "Action Plan"],
          highlight: false,
        },
      ].map((item, i) => (
        <Reveal key={item.title} delay={i * 100}>
          <div className="card" style={{
            borderTop: item.highlight ? "3px solid var(--carolina)" : "1px solid var(--duke)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}>
            <p style={{
              color: item.highlight ? "var(--carolina)" : "var(--muted)",
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: "bold",
              margin: 0,
            }}>
              {item.label}
            </p>
            <h3 style={{ color: "var(--text)", fontSize: "1.15rem", margin: 0 }}>{item.title}</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.9rem", margin: 0, flex: 1 }}>{item.desc}</p>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {item.tags.map((tag) => (
                <span key={tag} style={{
                  backgroundColor: "rgba(1,33,105,0.4)",
                  border: "1px solid var(--duke)",
                  color: "var(--muted)",
                  fontSize: "0.7rem",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "100px",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>

    <Reveal style={{ textAlign: "center" }}>
      <Link href="/services" className="btn-outline">View All Services</Link>
    </Reveal>
  </div>
</section>

      {/* 6. SUCCESS vs FAILURE */}
      <section style={{ borderTop: "1px solid var(--duke)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1rem" }}>What's At Stake</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: "800" }}>Two paths forward.</h2>
            <p style={{ color: "var(--muted)", marginTop: "1rem", lineHeight: 1.9 }}>Every month you're invisible online is a month your competitors are winning jobs that should be yours.</p>
          </Reveal>
          <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <Reveal>
              <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--duke)", borderTop: "4px solid #c0392b", borderRadius: "10px", padding: "2rem" }}>
                <h3 style={{ color: "#c0392b", marginBottom: "1.5rem" }}>Do Nothing</h3>
                {[
                  "Competitors keep taking your potential customers",
                  "Referrals slow down and revenue becomes unpredictable",
                  "Great work goes unnoticed because nobody can find you",
                  "You stay stuck relying on luck instead of a system",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", alignItems: "flex-start" }}>
                    <span style={{ color: "#c0392b", flexShrink: 0 }}>✗</span>
                    <p style={{ color: "var(--muted)", margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--duke)", borderTop: "4px solid var(--carolina)", borderRadius: "10px", padding: "2rem" }}>
                <h3 style={{ color: "var(--carolina)", marginBottom: "1.5rem" }}>Take Action</h3>
                {[
                  "Show up when NWA homeowners search for your services",
                  "Get a steady stream of calls from people ready to hire",
                  "Build an online reputation that works for you when you're on a job site.",
                  "Work with someone transparent, hungry, and in your corner",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--carolina)", flexShrink: 0 }}>✓</span>
                    <p style={{ color: "var(--muted)", margin: 0, lineHeight: 1.7, fontSize: "0.95rem" }}>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. TRANSPARENCY PLEDGE */}
      <section style={{ borderTop: "1px solid var(--duke)", borderBottom: "1px solid var(--duke)", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "1rem" }}>My Transparency Pledge</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: "800" }}>No smoke. No mirrors. Just honest work.</h2>
          </Reveal>
          {[
            { promise: "✅ I will never claim results I haven't achieved.", detail: "Every case study on this site will be real work with real outcomes." },
            { promise: "✅ I will tell you if something is outside my skill set.", detail: "I'll either learn it fast or recommend someone who can help." },
            { promise: "✅ I will never lock you into a contract.", detail: "If I'm not delivering value, you can walk away. No hard feelings." },
            { promise: "✅ I will communicate clearly and often.", detail: "You'll always know what I'm working on and why." },
          ].map((item, i) => (
            <Reveal key={item.promise} delay={i * 100}>
              <div className="pledge-item">
                <span style={{ color: "var(--carolina)", fontSize: "1.2rem", flexShrink: 0 }}>✓</span>
                <div>
                  <p style={{ color: "var(--text)", fontWeight: "600", margin: "0 0 0.25rem" }}>{item.promise}</p>
                  <p style={{ color: "var(--muted)", margin: 0, fontSize: "0.9rem", lineHeight: 1.7 }}>{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <p style={{ color: "var(--muted)", textAlign: "right", marginTop: "1.5rem", fontStyle: "italic", fontSize: "0.9rem" }}>— Chad, Founder of Local Search Ally</p>
          </Reveal>
        </div>
      </section>


      {/* 8a. BLOG PREVIEWS */}
      {posts.length > 0 && (
        <section style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "0.5rem" }}>From The Blog</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "800", margin: 0 }}>What I'm learning. What I'm sharing.</h2>
            </div>
            <Link href="/blog" className="btn-outline">View All Posts</Link>
          </Reveal>
          <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {posts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link href={`/blog/${post.slug}`} className="blog-card">
                  <p style={{ color: "var(--muted)", fontSize: "0.8rem", marginBottom: "0.75rem" }}>
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </p>
                  <h3 style={{ color: "var(--text)", fontSize: "1.05rem", marginBottom: "0.75rem", lineHeight: 1.5 }}>{post.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, margin: "0 0 1rem" }}>{post.description}</p>
                  <span style={{ color: "var(--carolina)", fontSize: "0.85rem", fontWeight: "bold" }}>Read more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 8b. PORTFOLIO PREVIEW */}
<section style={{ borderTop: "1px solid var(--duke)", padding: "5rem 2rem" }}>
  <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
    <Reveal style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
      <div>
        <p style={{ color: "var(--carolina)", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem", marginBottom: "0.5rem" }}>Portfolio</p>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "800", margin: 0 }}>Real work. Real results.</h2>
      </div>
      <Link href="/portfolio" className="btn-outline">View All Work</Link>
    </Reveal>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
      {[
        {
          categoryLabel: "Web Development",
          title: "Local Search Ally Website",
          desc: "Built this site from scratch using Next.js 15 — documented as a live case study.",
          tags: ["Next.js", "Vercel", "MDX"],
          result: "Live at localsearchally.com",
          link: "/blog/how-i-built-this-website",
          live: true,
        },
        {
          categoryLabel: "Local SEO",
          title: "Local SEO Case Study",
          desc: "A real-world local SEO engagement with a contractor client — coming soon.",
          tags: ["Local SEO", "GBP", "Citations"],
          result: "Coming soon",
          live: false,
        },
        {
          categoryLabel: "GBP Optimization",
          title: "Google Business Profile Optimization",
          desc: "Full GBP audit and optimization for a local contractor — coming soon.",
          tags: ["GBP", "Map Pack", "Reviews"],
          result: "Coming soon",
          live: false,
        },
      ].map((project, i) => (
        <Reveal key={project.title} delay={i * 80}>
          <div className="card" style={{
            borderTop: project.live ? "3px solid var(--carolina)" : "1px solid var(--duke)",
            opacity: project.live ? 1 : 0.7,
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                <p style={{ color: project.live ? "var(--carolina)" : "var(--muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "bold", margin: 0 }}>
                  {project.categoryLabel}
                </p>
                <span style={{
                  backgroundColor: project.live ? "rgba(123,175,212,0.15)" : "rgba(1,33,105,0.3)",
                  border: `1px solid ${project.live ? "var(--carolina)" : "var(--duke)"}`,
                  color: project.live ? "var(--carolina)" : "var(--muted)",
                  fontSize: "0.7rem",
                  padding: "0.2rem 0.65rem",
                  borderRadius: "100px",
                  fontWeight: "bold",
                }}>
                  {project.live ? "Live" : "Coming Soon"}
                </span>
              </div>
              <h3 style={{ fontSize: "1.05rem", marginBottom: "0.75rem", color: "var(--text)" }}>{project.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>{project.desc}</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{
                    backgroundColor: "rgba(1,33,105,0.4)",
                    border: "1px solid var(--duke)",
                    color: "var(--muted)",
                    fontSize: "0.7rem",
                    padding: "0.2rem 0.65rem",
                    borderRadius: "100px",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ borderTop: "1px solid var(--duke)", paddingTop: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ color: project.live ? "var(--carolina)" : "var(--muted)", fontSize: "0.85rem", fontWeight: "600", margin: 0 }}>
                {project.result}
              </p>
              {project.live && (
                <Link href={project.link} style={{ color: "var(--carolina)", fontSize: "0.85rem", fontWeight: "bold", textDecoration: "none" }}>
                  Read more →
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      {/* 9. FINAL CTA */}
<section style={{
  padding: "6rem 2rem",
  textAlign: "center",
  borderTop: "1px solid var(--duke)",
  background: "radial-gradient(ellipse at 50% 100%, rgba(1,33,105,0.3) 0%, transparent 70%)",
}}>
  <Reveal>
    <p style={{ color: "var(--muted)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>
      Free Consultation • No Pressure • No Pitch
    </p>
    <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: "800", marginBottom: "1.25rem" }}>
      Let's have an honest conversation.
    </h2>
    <p style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto 3rem", lineHeight: 1.9 }}>
      Tell me about your business. I'll look at your online presence and give you my honest take on where you stand — even if that means I'm not the right fit.
    </p>
    <form
      action="https://formspree.io/f/mkoqvkzr"
      method="POST"
      style={{
        maxWidth: "560px",
        margin: "0 auto",
        display: "grid",
        gap: "1rem",
      }}
    >
      <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        {[
          { name: "name", placeholder: "Your Name", type: "text" },
          { name: "business", placeholder: "Business Name", type: "text" },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--duke)",
              borderRadius: "6px",
              padding: "0.85rem 1rem",
              color: "var(--text)",
              fontSize: "0.95rem",
              outline: "none",
              width: "100%",
              boxSizing: "border-box",
              fontFamily: "var(--font-satoshi)",
            }}
          />
        ))}
      </div>
      <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        {[
          { name: "phone", placeholder: "Phone Number", type: "tel" },
          { name: "email", placeholder: "Email Address", type: "email" },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--duke)",
              borderRadius: "6px",
              padding: "0.85rem 1rem",
              color: "var(--text)",
              fontSize: "0.95rem",
              outline: "none",
              width: "100%",
              boxSizing: "border-box",
              fontFamily: "var(--font-satoshi)",
            }}
          />
        ))}
      </div>
      <textarea
        name="challenge"
        placeholder="What's your biggest challenge right now?"
        rows={4}
        required
        style={{
          backgroundColor: "var(--surface)",
          border: "1px solid var(--duke)",
          borderRadius: "6px",
          padding: "0.85rem 1rem",
          color: "var(--text)",
          fontSize: "0.95rem",
          outline: "none",
          width: "100%",
          boxSizing: "border-box",
          resize: "vertical",
          fontFamily: "var(--font-satoshi)",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "var(--carolina)",
          color: "#000",
          padding: "1rem",
          borderRadius: "6px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          fontSize: "1rem",
          fontFamily: "var(--font-satoshi)",
          transition: "opacity 0.2s",
        }}
      >
        Let's Talk — It's Free
      </button>
      <p style={{ color: "var(--muted)", fontSize: "0.8rem", margin: 0 }}>
        No spam. No sales pitch. Just an honest conversation about your business.
      </p>
    </form>
  </Reveal>
</section>
    </>
  );
}