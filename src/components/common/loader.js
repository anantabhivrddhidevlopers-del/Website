import Image from "next/image";
import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles.overlay} role="status" aria-live="polite" aria-busy="true">
      <div className={styles.loaderWrap}>
        <div className={styles.imageWrap}>
          {/* animated ring INSIDE the image */}
          <span className={styles.innerRing} aria-hidden="true" />

          <Image
            src="/images/home-page/loader-image/loader.png"
            alt="Loading"
            fill
            priority
            className={styles.loaderImg}
          />
        </div>

        <p className={styles.text}>Loading...</p>
      </div>
    </div>
  );
}
