"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./testimonials.module.css";

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

export default function Testimonials() {
  const wrapRef = useRef(null);
  const show = useInView(wrapRef);

  const data = [
    {
      title: "Transparent and Trustworthy Throughout",
      text:
        "The team at Anantabhivrddhi Developers maintained transparency throughout the project. The construction quality and timely updates gave us confidence from start to finish.",
      name: "Williams",
      city: "PATNA",
      avatar: "/images/home-page/testimonials/williams.png",
    },
    {
      title: "Thoughtful Design and Attention to Detail",
      text:
        "What stood out for us was the attention to detail and proper space planning. The project was handled professionally, and the overall experience was smooth and reassuring.",
      name: "Marry",
      city: "DANAPUR",
      avatar: "/images/home-page/testimonials/marry.png",
    },
    {
      title: "Delivered Exactly as Promised Project",
      text:
        "Anantabhivrddhi Developers delivered exactly what was promised. From planning to execution, the process felt structured, reliable, and well-managed.",
      name: "Geetansh",
      city: "BIHTA",
      avatar: "/images/home-page/testimonials/geetansh.png",
    },
  ];

  return (
    <section ref={wrapRef} className={styles.section}>
      <div className="container">
        {/* Heading */}
        <div className="text-center">
          <h2 className={`${styles.title} ${show ? styles.reveal : ""}`}>
            What Our Clients Says
          </h2>
          <p className={styles.subtitle}>
            Voices that reflect our commitment to quality and trust.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4 mt-4 justify-content-center">
          {data.map((t, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div
                className={`${styles.card} ${show ? styles.cardIn : ""}`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <h3 className={styles.cardTitle}>{t.title}</h3>
                <p className={styles.cardText}>{t.text}</p>

                <div className={styles.userRow}>
                  <div className={styles.avatar}>
                    <Image
                      src={t.avatar}
                      alt={`${t.name} profile photo`}
                      width={46}
                      height={46}
                      className={styles.avatarImg}
                    />
                  </div>

                  <div>
                    <div className={styles.userName}>{t.name}</div>
                    <div className={styles.userCity}>{t.city}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
