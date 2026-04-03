"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";

import { Container, Section, Stack } from "@/components/ui/Layout";
import { H1, H2, Body, Eyebrow } from "@/components/ui/Typography";
import { GlassCard, SurfaceCard } from "@/components/ui/Cards";
import { PrimaryBtn, OutlineBtn } from "@/components/ui/Buttons";

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function AboutClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="min-h-screen bg-bg" />;

  return (
    <div className="relative text-text selection:bg-carolina/20">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center overflow-hidden bg-bg"
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
            <Stack gap="2.5rem" style={{ maxWidth: "900px" }}>
              <Eyebrow>ABOUT LOCAL SEARCH ALLY</Eyebrow>

              <H1 id="about-hero-heading">
                Most NWA contractors do great work.{" "}
                <span className="text-carolina">Most of them are hard to find online.</span>
              </H1>

              <Body variant="hero" className="max-w-[660px]">
                I&apos;m Chad. I built this to help Northwest Arkansas trades be the names people find in search — and the ones they call first.
              </Body>

              <div className="pt-4">
                <PrimaryBtn href="/audit">Run My Free Audit →</PrimaryBtn>
              </div>
            </Stack>
        </Container>

        {/* Scroll hint */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="font-mono text-[0.55rem] tracking-[0.35em] text-muted/40 uppercase">Scroll</span>
          <m.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-carolina to-transparent opacity-30"
          />
        </m.div>
      </section>

      {/* ─── PERSONAL STORY ───────────────────────────────────────────────── */}
      <Section id="story" className="bg-bg/80 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Text block */}
          <Stack gap="1.75rem">
            <Eyebrow>HOW I GOT HERE</Eyebrow>
            <H2>The visibility gap is fixable.</H2>
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
            </Stack>
            <div>
              <Link
                href="/portfolio"
                className="font-mono text-[0.7rem] font-bold text-carolina hover:underline tracking-tighter"
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
            className="relative group h-[clamp(420px,55vw,700px)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-carolina/20 to-transparent rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
            <div
              className="relative h-full w-full overflow-hidden rounded-3xl border border-white/10 glass-premium"
            >
              <Image
                src="/images/chad.avif"
                alt="Chad Smith, founder of Local Search Ally, based in Siloam Springs, AR"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 text-left">
                <p className="font-serif text-2xl font-bold text-text mb-1.5">
                  Chad Smith
                </p>
                <p className="font-mono text-[0.65rem] tracking-[0.25em] text-carolina uppercase font-bold">
                  FOUNDER · LOCAL SEARCH ALLY · SILOAM SPRINGS, AR
                </p>
              </div>
            </div>
          </m.div>

        </div>
      </Section>

      {/* ─── DIFFERENTIATOR ───────────────────────────────────────────────── */}
      <Section id="method" className="bg-bg">
        <Stack gap="3.5rem">

          <Stack gap="1.5rem" style={{ maxWidth: "800px" }}>
            <Eyebrow>HOW I WORK</Eyebrow>
            <H2>Most agencies run the same generic playbook. I don&apos;t.</H2>
            <Stack gap="1.25rem">
              <Body>
                Before I recommend anything, I do a complete audit of your local online presence — your Google
                Business Profile, your website, your citations, your reviews, and how you compare to the top
                competitors showing up for your trade in your area right now.
              </Body>
              <Body className="!text-text font-semibold">Diagnostic-first, strategy-second.</Body>
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
            className="border-l-4 border-l-carolina rounded-r-2xl bg-gradient-to-br from-carolina/5 to-transparent border-t border-r border-b border-white/5 p-8 max-w-[720px]"
          >
            <Stack gap="1rem">
              <p className="text-[#f0f0f0] leading-[1.65] font-sans text-[clamp(1rem,1.5vw,1.1rem)]">
                The free audit tool on this site is where that process starts. It gives you a clear picture of where
                you stand before you spend a dollar on anything.
              </p>
              <p className="font-serif text-carolina font-bold italic text-[0.95rem]">
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
      <Section id="values" className="bg-bg/80 backdrop-blur-sm">
        <Stack gap="4rem">

          <Stack gap="1.5rem" className="text-center items-center">
            <Eyebrow>WHAT I BELIEVE</Eyebrow>
            <H2>Accountability is everything.</H2>
          </Stack>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "01 / HONEST SCOPE",
                body: "I won't take on clients I can't actually help. If your market is more competitive than I can realistically move in, I'll say so before you pay anything.",
              },
              {
                label: "02 / LOCAL SPECIFICITY",
                body: "Local search is specific, not complicated. What works for an HVAC company in Rogers isn't automatically what works for a plumber in Fayetteville.",
              },
              {
                label: "03 / NO CONTRACTS",
                body: "I don't offer contracts. If I stop delivering, you leave. No lock-in, no cancellation fees, no notice period.",
              },
              {
                label: "04 / RADICAL TRANSPARENCY",
                body: "You'll always know what I'm doing and whether it's working. If something isn't moving, I'll tell you before you figure it out yourself.",
              },
            ].map((item, i) => (
              <SurfaceCard
                key={item.label}
                delay={i * 0.1}
                className="hover:border-carolina/40"
              >
                <Stack gap="1rem">
                  <span className="font-mono text-[0.6rem] font-bold tracking-[0.25em] uppercase text-carolina">
                    {item.label}
                  </span>
                  <p className="text-muted leading-[1.7] font-sans text-[0.95rem]">
                    {item.body}
                  </p>
                </Stack>
              </SurfaceCard>
            ))}
          </div>

        </Stack>
      </Section>

      {/* ─── CLOSING CTA ──────────────────────────────────────────────────── */}
      <Section id="cta" className="border-t border-white/5 bg-bg/95">
        <Stack gap="2.5rem" className="mx-auto max-w-[760px] text-center items-center">
            <H2>
              Let&apos;s build <span className="text-carolina">actual visibility.</span>
            </H2>

            <Body className="max-w-[580px]">
              Start with the free audit — 90 seconds, scoped results, no email needed. If the findings are useful on their own, take them.
            </Body>

            <div className="flex flex-wrap justify-center gap-4">
              <PrimaryBtn href="/audit">Run Your Free Audit →</PrimaryBtn>
              <OutlineBtn href="/contact">Let&apos;s Talk — It&apos;s Free →</OutlineBtn>
            </div>
        </Stack>
      </Section>

    </div>
  );
}
