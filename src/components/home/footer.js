"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const bg = footerRef.current?.querySelector(`.${styles.bg}`);
      const logo = footerRef.current?.querySelector(`.${styles.brandRow}`);
      const desc = footerRef.current?.querySelector(`.${styles.desc}`);
      const socials = footerRef.current?.querySelectorAll(`.${styles.socialBtn}`);
      const colTitles = footerRef.current?.querySelectorAll(`.${styles.colTitle}`);
      const quickLinks = footerRef.current?.querySelectorAll(`.${styles.links} li`);
      const contactItems = footerRef.current?.querySelectorAll(`.${styles.contactItem}`);
      const divider = footerRef.current?.querySelector(`.${styles.divider}`);
      const bottom = footerRef.current?.querySelector(`.${styles.bottomRow}`);

      // Initial states (avoid flash)
      gsap.set([logo, desc, divider, bottom], { opacity: 0, y: 12 });
      gsap.set(socials, { opacity: 0, y: 10, scale: 0.9 });
      gsap.set(colTitles, { opacity: 0, y: 10 });
      gsap.set(quickLinks, { opacity: 0, x: -14 });
      gsap.set(contactItems, { opacity: 0, x: 14 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 92%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
      });

      // Background cinematic move (slow + subtle)
      if (bg) {
        tl.fromTo(
          bg,
          { scale: 1.08, opacity: 0.0 },
          { scale: 1.02, opacity: 1, duration: 0.9, ease: "power2.out" },
          0
        );
      }

      // Logo pop with tiny rotation (different feel)
      tl.fromTo(
        logo,
        { opacity: 0, y: 14, scale: 0.92, rotate: -1.2 },
        { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 0.45, ease: "back.out(1.6)" },
        0.12
      );

      // Description
      tl.to(desc, { opacity: 1, y: 0, duration: 0.32 }, "-=0.18");

      // Social icons (bounce stagger)
      tl.to(
        socials,
        { opacity: 1, y: 0, scale: 1, duration: 0.3, stagger: 0.08, ease: "back.out(2)" },
        "-=0.12"
      );

      // Column titles
      tl.to(colTitles, { opacity: 1, y: 0, duration: 0.28, stagger: 0.12 }, "-=0.1");

      // Quick links (left in)
      tl.to(quickLinks, { opacity: 1, x: 0, duration: 0.26, stagger: 0.06 }, "-=0.18");

      // Contact items (right in)
      tl.to(contactItems, { opacity: 1, x: 0, duration: 0.26, stagger: 0.08 }, "-=0.25");

      // Divider + bottom row
      tl.to(divider, { opacity: 1, y: 0, duration: 0.25 }, "-=0.12");
      tl.to(bottom, { opacity: 1, y: 0, duration: 0.25 }, "-=0.1");
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.bg} />

      <div className={`container ${styles.content}`}>
        <div className="row gy-4 align-items-start">
          {/* LEFT */}
          <div className="col-12 col-lg-6">
            <div className={styles.brandRow}>
              <Image
                src="/images/home-page/header-logo.png"
                alt="Anantabhivrddhi"
                width={182}
                height={40}
                priority
              />
            </div>

            <p className={styles.desc}>
              Building enduring value through integrity, innovation, and excellence.
              Committed to shaping a future founded on trust and sustainable growth.
            </p>

            {/* SOCIAL ICONS */}
            <div className={styles.socialRow}>
              <Link href="#" className={styles.socialBtn}>
                <Image src="/images/icons/footer-icons/facebook.png" alt="Facebook" width={40} height={40} />
              </Link>

              <Link href="https://www.instagram.com/anantabhivrddhi" className={styles.socialBtn}>
                <Image src="/images/icons/footer-icons/instagram.png" alt="Instagram" width={40} height={40} />
              </Link>

              <Link href="#" className={styles.socialBtn}>
                <Image src="/images/icons/footer-icons/twitter.png" alt="Twitter" width={40} height={40} />
              </Link>

              <Link href="#" className={styles.socialBtn}>
                <Image src="/images/icons/footer-icons/linkedin.png" alt="LinkedIn" width={40} height={40} />
              </Link>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="col-12 col-lg-2">
            <h6 className={styles.colTitle}>Quick Access</h6>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/our-services">Our Services</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-lg-4">
            <h6 className={styles.colTitle}>Contact Us</h6>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Image src="/images/icons/footer-icons/phone.png" alt="Phone" width={20} height={20} />
                <a href="tel:+918521962739">+91 8521962739</a>
              </div>

              <div className={styles.contactItem}>
                <Image src="/images/icons/footer-icons/mail.png" alt="Email" width={20} height={20} />
                <a href="mailto:anantabhivrdhhipvtltd@gmail.com">anantabhivrdhhipvtltd@gmail.com</a>
              </div>

              <div className={styles.contactItem}>
                <Image src="/images/icons/footer-icons/location.png" alt="Location" width={20} height={20} />
                <span className={styles.address}>
                  C/o Shailendra Kumar, Vill Bela, Tola Madhupur, Neura, Neora (Patna),
                  Danapur, Patna – 801113, Bihar, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomRow}>
          <span>
            © Dec 2025 All Rights Reserved. Powered by
            <a href="https://ardentpixels.studio/" target="_blank" rel="noopener noreferrer" className={styles.highlightedName}>
              AP
            </a>
            |
            <a href="https://www.linkedin.com/in/geetansh-srivastava-89b545368" target="_blank" rel="noopener noreferrer" className={styles.highlightedName}>
              Geetansh
            </a>
          </span>
          <span className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className={styles.dot}>|</span>
            <Link href="/terms-conditions">Terms & Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
