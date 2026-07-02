import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import QuickFacts from "@/components/sections/QuickFacts";
import Destination from "@/components/sections/Destination";
import Potential from "@/components/sections/Potential";
import Explore from "@/components/sections/Explore";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <QuickFacts />
      <Destination />
      <Potential />
      <Explore />
      <Footer />
    </main>
  );
}
