import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { etnisDetailData } from '@/constants/etnisData';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import iconPantun from '@/assets/icons/paper.svg';

export default function DetailEtnis({ lang, setLang }) {
  const { slug } = useParams();
  const data = etnisDetailData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="bg-[#FAF9F5] font-inter min-h-screen">
        <Navbar lang={lang} setLang={setLang} />
        <div className="flex flex-col items-center justify-center min-h-[80vh] gap-6 px-6 text-center">
          <span className="text-7xl">🏛️</span>
          <h1 className="font-playfair text-4xl font-bold text-[#1E3F20]">Etnis Tidak Ditemukan</h1>
          <p className="font-inter text-[#717973] text-lg max-w-md">Halaman detail untuk etnis ini belum tersedia atau slug URL tidak valid.</p>
          <Link to="/budaya" className="bg-[#1E3F20] text-white px-8 py-3 rounded-full font-inter font-medium hover:bg-[#152c16] transition-all">
            ← Kembali ke Budaya
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F5] font-inter text-[#1b1c1c] min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* ═══════════════════════════════════════════════ */}
      {/* 1. HERO HEADER MEGAH */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center">
        <img 
          src={data.heroImage} 
          alt={data.heroTitle} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        
        {/* Back button */}
        <Link 
          to="/budaya" 
          className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 text-white/80 hover:text-white font-inter text-sm font-medium transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Budaya
        </Link>

        {/* Text Container (Wajib Terpusat) */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center mt-12">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tight drop-shadow-md text-center">
            {data.heroTitle}
          </h1>
          <p className="font-inter text-white/90 text-lg md:text-xl max-w-3xl font-light leading-relaxed drop-shadow text-center">
            {data.heroSubtitle}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* 2. SECTION WARISAN SEJARAH (Asimetris & Monokrom) */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Sisi Kiri: Teks */}
          <div className="order-2 md:order-1 pt-4">
            {/* Tag Badge Kapsul Emas Solid */}
            <span className="inline-block bg-[#F4DBA4] text-[#8C6D23] px-4 py-1.5 rounded-full font-inter text-xs font-bold uppercase tracking-wider mb-5">
              {data.sejarah.tag}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1E3F20] mb-8 leading-[1.1] tracking-tight">
              {data.sejarah.title}
            </h2>
            
            <div className="space-y-5 mb-10">
              {data.sejarah.paragraphs.map((p, i) => (
                <p key={i} className="font-inter text-[#414844] text-base md:text-lg leading-[1.8] font-light">
                  {p}
                </p>
              ))}
            </div>

            <blockquote className="border-l-4 border-[#B28A32] pl-6 py-2 bg-[#FDFCF8] rounded-r-lg">
              <p className="font-playfair text-[#1E3F20] text-lg italic leading-relaxed">
                {data.sejarah.quote}
              </p>
            </blockquote>
          </div>

          {/* Sisi Kanan: Foto Arsip Monokrom */}
          <div className="order-1 md:order-2 relative w-full">
            <div className="rounded-3xl overflow-hidden aspect-[3/4] md:h-[500px] w-full">
              <img 
                src={data.sejarah.archiveImage} 
                alt={data.sejarah.archiveCaption} 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* 3. PILAR KEBUDAYAAN (Asimetris 65% - 35%) */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-[#FAF9F5] pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1E3F20] mb-5 tracking-tight">
              {data.pilarBudaya.title}
            </h2>
            <p className="font-inter text-[#414844] text-lg max-w-2xl mx-auto font-light leading-relaxed">
              {data.pilarBudaya.subtitle}
            </p>
          </div>

          {/* BARIS ATAS: Grid Kustom lg:grid-cols-3 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Kolom Kiri (65% / 2 cols): Gambar Baju Adat */}
            <div className="lg:col-span-2 group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[400px]">
              <img 
                src={data.pilarBudaya.baju.image} 
                alt={data.pilarBudaya.baju.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                  {data.pilarBudaya.baju.title}
                </h3>
                <p className="font-inter text-white/90 text-sm md:text-base leading-relaxed max-w-xl font-light">
                  {data.pilarBudaya.baju.description}
                </p>
              </div>
            </div>

            {/* Kolom Kanan (35% / 1 col): Info Minimalis Tari */}
            <div className="lg:col-span-1 bg-[#FDFCF8] rounded-3xl p-8 border border-[#EBEBE6] shadow-sm relative flex flex-col lg:h-[400px]">
              <div className="text-white mb-8 bg-[#B28A32] shadow-md w-14 h-14 rounded-2xl flex items-center justify-center">
                {/* Ikon Topeng Kebudayaan */}
                <img src={data.pilarBudaya.tari.icon} alt="Ikon Budaya" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <span className="text-[#8C6D23] text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Tradisi</span>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#1E3F20] leading-tight mb-4">
                  {data.pilarBudaya.tari.title}
                </h3>
                <p className="font-inter text-[#717973] text-sm leading-relaxed">
                  {data.pilarBudaya.tari.description}
                </p>
              </div>
            </div>
          </div>

          {/* BARIS BAWAH: Pantun Tradition (Asimetris 35% - 65%) */}
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="w-full md:w-[35%] bg-[#FDFCF8] rounded-3xl p-8 border border-[#EBEBE6] shadow-sm relative flex flex-col">
              <div className="mb-6 bg-[#F4DBA4]/20 w-12 h-12 rounded-2xl flex items-center justify-center">
                <img src={iconPantun} alt="Ikon Pantun" className="w-6 h-6 object-contain" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#1E3F20] mb-4">
                {data.pilarBudaya.pantun.title}
              </h3>
              <p className="font-inter text-[#717973] text-sm leading-relaxed">
                {data.pilarBudaya.pantun.description}
              </p>
            </div>
            
            <div className="w-full md:w-[65%] bg-[#E1E2DC] rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center">
              <p className="font-playfair text-[#5F6F52] italic text-xl md:text-2xl font-medium leading-relaxed mb-4">
                "{data.pilarBudaya.pantun.quoteText}"
              </p>
              <p className="font-inter text-[#4E4F4A] uppercase tracking-wider font-semibold text-xs md:text-sm mb-6">
                — {data.pilarBudaya.pantun.quoteAuthor}
              </p>
              <div className="flex flex-col items-center">
                <span className="font-inter text-[#5F6F52] italic text-sm md:text-base font-medium mb-1">
                  Artinya :
                </span>
                <p className="font-inter text-[#5F6F52] italic text-sm md:text-base text-center max-w-xl">
                  "{data.pilarBudaya.pantun.quoteMeaning}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* 4. CITA RASA KERAJAAN (Kuliner Portrait Rata) */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-[#FAF9F5] py-20 md:py-28 border-t border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Visual Kiri: 2 Gambar Portrait Vertikal Asimetris */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-[2rem] overflow-hidden aspect-[3/4] md:-translate-y-8 md:shadow-lg transition-transform duration-500">
                <img 
                  src={data.kuliner.images[0]} 
                  alt="Kuliner Tradisional 1" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <div className="rounded-[2rem] overflow-hidden aspect-[3/4] md:translate-y-6 md:shadow-xl transition-transform duration-500">
                <img 
                  src={data.kuliner.images[1]} 
                  alt="Kuliner Tradisional 2" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            </div>

            {/* List Kanan: Dengan Bullet Kotak Oranye */}
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1E3F20] mb-6 leading-[1.1] tracking-tight">
                {data.kuliner.title}
              </h2>
              <p className="font-inter text-[#414844] text-base leading-[1.8] font-light mb-10">
                {data.kuliner.description}
              </p>

              <div className="flex flex-col gap-6">
                {data.kuliner.menus.map((menu, i) => (
                  <div key={i} className="flex flex-col gap-2 pb-6 border-b border-zinc-200/60 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      {/* Kustom Elemen Bullet */}
                      <div className="w-7 h-7 bg-[#f0c08b] text-white rounded-md flex items-center justify-center flex-shrink-0 shadow-sm">
                        {menu.icon ? (
                          <img src={menu.icon} alt="Icon Makanan" className="w-4 h-4 object-contain" />
                        ) : (
                          <span className="text-[10px] font-bold">✖</span>
                        )}
                      </div>
                      <h4 className="font-inter text-[#1E3F20] text-lg font-bold">{menu.name}</h4>
                    </div>
                    <p className="font-inter text-[#717973] text-sm leading-relaxed pl-10">{menu.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ */}
      {/* 5. IKON ARSITEKTUR */}
      {/* ═══════════════════════════════════════════════ */}
      <section className="bg-[#FAF9F5] py-20 md:py-28 border-t border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Header Row Horizontal */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1E3F20] tracking-tight mb-4">
                {data.arsitektur.title}
              </h2>
              <p className="font-inter text-[#717973] text-lg leading-relaxed">
                {data.arsitektur.subtitle}
              </p>
            </div>
            {/* Link diletakkan sejajar horizontal melalui justify-between */}
            <Link 
              to="/sejarah" 
              className="font-inter text-sm font-bold text-[#1E3F20] transition-colors flex items-center gap-2 shrink-0 group hover:text-[#B28A32]"
            >
              LIHAT SEMUA
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.arsitektur.items.map((bangunan, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-zinc-100 group">
                <div className="relative h-72 md:h-80 overflow-hidden p-3">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                    <img 
                      src={bangunan.image} 
                      alt={bangunan.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="px-8 pb-8 pt-4">
                  <h3 className="font-playfair text-2xl font-bold text-[#1E3F20] mb-3 tracking-tight">{bangunan.title}</h3>
                  <p className="font-inter text-[#717973] text-sm leading-relaxed">
                    {bangunan.description}
                  </p>
                  <div className="mt-6 flex gap-2">
                    <span className="bg-[#F4DBA4]/40 text-[#8C6D23] px-3 py-1 rounded-full font-inter text-[10px] font-bold uppercase tracking-wider">
                      {bangunan.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
