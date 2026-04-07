"use client";

import styles from "./Process.module.css";
import { motion } from "framer-motion";

export default function Process() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const steps = [
    {
      number: "01",
      title: "Profile Audit",
      description:
        "I go through every field, photo, review, and category in your GBP against Google's ranking criteria. You get a plain-language report showing exactly what's incomplete, incorrect, or missing — and what I'm going to fix first.",
    },
    {
      number: "02",
      title: "Optimization Launch",
      description:
        "I fix the priority gaps: business information verified, categories corrected, description rewritten with local keywords, high-quality photos uploaded, review request system set up, and services list built out.",
    },
    {
      number: "03",
      title: "Ongoing Management",
      description:
        "Monthly posts, photo updates, review monitoring and responses, Q&A management, and performance tracking. Your profile stays fresh and competitive while you focus on the work.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
          className={styles.header}
        >
          <div className={styles.eyebrowContainer}>
            <span className={styles.eyebrow}>Strategic Engineering</span>
            <span className={styles.statusNode}>
              <span className={styles.pulsingNode}></span>
              LIVE_SYSTEM
            </span>
          </div>
          <h2 className={styles.heading}>The GBP Optimization Engine</h2>
          <p className={styles.intro}>
            A precise, repeatable process built for Northwest Arkansas home
            service trades. Every step targets the factors Google uses to rank
            local businesses.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Main Steps Column */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={containerVariants}
            className={styles.mainSteps}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`${styles.step} glass-premium hud-frame`}
              >
                <div className={styles.stepHeader}>
                  <span className={styles.stepTag}>STG-0{index + 1}</span>
                  <div className={styles.stepNumber}>{step.number}</div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                <div className='bracket-bottom'></div>
                <div className='bracket-right'></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sidebar Timeline Column */}
          <motion.aside
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeUp}
            className={`${styles.sidebar} glass-premium hud-frame`}
          >
            <div className={styles.sidebarHeader}>
              <h3 className={styles.sidebarTitle}>Deployment Timeline</h3>
              <span className={styles.sidebarSub}>ESTIMATED_VELOCITY</span>
            </div>

            <div className={styles.timelineList}>
              {[
                { label: "Week 1", text: "Audit & Baseline Report" },
                { label: "Weeks 1–2", text: "Profile Optimization Launch" },
                { label: "Weeks 2–4", text: "Photos & Keyword Strategy" },
                { label: "30–60 Days", text: "Review System Active" },
                { label: "60–90 Days", text: "Map Pack Signal Growth" },
                { label: "Ongoing", text: "Monthly Posts & Management" },
              ].map((item, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineNode}>
                    <div className={styles.pulsingNode}></div>
                    <div className={styles.timelineLine}></div>
                  </div>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineLabel}>{item.label}</span>
                    <p className={styles.timelineText}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
