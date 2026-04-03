"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion as m, AnimatePresence } from "framer-motion";

import { Container, Section, Stack } from "@/components/ui/Layout";
import { H1, H2, Body, Eyebrow } from "@/components/ui/Typography";
import { GlassCard } from "@/components/ui/Cards";
import { PrimaryBtn, MotionButton } from "@/components/ui/Buttons";

// ─── ICONS ───────────────────────────────────────────────────────────────────

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const MapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

// ─── CONTACT CARD COMPONENT ───────────────────────────────────────────────────

const ContactCard = ({ icon: Icon, title, value, href, delay = 0, microText }) => (
  <GlassCard className="flex flex-col gap-4 group" delay={delay}>
    <div className="flex items-center gap-4 text-carolina">
      <div className="p-3 rounded-lg bg-carolina/10 group-hover:bg-carolina/20 transition-colors">
        <Icon />
      </div>
      <div>
        <p className="font-mono text-[0.6rem] font-bold tracking-[0.2em] uppercase text-muted/60">{title}</p>
        {href ? (
          <a href={href} className="block font-serif text-xl font-bold text-text hover:text-carolina transition-colors leading-tight">
            {value}
          </a>
        ) : (
          <p className="font-serif text-xl font-bold text-text leading-tight">
            {value}
          </p>
        )}
      </div>
    </div>
    {microText && (
       <p className="font-mono text-[0.55rem] tracking-[0.1em] text-muted uppercase mt-1">
         {microText}
       </p>
    )}
  </GlassCard>
);

const HoursCard = ({ delay = 0 }) => (
  <GlassCard className="flex flex-col gap-6" delay={delay}>
    <div className="flex items-center gap-4 text-carolina">
      <div className="p-3 rounded-lg bg-carolina/10">
        <ClockIcon />
      </div>
      <p className="font-mono text-[0.6rem] font-bold tracking-[0.2em] uppercase text-muted/60">BUSINESS HOURS</p>
    </div>
    <div className="space-y-3">
      {[
        { days: "Mon – Fri", time: "8:00 AM – 6:00 PM" },
        { days: "Saturday", time: "9:00 AM – 12:00 PM" },
        { days: "Sunday", time: "2:00 PM – 6:00 PM" },
      ].map((row) => (
        <div key={row.days} className="flex justify-between items-center py-1 border-b border-white/5">
          <span className="font-sans text-[0.9rem] text-muted">{row.days}</span>
          <span className="font-mono text-[0.75rem] font-bold text-text">{row.time}</span>
        </div>
      ))}
    </div>
  </GlassCard>
);

// ─── FORM COMPONENTS ─────────────────────────────────────────────────────────

const InputGroup = ({ label, id, type = "text", required = false, name, placeholder }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="font-sans text-[0.63rem] font-semibold tracking-[0.16em] text-muted uppercase">
      {label} {required && <span className="text-red">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      className="w-full bg-slate border border-transparent rounded-lg px-3.5 py-3 text-text text-[0.9rem] focus:border-carolina/50 focus:outline-none transition-colors font-sans outline-none"
    />
  </div>
);

const TextareaGroup = ({ label, id, required = false, name, placeholder, rows = 4 }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="font-sans text-[0.63rem] font-semibold tracking-[0.16em] text-muted uppercase">
      {label} {required && <span className="text-red">*</span>}
    </label>
    <textarea
      id={id}
      name={name}
      required={required}
      placeholder={placeholder}
      rows={rows}
      className="w-full bg-slate border border-transparent rounded-lg px-3.5 py-3 text-text text-[0.9rem] focus:border-carolina/50 focus:outline-none transition-colors font-sans outline-none resize-none"
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

  if (!mounted) return <div className="min-h-screen bg-bg" />;

  return (
    <div className="relative text-text selection:bg-carolina/20">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden bg-bg"
        style={{ paddingTop: "120px", paddingBottom: "8rem" }}
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
            <Stack gap="2rem" style={{ maxWidth: "900px", margin: "0 auto" }}>
              <Eyebrow>GET IN TOUCH</Eyebrow>

              <H1>
                Let&apos;s talk. <span className="text-carolina">No pitch, no pressure.</span>
              </H1>
              
              <Body variant="hero" className="mx-auto max-w-[600px]">
                Whether you have a specific question about your local presence or just want to see if your market is a good fit, I&apos;m here to help.
              </Body>
            </Stack>
        </Container>

        {/* Scroll cue — matching homepage */}
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
      </section>

      {/* ─── CONTACT SECTION ─────────────────────────────────────────────── */}
      <Section id="contact-content" className="bg-bg/80 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start">
          
          {/* Left: Info Cards */}
          <div className="flex flex-col gap-8">
            <ContactCard 
              icon={MailIcon} 
              title="EMAIL ME" 
              value="chad@localsearchally.com" 
              href="mailto:chad@localsearchally.com" 
              delay={0}
              microText="Direct to my inbox · 24h response"
            />
            <ContactCard 
              icon={PhoneIcon} 
              title="CALL OR TEXT" 
              value="479-380-8626" 
              href="tel:479-380-8626" 
              delay={0.1}
              microText="Local NWA number"
            />
            <HoursCard delay={0.2} />
            <ContactCard 
              icon={MapIcon} 
              title="LOCATION" 
              value="Siloam Springs, AR" 
              delay={0.3}
              microText="Serving all of Northwest Arkansas"
            />
          </div>

          {/* Right: Form */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-premium rounded-[2.5rem] border border-carolina/20 flex flex-col justify-center"
            style={{ padding: "3.5rem 3rem" }}
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
                  <H2 className="!text-3xl text-text">Message sent.</H2>
                  <Body>I&apos;ll get back to you personally within one business day.</Body>
                  <button 
                    onClick={() => setStatus(null)}
                    className="font-mono text-[0.7rem] font-bold text-carolina hover:underline uppercase tracking-widest"
                  >
                    Send another message
                  </button>
                </m.div>
              ) : (
                <form 
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-[14px]"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <InputGroup label="Your Name" id="name" name="name" required placeholder="John Doe" />
                    <InputGroup label="Business Name" id="business" name="business" placeholder="Summit Ridge Roofing" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <InputGroup label="Trade / Craft" id="trade" name="trade" placeholder="HVAC, Plumbing, etc." />
                    <InputGroup label="City / Service Area" id="city" name="city" placeholder="Rogers, AR" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <InputGroup label="Email Address" id="email" name="email" type="email" required placeholder="john@example.com" />
                    <InputGroup label="Phone Number" id="phone" name="phone" type="tel" placeholder="479-555-0123" />
                  </div>
                  <TextareaGroup label="How can I help?" id="message" name="message" required placeholder="Tell me what's on your mind..." />
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-carolina text-slate font-mono font-bold text-[0.75rem] uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(123,175,212,0.3)] rounded-lg py-3.5"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message →'}
                    </button>
                    {status === 'error' && (
                      <p className="text-red text-center mt-4 font-mono text-xs">
                        There was an error sending your message. Please try again or email directly.
                      </p>
                    )}
                  </div>
                  <p className="text-center font-mono text-[0.55rem] text-muted/40 uppercase tracking-[0.25em]">
                    No email list · No spam · Just a personal response
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
        
        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <Container className="h-full relative">
            <div className="absolute bottom-12 left-page-gutter">
              <GlassCard className="!p-6 !bg-bg/90 !backdrop-blur-xl border border-white/10 shadow-2xl">
                 <Stack gap="0.5rem">
                    <p className="font-serif text-lg font-bold text-text">Serving all of NWA.</p>
                    <p className="font-mono text-[0.65rem] text-carolina tracking-widest uppercase">From Rogers to Fayetteville</p>
                 </Stack>
              </GlassCard>
            </div>
          </Container>
        </div>
      </section>

    </div>
  );
}
