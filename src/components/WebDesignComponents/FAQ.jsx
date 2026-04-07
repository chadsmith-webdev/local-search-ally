"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes a contractor website actually work?",
      answer:
        "A contractor website needs to do three things: rank on Google (SEO-ready), load fast on phones (mobile-first), and convert visitors into calls (clear CTAs and simple forms). Most fail because they look nice but don't perform these functions. I build for results, not awards. Every page has one clear goal: getting the phone to ring.",
    },
    {
      question: "Do you use templates?",
      answer:
        "No. Every site is custom-coded and designed specifically for your business. Templates look like templates — your customers notice, and competitors using custom designs outconvert you. I build on Next.js, which gives speed, SEO performance, and flexibility. Your site is entirely yours.",
    },
    {
      question: "Will the site be mobile-friendly?",
      answer:
        "Yes. 88% of consumers who do a local search call the business within 24 hours — most on mobile devices. Every site is mobile-first: phone experience designed first, everything else follows. Page speed on mobile is critical for Google rankings, so I optimize relentlessly.",
    },
    {
      question: "How does this include SEO?",
      answer:
        "Web design and SEO are inseparable. Every page is built with SEO in mind: clear H1/H2 hierarchy, optimized meta tags, fast load times, mobile responsiveness, and structured data. Design is optimized for both Google's algorithm and human conversion. You get a site that ranks AND converts.",
    },
    {
      question: "Can I update the content myself?",
      answer:
        "Yes. Sites are built on Next.js with content you can manage easily. For technical changes, I'm here to help. Most clients update service descriptions, testimonials, and gallery photos independently. You own the site — I'm just the builder.",
    },
    {
      question: "What if I need changes after launch?",
      answer:
        "No problem. I offer optional ongoing support for technical updates, new features, or design tweaks. You're never locked in. You can manage basic content yourself, or I can handle ongoing maintenance. Your choice.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
            Everything you need to know about custom website design and how I
            approach it.
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
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
            >
              <button
                className={`${styles.question} ${
                  openIndex === index ? styles.active : ""
                }`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>+</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.answer}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
