"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import styles from "./aboutus.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function SplitWords({ text, className, wordClassName }) {
  const words = useMemo(() => (text || "").split(" "), [text]);

  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className={wordClassName}>
          {w}
          {i !== words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}

export default function AboutUsSection({
  // ✅ defaults = your current data (so your page works even without passing props)
  title = "About Us",
  p1 =
    "Anantabhivrddhi Developers Private Limited stands as a purpose-driven construction and development company based in Patna, Bihar, built on the principles of trust, quality, and long-term value creation. With a disciplined approach to planning and execution, the company is committed to delivering developments that reflect reliability, precision, and thoughtful design.",
  p2 =
    "ANANTABHIVRDDHI DEVLOPERS PRIVATE LIMITED is incorporated under the Companies Act, 2013 and operates as a diversified real estate development and infrastructure support company. In addition to real estate and land development activities, the company is actively engaged in the supply of machinery and equipment used in construction projects, mining operations, and agricultural farming.",
  p3 =
    "Our business philosophy is built on ethical practices, statutory compliance, and long-term value creation. By combining development expertise with dependable equipment supply services, we support projects from planning to execution while maintaining high standards of quality and accountability.",

  // ✅ images as props
  topImageSrc = "/images/about-page/mining.png",
  topImageAlt = "Residents enjoying community lifestyle at Anantabhivrddhi development",
  topImageWidth = 280,
  topImageHeight = 351,
  topImagePriority = true,

  bottomImageSrc = "/images/about-page/grass.png",
  bottomImageAlt =
    "Modern residential property with luxury amenities by Anantabhivrddhi Developers",
  bottomImageWidth = 430,
  bottomImageHeight = 435,
}) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 92%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });

        // ===== Title =====
        tl.fromTo(
          `.${styles.title} .${styles.word}`,
          { opacity: 0, y: 24, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.45,
            stagger: 0.03,
          }
        );

        // ===== Paragraph 1 =====
        tl.fromTo(
          `.${styles.p1} .${styles.word}`,
          { opacity: 0, x: -14 },
          {
            opacity: 1,
            x: 0,
            duration: 0.35,
            stagger: 0.006,
            ease: "power2.out",
          },
          "-=0.18"
        );

        // ===== Paragraph 2 =====
        tl.fromTo(
          `.${styles.p2}`,
          { opacity: 0, y: 12, rotateX: 6, transformPerspective: 800 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.35 },
          "-=0.12"
        );

        // ===== Paragraph 3 =====
        tl.fromTo(
          `.${styles.p3}`,
          { opacity: 0, clipPath: "inset(0 0 80% 0)" },
          { opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 0.45 },
          "-=0.12"
        );

        // ===== Images =====
        tl.fromTo(
          `.${styles.imageTop}`,
          { opacity: 0, y: 26, scale: 0.95, rotate: -1.5 },
          { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 0.55 },
          "-=0.28"
        );

        tl.fromTo(
          `.${styles.imageBottom}`,
          { opacity: 0, y: 34, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 },
          "-=0.35"
        );

        // ===== Parallax =====
        gsap.to(`.${styles.imageTop}`, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        gsap.to(`.${styles.imageBottom}`, {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className={styles.aboutSection}>
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-6">
            <h2 className={styles.title}>
              <SplitWords
                text={title}
                wordClassName={styles.word}
                className={styles.splitWrap}
              />
            </h2>

            <p className={`${styles.text} ${styles.p1}`}>
              <SplitWords
                text={p1}
                wordClassName={styles.word}
                className={styles.splitWrap}
              />
            </p>

            <p className={`${styles.text} ${styles.p2}`}>{p2}</p>

            <p className={`${styles.text} ${styles.p3}`}>{p3}</p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <div className={styles.imageWrap}>
              {/* Bottom first (base layer) */}
              <div className={styles.imageBottom}>
                <Image
                  src={bottomImageSrc}
                  alt={bottomImageAlt}
                  width={bottomImageWidth}
                  height={bottomImageHeight}
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 430px"
                />
              </div>

              {/* Top second (overlap layer) */}
              <div className={styles.imageTop}>
                <Image
                  src={topImageSrc}
                  alt={topImageAlt}
                  width={topImageWidth}
                  height={topImageHeight}
                  className={styles.image}
                  sizes="(max-width: 768px) 60vw, 280px"
                  priority={!!topImagePriority}
                />
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
}
