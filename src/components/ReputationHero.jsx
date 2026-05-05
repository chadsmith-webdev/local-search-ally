"use client";
import { m } from "framer-motion";
import styles from "./ReputationHero.module.css";
import ReputationHeroSVG from "./ReputationHeroSVG";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function ReputationHero() {
  return (
    <section className={styles.hero}>
      <ReputationHeroSVG />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Reputation Management for{" "}
            <span className={styles.colorSpan}>NWA Contractors</span>
          </h1>
          <m.div initial='hidden' animate='visible'>
              <m.p className={styles.subheading} variants={fadeUp} custom={0}>
                47% of consumers won't use a business with fewer than 20
                reviews. If your count is thin, you're invisible to nearly half
                the homeowners who find your competitors.
              </m.p>
              <m.p className={styles.description} variants={fadeUp} custom={2}>
                I build a review system that fits your workflow: request
                templates, follow-up process, and monthly monitoring. You focus
                on the job. The reviews follow naturally. Transparent process.
                No contracts.
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
                  <strong>47%</strong> of consumers won't use a business with
                  fewer than 20 reviews
                </span>
                <span className={styles.trustSource}>BrightLocal 2026</span>
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
        </div>
      </div>
    </section>
  );
}
