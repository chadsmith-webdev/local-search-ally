import styles from "./ReputationHero.module.css";

export default function ReputationHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Build Your Online Reputation</h1>
          <p className={styles.subheading}>
            More reviews. Better ratings. More trust. More calls.
          </p>
          <p className={styles.description}>
            I help contractors build a review system that works. You get a
            strategy for requesting reviews from happy customers, templates that
            make it easy, and monthly monitoring to address concerns quickly.
          </p>
          <a href='#contact' className={styles.cta}>
            Start With a Free Conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
