"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Banner from "@/components/home/Banner";
import AboutUsSection from "@/components/home/AboutUs";
import OurServicesSection from "@/components/home/ourservices-section";
import Image from "next/image";
import StartJourney from "@/components/home/StartJourney";
import Footer from "@/components/home/footer";
import styles from "@/app/our-services/our-services.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   ✅ CLOUDINARY CONFIG
   ========================================================= */
const CLOUD_NAME = "dihhasfbp";

const VIDEO_LIST = [
  {
    title: "Site Overview",
    location: "Project Area",
    publicId: "DSC_8932_l65jzj",
    poster: "/images/our-services-page/videos-gallery/poster-1.png",
  },
  {
    title: "Road Work Progress",
    location: "Internal Roads",
    publicId: "DSC_8922_ynfkxe",
    poster: "/images/our-services-page/videos-gallery/poster-2.png",
  },
  {
    title: "Plot Development",
    location: "Layout",
    publicId: "DSC_8913_nvozkf",
    poster: "/images/our-services-page/videos-gallery/poster-3.png",
  },
  {
    title: "On-Site Movement",
    location: "Worksite",
    publicId: "DSC_8907_v3cg2m",
    poster: "/images/our-services-page/videos-gallery/poster-4.png",
  },
  {
    title: "Video Five",
    location: "Location",
    publicId: "DSC_8905_giduja",
    poster: "/images/our-services-page/videos-gallery/poster-5.png",
  },
  {
    title: "Road Work Progress",
    location: "Internal Roads",
    publicId: "DSC_8922_ynfkxe",
    poster: "/images/our-services-page/videos-gallery/poster-2.png",
  },
  
 
];

const cloudinaryVideoSrc = (publicId) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto/${publicId}.mp4`;

/* =========================================================
   ✅ VIDEO TILE
   - Hover: plays muted preview
   - Click: full screen + play (no controls shown)
   ========================================================= */
function VideoTile({ item, idx, registerRef, onHoverPlay, onHoverStop, onClickOpen }) {
  // collage pattern: makes tiles different sizes
  const variant =
    idx % 9 === 0
      ? styles.vItemLg
      : idx % 9 === 3
      ? styles.vItemTall
      : idx % 9 === 6
      ? styles.vItemWide
      : styles.vItemSm;

  return (
    <div
      className={`${styles.vItem} ${variant}`}
      onMouseEnter={() => onHoverPlay(item.publicId)}
      onMouseLeave={() => onHoverStop(item.publicId)}
      onClick={() => onClickOpen(item.publicId)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClickOpen(item.publicId);
      }}
      aria-label={`Open ${item.title} in full screen`}
    >
      <div className={styles.vMedia}>
        <video
          ref={(el) => registerRef(item.publicId, el)}
          className={styles.vVideo}
          poster={item.poster}
          preload="metadata"
          playsInline
          muted
          controls={false}
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
        >
          <source src={cloudinaryVideoSrc(item.publicId)} type="video/mp4" />
        </video>

        <div className={styles.vOverlay} />

        

        <div className={styles.vInfo}>
          <h4 className={styles.vName}>{item.title}</h4>
          <p className={styles.vLoc}>{item.location}</p>
        </div>
      </div>
    </div>
  );
}

function VideoGallerySection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const gridRef = useRef(null);

  const videoRefs = useRef({}); // { publicId: HTMLVideoElement }
  const [activeFsId, setActiveFsId] = useState(null);

  const registerRef = (publicId, el) => {
    if (!publicId) return;
    if (el) videoRefs.current[publicId] = el;
  };

  const pauseAll = (exceptId = null) => {
    Object.entries(videoRefs.current).forEach(([id, v]) => {
      if (!v) return;
      if (exceptId && id === exceptId) return;
      try {
        v.pause();
        v.currentTime = 0;
        v.muted = true;
        v.loop = false;
      } catch {}
    });
  };

  // ✅ Hover play preview (muted)
  const onHoverPlay = async (publicId) => {
    if (activeFsId) return; // ignore hover while fullscreen
    const v = videoRefs.current[publicId];
    if (!v) return;

    // optional: pause other previews so UI feels clean
    pauseAll(publicId);

    try {
      v.muted = true;
      v.loop = true;
      v.currentTime = 0;
      await v.play();
    } catch {}
  };

  const onHoverStop = (publicId) => {
    if (activeFsId) return;
    const v = videoRefs.current[publicId];
    if (!v) return;
    try {
      v.pause();
      v.currentTime = 0;
      v.loop = false;
    } catch {}
  };

  // ✅ Click → Fullscreen + play (no controls)
  const onClickOpen = async (publicId) => {
    const v = videoRefs.current[publicId];
    if (!v) return;

    pauseAll(publicId);

    try {
      setActiveFsId(publicId);

      // play with sound in fullscreen
      v.loop = false;
      v.muted = false;

      // Fullscreen request (best effort)
      if (v.requestFullscreen) await v.requestFullscreen();
      else if (v.webkitRequestFullscreen) v.webkitRequestFullscreen();
      else if (v.msRequestFullscreen) v.msRequestFullscreen();

      await v.play();
    } catch {
      // fallback: play muted if browser blocks sound
      try {
        v.muted = true;
        await v.play();
      } catch {}
    }
  };

  // ✅ When exit fullscreen → stop and reset
  useEffect(() => {
    const onFsChange = () => {
      const fsEl =
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;

      // If no fullscreen element, user exited fullscreen
      if (!fsEl && activeFsId) {
        const v = videoRefs.current[activeFsId];
        if (v) {
          try {
            v.pause();
            v.currentTime = 0;
            v.muted = true;
            v.loop = false;
          } catch {}
        }
        setActiveFsId(null);
      }
    };

    document.addEventListener("fullscreenchange", onFsChange);
    document.addEventListener("webkitfullscreenchange", onFsChange);
    document.addEventListener("MSFullscreenChange", onFsChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFsChange);
      document.removeEventListener("webkitfullscreenchange", onFsChange);
      document.removeEventListener("MSFullscreenChange", onFsChange);
    };
  }, [activeFsId]);

  // ✅ GSAP animations for section + collage items
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        subRef.current,
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          delay: 0.05,
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
        }
      );

      // Collage stagger
      const items = gridRef.current?.querySelectorAll(`.${styles.vItem}`);
      if (items && items.length) {
        gsap.fromTo(
          items,
          { y: 18, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: gridRef.current, start: "top 78%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ✅ stop videos when unmount
  useEffect(() => {
    return () => pauseAll(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={sectionRef} className={styles.videoGallerySection}>
      {/* ✅ Running strip (marquee) */}
      <div className={styles.vMarquee}>
        <div className={styles.vMarqueeTrack}>
          <span>PROJECT VIDEOS</span>
          <span>•</span>
          <span>PROGRESS HIGHLIGHTS</span>
          <span>•</span>
          <span>ON-SITE UPDATES</span>
          <span>•</span>
          <span>PROJECT VIDEOS</span>
          <span>•</span>
          <span>PROGRESS HIGHLIGHTS</span>
          <span>•</span>
          <span>ON-SITE UPDATES</span>
        </div>
      </div>

      {/* ✅ Bootstrap container for responsive */}
      <div className="container">
        <div className={styles.vHead}>
          <h2 ref={titleRef} className={styles.vTitle}>
            Video Gallery
          </h2>
          <p ref={subRef} className={styles.vSubtitle}>
            Hover to preview. Click to open full screen.
          </p>
        </div>

        {/* ✅ Collage grid (mixed layout) */}
        <div ref={gridRef} className={styles.vCollage}>
          {VIDEO_LIST.map((item, idx) => (
            <VideoTile
              key={item.publicId}
              item={item}
              idx={idx}
              registerRef={registerRef}
              onHoverPlay={onHoverPlay}
              onHoverStop={onHoverStop}
              onClickOpen={onClickOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OurServicesClient() {
  return (
    <>
      <Banner
        titleLines={["Our services"]}
        brandText=""
        description="Your journey toward a well-built future begins here. Explore our projects crafted to meet your aspirations and standards"
        minHeight="70vh"
        contentMinHeight="70vh"
      />

      <AboutUsSection
        title="Services Provided"
        p1="Anantabhivrddhi Developers Private Limited offers comprehensive services in real estate and development, including residential real estate projects, commercial property development, and land development with organized plotting solutions. The company also undertakes infrastructure and allied civil works, focusing on building strong foundational facilities such as roads, utilities, and essential site development. "
        p2="In addition, Anantabhivrddhi provides end-to-end project planning, execution, and management services, ensuring every project is delivered with efficiency, quality control, and regulatory compliance.Alongside development activities, the company operates a dedicated vertical for construction, mining, and agricultural equipment supply. "
        p3="This includes the supply of construction ma chinery and equipment, mining equipment and industrial tools, as well as agricultural and farm equipment to support modern and productive operations. Anantabhivrddhi also provides equipment support for infrastructure and industrial projects, enabling smooth execution through timely availability of reliable machinery and technical assistance."
        topImageSrc="/images/about-page/mining.png"
        bottomImageSrc="/images/about-page/grass.png"
      />

      <OurServicesSection
        cards={[
          {
            title: "Residential Real Estate & Development",
            desc: "Thoughtfully designed homes offering spacious living, premium construction quality, and a peaceful residential environment for modern families.",
            img: "/images/home-page/our-services/real-estate.png",
            tags: [
              { icon: "/images/icons/featured-icons/", text: " 🏠 Modern Homes" },
              { icon: "/images/icons/featured-icons/", text: "🧱 Premium Materials" },
            ],
          },
          {
            title: "Project Planning, Execution & Management",
            desc: "Comprehensive project solutions ensuring efficient planning, structural reliability, timely execution,  concept to completion.",
            img: "/images/home-page/our-services/project-planning.png",
            tags: [
              { icon: "/images/icons/featured-icons/", text: "📐 Planning & Design" },
              { icon: "/images/icons/featured-icons/bathg", text: "📊 Cost & Time Control" },
            ],
          },
          {
            title: "Land Development & Strategic Plotting",
            desc: "Well-planned residential layouts combining strong infrastructure, organized plotting, for comfortable and sustainable living.",
            img: "/images/home-page/our-services/land-development.png",
            tags: [
              { icon: "/images/icons/featured-icons/be", text: " 🛣️ Internal Roads" },
              { icon: "/images/icons/featured-icons/bah.", text: "🏞️ Green Spaces" },
            ],
          },
          {
            title: "Commercial Property Development",
            desc: "Thoughtfully designed homes offering spacious living, premium construction quality, and a peaceful residential environment for modern families.",
            img: "/images/home-page/our-services/commercial-property.png",
            tags: [
              { icon: "/images/icons/featured-icons/be", text: " 🏢 Commercial" },
              { icon: "/images/icons/featured-icons/bah.", text: "🧱 Premium Build" },
            ],
          },
          {
            title: "Infrastructure & Allied Civil Works",
            desc: "Comprehensive project solutions ensuring efficient planning, structural reliability, timely execution,  concept to completion.",
            img: "/images/home-page/our-services/infrastructure.png",
            tags: [
              { icon: "/images/icons/featured-icons/be", text: "🛣 Civil Works" },
              { icon: "/images/icons/featured-icons/bah.", text: "⏱ On-Time" },
            ],
          },
        ]}
      />

      {/* ✅ NEW EQUIPMENT SECTION ADDED (image left, text right) */}
      <div className={`row align-items-center ${styles.eqRow}`}>
        <div className="col-12 col-lg-6">
          <div className={styles.eqLeft}>
            <div className={styles.eqBig}>
              <Image
                src="/images/about-page/equipment-supply.png"
                alt="Mining and industrial equipment supply"
                fill
                className={styles.eqImg}
              />
            </div>

            <div className={styles.eqSmall}>
              <Image
                src="/images/about-page/machinery-supply.png"
                alt="Construction machinery supply"
                fill
                className={styles.eqImg}
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 mt-4 mt-lg-0">
          <h2 className={styles.eqHeading}>
            CONSTRUCTION,
            <br />
            MINING &amp;
            <br />
            AGRICULTURAL
            <br />
            EQUIPMENT SUPPLY
          </h2>

          <ul className={styles.eqBullets}>
            <li>
              <b>Construction Machinery &amp; Equipment Supply</b> – Providing reliable and
              well-maintained machinery and equipment to support residential, commercial, and
              infrastructure construction activities.
            </li>

            <li>
              <b>Mining Equipment &amp; Industrial Tools Supply</b> – Supplying durable mining
              equipment and industrial tools designed to meet operational demands while ensuring
              safety, efficiency, and consistent performance at worksites.
            </li>

            <li>
              <b>Agricultural &amp; Farm Equipment Supply</b> – Offering modern agricultural and farm
              equipment to improve productivity, efficiency, and ease of operations across various
              farming applications.
            </li>

            <li>
              <b>Equipment Support for Infrastructure &amp; Industrial Projects</b> – Ensuring timely
              availability of required equipment along with dependable support to facilitate smooth
              execution of infrastructure and industrial development projects.
            </li>
          </ul>
        </div>
      </div>

      {/* ✅ NEW IMAGE GALLERY SECTION */}
      <div className={styles.gallerySection}>
        <h2 className={styles.galleryTitle}>Project Gallery</h2>
        <div className={styles.galleryWrapper}>
          {[
            "/images/our-services-page/images-gallery/project-gallery-field-1.png",
            "/images/our-services-page/images-gallery/project-gallery-field-2.png",
            "/images/our-services-page/images-gallery/project-gallery-field-3.png",
            "/images/our-services-page/images-gallery/project-gallery-field-4.png",
            "/images/our-services-page/images-gallery/project-gallery-field-5.png",
            "/images/our-services-page/images-gallery/project-gallery-field-6.png",
            "/images/our-services-page/images-gallery/project-gallery-field-7.png",
          ].map((src, index) => (
            <div key={index} className={styles.galleryItem}>
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={300}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ UPDATED VIDEO GALLERY */}
      <VideoGallerySection />

      <StartJourney />
      <Footer />
    </>
  );
}
