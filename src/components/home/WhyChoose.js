"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./why-choose.module.css";

function useInView(ref, options = { threshold: 0.2 }) {
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true);
        obs.disconnect();
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options]);

  return seen;
}

export default function WhyChoose() {
  const wrapRef = useRef(null);
  const show = useInView(wrapRef);

  const cards = [
    {
      title: "Quality-Driven Construction",
      text:
        "We follow strict quality standards, using trusted materials and proven construction practices to ensure strength, safety, and longevity in every project.",
    },
    {
      title: "Transparent & Ethical Practices",
      text:
        "Clear documentation, honest communication, and accountable processes ensure complete transparency at every stage of development.",
    },
    {
      title: "Thoughtful Space Planning",
      text:
        "Our designs emphasize optimal space utilization, functionality, and comfort—creating environments that feel open, practical, and future-ready.",
    },
    {
      title: "Reliable Execution & Timely Delivery",
      text:
        "With structured planning and on-site supervision, we ensure projects are executed efficiently and delivered with consistency and reliability.",
    },
  ];

  return (
    <section ref={wrapRef} className={styles.section}>
      <div className="container">
        <div className="row align-items-start g-4">
          {/* LEFT */}
          <div className="col-12 col-lg-6">
            <h2 className={`${styles.title} ${show ? styles.reveal : ""}`}>
              Why Choose <br />
              Anantabhivrddhi
            </h2>

            <p className={styles.text}>
              Anantabhivrddhi Developers Private Limited is built on a foundation of trust,
              quality, and long-term value creation. Based in Patna, Bihar, the company follows
              a disciplined and transparent approach to construction, ensuring every project
              meets high standards of structural integrity, regulatory compliance, and functional design.
            </p>

            <p className={styles.text}>
              With a strong focus on thoughtful planning and responsible execution, Anantabhivrddhi
              delivers developments that balance durability, comfort, and efficiency. Each project is
              guided by clear communication, professional oversight, and a commitment to excellence—
              earning confidence not just at handover, but for years to come.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="col-12 col-lg-6">
            <div className="row g-4">
              {cards.map((c, idx) => (
                <div key={idx} className="col-12 col-md-6">
                  <div className={`${styles.card} ${show ? styles.cardIn : ""}`}>
                    <h3 className={styles.cardTitle}>{c.title}</h3>
                    <p className={styles.cardText}>{c.text}</p>
                    <div className={styles.cardLine} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
