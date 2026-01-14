"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import styles from "./aboutus.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function SplitWords({ text, className, wordClassName }) {
  const words = useMemo(() => text.split(" "), [text]);

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

export default function AboutUs() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: sectionRef.current,

            // ✅ Start earlier so it runs as soon as section appears
            start: "top 92%",
            end: "bottom 20%",

            // ✅ play once feels faster (remove reverse delay feeling)
            toggleActions: "play none none none",

            // ✅ helps on refresh / layout shift
            invalidateOnRefresh: true,
          },
        });

        // ===== Title (faster word by word) =====
        tl.fromTo(
          `.${styles.title} .${styles.word}`,
          { opacity: 0, y: 24, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.45,     // ✅ faster
            stagger: 0.03,      // ✅ faster
          }
        );

        // ===== Paragraph 1 (faster) =====
        tl.fromTo(
          `.${styles.p1} .${styles.word}`,
          { opacity: 0, x: -14 },
          {
            opacity: 1,
            x: 0,
            duration: 0.35,     // ✅ faster
            stagger: 0.006,     // ✅ faster
            ease: "power2.out",
          },
          "-=0.18"
        );

        // ===== Paragraph 2 (faster) =====
        tl.fromTo(
          `.${styles.p2}`,
          { opacity: 0, y: 12, rotateX: 6, transformPerspective: 800 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.35 },
          "-=0.12"
        );

        // ===== Paragraph 3 (faster) =====
        tl.fromTo(
          `.${styles.p3}`,
          { opacity: 0, clipPath: "inset(0 0 80% 0)" },
          { opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 0.45 },
          "-=0.12"
        );

        // ===== Images (faster) =====
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

        // ===== Subtle parallax on scroll (keep same) =====
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
                text="About Us"
                wordClassName={styles.word}
                className={styles.splitWrap}
              />
            </h2>

            <p className={`${styles.text} ${styles.p1}`}>
              <SplitWords
                text="Anantabhivrddhi Developers Private Limited stands as a purpose-driven construction and development company based in Patna, Bihar, built on the principles of trust, quality, and long-term value creation. With a disciplined approach to planning and execution, the company is committed to delivering developments that reflect reliability, precision, and thoughtful design."
                wordClassName={styles.word}
                className={styles.splitWrap}
              />
            </p>

            <p className={`${styles.text} ${styles.p2}`}>
             ANANTABHIVRDDHI DEVLOPERS PRIVATE LIMITED is incorporated under the Companies Act, 2013 and operates as a diversified real estate development and infrastructure support company. In addition to real estate and land development activities, the company is actively engaged in the supply of machinery and equipment used in construction projects, mining operations, and agricultural farming.
            </p>

            <p className={`${styles.text} ${styles.p3}`}>
           Our business philosophy is built on ethical practices, statutory compliance, and long-term value creation. By combining development expertise with dependable equipment supply services, we support projects from planning to execution while maintaining high standards of quality and accountability.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <div className={styles.imageWrap}>
              <div className={styles.imageTop}>
                <Image
                  src="/images/about-page/community-lifestyle.png"
                  alt="Residents enjoying community lifestyle at Anantabhivrddhi development"
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 260px"
                  priority
                />
              </div>

              <div className={styles.imageBottom}>
                <Image
                  src="/images/about-page/property-lifestyle.png"
                  alt="Modern residential property with luxury amenities by Anantabhivrddhi Developers"
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
