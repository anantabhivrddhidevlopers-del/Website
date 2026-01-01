"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menu.module.css";


export default function MenuItems() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.navGlass}`}>
      <div className="container">
        <Link href="/" className={`navbar-brand d-flex align-items-center gap-2 ${styles.brand}`}>
          <Image src="/images/home-page/header-logo.png" alt="Logo" width={182} height={40} priority />
        
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${styles.navLinks}`}>
            <li className="nav-item">
              <Link href="/" className={`nav-link ${styles.navLink}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${styles.navLink}`}>About Us</Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${styles.navLink}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="dropdown-item" href="/projects">All Projects</Link></li>
                <li><Link className="dropdown-item" href="/projects/ongoing">Ongoing</Link></li>
                <li><Link className="dropdown-item" href="/projects/completed">Completed</Link></li>
              </ul>
            </li>
          </ul>

          <div className="d-flex">
            <Link href="/contact" className={`btn btn-light fw-semibold px-3 ${styles.contactBtn}`}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
