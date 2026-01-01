import Image from "next/image";
import Link from "next/link";
import styles from "./start-journey.module.css";

export default function StartJourney() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className="row align-items-center g-4">
            {/* LEFT */}
            <div className="col-12 col-lg-7">
              <h2 className={styles.title}>
                Start Your <br />
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
