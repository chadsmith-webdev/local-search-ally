"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./AboutDifference.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const AUDIT_SECTIONS = [
  "Google Business Profile",
  "Reviews & reputation",
  "On-page SEO",
  "Technical SEO",
  "Citation consistency",
  "Backlink signals",
  "Competitor comparison",
  "AI search visibility",
];

const DFY_ITEMS = [
  "GBP optimization and ongoing management",
  "Citation cleanup across top directories",
  "On-page SEO for service and location pages",
  "Review request process and templates",
  "Monthly plain-English visibility reports",
];

export default function AboutDifference() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          className={styles.wrapper}
        >
          <div className={styles.header}>
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              What I am &mdash; and what I&rsquo;m not
            </motion.span>
            <motion.h2 className={styles.h2} variants={fadeUp}>
              I&rsquo;ll be straight with you.{" "}
              <em className={styles.accent}>Solo operator. Not an agency.</em>
            </motion.h2>
          </div>

          <div className={styles.bodyText}>
            <motion.p variants={fadeUp}>
              I taught myself SEO, and I&rsquo;m still in the middle of learning
              web development &mdash; I&rsquo;m at Bellevue University,
              finishing up in 2027.
            </motion.p>
            <motion.p variants={fadeUp}>
              Before I worked with any clients, I built demo sites for HVAC,
              plumbing, and electrical contractors to test whether the approach
              actually held up. The audit tool runs real searches on your real
              business. Nothing gets rounded up to look better than it is.
            </motion.p>
            <motion.p variants={fadeUp}>
              I&rsquo;d rather tell you something you don&rsquo;t want to hear
              than oversell and disappear.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
