import { useEffect, useRef } from 'react';
import { budayaContent } from '@/constants/budayaData';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  BudayaHero,
  MosaikEtnis,
  SeniTariMusik,
  KalenderBudaya,
  SorotanBudaya
} from '@/components/sections/budaya';
import bgPattern from '@/assets/images/heroImage.svg';
import bgPortrait from '@/assets/images/bg-potrait.webp';

function useScrollReveal(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);
  return ref;
}

export default function Budaya({ lang = 'id', setLang }) {
  const heroRef = useScrollReveal({ threshold: 0.2 });
  const mosaikRef = useScrollReveal();
  const seniRef = useScrollReveal();
  const kalenderRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-[#222] font-sans selection:bg-[#526344] selection:text-white relative">
      <style>{`
        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-up.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Layer 1 — bg-potrait.webp: fixed parallax, sangat samar */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${bgPortrait})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          opacity: 0.07,
        }}
      />

      {/* Layer 2 — Batik/Lace Pattern: di atas foto, lebih tipis */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: '400px', backgroundRepeat: 'repeat' }}
      />

      <Navbar lang={lang} setLang={setLang} />

      <main className="overflow-hidden relative z-10">
        <BudayaHero lang={lang} sectionRef={heroRef} />
        <MosaikEtnis lang={lang} sectionRef={mosaikRef} />
        <SeniTariMusik lang={lang} sectionRef={seniRef} />
        <KalenderBudaya lang={lang} sectionRef={kalenderRef} />
        <SorotanBudaya lang={lang} />
      </main>

      <Footer />
    </div>
  );
}
