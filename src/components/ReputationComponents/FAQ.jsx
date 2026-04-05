"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why do reviews matter so much?",
      answer:
        "Reviews serve as social proof. When someone searches for your service and sees a 4.8-star business next to a 3.2-star competitor, they call the 4.8-star business first. Reviews directly impact conversion rates and call volume.",
    },
    {
      question: "What if I have some negative reviews?",
      answer:
        "Everyone has negative reviews if they do enough work. What matters is how you respond. I'll help you respond professionally within 24-48 hours, which shows future customers that you stand behind your work and take concerns seriously.",
    },
    {
      question: "Can you remove fake or unfair reviews?",
      answer:
        "I cannot remove reviews, but I can help you report clearly fake or unfair ones to the platform. Most platforms have removal processes. More importantly, good reviews crowd out bad ones, so our focus is on generating more legitimate reviews from happy customers.",
    },
    {
      question: "How long until I see more reviews?",
      answer:
        "With a good request system in place, you'll typically see 5-15 new reviews in the first month from happy customers you already know. After 3-6 months of consistent requesting, most contractors reach 30-50+ reviews on their main platforms.",
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
          <h2 className={styles.heading}>Common Questions</h2>
          <p className={styles.intro}>
            Everything you need to know about building your online reputation.
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
