"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import styles from "./AuthoritySection.module.css";

const pledges = [
  "I will never take credit for results I didn\u2019t produce.",
  "I will tell you if local SEO isn\u2019t your biggest problem.",
  "I will never lock you into a contract you can\u2019t leave.",
  "I will give you my cell number and actually answer it.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.1 },
  }),
};

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
            <div className={styles.hudBracket} aria-hidden='true'>
              <span className={styles.tl} />
              <span className={styles.tr} />
              <span className={styles.bl} />
              <span className={styles.br} />
            </div>
            <Image
              src='/images/chadsmith-profile.png'
              alt='Chad Smith — Local Search Ally, Siloam Springs AR'
              width={400}
              height={480}
              className={styles.photo}
            />
            <div className={styles.locationTag}>
              <span className={styles.locationDot} aria-hidden='true' />
              <span>Siloam Springs, AR</span>
            </div>
          </div>
          <div className={styles.specTag}>SPECIALIST_NOT_AGENCY</div>
        </motion.div>

        {/* Right: editorial copy */}
        <div className={styles.contentCol}>
          <motion.span
            className={styles.sectionTag}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            WHO I AM
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
            I moved to Siloam Springs because NWA is one of the fastest-growing
            metro areas in the country — and most of the contractors here are
            invisible online. Not because they&rsquo;re bad at their trade.
            Because nobody has built the local SEO infrastructure this market
            actually needs.
          </motion.p>

          <motion.p
            className={styles.body}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            I&rsquo;m not a marketing agency. I don&rsquo;t have 200 clients and
            an account manager who doesn&rsquo;t know your name. I have one area
            of expertise — local SEO for home service trades — and I apply it
            specifically to the NWA market. Every business I work with gets my
            direct attention, my direct phone number, and a monthly report that
            tells them exactly what moved and why.
          </motion.p>

          {/* Pledges */}
          <div className={styles.pledges}>
            <div className={styles.pledgesLabel}>MY COMMITMENTS TO YOU</div>
            {pledges.map((pledge, i) => (
              <motion.div
                key={i}
                className={styles.pledge}
                custom={i}
                variants={fadeUp}
                initial='hidden'
                animate={inView ? "visible" : "hidden"}
              >
                <span className={styles.pledgeCheck} aria-hidden='true'>
                  ✓
                </span>
                <span>{pledge}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
