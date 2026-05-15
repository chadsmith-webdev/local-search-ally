"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
          {/* Photo column */}
          <motion.div className={styles.photoCol} variants={fadeUp}>
            <div className={styles.photoFrame}>
              <Image
                src='/images/chadsmith-profile.png'
                alt='Chad Smith — founder of Local Search Ally, Siloam Springs AR'
                fill
                sizes='(max-width: 900px) 100vw, 440px'
                className={styles.photo}
                priority={true}
              />
            </div>
            <div className={styles.locationTag}>
              <svg
                width='10'
                height='13'
                viewBox='0 0 10 13'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                aria-hidden='true'
              >
                <path d='M5 1C2.79 1 1 2.79 1 5c0 3.25 4 7.5 4 7.5s4-4.25 4-7.5C9 2.79 7.21 1 5 1z' />
                <circle cx='5' cy='5' r='1.25' />
              </svg>
              Siloam Springs, AR &mdash; serving all of NWA
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div className={styles.textCol} variants={container}>
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              How I got here
            </motion.span>

            <motion.h2 className={styles.h2} variants={fadeUp}>
              I didn&rsquo;t start in marketing.{" "}
              <em>I started in real estate wholesaling.</em>
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
