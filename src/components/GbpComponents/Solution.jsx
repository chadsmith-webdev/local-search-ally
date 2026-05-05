"use client";

import { motion } from "framer-motion";
import styles from "./Solution.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Solution() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Row 1: heading + Map Pack callout */}
        <div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className={styles.eyebrow}>The Fix</span>
            <h2 className={styles.heading}>How GBP Optimization Works for NWA Contractors</h2>
            <p className={styles.intro}>
              I audit every part of your Google Business Profile against
              Google’s ranking factors, then fix what’s holding you back —
              categories, photos, descriptions, services, and review strategy.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.answerFirst}
        >
          <h3>Get into the Google Map Pack in 30–90 days.</h3>
          <p>
            The Map Pack is the block of 3 businesses that appears at the top of
            Google when someone searches for your service. That’s where the
            calls come from. A fully optimized GBP is the single biggest lever
            for getting there.
          </p>
        </motion.div>

        {/* Row 2: What I Actually Optimize — spans full width */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.what}
        >
          <h3>What GBP Optimization Actually Includes</h3>
          <div className={styles.whatGrid}>
            <div className={styles.whatItem}>
              <h4>1. Profile Completeness &amp; Accuracy</h4>
              <p>
                Business name, address, phone, hours, service areas, and
                attributes — every field verified for consistency. Incomplete or
                inconsistent information is one of the most common reasons
                profiles don’t rank.
              </p>
            </div>
            <div className={styles.whatItem}>
              <h4>2. Category &amp; Keyword Strategy</h4>
              <p>
                Your primary and secondary categories control which searches
                you’re eligible to appear in. I select the correct categories
                and optimize your description with the keywords your customers
                actually use.
              </p>
            </div>
            <div className={styles.whatItem}>
              <h4>3. Photo &amp; Post Strategy</h4>
              <p>
                Profiles with recent, relevant photos receive significantly more
                engagement. I set up a photo upload schedule and create monthly
                posts that keep your profile active — both of which signal
                freshness to Google.
              </p>
            </div>
            <div className={styles.whatItem}>
              <h4>4. Review System</h4>
              <p>
                I build you a review request process: templates, timing, and
                response scripts for every star rating. More reviews — and a
                higher average — directly improve Map Pack rankings and convert
                more visitors into calls.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Row 3: Transparency — spans full width */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.transparency}
        >
          <h3>You’ll see every change I make.</h3>
          <p>
            Every month I send you a report showing your profile performance,
            visibility trend, and review growth. You’ll know exactly what
            changed, why it changed, and what’s next. No black-box work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
