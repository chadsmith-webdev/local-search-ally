"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import styles from "./FAQ.module.css";

const FAQS = [
  {
    q: "What makes a contractor website actually work?",
    a: "Three things: it ranks locally on Google (SEO-ready), loads fast on phones (mobile-first design), and converts visitors into calls or bookings (clear CTAs and simple forms). Most contractor websites fail because they look nice but don't perform these functions. I build for results, not awards.",
  },
  {
    q: "Do you use templates?",
    a: "No. Every site I build is custom-coded and designed specifically for your business. Templates look like templates — your customers will notice, and competitors using custom designs will outconvert you. I build on Next.js, which gives you speed, SEO performance, and flexibility. Your site is entirely yours.",
  },
  {
    q: "Will the site be mobile-friendly?",
    a: "Yes — mobile-first, actually. The phone experience is designed first and everything else follows. According to Google, 88% of consumers who perform a local search call or visit a business within 24 hours, mostly from mobile. Page speed on mobile is also critical for Google rankings, so I optimize for that relentlessly.",
  },
  {
    q: "How does this include SEO?",
    a: "Web design and SEO are inseparable. I build every page with SEO in mind: clear heading hierarchy, optimized meta tags, fast load times (Core Web Vitals), mobile responsiveness, and structured data. The design is optimized for both Google's algorithm and human conversion. You get a site that ranks and converts.",
  },
  {
    q: "Can I update the content myself?",
    a: "Yes. I build sites on Next.js and deploy on Vercel, which means content updates are straightforward. If you need more technical changes, I'm here. Most clients handle their service descriptions, testimonials, and gallery photos independently. You own the site — I'm just the builder.",
  },
  {
    q: "How long does a site build take?",
    a: "Typically 3–4 weeks from discovery call to launch. Week 1 is architecture and planning, weeks 2–3 are design and build on a staging URL you can review, and week 4 is polish and launch. Post-launch adjustments are included in the project — the site keeps improving after go-live.",
  },
];

export default function FAQ() {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(null);
  const [announcement, setAnnouncement] = useState("");

  function toggle(i) {
    const next = openIndex === i ? null : i;
    setOpenIndex(next);
    setAnnouncement(next !== null ? `Answer expanded for: ${FAQS[i].q}` : "Answer collapsed");
  }

  const motionItemProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: {
          hidden: { opacity: 0, y: 16 },
          visible: (i) => ({
            opacity: 1, y: 0,
            transition: { duration: 0.5, ease: "easeOut", delay: i * 0.07 },
          }),
        },
      };

  return (
    <section className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Questions</span>
          <h2 className={styles.heading} id="faq-heading">Common Questions About Contractor Web Design</h2>
        </div>

        <div className={styles.list} role="list">
          {FAQS.map((item, i) => {
            const id = item.q
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");
            const panelId = `faq-panel-${id}`;
            const btnId = `faq-btn-${id}`;
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={id}
                custom={i}
                {...motionItemProps}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                role="listitem"
              >
                <button
                  id={btnId}
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span>{item.q}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M10 4v12M4 10h12" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      key="panel"
                      initial={shouldReduceMotion ? { opacity: 0 } : { scaleY: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { scaleY: 1, opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { scaleY: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ transformOrigin: "top" }}
                      className={styles.answer}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className={styles.srOnly} role="status" aria-live="polite" aria-atomic="true">
          {announcement}
        </div>
      </div>
    </section>
  );
}
