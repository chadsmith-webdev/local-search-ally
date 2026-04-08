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
      title: "Audit",
      description:
        "I scan every directory and data aggregator where your business appears. You get a full report showing every listing — what's accurate, what's wrong, and what's missing — before anything is changed.",
    },
    {
      number: "02",
      title: "Clean & Build",
      description:
        "I fix every inconsistency — wrong phone numbers, old addresses, duplicate listings — and build new citations in the directories that carry the most weight for local rankings. Priority goes to what Google looks for first.",
    },
    {
      number: "03",
      title: "Monitor & Maintain",
      description:
        "Citations drift. Data aggregators push incorrect info. Someone edits your listing. I watch for changes and fix errors before they damage your rankings. Monthly reports show your citation health at a glance.",
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
          <h2 className={styles.heading}>The Citation Engine</h2>
          <p className={styles.intro}>
            A systematic framework for auditing, cleaning, and building citations
            that send the right trust signals to Google — specifically for
            Northwest Arkansas contractors.
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
                { label: "Week 1", text: "Full Citation Audit" },
                { label: "Weeks 1-2", text: "Fix Existing Errors" },
                { label: "Weeks 2-4", text: "Core Directory Build" },
                { label: "Weeks 4-6", text: "Trade Platform Build" },
                { label: "Ongoing", text: "Monitor & Maintain" },
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
            <div className='bracket-bottom'></div>
            <div className='bracket-right'></div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
