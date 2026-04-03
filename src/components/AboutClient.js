"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";

// ─── LAYOUT ──────────────────────────────────────────────────────────────────

const Container = ({ children, className = "" }) => (
  <div
    style={{ maxWidth: 1400, width: "100%", margin: "0 auto", paddingLeft: "var(--page-gutter)", paddingRight: "var(--page-gutter)" }}
    className={className}
  >
    {children}
  </div>
);

const Section = ({ children, className = "", id = "" }) => (
  <section
    id={id}
    className={`relative ${className}`}
    style={{ paddingTop: "var(--section-spacing)", paddingBottom: "var(--section-spacing)" }}
  >
    <Container>{children}</Container>
  </section>
);

// ─── TYPOGRAPHY ──────────────────────────────────────────────────────────────

const Eyebrow = ({ children }) => (
  <m.span
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="inline-block font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7bafd4] bg-[rgba(123,175,212,0.1)] px-3 py-1 rounded"
  >
    {children}
  </m.span>
);

const H2 = ({ children, className = "" }) => (
  <m.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`font-serif font-extrabold leading-[1.1] tracking-[-0.03em] text-[#f8f9fa] ${className}`}
    style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
  >
    {children}
  </m.h2>
);

const Body = ({ children, className = "", style = {} }) => (
  <m.p
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
    className={`text-[#b0b0b0] leading-[1.75] font-sans ${className}`}
    style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)", ...style }}
  >
    {children}
  </m.p>
);

// ─── INTERACTIVE ─────────────────────────────────────────────────────────────

const PrimaryBtn = ({ href, children }) => (
  <Link
    href={href}
    style={{ padding: "1.25rem 2.75rem" }}
    className="inline-flex items-center justify-center bg-[#7bafd4] text-[#0a1118] font-bold rounded-lg text-[1rem] hover:brightness-110 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(123,175,212,0.3)] hover:shadow-[0_0_50px_rgba(123,175,212,0.5)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
  >
    {children}
  </Link>
);

const OutlineBtn = ({ href, children }) => (
  <Link
    href={href}
    style={{ padding: "1.25rem 2.25rem" }}
    className="inline-flex items-center justify-center bg-transparent border border-[#1e1e1e] text-[#f0f0f0] font-semibold rounded-lg text-[1rem] hover:border-[#7bafd4] hover:text-[#7bafd4] transition-all active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
  >
    {children}
  </Link>
);

const Stack = ({ children, gap = "2rem", className = "", style = {} }) => (
  <div style={{ display: "flex", flexDirection: "column", gap, ...style }} className={className}>
    {children}
  </div>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function AboutClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="min-h-screen bg-[#020203]" />;

  return (
    <div className="relative text-[#f8f9fa] selection:bg-[rgba(123,175,212,0.2)]">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center overflow-hidden bg-[#020203]"
        style={{ minHeight: "85vh", paddingTop: "140px", paddingBottom: "8rem" }}
        aria-labelledby="about-hero-heading"
      >
        {/* Ambient radial glow from bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 110%, rgba(123,175,212,0.07) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        {/* Subtle horizontal rule at 30% */}
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: "30%",
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(123,175,212,0.12) 35%, rgba(123,175,212,0.12) 65%, transparent)",
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Stack gap="2rem" style={{ maxWidth: "880px" }}>
              <m.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <Eyebrow>ABOUT LOCAL SEARCH ALLY</Eyebrow>
              </m.div>

              <m.h1
                id="about-hero-heading"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                className="font-serif font-extrabold leading-[1.05] tracking-[-0.04em] text-[#f8f9fa]"
                style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}
              >
                Most NWA contractors do great work.{" "}
                <span className="text-[#7bafd4]">Most of them are hard to find online.</span>{" "}
                That&apos;s the problem I&apos;m here to fix.
              </m.h1>
            </Stack>
          </m.div>
        </Container>

        {/* Scroll hint */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="font-mono text-[0.55rem] tracking-[0.35em] text-[#333] uppercase">Scroll</span>
          <m.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#7bafd4] to-transparent opacity-30"
          />
        </m.div>
      </section>

      {/* ─── PERSONAL STORY ───────────────────────────────────────────────── */}
      <Section className="bg-[#050507]/80">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Text block */}
          <Stack gap="1.75rem">
            <Eyebrow>HOW I GOT HERE</Eyebrow>
            <H2>How I got here.</H2>
            <Stack gap="1.25rem">
              <Body>
                I came to local SEO through real estate wholesaling. That world runs on contractor relationships,
                and I saw the same situation over and over: an HVAC tech who&apos;d been in business for twelve years
                with four Google reviews, a plumber doing better work than anyone in his city with a website that
                hadn&apos;t been touched since 2017. Good tradespeople, genuinely busy on referrals, invisible to
                anyone who didn&apos;t already know their name.
              </Body>
              <Body>
                The part that bothered me wasn&apos;t that they were hard to find — it was that nobody had ever told
                them what was wrong, or that most of it wasn&apos;t that hard to fix.
              </Body>
              <Body>
                I started learning local search properly to understand the gap. What I found is that the contractors
                ranking at the top of Google Maps for their trade in their city aren&apos;t there because they have
                bigger budgets or better teams. They&apos;re there because someone paid attention to the right things
                and their competitors didn&apos;t. That gap is still open in most NWA markets.
              </Body>
              <Body>
                Before offering this to anyone, I built demo sites for plumbing, HVAC, and electrical — with the
                schema markup, service pages, GBP setup, and conversion structure built in — to prove the approach
                on real projects first. I don&apos;t have a decade of client case studies. The demo sites are the
                current proof of method, and I think that&apos;s the honest way to start.
              </Body>
              <Body>
                I&apos;m based in Siloam Springs. I know this market. I&apos;m building this business the same way
                I&apos;d tell a contractor to build theirs — one client at a time, with work you can actually see.
              </Body>
            </Stack>
            <div>
              <Link
                href="/portfolio"
                className="font-mono text-[0.7rem] font-bold text-[#7bafd4] hover:underline tracking-tighter"
              >
                [SEE WHAT THAT LOOKS LIKE IN THE PORTFOLIO →]
              </Link>
            </div>
          </Stack>

          {/* Photo */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
            style={{ height: "clamp(420px, 55vw, 700px)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7bafd4]/20 to-transparent rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
            <div
              className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10"
              style={{
                background: "linear-gradient(135deg, rgba(123,175,212,0.08) 0%, rgba(255,255,255,0) 100%)",
                backdropFilter: "blur(24px)",
              }}
            >
              <Image
                src="/images/chad.avif"
                alt="Chad Smith, founder of Local Search Ally, based in Siloam Springs, AR"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <p className="font-serif text-2xl font-bold text-white" style={{ marginBottom: "0.4rem" }}>
                  Chad Smith
                </p>
                <p className="font-mono text-[0.65rem] tracking-[0.25em] text-[#7bafd4] uppercase font-bold">
                  FOUNDER · LOCAL SEARCH ALLY · SILOAM SPRINGS, AR
                </p>
              </div>
            </div>
          </m.div>

        </div>
      </Section>

      {/* ─── DIFFERENTIATOR ───────────────────────────────────────────────── */}
      <Section>
        <Stack gap="3.5rem">

          <Stack gap="1.5rem" style={{ maxWidth: "800px" }}>
            <Eyebrow>HOW I WORK</Eyebrow>
            <H2>Most agencies run the same playbook on every client. I don&apos;t.</H2>
            <Stack gap="1.25rem">
              <Body>
                Here&apos;s what I&apos;ve seen too many times: a contractor pays an agency, gets a package, and three
                months later gets a report full of numbers that don&apos;t connect to actual calls. No one asked what
                was actually wrong with that specific business. They ran the same strategy they ran for the last ten
                clients and called it done.
              </Body>
              <Body style={{ color: "#f8f9fa", fontWeight: 600 }}>That&apos;s not how I work.</Body>
              <Body>
                Before I recommend anything, I do a complete audit of your local online presence — your Google
                Business Profile, your website, your citations, your reviews, and how you compare to the top
                competitors showing up for your trade in your area right now. I look at what&apos;s actually
                happening, not what I assume is happening based on your trade category.
              </Body>
              <Body>
                Then I walk you through it — what&apos;s working and what&apos;s not. From there, I put
                together a strategy built around your specific gaps. Not a package designed for a hypothetical
                contractor.
              </Body>
            </Stack>
          </Stack>

          {/* Pull quote */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border-l-4 border-l-[#7bafd4] rounded-r-2xl"
            style={{
              padding: "2rem 2.5rem",
              maxWidth: "720px",
              background: "linear-gradient(135deg, rgba(123,175,212,0.06) 0%, transparent 100%)",
              borderRight: "1px solid rgba(123,175,212,0.1)",
              borderTop: "1px solid rgba(123,175,212,0.1)",
              borderBottom: "1px solid rgba(123,175,212,0.1)",
            }}
          >
            <Stack gap="1rem">
              <p className="text-[#f0f0f0] leading-[1.65] font-sans" style={{ fontSize: "clamp(1rem, 1.5vw, 1.1rem)" }}>
                The free audit tool on this site is where that process starts. It gives you a clear picture of where
                you stand before you spend a dollar on anything. If you want to go further, the strategy call picks
                up where it leaves off.
              </p>
              <p className="font-serif text-[#7bafd4] font-bold italic" style={{ fontSize: "0.95rem" }}>
                This takes more time upfront than dropping you into a template. That&apos;s the point.
              </p>
            </Stack>
          </m.div>

          <div>
            <PrimaryBtn href="/audit">Run Your Free Audit →</PrimaryBtn>
          </div>

        </Stack>
      </Section>

      {/* ─── VALUES ───────────────────────────────────────────────────────── */}
      <Section className="bg-[#050507]/80 backdrop-blur-sm">
        <Stack gap="4rem">

          <Stack gap="1.5rem" className="text-center items-center">
            <Eyebrow>WHAT I BELIEVE</Eyebrow>
            <H2>A few things I won&apos;t budge on.</H2>
          </Stack>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "01 / HONEST SCOPE",
                body: "I won't take on clients I can't actually help. If your situation is outside my skill set, or your market is more competitive than I can realistically move in, I'll say so before you pay anything. That's not a sales tactic — it's the only way I think this should work.",
              },
              {
                label: "02 / LOCAL SPECIFICITY",
                body: "Local search is specific, not complicated. What works for an HVAC company in Rogers isn't automatically what works for a plumber in Fayetteville. The differences matter. Ignoring them is why most local SEO work produces underwhelming results.",
              },
              {
                label: "03 / NO CONTRACTS",
                body: "I don't offer contracts. If I stop delivering, you leave. No lock-in, no cancellation fees, no notice period. That's the only arrangement that keeps me accountable.",
              },
              {
                label: "04 / RADICAL TRANSPARENCY",
                body: "Transparency isn't a selling point. It's just how this should work. You'll know what I'm doing, what I'm seeing in the data, and what I think comes next. If something isn't moving, I'll tell you before you figure it out yourself.",
              },
            ].map((item, i) => (
              <m.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                className="glass-premium rounded-2xl hover:border-[rgba(123,175,212,0.4)] transition-colors"
                style={{ padding: "2rem 2.25rem" }}
              >
                <Stack gap="1rem">
                  <span className="font-mono text-[0.6rem] font-bold tracking-[0.25em] uppercase text-[#7bafd4]">
                    {item.label}
                  </span>
                  <p className="text-[#b0b0b0] leading-[1.7] font-sans" style={{ fontSize: "0.95rem" }}>
                    {item.body}
                  </p>
                </Stack>
              </m.div>
            ))}
          </div>

        </Stack>
      </Section>

      {/* ─── TRANSPARENCY PLEDGE ──────────────────────────────────────────── */}
      <Section>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: "860px", margin: "0 auto" }}
        >
          {/* Section header */}
          <Stack gap="1rem" className="items-center text-center" style={{ marginBottom: "3.5rem" }}>
            <Eyebrow>THE PLEDGE</Eyebrow>
            <h2
              className="font-serif font-extrabold tracking-[-0.03em] text-[#f8f9fa]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              In writing.
            </h2>
          </Stack>

          {/* Pledge card */}
          <div
            className="relative rounded-2xl"
            style={{
              padding: "3.5rem clamp(2rem, 6vw, 4.5rem)",
              border: "1px solid rgba(123,175,212,0.2)",
              background: "linear-gradient(135deg, rgba(123,175,212,0.05) 0%, transparent 60%)",
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
              style={{
                width: "120px",
                background: "linear-gradient(to right, transparent, #7bafd4, transparent)",
              }}
              aria-hidden="true"
            />

            {/* Pledge statements */}
            <Stack gap="0">
              {[
                "I will never claim results I haven't achieved.",
                "I will tell you if something is outside my skill set.",
                "I will never lock you into a contract.",
                "I will communicate clearly and often.",
              ].map((pledge, i) => (
                <m.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="flex items-start gap-4"
                  style={{
                    padding: "1.75rem 0",
                    borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <span
                    className="font-mono font-bold text-[#7bafd4] shrink-0"
                    style={{ fontSize: "0.6rem", letterSpacing: "0.15em", marginTop: "0.3rem" }}
                  >
                    0{i + 1}
                  </span>
                  <p
                    className="font-serif font-bold text-[#f8f9fa] leading-[1.4]"
                    style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)" }}
                  >
                    {pledge}
                  </p>
                </m.div>
              ))}
            </Stack>

            {/* Signature line */}
            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
              <span className="font-mono text-[0.6rem] font-bold tracking-[0.25em] text-[#444] uppercase">
                Chad Smith · Local Search Ally · Siloam Springs, AR
              </span>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.05)" }} />
            </div>
          </div>
        </m.div>
      </Section>

      {/* ─── CLOSING CTA ──────────────────────────────────────────────────── */}
      <section
        className="relative border-t border-white/5 overflow-hidden"
        style={{
          paddingTop: "var(--section-spacing)",
          paddingBottom: "var(--section-spacing)",
          background: "#050507",
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(123,175,212,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <H2>
              If that sounds like the kind of person you want working on your business,{" "}
              <span className="text-[#7bafd4]">let&apos;s talk.</span>
            </H2>

            <Body style={{ maxWidth: "580px" }}>
              Start with the free audit — 90 seconds, scored results across seven areas, no email needed to see
              where you stand. If the findings are useful on their own, use them. If you want to talk through what
              fixing them would look like, I&apos;m here.
            </Body>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <PrimaryBtn href="/audit">Run Your Free Audit →</PrimaryBtn>
              <OutlineBtn href="/contact">Let&apos;s Talk — It&apos;s Free →</OutlineBtn>
            </div>

            <p className="font-mono font-bold uppercase text-[#444]" style={{ fontSize: "0.6rem", letterSpacing: "0.35em" }}>
              No pitch. No pressure.
            </p>
          </m.div>
        </Container>
      </section>

    </div>
  );
}
