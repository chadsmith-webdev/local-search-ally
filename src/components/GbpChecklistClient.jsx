"use client";

import { useState } from "react";
import styles from "./GbpChecklistClient.module.css";

const LogoSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 100 100'
    width={32}
    height={32}
    aria-hidden='true'
  >
    <defs>
      <linearGradient id='ng' x1='0' x2='1' gradientUnits='objectBoundingBox'>
        <stop offset='0' stopColor='white' stopOpacity='0.5' />
        <stop offset='0.45' stopColor='white' stopOpacity='1' />
        <stop offset='1' stopColor='white' stopOpacity='0.35' />
      </linearGradient>
      <clipPath id='bc'>
        <circle cx='50' cy='33' r='20' />
      </clipPath>
    </defs>
    <polygon points='48,52 52,52 50,93' fill='url(#ng)' />
    <circle cx='50' cy='33' r='20' fill='#7bafd4' />
    <g clipPath='url(#bc)'>
      <circle cx='46' cy='28' r='10' fill='white' opacity='0.88' />
      <circle cx='49.5' cy='30.5' r='10.1' fill='#7bafd4' />
    </g>
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='none'
    className={styles.checkIcon}
    aria-hidden='true'
  >
    <circle cx='10' cy='10' r='9' stroke='#7bafd4' strokeWidth='1.5' />
    <path
      d='M6.5 10.5l2.5 2.5 4.5-5'
      stroke='#7bafd4'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const BULLETS = [
  "44 items across 7 sections — covers every part of your profile",
  "Includes the suspension survival checklist most contractors skip",
  "Plain language, no SEO jargon",
];

export default function GbpChecklistClient() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: firstName.trim(), email: email.trim() }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMsg(
          body.error ||
            "Something went wrong. Try again or email chad@localsearchally.com.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        "Something went wrong. Try again or email chad@localsearchally.com.",
      );
      setStatus("error");
    }
  }

  return (
    <div data-layout='landing' className={styles.page}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo} aria-label='Local Search Ally'>
          <LogoSvg />
          <span className={styles.logoText}>
            <span style={{ color: "var(--text)" }}>Local Search</span>
            <span style={{ color: "var(--carolina)" }}> Ally</span>
          </span>
        </div>

        {/* Eyebrow */}
        <p className={`${styles.eyebrow} text-brand`}>
          Free Download &middot; GBP Field Guide
        </p>

        {/* Headline */}
        <h1 className={`${styles.headline} text-text`}>
          Is Your Google Business Profile
          <br />
          Actually Bringing In Calls?
        </h1>

        {/* Subheadline */}
        <p className={`${styles.sub} text-text-muted`}>
          Most home service contractors have 4&ndash;6 gaps in their GBP they
          don&rsquo;t know about. This checklist finds them in 20 minutes.
        </p>

        {/* Bullets */}
        <ul className={styles.bullets} aria-label="What's inside">
          {BULLETS.map((text) => (
            <li key={text} className={styles.bullet}>
              <CheckIcon />
              <span className='text-text'>{text}</span>
            </li>
          ))}
        </ul>

        {/* Form card */}
        <div className={`${styles.card} bg-surface`}>
          {status === "success" ? (
            <div className={styles.thankYou}>
              <p className={`${styles.thankYouHeading} text-text`}>
                You&rsquo;re in. Check your inbox &mdash; the checklist is on its
                way.
              </p>
              <p className={`${styles.thankYouSub} text-text-muted`}>
                While you wait: make sure{" "}
                <strong style={{ color: "var(--text)" }}>
                  chad@localsearchally.com
                </strong>{" "}
                is in your contacts so it doesn&rsquo;t land in spam.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.fieldGroup}>
                <div className={styles.field}>
                  <label htmlFor='firstName' className={`${styles.label} text-text-muted`}>
                    First name
                  </label>
                  <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    required
                    autoComplete='given-name'
                    placeholder='Your first name'
                    className={styles.input}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor='email' className={`${styles.label} text-text-muted`}>
                    Email address
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    autoComplete='email'
                    placeholder='you@yourcompany.com'
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {status === "error" && errorMsg && (
                <p className={`${styles.errorMsg} text-status-error`} role='alert'>
                  {errorMsg}
                </p>
              )}

              <button
                type='submit'
                disabled={status === "loading"}
                className={styles.submitBtn}
              >
                {status === "loading" ? "Sending…" : "Send Me the Checklist →"}
              </button>

              <p className={`${styles.trust} text-text-muted`}>
                No spam. Just the checklist. Unsubscribe any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
