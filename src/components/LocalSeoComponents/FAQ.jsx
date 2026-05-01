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
      question: "What is local SEO and why does it matter for contractors?",
      answer:
        "Local SEO optimizes your website, Google Business Profile, and local citations to rank higher in local search results — especially Google Maps and local search. According to Think With Google, 46% of all Google searches have local intent, and 78% of local mobile searches result in an offline purchase. For contractors, if you're not visible in top results, competitors are getting those calls instead.",
    },
    {
      question: "How long does it take to rank in the Google Map Pack?",
      answer:
        "Map Pack visibility typically improves within 30-90 days with consistent optimization. Timeline depends on market competitiveness, current GBP optimization, and local citation strength. I prioritize highest-impact factors first: GBP optimization, citation building, and on-page SEO. Most clients see movement in search visibility within 60 days.",
    },
    {
      question: "What is a Google Business Profile and why is it critical?",
      answer:
        "Your Google Business Profile (GBP) is the listing on Google Maps and local search results with your name, address, phone, hours, photos, and reviews. BrightLocal reports 97% of consumers use Google to evaluate local businesses, and 51% use Google Maps specifically. An incomplete or outdated GBP costs you visibility and customer trust. A fully optimized GBP is local SEO's foundation.",
    },
    {
      question: "What is a citation and why do I need them?",
      answer:
        "A citation is an online mention of your business name, address, and phone number (NAP). They appear on directories like Yelp, Angie's List, and HomeAdvisor. Google treats consistent citations as trust signals — more consistent mentions across trusted directories increase your local rankings. I build citations strategically in directories that matter for your trade.",
    },
    {
      question: "Do I need a blog for local SEO to work?",
      answer:
        "Not required, but helpful. Blog posts let you rank for long-tail keywords related to your services ('how to winterize HVAC' or 'signs you need a new roof'). These posts also give content for your Google Business Profile. For contractors starting out, I focus on perfecting core local SEO first — GBP, citations, and on-page optimization. Once that's solid, blog content becomes a multiplier.",
    },
    {
      question: "Will this guarantee I rank #1?",
      answer:
        "No. Anyone promising guaranteed #1 rankings is selling false hope. What I guarantee is transparency: I'll show exactly what I'm doing, why, and how it's performing. I focus on factors that actually move rankings (GBP, citations, on-page relevance, reviews). If something isn't working, I'll tell you and we'll adjust. You'll never wonder what's happening.",
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
            Everything you need to know about local SEO and how I approach it
            for contractors in Northwest Arkansas.
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
