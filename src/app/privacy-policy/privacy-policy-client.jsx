"use client";

import { useEffect, useMemo, useState } from "react";
import Banner from "@/components/home/Banner";
import StartJourney from "@/components/home/StartJourney";
import Footer from "@/components/home/footer";
import Loader from "@/components/common/loader";
import styles from "./privacy.module.css";

export default function PrivacyPolicyClient() {


const [loading, setLoading] = useState(true);

 

    const items = useMemo(
        () => [
            { id: "introduction", label: "Introduction" },
            { id: "info-we-collect", label: "1. Information We Collect" },
            { id: "how-we-use", label: "2. How We Use Your Information" },
            { id: "disclosure", label: "3. Disclosure of Your Information" },
            { id: "security", label: "4. Security of Your Information" },
            { id: "cookies", label: "5. Cookies & Tracking Technologies" },
            { id: "updates", label: "6. Updates to This Policy" },
            { id: "contact", label: "7. Contact Us" },
        ],
        []
    );

    const [activeId, setActiveId] = useState("introduction");

    // ✅ highlight active section while scrolling
    useEffect(() => {
        const sections = items
            .map((i) => document.getElementById(i.id))
            .filter(Boolean);

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
                titleLines={["Privacy Policy"]}
                brandText=""
                minHeight="70vh"
                contentMinHeight="70vh"
            />

            {/* ✅ BODY */}
            <section className={styles.section}>
                <div className="container py-5">
                    <div className="row g-4">

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
                                                    className={`${styles.sideLink} ${activeId === it.id ? styles.active : ""
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


                        {/* RIGHT: Content */}
                        <div className="col-12 col-lg-8 col-xl-9">
                            <div className={styles.contentCard}>
                                {/* Introduction */}
                                <div id="introduction" className={styles.block}>
                                    <h2 className={styles.h2}>Introduction</h2>
                                    <p className={styles.p}>
                                        This Privacy Policy is governed by and subject to the Terms and Conditions of Anantabhivrddhi Developers Private Limited (“Company”, “we”, “our”, “us”). This policy becomes effective from the date a user accesses, registers on, or interacts with our website or services.
                                    </p>
                                </div>

                                {/* 1 */}
                                <div id="info-we-collect" className={styles.block}>
                                    <h3 className={styles.h3}>1. Information We Collect</h3>
                                    <p className={styles.p}>
                                        When you register on our website, use our services, or contact us, we may collect personal data that can identify you, including but not limited to:

                                    </p>
                                    <ul className={styles.ul}>
                                        <li>Full Name</li>
                                        <li>Email Address</li>
                                        <li>Phone Number</li>
                                    </ul>
                                </div>

                                {/* 2 */}
                                <div id="how-we-use" className={styles.block}>
                                    <h3 className={styles.h3}>2. How We Use Your Information</h3>
                                    <ul className={styles.ul}>

                                        <li>Respond to inquiries and provide requested information</li>
                                        <li>Improve our services, website content, and customer experience</li>
                                        <li>Send project updates, offers, or relevant communication</li>
                                        <li>Maintain internal records and ensure regulatory compliance</li>
                                    </ul>
                                </div>

                                {/* 3 */}
                                <div id="disclosure" className={styles.block}>
                                    <h3 className={styles.h3}>3. Disclosure of Your Information</h3>
                                    <p className={styles.p}>
                                        Your personal information may be shared only with authorized employees, representatives, or trusted service providers who are contractually obligated to maintain confidentiality and use the information solely for service-related purposes.
                                        <br />
                                        Personal information will not be disclosed to third parties without your prior consent, except where required by law or regulatory authorities. Non-personal, aggregated data may be shared for analytical or business purposes.
                                    </p>
                                </div>

                                {/* 4 */}
                                <div id="security" className={styles.block}>
                                    <h3 className={styles.h3}>4. Security of Your Information</h3>
                                    <p className={styles.p}>
                                        We take reasonable technical and organizational measures to safeguard personal information against unauthorized access, misuse, or disclosure. Any information displayed publicly will only be done with user consent.
                                    </p>
                                </div>

                                {/* 5 */}
                                <div id="cookies" className={styles.block}>
                                    <h3 className={styles.h3}>5. Cookies & Tracking Technologies</h3>
                                    <p className={styles.p}>
                                        To enhance user experience, our website may use cookies and similar technologies to collect non-personal information such as browser type, IP address, and site usage patterns. Users may choose to disable cookies through their browser settings.
                                    </p>
                                </div>

                                {/* 6 */}
                                <div id="updates" className={styles.block}>
                                    <h3 className={styles.h3}>6. Updates to This Policy</h3>
                                    <p className={styles.p}>
                                     We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated “Last Modified” date. Continued use of our services indicates acceptance of the updated policy.
                                    </p>
                                </div>

                                {/* 7 */}
                                <div id="contact" className={styles.block}>
                                    <h3 className={styles.h3}>7. Contact Us</h3>
                                    <p className={styles.p}>
                                        If you have questions about this Privacy Policy, contact us at:
                                    </p>
                                    <p className={styles.p}>
                                        <a className={styles.link} href="mailto:anantabhivrddhipvtltd@gmail.com">
                                            anantabhivrddhipvtltd@gmail.com
                                        </a>
                                    </p>
                                    <p className={styles.p}>
                                        By using our website and services, you acknowledge and accept the terms of this Privacy Policy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <StartJourney/>
            <Footer/>
        </>
    );
}
