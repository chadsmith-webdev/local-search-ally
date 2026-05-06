"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./AuthoritySection.module.css";

export default function AuthoritySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className={styles.section} ref={ref} id='about'>
      <div className={styles.inner}>
        {/* Left: photo + location tag */}
        <motion.div
          className={styles.photoCol}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.photoWrap}>
            <Image
              src='/images/chadsmith-profile.png'
              alt='Chad Smith — Local Search Ally, Siloam Springs AR'
              width={260}
              height={312}
              className={styles.photo}
            />
            <div className={styles.photoIdentity}>
              <span className={styles.photoName}>Chad Smith</span>
              <span className={styles.photoTitle}>Local SEO Specialist</span>
              <div className={styles.locationTag}>
                <span className={styles.locationDot} aria-hidden='true' />
                <span>Based in Siloam Springs, AR</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: editorial copy */}
        <div className={styles.contentCol}>
          <motion.span
            className={styles.sectionTag}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            WHO IS LOCAL SEARCH ALLY
          </motion.span>

          <motion.h2
            className={styles.h2}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            One specialist. One market. <em>All in.</em>
          </motion.h2>

          <motion.p
            className={styles.body}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            You&rsquo;re good at your trade. Your customers know it. But when
            someone in Rogers or Bentonville searches for your exact service
            tonight, it&rsquo;s not you they find &mdash; it&rsquo;s someone
            with a complete Google profile and consistent listings. That gap has
            nothing to do with skill. It&rsquo;s a visibility problem, and
            it&rsquo;s fixable.
          </motion.p>

          <motion.p
            className={styles.body}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            I moved to Siloam Springs specifically because NWA is one of the
            fastest-growing metro areas in the country &mdash; and the local SEO
            infrastructure most contractors here need simply doesn&rsquo;t exist
            yet. I&rsquo;m not a marketing agency with 200 clients and an
            account manager who doesn&rsquo;t know your name. One market, one
            specialty. Every business I work with gets my direct attention, my
            cell number, and a monthly report that tells them exactly what moved
            and why.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
