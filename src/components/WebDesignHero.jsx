import styles from "./WebDesignHero.module.css";

export default function WebDesignHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Your Website Should Make{" "}
            <span className={styles.colorSpan}>Phone Calls</span> Ring
          </h1>
          <p className={styles.subheading}>
            Not every website works. Most are pretty but don't convert. I build
            websites that rank on Google AND turn visitors into calls.
          </p>
          <p className={styles.description}>
            Custom design built for contractors. Mobile-first. SEO-ready. Fast.
            Designed to put your phone to work. Every page has one job: get the
            call.
          </p>
          <a href='#contact' className={styles.cta}>
            Start With a Free Conversation →
          </a>
        </div>
      </div>
    </section>
  );
}
