"use client";

import styles from "./whatsapp-icon.module.css"; // Import CSS module

export default function WhatsAppIcon() {
  return (
    <a
      href="https://wa.me/+918521962739"  // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappIcon} // Use the CSS module class
    >
      <img src="/images/icons/whatsapp-icon.png" alt="WhatsApp" height={50} width={50} />
    </a>
  );
}
