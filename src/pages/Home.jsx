import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import QuickFacts from "@/components/sections/QuickFacts";
import Destination from "@/components/sections/Destination";
import Potential from "@/components/sections/Potential";
import Explore from "@/components/sections/Explore";

export default function Home({ lang, setLang }) {
  return (
    <main>
      <Navbar lang={lang} setLang={setLang} />
      <Hero />
      <QuickFacts />
      <Destination />
      <Potential />
      <Explore />
      <Footer />
    </main>
  );
}
