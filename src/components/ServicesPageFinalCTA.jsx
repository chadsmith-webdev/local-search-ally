"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ServicesPageFinalCTA.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServicesPageFinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden='true' />

      <motion.div
        className={styles.inner}
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span variants={fadeUp} className={styles.eyebrow}>
          Let&rsquo;s Talk
        </motion.span>

        <motion.h2 variants={fadeUp} className={styles.h2}>
          The best HVAC tech in Bentonville{" "}
          <em>shouldn&rsquo;t be invisible online.</em>
        </motion.h2>

        <motion.p variants={fadeUp} className={styles.body}>
          If you&rsquo;re in NWA and you do great work but you&rsquo;re not
          getting found — that&rsquo;s fixable. Most people leave with a
          clearer picture of what to do, even if they don&rsquo;t hire me.
          It&rsquo;s usually not as complicated as it looks from the outside.
        </motion.p>

        <motion.div variants={fadeUp} className={styles.ctaGroup}>
          <Link href='/contact' className={styles.ctaPrimary}>
            Book a Free 30-Minute Strategy Call →
          </Link>
          <p className={styles.ctaMicro}>Month-to-month. No contracts.</p>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.transparency}>
          <ul className={styles.pledgeList}>
            <li>
              &ldquo;I will never claim results I haven&rsquo;t achieved.&rdquo;
            </li>
            <li>
              &ldquo;I will tell you if something is outside my skill
              set.&rdquo;
            </li>
            <li>&ldquo;I will never lock you into a contract.&rdquo;</li>
            <li>&ldquo;I will communicate clearly and often.&rdquo;</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
