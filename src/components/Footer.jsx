import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link href='/' className={styles.logo}>
              <svg
                className={styles.logoIcon}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 100 100'
                aria-hidden='true'
              >
                <defs>
                  <linearGradient
                    id='footerNeedleGrad'
                    x1='0'
                    x2='1'
                    gradientUnits='objectBoundingBox'
                  >
                    <stop offset='0' stopColor='white' stopOpacity='0.5' />
                    <stop offset='0.45' stopColor='white' stopOpacity='1' />
                    <stop offset='1' stopColor='white' stopOpacity='0.35' />
                  </linearGradient>
                  <clipPath id='footerBallClip'>
                    <circle cx='50' cy='33' r='20' />
                  </clipPath>
                </defs>
                <polygon
                  points='48,52 52,52 50,93'
                  fill='url(#footerNeedleGrad)'
                />
                <circle cx='50' cy='33' r='20' fill='#7bafd4' />
                <g clipPath='url(#footerBallClip)'>
                  <circle cx='46' cy='28' r='10' fill='white' opacity='0.88' />
                  <circle cx='49.5' cy='30.5' r='10.1' fill='#7bafd4' />
                </g>
              </svg>
              <span className={styles.logoText}>
                Local Search <span>Ally</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              The best contractor in town shouldn't be the hardest to find.
            </p>
            <a href='tel:+14793808626' className={styles.phone}>
              (479) 380-8626
            </a>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4>Services</h4>
            <ul>
              <li>
                <Link href='/services#local-seo'>Local SEO</Link>
              </li>
              <li>
                <Link href='/services#web-design'>Web Design</Link>
              </li>
              <li>
                <Link href='/services#gbp'>GBP Optimization</Link>
              </li>
              <li>
                <Link href='/services#reputation'>Reputation</Link>
              </li>
              <li>
                <Link href='/services/citation-building'>Citation Building</Link>
              </li>
              <li>
                <Link href={process.env.NEXT_PUBLIC_AUDIT_URL}>Free SEO Audit</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.col}>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='/resources'>Resources</Link>
              </li>
              <li>
                <Link href='/portfolio'>Portfolio</Link>
              </li>
              <li>
                <Link href='/service-areas'>Service Areas</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Local Search Ally · Siloam Springs, AR
          </p>
          <nav className={styles.legal} aria-label='Legal'>
            <Link href='/privacy'>Privacy Policy</Link>
            <Link href='/terms'>Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
