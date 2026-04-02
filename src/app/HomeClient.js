"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import {
  motion as m,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
  useInView,
  AnimatePresence,
} from "framer-motion";

const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas"), {
  ssr: false,
});

// ─── Animation constants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── CountUp (viewport-triggered number animation) ───────────────────────────

function CountUp({ to, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (shouldReduce) { setDisplay(to); return; }
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 1000 / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration, shouldReduce]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// ─── Spotlight (mouse-following glow) ────────────────────────────────────────

function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 35, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 35, stiffness: 200 });

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(1000px circle at ${x}px ${y}px, rgba(123,175,212,0.1), rgba(123,175,212,0.02) 30%, transparent 70%)`
  );

  return (
    <m.div
      className="fixed inset-0 pointer-events-none z-[2]"
      style={{ background }}
    />
  );
}

function GlassFrame({ children, className = "" }) {
  return (
    <div className={`relative group ${className}`}>
      {/* Outer Glow */}
      <div className="absolute -inset-4 bg-carolina/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      {/* 3D Glass Layer */}
      <div className="relative glass-premium rounded-2xl overflow-hidden p-1.5 transform-gpu transition-all duration-700 group-hover:scale-[1.01] group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
        {/* Inner Refraction */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
        {children}
        
        {/* Scanning Line Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
           <m.div 
             animate={{ y: ["-100%", "200%"] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="w-full h-1/2 bg-gradient-to-b from-transparent via-carolina/5 to-transparent opacity-50"
           />
        </div>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-carolina/30 rounded-tl-lg" />
      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-carolina/30 rounded-br-lg" />
    </div>
  );
}

// ─── Shared primitives ────────────────────────────────────────────────────────

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2.5 mb-4">
      <div className="w-3 h-px bg-carolina opacity-50" />
      <p className="text-[0.62rem] font-bold tracking-[0.22em] uppercase text-carolina font-mono m-0">
        {children}
      </p>
    </div>
  );
}

function SectionH2({ children, className = "" }) {
  return (
    <h2
      className={`font-serif text-[clamp(2.2rem,6vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#f8f9fa] mb-6 ${className}`}
    >
      {children}
    </h2>
  );
}

function BodyText({ children, className = "" }) {
  return (
    <p
      className={`text-muted text-[1.1rem] leading-[1.7] font-sans mb-5 max-w-[620px] ${className}`}
    >
      {children}
    </p>
  );
}

function PrimaryBtn({ href, children, className = "" }) {
  return (
    <m.div
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link
        href={href}
        className={`inline-flex items-center justify-center bg-gradient-to-br from-carolina to-steel text-[#1e2a3a] font-semibold text-[0.78rem] tracking-[0.1em] uppercase font-mono px-8 py-4 rounded-md min-h-[44px] no-underline transition-shadow hover:shadow-[0_10px_20px_-5px_rgba(123,175,212,0.4)] focus-visible:ring-2 focus-visible:ring-carolina ${className}`}
      >
        {children}
      </Link>
    </m.div>
  );
}

function OutlineBtn({ href, children, className = "" }) {
  return (
    <m.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={`inline-flex items-center justify-center border border-white/[0.14] text-carolina font-semibold text-[0.78rem] tracking-[0.1em] uppercase font-mono px-7 py-4 rounded-md min-h-[44px] no-underline transition-all hover:border-carolina hover:bg-carolina/5 hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-carolina ${className}`}
      >
        {children}
      </Link>
    </m.div>
  );
}

// ─── PerspectiveSection (3D scroll parallax wrapper) ─────────────────────────

function PerspectiveSection({ children }) {
  const ref = useRef(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduce ? [0, 0, 0] : [10, 0, -10]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    shouldReduce ? [1, 1, 1] : [0.95, 1, 0.95]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative" style={{ perspective: "1200px" }}>
      <m.div style={{ rotateX, scale, opacity, transformOrigin: "center" }}>
        {children}
      </m.div>
    </section>
  );
}

// ─── Section data ─────────────────────────────────────────────────────────────

const problemCards = [
  {
    label: "On Google Maps",
    body: "Your competitors are in the Map Pack. You're buried below them — or not showing up at all. Customers searching your trade in your city right now are calling someone else.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "On your website",
    body: "An outdated site, or no site at all, tells customers to keep scrolling. It doesn't matter how good the work is if the first impression is a page that looks like it hasn't been touched since 2015.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    label: "In your reviews",
    body: "You've done hundreds of jobs. But online you might look like the new guy. Customers can't tell who's been operating for twenty years and who started six months ago.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const planSteps = [
  {
    num: "01",
    title: "Audit",
    body: "I review your Google Business Profile, website, competitor ranking, and local citation health to find what's actually costing you calls.",
    cta: { label: "Start with the free audit →", href: "/audit" },
    active: true,
  },
  {
    num: "02",
    title: "Fix Priority Gaps",
    body: "Not everything at once. What matters most first — the things that move you up in search before anything else.",
    cta: null,
    active: false,
  },
  {
    num: "03",
    title: "Grow and Track",
    body: "Monthly reports on what's improving and what's next. You see the data, not just a summary.",
    cta: null,
    active: false,
  },
];

const auditAreas = [
  "GBP",
  "Reviews",
  "Website",
  "Technical",
  "Citations",
  "Backlinks",
  "Competitors",
];

const faqItems = [
  {
    q: "What does the free audit actually check?",
    a: "Seven areas: your Google Business Profile, review count and recency, your website's on-page setup, technical health (page speed, schema markup, mobile), citation consistency across directories like Yelp and Angi, backlink signals, and how you compare to the top three competitors showing up for your trade in your city. Each section gets a score and a plain-English finding.",
  },
  {
    q: "I don't have a website. Can you still help?",
    a: "Yes — and the audit will show you exactly what not having one is costing you in search. Most of the calls going to your competitors are coming from people who found them on Google, not through a referral. A site built for local search changes that.",
  },
  {
    q: "How is this different from hiring an SEO agency?",
    a: "Most agencies sell packages and report on numbers you can't connect to actual calls. I work with a small number of clients, no contracts, and if what I'm doing isn't working I'll tell you before you figure it out yourself.",
  },
  {
    q: "How long before I see results?",
    a: "Most businesses see meaningful ranking movement in 60–90 days, depending on how competitive your trade is in your city. I'll tell you what's realistic for your specific situation before we start — not after you've already paid.",
  },
  {
    q: "What does it cost?",
    a: "Depends on what you need. The audit is free. If you want to talk through what fixing the gaps would look like, that conversation is free too.",
  },
  {
    q: "Do I have to sign a contract?",
    a: "No. I don't offer them.",
  },
  {
    q: "Why should I trust someone I've never heard of?",
    a: "Fair question. I'm a startup in Siloam Springs — no decade of client case studies. What I have is a method I've tested on my own demo sites, data I can show you, and a commitment I intend to keep: if I'm not delivering, you leave. Start with the free audit. You'll get a pretty good sense of whether I know what I'm talking about.",
  },
];

// ─── Main component ───────────────────────────────────────────────────────────

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hero scroll parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroRotateX = useTransform(
    heroScroll,
    [0, 1],
    shouldReduce ? [0, 0] : [0, 12]
  );
  const heroScale = useTransform(
    heroScroll,
    [0, 1],
    shouldReduce ? [1, 1] : [1, 0.94]
  );
  const heroOpacity = useTransform(heroScroll, [0, 0.85], [1, 0]);

  // Problem cards parallax
  const problemRef = useRef(null);
  const { scrollYProgress: problemScroll } = useScroll({
    target: problemRef,
    offset: ["start end", "end start"],
  });
  const py1 = useTransform(problemScroll, [0, 1], [-40, 40]);
  const py2 = useTransform(problemScroll, [0, 1], [-80, 80]);
  const py3 = useTransform(problemScroll, [0, 1], [-120, 120]);
  const pr1 = useTransform(problemScroll, [0, 1], [-4, 4]);
  const pr2 = useTransform(problemScroll, [0, 1], [6, -6]);
  const pr3 = useTransform(problemScroll, [0, 1], [-2, 2]);
  const cardParallax = [
    { y: py1, r: pr1 },
    { y: py2, r: pr2 },
    { y: py3, r: pr3 },
  ];

  // Success stat 3D scroll-in
  const stakesRef = useRef(null);
  const { scrollYProgress: stakesScroll } = useScroll({
    target: stakesRef,
    offset: ["start end", "center center"],
  });
  const stakesRotateX = useTransform(
    stakesScroll,
    [0, 1],
    shouldReduce ? [0, 0] : [45, 0]
  );
  const stakesRotateY = useTransform(
    stakesScroll,
    [0, 1],
    shouldReduce ? [0, 0] : [-30, 0]
  );
  const stakesScale = useTransform(stakesScroll, [0, 1], [0.8, 1]);
  const stakesOpacity = useTransform(stakesScroll, [0, 0.5], [0, 1]);

  return (
    <div className="tech-grid min-h-screen selection:bg-carolina/30" style={{ background: "var(--bg)" }}>
      <Spotlight />
      <ThreeCanvas />
      <div className="noise">

        {/* ─── HERO ─────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative max-w-[1400px] mx-auto"
          style={{ perspective: "1000px" }}
        >
            <m.div
              style={{
                rotateX: mounted ? heroRotateX : 0,
                scale: mounted ? heroScale : 1,
                opacity: mounted ? heroOpacity : 1,
                transformOrigin: "top",
              }}
              className="px-[var(--page-gutter)] pt-[clamp(8rem,12vw,10rem)] pb-[var(--section-spacing)] flex flex-col items-start"
            >
            {/* Page-load stagger — initial/animate, not whileInView */}
            <m.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="w-full"
            >
              <m.div variants={fadeUp}>
                <Eyebrow>Free Local SEO Audit for NWA Contractors</Eyebrow>
              </m.div>

              <m.h1
                variants={fadeUp}
                className="font-serif text-[clamp(2.5rem,8.5vw,6.5rem)] font-extrabold leading-[1.0] tracking-[-0.05em] text-[#f8f9fa] mb-12 max-w-[1200px] relative z-10"
              >
                Your competitors are taking calls{" "}
                <span className="text-carolina-dark">that should be yours.</span>
              </m.h1>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-[clamp(2rem,6vw,5rem)] items-start">
                {/* Left: copy + CTAs */}
                <m.div variants={fadeUp} className="max-w-[580px] relative z-10">
                  <p className="text-[#c0c0c0] text-[clamp(1.15rem,2.2vw,1.45rem)] leading-[1.5] font-sans mb-8 font-medium">
                    97% of people use Google to find local contractors. If
                    you&apos;re not in the top results, you&apos;re invisible.
                  </p>
                  <p className="text-[#888] text-[1.1rem] leading-[1.8] font-sans mb-12">
                    The best contractor in town shouldn&apos;t be the hardest to
                    find. I give you the data to fix your visibility gap and
                    start winning the search.
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <PrimaryBtn href="/audit" className="text-[0.85rem] px-9 py-[18px]">
                      Run Your Free Audit Now →
                    </PrimaryBtn>
                    <a
                      href="tel:+14793808626"
                      className="inline-flex items-center gap-2 text-[#888] text-[0.9rem] font-sans hover:text-[#f0f0f0] transition-colors min-h-[44px]"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      (479) 380-8626
                    </a>
                  </div>

                  <p className="text-[#555] text-[0.75rem] font-mono mt-5">
                    90s AUDIT · REAL DATA · NO EMAIL REQUIRED
                  </p>
                </m.div>

                {/* Right: sample audit preview - Layered HUD */}
                <div className="relative">
                  <m.div
                    variants={fadeUp}
                    className="w-full lg:w-[380px] p-8 glass-premium rounded-2xl flex flex-col gap-6 cursor-default relative overflow-hidden group hud-frame lg:absolute lg:top-[-100px] lg:right-[-20px] lg:z-20 lg:shadow-[0_45px_110px_rgba(0,0,0,0.8)]"
                  >
                    <div className="bracket-top" />
                    <div className="bracket-bottom" />
                    <div className="bracket-right" />
                    
                    {/* Pulsing Nodes in corners */}
                    <div className="absolute top-2 left-2 pulsing-node opacity-40" />
                    <div className="absolute top-2 right-2 pulsing-node opacity-40" />
                    <div className="absolute bottom-2 left-2 pulsing-node opacity-40" />
                    <div className="absolute bottom-2 right-2 pulsing-node opacity-40" />
                    
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
                      <m.div
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                        className="w-full h-1/3 bg-gradient-to-b from-transparent via-carolina/10 to-transparent"
                      />
                    </div>
                    
                    <div className="flex justify-between items-center relative z-10">
                      <span className="font-mono text-[0.6rem] text-carolina tracking-[0.2em] font-bold">
                        DIAGNOSTIC · ROGERS, AR
                      </span>
                      <m.span 
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_12px_var(--green)]" 
                      />
                    </div>
                    <div className="font-serif text-[0.95rem] text-text font-bold leading-none relative z-10">
                      Apex Plumbing &amp; Drain
                    </div>
                    <div className="h-px bg-border-strong relative z-10" />
                    <div className="flex flex-col gap-4 relative z-10">
                      {[
                        { label: "GBP Optimization", score: 42, status: "yellow" },
                        { label: "Review Velocity",  score: 61, status: "yellow" },
                        { label: "On-Page SEO",      score: 28, status: "red"    },
                        { label: "Citation Health",  score: 55, status: "yellow" },
                        { label: "The Invisibility Gap", score: 34, status: "red"    },
                      ].map(({ label, score, status }) => (
                        <div key={label} className="group/item">
                          <div className="flex justify-between text-[0.65rem] font-mono mb-2">
                            <span className="text-muted group-hover/item:text-carolina transition-colors">{label}</span>
                            <span className="font-bold" style={{ color: `var(--${status})` }}>
                              {mounted ? <CountUp to={score} duration={1.5} /> : score}/100
                            </span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                            <m.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${score}%` }}
                              viewport={{ once: true }}
                              className="h-full rounded-full transition-all duration-1000"
                              style={{
                                background: `var(--${status})`,
                                boxShadow: `0 0 10px var(--${status})`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-border-strong relative z-10">
                      <p className="text-[0.65rem] font-mono text-muted group-hover:text-carolina transition-colors m-0 tracking-[0.15em] font-bold">
                        DATA FEED ACTIVE // 90s AUDIT
                      </p>
                    </div>
                  </m.div>
                </div>
              </div>
            </m.div>
          </m.div>
        </section>

        <PerspectiveSection>
          <div
            ref={problemRef}
            className="px-[var(--page-gutter)] py-[var(--section-spacing)]"
          >
            <div className="max-w-[700px] mb-[60px]">
              <Eyebrow>The Problem</Eyebrow>
              <SectionH2>Good work used to be enough.</SectionH2>
              <BodyText>
                You built something real. You show up on time, do the job right,
                and your customers tell their neighbors. But the homeowner who
                needs a repair{" "}
                <strong className="text-[#f0f0f0]">this week</strong> isn&apos;t
                asking a neighbor first.
              </BodyText>
              <BodyText className="text-carolina font-medium">
                They&apos;re opening Google. And if you&apos;re not in the
                &quot;Map Pack&quot;, you don&apos;t exist to them.
              </BodyText>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1100px] mx-auto"
              style={{ perspective: "1200px" }}
            >
              {problemCards.map((card, i) => (
                <m.div
                  key={card.label}
                  className="glass-premium rounded-xl p-10 relative overflow-hidden cursor-default transition-all duration-500 hover:border-carolina/50 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: i * 0.1,
                  }}
                  style={{
                    y: mounted ? cardParallax[i].y : 0,
                    rotateY: mounted ? cardParallax[i].r : 0,
                  }}
                >
                  <div className="absolute top-[-15px] right-[-15px] text-[6rem] font-black text-carolina opacity-[0.04] font-serif pointer-events-none select-none">
                    0{i + 1}
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-carolina/10 border border-carolina/20 text-carolina mb-8 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <p className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-muted font-mono mb-4">
                    {card.label}
                  </p>
                  <p className="text-text text-[1.15rem] leading-[1.6] font-sans font-medium">
                    {card.body}
                  </p>
                  
                  {/* Bottom accented line */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-carolina/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </m.div>
              ))}
            </div>
          </div>
        </PerspectiveSection>

        {/* ─── GUIDE ────────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div className="max-w-[1400px] mx-auto px-[var(--page-gutter)] py-[var(--section-spacing)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">

              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Eyebrow>Not Another Agency</Eyebrow>
                <SectionH2 className="max-w-[600px]">
                  I know why you&apos;re skeptical.
                </SectionH2>

                <BodyText>
                  If you&apos;ve hired a marketing company before and walked away
                  feeling like you paid for reports instead of results — I get it.
                  Most agencies sell the idea of results. They hand you a 40-page
                  document, disappear for three months, and call it strategy.
                </BodyText>
                <BodyText>
                  I&apos;m one person in Siloam Springs, and I don&apos;t take on
                  clients I can&apos;t actually help. If something is outside my
                  skill set, I&apos;ll say so before you pay for it.
                </BodyText>

                <div className="flex flex-col gap-6 mt-10">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-carolina/10 flex items-center justify-center text-carolina">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#f0f0f0] font-bold text-base mb-1">
                        No contracts, ever.
                      </div>
                      <div className="text-[#888] text-[0.9rem] leading-[1.5]">
                        Zero lock-in. If what I&apos;m doing isn&apos;t working,
                        you walk. No paperwork, no fees.
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-carolina/10 flex items-center justify-center text-carolina">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[#f0f0f0] font-bold text-base mb-1">
                        You&apos;ll always know what&apos;s happening.
                      </div>
                      <div className="text-[#888] text-[0.9rem] leading-[1.5]">
                        Monthly reports with plain findings — not agency metrics
                        you can&apos;t connect to actual calls.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-carolina/[0.03] border-l-[3px] border-carolina pl-6 py-5 pr-6 rounded-r-xl mt-10">
                  <p className="text-[#f0f0f0] text-[0.95rem] leading-[1.6] font-sans m-0 font-medium">
                    28% of searches for a nearby service result in a purchase that
                    same day.{" "}
                    <span className="text-carolina">
                      That&apos;s the call you&apos;re missing right now.
                    </span>
                  </p>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <GlassFrame className="aspect-square">
                  <Image
                    src="/images/chad.avif"
                    alt="Chad Smith, founder of Local Search Ally"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale contrast-[1.1] brightness-110"
                  />
                </GlassFrame>

                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-[-115px] left-[-40px] p-6 rounded-xl border border-carolina/30 max-w-[300px] backdrop-blur-[12px] z-10 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                  style={{ background: "rgba(6,6,7,0.75)" }}
                >
                  <div className="font-mono text-[0.65rem] tracking-[0.2em] text-carolina mb-4 flex items-center gap-2.5 font-bold">
                    <span className="w-1.5 h-1.5 bg-carolina rounded-full" />
                    Chad Smith · Local Search Ally
                  </div>
                  <p className="text-[#f0f0f0] text-[1.05rem] leading-[1.6] m-0 italic font-semibold">
                    &quot;I&apos;m not here to sell you a retainer. I&apos;m here
                    to help you rank above whoever&apos;s taking your calls right
                    now.&quot;
                  </p>
                </m.div>
              </m.div>

            </div>
          </div>
        </PerspectiveSection>

        {/* ─── PLAN ─────────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div className="relative px-[var(--page-gutter)] py-[var(--section-spacing)]" style={{ background: "linear-gradient(180deg, var(--bg) 0%, #0a1118 30%, #0a1118 70%, var(--bg) 100%)" }}>
            <div className="max-w-[1100px] mx-auto">
              <div className="text-center mb-[60px]">
                <Eyebrow>How This Works</Eyebrow>
                <SectionH2>Three steps. No surprises.</SectionH2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {planSteps.map((step, i) => (
                  <m.div
                    key={step.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                      delay: i * 0.1,
                    }}
                    className={`rounded-2xl p-10 relative border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] ${
                      step.active
                        ? "glass-premium border-carolina/40 shadow-[0_20px_50px_rgba(123,175,212,0.15)]"
                        : "bg-white/[0.01] border-white/[0.06] hover:border-carolina/30"
                    }`}
                  >
                    <div className="font-mono text-[0.8rem] text-carolina mb-5 font-bold">
                      {step.num}
                    </div>
                    <h3 className="font-serif text-2xl font-extrabold text-[#f0f0f0] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-[#c0c0c0] text-base leading-[1.7] font-sans mb-6">
                      {step.body}
                    </p>
                    {step.cta && (
                      <Link
                        href={step.cta.href}
                        className="text-carolina font-semibold text-[0.9rem] no-underline relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-current hover:after:w-full after:transition-all"
                      >
                        {step.cta.label}
                      </Link>
                    )}
                  </m.div>
                ))}
              </div>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-[800px] mx-auto mt-[60px] bg-white/[0.02] border border-white/[0.08] rounded-xl px-8 py-6 flex flex-wrap gap-x-10 gap-y-6 justify-center"
              >
                {[
                  "No contracts, ever.",
                  "Full transparency.",
                  "Real results, no fluff.",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#7bafd4"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-[0.85rem] text-[#f0f0f0] font-semibold">
                      {text}
                    </span>
                  </div>
                ))}
              </m.div>
            </div>
          </div>
        </PerspectiveSection>

        {/* ─── AUDIT TOOL ───────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div className="max-w-[900px] mx-auto text-center px-[var(--page-gutter)] py-[var(--section-spacing)]">
            <Eyebrow>Free Tool</Eyebrow>
            <SectionH2>
              See your scores{" "}
              <span className="text-carolina">before</span> you talk to anyone.
            </SectionH2>
            <BodyText className="mx-auto mb-10">
              Enter your business name, trade, and city. In about 90 seconds
              you&apos;ll get a scored audit across seven critical areas.
            </BodyText>

            <m.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-premium p-12 rounded-3xl relative overflow-hidden mb-10 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-carolina to-transparent opacity-40" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" />
              
              <PrimaryBtn href="/audit" className="text-base px-16 py-6 shadow-[0_0_40px_rgba(123,175,212,0.3)] hover:shadow-[0_0_60px_rgba(123,175,212,0.5)]">
                Launch Diagnostic Dashboard →
              </PrimaryBtn>
              <p className="text-muted text-[0.8rem] mt-6 font-mono font-bold tracking-[0.1em]">
                ENCRYPTED CONNECTION · 90s PROCESSING · NO EMAIL REQUIRED
              </p>
            </m.div>
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-center opacity-60"
              aria-label="Audit covers"
            >
              {auditAreas.map((area, i) => (
                <span key={area} className="inline-flex items-center">
                  <span className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#888] font-mono">
                    {area}
                  </span>
                  {i < auditAreas.length - 1 && (
                    <span className="inline-block w-1 h-1 rounded-full bg-carolina ml-6 opacity-30" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </PerspectiveSection>

        {/* ─── SUCCESS ──────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div
            ref={stakesRef}
            className="max-w-[1400px] mx-auto px-[var(--page-gutter)] py-[var(--section-spacing)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] items-center">
              <div style={{ perspective: "1000px" }}>
                <m.div
                  className="aspect-square bg-carolina/5 border border-white/[0.08] rounded-3xl flex items-center justify-center relative overflow-hidden"
                  style={{
                    rotateX: mounted ? stakesRotateX : 0,
                    rotateY: mounted ? stakesRotateY : 0,
                    scale: mounted ? stakesScale : 1,
                    opacity: mounted ? stakesOpacity : 1,
                  }}
                >
                  <div className="scanning-line" />
                  <div
                    className="absolute w-4/5 h-4/5 border border-dashed border-carolina rounded-full opacity-20"
                    style={{ animation: "spin 20s linear infinite" }}
                  />
                  <div className="absolute text-center bg-black/40 backdrop-blur-md p-8 rounded-full border border-carolina/20 shadow-[0_0_50px_rgba(123,175,212,0.1)]">
                    <div className="text-[clamp(3.5rem,12vw,5rem)] font-extrabold text-[#f8f9fa] leading-none tracking-tighter">
                      <CountUp to={97} suffix="%" duration={2.5} />
                    </div>
                    <div className="text-[0.7rem] font-mono text-carolina mt-3 tracking-[0.3em] font-bold">
                      OF SEARCHES START ON GOOGLE
                    </div>
                  </div>
                </m.div>
              </div>

              <div>
                <Eyebrow>What Success Looks Like</Eyebrow>
                <SectionH2>
                  The phone rings from people who already want to hire you.
                </SectionH2>
                <BodyText>
                  When visibility gaps are fixed, you stop depending on referral
                  timing. Someone needs HVAC before summer hits. They open Google,
                  they find you, they call.
                </BodyText>
                <BodyText>
                  What that looks like day-to-day: a schedule that fills from
                  search, not just referrals. Calls from people who already know
                  what they need.
                </BodyText>
              </div>
            </div>
          </div>
        </PerspectiveSection>

        {/* ─── STAKES ───────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div className="px-[var(--page-gutter)] py-[var(--section-spacing)]">
            <m.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-[1000px] mx-auto glass-premium rounded-3xl p-[clamp(3rem,8vw,5rem)] text-center relative overflow-hidden"
            >
              <div className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] bg-carolina blur-[160px] opacity-[0.08] pointer-events-none" />
              <SectionH2 className="max-w-[800px] mx-auto mb-8">
                Every month you&apos;re invisible is work going to a competitor.
              </SectionH2>
              <BodyText className="max-w-[720px] mx-auto mb-12">
                Referrals are real business. But they&apos;re not a system —
                they&apos;re a streak. When the streak slows, you need a machine
                that produces calls. I build the machine.
              </BodyText>
              <div className="flex justify-center">
                <PrimaryBtn href="/audit" className="px-12 py-5 text-[0.9rem]">
                  See Where You Stand Online →
                </PrimaryBtn>
              </div>
            </m.div>
          </div>
        </PerspectiveSection>

        {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div className="max-w-[1400px] mx-auto px-[var(--page-gutter)] py-[var(--section-spacing)]">
            <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-[60px]">
              <div>
                <Eyebrow>Transparency</Eyebrow>
                <SectionH2>Questions worth asking.</SectionH2>
                <BodyText>
                  I don&apos;t expect you to take my word for it. Here is how I
                  work, what it costs, and why I don&apos;t use contracts.
                </BodyText>
              </div>

              <dl>
                {faqItems.map((item, i) => (
                  <m.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-t border-border mx-[-1rem] px-6 py-8 rounded-lg hover:bg-white/[0.02] hover:border-carolina/20 transition-all group"
                  >
                    <dt className="font-sans text-[1.2rem] font-bold text-text mb-4 leading-[1.3] group-hover:text-carolina transition-colors">
                      {item.q}
                    </dt>
                    <dd className="font-sans text-base text-muted leading-[1.7] m-0">
                      {item.a}
                    </dd>
                  </m.div>
                ))}
                <div className="border-t border-border" />
              </dl>
            </div>
          </div>
        </PerspectiveSection>

        {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
        <PerspectiveSection>
          <div className="max-w-[1400px] mx-auto text-center px-[var(--page-gutter)] py-[var(--section-spacing)] relative">
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <SectionH2 className="text-[clamp(2rem,5vw,3.5rem)]">
                The best contractor in town shouldn&apos;t be the hardest to find.
              </SectionH2>
              <BodyText className="mx-auto mb-10 max-w-[600px]">
                Run the free audit. If the findings are useful on their own, take
                them. If you want to talk through fixing them, I&apos;m here.
              </BodyText>
              <div className="flex items-center justify-center gap-5 flex-wrap">
                <PrimaryBtn href="/audit" className="px-12 py-5">
                  Run Your Free Audit →
                </PrimaryBtn>
                <OutlineBtn href="/contact">
                  Let&apos;s Talk — It&apos;s Free →
                </OutlineBtn>
              </div>
              <p className="text-[#555] text-[0.75rem] mt-6 font-mono">
                NO PITCH · NO PRESSURE · REAL DATA
              </p>
            </m.div>
          </div>
        </PerspectiveSection>

      </div>
    </div>
  );
}
