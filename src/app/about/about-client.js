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


   
<motion.section
  className={styles.founderSection}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }}
>
  <div className="container">
    <div className="row align-items-center gy-4">
      {/* LEFT */}
      <div className="col-12 col-lg-8">
        <motion.div
          className={styles.founderLeft}
          variants={{
            hidden: { opacity: 0, x: -18 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
          }}
        >
          <motion.h2
            className={styles.founderName}
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
            }}
          >
            Shailendra Kumar
          </motion.h2>

          <motion.h3
            className={styles.founderRole}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
            }}
          >
            Founder & Managing Director
          </motion.h3>

          <motion.p
            className={styles.founderText}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut" } },
            }}
          >
           Mr. Shailendra Kumar, Director of Anantabhivrddhi Developers Private Limited, is a seasoned real estate professional with over 10 years of experience in real estate development and construction in Patna and across Bihar. A graduate by qualification, he brings in-depth knowledge of the local property market, land regulations, and development practices specific to Bihar.


          </motion.p>

          <motion.p
            className={styles.founderText}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut" } },
            }}
          >
           
With extensive hands-on experience in land development, plotting projects, residential and commercial real estate in Patna, Mr. Kumar has successfully guided projects from planning to execution. His strong understanding of local authorities, approval processes, and infrastructure development in Bihar enables the company to deliver projects efficiently and compliantly.
          </motion.p>

          <motion.p
            className={styles.founderText}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut" } },
            }}
          >
          Mr. Shailendra Kumar is committed to transparent business practices, timely project delivery, and customer satisfaction, which has helped Anantabhivrddhi Developers build trust among clients, investors, and partners in Patna, Danapur, Bihta, and surrounding regions of Bihar. His leadership emphasizes quality construction, sustainable development, and long-term value creation.

          </motion.p>




             <motion.p
            className={styles.founderText}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.32, ease: "easeOut" } },
            }}
          >
         
Under his guidance, the company continues to contribute to urban and semi-urban real estate growth in Bihar, focusing on modern infrastructure, reliable development standards, and ethically driven business operations.

          </motion.p>
        </motion.div>
      </div>

      {/* RIGHT */}
      <div className="col-12 col-lg-4">
        <div className="d-flex justify-content-center justify-content-lg-end">
          <motion.div
            className={styles.founderImgCard}
            variants={{
              hidden: { opacity: 0, x: 18, scale: 0.98 },
              visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <div className={styles.founderImgWrap}>
              <Image
                src="/images/about-page/founder.png"
                alt="Shailendra Kumar"
                fill
                className={styles.founderImg}
                sizes="(max-width: 575px) 320px, (max-width: 991px) 380px, 420px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
</motion.section>


      <Testimonials />
      <StartJourney />
      <Footer />
    </>
  );
}
