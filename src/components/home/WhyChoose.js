"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./why-choose.module.css";

function useInView(ref, options = { threshold: 0.08, rootMargin: "0px 0px -10% 0px" }) {
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
      title: " 🏠 Quality Construction with Modern Standards",
      text:
        "We follow modern construction techniques, use quality-approved materials, and maintain strict on-site supervision. Every residential and commercial project is designed for strength, safety, and long-term durability.",


    },
    {
      title: "🧾 Transparent Dealings & Clear Documentation",
      text:
        "Our clients trust us because we maintain complete transparency in pricing, agreements, and approvals. We ensure clear title verification, proper documentation, and ethical business practices in all our real estate projects in Bihar.",
    },
    {
      title: "⏱️ Timely Project Delivery smoothly",
      text:
        "Our clients trust us because we maintain complete transparency in pricing, agreements, and approvals. We ensure clear title verification, proper documentation, and ethical business practices in all our real estate projects in Bihar.",
    },
    {
      title: "🌱 Strategic Locations with High Growth Potential",
      text:
        "We develop thoughtfully planned premium projects in high-growth zones of Patna and emerging areas of Bihar, making them ideal for homebuyers and real estate investors seeking consistent long-term value appreciation.",
    },
  ];

  return (
    <section ref={wrapRef} className={styles.section}>
      <div className="container">
        <div className="row align-items-start g-4">


          <div className="col-12 col-lg-6">
            <h2 className={`${styles.title} ${show ? styles.reveal : ""}`}>
              Trusted Real Estate & Construction <br />
              Developer in Bihar
            </h2>

            <p className={`${styles.text} ${show ? styles.textIn : ""}`} style={{ transitionDelay: show ? "120ms" : "0ms" }}>
              Anantabhivrddhi Developers Private Limited is a Bihar-based real estate and construction company with a strong understanding of local land laws, construction norms, and regional market demand. Our projects are planned and executed keeping Patna and Bihar’s future growth in mind, with a focus on sustainable development, compliance with all applicable regulations.

<br/>
              We operate primarily in Patna, Danapur, Bihta, Naubatpur, and nearby regions, giving us strong insight into local infrastructure, soil conditions, and development approvals. This expertise enables smooth coordination, accurate site planning, and faster execution of legally compliant projects.
            </p>


          </div>

          <div className="col-12 col-lg-6">
            <div className="row g-4">
              {cards.map((c, idx) => (
                <div key={idx} className="col-12 col-md-6">
                  {/* ✅ stagger via inline delay */}
                  <div
                    className={`${styles.card} ${show ? styles.cardIn : ""}`}
                    style={{ transitionDelay: show ? `${idx * 70}ms` : "0ms" }}
                  >
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
