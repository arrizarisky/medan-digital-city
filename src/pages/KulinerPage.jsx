import Hero from "@/components/sections/kuliner/Hero";
import KulinerSection from "@/components/sections/kuliner/Culinary";
import LegendarySpots from "@/components/sections/kuliner/LegendarySpots";
import CulinaryGuide from "@/components/sections/kuliner/CulinaryGuide";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GsapScrollReveal from "@/components/ui/gsap-scroll-reveal";
import { useLanguage } from "@/context/LanguageContext";

// Halaman Kuliner sekarang menggunakan sistem terjemahan manual content[lang]
export default function Kuliner() {
  const { lang } = useLanguage();

  return (
    <main>
      <Navbar />
      <Hero lang={lang} />
      <GsapScrollReveal>
        <LegendarySpots lang={lang} />
        <KulinerSection lang={lang} />
        <CulinaryGuide lang={lang} />
      </GsapScrollReveal>
      <Footer />
    </main>
  );
}
