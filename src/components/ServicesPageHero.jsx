"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ServicesPageHero.module.css";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesPageHero() {
  return (
    <section className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} aria-hidden='true' />
      {/* Accent orb */}
      <div className={styles.orb} aria-hidden='true' />

      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.span variants={fadeUp} className={styles.eyebrow}>
            What I Do
          </motion.span>

          <motion.h1 variants={fadeUp} className={styles.h1}>
            Local SEO &amp; Web Design{" "}
            <em>for NWA Contractors.</em>
          </motion.h1>

          <motion.p variants={fadeUp} className={styles.subhead}>
            Most contractors have a website, a GBP, and a pile of reviews they
            never responded to. None of it is connected. That&rsquo;s why it
            doesn&rsquo;t work.
          </motion.p>

          <motion.div variants={fadeUp} className={styles.ctas}>
            <Link href='/contact' className={styles.btnPrimary}>
              Start With a Free Conversation
            </Link>
            <Link href='#services-detail' className={styles.btnSecondary}>
              See what&rsquo;s included →
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className={styles.trust}>
            Month-to-month. No contracts.
          </motion.p>
        </motion.div>

        {/* Bridge copy */}
        <motion.div
          className={styles.bridge}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.bridgeInner}>
            <p>
              Most contractors I talk to have tried at least one of these things
              before — a website from an agency who disappeared after launch. A
              marketing company that sent monthly PDFs full of graphs but
              nothing changed in search. I get it.
            </p>
            <p>
              Your website, your Google Business Profile, your reviews —
              they&rsquo;re not separate problems. They feed each other. When
              they&rsquo;re all working, you show up. When one is broken, the
              others suffer. Most businesses fix them one at a time, with
              different vendors, and wonder why nothing sticks.
            </p>
            <p>
              I&rsquo;ve built websites and done the SEO for the same
              businesses, and they work completely differently when one person
              owns both. Here&rsquo;s exactly what I do and what it means for
              your business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
