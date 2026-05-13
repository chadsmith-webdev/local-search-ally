import Link from "next/link";
import styles from "../legal.module.css";

export const metadata = {
  title: "Privacy Policy | Local Search Ally",
  description:
    "How Local Search Ally collects, uses, and stores your information when you use this website and the free SEO audit tool.",
  openGraph: {
    title: "Privacy Policy | Local Search Ally",
    description:
      "How Local Search Ally collects, uses, and stores your information.",
    url: "https://www.localsearchally.com/privacy",
  },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Legal · Privacy</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className={styles.meta}>
            <span className={styles.metaItem}>Effective Jan 16, 2024</span>
            <span className={styles.metaDot} aria-hidden='true' />
            <span className={styles.metaItem}>Updated Apr 3, 2026</span>
          </div>
          <p className={styles.intro}>
            This policy explains what information Local Search Ally collects
            when you use this website, how it&apos;s used, and how it&apos;s
            stored. This site is operated by Chad Smith, based in Siloam
            Springs, AR. Questions?{" "}
            <a href='mailto:chad@localsearchally.com'>
              chad@localsearchally.com
            </a>
          </p>
        </header>

        <div className={styles.body}>
          <section className={styles.section} id='what-we-collect'>
            <span className={styles.sectionLabel}>01</span>
            <h2 className={styles.h2}>What this site collects and why</h2>
            <h3 className={styles.h3}>The free audit tool</h3>
            <p className={styles.p}>
              When you run a free local SEO audit, you provide: Business name,
              Website URL, Primary trade, and Service city.
            </p>
            <p className={styles.p}>
              This information is used to run the audit and return your scored
              results. It&apos;s stored in a database so your results can be
              accessed again via a shareable link.
            </p>
            <p className={styles.p}>
              No account is required. You don&apos;t need to provide your name
              or any personal contact information to see your audit results.
            </p>
          </section>

          <hr className={styles.divider} />

          <section className={styles.section} id='third-party-services'>
            <span className={styles.sectionLabel}>02</span>
            <h2 className={styles.h2}>Third-party services</h2>
            <p className={styles.p}>
              I use Google Analytics 4 to understand site traffic, Supabase for
              storing audit results, and Resend for sending optional PDF
              reports. I use Upstash for rate limiting to prevent abuse of the
              free tool, and the Anthropic Claude API to generate the diagnostic
              reports.
            </p>
          </section>

          <hr className={styles.divider} />

          <section className={styles.section} id='your-rights'>
            <span className={styles.sectionLabel}>03</span>
            <h2 className={styles.h2}>Data retention and your rights</h2>
            <p className={styles.p}>
              Audit results are stored indefinitely to support shareable result
              URLs. You have the right to request deletion of your data at any
              time by emailing{" "}
              <a href='mailto:chad@localsearchally.com'>
                chad@localsearchally.com
              </a>
              .
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
            <Link href='/terms'>Terms of Service</Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
