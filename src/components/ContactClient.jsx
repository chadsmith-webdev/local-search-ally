"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./ContactClient.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const FORM_STATES = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

export default function ContactClient() {
  const [formState, setFormState] = useState(FORM_STATES.IDLE);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setFormState(FORM_STATES.LOADING);
    setErrorMessage("");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormState(FORM_STATES.SUCCESS);
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(
          body.error ||
            "Something went wrong. Try calling or emailing directly.",
        );
        setFormState(FORM_STATES.ERROR);
      }
    } catch {
      setErrorMessage(
        "Couldn't send the message. Try calling or emailing directly.",
      );
      setFormState(FORM_STATES.ERROR);
    }
  }

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/smithchadlamont/30min";

  return (
    <main className={styles.main}>
      {/* Background grid */}
      <div className={styles.gridBg} aria-hidden='true' />
      <div className={styles.orb} aria-hidden='true' />

      <div className={styles.inner}>
        {/* Header */}
        <motion.div
          className={styles.header}
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.span className={styles.eyebrow} variants={fadeUp}>
            Get in touch
          </motion.span>
          <motion.h1 className={styles.h1} variants={fadeUp}>
            Let&rsquo;s talk.
          </motion.h1>
          <motion.p className={styles.subhead} variants={fadeUp}>
            Thirty minutes. Free. No pitch, no agenda beyond understanding where
            your business stands and whether there&rsquo;s a good fit. If it
            doesn&rsquo;t make sense for you to hire me, I&rsquo;ll tell you
            that too.
          </motion.p>
        </motion.div>

        {/* Two-column: Calendly + Form */}
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
        >
          {/* Left: Book a call */}
          <div className={styles.bookCol}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardEyebrow}>Fastest path</span>
                <h2 className={styles.cardHeading}>
                  Book a free strategy call
                </h2>
                <p className={styles.cardSubhead}>
                  Pick a time that works for you. 30 minutes on Google Meet or
                  phone — your choice.
                </p>
              </div>

              <a
                href={calendlyUrl}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.btnCalendly}
              >
                Book your strategy call →
              </a>

              {/* Direct contact */}
              <div className={styles.direct}>
                <span className={styles.directLabel}>Or reach me directly</span>
                <a href='tel:+14793808626' className={styles.directLink}>
                  <svg
                    viewBox='0 0 20 20'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <path d='M2 4a2 2 0 012-2h1.5a1 1 0 01.94.66l1.1 2.9a1 1 0 01-.23 1.06L6 7.94A14.06 14.06 0 0012.06 14l1.32-1.32a1 1 0 011.06-.23l2.9 1.1A1 1 0 0118 14.5V16a2 2 0 01-2 2C7.16 18 2 12.84 2 6V4z' />
                  </svg>
                  (479) 380-8626
                </a>
                <a
                  href='mailto:chad@localsearchally.com'
                  className={styles.directLink}
                >
                  <svg
                    viewBox='0 0 20 20'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    aria-hidden='true'
                  >
                    <rect x='2' y='4' width='16' height='13' rx='2' />
                    <path d='M2 7l8 5 8-5' />
                  </svg>
                  chad@localsearchally.com
                </a>
              </div>
            </div>

            {/* Not ready? */}
            <div className={styles.auditNudge}>
              <span>Not ready to talk yet?</span>
              <Link
                href={process.env.NEXT_PUBLIC_AUDIT_URL}
                className={styles.auditLink}
              >
                Run the free SEO audit first →
              </Link>
            </div>
          </div>

          {/* Right: Send a message */}
          <div className={styles.formCol}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardEyebrow}>Send a message</span>
                <h2 className={styles.cardHeading}>Leave me your number</h2>
                <p className={styles.cardSubhead}>
                  I&rsquo;ll call you back within one business day.
                </p>
              </div>

              {formState === FORM_STATES.SUCCESS ? (
                <div className={styles.success}>
                  <div className={styles.successIcon} aria-hidden='true'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M20 6L9 17l-5-5' />
                    </svg>
                  </div>
                  <p className={styles.successText}>
                    Got it — I&rsquo;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className={styles.form}
                  noValidate
                >
                  <div className={styles.field}>
                    <label htmlFor='contact-name' className={styles.label}>
                      Your name
                    </label>
                    <input
                      id='contact-name'
                      name='name'
                      type='text'
                      required
                      autoComplete='name'
                      className={styles.input}
                      placeholder='First name is fine'
                      disabled={formState === FORM_STATES.LOADING}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor='contact-phone' className={styles.label}>
                      Best phone number
                    </label>
                    <input
                      id='contact-phone'
                      name='phone'
                      type='tel'
                      required
                      autoComplete='tel'
                      className={styles.input}
                      placeholder='(479) 555-0100'
                      disabled={formState === FORM_STATES.LOADING}
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor='contact-message' className={styles.label}>
                      Anything I should know{" "}
                      <span className={styles.optional}>(optional)</span>
                    </label>
                    <textarea
                      id='contact-message'
                      name='message'
                      rows={4}
                      className={styles.textarea}
                      placeholder="What trade? What city? What's not working?"
                      disabled={formState === FORM_STATES.LOADING}
                    />
                  </div>

                  {formState === FORM_STATES.ERROR && (
                    <p className={styles.errorMsg} role='alert'>
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type='submit'
                    className={styles.btnSubmit}
                    disabled={formState === FORM_STATES.LOADING}
                  >
                    {formState === FORM_STATES.LOADING
                      ? "Sending…"
                      : "Send message"}
                  </button>

                  <p className={styles.formNote}>
                    No pitch. I&rsquo;ll just call to say hi and hear what
                    you&rsquo;re working on.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Hours + Map */}
        <motion.div
          className={styles.infoRow}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          {/* Business hours */}
          <div className={styles.hoursCard}>
            <span className={styles.cardEyebrow}>Business hours</span>
            <h2 className={styles.hoursHeading}>When I&rsquo;m available</h2>
            <ul className={styles.hoursList}>
              {[
                { day: "Monday – Friday", hours: "8:00 am – 6:00 pm" },
                { day: "Saturday", hours: "9:00 am – 12:00 pm" },
                { day: "Sunday", hours: "2:00 pm – 6:00 pm" },
              ].map(({ day, hours }) => (
                <li className={styles.hoursRow} key={day}>
                  <span className={styles.hoursDay}>{day}</span>
                  <span className={styles.hoursDivider} aria-hidden='true' />
                  <span className={styles.hoursTime}>{hours}</span>
                </li>
              ))}
            </ul>
            <p className={styles.hoursNote}>
              Outside these hours? Leave your number and I&rsquo;ll call back
              first thing.
            </p>
          </div>

          {/* Map */}
          <div className={styles.mapWrap}>
            <iframe
              title='Local Search Ally — Siloam Springs, AR'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52287.20!2d-94.5424!3d36.1881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c8f1e3b1b1b1b1%3A0x0!2sSiloam%20Springs%2C%20AR!5e0!3m2!1sen!2sus!4v1'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
