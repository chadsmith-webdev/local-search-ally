"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import styles from "./GbpHero.module.css";
import GbpHeroSVG from "./GbpHeroSVG";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function GbpHero() {
  return (
    <section className={styles.hero}>
      <GbpHeroSVG />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            GBP Optimization for{" "}
            <span className={styles.colorSpan}>NWA Contractors</span>
          </h1>
          <LazyMotion features={domAnimation}>
            <m.div initial='hidden' animate='visible'>
              <m.p className={styles.subheading} variants={fadeUp} custom={0}>
                51% of consumers use Google Maps for local search. Your Google
                Business Profile is what they see — and most are incomplete,
                outdated, or invisible.
              </m.p>
              <m.p className={styles.description} variants={fadeUp} custom={2}>
                I optimize every part of your GBP — photos, keywords, service
                areas, reviews, and monthly posts — so homeowners searching for
                your trade find you in the map pack instead of a competitor.
                Transparent process. No contracts.
              </m.p>
              <m.a
                href='#get-started'
                className={styles.cta}
                variants={fadeUp}
                custom={2}
                tabIndex={0}
                aria-label='Start With a Free Conversation'
              >
                Start With a Free Conversation <span aria-hidden='true'>→</span>
              </m.a>
              <m.div className={styles.trustStat} variants={fadeUp} custom={3}>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 22 22'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  focusable='false'
                  style={{ marginRight: 8 }}
                >
                  <circle
                    cx='11'
                    cy='11'
                    r='10'
                    stroke='#7bafd4'
                    strokeWidth='2'
                    fill='none'
                  />
                  <path
                    d='M7 11.5l2.5 2.5 5-5'
                    stroke='#7bafd4'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <span>
                  <strong>51%</strong> of consumers use Google Maps for local
                  search
                </span>
                <span className={styles.trustSource}>Backlinko</span>
              </m.div>
              <m.a
                href='tel:+14793808626'
                className={styles.callLink}
                variants={fadeUp}
                custom={4}
                tabIndex={0}
              >
                Or call{" "}
                <span className={styles.phoneNumber}>(479) 380-8626</span>
              </m.a>
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
}
