"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./AboutOrigin.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutOrigin() {
  const { scrollYProgress } = useScroll();
  
  // Parallax: text moves up slightly, photo moves down slightly
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [50, -50]);
  const photoY = useTransform(scrollYProgress, [0.1, 0.4], [-50, 50]);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.grid}
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Photo column with Sticky Anchor */}
          <motion.div className={styles.photoCol} variants={fadeUp}>
            <div className={styles.photoFrame}>
              <Image
                src='/images/chadsmith-profile.png'
                alt='Chad Smith — founder of Local Search Ally, Siloam Springs AR'
                fill
                sizes='(max-width: 900px) 100vw, 280px'
                className={styles.photo}
                priority={true}
              />
            </div>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>Chad Smith, Founder</span>
              </div>
              <div className={styles.infoItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.7a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.7z"/></svg>
                <span>Local SEO and Web Development</span>
              </div>
              <div className={styles.infoItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Siloam Springs, Arkansas</span>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div className={styles.textCol} variants={container} style={{ y: textY }}>
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              How I got here
            </motion.span>

            <motion.h2 className={styles.h2} variants={fadeUp}>
              I didn&rsquo;t start in marketing.{" "}
              <em className={styles.accent}>I started in real estate wholesaling.</em>
            </motion.h2>

            <motion.div className={styles.body} variants={container}>
              <motion.p variants={fadeUp}>
                I started in real estate wholesaling in North Carolina, where I
                needed to reach distressed homeowners on a tight budget. So I
                taught myself SEO &mdash; not from a course, just from doing it
                and figuring out what worked.
              </motion.p>
              <motion.p variants={fadeUp}>
                While I was doing that, I kept running into the same kind of
                person: a plumber, a roofer, an HVAC tech who was genuinely
                better than the competition but didn&rsquo;t show up in search.
                The other guy &mdash; maybe not as good &mdash; was getting the
                calls because he ranked higher. I saw that enough times that it
                stuck.
              </motion.p>
              <motion.p variants={fadeUp}>
                I moved to Northwest Arkansas in 2024 and built Local Search
                Ally around fixing that. Same problem exists here. If anything,
                the market&rsquo;s growing fast enough that the visibility gap
                is getting wider.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
