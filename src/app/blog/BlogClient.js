"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";

import { Container, Section, Stack } from "@/components/ui/Layout";
import { H1, H2, Body, Eyebrow } from "@/components/ui/Typography";
import { GlassCard, SurfaceCard } from "@/components/ui/Cards";
import { PrimaryBtn } from "@/components/ui/Buttons";

// ─── READING PROGRESS BAR ────────────────────────────────────────────────────

function ReadingProgress() {
  const barRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct   = total > 0 ? (window.scrollY / total) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", zIndex: 1000, background: "rgba(255,255,255,0.04)" }}>
      <div
        ref={barRef}
        style={{
          height: "100%", width: "0%",
          background: "linear-gradient(90deg, #7bafd4, #4d8cb9)",
          boxShadow: "0 0 8px rgba(123,175,212,0.6)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

// ─── TILT CARD ────────────────────────────────────────────────────────────────

function TiltCard({ children, href }) {
  const ref = useRef();

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 4}deg) translateZ(6px)`;
    ref.current.style.borderColor = "rgba(123,175,212,0.28)";
    ref.current.style.background  = "#1a1a1a";
  };

  const onLeave = () => {
    ref.current.style.transform   = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0)";
    ref.current.style.borderColor = "rgba(255,255,255,0.08)";
    ref.current.style.background  = "#141414";
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="flex h-full no-underline bg-slate border border-white/10 rounded-xl overflow-hidden transition-all duration-300 transform-gpu"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </Link>
  );
}

// ─── BLOG CLIENT ─────────────────────────────────────────────────────────────

export default function BlogClient({ posts }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="min-h-screen bg-bg" />;

  return (
    <div className="relative text-text selection:bg-carolina/20 min-h-screen bg-bg">
      <ReadingProgress />

      {/* ─── CINEMATIC HERO ────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center overflow-hidden bg-bg"
        style={{ minHeight: "65vh", paddingTop: "140px", paddingBottom: "4rem" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 110%, rgba(123,175,212,0.07) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10 text-center">
            <Stack gap="2.5rem" style={{ maxWidth: "900px", margin: "0 auto" }}>
              <Eyebrow>LOCAL SEARCH ALLY · INSIGHTS</Eyebrow>

              <H1>
                SEO for contractors is <span className="text-carolina">broken.</span> Here&apos;s how to fix it.
              </H1>
              
              <Body variant="hero" className="mx-auto max-w-[640px]">
                No fluff. No generic marketing advice. Just technical insights on how to win the Map Pack and get the calls you deserve.
              </Body>
            </Stack>
        </Container>
      </section>

      {/* ─── POST GRID ───────────────────────────────────────────────────── */}
      <Section className="bg-bg/80 backdrop-blur-sm -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <m.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <TiltCard href={`/blog/${post.slug}`}>
                <article className="flex flex-col w-full h-full">
                  {/* Feature image */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-900 border-b border-white/5">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-slate">
                        <span className="font-mono text-[0.6rem] text-muted/40 tracking-[0.2em]">NO_IMAGE.AVIF</span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {post.tags?.slice(0, 1).map(tag => (
                        <span key={tag} className="font-mono text-[0.55rem] font-bold tracking-[0.1em] uppercase text-carolina bg-bg/90 backdrop-blur-md px-2.5 py-1 rounded border border-carolina/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1 gap-4">
                    <H2 style={{ fontSize: "1.15rem", lineHeight: 1.4, margin: 0 }}>
                      {post.title}
                    </H2>
                    <p className="text-muted text-[0.875rem] leading-[1.6] line-clamp-3 font-sans">
                      {post.description}
                    </p>
                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                       <span className="font-mono text-[0.6rem] text-muted/40 uppercase tracking-widest">{post.readTime}</span>
                       <span className="font-mono text-[0.6rem] text-carolina font-bold uppercase tracking-widest">READ_MORE →</span>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </m.div>
          ))}
        </div>
      </Section>

      {/* ─── FINAL CTA ──────────────────────────────────────────────────── */}
      <Section className="border-t border-white/5">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-carolina/10 via-transparent to-transparent rounded-[60px] border border-white/5 p-16 mx-auto max-w-[1000px] text-center"
        >
          <Stack gap="2rem" className="items-center">
            <H2 className="text-3xl lg:text-4xl">
              Stop guessing. Start ranking.
            </H2>
            <Body className="max-w-[640px]">
              The insights here are free. The strategy to implement them is what I do. See where you stand first with a 90-second scored audit.
            </Body>
            <div className="flex flex-wrap justify-center gap-6">
              <PrimaryBtn href="/audit">Run Your Free Audit →</PrimaryBtn>
            </div>
            <p className="font-mono text-[0.6rem] tracking-[0.3em] text-muted/40 uppercase font-bold">
              NO EMAIL NEEDED · 90 SECONDS · SYSTEM ONLINE
            </p>
          </Stack>
        </m.div>
      </Section>

    </div>
  );
}
