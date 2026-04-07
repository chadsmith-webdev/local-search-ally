"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [announce, setAnnounce] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: "What is a Google Business Profile?",
      answer:
        "Your Google Business Profile is the listing that appears on Google Maps and local search results — showing your business name, address, phone, hours, photos, and customer reviews. BrightLocal reports 97% of consumers use Google to evaluate local businesses, and 51% use Google Maps specifically. This is where homeowners find and assess you before making the call.",
    },
    {
      question: "How important is GBP for local rankings?",
      answer:
        "It's the single most important factor for Map Pack visibility. Your GBP optimization directly impacts your chances of appearing in the top 3 Google Maps results. A fully optimized profile with consistent information, strong photos, and steady reviews will outrank incomplete profiles in the same market — every time.",
    },
    {
      question: "What does GBP optimization actually include?",
      answer:
        "Everything that affects your local visibility: accurate business name, address, and phone number; complete service area setup; the right primary and secondary categories; a keyword-rich business description; high-quality photos of your work and team; review request system; Q&A management; and regular Google Posts that signal an active, trustworthy business.",
    },
    {
      question: "How long until I see results from GBP optimization?",
      answer:
        "Changes typically appear in Google within 1–2 weeks. Ranking improvements in the Map Pack usually take 30–90 days, as Google measures consistency and builds confidence in your profile over time. Most of my clients see measurable movement in map visibility within 60 days. Markets with less competition can move faster.",
    },
    {
      question: "Do reviews really affect my rankings?",
      answer:
        "Yes — and they affect conversions even more than rankings. Google uses review recency, volume, and response rate as local ranking signals. Beyond that, a steady flow of 4–5 star reviews is often the deciding factor for a homeowner choosing between two contractors. I'll set up a straightforward review request process so asking becomes part of your normal workflow.",
    },
    {
      question: "Will this guarantee I get into the Map Pack?",
      answer:
        "No. I won't guarantee specific rankings — anyone who does is selling you something. What I guarantee is transparency: you'll see every change made, why it was made, and how it's performing. I focus on the factors Google weighs most heavily. If results aren't moving, I'll tell you directly and we'll adjust. You'll never wonder what's happening with your profile.",
    },
  ];

  const toggleFAQ = (index, id, question) => {
    const willOpen = openIndex !== index;
    setOpenIndex(willOpen ? index : null);
    setAnnounce(willOpen ? `${question} expanded` : `${question} collapsed`);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className={styles.eyebrow}>Questions</span>
          <h2 className={styles.heading}>Common Questions</h2>
          <p className={styles.intro}>
            Everything you need to know about Google Business Profile
            optimization for home service contractors in Northwest Arkansas.
          </p>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const id = faq.question
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");

            const motionItemProps = shouldReduceMotion
              ? {}
              : {
                  initial: "hidden",
                  whileInView: "visible",
                  viewport: { once: true },
                  variants: fadeUp,
                };

            return (
              <motion.div
                key={id}
                {...motionItemProps}
                className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
              >
                <button
                  id={`faq-header-${id}`}
                  className={`${styles.question} ${openIndex === index ? styles.active : ""}`}
                  onClick={() => toggleFAQ(index, id, faq.question)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${id}`}
                >
                  <span>{faq.question}</span>
                  <span className={styles.icon} aria-hidden>
                    <svg
                      width='18'
                      height='18'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden
                    >
                      <path
                        d='M12 5v14M5 12h14'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index &&
                    (shouldReduceMotion ? (
                      <div
                        id={`faq-panel-${id}`}
                        role='region'
                        aria-labelledby={`faq-header-${id}`}
                        className={styles.answer}
                      >
                        <p>{faq.answer}</p>
                      </div>
                    ) : (
                      <motion.div
                        id={`faq-panel-${id}`}
                        role='region'
                        aria-labelledby={`faq-header-${id}`}
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        style={{ transformOrigin: "top" }}
                        className={styles.answer}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
        <div aria-live='polite' className={styles.srOnly}>
          {announce}
        </div>
      </div>
    </section>
  );
}
