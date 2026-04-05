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
            Complete Google Business Profile Optimization
          </h2>
          <p className={styles.intro}>
            I handle everything. Every aspect of your GBP gets optimized for
            maximum visibility and conversion.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.answerFirst}
        >
          <h3>Get into the Google Map Pack in 30-90 days.</h3>
          <p>
            Your GBP is the foundation of local search visibility. Everything I
            do is designed to move you from invisible to visible.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.what}
        >
          <h3>What I Optimize</h3>

          <div className={styles.whatItem}>
            <h4>Profile Information</h4>
            <p>
              Complete accuracy and consistency. Business name, address, phone
              number, hours, service areas — everything verified and optimized.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h4>High-Quality Photos</h4>
            <p>
              Professional photos of your business, team, and work. Google
              prioritizes profiles with regular photo updates.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h4>Review Strategy</h4>
            <p>
              I help you build a system to request reviews from happy customers.
              More reviews = higher visibility and customer trust.
            </p>
          </div>

          <div className={styles.whatItem}>
            <h4>Regular Posts & Updates</h4>
            <p>
              Monthly posts showcasing work, promotions, and updates keep your
              profile active and signal freshness to Google.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
