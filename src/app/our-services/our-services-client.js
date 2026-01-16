"use client";
import { useEffect, useState } from "react";
import Banner from "@/components/home/Banner";
import AboutUsSection from "@/components/home/AboutUs";
import OurServicesSection from "@/components/home/ourservices-section";
import Image from "next/image";
import StartJourney from "@/components/home/StartJourney";
import Footer from "@/components/home/footer";
import styles from "@/app/our-services/our-services.module.css"

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

                p3="This includes the supply of construction machinery and equipment, mining equipment and industrial tools, as well as agricultural and farm equipment to support modern and productive operations. Anantabhivrddhi also provides equipment support for infrastructure and industrial projects, enabling smooth execution through timely availability of reliable machinery and technical assistance."


                topImageSrc="/images/about-page/mining.png"
                bottomImageSrc="/images/about-page/grass.png"
            />


            <OurServicesSection
                cards={[
                    {
                        title: "Residential Real Estate & Development", desc: "Thoughtfully designed homes offering spacious living, premium construction quality, and a peaceful residential environment for modern families.", img: "/images/home-page/our-services/real-estate.png", tags: [
                            { icon: "/images/icons/featured-icons/", text: " 🏠 Modern Homes" },
                            { icon: "/images/icons/featured-icons/", text: "🧱 Premium Materials" },
                        ]
                    },



                    {
                        title: "Project Planning, Execution & Management", desc: "Comprehensive project solutions ensuring efficient planning, structural reliability, timely execution,  concept to completion.", img: "/images/home-page/our-services/project-planning.png", tags: [
                            { icon: "/images/icons/featured-icons/", text: "📐 Planning & Design" },
                            { icon: "/images/icons/featured-icons/bathg", text: "📊 Cost & Time Control" },
                        ],
                    },



                    {
                        title: "Land Development & Strategic Plotting", desc: "Well-planned residential layouts combining strong infrastructure, organized plotting, for comfortable and sustainable living.", img: "/images/home-page/our-services/land-development.png", tags: [
                            { icon: "/images/icons/featured-icons/be", text: " 🛣️ Internal Roads" },
                            { icon: "/images/icons/featured-icons/bah.", text: "🏞️ Green Spaces" },
                        ],
                    },



                    {
                        title: "Commercial Property Development", desc: "Thoughtfully designed homes offering spacious living, premium construction quality, and a peaceful residential environment for modern families.", img: "/images/home-page/our-services/commercial-property.png",

                        tags: [
                            { icon: "/images/icons/featured-icons/be", text: " 🏢 Commercial" },
                            { icon: "/images/icons/featured-icons/bah.", text: "🧱 Premium Build" },
                        ],
                    },




                    {
                        title: "Infrastructure & Allied Civil Works", desc: "Comprehensive project solutions ensuring efficient planning, structural reliability, timely execution,  concept to completion.", img: "/images/home-page/our-services/infrastructure.png",


                        tags: [{ icon: "/images/icons/featured-icons/be", text: "🛣 Civil Works" },
                        { icon: "/images/icons/featured-icons/bah.", text: "⏱ On-Time" },


                        ],
                    },
                ]}
            />







 {/* ✅ NEW EQUIPMENT SECTION ADDED (image left, text right) */}
        <div className={`row align-items-center ${styles.eqRow}`}>
          {/* LEFT IMAGES */}
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

          {/* RIGHT CONTENT */}
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
                well-maintained machinery and equipment to support residential, commercial,
                and infrastructure construction activities.
              </li>

              <li>
                <b>Mining Equipment &amp; Industrial Tools Supply</b> – Supplying durable mining
                equipment and industrial tools designed to meet operational demands while ensuring
                safety, efficiency, and consistent performance at worksites.
              </li>

              <li>
                <b>Agricultural &amp; Farm Equipment Supply</b> – Offering modern agricultural and
                farm equipment to improve productivity, efficiency, and ease of operations across
                various farming applications.
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
            "/images/our-services-page/images-gallery/project-gallery-field-2.png",  // Path to img-2
            "/images/our-services-page/images-gallery/project-gallery-field-3.png",  // Path to img-3
            "/images/our-services-page/images-gallery/project-gallery-field-4.png",  // Path to img-4
            "/images/our-services-page/images-gallery/project-gallery-field-5.png",  // Path to img-5
            "/images/our-services-page/images-gallery/project-gallery-field-6.png",  // Path to img-6
            "/images/our-services-page/images-gallery/project-gallery-field-7.png",  // Path to img-7
            // Add more images if necessary
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






<StartJourney/>
<Footer/>
        </>
    )
}