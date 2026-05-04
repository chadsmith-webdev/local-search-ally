import styles from "./MapPackMockup.module.css";

const competitors = [
  {
    rank: 1,
    name: "Rogers HVAC Pros",
    rating: 4.9,
    reviews: 127,
    open: true,
    category: "HVAC contractor",
  },
  {
    rank: 2,
    name: "NWA Heating & Air",
    rating: 4.7,
    reviews: 84,
    open: true,
    category: "HVAC contractor",
  },
  {
    rank: 3,
    name: "Benton County HVAC",
    rating: 4.5,
    reviews: 61,
    open: false,
    closeTime: "5 PM",
    category: "HVAC contractor",
  },
];

function StarRating({ rating }) {
  const filled = Math.floor(rating);
  const hasHalf = rating - filled >= 0.4;
  const empty = 5 - filled - (hasHalf ? 1 : 0);
  return (
    <span className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(filled)}
      {hasHalf && <span className={styles.starHalf}>★</span>}
      {"☆".repeat(empty)}
    </span>
  );
}

export default function MapPackMockup() {
  return (
    <div
      className={styles.panel}
      role='img'
      aria-label='Google Map Pack showing 3 competitor HVAC contractors in Rogers AR — your position not found'
    >
      {/* Search bar */}
      <div className={styles.searchBar}>
        <svg
          className={styles.searchIcon}
          width='13'
          height='13'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          aria-hidden='true'
        >
          <circle cx='11' cy='11' r='8' />
          <path d='m21 21-4.35-4.35' />
        </svg>
        <span className={styles.searchQuery}>hvac repair rogers ar</span>
        <span className={styles.searchX} aria-hidden='true'>
          ×
        </span>
      </div>

      {/* Pack header */}
      <div className={styles.packHeader}>
        <span className={styles.packLabel}>Map Pack · Top 3 results</span>
        <span className={styles.packDot} aria-hidden='true' />
      </div>

      {/* Competitor results */}
      <div className={styles.results}>
        {competitors.map((c) => (
          <div key={c.rank} className={styles.result}>
            <div className={styles.rankPin} aria-hidden='true'>
              <span className={styles.rankNum}>{c.rank}</span>
            </div>
            <div className={styles.resultBody}>
              <div className={styles.resultName}>{c.name}</div>
              <div className={styles.ratingRow}>
                <span className={styles.ratingNum}>{c.rating}</span>
                <StarRating rating={c.rating} />
                <span className={styles.reviewCount}>({c.reviews})</span>
              </div>
              <div className={styles.metaRow}>
                <span
                  className={c.open ? styles.statusOpen : styles.statusClosed}
                >
                  {c.open ? "Open" : `Closes ${c.closeTime}`}
                </span>
                <span className={styles.metaDot} aria-hidden='true'>
                  ·
                </span>
                <span className={styles.category}>{c.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Not ranked section */}
      <div className={styles.notRankedHeader}>
        <span>Your position</span>
      </div>

      <div className={styles.notRankedResult}>
        <div className={styles.notRankedPin} aria-hidden='true'>
          <span>?</span>
        </div>
        <div className={styles.resultBody}>
          <div className={styles.notRankedName}>Your Business</div>
          <div className={styles.notFoundBadge}>
            <span className={styles.notFoundDot} aria-hidden='true' />
            Not in top 3
          </div>
          <div className={styles.notRankedSub}>
            Position: not ranking for this search
          </div>
        </div>
      </div>
    </div>
  );
}
