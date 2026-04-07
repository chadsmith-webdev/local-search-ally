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
      title: "Reputation Audit",
      description:
        "Review your current ratings and feedback across Google, Yelp, Facebook. Identify gaps and opportunities.",
    },
    {
      number: "02",
      title: "Request System Setup",
      description:
        "I create templates, timing, and channels for requesting reviews. You send them. Customers respond.",
    },
    {
      number: "03",
      title: "Monthly Monitoring",
      description:
        "I track new reviews, flag concerns, help you respond professionally. You get a monthly report and insights.",
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
          <h2 className={styles.heading}>How We Build Your Reputation</h2>
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
