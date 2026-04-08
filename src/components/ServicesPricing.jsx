"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ServicesPricing.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function IconCheck() {
  return (
    <svg
      viewBox='0 0 10 10'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.75'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <polyline points='2 5 4.5 7.5 8.5 2.5' />
    </svg>
  );
}

const GUARANTEES = [
  {
    text: "No long-term contracts — if it's not working, you can leave",
  },
  {
    text: "Every project starts with a free strategy call",
  },
  {
    text: "I'll give you a number in the first call — not a range, an actual number",
  },
  {
    text: "Most clients run 1–3 services — I'll tell you which one to start with",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Audit",
    desc: "I review your current local visibility, service pages, and what your top competitors are doing.",
  },
  {
    n: "2",
    title: "Fix First",
    desc: "I focus on the highest-impact gaps — the things currently costing you the most calls.",
  },
  {
    n: "3",
    title: "Track & Adjust",
    desc: "I monitor rankings, calls, and GBP activity monthly and tell you what moved and why.",
  },
];

export default function ServicesPricing() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Left: Pricing commitments */}
        <div className={styles.left}>
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            How Pricing Works
          </motion.span>
          <motion.h2 variants={fadeUp} className={styles.h2}>
            Honest pricing.{" "}
            <span className='text-carolina'>No long-term contracts.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.lead}>
            I don&rsquo;t publish prices because every business is different —
            an HVAC company covering five cities needs more than a solo
            electrician covering one. What I can tell you is this:
          </motion.p>

          <motion.ul variants={container} className={styles.guaranteeList}>
            {GUARANTEES.map((g) => (
              <motion.li
                key={g.text}
                variants={fadeUp}
                className={styles.guarantee}
              >
                <span className={styles.guaranteeIcon}>
                  <IconCheck />
                </span>
                <p>{g.text}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className={styles.ctaWrap}>
            <Link href='/contact' className={styles.cta}>
              Book a Free 30-Minute Strategy Call →
            </Link>
          </motion.div>
        </div>

        {/* Right: How It Works */}
        <div className={styles.right}>
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            How It Works
          </motion.span>
          <motion.div variants={container} className={styles.steps}>
            {STEPS.map((step) => (
              <motion.div
                key={step.n}
                variants={fadeUp}
                className={styles.step}
              >
                <div className={styles.stepNum}>{step.n}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
