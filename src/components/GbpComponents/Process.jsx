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
      title: "Complete Profile Audit",
      description:
        "I audit every aspect of your GBP: accuracy, completeness, photos, reviews, visibility. You get a detailed report.",
    },
    {
      number: "02",
      title: "Optimization & Updates",
      description:
        "I fix all gaps: verify information, upload professional photos, optimize description with keywords, and set up your review strategy.",
    },
    {
      number: "03",
      title: "Ongoing Management",
      description:
        "Monthly posts, photo updates, review monitoring, and Q&A management. Your GBP stays fresh and competitive.",
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
        >
          <h2 className={styles.heading}>How We Get You Into the Map Pack</h2>
          <p className={styles.intro}>A simple 3-step process that works.</p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={containerVariants}
          className={styles.steps}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeUp} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
