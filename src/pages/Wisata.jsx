import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  WisataHero,
  DestinasiPopuler,
  KategoriWisata,
  PetaWisata,
} from '@/components/sections/wisata';

// ── Scroll Reveal Hook (sama dengan pattern di Budaya.jsx) ────
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);
  return ref;
}

// ── Page Component ────────────────────────────────────────────
export default function Wisata({ lang = 'id', setLang }) {
  const heroRef       = useScrollReveal({ threshold: 0.15 });
  const destinasiRef  = useScrollReveal();
  const kategoriRef   = useScrollReveal();
  const petaRef       = useScrollReveal();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter selection:bg-[#50652D] selection:text-white">
      {/* ── Scroll Reveal Styles ── */}
      <style>{`
        .reveal-up {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-up.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* ── Navbar ── */}
      <Navbar lang={lang} setLang={setLang} />

      {/* ── Page Sections ── */}
      <main className="overflow-hidden">
        <WisataHero       lang={lang} sectionRef={heroRef} />
        <DestinasiPopuler lang={lang} sectionRef={destinasiRef} />
        <KategoriWisata   lang={lang} sectionRef={kategoriRef} />
        <PetaWisata       lang={lang} sectionRef={petaRef} />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
