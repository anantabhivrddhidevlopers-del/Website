"use client";

import { useEffect, useMemo, useState } from "react";
import Banner from "@/components/home/Banner";
import styles from "../privacy-policy/privacy.module.css";
import StartJourney from "@/components/home/StartJourney";
import Footer from "@/components/home/footer";
import Loader from "@/components/common/loader";





export default function TermsConditionsClient() {
const [loading, setLoading] = useState(true);


    
  const items = useMemo(
    () => [
      { id: "about", label: "About Anantabhivrddhi" },
      { id: "acceptance", label: "Acceptance of Terms" },
      { id: "eligibility", label: "Eligibility & Use of Services" },
      { id: "merchant", label: "Merchant Responsibilities" },
      { id: "white-label", label: "White-Label Services" },
      { id: "fees", label: "Fees & Settlement" },
      { id: "ip", label: "Intellectual Property" },
      { id: "liability", label: "Limitation of Liability" },
      { id: "data", label: "Data Protection & Privacy" },
      { id: "suspension", label: "Suspension & Termination" },
      { id: "changes", label: "Changes to Terms" },
      { id: "contact", label: "Contact Us" },
    ],
    []
  );

  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { root: null, rootMargin: "-20% 0px -70% 0px", threshold: 0.01 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;


  return (
    <>
      <Banner
        titleLines={["Terms and Conditions"]}
        brandText=""
        minHeight="70vh"
        contentMinHeight="70vh"
      />

      <section className={styles.section}>
        <div className="container py-5">
          <div className="row g-4">
            {/* LEFT */}
            <div className="col-12 col-lg-4 col-xl-3">
              <div className={styles.leftColFix}>
                <div className={styles.stickyWrap}>
                  <div className={styles.sideCard}>
                    <nav className={styles.sideNav}>
                      {items.map((it) => (
                        <a
                          key={it.id}
                          href={`#${it.id}`}
                          onClick={scrollTo(it.id)}
                          className={`${styles.sideLink} ${
                            activeId === it.id ? styles.active : ""
                          }`}
                        >
                          {it.label}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-12 col-lg-8 col-xl-9">
              <div className={styles.contentCard}>
                <div id="about" className={styles.block}>
                  <h2 className={styles.h2}>Terms and Conditions</h2>
                  <p className={styles.p}>
                    Welcome to Anantabhivrddhi Developers Private Limited. These Terms and
                    Conditions govern your access to and use of our website and services.
                    By accessing or using our website, you agree to be bound by these Terms.
                    If you do not agree, please discontinue use immediately.
                  </p>
                </div>

                <div id="acceptance" className={styles.block}>
                  <h3 className={styles.h3}>1. Acceptance of Terms</h3>
                  <p className={styles.p}>
                    By accessing or using the website or services, you confirm that you
                    have read, understood, and agree to comply with these Terms and all
                    applicable laws and regulations.
                  </p>
                </div>

                <div id="eligibility" className={styles.block}>
                  <h3 className={styles.h3}>2. Eligibility & Use of Services</h3>
                  <p className={styles.p}>
                    You must be legally capable of entering into a binding agreement to use
                    our services. You agree to provide accurate information and use the
                    website only for lawful purposes.
                  </p>
                </div>

                <div id="merchant" className={styles.block}>
                  <h3 className={styles.h3}>3. Merchant Responsibilities</h3>
                  <ul className={styles.ul}>
                    <li>Provide accurate business/contact information when requested.</li>
                    <li>Ensure compliance with applicable laws and industry regulations.</li>
                    <li>Maintain confidentiality of any credentials provided to you.</li>
                  </ul>
                </div>

                <div id="white-label" className={styles.block}>
                  <h3 className={styles.h3}>4. White-Label Services</h3>
                  <p className={styles.p}>
                    If white-label services are offered, branding and configurations will be
                    provided as per agreed terms. You remain responsible for your end-user
                    interactions and compliance requirements.
                  </p>
                </div>

                <div id="fees" className={styles.block}>
                  <h3 className={styles.h3}>5. Fees & Settlement</h3>
                  <p className={styles.p}>
                    Fees, charges, and settlement timelines (if applicable) will be communicated
                    separately or as part of a service agreement. You agree to pay all applicable
                    fees and taxes associated with the services.
                  </p>
                </div>

                <div id="ip" className={styles.block}>
                  <h3 className={styles.h3}>6. Intellectual Property</h3>
                  <p className={styles.p}>
                    All content, including text, graphics, logos, and designs, are the intellectual
                    property of Anantabhivrddhi Developers Private Limited and may not be copied,
                    reproduced, or distributed without prior written consent.
                  </p>
                </div>

                <div id="liability" className={styles.block}>
                  <h3 className={styles.h3}>7. Limitation of Liability</h3>
                  <p className={styles.p}>
                    We are not liable for any direct or indirect loss arising from the use of this
                    website or reliance on its content. Users are advised to verify information
                    independently where necessary.
                  </p>
                </div>

                <div id="data" className={styles.block}>
                  <h3 className={styles.h3}>8. Data Protection & Privacy</h3>
                  <p className={styles.p}>
                    Your use of the website is also subject to our Privacy Policy. By using our
                    services, you consent to collection and use of information as described in the
                    Privacy Policy.
                  </p>
                </div>

                <div id="suspension" className={styles.block}>
                  <h3 className={styles.h3}>9. Suspension & Termination</h3>
                  <p className={styles.p}>
                    We may suspend or terminate access to our website or services if we believe
                    you have violated these Terms or applicable laws, or for security/operational
                    reasons.
                  </p>
                </div>

                <div id="changes" className={styles.block}>
                  <h3 className={styles.h3}>10. Changes to Terms</h3>
                  <p className={styles.p}>
                    We may modify these Terms at any time. Updated Terms will be posted on this
                    page with a revised date. Continued use of our services constitutes acceptance
                    of the updated Terms.
                  </p>
                </div>

                <div id="contact" className={styles.block}>
                  <h3 className={styles.h3}>11. Contact Us</h3>
                  <p className={styles.p}>
                    For questions about these Terms and Conditions, please contact us:
                  </p>
                  <p className={styles.p}>
                    <a className={styles.link} href="mailto:anantabhivrddhipvtltd@gmail.com">
                      anantabhivrddhipvtltd@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* /RIGHT */}
          </div>
        </div>
      </section>
      <StartJourney/>
      <Footer/>
    </>
  );
}
