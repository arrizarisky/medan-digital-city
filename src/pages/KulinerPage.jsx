import Hero from "@/components/sections/kuliner/Hero";
import KulinerSection from "@/components/sections/kuliner/Culinary";
import LegendarySpots from "@/components/sections/kuliner/LegendarySpots";
import CulinaryGuide from "@/components/sections/kuliner/CulinaryGuide";
import Navbar from "@/components/Navbar";

export default function Kuliner() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LegendarySpots />
      <KulinerSection />
      <CulinaryGuide />
    </main>
  );
}
