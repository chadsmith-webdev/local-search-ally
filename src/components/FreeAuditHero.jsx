import styles from "./FreeAuditHero.module.css";

export default function FreeAuditHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            See Where You Actually{" "}
            <span className={styles.colorSpan}>Stand Online</span>
          </h1>
          <p className={styles.subheading}>
            Free SEO audit. No email gate. No charges. Just the truth.
          </p>
          <p className={styles.description}>
            I'll run a complete SEO audit of your website and Google Business
            Profile. You get an honest assessment of what's working, what's
            broken, and the highest-impact wins you can make immediately.
          </p>
          <a href='#audit' className={styles.cta}>
            Run Your Free Audit →
          </a>
        </div>
      </div>
    </section>
  );
}
