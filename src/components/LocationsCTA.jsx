"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./LocationsCTA.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function LocationsCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2 variants={fadeUp}>
            Getting found on Google doesn't have to be complicated.
          </motion.h2>

          <motion.p variants={fadeUp} className={styles.subtext}>
            You don't need another vendor promising the world. You need someone in your community who understands your market, does the work right, and tells you the truth.
          </motion.p>

          <motion.div variants={fadeUp} className={styles.ctas}>
            <Link href="#faq" className={styles.btnPrimary}>
              Get Your Free Audit
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              Schedule a Call →
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className={styles.pledge}>
            <p className={styles.pledgeHeading}>My Promise</p>
            <ul className={styles.pledgeList}>
              <li>I will never claim results I haven't achieved.</li>
              <li>I will tell you if something is outside my skill set.</li>
              <li>I will never lock you into a contract.</li>
              <li>I will communicate clearly and often.</li>
            </ul>
          </motion.div>

          <motion.p variants={fadeUp} className={styles.closing}>
            The best contractor in town shouldn't be the hardest to find. Let's fix that.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
