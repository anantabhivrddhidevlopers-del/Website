"use client";

import { useState } from "react";
import styles from "./faq.module.css";

export default function FAQSection() {
  const faqs = [
    {
      q: "What types of projects does Anantabhivrddhi Developers specialize in?",
      a: "We specialize in residential and mixed-use developments, focusing on thoughtful design, structural integrity, and long-term value creation.",
    },
    {
      q: "How does Anantabhivrddhi ensure quality and reliability in its projects?",
      a: "We follow strict quality standards, use trusted materials, and maintain on-site supervision with regular inspections to ensure durable and reliable construction.",
    },
    {
      q: "What makes Anantabhivrddhi Developers a trusted name in construction?",
      a: "Our transparent processes, regulatory compliance, customer-first approach, and consistent delivery standards help us earn trust beyond project handover.",
    },
    {
      q: "How can customers get in touch or learn more about ongoing projects?",
      a: "You can reach us via phone/email or visit our Contact page to request project details, brochures, site visits, and updates on ongoing developments.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h2 className={`text-center ${styles.title}`}>
              Frequently Asked Questions
            </h2>
          </div>

          {/* Bootstrap controls width responsively */}
          <div className="col-12 col-lg-12 col-xl-10">
            <div className="d-grid gap-3">
              {faqs.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`${styles.item} ${isOpen ? styles.open : ""}`}
                  >
                    <button
                      type="button"
                      className={`${styles.questionRow} w-100`}
                      onClick={() => toggle(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.question}>{item.q}</span>
                      <span className={styles.icon}>{isOpen ? "–" : "+"}</span>
                    </button>

                    <div className={styles.answerWrap}>
                      <div className={styles.answer}>{item.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
