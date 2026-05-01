"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import styles from "./CitationHero.module.css";
import CitationHeroSVG from "./CitationHeroSVG";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function CitationHero() {
  return (
    <section className={styles.hero}>
      <CitationHeroSVG />
      <div className={styles.container}>
        <LazyMotion features={domAnimation}>
          <m.div
            className={styles.content}
            initial='hidden'
            animate="visible"
          >
            <m.h1 className={styles.heading} variants={fadeUp} custom={0}>
              Google Can't Trust What It Can't{" "}
              <span className={styles.colorSpan}>Verify</span>
            </m.h1>
            <m.p className={styles.subheading} variants={fadeUp} custom={1}>
              If your business name, address, or phone number is wrong — or
              missing — across directories, Google has no reason to trust your
              listing. Inconsistent citations are one of the most overlooked
              reasons contractors don't rank.
            </m.p>
            <m.p className={styles.description} variants={fadeUp} custom={2}>
              I audit every citation your business has online, fix the
              inconsistencies, build the ones you're missing, and monitor them
              going forward. All transparent. All tracked. No contracts.
            </m.p>
            <m.a
              href='#contact'
              className={styles.cta}
              variants={fadeUp}
              custom={3}
              tabIndex={0}
              aria-label='Start With a Free Conversation'
            >
              Start With a Free Conversation <span aria-hidden='true'>→</span>
            </m.a>
            {/* Trust stat */}
            <m.div className={styles.trustStat} variants={fadeUp} custom={4}>
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
                <strong>72%</strong> of consumers use Google to search for local
                business information
              </span>
              <span className={styles.trustSource}>BrightLocal</span>
            </m.div>
            {/* Mobile call link */}
            <m.a
              href='tel:+14793808626'
              className={styles.callLink}
              variants={fadeUp}
              custom={5}
              tabIndex={0}
              aria-label='Call Local Search Ally'
            >
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                focusable='false'
                style={{ marginRight: 6 }}
              >
                <path
                  d='M2.5 4.5A2 2 0 0 1 4.5 2.5h2A2 2 0 0 1 8.5 4.5v1A2 2 0 0 1 6.5 7.5h-1A2 2 0 0 1 3.5 5.5v-1zM2.5 15.5A2 2 0 0 0 4.5 17.5h2A2 2 0 0 0 8.5 15.5v-1A2 2 0 0 0 6.5 13.5h-1A2 2 0 0 0 3.5 15.5v1zM15.5 2.5A2 2 0 0 1 17.5 4.5v2A2 2 0 0 1 15.5 8.5h-1A2 2 0 0 1 13.5 6.5v-1A2 2 0 0 1 15.5 3.5h1zM15.5 17.5A2 2 0 0 0 17.5 15.5v-2A2 2 0 0 0 15.5 11.5h-1A2 2 0 0 0 13.5 13.5v1A2 2 0 0 0 15.5 17.5h1z'
                  stroke='#7bafd4'
                  strokeWidth='1.5'
                />
              </svg>
              Or call <span className={styles.phoneNumber}>(479) 380-8626</span>
            </m.a>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
