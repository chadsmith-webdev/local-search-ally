"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import styles from "./FinalCTASection.module.css";

export default function FinalCTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref} id='get-started'>
      <div className={styles.grid} aria-hidden='true' />

      <div className={styles.inner}>
        <motion.span
          className={styles.sectionTag}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          GET STARTED
        </motion.span>

        <motion.h2
          className={styles.h2}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
        >
          Does your business show up
          <br />
          <em>where it counts?</em>
        </motion.h2>

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        >
          The free audit takes 90 seconds and tells you exactly where you stand.
          No email required. No sales call triggered automatically. Just an
          honest look at your visibility — and what it would take to fix it.
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <Link
            href={
              process.env.NEXT_PUBLIC_AUDIT_URL ||
              "https://audit.localsearchally.com"
            }
            className={styles.btnPrimary}
          >
            Run Your Free Audit →
          </Link>
          <Link href='/contact' className={styles.btnSecondary}>
            Or book a free strategy call →
          </Link>
        </motion.div>

        <motion.p
          className={styles.trust}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          (479) 380-8626 &nbsp;·&nbsp; Siloam Springs, AR &nbsp;·&nbsp; I answer
          my own phone.
        </motion.p>
      </div>
    </section>
  );
}
