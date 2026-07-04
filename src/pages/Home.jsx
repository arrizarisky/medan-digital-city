import Hero from "@/components/sections/home/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickFacts from "@/components/sections/home/QuickFacts";
import Destination from "@/components/sections/home/Destination";
import Potential from "@/components/sections/home/Potential";
import Explore from "@/components/sections/home/Explore";
import CTA from "@/components/sections/home/CTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuickFacts />
      <Destination />
      <Potential />
      <Explore />
      <CTA />
      <Footer />
    </main>
  );
}
