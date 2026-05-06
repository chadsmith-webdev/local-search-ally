"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./DiagnosticSection.module.css";

const diagnostics = [
  {
    id: "GBP_PROFILE",
    status: "INCOMPLETE",
    statusType: "warn",
    title: "Why is your Google Business Profile hurting your Map Pack ranking?",
    body: "Most contractors fill out less than 60% of their GBP — wrong categories, no weekly posts, photos from three years ago. Google sees a dormant business. A dormant business doesn\u2019t rank. A complete, active profile is the single highest-leverage move available to any local contractor.",
  },
  {
    id: "CITATION_CONSISTENCY",
    status: "CONFLICT DETECTED",
    statusType: "error",
    title:
      "Why does inconsistent business information cost you Google rankings?",
    body: "Your name, address, and phone number shows up differently on Yelp than it does on Angi. Differently on your website than on the BBB. Every inconsistency is a signal to Google that it can\u2019t trust your data. And when Google can\u2019t trust your data, it doesn\u2019t rank you.",
  },
  {
    id: "MAP_PACK_POSITION",
    status: "NOT IN TOP 3",
    statusType: "error",
    title:
      "Why do less experienced contractors rank above you in local search?",
    body: "The three contractors in the NWA Map Pack right now aren\u2019t necessarily the best at their trade. They\u2019re the most visible online. The most complete profile. The most consistent citations. The most recent engagement. You could be better at what you do and still lose every call to them.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function DiagnosticSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref} id='diagnostic'>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>THREE FIXABLE PROBLEMS</span>
          <h2 className={styles.h2}>
            Why NWA contractors disappear from Google
          </h2>
          <p className={styles.lead}>
            It&rsquo;s not your service quality. It&rsquo;s not your reviews.
            It&rsquo;s three fixable infrastructure failures that most
            contractors don&rsquo;t know they have.
          </p>
        </div>

        <motion.div
          className={styles.panels}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
        >
          {diagnostics.map((d) => (
            <motion.div
              key={d.id}
              className={`${styles.panel} ${styles[d.statusType]}`}
              variants={itemVariants}
            >
              {/* Panel header bar */}
              <div className={styles.panelHeader}>
                <span className={styles.systemId}>{d.id}</span>
                <span
                  className={`${styles.statusChip} ${styles[`chip_${d.statusType}`]}`}
                >
                  <span className={styles.statusDot} aria-hidden='true' />
                  {d.status}
                </span>
              </div>

              {/* Panel body */}
              <div className={styles.panelBody}>
                <h3 className={styles.panelTitle}>{d.title}</h3>
                <p className={styles.panelText}>{d.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
