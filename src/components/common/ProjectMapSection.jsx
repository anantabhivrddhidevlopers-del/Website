"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./project-map-section.module.css";

gsap.registerPlugin(ScrollTrigger);

const CITIES = [
  "PATNA",
  "DANAPUR",
  "BIHTA",
  "PHULWARI SHARIF",
  "NEORA",
  "KHAGAUL",
  "ARA",
  "BHOJPUR",
  "NALANDA",
  "GAYA",
  "ENTIRE BIHAR",
];

export default function ProjectMapSection() {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);
  const mapRef = useRef(null);

  // ✅ Your Google Maps link
  const mapsLink = "https://maps.app.goo.gl/CzwC8ABM3xAFiN678?g_st=aw";

  const embedSrc =
    "https://www.google.com/maps?q=Anantabhivrddhi%20Developers%20Private%20Limited&output=embed";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { x: -24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: wrapRef.current, start: "top 72%" },
        }
      );

      gsap.fromTo(
        mapRef.current,
        { x: 24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: wrapRef.current, start: "top 72%" },
        }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrapRef} className={styles.mapSection}>
      {/* ✅ Continuous marquee (no gaps) */}
      <div className={styles.mapMarquee}>
        <div className={styles.mapMarqueeInner}>
          <div className={styles.mapMarqueeTrack}>
            {CITIES.map((c, i) => (
              <span key={`a-${i}`} className={styles.cityItem}>
                {c}
              </span>
            ))}
          </div>

          {/* duplicate for seamless loop */}
          <div className={styles.mapMarqueeTrack} aria-hidden="true">
            {CITIES.map((c, i) => (
              <span key={`b-${i}`} className={styles.cityItem}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.mapGrid}>
          {/* LEFT CARD */}
          <motion.div
            ref={cardRef}
            className={styles.mapInfoCard}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className={styles.mapBadge}>Visit our site</div>

            <h3 className={styles.mapCardTitle}>Anantabhivrddhi Developers</h3>

            <p className={styles.mapCardText}>
              Add your exact address here (or landmark). You can also mention
              nearby highway, city, or major landmark.
            </p>

            <div className={styles.mapActions}>
              <a
                href={mapsLink}
                target="_blank"
                rel="noreferrer"
                className={styles.mapBtnPrimary}
              >
                Get Directions
              </a>

              <a href="tel:+918521962739" className={styles.mapBtnGhost}>
                Call Now
              </a>
            </div>
          </motion.div>

          {/* RIGHT MAP */}
          <motion.div
            ref={mapRef}
            className={styles.mapFrame}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          >
            <iframe
              title="Project Map"
              src={embedSrc}
              className={styles.mapIframe}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
