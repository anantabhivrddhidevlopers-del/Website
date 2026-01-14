"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./scrollToTop.module.css";

export default function ScrollToTop() {
  const btnRef = useRef(null);
  const [show, setShow] = useState(false);
  const [onDark, setOnDark] = useState(false);

  // show/hide button on scroll
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect if the button is sitting on a dark section
  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    // pick the "middle point" of the button to test what's behind it
    const observer = new IntersectionObserver(
      (entries) => {
        // when the sentinel is intersecting dark sections, toggle state
        const entry = entries[0];
        const isDark = entry?.target?.dataset?.bg === "dark" && entry.isIntersecting;
        setOnDark(isDark);
      },
      { threshold: 0.15 }
    );

    // We observe special "sentinel" divs (added below via query selector)
    const sentinels = document.querySelectorAll("[data-scrolltop-sentinel='true']");
    sentinels.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  // fallback: if you don’t add sentinels, decide by computed background near bottom-right
  useEffect(() => {
    if (typeof window === "undefined") return;

    const fallback = () => {
      // sample the element under bottom-right area (where button sits)
      const x = window.innerWidth - 30;
      const y = window.innerHeight - 30;
      const under = document.elementFromPoint(x, y);
      if (!under) return;

      const bg = window.getComputedStyle(under).backgroundColor;
      // parse rgb(...) and check brightness
      const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (!m) return;
      const r = +m[1], g = +m[2], b = +m[3];
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      setOnDark(brightness < 140);
    };

    fallback();
    window.addEventListener("scroll", fallback, { passive: true });
    window.addEventListener("resize", fallback);
    return () => {
      window.removeEventListener("scroll", fallback);
      window.removeEventListener("resize", fallback);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={handleTop}
      aria-label="Scroll to top"
      className={`${styles.btn} ${show ? styles.show : ""} ${onDark ? styles.onDark : styles.onLight}`}
    >
      <span className={styles.chev} aria-hidden="true">↑</span>
    </button>
  );
}
