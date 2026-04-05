import styles from "./LocalSeoHero.module.css";

export default function LocalSeoHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Get Found on Google</h1>
          <p className={styles.subheading}>
            Local SEO that turns "searching nearby" into "calling you." 78% of
            local mobile searches result in an offline purchase. If you're not
            visible, a competitor is.
          </p>
          <p className={styles.description}>
            I optimize your Google Business Profile, build local citations, and
            improve your on-page visibility so homeowners searching for your
            service find you first. All transparent. All tracked. No contracts.
          </p>
          <a href='#contact' className={styles.cta}>
            Start With a Free Conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
