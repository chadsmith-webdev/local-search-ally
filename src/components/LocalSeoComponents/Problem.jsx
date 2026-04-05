"use client";

import styles from "./Problem.module.css";
import { motion } from "framer-motion";

export default function Problem() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
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
          <h2 className={styles.heading}>The Invisibility Problem</h2>
          <p className={styles.intro}>
            You're good at your job. Your customers love you. But Google doesn't
            know you exist.
          </p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className={styles.problems}
        >
          <motion.div variants={fadeUp} className={styles.problem}>
            <div className={styles.problemIcon}>📍</div>
            <h3>Not Visible in Google Maps</h3>
            <p>
              When someone searches "plumber near me" or "HVAC repair in
              Rogers," your business doesn't appear in the top results. Your
              competitor's does. That's a lost call.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.problem}>
            <div className={styles.problemIcon}>⭐</div>
            <h3>Missing Reviews & Social Proof</h3>
            <p>
              Google shows review count and rating directly in search results.
              Without a review strategy, you look less trustworthy than
              competitors — even if you do better work.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.problem}>
            <div className={styles.problemIcon}>🔍</div>
            <h3>Your Website Doesn't Rank for Local Keywords</h3>
            <p>
              You have a website but nobody finds it through Google. Your pages
              don't rank for the keywords homeowners actually search when they
              need your service.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.problem}>
            <div className={styles.problemIcon}>💼</div>
            <h3>Lost Leads to Bigger Companies</h3>
            <p>
              National franchises and larger companies dominate search results
              in your market. They spend money on Google Ads. You can't compete
              with that budget. But you can rank locally without paying per
              click.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.statistic}
        >
          <p>
            <strong>46% of Google searches have local intent.</strong> That's
            homeowners looking to hire someone in their area — right now. If
            you're not visible, that search results in a call to someone else.
          </p>
          <p className={styles.source}>
            — Think With Google, "The Importance of Local Search Today"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
