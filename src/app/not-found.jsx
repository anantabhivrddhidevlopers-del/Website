import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.nfWrap}>
      {/* subtle background like your theme */}
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <section className={styles.layout}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>


          <h1 className={styles.oops}>OOOPS!!</h1>

          <p className={styles.subtitle}>
            This is not the page you <br className={styles.br} />
            are looking for
          </p>

          <p className={styles.desc}>
            The page you’re trying to reach doesn’t exist or may have been moved.
            Use the options below to continue.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryBtn}>
              Back to Home
            </Link>
            
          </div>

         
        </div>

        {/* RIGHT VISUAL */}
        <div className={styles.right} aria-hidden="true">
          <div className={styles.art}>
            <div className={styles.big404}>
              <span className={styles.n4a}>4</span>
              <span className={styles.n0}>0</span>
              <span className={styles.n4b}>4</span>
            </div>

            {/* decorative dots + shapes */}
            <div className={styles.dots} />
            <div className={styles.plusA}>+</div>
            <div className={styles.plusB}>+</div>
            <div className={styles.plusC}>+</div>
            <div className={styles.scribble} />
          </div>
        </div>
      </section>
    </main>
  );
}
