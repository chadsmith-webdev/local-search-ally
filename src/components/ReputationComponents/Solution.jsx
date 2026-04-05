"use client";

import styles from "./Solution.module.css";
import { motion } from "framer-motion";

export default function Solution() {
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
          <h2 className={styles.heading}>
            Build Your Reputation Systematically
          </h2>
          <p className={styles.intro}>
            I help you build a review system that works automatically.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.answerFirst}
        >
          <h3>Generate more 5-star reviews from your best customers.</h3>
          <p>
            Most contractors have happy customers but never ask for reviews. I
            set up a simple system that makes it easy for customers to leave
            reviews after great service.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.what}
        >
          <h3>What We Handle</h3>

          <div className={styles.whatItem}>
            <h4>Review Request Strategy</h4>
            <p>
              I create a simple workflow for requesting reviews at the right
              time (after completion, when customers are happiest) through the
              channels they prefer.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h4>Templates & Follow-Up</h4>
            <p>
              Easy-to-use templates (text, email, QR code) that make requesting
              reviews simple. No awkward asking — customers know exactly where
              to click.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h4>Negative Review Response</h4>
            <p>
              I help you respond to negative reviews professionally and quickly.
              A good response shows future customers that you care about getting
              it right.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h4>Monthly Monitoring</h4>
            <p>
              I track your reviews, flag concerning ones, and help you address
              issues before they hurt your business. You get a monthly report
              and recommendations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
