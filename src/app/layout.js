// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import ScrollToTop from "@/components/common/ScrollToTop"; // ✅ add this

export const metadata = {
  title: "Anantabhivrddhi",
  description: "Real Estate Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        {children}
        <ScrollToTop /> {/* ✅ scroll-to-top button globally */}
      </body>
    </html>
  );
} 
