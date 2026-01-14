"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./start-journey.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StartJourney() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const card = sectionRef.current?.querySelector(`.${styles.card}`);
      const title = sectionRef.current?.querySelector(`.${styles.title}`);
      const titleTop = sectionRef.current?.querySelector(`.${styles.titleTop}`);
      const titleHighlight = sectionRef.current?.querySelector(`.${styles.highlight}`);
      const desc = sectionRef.current?.querySelector(`.${styles.desc}`);
      const btn = sectionRef.current?.querySelector(`.${styles.btnCta}`);
      const imgWrap = sectionRef.current?.querySelector(`.${styles.imageWrap}`);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 88%",
          end: "bottom 30%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
        defaults: { ease: "power3.out" },
      });

      // 1) Card: clip reveal (different look)
      tl.fromTo(
        card,
        { opacity: 0, scale: 0.985, clipPath: "inset(0 0 100% 0)" },
        { opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)", duration: 0.55 }
      );

      // 2) Title top line: from left
      tl.fromTo(
        titleTop,
        { opacity: 0, x: -28 },
        { opacity: 1, x: 0, duration: 0.35 },
        "-=0.18"
      );

      // 3) Highlight line: from bottom (different direction)
      tl.fromTo(
        titleHighlight,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35 },
        "-=0.22"
      );

      // 4) Underline sweep on highlight (uses CSS ::after)
      tl.fromTo(
        titleHighlight,
        { "--hlScale": 0 },
        { "--hlScale": 1, duration: 0.5 },
        "-=0.18"
      );

      // 5) Description: soft fade + skew reset
      tl.fromTo(
        desc,
        { opacity: 0, y: 14, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.35 },
        "-=0.18"
      );

      // 6) Button: pop-in
      tl.fromTo(
        btn,
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.28, ease: "back.out(1.8)" },
        "-=0.12"
      );

      // 7) Image: rotate + slide from right
      tl.fromTo(
        imgWrap,
        { opacity: 0, x: 34, rotate: 2, scale: 0.98 },
        { opacity: 1, x: 0, rotate: 0, scale: 1, duration: 0.5 },
        "-=0.28"
      );

      // Subtle parallax for image (very light)
      gsap.to(imgWrap, {
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
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className="row align-items-center g-4">
            {/* LEFT */}
            <div className="col-12 col-lg-7">
              <h2 className={styles.title}>
                <span className={styles.titleTop}>
                  Start Your <br />
                </span>
                <span className={styles.highlight}>Construction Journey</span>
              </h2>

              <p className={styles.desc}>
                Build with Confidence. Build with Anantabhivrddhi. Reach out to discuss
                residential, commercial, or mixed-use developments. Our team is here to guide
                you with transparent communication, reliable execution, and expert planning
                at every stage.
              </p>

              <Link href="/contact" className={`btn ${styles.btnCta}`}>
                Contact Us
              </Link>
            </div>

            {/* RIGHT */}
            <div className="col-12 col-lg-5">
              <div className={styles.imageWrap}>
                <Image
                  src="/images/home-page/start-journey/journey-building.png"
                  alt="Modern building representing construction journey"
                  fill
                  className={styles.image}
                  sizes="(max-width: 575px) 90vw, (max-width: 991px) 520px, 533px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
