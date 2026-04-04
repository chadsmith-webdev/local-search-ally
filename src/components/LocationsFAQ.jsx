"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LocationsFAQ.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const faqs = [
  {
    id: 1,
    q: "Are you actually local to Northwest Arkansas?",
    a: "Yes. I'm based in Siloam Springs, AR. I understand the NWA market—who your competitors are, what customers search for, and which trades thrive here. This isn't remote consulting; it's someone in your community who knows your market.",
  },
  {
    id: 2,
    q: "How long before I see results?",
    a: "Visibility changes depend on competition and your starting point. Audit findings are immediate—you'll know exactly where you rank and why. Improvements typically show within 4–8 weeks, but some contractors see calls within 2 weeks if we identify quick wins. I track everything and show you the progress.",
  },
  {
    id: 3,
    q: "Do I have to sign a contract?",
    a: "No. I don't believe in them. You can stop anytime. If the work isn't delivering results, tell me and we'll fix it or part ways. I want to work with you because the results speak, not because you're locked in.",
  },
  {
    id: 4,
    q: "Can you help my trade (HVAC, plumbing, electrical, etc.)?",
    a: "Yes. I work with all home service trades—HVAC, plumbing, roofing, electrical, landscaping, remodeling. The audit approach is the same for every trade, but the strategy adjusts based on your market, seasonality, and audience.",
  },
  {
    id: 5,
    q: "How many audits do you do per week?",
    a: "I limit myself to 10 free audits per week. This keeps quality high and ensures I can actually help everyone who books. If you're interested, schedule soon—not to rush you, but audits fill up quickly.",
  },
];

export default function LocationsFAQ() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2>Common Questions</h2>
          <p>Everything you need to know about the audit and working together.</p>
        </motion.div>

        <motion.div
          className={styles.faqList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className={styles.faqItem}
              variants={fadeUp}
            >
              <button
                onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
                className={styles.faqButton}
                aria-expanded={expanded === faq.id}
              >
                <span className={styles.faqQuestion}>{faq.q}</span>
                <span className={styles.faqToggle} aria-hidden="true">
                  {expanded === faq.id ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {expanded === faq.id && (
                  <motion.div
                    className={styles.faqAnswer}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p>{faq.a}</p>
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
