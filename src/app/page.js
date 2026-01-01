import AboutUs from "@/components/home/AboutUs";
import Banner from "@/components/home/Banner";
import Footer from "@/components/home/footer";
import Stats from "@/components/home/stats";
import FeaturedProperties from "@/components/home/FeaturedProperties";
import WhyChoose from "@/components/home/WhyChoose";
import FAQSection from "@/components/home/FAQSection";
import Testimonials from "@/components/home/Testimonials";
import StartJourney from "@/components/home/StartJourney";

export default function HomePage() {
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