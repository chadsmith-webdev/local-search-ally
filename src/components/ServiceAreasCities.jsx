import Link from "next/link";
import styles from "./ServiceAreasCities.module.css";

export default function ServiceAreasCities({ content }) {
  return (
    <section className='section'>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 className={styles.h2}>{content.h2}</h2>
          <p className={styles.body}>{content.body}</p>
        </div>

        <div className={styles.grid}>
          {content.cards.map((card) => (
            <article key={card.city} className={styles.card}>
              <div className={styles.cardTop}>
                <div>
                  <h3 className={styles.city}>{card.city}</h3>
                  <p className={styles.county}>{card.county}</p>
                </div>
                {card.badge ? (
                  <span className={styles.badge}>{card.badge}</span>
                ) : null}
              </div>

              <p className={styles.cardBody}>{card.body}</p>

              <div className={styles.tags}>
                {card.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footerNoteRow}>
          <p className={styles.footerNote}>{content.footerNote}</p>
          <Link href='/contact' className={styles.footerLink}>
            Let's talk
          </Link>
        </div>
      </div>
    </section>
  );
}
