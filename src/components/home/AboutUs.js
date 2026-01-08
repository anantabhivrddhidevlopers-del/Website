import Image from "next/image";
import styles from "./aboutus.module.css";

export default function AboutUs() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-6">
            <h2 className={styles.title}>About Us</h2>

            <p className={styles.text}>
              Anantabhivrddhi Developers Private Limited stands as a purpose-driven
              construction and development company based in Patna, Bihar, built on
              the principles of trust, quality, and long-term value creation.
              With a disciplined approach to planning and execution, the company
              is committed to delivering developments that reflect reliability,
              precision, and thoughtful design.
            </p>

            <p className={styles.text}>
              At the core of Anantabhivrddhi’s philosophy is a deep respect for
              transparency and customer confidence. Every project is undertaken
              with a clear focus on structural integrity, regulatory compliance,
              and responsible construction practices—ensuring that each
              development earns trust not just at delivery, but for years to come.
            </p>

            <p className={styles.text}>
              The company places strong emphasis on intelligent space planning and
              functional design. By optimizing interior layouts and construction
              quality, Anantabhivrddhi creates environments that offer comfort,
              efficiency, and adaptability—transforming buildings into spaces
              that support meaningful living and sustainable growth.
            </p>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <div className={styles.imageWrap}>
              {/* Top Image */}
              <div className={styles.imageTop}>
                <Image
                  src="/images/about-page/community-lifestyle.png"
                  alt="Residents enjoying community lifestyle at Anantabhivrddhi development"
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 260px"
                />
              </div>

              {/* Bottom Image */}
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
