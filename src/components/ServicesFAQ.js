"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const FAQS = [
  {
    q: "Do I need all four services?",
    a: "No. The free audit will tell you which areas are weakest. Most people start with one service — usually GBP — and add more once they see how it works.",
  },
  {
    q: "Can I do Local SEO without a website?",
    a: "Your GBP can rank on its own, but without a site you're missing the on-page signals, service pages, and conversion path that push you into the top three. It's possible, but your GBP can only do so much without a site behind it. If you don't have one yet, that's usually the first thing to fix.",
  },
  {
    q: "I already have someone managing my SEO. Can you just do the website?",
    a: "Yes. Web design stands on its own. If your current SEO setup is working, I'm not going to tell you to replace it. I'll build the site to support what you're already doing.",
  },
  {
    q: "What if I want to start small and add more later?",
    a: "Start with GBP at $199/month. See your profile improve and your Map Pack position move. When you're ready to push further, add Local SEO. That's the most common path — and there's no requirement to do more than makes sense right now.",
  },
  {
    q: "How do I know if this will actually work for my trade and city?",
    a: "Look at the demo sites in the portfolio — that's the clearest picture of the technical approach. For your specific market, the free audit shows you exactly who you're competing against and how far behind you are. If the top three competitors have 300 reviews and agency-built sites with years of authority behind them, I'll tell you that before you pay anything. Most NWA markets aren't that locked up.",
  },
];

export default function ServicesFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      className="relative bg-[#0a0a0a]"
      style={{ paddingTop: "var(--section-spacing)", paddingBottom: "var(--section-spacing)" }}
      aria-labelledby="faq-heading"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #1e1e1e 20%, #1e1e1e 80%, transparent)" }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          paddingLeft: "var(--page-gutter)",
          paddingRight: "var(--page-gutter)",
        }}
      >
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: "720px", marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-[#7bafd4] bg-[rgba(123,175,212,0.1)] px-3 py-1 rounded">
              FAQ
            </span>
          </motion.div>
          <motion.h2
            id="faq-heading"
            variants={fadeUp}
            className="font-serif font-extrabold leading-[1.08] tracking-[-0.03em] text-[#f8f9fa]"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Questions worth asking before you book a call.
          </motion.h2>
        </motion.div>

        {/* FAQ items */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ maxWidth: "800px", display: "flex", flexDirection: "column", gap: "0" }}
        >
          {FAQS.map((item, i) => (
            <motion.div
              key={item.q}
              variants={fadeUp}
              style={{ borderBottom: "1px solid #1e1e1e" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left font-sans font-semibold text-[#f0f0f0] hover:text-[#7bafd4] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7bafd4]"
                style={{
                  padding: "1.5rem 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                  fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span
                  className="text-[#7bafd4]"
                  style={{
                    fontSize: "1.25rem",
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: "2px",
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    transition: "transform 0.2s ease",
                  }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      className="text-[#b0b0b0] font-sans leading-[1.7]"
                      style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)", paddingBottom: "1.5rem" }}
                    >
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
