"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./stats.module.css";

function useInView(ref, options = { threshold: 0.3 }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect(); // run once
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, options]);

  return inView;
}

function AnimatedNumber({ value, duration = 1400, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    let start = null;
    const from = 0;
    const to = Number(value);

    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + (to - from) * eased);
      setDisplay(current);

      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [value, duration]);

  return (
    <span className={styles.digit}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const wrapRef = useRef(null);
  const isVisible = useInView(wrapRef);

  const items = useMemo(
    () => [
      { value: 1, suffix: "", title: "Years of Mastering Excellence" },
      { value: 25, suffix: "+", title: "Happy Families" },
      { value: 100, suffix: "+", title: "Completed Projects" },
      { value: 1, suffix: "M+", title: "Ongoing Projects" },
    ],
    []
  );

  return (
    <section ref={wrapRef} className={styles.statsSection}>
      <div className="container">
        <div className="text-center">
          <h2 className={styles.heading}>Stats</h2>
          <p className={styles.subtext}>
            From first foundations to iconic structures, our expanding footprint supports every
            project with quality craftsmanship, reliability, and engineering precision
          </p>
        </div>

        <div className="row g-3 g-md-4 justify-content-center mt-3">
          {items.map((it, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
              <div className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.numberWrap}>
                    {isVisible ? (
                      <AnimatedNumber value={it.value} suffix={it.suffix} />
                    ) : (
                      <span className={styles.digit}>0{it.suffix}</span>
                    )}
                    <span className={styles.spark} />
                  </div>
                  <div className={styles.label}>{it.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

