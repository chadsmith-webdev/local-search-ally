"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion as m, useScroll, useTransform, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import ThreeCanvas from "@/components/ThreeCanvas";

// ─── STYLED COMPONENTS ──────────────────────────────────────────────────────

const Section = ({ children, className = "", id = "" }) => (
  <section 
    id={id} 
    className={`relative ${className}`}
    style={{ paddingTop: 'var(--section-spacing)', paddingBottom: 'var(--section-spacing)' }}
  >
    <div style={{
      maxWidth: 1400, width: "100%", margin: "0 auto",
      paddingLeft: "var(--page-gutter)", paddingRight: "var(--page-gutter)"
    }}>
      {children}
    </div>
  </section>
);

const Eyebrow = ({ children }) => (
  <m.span 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="inline-block font-mono text-[0.7rem] font-bold tracking-[0.3em] uppercase text-carolina mb-6 bg-carolina/10 px-3 py-1 rounded"
  >
    {children}
  </m.span>
);

const H2 = ({ children, className = "" }) => (
  <m.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`font-serif text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#f8f9fa] mb-8 ${className}`}
  >
    {children}
  </m.h2>
);

const Body = ({ children, className = "" }) => (
  <m.p 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
    className={`text-[#c0c0c0] text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.6] font-sans font-medium mb-6 ${className}`}
  >
    {children}
  </m.p>
);

const GlassCard = ({ children, className = "", delay = 0 }) => (
  <m.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
    className={`glass-premium rounded-2xl p-10 border border-white/5 hover:border-carolina/30 transition-colors group ${className}`}
  >
    {children}
  </m.div>
);

const PrimaryBtn = ({ href, children, className = "" }) => (
  <Link 
    href={href} 
    className={`inline-flex items-center justify-center bg-gradient-to-br from-carolina to-carolina-dark text-[#0a1118] font-bold py-5 px-10 rounded-lg text-[1rem] tracking-tight hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(123,175,212,0.3)] hover:shadow-[0_0_50px_rgba(123,175,212,0.5)] active:scale-[0.98] ${className}`}
  >
    {children}
  </Link>
);

const OutlineBtn = ({ href, children, className = "" }) => (
  <Link 
    href={href} 
    className={`inline-flex items-center justify-center border border-carolina/30 text-carolina font-bold py-5 px-10 rounded-lg text-[1rem] tracking-tight hover:bg-carolina/10 transition-all ${className}`}
  >
    {children}
  </Link>
);

// ─── PAGE COMPONENT ─────────────────────────────────────────────────────────

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[#020203]" />;

  return (
    <div ref={containerRef} className="relative text-[#f8f9fa] selection:bg-carolina selection:text-[#020203]">
      <ThreeCanvas />
      
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section 
        className="min-h-screen flex flex-col justify-center relative"
        style={{ paddingTop: '100px', paddingBottom: 'var(--section-spacing)' }}
      >
        <div 
          style={{
            maxWidth: 1400, width: "100%", margin: "0 auto",
            paddingLeft: "var(--page-gutter)", paddingRight: "var(--page-gutter)"
          }}
          className="relative z-10"
        >
          <Eyebrow>FREE LOCAL SEO AUDIT — NWA CONTRACTORS</Eyebrow>
          
          <m.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-serif text-[clamp(2.5rem,8.5vw,6.5rem)] font-extrabold leading-[1.0] tracking-[-0.05em] text-[#f8f9fa] max-w-[1200px] mb-12"
          >
            Your competitors are getting calls{" "}
            <span className="text-carolina-dark">that should be yours.</span>
          </m.h1>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-[800px]"
          >
            <p className="text-[#c0c0c0] text-[clamp(1.2rem,2.2vw,1.6rem)] leading-[1.4] font-sans mb-8 font-medium">
              97% of people use Google to find a local contractor. If your name isn&apos;t in the results, the call goes to whoever is.
            </p>
            <p className="text-carolina text-[clamp(1.1rem,1.8vw,1.4rem)] leading-[1.4] font-sans mb-12 italic font-semibold">
              &ldquo;The best contractor in town shouldn&apos;t be the hardest to find. I make sure they&apos;re not.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <PrimaryBtn href="/audit">Run Your Free Audit →</PrimaryBtn>
              <div className="flex flex-col">
                <span className="font-mono text-[0.7rem] text-[#666] tracking-tighter uppercase font-bold">
                  90s AUDIT · REAL DATA · NO EMAIL REQUIRED
                </span>
              </div>
            </div>
          </m.div>
        </div>

        {/* Scan line decoration */}
        <div className="absolute left-0 top-[20%] w-full h-[1px] bg-gradient-to-r from-transparent via-carolina/20 to-transparent animate-pulse" />
      </section>

      {/* ─── PROBLEM ──────────────────────────────────────────────────────── */}
      <Section id="problem" className="bg-[#050507]/80 backdrop-blur-sm">
        <Eyebrow>THE REAL PROBLEM</Eyebrow>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-20 items-start">
          <div>
            <H2>Good work used to be enough.</H2>
            <Body>
              You built something real. You show up on time, do the job right, and your customers tell their neighbors.
            </Body>
            <Body className="text-carolina">
              But the homeowner in Rogers who needs an HVAC tune-up this week isn&apos;t asking a neighbor first. They&apos;re opening Google.
            </Body>
            <Body>
              And if your name isn&apos;t in the first three results on the map, they call someone else without ever knowing you exist.
            </Body>
            <p className="font-serif text-2xl font-bold text-white mt-12 bg-white/5 inline-block px-6 py-3 rounded-lg border border-white/10">
              The work isn&apos;t the problem. <span className="text-carolina">The visibility is.</span>
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            {[
              { 
                label: "On Google Maps", 
                body: "Your competitors are in the Map Pack. You're buried below them — or not showing up at all. Customers searching your trade in your city right now are calling someone else." 
              },
              { 
                label: "On your website", 
                body: "An outdated site, or no site at all, tells customers to keep scrolling. It doesn't matter how good the work is if the first impression is a page that looks like it hasn't been touched since 2015." 
              },
              { 
                label: "In your reviews", 
                body: "You've done hundreds of jobs. But online you might look like the new guy. Customers can't tell who's been operating for twenty years and who started six months ago." 
              }
            ].map((p, i) => (
              <GlassCard key={p.label} delay={i * 0.1}>
                <div className="text-[0.65rem] font-mono font-bold tracking-[0.2em] text-carolina mb-4 uppercase">
                  ERROR_CODE // {p.label}
                </div>
                <p className="text-text font-medium leading-[1.6]">
                  {p.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── GUIDE ────────────────────────────────────────────────────────── */}
      <Section className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Eyebrow>NOT ANOTHER AGENCY</Eyebrow>
            <H2>I know why you&apos;re skeptical.</H2>
            <Body>
              If you&apos;ve hired a marketing company before and walked away feeling like you paid for reports instead of results — I get it. Most agencies sell the idea of results. They hand you a 40-page document, disappear for three months, and call it strategy.
            </Body>
            <Body>
              I came to this through real estate wholesaling. That world runs on contractor relationships, and I watched the same thing happen over and over: good tradespeople overlooked online because nobody had ever shown them what was wrong.
            </Body>
            <Body className="text-carolina-dark">
              I&apos;m not a big agency. I&apos;m one person in Siloam Springs, and I don&apos;t take on clients I can&apos;t actually help. If something is outside my skill set, I&apos;ll say so before you pay for it.
            </Body>
            
            <div className="mt-12 p-8 glass-premium border-l-4 border-l-carolina rounded-r-xl">
               <p className="text-[#f8f9fa] text-[0.95rem] leading-[1.6] italic font-semibold">
                &ldquo;I built demo sites for plumbing, HVAC, and electrical... Not to show clients — to prove the method on my own projects first.&rdquo;
               </p>
               <Link href="/portfolio" className="inline-block mt-4 font-mono text-[0.7rem] font-bold text-carolina hover:translate-x-2 transition-transform">
                  [SEE THE PORTFOLIO →]
               </Link>
            </div>
          </m.div>

          {/* Chad's Image Container */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[650px] group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-carolina/20 to-transparent rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            <div className="relative h-full w-full glass-premium overflow-hidden rounded-3xl border border-white/10">
              <Image 
                src="/images/chad.avif" 
                alt="Chad Smith - Founder" 
                fill 
                className="object-cover grayscale contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                <p className="font-serif text-3xl font-bold text-white mb-2">Chad Smith</p>
                <p className="font-mono text-xs tracking-[0.3em] text-carolina uppercase font-bold">FOUNDER · LOCAL SEARCH ALLY</p>
              </div>
            </div>
          </m.div>
        </div>
      </Section>

      {/* ─── PLAN ─────────────────────────────────────────────────────────── */}
      <Section className="bg-[#050507]/80 backdrop-blur-sm">
        <div className="text-center mb-24">
          <Eyebrow>HOW THIS WORKS</Eyebrow>
          <H2>Three steps. No surprises.</H2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[100px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-carolina/20 to-transparent" />
          
          {[
            { 
              step: "01", 
              title: "Audit", 
              body: "I review your Google Business Profile, website, competitor ranking, and local citation health to find what's actually costing you calls.",
              cta: "Start with the free audit →"
            },
            { 
              step: "02", 
              title: "Fix Priority Gaps", 
              body: "Not everything at once. What matters most first — the things that move you up in search before we touch anything else.",
            },
            { 
              step: "03", 
              title: "Grow and Track", 
              body: "Monthly reports on what's improving and what's next. You see the data, not just a summary.",
            }
          ].map((s, i) => (
            <div key={s.step} className="relative z-10 flex flex-col items-center text-center">
              <m.div 
                whileHover={{ scale: 1.05 }}
                className="w-20 h-20 rounded-full glass-premium border-2 border-carolina/30 flex items-center justify-center font-serif text-2xl font-bold text-carolina mb-8 shadow-[0_0_30px_rgba(123,175,212,0.2)]"
              >
                {s.step}
              </m.div>
              <h3 className="font-serif text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-muted leading-relaxed mb-6">
                {s.body}
              </p>
              {s.cta && (
                <Link href="/audit" className="font-mono text-[0.7rem] font-bold text-carolina hover:underline tracking-tighter">
                  [{s.cta.toUpperCase()}]
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="text-center">
            <p className="font-serif text-xl font-bold text-white mb-2">No contracts, ever.</p>
            <p className="text-muted text-sm">If I stop delivering, you leave — no lock-in, no cancellation fees, no notice period.</p>
          </GlassCard>
          <GlassCard className="text-center">
            <p className="font-serif text-xl font-bold text-white mb-2">Full Transparency.</p>
            <p className="text-muted text-sm">You’ll always know what I’m doing and whether it’s working. No black box marketing.</p>
          </GlassCard>
        </div>
      </Section>

      {/* ─── FREE AUDIT TOOL ─────────────────────────────────────────────── */}
      <Section className="relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <Eyebrow>FREE TOOL</Eyebrow>
          <H2>See your scores <span className="text-carolina">before</span> you talk to anyone.</H2>
          <Body className="max-w-[800px] mx-auto mb-16">
            Enter your business name, trade, and city. In about 90 seconds you&apos;ll get a scored audit across seven areas — your Google Business Profile, reviews, website setup, technical health, directory listings, backlinks, and how you compare to the top three competitors.
          </Body>

          <m.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="glass-premium p-16 rounded-[40px] border border-carolina/20 shadow-[0_0_80px_rgba(123,175,212,0.1)] relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-carolina to-transparent" />
            
            <PrimaryBtn href="/audit" className="text-xl px-20 py-8 mb-8">
              Run Your Free Audit Now →
            </PrimaryBtn>
            
            <p className="font-mono text-xs tracking-widest text-muted uppercase font-bold">
              NO EMAIL NEEDED TO SEE SCORES · 90 SECONDS · SYSTEM ONLINE
            </p>

            <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-40">
              {["GBP", "Reviews", "Website", "Technical", "Citations", "Backlinks", "Competitors"].map(tag => (
                <span key={tag} className="font-mono text-[0.65rem] font-bold tracking-[0.2em]">{tag}</span>
              ))}
            </div>
          </m.div>
        </div>
      </Section>

      {/* ─── SUCCESS / STAKES Split ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <section 
          className="bg-carolina/5 border-y border-white/5 relative overflow-hidden"
          style={{ paddingTop: 'var(--section-spacing)', paddingBottom: 'var(--section-spacing)' }}
        >
           <div style={{
              maxWidth: 1400, width: "100%", margin: "0 auto",
              paddingLeft: "var(--page-gutter)", paddingRight: "var(--page-gutter)"
           }}>
              <div className="max-w-[700px] ml-auto">
                 <Eyebrow>WHAT SUCCESS LOOKS LIKE</Eyebrow>
                 <H2>The phone rings from people who already want to hire you.</H2>
                 <Body>
                  When visibility gaps are fixed, you stop depending on referral timing. Someone needs HVAC before summer hits. They open Google, they find you, they call.
                 </Body>
                 <Body className="text-carolina-dark">
                  What that looks like day-to-day: a schedule that fills from search, not just referrals.
                 </Body>
              </div>
           </div>
           {/* Visual accent */}
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-carolina/10 blur-[100px] pointer-events-none" />
        </section>

        <section 
          className="bg-white/[0.02] border-y border-white/5 border-l border-white/5"
          style={{ paddingTop: 'var(--section-spacing)', paddingBottom: 'var(--section-spacing)' }}
        >
           <div style={{
              maxWidth: 1400, width: "100%", margin: "0 auto",
              paddingLeft: "var(--page-gutter)", paddingRight: "var(--page-gutter)"
           }}>
              <div className="max-w-[700px]">
                 <Eyebrow>THE STAKES</Eyebrow>
                 <H2>Every month you&apos;re invisible, that&apos;s work going to whoever shows up first.</H2>
                 <Body>
                  Referrals are real business. But they&apos;re not a system — they&apos;re a streak. The streak slows when your best customers get busy, move, or just forget to mention you.
                 </Body>
                 <Body className="text-[#888]">
                  The gap between your position and theirs isn&apos;t talent — it&apos;s visibility, and it&apos;s usually fixable.
                 </Body>
                 <Link href="/audit" className="inline-block mt-8 font-serif text-xl font-bold text-white hover:text-carolina transition-colors underline decoration-carolina/40 underline-offset-8">
                  See where you stand online →
                 </Link>
              </div>
           </div>
        </section>
      </div>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <Section id="faq">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-20">
          <div>
            <H2>Questions worth asking.</H2>
            <Body className="text-muted">
              I don&apos;t expect you to take my word for it. Here is how I work, what it costs, and why I don&apos;t use contracts.
            </Body>
            <OutlineBtn href="/contact" className="mt-8">Book a free strategy call</OutlineBtn>
          </div>

          <div className="flex flex-col">
            {[
              { 
                q: "What does the free audit actually check?", 
                a: "Seven areas: your Google Business Profile, review count, website's on-page setup, technical health (speed, schema), citation consistency, backlinks, and competitor comparison." 
              },
              { 
                q: "I don't have a website. Can you help?", 
                a: "Yes — and the audit will show you exactly what not having one is costing you in search. Most of the calls going to your competitors are coming from people who found them on Google." 
              },
              { 
                q: "How long before I see results?", 
                a: "Most businesses see meaningful ranking movement in 60–90 days, depending on how competitive your trade is in your city." 
              },
              { 
                q: "Do I have to sign a contract?", 
                a: "No. I don't offer them. If I stop delivering, you leave." 
              }
            ].map((faq, i) => (
              <div key={i} className="py-10 border-b border-white/5 last:border-0 group cursor-default">
                <h3 className="font-serif text-[1.4rem] font-bold mb-4 group-hover:text-carolina transition-colors">{faq.q}</h3>
                <p className="text-muted leading-relaxed font-sans">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ─── FINAL CTA ────────────────────────────────────────────────────── */}
      <Section className="pb-40 border-t border-white/5">
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-[900px] mx-auto bg-gradient-to-br from-carolina/10 via-transparent to-transparent p-20 rounded-[60px] border border-white/5"
        >
          <H2 className="text-[clamp(2.5rem,6vw,4.5rem)]">The best contractor in town shouldn&apos;t be the hardest to find.</H2>
          <Body>
            Run the free audit and see where you stand. If the findings are useful on their own, take them. If you want to talk through what fixing them would look like, I&apos;m here.
          </Body>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <PrimaryBtn href="/audit">Run Your Free Audit →</PrimaryBtn>
            <OutlineBtn href="/contact">Let&apos;s Talk — It&apos;s Free →</OutlineBtn>
          </div>
          <p className="font-mono text-[0.6rem] tracking-[0.4em] text-[#555] uppercase mt-12 font-bold">
            NO PITCH · NO PRESSURE · DIAGNOSTIC-FIRST
          </p>
        </m.div>
      </Section>

      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer 
        className="border-t border-white/5 bg-[#010102]"
        style={{ paddingTop: 'var(--section-spacing)', paddingBottom: '100px' }}
      >
        <div style={{
          maxWidth: 1400, width: "100%", margin: "0 auto",
          paddingLeft: "var(--page-gutter)", paddingRight: "var(--page-gutter)"
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="lg:col-span-2">
              <Link href="/" className="font-serif text-2xl font-black mb-4 inline-block">
                Local Search <span className="text-carolina">Ally</span>
              </Link>
              <p className="text-[#666] font-mono text-[0.7rem] mb-8 font-bold tracking-tight">NWA CONTRACTOR SEO</p>
              <p className="text-muted max-w-[300px] font-sans leading-relaxed">
                Siloam Springs, AR · (479) 380-8626<br/>
                localsearchally.com
              </p>
            </div>
            
            <div>
              <p className="font-mono text-[0.7rem] tracking-[0.2em] text-white uppercase mb-8 font-bold">NAVIGATION</p>
              <ul className="flex flex-col gap-4">
                {["Services", "Portfolio", "Blog", "About", "Contact", "Free Audit Tool"].map(item => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-muted hover:text-carolina transition-colors text-sm font-medium">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between items-start md:items-end text-left md:text-right">
              <p className="text-muted text-sm font-medium">© 2025 Local Search Ally.<br/>No contracts. No jargon.</p>
              <div className="flex gap-4 mt-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                  {/* Social icons would go here */}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Standard Scanline Texture Global */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

    </div>
  );
}
