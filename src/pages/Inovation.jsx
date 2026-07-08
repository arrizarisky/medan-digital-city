import Hero from "@/components/sections/inovasi/Hero";
import DigitalisasiLayanan from "@/components/sections/inovasi/DigitalisasiLayanan";
import InfrastrukturModern from "@/components/sections/inovasi/InfrastrukturModern";
import IndustriKomersial from "@/components/sections/inovasi/IndustriKomersial";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Inovation() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DigitalisasiLayanan />
      <InfrastrukturModern />
      <IndustriKomersial />
      <Footer />
    </main>
  );
}
