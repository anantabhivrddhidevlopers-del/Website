"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./featured-properties.module.css";

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

export default function FeaturedProperties() {
  const wrapRef = useRef(null);
  const isVisible = useInView(wrapRef);

  // Replace image/icon paths with your real ones
  const cards = [
    {
      title: "Seaside Serenity Villa",
      desc:
        "A thoughtfully designed villa offering spacious living, premium construction quality, and a peaceful residential environment.",
      img: "/images/home-page/featured/villa.png",
      tags: [
        { icon: "/images/icons/featured-icons/bed.png", text: "4-Bedroom" },
        { icon: "/images/icons/featured-icons/bath.png", text: "3-Bathroom" },
        { icon: "/images/icons/featured-icons/home.png", text: "Villa" },
      ],
    },
    {
      title: "Seaside Serenity Villa",
      desc:
        "A modern apartment complex combining efficient planning, structural reliability, and comfortable urban living.",
      img: "/images/home-page/featured/building.png",
      tags: [
        { icon: "/images/icons/featured-icons/bed.png", text: "4-Bedroom" },
        { icon: "/images/icons/featured-icons/bath.png", text: "3-Bathroom" },
        { icon: "/images/icons/featured-icons/home.png", text: "Villa" },
      ],
    },
    {
      title: "Seaside Serenity Villa",
      desc:
        "A residential development that combines structural quality with comfort-focused facilities for modern living.",
      img: "/images/home-page/featured/skycrapper.png",
      tags: [
        { icon: "/images/icons/featured-icons/bed.png", text: "4-Bedroom" },
        { icon: "/images/icons/featured-icons/bath.png", text: "3-Bathroom" },
        { icon: "/images/icons/featured-icons/home.png", text: "Villa" },
      ],
    },
  ];

  return (
    <section ref={wrapRef} className={styles.section}>
      <div className="container">
        {/* Header row */}
        <div className={`row align-items-center ${styles.headerRow}`}>
          <div className="col-12 col-lg-8">
            <h2 className={`${styles.title} ${isVisible ? styles.reveal : ""}`}>
              Featured Properties
            </h2>
            <p className={styles.subTitle}>
              A curated selection of developments that exemplify our commitment to quality,
              precision, and lasting value.
            </p>
          </div>

          <div className="col-12 col-lg-4 d-flex justify-content-lg-end mt-3 mt-lg-0">
            <Link href="/projects" className={`btn ${styles.exploreBtn}`}>
              Explore More
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4 mt-2">
          {cards.map((c, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <article className={`${styles.card} ${isVisible ? styles.cardIn : ""}`}>
                <div className={styles.imageBox}>
                  <Image
                    src={c.img}
                    alt={`${c.title} featured property`}
                    fill
                    className={styles.cardImg}
                    sizes="(max-width: 768px) 100vw, 360px"
                    priority={idx === 0}
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <p className={styles.cardDesc}>{c.desc}</p>

                  <div className={styles.tagRow}>
                    {c.tags.map((t, i) => (
                      <span key={i} className={styles.tag}>
                        <Image src={t.icon} alt="" width={14} height={14} />
                        <span>{t.text}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
