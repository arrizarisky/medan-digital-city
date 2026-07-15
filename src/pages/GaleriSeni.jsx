import React, { useEffect, useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import galeriSeniIstana from '@/assets/images/Budaya-Tradisi/galeri-seni-istana.png';
import { galeriItems, galeriCategories } from '@/constants/galeriData';
import { motion, AnimatePresence } from 'framer-motion';

export default function GaleriSeni({ lang, setLang }) {
  const [activeCategory, setActiveCategory] = useState('Semua Koleksi');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'Semua Koleksi') return galeriItems;
    return galeriItems.filter(
      (item) => item.category === activeCategory || item.koleksi === activeCategory
    );
  }, [activeCategory]);

  // Compute per-category counts
  const categories = useMemo(() => {
    return galeriCategories.map((name) => ({
      name,
      count:
        name === 'Semua Koleksi'
          ? galeriItems.length
          : galeriItems.filter((i) => i.category === name || i.koleksi === name).length,
    }));
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedItem]);

  return (
    <>
      <div className="bg-[#FAF9F5] text-[#1b1c1c] font-sans selection:bg-[#B2533E]/20 min-h-screen relative">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;600;700&family=Work+Sans:wght@400;500;600&display=swap');
        
        .pattern-bg {
            background-image: radial-gradient(circle at 2px 2px, rgba(30, 63, 32, 0.04) 1px, transparent 0);
            background-size: 32px 32px;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .font-display-lg { font-family: 'Noto Serif', serif; }
        .font-body-md, .font-body-lg { font-family: 'Work Sans', sans-serif; }
      `}</style>

      <div className="fixed inset-0 pattern-bg pointer-events-none z-0"></div>

      <div className="relative z-50">
        <Navbar lang={lang} setLang={setLang} />
      </div>

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="relative h-[85vh] w-full overflow-hidden flex items-end">
          <div className="absolute inset-0 z-0">
            <img alt="Heritage Architecture" className="w-full h-full object-cover brightness-75" src={galeriSeniIstana}/>
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-4 py-8 md:px-12 md:pb-24 md:pt-0 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-3xl"
              >
                <span className="inline-block px-4 py-1.5 bg-[#B2533E] text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4 rounded-full shadow-lg">Eksplorasi Kurasi Utama</span>
                <h1 className="font-display-lg text-4xl md:text-5xl lg:text-[84px] text-white leading-[1.1] mb-4 md:mb-6">Galeri Karya &<br/>Seni Pertunjukan</h1>
                <p className="font-body-lg text-white/80 max-w-xl border-l-2 border-[#B2533E] pl-4 md:pl-6 italic text-[14px] md:text-[18px]">
                    Sebuah jendela menuju kekayaan spiritual dan estetika Tanah Deli, dikurasi secara mendalam untuk melestarikan memori kolektif bangsa.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="max-w-[1400px] mx-auto px-8 pt-24 pb-16 flex flex-col lg:flex-row gap-16">
          {/* Side Navigation */}
          <motion.aside 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="sticky top-32">
              <h2 className="font-display-lg text-2xl font-bold text-[#1E3F20] mb-8 pb-4 border-b border-[#c1c8c2]">Kategori</h2>
              <ul className="space-y-6">
                {categories.map((cat, idx) => {
                  const isActive = activeCategory === cat.name;
                  return (
                    <li key={idx}>
                      <button
                        onClick={() => setActiveCategory(cat.name)}
                        className={`group flex items-center justify-between w-full text-left transition-all ${isActive ? 'text-[#1E3F20] font-bold' : 'text-[#1b1c1c]/50 hover:text-[#1E3F20]'}`}
                      >
                        <span className={`font-body-md text-[16px] ${isActive ? 'border-b-2 border-[#B2533E]' : ''}`}>{cat.name}</span>
                        <span className={`text-[12px] text-[#B2533E] ${isActive ? '' : 'opacity-60'}`}>[{cat.count < 10 ? `0${cat.count}` : cat.count}]</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-20 pt-10 border-t border-[#c1c8c2]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#B2533E] mb-4">Informasi Kurasi</p>
                <p className="font-body-md text-[16px] text-[#1b1c1c]/60 leading-relaxed italic">
                    Setiap item dalam galeri ini telah diverifikasi oleh dewan kebudayaan daerah untuk keaslian sejarahnya.
                </p>
              </div>
            </div>
          </motion.aside>

          {/* Dynamic Grid */}
          <div className="flex-grow">
            {filteredItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-[#1b1c1c]/40">
                <p className="font-display-lg text-2xl mb-2">Belum Ada Koleksi</p>
                <p className="font-body-md text-sm">Kategori ini belum memiliki karya yang terdaftar.</p>
              </div>
            ) : (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max grid-flow-row-dense"
              >
                <AnimatePresence>
                  {filteredItems.map((item, index) => {
                    const koleksiNum = String(item.id).padStart(2, '0');
                    
                    // Base classes with subtle green sage border glow on hover
                    const cardBaseClasses = "group cursor-pointer flex flex-col bg-white rounded-[2rem] border border-[#c1c8c2]/30 overflow-hidden transition-all duration-500 shadow-sm hover:shadow-[0_0_20px_rgba(95,111,82,0.25)] hover:border-[#5F6F52]/40";
                    
                    // Framer Motion Animation Properties (Fade up & 3D Tilt Hover)
                    const motionProps = {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, margin: "-20px" },
                      transition: { duration: 0.5, delay: (index % 3) * 0.1 },
                      whileHover: { y: -5, scale: 1.01, rotateX: 2, rotateY: -2 },
                      layout: true,
                      exit: { opacity: 0, scale: 0.9 },
                      onClick: () => setSelectedItem(item)
                    };

                    // ── Portrait Card (Tall, md:row-span-2) ──────────────────
                    if (item.cardType === 'portrait') {
                      return (
                        <motion.div key={item.id} {...motionProps} className={`md:row-span-2 ${cardBaseClasses}`}>
                          <div className="relative flex-grow min-h-[300px] overflow-hidden">
                            <img alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={item.image}/>
                            <div className="absolute top-6 left-6 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#1E3F20] uppercase tracking-widest rounded-full">Koleksi {koleksiNum}</div>
                          </div>
                          <div className="p-8 bg-white z-10">
                            <p className="text-[10px] text-[#B2533E] font-bold uppercase tracking-widest mb-1.5">{item.koleksi}</p>
                            <h3 className="font-display-lg text-xl font-bold text-[#1E3F20] mb-3 leading-tight">{item.title}</h3>
                            <p className="font-body-md text-[13px] text-[#1b1c1c]/70 leading-relaxed">{item.caption}</p>
                          </div>
                        </motion.div>
                      );
                    }

                    // ── Landscape Card (Wide, lg:col-span-2) ─────────────────
                    if (item.cardType === 'landscape') {
                      const imgLeft = item.imgSide === 'left';
                      return (
                        <motion.div key={item.id} {...motionProps} className={`lg:col-span-2 sm:flex-row ${cardBaseClasses}`}>
                          {/* Image side */}
                          <div className={`relative sm:w-3/5 min-h-[250px] overflow-hidden ${imgLeft ? 'rounded-t-[2rem] sm:rounded-none sm:rounded-l-[2rem]' : 'rounded-b-[2rem] sm:rounded-none sm:rounded-r-[2rem] order-1 sm:order-2'}`}>
                            <img alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={item.image}/>
                            <div className={`absolute top-6 ${imgLeft ? 'left-6' : 'right-6'} px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#1E3F20] uppercase tracking-widest rounded-full`}>Koleksi {koleksiNum}</div>
                          </div>
                          {/* Text side */}
                          <div className={`p-8 sm:w-2/5 flex flex-col justify-center bg-white z-10 ${imgLeft ? 'border-l border-[#c1c8c2]/10' : 'border-r border-[#c1c8c2]/10 order-2 sm:order-1'}`}>
                            <p className="text-[10px] text-[#B2533E] font-bold uppercase tracking-widest mb-1.5">{item.koleksi}</p>
                            <h3 className="font-display-lg text-2xl font-bold text-[#1E3F20] mb-3 leading-tight">{item.title}</h3>
                            <p className="font-body-md text-[14px] text-[#1b1c1c]/70 leading-relaxed italic">{item.caption}</p>
                          </div>
                        </motion.div>
                      );
                    }

                    // ── Square Card (1×1) ─────────────────────────────────────
                    return (
                      <motion.div key={item.id} {...motionProps} className={`col-span-1 ${cardBaseClasses}`}>
                        <div className="relative aspect-square overflow-hidden rounded-t-[2rem]">
                          <img alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={item.image}/>
                          <div className="absolute top-6 left-6 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#1E3F20] uppercase tracking-widest rounded-full">Koleksi {koleksiNum}</div>
                        </div>
                        <div className="p-6 bg-white z-10">
                          <p className="text-[10px] text-[#B2533E] font-bold uppercase tracking-widest mb-1.5">{item.koleksi}</p>
                          <h3 className="font-display-lg text-lg font-bold text-[#1E3F20] mb-2 leading-tight">{item.title}</h3>
                          <p className="font-body-md text-[13px] text-[#1b1c1c]/70 leading-relaxed line-clamp-3">{item.caption}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>

        {/* Load More Section */}
        <section className="flex flex-col items-center pb-32 pt-16">
          <div className="w-24 h-px bg-[#c1c8c2] mb-8"></div>
          <button className="group flex flex-col items-center gap-4 text-[#1E3F20] transition-all hover:scale-105">
            <span className="font-body-md text-[12px] font-bold uppercase tracking-[0.3em]">Muat Koleksi Lainnya</span>
            <div className="w-10 h-10 border border-[#1E3F20]/20 rounded-full flex items-center justify-center group-hover:bg-[#1E3F20] group-hover:shadow-[0_0_15px_rgba(30,63,32,0.3)] group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-[20px]">expand_more</span>
            </div>
          </button>
        </section>
      </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Pop-up Modal "Kisah Dibalik Karya" (Fixed Portal Overlay) */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] w-screen h-screen bg-neutral-900/70 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto overflow-x-hidden p-6 md:p-8 flex flex-col md:flex-row gap-6 text-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedItem(null)} 
                className="absolute top-4 right-4 z-10 p-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-800 rounded-full transition-colors flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
              
              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden rounded-xl shrink-0">
                <img src={selectedItem.image} alt={selectedItem.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="text-[12px] text-[#B2533E] font-bold uppercase tracking-[0.2em] mb-2">{selectedItem.koleksi}</p>
                <h2 className="font-display-lg text-3xl font-bold text-[#1E3F20] mb-4 leading-tight">{selectedItem.title}</h2>
                <div className="w-12 h-1 bg-[#B2533E] mb-6"></div>
                <p className="font-body-md text-base text-[#1E3F20] leading-relaxed font-semibold mb-4 italic border-l-4 border-[#5F6F52] pl-4">
                  "{selectedItem.caption}"
                </p>
                <p className="font-body-md text-[14px] text-[#1b1c1c]/80 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
