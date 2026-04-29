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
            <div className={styles.social} aria-label='Social profiles'>
              {/* LinkedIn */}
              <a
                href='https://www.linkedin.com/in/chadsmith_localsearchallly'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='LinkedIn'
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href='https://www.facebook.com/localsearchally'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='Facebook'
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href='https://www.youtube.com/@chadsmith_localsearchally'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.socialLink}
                aria-label='YouTube'
              >
                <svg
                  width='18'
                  height='16'
                  viewBox='0 0 24 17'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M23.495 2.205a3.02 3.02 0 0 0-2.122-2.137C19.505 0 12 0 12 0S4.495 0 2.627.068a3.02 3.02 0 0 0-2.122 2.137C0 4.073 0 8 0 8s0 3.927.505 5.795a3.02 3.02 0 0 0 2.122 2.137C4.495 17 12 17 12 17s7.505 0 9.373-.068a3.02 3.02 0 0 0 2.122-2.137C24 12.927 24 9 24 9s0-3.927-.505-5.795zM9.545 12.091V4.909L15.818 8.5l-6.273 3.591z' />
                </svg>
              </a>
            </div>
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
                <Link href='/services/citation-building'>
                  Citation Building
                </Link>
              </li>
              <li>
                <Link href={process.env.NEXT_PUBLIC_AUDIT_URL}>
                  Free SEO Audit
                </Link>
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
