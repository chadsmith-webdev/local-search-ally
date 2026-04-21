"use client";

import { motion } from "framer-motion";
import styles from "./Process.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Process() {
  return (
    <section className={styles.section} aria-labelledby="process-heading">
      <div className={styles.container}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={styles.header}>
          <div className={styles.eyebrowContainer}>
            <span className={styles.eyebrow}>The Process</span>
            <div className={styles.statusNode} aria-hidden="true">
              <span className={styles.pulsingNode} />
              <span className={styles.statusText}>LIVE_SYSTEM</span>
            </div>
          </div>
          <h2 className={styles.heading} id="process-heading">How I Build Your Site</h2>
          <p className={styles.intro}>
            Three phases. No surprises. You see progress at every step and
            nothing goes live without your sign-off.
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
            className={styles.mainSteps}
          >
            <motion.div variants={fadeUp} className={`${styles.step} hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-01</span>
                <h3 className={styles.stepTitle}>Discovery &amp; Architecture</h3>
              </div>
              <p className={styles.stepDesc}>
                I learn your business, your customers, and your competitors.
                Then I map the pages, calls to action, and content structure
                that will actually generate leads — before writing a line of code.
              </p>
              <ul className={styles.stepList}>
                <li>Business and competitor review</li>
                <li>Site map and page architecture</li>
                <li>Keyword targets per page</li>
                <li>Conversion path planning</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.step} hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-02</span>
                <h3 className={styles.stepTitle}>Design &amp; Build</h3>
              </div>
              <p className={styles.stepDesc}>
                I design in the browser — not Photoshop. You see the real site
                on a staging URL as it comes together. Mobile-first layout,
                fast load, clear CTAs. Custom-coded on Next.js, deployed to Vercel.
              </p>
              <ul className={styles.stepList}>
                <li>Mobile-first responsive design</li>
                <li>SEO-ready page structure</li>
                <li>Click-to-call and booking integrations</li>
                <li>Staging URL for live review</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className={`${styles.step} hud-frame`}>
              <div className={styles.stepHeader}>
                <span className={styles.stepTag}>STG-03</span>
                <h3 className={styles.stepTitle}>Launch &amp; Optimize</h3>
              </div>
              <p className={styles.stepDesc}>
                After your approval, I push the site live, submit it to
                Google, and monitor Core Web Vitals and ranking performance.
                Post-launch adjustments are included — the site keeps improving.
              </p>
              <ul className={styles.stepList}>
                <li>Domain setup and DNS configuration</li>
                <li>Google Search Console submission</li>
                <li>Core Web Vitals monitoring</li>
                <li>Post-launch content and ranking adjustments</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className={styles.sidebar}
            aria-label="Build timeline"
          >
            <h3 className={styles.sidebarHeading}>Timeline</h3>
            <ol className={styles.timeline}>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Week 1</span>
                  <p className={styles.timelineDesc}>Discovery call, competitor review, site architecture mapped</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Weeks 2–3</span>
                  <p className={styles.timelineDesc}>Design and build on staging — you review in real time</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Week 3–4</span>
                  <p className={styles.timelineDesc}>Content polish, mobile QA, performance optimization</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Week 4</span>
                  <p className={styles.timelineDesc}>Launch day — DNS switch, Search Console, analytics installed</p>
                </div>
              </li>
              <li className={styles.timelineItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div>
                  <span className={styles.timelineTag}>Ongoing</span>
                  <p className={styles.timelineDesc}>Post-launch monitoring, Core Web Vitals, content updates</p>
                </div>
              </li>
            </ol>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
