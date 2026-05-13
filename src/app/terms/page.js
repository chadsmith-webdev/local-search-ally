import Link from "next/link";
import styles from "../legal.module.css";

export const metadata = {
  title: "Terms of Service | Local Search Ally",
  description:
    "Terms governing use of localsearchally.com and any services provided by Local Search Ally, operated by Chad Smith of Siloam Springs, AR.",
  openGraph: {
    title: "Terms of Service | Local Search Ally",
    description:
      "Terms governing use of localsearchally.com and Local Search Ally services.",
    url: "https://www.localsearchally.com/terms",
  },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Legal · Terms</span>
          <h1 className={styles.title}>Terms of Service</h1>
          <div className={styles.meta}>
            <span className={styles.metaItem}>Effective Jan 16, 2024</span>
            <span className={styles.metaDot} aria-hidden='true' />
            <span className={styles.metaItem}>Updated Apr 3, 2026</span>
          </div>
          <p className={styles.intro}>
            These Terms of Service govern your use of localsearchally.com and
            any services provided by Local Search Ally, operated by Chad Smith
            of Siloam Springs, AR. By using this site, you agree to these terms.
          </p>
        </header>

        <div className={styles.body}>
          <section className={styles.section} id='free-audit'>
            <span className={styles.sectionLabel}>01</span>
            <h2 className={styles.h2}>The free audit tool</h2>
            <p className={styles.p}>
              The free audit tool provides an automated analysis based on
              publicly available data. Results are intended for general
              assessment and do not constitute professional or legal advice.
            </p>
            <p className={styles.p}>
              You may use the tool to assess your own business. You may not use
              it to scrape data at scale or circumvent rate limits (5 audits per
              IP per 24 hours).
            </p>
          </section>

          <hr className={styles.divider} />

          <section className={styles.section} id='paid-services'>
            <span className={styles.sectionLabel}>02</span>
            <h2 className={styles.h2}>Paid services and no contracts</h2>
            <p className={styles.p}>
              All ongoing services are provided on a month-to-month basis. No
              long-term contract is required. Either party may terminate with
              written notice at any time.
            </p>
            <p className={styles.p}>
              I do not guarantee specific ranking positions or call volumes, as
              these depend on third-party algorithms and market factors.
            </p>
          </section>

          <hr className={styles.divider} />

          <section className={styles.section} id='liability'>
            <span className={styles.sectionLabel}>03</span>
            <h2 className={styles.h2}>Liability and governing law</h2>
            <p className={styles.p}>
              Local Search Ally&apos;s liability is limited to the total amount
              paid by you in the three months preceding any claim. These terms
              are governed by the laws of the State of Arkansas.
            </p>
          </section>

          <aside className={styles.contact}>
            <span className={styles.eyebrow}>Contact</span>
            <p className={styles.contactName}>Chad Smith</p>
            <p className={styles.contactMeta}>
              Local Search Ally · Siloam Springs, AR
            </p>
            <a
              className={styles.contactLink}
              href='mailto:chad@localsearchally.com'
            >
              chad@localsearchally.com
            </a>
          </aside>

          <nav className={styles.footerNav}>
            <Link href='/'>← Back to home</Link>
            <Link href='/privacy'>Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
