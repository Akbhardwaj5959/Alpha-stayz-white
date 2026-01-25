import CountsDetails from "@/components/CountsDetails";
import CtaSection from "@/components/CtaSection";
import FeaturedSuites from "@/components/FeaturedSuites";
import HeroSection from "@/components/Hero-Section";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-black overflow-x-hidden">
      
     <HeroSection />
     
      <WhyChooseUs />

      <FeaturedSuites />

      <CountsDetails />

      <Testimonials />
      <CtaSection />

    </main>
  );
}