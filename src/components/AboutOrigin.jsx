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
                priority={false}
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
              I came to SEO through the contractor world,{" "}
              <em>not the other way around.</em>
            </motion.h2>

            <motion.div className={styles.body} variants={container}>
              <motion.p variants={fadeUp}>
                Before Local Search Ally, I spent time in real estate
                wholesaling. That put me in regular contact with contractors —
                HVAC techs, plumbers, roofers, tile guys. And I kept noticing
                the same thing: the most skilled people I worked with were the
                hardest to find online. Websites from 2014, Google Business
                Profiles with no photos, zero reviews.
              </motion.p>
              <motion.p variants={fadeUp}>
                When someone searched for an HVAC tech or a plumber in their
                area, those guys didn&rsquo;t show up. Not because the work
                wasn&rsquo;t there — because the online presence wasn&rsquo;t.
              </motion.p>
              <motion.p variants={fadeUp}>
                I started digging into why. Turns out local search has a
                specific logic — citations, proximity signals, GBP completeness,
                on-page relevance, review velocity — and most contractors had
                none of it in place. Not because they were doing anything wrong.
                Just because no one had ever set it up for them.
              </motion.p>
              <motion.p variants={fadeUp}>
                That&rsquo;s the gap I fill.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
