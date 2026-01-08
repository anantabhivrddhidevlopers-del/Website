"use client";

import Banner from "@/components/home/Banner";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image"; // ✅ MISSING IMPORT

import AboutUs from "@/components/home/AboutUs";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonials from "@/components/home/Testimonials";
import StartJourney from "@/components/home/StartJourney";
import Loader from "@/components/common/loader";
import Footer from "@/components/home/footer";

// ✅ MISSING VARIANTS (fixes: bottomVariants is not defined)
const bottomVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.12 },
  }),
};

export default function AboutPageClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Banner
        titleLines={["About Us"]}
        brandText=""
        description="Your journey toward a well-built future begins here. Explore our projects crafted to meet your aspirations and standards."
        minHeight="70vh"
        contentMinHeight="70vh"
      />

      <AboutUs />
      <WhyChoose />

      {/* ===== Cards ===== */}
      <motion.div
        className={styles.container_cards}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className={styles.card_list}>
          {/* Mission */}
          <motion.div className={styles.card} custom={0} variants={bottomVariants}>
            <div className={styles.iconWrapper}>
              <Image
                src="/images/icons/about-icons/polygon.png"
                alt="Polygon background"
                width={118}
                height={132}
                className={styles.polygonIcon}
              />
              <Image
                src="/images/icons/about-icons/mission.png"
                alt="Mission Icon"
                width={94}
                height={80}
                className={styles.centerIcon}
              />
            </div>
            <h3>Mission</h3>
            <p>
              To deliver high-quality developments with integrity, transparency, and timely execution—creating
              spaces that earn trust and stand the test of time.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div className={styles.card} custom={1} variants={bottomVariants}>
            <div className={styles.iconWrapper}>
              <Image
                src="/images/icons/about-icons/polygon.png"
                alt="Polygon background"
                width={118}
                height={132}
                className={styles.polygonIcon}
              />
              <Image
                src="/images/icons/about-icons/vision.png"
                alt="Vision Icon"
                width={94}
                height={80}
                className={styles.centerIcon}
              />
            </div>
            <h3>Vision</h3>
            <p>
              To be a trusted name in real estate, shaping sustainable communities through excellence in
              construction and customer satisfaction.
            </p>
          </motion.div>

          {/* Core Value */}
          <motion.div className={styles.card} custom={2} variants={bottomVariants}>
            <div className={styles.iconWrapper}>
              <Image
                src="/images/icons/about-icons/polygon.png"
                alt="Polygon background"
                width={118}
                height={132}
                className={styles.polygonIcon}
              />
              <Image
                src="/images/icons/about-icons/core.png"
                alt="Core Value Icon"
                width={94}
                height={80}
                className={styles.centerIcon}
              />
            </div>
            <h3>Core Value</h3>
            <p>
              We believe in honesty, quality, and accountability—ensuring clear communication, ethical
              practices, and zero compromises in every project.
            </p>
          </motion.div>
        </div>
      </motion.div>


   
    <section className={styles.founderSection}>
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* LEFT */}
          <div className="col-12 col-lg-8">
            <div className={styles.founderLeft}>
              <h2 className={styles.founderName}>Shailendra Kumar</h2>
              <h3 className={styles.founderRole}>Founder & Managing Director</h3>

              <p className={styles.founderText}>
                Anantabhivrddhi Developers Private Limited is led by Shailendra Kumar, a purpose-driven
                entrepreneur with a strong commitment to quality construction, ethical practices, and
                long-term value creation. Based in Patna, Bihar, he brings a practical, execution-focused
                approach to real estate development rooted in trust and responsibility.
              </p>

              <p className={styles.founderText}>
                With a deep understanding of planning, compliance, and on-ground execution, he has guided
                the company with a clear vision—delivering structurally sound, thoughtfully designed
                spaces that balance functionality with modern living standards. His leadership emphasizes
                disciplined processes, transparency in transactions, and consistent communication with
                stakeholders.
              </p>

              <p className={styles.founderText}>
                At the core of his philosophy lies a belief that real estate is not just about buildings,
                but about creating dependable environments where families and communities can grow with
                confidence. Under his guidance, Anantabhivrddhi Developers Private Limited continues to
                focus on intelligent space planning, sustainable development practices, and a customer-centric
                execution—ensuring every project reflects reliability, precision, and long-term value.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-lg-4">
            <div className="d-flex justify-content-center justify-content-lg-end">
              <div className={styles.founderImgCard}>
                <Image
                  src="/images/about-page/founder.jpg"   // ✅ change to your real image path
                  alt="Shailendra Kumar"
                  width={420}
                  height={380}
                  className={styles.founderImg}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 

      <Testimonials />
      <StartJourney />
      <Footer />
    </>
  );
}
