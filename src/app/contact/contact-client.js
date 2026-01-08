"use client";

import { useEffect, useMemo, useState } from "react";
import Banner from "@/components/home/Banner";
import styles from "./contact.module.css";
import Loader from "@/components/common/loader";
import Footer from "@/components/home/footer";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactClient() {
  const [loading, setLoading] = useState(true);

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const errors = useMemo(() => {
    const e = {};

    if (!values.fullName.trim()) e.fullName = "Full name is required.";
    else if (values.fullName.trim().length < 2) e.fullName = "Name is too short.";

    if (!values.email.trim()) e.email = "Email is required.";
    else if (!emailRegex.test(values.email.trim())) e.email = "Enter a valid email.";

    if (!values.phone.trim()) e.phone = "Phone number is required.";
    else if (!/^[0-9+\-\s]{7,15}$/.test(values.phone.trim()))
      e.phone = "Enter a valid phone number.";

    if (!values.subject.trim()) e.subject = "Please select a subject.";

    if (!values.message.trim()) e.message = "Message is required.";
    else if (values.message.trim().length < 10) e.message = "Message must be at least 10 characters.";

    return e;
  }, [values]);

  const isValid = Object.keys(errors).length === 0;

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setStatus({ type: "", msg: "" });
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    if (!isValid) {
      setStatus({ type: "error", msg: "Please fix the highlighted fields." });
      return;
    }

    try {
      setSubmitting(true);
      await new Promise((r) => setTimeout(r, 900));
      setStatus({ type: "success", msg: "Thanks! We received your message. We'll reply soon." });
      setValues({ fullName: "", email: "", phone: "", subject: "", message: "" });
      setTouched({});
    } catch (err) {
      setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <Loader />;

  return (
    <>
      <Banner
        titleLines={["Contact  with Us"]}
        brandText=""
        description="Your journey toward a well-built future begins here. Explore our projects crafted to meet your aspirations and standards."
        minHeight="70vh"
        contentMinHeight="70vh"
      />

     <section className={styles.section}>
  <div className="container py-5">
    <div className="row align-items-center gy-5 gx-lg-5">
      {/* LEFT */}
      <div className="col-12 col-lg-6">
        <div className={`${styles.left} pe-lg-4`}>
          <h2 className={styles.title}>
            <span className={styles.reveal1}>Want to</span>
            <span className={`${styles.blue} ${styles.reveal2}`}>Reach Us</span>
            <br />
            <span className={`${styles.blue} ${styles.reveal3}`}>Directly?</span>
          </h2>

          <p className={`${styles.desc} ${styles.fadeUp}`}>
            For property inquiries, site visits, or investment discussions, our team is here to assist you.
          </p>

          {/* ICON LINKS (Bootstrap responsive spacing) */}
          <div className={`${styles.iconLinks} mt-4`}>
            {/* Address */}
            <a
              className={`${styles.iconRow} d-flex align-items-start gap-3`}
              href="https://www.google.com/maps/search/?api=1&query=c%2Fo%20Shailendra%20Kumar%2C%20Village%20Bela%20Tola%20Madhupur%2C%20Neura%2C%20Danapur%2C%20Patna%2C%20Bihar%20-%20801113"
              target="_blank"
              rel="noreferrer"
            >
              <span className={`${styles.circleIcon} flex-shrink-0`}>
                <img
                  src="/images/icons/contact-icons/location.png"
                  alt="Location"
                  className={styles.iconImg}
                />
              </span>

              <span className={`${styles.iconText} flex-grow-1`}>
                c/o Shailendra Kumar, Village Bela Tola Madhupur, Neura, Danapur, Patna, Bihar - 801113.
              </span>
            </a>

            {/* Email */}
            <a
              className={`${styles.iconRow} d-flex align-items-start gap-3`}
              href="mailto:anantabhivrddhipvtltd@gmail.com"
            >
              <span className={`${styles.circleIcon} flex-shrink-0`}>
                <img
                  src="/images/icons/contact-icons/mail.png"
                  alt="Email"
                  className={styles.iconImg}
                />
              </span>

              <span className={`${styles.iconText} flex-grow-1`}>
                anantabhivrddhipvtltd@gmail.com
              </span>
            </a>

            {/* Phone */}
            <a
              className={`${styles.iconRow} d-flex align-items-start gap-3`}
              href="tel:+9185219622739"
            >
              <span className={`${styles.circleIcon} flex-shrink-0`}>
                <img
                  src="/images/icons/contact-icons/call.png"
                  alt="Phone"
                  className={styles.iconImg}
                />
              </span>

              <span className={`${styles.iconText} flex-grow-1`}>
                +91 85219622739
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="col-12 col-lg-6">
        <div className="d-flex justify-content-center justify-content-lg-end">
          <div className={styles.card}>
            {status.msg ? (
              <div
                className={`${styles.alert} ${
                  status.type === "success" ? styles.alertSuccess : styles.alertError
                }`}
                role="alert"
              >
                {status.msg}
              </div>
            ) : null}

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className="row g-2">
                <div className="col-12">
                  <label className={styles.label}>Full Name</label>
                  <input
                    className={`${styles.input} ${
                      touched.fullName && errors.fullName ? styles.inputError : ""
                    }`}
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter your full name"
                  />
                  {touched.fullName && errors.fullName ? (
                    <p className={styles.errorText}>{errors.fullName}</p>
                  ) : null}
                </div>

                <div className="col-12 col-md-6">
                  <label className={styles.label}>Email</label>
                  <input
                    className={`${styles.input} ${
                      touched.email && errors.email ? styles.inputError : ""
                    }`}
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                  />
                  {touched.email && errors.email ? (
                    <p className={styles.errorText}>{errors.email}</p>
                  ) : null}
                </div>

                <div className="col-12 col-md-6">
                  <label className={styles.label}>Phone</label>
                  <input
                    className={`${styles.input} ${
                      touched.phone && errors.phone ? styles.inputError : ""
                    }`}
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 9876543210"
                  />
                  {touched.phone && errors.phone ? (
                    <p className={styles.errorText}>{errors.phone}</p>
                  ) : null}
                </div>

                <div className="col-12">
                  <label className={styles.label}>Interested In</label>
                  <select
                    className={`${styles.select} ${
                      touched.subject && errors.subject ? styles.inputError : ""
                    }`}
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Please select</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Discussion">Project Discussion</option>
                    <option value="Support">Support</option>
                    <option value="Partnership">Partnership</option>
                  </select>

                  {touched.subject && errors.subject ? (
                    <p className={styles.errorText}>{errors.subject}</p>
                  ) : null}
                </div>

                <div className="col-12">
                  <label className={styles.label}>Message</label>
                  <textarea
                    className={`${styles.textarea} ${
                      touched.message && errors.message ? styles.inputError : ""
                    }`}
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Write your message..."
                    rows={4}
                  />
                  {touched.message && errors.message ? (
                    <p className={styles.errorText}>{errors.message}</p>
                  ) : null}
                </div>

                <div className="col-12">
                  <button className={styles.submit} disabled={submitting}>
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </>
  );
}
