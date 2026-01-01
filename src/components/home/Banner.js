import Link from "next/link";
import styles from "./banner.module.css";
import MenuItems from "./MenuItems";

export default function Banner({
  // text props
  titleLines = ["Discover Your Dream", "Property with"],
  brandText = "Anantabhivrddhi",
  description = "Your journey toward a well-built future begins here. Explore our projects crafted to meet your aspirations and standards.",

  videoSrc = "/videos/home-page/banner-video.mp4",


  minHeight,      
  contentMinHeight,

  // buttons
  showButtons = true,
  primaryBtn = { href: "/get-started", label: "Get Started" },
  secondaryBtn = { href: "/projects", label: "See Our Projects" },
}) {
  return (
    <section
      className={styles.heroWrap}
      style={minHeight ? { minHeight } : undefined}
    >
      <video className={styles.heroVideo} autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className={styles.heroOverlay} />

      <MenuItems />

      <div
        className={`${styles.heroContent} d-flex align-items-center`}
        style={contentMinHeight ? { minHeight: contentMinHeight } : undefined}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              {/* ✅ no extra blank lines if line2 or brand is empty */}
              <h1 className={`${styles.heroTitle} text-center mb-3`}>
                {titleLines?.[0]}

                {titleLines?.[1] ? (
                  <>
                    <br />
                    {titleLines[1]}
                  </>
                ) : null}

                {brandText ? (
                  <>
                    <br />
                    <span className={styles.heroBrand}>{brandText}</span>
                  </>
                ) : null}
              </h1>

              {description ? (
                <p className={`${styles.heroText} text-center mx-auto mb-4`}>
                  {description}
                </p>
              ) : null}

              {showButtons && (
                <div className={`${styles.heroBtns} justify-content-center`}>
                  {primaryBtn?.href && primaryBtn?.label && (
                    <Link
                      href={primaryBtn.href}
                      className="btn btn-light fw-semibold px-4 py-2 rounded-pill"
                    >
                      {primaryBtn.label}
                    </Link>
                  )}

                  {secondaryBtn?.href && secondaryBtn?.label && (
                    <Link
                      href={secondaryBtn.href}
                      className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill"
                    >
                      {secondaryBtn.label}
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
