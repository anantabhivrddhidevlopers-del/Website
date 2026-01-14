
"use client";

import { useEffect,useState } from "react";

import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import Footer from "@/components/home/footer";

import Stats from "@/components/home/stats";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import WhyChoose from "@/components/home/WhyChoose";
import FAQSection from "@/components/home/FAQSection";
import Loader from "@/components/common/loader";
import Testimonials from "@/components/home/Testimonials";
import StartJourney from "@/components/home/StartJourney";

export default function HomePage() 

{

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1200);
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <Loader />;
  return (

    <>

    <Banner/>
    <Stats/>
    <AboutUs/>
    <FeaturedProperties />
    <WhyChoose/>
    <FAQSection/>
    <Testimonials/>
    <StartJourney/>
      <Footer/>

    </>
  )
}