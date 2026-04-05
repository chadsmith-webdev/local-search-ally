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
      title: "Discovery & Design",
      description:
        "I learn about your business, your customers, and your goals. Then I design the site from scratch — layout, colors, messaging. You approve before any code is written.",
    },
    {
      number: "02",
      title: "Build & Optimize",
      description:
        "I build the site on Next.js with a focus on speed, mobile performance, and SEO. Every page is tested across devices. Every image is optimized. Every CTA is clear.",
    },
    {
      number: "03",
      title: "Launch & Support",
      description:
        "The site goes live. I show you how to update content, and I'm here for technical questions. No hidden fees. No ongoing contract unless you want support.",
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
            From your first conversation to a live website, I keep it simple and
            transparent. You'll see progress every step of the way.
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
              <strong>Week 1:</strong> Discovery call, initial design concepts
            </li>
            <li>
              <strong>Week 2-3:</strong> Design refinement, your approval
            </li>
            <li>
              <strong>Week 4-5:</strong> Build & development, testing on all
              devices
            </li>
            <li>
              <strong>Week 6:</strong> Final QA, training on content updates
            </li>
            <li>
              <strong>Week 7:</strong> Launch day, site goes live
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
