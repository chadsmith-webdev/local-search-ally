"use client";

import styles from "./How.module.css";
import { motion } from "framer-motion";

export default function How() {
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
      title: "You Fill Out the Form",
      description:
        "Tell me about your business, service area, and where you currently stand on Google.",
    },
    {
      number: "02",
      title: "I Run the Audit",
      description:
        "I crawl your site, analyze your GBP, check your rankings, review competitors. Takes about 24-48 hours.",
    },
    {
      number: "03",
      title: "You Get the Report",
      description:
        "A detailed report with findings, priorities, and the top 3 wins you can make in the next 30 days.",
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
          <h2 className={styles.heading}>How It Works</h2>
          <p className={styles.intro}>
            Three simple steps. No sales pressure. Just results.
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
      </div>
    </section>
  );
}
