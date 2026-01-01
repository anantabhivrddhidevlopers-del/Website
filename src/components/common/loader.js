import Image from "next/image";
import styles from "./loader.module.css";

export default function Loader({ text = "Loading..." }) {
  return (
    <div className={styles.backdrop} role="status" aria-live="polite">
      <div className={styles.card}>
        <div className={styles.logoWrap}>
          <Image
            src="/images/logo/loader-logo.png"
            alt="Anantabhivrddhi Developers"
            width={110}
            height={110}
            priority
          />
          <span className={styles.pulse} />
        </div>

        <div className={styles.ring} />

        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}
