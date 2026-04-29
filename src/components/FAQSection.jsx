"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./FAQSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const FAQS = [
  {
    q: "Why does my business need a Google Business Profile?",
    a: "Your GBP is your digital storefront on Google. Without it, you're invisible to nearly half your potential customers — the ones actively searching for a local service provider. It's the single highest-impact tool for local visibility, and it's free.",
  },
  {
    q: "What is NAP consistency and why does it matter?",
    a: "NAP stands for Name, Address, and Phone number. If your business information is listed differently across the web — even small differences like 'St.' vs. 'Street' — search engines lose confidence in your data and lower your rankings. Consistent listings tell Google you're a legitimate, active business.",
  },
  {
    q: "I have good reviews. Why am I still not ranking?",
    a: "Reviews are one signal, not the whole picture. Google also looks for engagement — responding to reviews, posting updates, keeping your profile active. An account with good reviews but no activity looks dormant to the algorithm. Active businesses respond. That signal matters.",
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={fadeUp} className={styles.item}>
      <button
        className={styles.question}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={styles.questionText}>{item.q}</span>
        <span className={`${styles.icon} ${open ? styles.iconOpen : ""}`}>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.75'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M4 6l4 4 4-4' />
          </svg>
        </span>
      </button>
      {/* Answer is always in the DOM so crawlers and AI engines can read it.
          Height/opacity animate for the visual accordion only. */}
      <motion.div
        className={styles.answerWrap}
        initial={false}
        animate={
          open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.28, ease: "easeInOut" }}
        aria-hidden={!open}
      >
        <p className={styles.answer}>{item.a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.header} variants={fadeUp}>
          <span className={styles.eyebrow}>Common Questions</span>
          <h2 className={styles.h2}>
            Frequently asked about
            <br />
            local visibility.
          </h2>
        </motion.div>

        <div className={styles.list}>
          {FAQS.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
