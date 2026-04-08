"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./GuideSection.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const PLEDGES = [
  "I will never claim results I haven't achieved.",
  "I will tell you if something is outside my skill set.",
  "I will never lock you into a contract.",
  "I will communicate clearly and often.",
];

export default function GuideSection() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.inner}
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className={styles.grid}>
          {/* Photo */}
          <motion.div className={styles.photoWrap} variants={fadeUp}>
            <div className={styles.photoFrame}>
              <Image
                src='/images/chad.avif'
                alt='Chad Smith — Local Search Ally, Siloam Springs AR'
                fill
                sizes='(max-width: 960px) 140px, 380px'
                className={styles.photo}
                priority={false}
              />
            </div>
            <div className={styles.locationTag}>
              <svg
                viewBox='0 0 12 16'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M6 1C3.24 1 1 3.24 1 6c0 4.25 5 9 5 9s5-4.75 5-9c0-2.76-2.24-5-5-5z' />
                <circle cx='6' cy='6' r='1.5' />
              </svg>
              Siloam Springs, AR · Serving all of NWA
            </div>
          </motion.div>

          {/* Content */}
          <motion.div className={styles.content} variants={container}>
            <motion.span className={styles.eyebrow} variants={fadeUp}>
              Your Guide
            </motion.span>

            <motion.h2 className={styles.h2} variants={fadeUp}>
              I&rsquo;m Chad. I specialize in Local SEO
              <br />
              for NWA home service trades.
            </motion.h2>

            <motion.div className={styles.body} variants={container}>
              <motion.p className={styles.p} variants={fadeUp}>
                Not general marketing. Not e-commerce. Local SEO specifically
                for HVAC, plumbing, roofing, and electrical businesses in
                Northwest Arkansas — because each trade has a different version
                of the visibility problem, and generic fixes don&rsquo;t work.
              </motion.p>
              <motion.p className={styles.p} variants={fadeUp}>
                I built a 10-point SEO audit that shows you exactly where your
                business is losing visibility online. Not a generic score —
                it&rsquo;s built to surface the specific gaps that keep trade
                businesses off the first page in their service area.
              </motion.p>
              <motion.p className={styles.p} variants={fadeUp}>
                Every fix I make — your Google Business Profile, your service
                pages, your citation consistency across directories — is pointed
                at one thing: getting the right customer to call you first.
              </motion.p>
            </motion.div>

            {/* Transparency pledges */}
            <motion.div className={styles.pledges} variants={container}>
              {PLEDGES.map((pledge) => (
                <motion.div
                  key={pledge}
                  className={styles.pledge}
                  variants={fadeUp}
                >
                  <div className={styles.pledgeCheck}>
                    <svg
                      viewBox='0 0 10 10'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.75'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <polyline points='2 5 4.5 7.5 8.5 2.5' />
                    </svg>
                  </div>
                  <span className={styles.pledgeText}>{pledge}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className={styles.divider} variants={fadeUp} />

            {/* Signature */}
            <motion.div className={styles.sig} variants={fadeUp}>
              <div>
                <p className={styles.sigName}>Chad Smith</p>
                <p className={styles.sigRole}>
                  Local Search Ally · NWA Contractor SEO
                </p>
              </div>
              <div className={styles.sigSep} />
              <a href='tel:+14793808626' className={styles.sigPhone}>
                (479) 380-8626
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
