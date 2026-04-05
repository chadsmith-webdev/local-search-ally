import Link from "next/link";
import styles from "./ServiceAreasHero.module.css";

export default function ServiceAreasHero({ content }) {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden='true' />
      <div className={styles.orb} aria-hidden='true' />

      <div className={styles.inner}>
        <span className={styles.eyebrow}>{content.eyebrow}</span>
        <h1 className={styles.h1}>{content.h1}</h1>
        <div className={styles.bodyWrap}>
          {content.body.map((paragraph) => (
            <p key={paragraph} className={styles.body}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className={styles.ctas}>
          <Link href={content.primaryCta.href} className={styles.primaryBtn}>
            {content.primaryCta.text}
          </Link>
          <Link
            href={content.secondaryCta.href}
            className={styles.secondaryBtn}
          >
            {content.secondaryCta.text}
          </Link>
        </div>
        <p className={styles.trust}>{content.trust}</p>
      </div>
    </section>
  );
}
