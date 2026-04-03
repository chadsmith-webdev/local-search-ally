"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";

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

const GlassCard = ({ children, className = "", delay = 0 }) => (
  <m.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
    style={{ padding: "2.5rem" }}
    className={`glass-premium rounded-2xl border border-white/5 hover:border-[#7bafd4]/30 transition-colors ${className}`}
  >
    {children}
  </m.div>
);

const Stack = ({ children, gap = "2rem", className = "", style = {} }) => (
  <div style={{ display: "flex", flexDirection: "column", gap, ...style }} className={className}>
    {children}
  </div>
);

// ─── FORM COMPONENTS ─────────────────────────────────────────────────────────

const InputGroup = ({ label, id, type = "text", required = false, name, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
    <label htmlFor={id} className="font-mono text-[0.65rem] font-bold tracking-[0.2em] text-[#444] uppercase">
      {label} {required && <span className="text-[#ff4d4d]">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[#f8f9fa] focus:border-[#7bafd4]/50 focus:outline-none transition-colors font-sans"
    />
  </div>
);

const TextareaGroup = ({ label, id, required = false, name, placeholder, rows = 4 }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
    <label htmlFor={id} className="font-mono text-[0.65rem] font-bold tracking-[0.2em] text-[#444] uppercase">
      {label} {required && <span className="text-[#ff4d4d]">*</span>}
    </label>
    <textarea
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      rows={rows}
      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-[#f8f9fa] focus:border-[#7bafd4]/50 focus:outline-none transition-colors font-sans resize-none"
    />
  </div>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ContactClient() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

  useEffect(() => { setMounted(true); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/mzdjvvjb", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (!mounted) return <div className="min-h-screen bg-[#020203]" />;

  return (
    <div className="relative text-[#f8f9fa] selection:bg-[rgba(123,175,212,0.2)]">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center overflow-hidden bg-[#020203]"
        style={{ minHeight: "60vh", paddingTop: "140px", paddingBottom: "4rem" }}
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
            <Stack gap="2rem" style={{ maxWidth: "880px", margin: "0 auto" }}>
              <m.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <Eyebrow>GET IN TOUCH</Eyebrow>
              </m.div>

              <m.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
                className="font-serif font-extrabold leading-[1.05] tracking-[-0.04em] text-[#f8f9fa]"
                style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)" }}
              >
                Let&apos;s talk. <span className="text-[#7bafd4]">No pitch, no pressure.</span>
              </m.h1>
              
              <Body style={{ maxWidth: "600px", margin: "0 auto" }}>
                Whether you have a specific question about your Google Business Profile or just want to see if your market is a good fit, I&apos;m here to help.
              </Body>
            </Stack>
        </Container>
      </section>

      {/* ─── CONTACT SECTION ─────────────────────────────────────────────── */}
      <Section id="contact-content" className="bg-[#050507]/80 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
          
          {/* Left: Info */}
          <Stack gap="3rem">
            <div className="space-y-8">
              <Stack gap="1rem">
                <p className="font-mono text-[0.6rem] font-bold tracking-[0.25em] text-[#7bafd4] uppercase">CONTACT DETAILS</p>
                <div className="space-y-4">
                  <a href="mailto:chad@localsearchally.com" className="block font-serif text-2xl font-bold hover:text-[#7bafd4] transition-colors leading-tight">
                    chad@localsearchally.com
                  </a>
                  <a href="tel:479-380-8626" className="block font-serif text-2xl font-bold hover:text-[#7bafd4] transition-colors leading-tight">
                    479-380-8626
                  </a>
                </div>
              </Stack>

              <Stack gap="1rem">
                <p className="font-mono text-[0.6rem] font-bold tracking-[0.25em] text-[#7bafd4] uppercase">BUSINESS HOURS</p>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    { days: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
                    { days: "Saturday", time: "9:00 AM – 12:00 PM" },
                    { days: "Sunday", time: "2:00 PM – 6:00 PM" },
                  ].map((row) => (
                    <div key={row.days} className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="font-sans text-[#b0b0b0]">{row.days}</span>
                      <span className="font-mono text-[0.8rem] font-bold text-[#f8f9fa]">{row.time}</span>
                    </div>
                  ))}
                </div>
              </Stack>
            </div>

            <GlassCard className="!p-8">
              <Stack gap="1rem">
                <p className="font-serif text-xl font-bold">Based in Siloam Springs.</p>
                <Body className="!text-[0.95rem]">
                  I serve contractors across Northwest Arkansas — including Rogers, Bentonville, Fayetteville, Springdale, and beyond.
                </Body>
              </Stack>
            </GlassCard>
          </Stack>

          {/* Right: Form */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 lg:p-12 border border-white/10"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <m.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-20 h-20 bg-[#00ff88]/10 text-[#00ff88] rounded-full flex items-center justify-center mx-auto text-3xl">
                    ✓
                  </div>
                  <H2 className="!text-3xl text-white">Message sent.</H2>
                  <Body>I&apos;ll get back to you personally within one business day.</Body>
                  <button 
                    onClick={() => setStatus(null)}
                    className="font-mono text-[0.7rem] font-bold text-[#7bafd4] hover:underline uppercase tracking-widest"
                  >
                    Send another message
                  </button>
                </m.div>
              ) : (
                <form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputGroup label="Your Name" id="name" name="name" required placeholder="John Doe" />
                    <InputGroup label="Business Name" id="business" name="business" placeholder="Summit Ridge Roofing" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputGroup label="Trade / Craft" id="trade" name="trade" placeholder="HVAC, Plumbing, etc." />
                    <InputGroup label="City / Service Area" id="city" name="city" placeholder="Rogers, AR" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InputGroup label="Email Address" id="email" name="email" type="email" required placeholder="john@example.com" />
                    <InputGroup label="Phone Number" id="phone" name="phone" type="tel" placeholder="479-555-0123" />
                  </div>
                  <TextareaGroup label="How can I help?" id="message" name="message" required placeholder="Tell me what's on your mind..." />
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-[#7bafd4] text-[#0a1118] font-bold py-4 rounded-xl text-lg hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(123,175,212,0.3)] hover:shadow-[0_0_50px_rgba(123,175,212,0.5)]"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message →'}
                    </button>
                    {status === 'error' && (
                      <p className="text-[#ff4d4d] text-center mt-4 font-mono text-xs">
                        There was an error sending your message. Please try again or email directly.
                      </p>
                    )}
                  </div>
                  <p className="text-center font-mono text-[0.6rem] text-[#444] uppercase tracking-[0.25em]">
                    Typical response time: &lt; 24 business hours
                  </p>
                </form>
              )}
            </AnimatePresence>
          </m.div>

        </div>
      </Section>

      {/* ─── MAP SECTION ─────────────────────────────────────────────────── */}
      <section className="relative h-[600px] w-full border-t border-white/5 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #050507, transparent 15%, transparent 85%, #0d0d0d)"
          }}
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102925.7523178235!2d-94.6105494!3d36.188094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c9171f11461147%3A0xe54d3e7535b44e05!2sSiloam%20Springs%2C%20AR!5e0!3m2!1sen!2sus!4v1712160000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(90%) grayscale(100%)" }}
          allowFullScreen=""
          loading="lazy"
          title="Service Area: Siloam Springs and NWA"
          aria-hidden="false"
          tabIndex="0"
        />
        
        {/* Overlay to keep the premium feel */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <Container className="h-full relative">
            <div className="absolute bottom-12 left-[var(--page-gutter)]">
              <GlassCard className="!p-6 !bg-[#050507]/90 !backdrop-blur-xl border border-white/10 shadow-2xl">
                 <Stack gap="0.5rem">
                    <p className="font-serif text-lg font-bold text-white">Serving all of NWA.</p>
                    <p className="font-mono text-[0.65rem] text-[#7bafd4] tracking-widest uppercase">From Rogers to Fayetteville</p>
                 </Stack>
              </GlassCard>
            </div>
          </Container>
        </div>
      </section>

      {/* ─── SCANLINE OVERLAY ────────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

    </div>
  );
}
