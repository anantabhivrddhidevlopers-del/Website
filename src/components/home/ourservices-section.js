"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./our-services-section.module.css";

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

/**
 * Props:
 * - title: string
 * - subTitle: string
 * - buttonText: string
 * - buttonHref: string
 * - cards: Array<{
 *    title: string,
 *    desc: string,
 *    img: string,
 *    tags: Array<{ icon: string, text: string }>
 * }>
 */
export default function OurServicesSection({
  title = "Our Services",
  subTitle =
    "A curated selection of developments that exemplify our commitment to quality, precision, and lasting value.",
  buttonText = "Explore More",
  buttonHref = "/our-services",
  cards = [
    {
      title: "Residential Real Estate & Development",
      desc:
        "Thoughtfully designed homes offering spacious living, premium construction quality, and a peaceful residential environment for modern families.",
      img: "/images/home-page/our-services/real-estate.png",
      tags: [
        { icon: "/images/icons/featured-icons/", text: " 🏠 Modern Homes" },
        { icon: "/images/icons/featured-icons/", text: "🧱 Premium Materials" },
      ],
    },
    {
      title: "Project Planning, Execution & Management",
      desc:
        "Comprehensive project solutions ensuring efficient planning, structural reliability, timely execution,  concept to completion.",
      img: "/images/home-page/our-services/project-planning.png",
      tags: [
        { icon: "/images/icons/featured-icons/", text: "📐 Planning & Design" },
        { icon: "/images/icons/featured-icons/bathg", text: "📊 Cost & Time Control" },
      ],
    },
    {
      title: "Land Development & Strategic Plotting",
      desc:
        "Well-planned residential layouts combining strong infrastructure, organized plotting, for comfortable and sustainable living.",
      img: "/images/home-page/our-services/land-development.png",
      tags: [
        { icon: "/images/icons/featured-icons/be", text: " 🛣️ Internal Roads" },
        { icon: "/images/icons/featured-icons/bah.", text: "🏞️ Green Spaces" },
      ],
    },
  ],
}) {
  const wrapRef = useRef(null);
  const isVisible = useInView(wrapRef);

  return (
    <section ref={wrapRef} className={styles.section}>
      <div className="container">
        {/* Header row */}
        <div className={`row align-items-center ${styles.headerRow}`}>
          <div className="col-12 col-lg-8">
            <h2 className={`${styles.title} ${isVisible ? styles.reveal : ""}`}>
              {title}
            </h2>
            <p className={styles.subTitle}>{subTitle}</p>
          </div>

          <div className="col-12 col-lg-4 d-flex justify-content-lg-end mt-3 mt-lg-0">
            <Link href={buttonHref} className={`btn ${styles.exploreBtn}`}>
              {buttonText}
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
                    alt={`${c.title} featured`}
                    fill
                    className={styles.cardImg}
                    sizes="(max-width: 768px) 100vw, 360px"
                    priority={idx === 0}
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <p className={styles.cardDesc}>{c.desc}</p>

                  {!!c.tags?.length && (
                    <div className={styles.tagRow}>
                      {c.tags.map((t, i) => (
                        <span key={i} className={styles.tag}>
                          {/* NOTE: your icons look blank in your data; keeping as-is */}
                          <Image src={t.icon} alt="" width={14} height={14} />
                          <span>{t.text}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
