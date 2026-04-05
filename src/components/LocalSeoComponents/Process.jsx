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
        >
          <h2 className={styles.heading}>The Process</h2>
          <p className={styles.intro}>
            Every engagement follows the same transparent 3-step process. You
            know what to expect, and you see progress tracked month to month.
          </p>
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

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={fadeUp}
          className={styles.timeline}
        >
          <h3>Timeline</h3>
          <ul className={styles.timelineList}>
            <li>
              <strong>0-2 weeks:</strong> Audit complete, recommendations
              delivered
            </li>
            <li>
              <strong>Weeks 2-4:</strong> GBP optimization launched, citation
              building begins
            </li>
            <li>
              <strong>30-60 days:</strong> First visibility improvements,
              initial results
            </li>
            <li>
              <strong>60-90 days:</strong> Map pack movement likely, steady
              ranking growth
            </li>
            <li>
              <strong>Ongoing:</strong> Monthly reports, strategy refinement,
              continuous growth
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
