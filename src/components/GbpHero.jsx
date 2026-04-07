import styles from "./GbpHero.module.css";

export default function GbpHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Dominate the{" "}
            <span className={styles.colorSpan}>Google Map Pack</span>
          </h1>
          <p className={styles.subheading}>
            Get into the top 3 local results. When homeowners search for your
            service, they see you first. That's where the calls come from.
          </p>
          <p className={styles.description}>
            Expert Google Business Profile optimization. Complete profile audit,
            high-quality photos, review strategy, and monthly management. Get
            visible, get found, get calls.
          </p>
          <a href='#contact' className={styles.cta}>
            Start With a Free Conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
