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
        <LazyMotion features={domAnimation}>
          <m.div
            className={styles.content}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <m.h1 className={styles.heading} variants={fadeUp} custom={0}>
              A Website That{" "}
              <span className={styles.colorSpan}>Gets the Phone to Ring</span>
            </m.h1>
            <m.p className={styles.subheading} variants={fadeUp} custom={1}>
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
              href="#contact"
              className={styles.cta}
              variants={fadeUp}
              custom={3}
              tabIndex={0}
              aria-label="Start With a Free Conversation"
            >
              Start With a Free Conversation <span aria-hidden="true">→</span>
            </m.a>
            <m.div className={styles.trustStat} variants={fadeUp} custom={4}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                style={{ marginRight: 8 }}
              >
                <circle cx="11" cy="11" r="10" stroke="#7bafd4" strokeWidth="2" fill="none" />
                <path d="M7 11.5l2.5 2.5 5-5" stroke="#7bafd4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>
                <strong>61%</strong> of consumers are more likely to contact a
                business with a website — BrightLocal
              </span>
            </m.div>
            <m.a
              href="tel:+14793808626"
              className={styles.callLink}
              variants={fadeUp}
              custom={5}
              aria-label="Call Local Search Ally at (479) 380-8626"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M16.5 12.69v2.34a1.56 1.56 0 0 1-1.7 1.56 15.44 15.44 0 0 1-6.73-2.4 15.2 15.2 0 0 1-4.68-4.68A15.44 15.44 0 0 1 .99 2.76 1.56 1.56 0 0 1 2.53 1.06h2.34a1.56 1.56 0 0 1 1.56 1.34c.1.74.28 1.47.54 2.17a1.56 1.56 0 0 1-.35 1.64l-.99.99a12.48 12.48 0 0 0 4.68 4.68l.99-.99a1.56 1.56 0 0 1 1.64-.35c.7.26 1.43.44 2.17.54a1.56 1.56 0 0 1 1.34 1.58z"
                  stroke="#7bafd4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.phoneNumber}>(479) 380-8626</span>
            </m.a>
          </m.div>
        </LazyMotion>
      </div>
    </section>
  );
}
