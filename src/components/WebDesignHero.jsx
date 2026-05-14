"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import styles from "./WebDesignHero.module.css";
import WebDesignHeroSVG from "./WebDesignHeroSVG";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

export default function WebDesignHero() {
  return (
    <section className={styles.hero}>
      <WebDesignHeroSVG />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Web Design for{" "}
            <span className={styles.colorSpan}>NWA Contractors</span>
          </h1>
          <LazyMotion features={domAnimation}>
            <m.div initial='hidden' animate='visible'>
              <m.p className={styles.subheading} variants={fadeUp} custom={0}>
                61% of consumers say they're more likely to contact a local
                business that has a website. If yours doesn't exist — or looks
                like it was built in 2015 — you're losing calls to the guy who
                invested in his.
              </m.p>
              <m.p className={styles.description} variants={fadeUp} custom={2}>
                I build contractor websites that rank on Google, load fast on
                phones, and convert visitors into calls. Custom-coded, SEO-ready
                from day one. No templates. No contracts.
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
              {/* Trust stat */}
              <m.div className={styles.trustStat} variants={fadeUp} custom={3}>
                <svg
                  width='22'
                  height='22'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  focusable='false'
                  style={{ marginRight: 8 }}
                >
                  <path
                    fill='#7bafd4'
                    d='M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z'
                  />
                </svg>
                <span>
                  <strong>61%</strong> of consumers are more likely to contact a
                  business with a website
                </span>
                <span className={styles.trustSource}>BrightLocal</span>
              </m.div>
              {/* Mobile call link */}
              <m.a
                href='tel:+14793808626'
                className={styles.callLink}
                variants={fadeUp}
                custom={4}
                tabIndex={0}
              >
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  focusable='false'
                  style={{ marginRight: 6 }}
                >
                  <path
                    fill='#7bafd4'
                    d='M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z'
                  />
                </svg>
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
