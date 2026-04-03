"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";
import ThreeCanvas from "@/components/ThreeCanvas";

import { Container, Section, Stack } from "@/components/ui/Layout";
import { H1, H2, Body, Eyebrow } from "@/components/ui/Typography";
import { GlassCard, SurfaceCard } from "@/components/ui/Cards";
import { PrimaryBtn, OutlineBtn } from "@/components/ui/Buttons";

// ─── FAQ ACCORDION ────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What does the free audit actually check?",
    node: (
      <>
        Seven areas: your Google Business Profile, review count, website&apos;s on-page setup, technical health (speed, schema), citation consistency, backlinks, and competitor comparison.{" "}
        <Link href="/audit" className="text-carolina underline underline-offset-4 hover:text-carolina-dark transition-colors">
          Run it free here →
        </Link>
      </>
    ),
  },
  { q: "I don't have a website. Can you help?", a: "Yes — and the audit will show you exactly what not having one is costing you in search. Most of the calls going to your competitors are coming from people who found them on Google." },
  { q: "How long before I see results?", a: "Most businesses see meaningful ranking movement in 60–90 days, depending on how competitive your trade is in your city." },
  { q: "Do I have to sign a contract?", a: "No. I don't offer them. If I stop delivering, you leave." },
];

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <button
        onClick={onToggle}
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          width: "100%", textAlign: "left", padding: "1.75rem 0",
          cursor: "pointer", background: "none", border: "none",
          color: isOpen ? "var(--color-carolina)" : "var(--color-text)", transition: "color 0.25s",
        }}
      >
        <span className="font-serif text-[1.3rem] font-bold" style={{ lineHeight: 1.3 }}>
          {faq.q}
        </span>
        <span
          style={{
            width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0,
            marginLeft: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center",
            border: "1px solid rgba(123,175,212,0.3)", color: "var(--color-carolina)",
            fontSize: "1.25rem", fontWeight: "300", lineHeight: 1,
            background: isOpen ? "rgba(123,175,212,0.1)" : "transparent",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease, background 0.25s",
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="font-sans leading-relaxed text-muted pb-7 text-base"
            >
              {faq.node ?? faq.a}
            </p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <Stack gap="0rem">
      <div>
        {FAQ_ITEMS.map((faq, i) => (
          <FaqItem
            key={i}
            faq={faq}
            isOpen={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? null : i)}
          />
        ))}
      </div>

      {/* Primary CTA below the last question */}
      <div className="pt-10 flex flex-col gap-3">
        <div><PrimaryBtn href="/audit">Run Your Free Audit →</PrimaryBtn></div>
        <p className="font-mono text-[0.6rem] font-bold tracking-[0.2em] uppercase text-muted/40">
          See your scores in 90 seconds — no email required
        </p>
      </div>
    </Stack>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="min-h-screen bg-bg" />;

  return (
    <div className="relative text-text selection:bg-carolina selection:text-bg">
      <ThreeCanvas />

      {/* ─── HERO ───────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ paddingTop: "120px", paddingBottom: "8rem" }}
      >
        <Container className="relative z-10">
          <Stack gap="2rem" style={{ maxWidth: "900px" }}>

            <Eyebrow>LOCAL SEO FOR NWA CONTRACTORS</Eyebrow>

            <H1>
              Your competitors are getting calls{" "}
              <span className="text-carolina-dark">that should be yours.</span>
            </H1>

            <Body variant="hero" className="max-w-[660px]">
              46% of all Google searches have local intent. If your name isn&apos;t in the results, the call goes to whoever is.
            </Body>

            <Stack gap="1.25rem">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <PrimaryBtn href="/audit">Run Your Free Audit →</PrimaryBtn>
              </m.div>
              <div className="flex flex-wrap gap-6">
                {["47 Contractors Audited", "90-Second Results", "No Email Needed", "Zero Pitch"].map((item, i) => (
                  <m.span 
                    key={item} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 + (i * 0.1) }}
                    className="font-mono text-[0.6rem] font-bold tracking-[0.2em] uppercase text-muted/40"
                  >
                    {item}
                  </m.span>
                ))}
              </div>
            </Stack>

          </Stack>
        </Container>

        {/* Scroll cue */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="font-mono text-[0.55rem] tracking-[0.35em] text-muted/40 uppercase">Scroll</span>
          <m.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted/40 text-lg leading-none"
          >
            ↓
          </m.div>
        </m.div>

        <div className="absolute left-0 top-[25%] w-full h-px bg-gradient-to-r from-transparent via-carolina/20 to-transparent animate-pulse pointer-events-none" />
      </section>

      {/* ─── PROBLEM ────────────────────────────────────────────────────── */}
      <Section id="problem" className="bg-bg/80 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-20 items-start">
          <Stack gap="2rem">
            <Eyebrow>THE REAL PROBLEM</Eyebrow>
            <H2>Good work used to be enough.</H2>
            <Stack gap="1.25rem">
              <Body>You built something real. You show up on time, do the job right, and your customers tell their neighbors.</Body>
              <Body className="text-carolina">
                But the homeowner in Rogers who needs an HVAC tune-up this week isn&apos;t asking a neighbor first. They&apos;re opening Google.
              </Body>
              <Body>And if your name isn&apos;t in the first three results on the map, they call someone else without ever knowing you exist.</Body>
            </Stack>
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p
                className="font-serif text-2xl font-bold text-text bg-white/5 inline-block rounded-lg border border-white/10 border-l-carolina border-l-4 p-4"
              >
                The work isn&apos;t the problem. <span className="text-carolina">The visibility is.</span>
              </p>
            </m.div>
          </Stack>

          <Stack gap="1.5rem">
            {[
              { label: "On Google Maps", body: "Your competitors are in the Map Pack. You're buried below them — or not showing up at all. Customers searching your trade in your city right now are calling someone else." },
              { label: "On your website", body: "An outdated site, or no site at all, tells customers to keep scrolling. It doesn't matter how good the work is if the first impression is a page that looks like it hasn't been touched since 2015." },
              { label: "In your reviews", body: "You've done hundreds of jobs. But online you might look like the new guy. Customers can't tell who's been operating for twenty years and who started six months ago." },
            ].map((p, i) => (
              <GlassCard key={p.label} delay={i * 0.1}>
                <div className="font-mono text-[0.65rem] font-bold tracking-[0.2em] text-carolina uppercase mb-4">
                  ERROR_CODE // {p.label}
                </div>
                <p className="text-muted font-medium leading-[1.6]">{p.body}</p>
              </GlassCard>
            ))}
          </Stack>
        </div>
      </Section>

      {/* ─── GUIDE ──────────────────────────────────────────────────────── */}
      <Section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Stack gap="2rem">
              <Eyebrow>NOT ANOTHER AGENCY</Eyebrow>
              <H2>I know why you&apos;re skeptical.</H2>
              <Stack gap="1.25rem">
                <Body>
                  If you&apos;ve hired a marketing company before and walked away feeling like you paid for reports instead of results — I get it. Most agencies sell the idea of results. They hand you a 40-page document, disappear for three months, and call it strategy.
                </Body>
                <Body>
                  I came to this through real estate wholesaling. That world runs on contractor relationships, and I watched the same thing happen over and over: good tradespeople overlooked online because nobody had ever shown them what was wrong.
                </Body>
                <Body className="text-carolina-dark">
                  I&apos;m not a big agency. I&apos;m one person in Siloam Springs, and I don&apos;t take on clients I can&apos;t actually help. If something is outside my skill set, I&apos;ll say so before you pay for it.
                </Body>
              </Stack>
              <div className="glass-premium border-l-4 border-l-carolina rounded-r-xl p-8">
                <p className="text-text text-[0.95rem] leading-[1.6] italic font-semibold">
                  &ldquo;I built demo sites for plumbing, HVAC, and electrical... Not to show clients — to prove the method on my own projects first.&rdquo;
                </p>
                <Link href="/portfolio" className="inline-block font-mono text-[0.7rem] font-bold text-carolina hover:translate-x-2 transition-transform mt-4">
                  [SEE THE PORTFOLIO →]
                </Link>
              </div>
            </Stack>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[650px] group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-carolina/20 to-transparent rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            <div className="relative h-full w-full glass-premium overflow-hidden rounded-3xl border border-white/10">
              <Image src="/images/chad.avif" alt="Chad Smith - Founder" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover grayscale contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                <p className="font-serif text-3xl font-bold text-text mb-2">Chad Smith</p>
                <p className="font-mono text-xs tracking-[0.3em] text-carolina uppercase font-bold">FOUNDER · LOCAL SEARCH ALLY</p>
              </div>
            </div>
          </m.div>
        </div>
      </Section>

      {/* ─── PLAN ───────────────────────────────────────────────────────── */}
      <Section id="plan" className="bg-bg/80 backdrop-blur-sm">
        <Stack gap="4rem">
          <Stack gap="1.5rem" className="text-center items-center">
            <Eyebrow>HOW THIS WORKS</Eyebrow>
            <H2>Three steps. No surprises.</H2>
          </Stack>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[100px] left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-carolina/20 to-transparent" />
            {[
              { step: "01", title: "Audit", body: "I review your Google Business Profile, website, competitor ranking, and local citation health to find what's actually costing you calls.", cta: "Start with the free audit →" },
              { step: "02", title: "Fix Priority Gaps", body: "Not everything at once. What matters most first — the things that move you up in search before we touch anything else." },
              { step: "03", title: "Grow and Track", body: "Monthly reports on what's improving and what's next. You see the data, not just a summary." },
            ].map((s, i) => (
              <Stack key={s.step} gap="1.25rem" className="relative z-10 items-center text-center">
                <m.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 rounded-full glass-premium border-2 border-carolina/30 flex items-center justify-center font-serif text-2xl font-bold text-carolina shadow-[0_0_30px_rgba(123,175,212,0.2)]"
                >
                  {s.step}
                </m.div>
                <h3 className="font-serif text-2xl font-bold">{s.title}</h3>
                <p className="text-muted leading-relaxed">{s.body}</p>
                {s.cta && (
                  <Link href="/audit" className="font-mono text-[0.7rem] font-bold text-carolina hover:underline tracking-tighter">
                    [{s.cta.toUpperCase()}]
                  </Link>
                )}
              </Stack>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SurfaceCard className="text-center">
              <Stack gap="0.75rem">
                <p className="font-serif text-xl font-bold text-text">No contracts, ever.</p>
                <p className="text-muted text-sm">If I stop delivering, you leave — no lock-in, no cancellation fees, no notice period.</p>
              </Stack>
            </SurfaceCard>
            <SurfaceCard className="text-center">
              <Stack gap="0.75rem">
                <p className="font-serif text-xl font-bold text-text">Full Transparency.</p>
                <p className="text-muted text-sm">You&apos;ll always know what I&apos;m doing and whether it&apos;s working. No black box marketing.</p>
              </Stack>
            </SurfaceCard>
          </div>
        </Stack>
      </Section>

      {/* ─── FREE AUDIT TOOL ────────────────────────────────────────────── */}
      <Section className="relative overflow-hidden">
        <Stack gap="3rem" style={{ maxWidth: "960px", margin: "0 auto", alignItems: "center", textAlign: "center" }}>

          {/* Header copy */}
          <Stack gap="1.5rem" style={{ alignItems: "center" }}>
            <Eyebrow>FREE TOOL</Eyebrow>
            <H2>See your scores <span className="text-carolina">before</span> you talk to anyone.</H2>
            <Body className="mx-auto max-w-[680px]">
              Enter your business name, trade, and city. In 90 seconds you&apos;ll get a scored audit across seven areas — Google Business Profile, reviews, website, technical health, citations, backlinks, and competitor comparison.
            </Body>
          </Stack>

          {/* Card */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="glass-premium border border-carolina/20 shadow-[0_0_80px_rgba(123,175,212,0.08)] relative w-full rounded-[2.5rem] p-14"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-carolina to-transparent rounded-full" />

            <Stack gap="2.5rem" style={{ alignItems: "center" }}>

              {/* Live status indicator */}
              <div className="flex items-center gap-2.5">
                <span
                  className="rounded-full bg-green-500 w-2 h-2 shrink-0 shadow-[0_0_8px_#10b981] animate-pulse"
                />
                <span className="font-mono text-[0.65rem] font-bold tracking-[0.25em] uppercase text-green-500">
                  SYSTEM ONLINE — READY TO SCAN
                </span>
              </div>

              {/* CTA Button */}
              <PrimaryBtn href="/audit" className="text-xl">
                Run Your Free Audit Now →
              </PrimaryBtn>

              {/* Trust line */}
              <p className="font-mono text-[0.65rem] tracking-[0.25em] text-muted/40 uppercase font-bold">
                No email needed · 90 seconds · No pitch
              </p>

              {/* Score category badges */}
              <Stack gap="1rem">
                <p className="font-mono text-[0.55rem] tracking-[0.3em] text-muted/40 uppercase font-bold">
                  Scored audit areas
                </p>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {[
                    { label: "GBP", desc: "Google Business Profile" },
                    { label: "Reviews", desc: "Rating & Volume" },
                    { label: "Website", desc: "On-Page SEO" },
                    { label: "Technical", desc: "Speed & Schema" },
                    { label: "Citations", desc: "Directory Listings" },
                    { label: "Backlinks", desc: "Link Authority" },
                    { label: "Competitors", desc: "vs. Top 3" },
                  ].map(({ label }) => (
                    <span
                      key={label}
                      className="font-mono text-[0.6rem] font-bold tracking-[0.15em] uppercase text-carolina border border-carolina/20 bg-carolina/5 rounded px-3 py-1.5"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </Stack>

            </Stack>
          </m.div>

        </Stack>
      </Section>


      {/* ─── SUCCESS ────────────────────────────────────────────────────── */}
      <Section className="bg-carolina/5 relative overflow-hidden">
        <Stack gap="2rem" className="mx-auto max-w-[760px] text-center items-center">
          <Eyebrow>WHAT SUCCESS LOOKS LIKE</Eyebrow>
          <H2>The phone rings from people who already want to hire you.</H2>
          <Stack gap="1.25rem">
            <Body>When visibility gaps are fixed, you stop depending on referral timing. Someone needs HVAC before summer hits. They open Google, they find you, they call.</Body>
            <Body className="text-carolina-dark">What that looks like day-to-day: a schedule that fills from search, not just referrals.</Body>
          </Stack>
        </Stack>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-carolina/10 blur-[100px] pointer-events-none" />
      </Section>

      {/* ─── STAKES ─────────────────────────────────────────────────────── */}
      <Section id="stakes" className="bg-bg/80 backdrop-blur-sm">
        <Stack gap="2rem" className="mx-auto max-w-[760px] text-center items-center">
          <Eyebrow>THE STAKES</Eyebrow>
          <H2>Every month you&apos;re invisible, that&apos;s work going to whoever shows up first.</H2>
          <Stack gap="1.25rem">
            <Body>Referrals are real business. But they&apos;re not a system — they&apos;re a streak. The streak slows when your best customers get busy, move, or just forget to mention you.</Body>
            <Body className="text-muted/60">The gap between your position and theirs isn&apos;t talent — it&apos;s visibility, and it&apos;s usually fixable.</Body>
          </Stack>
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/audit" className="font-serif text-xl font-bold text-text hover:text-carolina transition-colors underline decoration-carolina/40 underline-offset-8">
              See where you stand online →
            </Link>
          </m.div>
        </Stack>
      </Section>

      {/* ─── FAQ ────────────────────────────────────────────────────────── */}
      <Section id="faq">
        <div className="faq-grid">
          <Stack gap="2rem">
            <H2>Questions worth asking.</H2>
            <Body className="text-muted">I don&apos;t expect you to take my word for it. Here&apos;s how I work, what it costs, and why I don&apos;t use contracts.</Body>
            <div><OutlineBtn href="/contact">Book a free strategy call</OutlineBtn></div>
          </Stack>

          <FaqAccordion />
        </div>
      </Section>

      {/* ─── FINAL CTA ──────────────────────────────────────────────────── */}
      <Section className="border-t border-white/5">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-carolina/10 via-transparent to-transparent rounded-[60px] border border-white/5 p-20 mx-auto max-w-[900px] text-center"
        >
          <Stack gap="2.5rem" className="items-center">
            <H2 className="text-[clamp(2.5rem,6vw,4.5rem)]">
              The best contractor in town shouldn&apos;t be the hardest to find.
            </H2>
            <Body className="max-w-[600px]">
              Run the free audit and see where you stand. If the findings are useful on their own, take them. If you want to talk through what fixing them would look like, I&apos;m here.
            </Body>
            <div className="flex flex-wrap justify-center gap-6">
              <PrimaryBtn href="/audit">Run Your Free Audit →</PrimaryBtn>
              <OutlineBtn href="/contact">Let&apos;s Talk — It&apos;s Free →</OutlineBtn>
            </div>
            <p className="font-mono text-[0.6rem] tracking-[0.4em] text-muted/40 uppercase font-bold">
              NO PITCH · NO PRESSURE · DIAGNOSTIC-FIRST
            </p>
          </Stack>
        </m.div>
      </Section>
    </div>
  );
}
