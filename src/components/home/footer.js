import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bg} />

      <div className={`container ${styles.content}`}>
        <div className="row gy-4 align-items-start">
          {/* LEFT */}
          <div className="col-12 col-lg-6">
            <div className={styles.brandRow}>
              <Image
                src="/images/home-page/header-logo.png"
                alt="Anantabhivrddhi"
                width={220}
                height={52}
                priority
              />
            </div>

            <p className={styles.desc}>
              Building enduring value through integrity, innovation, and excellence.
              Committed to shaping a future founded on trust and sustainable growth
            </p>

            {/* SOCIAL ICONS */}
            <div className={styles.socialRow}>
              <Link href="#" className={styles.socialBtn}>
                <Image src="/images/icons/footer-icons/facebook.png" alt="Facebook" width={40} height={40} />
              </Link>

              <Link href="#" className={styles.socialBtn}>
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
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-lg-4">
            <h6 className={styles.colTitle}>Contact Us</h6>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Image src="/images/icons/footer-icons/phone.png" alt="" width={20} height={20} />
                <a href="tel:+918521962739">+91 8521962739</a>
              </div>

              <div className={styles.contactItem}>
                <Image src="/images/icons/footer-icons/mail.png" alt="" width={20} height={20} />
                <a href="mailto:anantabhivrdhhipvtltd@gmail.com">
                  anantabhivrdhhipvtltd@gmail.com
                </a>
              </div>

              <div className={styles.contactItem}>
                <Image src="/images/icons/footer-icons/location.png" alt="" width={20} height={20} />
                <span className={styles.address}>
                  c/o Shailendra Kumar, Village Bela Tola Madhupur, Neura,
                  Danapur, Patna, Bihar - 801113.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomRow}>
          <span>©2025 All Rights Reserved</span>
          <span className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className={styles.dot}>|</span>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
