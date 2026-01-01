"use client";

import Banner from "@/components/home/Banner";
import style from "./about.module.css";
import AboutUs from "@/components/home/AboutUs";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonials from "@/components/home/Testimonials";
import StartJourney from "@/components/home/StartJourney";
import Footer from "@/components/home/footer";
export default function AboutPageClient() {
  return (
    <>
     <Banner
  titleLines={["About Us"]}
  brandText=""
  description="Your journey toward a well-built future begins here. Explore our projects crafted to meet your aspirations and standards."
  minHeight="70vh"
  contentMinHeight="70vh"
/>
   <AboutUs/>
   <WhyChoose/>
   <Testimonials/>
   <StartJourney/>
   <Footer/>
    </>
  );
}
