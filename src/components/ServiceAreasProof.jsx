import styles from "./ServiceAreasProof.module.css";

export default function ServiceAreasProof({ problem, trades }) {
  return (
    <section className='section'>
      <div className={`container ${styles.inner}`}>
        <div className={styles.problemBlock}>
          <div className={styles.statCard}>
            <p className={styles.stat}>{problem.stat}</p>
            <p className={styles.statBody}>{problem.statBody}</p>
          </div>

          <div className={styles.copy}>
            <p className={styles.eyebrow}>{problem.eyebrow}</p>
            <h2 className={styles.h2}>{problem.h2}</h2>
            {problem.body.map((paragraph) => (
              <p key={paragraph} className={styles.body}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.tradesBlock}>
          <p className={styles.eyebrow}>{trades.eyebrow}</p>
          <h2 className={styles.h2}>{trades.h2}</h2>
          <p className={styles.body}>{trades.body}</p>
          <div className={styles.tradeList}>
            {trades.items.map((item) => (
              <span key={item} className={styles.tradeItem}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
