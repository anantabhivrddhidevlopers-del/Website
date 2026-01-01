"use client";

import { useState } from "react";
import Banner from "@/components/home/Banner";
import styles from "./contact.module.css";
import Footer from "@/components/home/footer";

export default function ContactClient() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: replace with your API call
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) })

      await new Promise((r) => setTimeout(r, 700));
      e.currentTarget.reset();
      alert("Submitted! We will reach you soon.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Banner
        titleLines={["Contact Us"]}
        brandText=""
        description="Your journey toward a well-built future begins here. Explore our projects crafted to meet your aspirations and standards."
        minHeight="70vh"
        contentMinHeight="70vh"
      />

      {/* Section like your reference image */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* LEFT */}
            <div className={styles.left}>
              <h2 className={styles.title}>
                Want to <span className={styles.blue}>Reach Us</span>
                <br />
                <span className={styles.blue}>Directly?</span>
              </h2>

              <p className={styles.desc}>
                For inquiries, technical support or partnership discussions, our team will respond
                promptly.
              </p>

              <a className={styles.emailBtn} href="mailto:anantabhivrdhhipvtltd@gmail.com">
               anantabhivrdhhipvtltd@gmail.com
              </a>
            </div>

            {/* RIGHT */}
            <div className={styles.card}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label className={styles.label}>Name</label>
                  <input className={styles.input} name="name" placeholder="Your name" required />
                </div>

                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label className={styles.label}>Phone</label>
                    <input className={styles.input} name="phone" placeholder="+91 XXXXXXXXXX" />
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Email</label>
                    <input
                      className={styles.input}
                      name="email"
                      placeholder="you@gmail.com"
                      type="email"
                      required
                    />
                  </div>
                </div>

                <div className={styles.row2}>
                  <div className={styles.field}>
                    <label className={styles.label}>Country</label>
                    <select className={styles.select} name="country" defaultValue="">
                      <option value="" disabled>
                        Select country
                      </option>
                      <option>India</option>
                      <option>UAE</option>
                      <option>USA</option>
                      <option>UK</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label}>Business</label>
                    <select className={styles.select} name="business" defaultValue="">
                      <option value="" disabled>
                        Select business
                      </option>
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Business Website</label>
                  <input className={styles.input} name="website" placeholder="www.yoursite.com" />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Message*</label>
                  <textarea
                    className={styles.textarea}
                    name="message"
                    placeholder="Message"
                    rows={5}
                    required
                  />
                </div>

                <button className={styles.submit} type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
