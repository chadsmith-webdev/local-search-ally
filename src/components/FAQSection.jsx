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
  {
    q: "How much does local SEO cost for a contractor in Northwest Arkansas?",
    a: "Local SEO at Local Search Ally starts at $497/month with no long-term contract. You pay month-to-month and can stop any time. There are no setup fees and no retainer lock-in. A free SEO audit is available before any commitment.",
  },
  {
    q: "How long does it take to rank in the Google Map Pack?",
    a: "Most NWA contractors see measurable movement in the Map Pack within 60–90 days of consistent optimization. Timeline depends on current profile completeness, competition in your trade and city, and how quickly citations are cleaned up.",
  },
  {
    q: "What is the difference between local SEO and regular SEO?",
    a: "Regular SEO targets national or broad keyword rankings. Local SEO targets searches within a specific geography — 'HVAC repair Rogers AR' or 'plumber near me.' It prioritizes your Google Business Profile and Map Pack placement, not just website rankings.",
  },
  {
    q: "Can I do local SEO myself or do I need help?",
    a: "You can handle the basics — claiming your GBP and filling it out completely. But consistent citation building, profile activity, on-page optimization, and tracking take 5–10 hours a month to do properly. Most trade owners don't have that time.",
  },
  {
    q: "What is a citation and why does it matter for my business?",
    a: "A citation is any online listing that shows your business name, address, and phone number. Directories like Yelp, Angi, and the BBB are examples. Consistent, accurate citations across the web build Google's confidence that your business is real and active.",
  },
  {
    q: "Why does my competitor rank above me even though I have more reviews?",
    a: "Reviews are one of many Map Pack signals. Competitors often outrank businesses with more reviews because they have a more complete GBP, stronger citation consistency, more relevant categories selected, or more engagement on their profile.",
  },
  {
    q: "What does Google Business Profile optimization actually involve?",
    a: "GBP optimization means completing every profile field, selecting the right primary and secondary categories, uploading photos regularly, posting weekly updates, responding to every review, and adding services with keyword-rich descriptions.",
  },
  {
    q: "Do I need a website if I already have a Google Business Profile?",
    a: "Yes. Your GBP gets you into the Map Pack, but searchers click through to your website to decide whether to call. A slow, outdated, or vague website loses the conversion after local SEO wins the ranking. Both work together.",
  },
  {
    q: "What trades do you work with in Northwest Arkansas?",
    a: "Local Search Ally works with home service trades in NWA — HVAC, plumbing, roofing, electrical, landscaping, and remodeling. These trades share the same local search patterns and benefit most from Map Pack visibility.",
  },
  {
    q: "Where is Local Search Ally located and what areas do you serve?",
    a: "Local Search Ally is based in Siloam Springs, AR. Chad Smith serves NWA home service trades across Rogers, Bentonville, Fayetteville, Springdale, Siloam Springs, Centerton, Bella Vista, Lowell, and Cave Springs.",
  },
  {
    q: "How do I know if my local SEO is actually working?",
    a: "You should see movement in GBP insights — searches, views, and call clicks. Monthly reports from Local Search Ally show ranking positions, Google Business Profile activity, and actions taken. No black box, no jargon.",
  },
  {
    q: "What is the first step to getting started with Local Search Ally?",
    a: "Run the free SEO audit at audit.localsearchally.com. It shows your current Map Pack visibility, GBP completeness, and top citation gaps — no email required, no sales call triggered automatically.",
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

export default function FAQSection({
  faqs = FAQS,
  eyebrow = "Common Questions",
  heading = (
    <>
      Frequently asked about
      <br />
      local visibility.
    </>
  ),
}) {
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
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.h2}>{heading}</h2>
        </motion.div>

        <div className={styles.list}>
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
