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
        "Your GBP is the listing that appears on Google Maps and local search results. It shows your business name, address, phone, hours, photos, and customer reviews. This is where homeowners find you when they search locally.",
    },
    {
      question: "How important is GBP for local rankings?",
      answer:
        "It's the foundation of local SEO. Your GBP optimization directly impacts your visibility in Google Maps and the map pack (top 3 results). A fully optimized GBP with good photos and positive reviews outranks incomplete profiles every time.",
    },
    {
      question: "What does GBP optimization include?",
      answer:
        "Everything: accurate business information, compelling description with local keywords, high-quality photos, review management, Q&A responses, and regular posts to keep your profile fresh.",
    },
    {
      question: "How long until I see results?",
      answer:
        "Changes often show up in Google within 1-2 weeks, but ranking improvements typically take 30-90 days as Google sees consistent optimization and review growth. Many clients see map pack movement within 60 days.",
    },
  ];

  const toggleFAQ = (index, question) => {
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
            optimization.
          </p>
        </motion.div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={fadeUp}
              className={styles.faqItem}
            >
              <button
                className={`${styles.question} ${
                  openIndex === index ? styles.active : ""
                }`}
                onClick={() => toggleFAQ(index, faq.question)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className={styles.icon} aria-hidden='true'>
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
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
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className={styles.answer}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <div aria-live='polite' className={styles.srOnly}>
          {announce}
        </div>
      </div>
    </section>
  );
}
