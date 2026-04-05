import Link from "next/link";
import styles from "./ServiceAreasProcess.module.css";

export default function ServiceAreasProcess({ content, cta }) {
  return (
    <section className='section'>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 className={styles.h2}>{content.h2}</h2>
          <p className={styles.subhead}>{content.subhead}</p>
        </div>

        <div className={styles.steps}>
          {content.steps.map((step) => (
            <article key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <p className={styles.stepTitle}>{step.title}</p>
              <p className={styles.stepBody}>{step.body}</p>
            </article>
          ))}
        </div>

        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>{cta.h2}</h2>
          <p className={styles.ctaBody}>{cta.body}</p>
          <div className={styles.ctas}>
            <Link href={cta.primary.href} className={styles.primaryBtn}>
              {cta.primary.text}
            </Link>
            <Link href={cta.secondary.href} className={styles.secondaryBtn}>
              {cta.secondary.text}
            </Link>
          </div>
          <p className={styles.note}>{cta.note}</p>
        </div>
      </div>
    </section>
  );
}
