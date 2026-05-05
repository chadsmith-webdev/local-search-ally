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

        {/* Row 1: heading + answer-first callout */}
        <div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className={styles.eyebrow}>The Strategy</span>
            <h2 className={styles.heading}>How Citation Building Works for NWA Contractors</h2>
            <p className={styles.intro}>
              I use a four-step process to find every listing your business has
              online, clean up what's wrong, fill the gaps, and keep it
              accurate going forward.
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
          <h3>Get consistent across 50+ directories in 30 days.</h3>
          <p>
            The goal isn't to be listed everywhere — it's to be listed
            correctly where it matters. I prioritize the directories Google
            actually cross-references when verifying local businesses, plus
            the trade-specific platforms your customers use to find
            contractors in NWA.
          </p>
        </motion.div>

        {/* Row 2: What I Actually Do */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.what}
        >
          <h3>What Citation Building Actually Includes</h3>
          <div className={styles.whatGrid}>
            <div className={styles.whatItem}>
              <h4>1. Full Citation Audit</h4>
              <p>
                I scan every directory, data aggregator, and platform where
                your business appears. You'll get a full list of every listing
                — correct, incorrect, and duplicate — before I touch a single
                one. No surprises, no guessing.
              </p>
            </div>
            <div className={styles.whatItem}>
              <h4>2. Fix Existing Inconsistencies</h4>
              <p>
                Wrong phone number on Yelp. Old address on Bing. Duplicate
                listing on HomeAdvisor. I correct every NAP error and
                consolidate duplicates. The goal is one consistent, accurate
                record everywhere Google looks.
              </p>
            </div>
            <div className={styles.whatItem}>
              <h4>3. Build Missing Citations</h4>
              <p>
                I build new citations strategically — starting with the
                high-authority directories Google weighs most (Yelp, Bing
                Places, Apple Maps, BBB) and then moving into
                trade-specific platforms like Angi, HomeAdvisor, and
                Houzz that NWA homeowners use to find contractors.
              </p>
            </div>
            <div className={styles.whatItem}>
              <h4>4. Monitor & Maintain</h4>
              <p>
                Listings drift over time. Data aggregators push bad info.
                Someone edits your Google Business Profile incorrectly. I
                monitor your citations on an ongoing basis so you don't
                discover a problem six months later when your rankings have
                already dropped.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Row 3: Transparency */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.transparency}
        >
          <h3>You'll see exactly where you stand.</h3>
          <p>
            I'll show you the full audit before doing anything. Every directory
            I build or fix is documented. You'll receive a report showing your
            citation count, accuracy score, and what changed. Nothing happens
            without your visibility.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
