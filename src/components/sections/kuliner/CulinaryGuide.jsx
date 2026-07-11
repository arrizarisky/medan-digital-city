import { useState } from "react";
import { guideConfig } from "@/constants/guideData";
import { ArrowRight, Utensils, ShieldCheck, Coffee } from "lucide-react"; // Pastikan lucide-react terinstall

// Pemetaan icon berdasarkan ID Tab
const tabIcons = {
  "oleh-oleh": <Utensils size={18} />,
  "halal": <ShieldCheck size={18} />,
  "etika": <Coffee size={18} />,
};

export default function CulinaryGuide() {
  const { header, title, subtitle, items } = guideConfig;
  
  // Set item pertama sebagai default active tab
  const [activeTab, setActiveTab] = useState(items[0].id);
  const activeContent = items.find((item) => item.id === activeTab);

  return (
    <section 
      data-gsap-section 
      className="relative w-full bg-[#EFEFE9] py-24 md:py-32 overflow-hidden text-[#2f381d]"
    >
      {/* Definisi Animasi Tailwind Khusus untuk Transisi Konten */}
      <style>{`
        @keyframes fade-slide-up {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-content {
          animation: fade-slide-up 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
        
        {/* Header Section */}
        <div data-gsap-reveal className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#B28A32]/30 bg-[#B28A32]/10 text-[#B28A32] text-xs font-bold tracking-widest uppercase mb-6">
            {header}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-montserrat tracking-tight mb-6">
            {title}
          </h2>
          <p className="text-base md:text-lg text-neutral-600 font-inter leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Kolom Kiri: Menu Tab Navigasi */}
          <div data-gsap-reveal className="lg:col-span-4 flex flex-col gap-3">
            {items.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-4 text-left p-5 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#50652D] text-white shadow-lg translate-x-2"
                      : "bg-white/60 hover:bg-white text-[#50652D] border border-[#C5C8B9]/30 hover:shadow-md"
                  }`}
                >
                  <div className={`shrink-0 flex items-center justify-center size-10 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-[#50652D]/10 text-[#50652D]"}`}>
                    {tabIcons[item.id]}
                  </div>
                  <span className="font-montserrat font-bold text-lg flex-1">
                    {item.tabLabel}
                  </span>
                  {isActive && <ArrowRight size={20} className="opacity-70" />}
                </button>
              );
            })}
          </div>

          {/* Kolom Kanan: Panel Konten Dinamis */}
          <div data-gsap-reveal className="lg:col-span-8">
            {/* Kunci (key) di sini sangat penting agar React memicu animasi ulang saat activeTab berubah */}
            <div 
              key={activeTab} 
              className="bg-white rounded-[32px] overflow-hidden shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-[#C5C8B9]/30 animate-content"
            >
              {/* Gambar Cover */}
              <div className="h-[240px] md:h-[300px] w-full relative overflow-hidden bg-neutral-200">
                <img 
                  src={activeContent.image} 
                  alt={activeContent.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-2 drop-shadow-sm">
                    {activeContent.title}
                  </h3>
                </div>
              </div>

              {/* Konten Teks & Highlight */}
              <div className="p-8 md:p-10 flex flex-col gap-8">
                <p className="text-base md:text-lg text-neutral-600 font-inter leading-relaxed">
                  {activeContent.desc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeContent.highlights.map((highlight, idx) => (
                    <div key={idx} className="bg-[#FAFAF4] p-5 rounded-2xl border border-[#C5C8B9]/20">
                      <h4 className="font-bold font-montserrat text-[#2f381d] mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B28A32]" />
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-neutral-600 font-inter leading-relaxed">
                        {highlight.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 border-t border-[#C5C8B9]/30 pt-8">
                  <a 
                    href={activeContent.actionPath}
                    className="inline-flex items-center gap-2 bg-[#B28A32] hover:bg-[#967325] text-white px-8 py-4 rounded-full font-bold font-inter text-sm tracking-wide transition-colors"
                  >
                    {activeContent.actionText} <ArrowRight size={18} />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}