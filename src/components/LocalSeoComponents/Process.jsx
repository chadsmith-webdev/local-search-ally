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
        "I review your current visibility: Google Business Profile optimization, citation consistency, keyword rankings, and competitor positioning. You get a detailed report showing exactly what's holding you back.",
    },
    {
      number: "02",
      title: "Fix Priority Gaps",
      description:
        "Starting with what moves the needle most. We optimize your GBP, build citations in the right directories, improve your on-page keyword targeting, and establish a review request system.",
    },
    {
      number: "03",
      title: "Grow & Track",
      description:
        "Monthly reports show your visibility trend, keyword movements, citation growth, and review progress. I adjust strategy based on what's working. You see everything.",
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
          <h2 className={styles.heading}>The Local SEO Engine</h2>
          <p className={styles.intro}>
            A precise, data-driven framework optimized for Northwest Arkansas
            contractors. We don't just build links; we build local authority.
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
                { label: "0-2 Weeks", text: "Audit & GBP Baselining" },
                { label: "Weeks 2-4", text: "Citation Engine Launch" },
                { label: "30-60 Days", text: "Map Pack Signal Growth" },
                { label: "60-90 Days", text: "Authority Solidification" },
                { label: "Ongoing", text: "Growth & Recalibration" },
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
