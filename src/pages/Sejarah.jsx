import { useEffect, useRef, useState } from 'react';
import { sejarahContent, landmark3DData } from '@/constants/sejarahData';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import bgPortrait from '@/assets/images/bg-potrait.webp';
import {
  SejarahHero,
  SejarahTimeline,
  SejarahTraditions,
  SejarahCalendar,
  SejarahLandmarks,
  SejarahCulinary,
  LandmarkModal
} from '@/components/sections/sejarah';
import { useLanguage } from '@/context/LanguageContext';

// Scroll Reveal Hook
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

export default function Sejarah() {
  const { lang } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [selectedLandmark, setSelectedLandmark] = useState(null);
  
  // Get content based on global language state
  const content = sejarahContent[lang];

  // Modal: body-scroll lock + Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setSelectedLandmark(null); };
    if (selectedLandmark) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [selectedLandmark]);

  // Parallax effect tracker
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create refs for sections to animate
  const heroRef = useScrollReveal({ threshold: 0.2 });
  const chronicleRef = useScrollReveal();
  const mosaicRef = useScrollReveal();
  const calendarRef = useScrollReveal();
  const landmarksRef = useScrollReveal();
  const culinaryRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-[#222] font-sans selection:bg-[#526344] selection:text-white overflow-x-hidden relative">
      
      {/* Dynamic CSS for scroll animations and modal */}
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
        .timeline-item {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .revealed .timeline-item {
          opacity: 1;
          transform: translateX(0);
        }
        .timeline-item:nth-child(1) { transition-delay: 100ms; }
        .timeline-item:nth-child(2) { transition-delay: 300ms; }
        .timeline-item:nth-child(3) { transition-delay: 500ms; }
        .timeline-item:nth-child(4) { transition-delay: 700ms; }
        
        @keyframes sweep {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(200%) skewX(12deg); }
        }
        @keyframes fadeInUpModal {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUpModal 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Layer 1 — bg-potrait.webp: fixed parallax */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${bgPortrait})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          opacity: 0.12,
        }}
      />

      {/* Layer 2 — Overlay putih ringan: menjaga kontras teks */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[#FDFDFC]/15" />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Content — notranslate karena sudah punya data manual [lang] */}
      <main className="overflow-hidden" translate="no">
        
        {/* Hero Section - Full Viewport 3D Carousel */}
        <SejarahHero 
          lang={lang}
          sectionRef={heroRef} 
        />

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-6 pt-8 pb-12 sm:pb-16">
          {/* Main Content Split: Timeline & Traditions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Chronicle (Timeline) */}
          <SejarahTimeline 
            content={content} 
            sectionRef={chronicleRef} 
          />

          {/* Right Column: Traditions & Calendar */}
          <section className="lg:col-span-7 space-y-16">
            <SejarahTraditions 
              content={content} 
              sectionRef={mosaicRef} 
            />
            <SejarahCalendar 
              content={content} 
              sectionRef={calendarRef} 
            />
          </section>
        </div>

        {/* Heritage Landmarks Section */}
        <div className="mt-20 sm:mt-28">
          <SejarahLandmarks 
            content={content}
            landmarks={landmark3DData}
            lang={lang}
            onLandmarkClick={setSelectedLandmark}
            sectionRef={landmarksRef}
          />
        </div>

        {/* Culinary Section */}
        <div className="mt-10 sm:mt-12">
          <SejarahCulinary 
            content={content} 
            sectionRef={culinaryRef} 
          />
        </div>
      </div>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Landmark Detail Modal */}
      <LandmarkModal 
        landmark={selectedLandmark}
        lang={lang}
        content={content}
        onClose={() => setSelectedLandmark(null)}
      />
    </div>
  );
}
