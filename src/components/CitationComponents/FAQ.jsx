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
      question: "What is a citation and why does it matter for local SEO?",
      answer:
        "A citation is any online mention of your business name, address, and phone number — also called NAP. They appear on directories like Yelp, Angi, HomeAdvisor, Bing Places, and dozens of others. Google uses citations to verify that your business is real and located where you say it is. The more consistently your NAP appears across trusted directories, the more confidence Google has in ranking your listing. Inconsistencies — even small ones like an old suite number or a forwarding phone number — create doubt, and doubt costs you rankings.",
    },
    {
      question: "How many citations do I need to rank locally?",
      answer:
        "There's no magic number. What matters is being listed consistently in the directories Google actually checks — which is a specific set of core platforms plus trade-specific and local directories. For most NWA home service contractors, building and cleaning up 50-100 quality citations across the right platforms is sufficient to remove citation inconsistency as a ranking barrier. I don't pad numbers with low-quality directories that Google ignores. I focus on what moves the needle.",
    },
    {
      question: "What happens if my NAP is wrong on some directories?",
      answer:
        "It's more common than you'd think — and it does hurt your rankings. Google cross-references your business information across multiple sources. When it finds mismatches, it has to decide which version to trust. That uncertainty reduces your ranking in the Map Pack. The fix is to systematically audit every listing, correct the errors, and monitor for drift going forward. I handle all of that.",
    },
    {
      question: "Which directories matter most for contractors in NWA?",
      answer:
        "For home service trades in Northwest Arkansas, the highest-priority directories are Google Business Profile, Yelp, Bing Places for Business, Apple Maps, and Facebook — these are the core platforms Google weights most heavily. From there, trade-specific platforms like Angi (formerly Angie's List), HomeAdvisor, and Houzz add authority in your industry. I also build citations on local NWA platforms and the Better Business Bureau. The specific mix depends on your trade — I tailor it.",
    },
    {
      question: "Do you manage citations on an ongoing basis?",
      answer:
        "Yes. Citations don't stay accurate on their own. Data aggregators push incorrect information, someone edits your Google Business Profile, or a directory auto-populates an old address from public records. I monitor your citations monthly and fix errors as they appear. You'll see every change in your monthly report. This is the part most businesses skip — and it's often the reason their rankings erode after an initial improvement.",
    },
    {
      question: "Will this guarantee I rank #1?",
      answer:
        "No. Anyone making that guarantee is being dishonest. Citation consistency is one factor in local rankings — an important one — but not the only one. What I can tell you: if citation inconsistency is hurting your rankings, fixing it will help. I'll show you your audit results so you can see exactly how big a factor it is for your business before committing to anything. No mystery, no pressure.",
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
            Everything you need to know about citation building, NAP
            consistency, and how I approach it for contractors in Northwest
            Arkansas.
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
                  id={`faq-cit-header-${id}`}
                  className={`${styles.question} ${openIndex === index ? styles.active : ""}`}
                  onClick={() => toggleFAQ(index, id, faq.question)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-cit-panel-${id}`}
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
                        id={`faq-cit-panel-${id}`}
                        role='region'
                        aria-labelledby={`faq-cit-header-${id}`}
                        className={styles.answer}
                      >
                        <p>{faq.answer}</p>
                      </div>
                    ) : (
                      <motion.div
                        id={`faq-cit-panel-${id}`}
                        role='region'
                        aria-labelledby={`faq-cit-header-${id}`}
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
