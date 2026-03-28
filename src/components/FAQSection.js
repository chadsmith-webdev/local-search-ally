"use client";
import { useState } from "react";
import { faqs } from "@/lib/faqs";

export default function FAQSection({ limit = null }) {
  const [open, setOpen] = useState(null);
  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <>
      <style>{`
        .faq-item {
          border-bottom: 1px solid var(--border);
        }
        .faq-item:first-child { border-top: 1px solid var(--border); }
        .faq-trigger {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 1.2rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          text-align: left;
          transition: background-color 0.2s ease;
        }
        .faq-trigger:focus-visible {
          outline: 2px solid var(--carolina);
          outline-offset: 4px;
          border-radius: 6px;
        }
        .faq-question {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text);
          margin: 0;
          line-height: 1.4;
          transition: color 0.2s;
        }
        .faq-trigger:hover .faq-question { color: var(--carolina); }
        .faq-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--carolina);
          font-size: 1.1rem;
          line-height: 1;
          transition: transform 0.3s, border-color 0.2s, background-color 0.2s;
        }
        .faq-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s ease, opacity 0.25s ease;
          opacity: 0;
        }
        .faq-content.open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .faq-inner {
          overflow: hidden;
        }
        .faq-answer {
          color: var(--muted);
          line-height: 1.8;
          font-size: 0.95rem;
          padding: 0.15rem 0 1.35rem;
          max-width: 720px;
          margin: 0;
        }
        .faq-category {
          font-size: 0.68rem;
          font-weight: bold;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--carolina);
          margin: 0 0 0.35rem;
          opacity: 0.92;
        }
        @media (max-width: 640px) {
          .faq-trigger {
            padding: 1rem 0;
          }
          .faq-question {
            font-size: 0.95rem;
          }
          .faq-answer {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div>
        {displayFaqs.map((faq, i) => (
          <div key={i} className='faq-item'>
            <button
              className='faq-trigger'
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
            >
              <div>
                <p className='faq-category'>{faq.category}</p>
                <p className='faq-question'>{faq.question}</p>
              </div>
              <div
                className='faq-icon'
                style={{
                  borderColor: open === i ? "var(--carolina)" : "var(--duke)",
                  transform: open === i ? "rotate(45deg)" : "none",
                  backgroundColor:
                    open === i ? "rgba(123,175,212,0.14)" : "transparent",
                }}
              >
                +
              </div>
            </button>
            <div
              id={`faq-answer-${i}`}
              className={`faq-content ${open === i ? "open" : ""}`}
            >
              <div className='faq-inner'>
                <p className='faq-answer'>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
