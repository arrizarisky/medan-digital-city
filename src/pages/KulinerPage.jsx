import Hero from "@/components/sections/kuliner/Hero";
import KulinerSection from "@/components/sections/kuliner/Culinary";
import LegendarySpots from "@/components/sections/kuliner/LegendarySpots";
import CulinaryGuide from "@/components/sections/kuliner/CulinaryGuide";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GsapScrollReveal from "@/components/ui/gsap-scroll-reveal";

export default function Kuliner() {
  return (
    <main>
      <Navbar />
      <Hero />
      <GsapScrollReveal>
        <LegendarySpots />
        <KulinerSection />
        <CulinaryGuide />
      </GsapScrollReveal>
      <Footer />
    </main>
  );
}
