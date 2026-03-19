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
          border-bottom: 1px solid var(--duke);
        }
        .faq-item:first-child { border-top: 1px solid var(--duke); }
        .faq-trigger {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 1.5rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          text-align: left;
        }
        .faq-question {
          font-family: var(--font-display, serif);
          font-size: 1rem;
          font-weight: 700;
          color: var(--text);
          margin: 0;
          line-height: 1.4;
          transition: color 0.2s;
        }
        .faq-trigger:hover .faq-question { color: var(--carolina); }
        .faq-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid var(--duke);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--carolina);
          font-size: 1rem;
          transition: transform 0.3s, border-color 0.2s;
        }
        .faq-content {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        }
        .faq-answer {
          color: var(--muted);
          line-height: 1.9;
          font-size: 0.95rem;
          padding-bottom: 1.5rem;
          max-width: 720px;
        }
        .faq-category {
          font-size: 0.7rem;
          font-weight: bold;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.3rem;
        }
      `}</style>

      <div>
        {displayFaqs.map((faq, i) => (
          <div key={i} className="faq-item">
            <button
              className="faq-trigger"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div>
                <p className="faq-category">{faq.category}</p>
                <p className="faq-question">{faq.question}</p>
              </div>
              <div className="faq-icon" style={{
                borderColor: open === i ? "var(--carolina)" : "var(--duke)",
                transform: open === i ? "rotate(45deg)" : "none",
              }}>
                +
              </div>
            </button>
            <div className="faq-content" style={{
              maxHeight: open === i ? "400px" : "0px",
              opacity: open === i ? 1 : 0,
            }}>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}