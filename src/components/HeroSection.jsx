"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./HeroSection.module.css";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className={styles.sceneFallback} />,
});

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden='true' />

      <div className={styles.inner}>
        {/* Left: content */}
        <motion.div
          className={styles.content}
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            NWA Contractor SEO
          </motion.span>

          <motion.h1 variants={fadeUp} className={styles.h1}>
            The best contractor in <em>NWA</em> shouldn't be the hardest to
            find.
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.subhead}>
            If your phone goes quiet while less experienced competitors stay
            busy, the problem isn't your work — it's your visibility. I help NWA
            home service trades show up on Google when it matters most.
          </motion.p>

          <motion.div variants={fadeUp} className={styles.ctas}>
            <Link href='/services/audit' className={styles.btnPrimary}>
              See Where You Stand — It's Free
            </Link>
            <Link href='#how-it-works' className={styles.btnSecondary}>
              How it works →
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className={styles.trust}>
            No contracts. No retainers. Just honest local SEO.
          </motion.p>
        </motion.div>

        {/* Right: 3D scene */}
        <div className={styles.sceneCol} aria-hidden='true'>
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
