"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import styles from "./FAQ.module.css";

const FAQS = [
  {
    q: "Do reviews actually affect my Google ranking?",
    a: "Yes — significantly. Google uses review volume, rating, recency, and response rate as local ranking signals. A contractor with 50 reviews at 4.8 stars will consistently outrank a competitor with 12 reviews at 4.2, even if everything else is equal. Reviews are one of the most direct levers you have.",
  },
  {
    q: "How do I get customers to leave reviews without being pushy?",
    a: "The timing and method matter more than the ask itself. Most customers are happy to leave a review — they just don't think to do it. A simple, personal text 24 hours after the job is done converts far better than a generic email blast or an awkward in-person request. I'll set up the exact sequence.",
  },
  {
    q: "What should I do about a negative review?",
    a: "Respond calmly and professionally — always. A thoughtful response to a negative review actually improves perception for everyone who reads it afterward. I'll give you templates for the most common negative scenarios, and coaching on how to respond to anything unusual. What you should never do is ignore it or get defensive.",
  },
  {
    q: "How often will I get reports on my reviews?",
    a: "Monthly. I'll send you a report showing new review count, current average rating, response rate, and how your profile compares to the previous month. If anything critical comes in — a 1-star review, a spike in negative feedback — I'll flag it sooner.",
  },
  {
    q: "Will you respond to reviews for me?",
    a: "That depends on the plan. At the base level, I provide templates and coaching so you respond with confidence in your own voice. Higher-tier work includes done-for-you response management where I draft and post responses on your behalf. Either way, the goal is that no review goes unanswered.",
  },
  {
    q: "Can you guarantee my rating will increase?",
    a: "No — and anyone who promises that is lying to you. What I can guarantee is a consistent, ethical process that gives you the best possible chance of improvement. If the work is good and the system is in place, ratings tend to move in the right direction. But I will never fabricate reviews or make promises tied to a specific number.",
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
          <h2 className={styles.heading} id="faq-heading">Common Questions About Reputation Management</h2>
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
                className={styles.item}
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
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M4 6l4 4 4-4" />
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
