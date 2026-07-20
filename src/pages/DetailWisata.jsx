import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { wisataDetailData } from '@/constants/wisataDetailData';
import { ArrowLeft, Navigation } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// ── Helper: warna badge ───────────────────────────────────────
function getBadgeBg(color) {
  const map = {
    '#50652D': 'bg-[#50652D]',
    '#B28A32': 'bg-[#B28A32]',
  };
  return map[color] || 'bg-[#50652D]';
}

// ── 1. HERO INFO BOXES (melayang di bawah hero) ───────────────
function HeroInfoBoxes({ data, lang }) {
  const boxes = [
    { label: { id: 'Dibangun', en: 'Built' }, value: data.builtYear },
    { label: { id: 'Arsitek', en: 'Architect' }, value: data.architect },
    { label: { id: 'Alamat', en: 'Address' }, value: data.shortAddress },
    { label: { id: 'Tiket Masuk', en: 'Entrance Ticket' }, value: data.ticketPrice },
  ];

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-5xl px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {boxes.map((box, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-center"
          >
            <p className="font-inter text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">
              {box.label[lang]}
            </p>
            <p className="font-inter text-white text-sm font-semibold leading-snug line-clamp-2">
              {box.value[lang]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 2. SECTION ATTRACTIONS (list bernomor) ────────────────────
function AttractionSection({ data, lang }) {
  if (!data.attractions || data.attractions.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
      {/* Header */}
      <div className="mb-14">
        <span className="inline-block bg-[#F4DBA4] text-[#8C6D23] px-4 py-1.5 rounded-full font-inter text-xs font-bold uppercase tracking-wider mb-4">
          {lang === 'id' ? 'DAYA TARIK UTAMA' : 'MAIN ATTRACTIONS'}
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1E3F20] tracking-tight max-w-2xl">
          {data.attractionSectionTitle[lang]}
        </h2>
        <p className="font-inter text-[#717973] text-lg mt-3 max-w-2xl leading-relaxed">
          {data.attractionSectionSubtitle[lang]}
        </p>
      </div>

      {/* Grid 2 kolom: List kiri + Gambar kanan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Sisi Kiri — Numbered list */}
        <div className="space-y-10">
          {data.attractions.map((item, i) => (
            <div key={i} className="flex gap-5">
              {/* Nomor bulatan emas */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A843] to-[#B28A32] flex items-center justify-center shadow-md">
                <span className="font-playfair text-white font-bold text-base leading-none">
                  {i + 1}
                </span>
              </div>
              <div className="pt-1">
                <h3 className="font-inter text-[#1E3F20] text-lg font-bold mb-2 leading-snug">
                  {item.title[lang]}
                </h3>
                <p className="font-inter text-[#5A5F5B] text-base leading-[1.8] font-light">
                  {item.description[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sisi Kanan — Gambar interior + caption quote */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
            <img
              src={data.interiorImage}
              alt={data.name[lang]}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Caption quote box di sudut bawah */}
          {data.architectureQuote && (
            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-5 shadow-xl">
              <p className="font-playfair text-[#1E3F20] text-sm leading-relaxed italic">
                {data.architectureQuote[lang]}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── 3. GALERI ASIMETRIS ───────────────────────────────────────
function GallerySection({ data, lang }) {
  if (!data.gallery || data.gallery.length === 0) return null;

  const images = data.gallery;

  return (
    <section className="bg-[#F5F3EE] py-20 md:py-28 border-t border-zinc-200/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header tanpa tombol kapsul */}
        <div className="mb-12">
          <div>
            <span className="inline-block bg-[#F4DBA4] text-[#8C6D23] px-4 py-1.5 rounded-full font-inter text-xs font-bold uppercase tracking-wider mb-4">
              {data.galleryCaption[lang]}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1E3F20] tracking-tight">
              {data.galleryCaption[lang]} — <span className="text-[#B28A32]">{data.name[lang]}</span>
            </h2>
            <p className="font-inter text-[#717973] text-lg mt-3 max-w-xl leading-relaxed">
              {data.gallerySubtitle[lang]}
            </p>
          </div>
        </div>

        {/* Grid Asimetris */}
        <AsymmetricGallery images={images} />
      </div>
    </section>
  );
}

function AsymmetricGallery({ images }) {
  const count = images.length;

  if (count === 0) return null;

  // 1 gambar
  if (count === 1) {
    return (
      <div className="rounded-3xl overflow-hidden aspect-[16/7]">
        <img src={images[0]} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
      </div>
    );
  }

  // 2 gambar
  if (count === 2) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div key={i} className="rounded-3xl overflow-hidden aspect-[4/3]">
            <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </div>
    );
  }

  // 3 gambar
  if (count === 3) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-3xl overflow-hidden md:h-[520px]">
          <img src={images[0]} alt="Gallery 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="flex flex-col gap-4">
          {images.slice(1).map((img, i) => (
            <div key={i} className="rounded-3xl overflow-hidden flex-1 min-h-[200px]">
              <img src={img} alt={`Gallery ${i + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 4+ gambar — asimetris: 1 vertikal besar kiri + kolom kanan (1 atas memanjang + 2 bawah berdampingan)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Gambar vertikal besar kiri */}
      <div className="rounded-3xl overflow-hidden md:h-[520px]">
        <img src={images[0]} alt="Gallery 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
      </div>
      {/* Kolom kanan */}
      <div className="flex flex-col gap-4 md:h-[520px]">
        {/* Gambar atas memanjang */}
        <div className="rounded-3xl overflow-hidden flex-[1.2]">
          <img src={images[1]} alt="Gallery 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        {/* 2 gambar bawah berdampingan */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {images.slice(2, 4).map((img, i) => (
            <div key={i} className="rounded-3xl overflow-hidden">
              <img src={img} alt={`Gallery ${i + 3}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── 4. SECTION PETA + PETUNJUK ARAH ──────────────────────────
function PetaSection({ data, lang }) {
  return (
    <section className="py-20 md:py-28 border-t border-zinc-200/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-10">
          <span className="inline-block bg-[#F4DBA4] text-[#8C6D23] px-4 py-1.5 rounded-full font-inter text-xs font-bold uppercase tracking-wider mb-4">
            {lang === 'id' ? 'NAVIGASI' : 'NAVIGATION'}
          </span>
          <h2 className="font-playfair text-4xl font-bold text-[#1E3F20] tracking-tight">
            {lang === 'id' ? 'Cara Menuju ke Sana' : 'How to Get There'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Sisi Kiri — Petunjuk teks + tombol */}
          <div className="space-y-5">
            <h3 className="font-inter text-[#1E3F20] font-bold text-lg">
              {lang === 'id' ? 'Petunjuk Arah' : 'Directions'}
            </h3>
            <ol className="space-y-4">
              {(data.directionsSteps[lang] || []).map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1E3F20] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="font-inter text-[#5A5F5B] text-sm leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
            <a
              href={data.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-white border border-[#1E3F20] text-[#1E3F20] hover:bg-[#1E3F20] hover:text-white font-inter text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
            >
              <Navigation className="w-4 h-4" />
              {lang === 'id' ? 'Order Google Maps' : 'Open Google Maps'}
            </a>
          </div>

          {/* Sisi Kanan — Embed peta (2 kolom span) */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl border border-zinc-100 aspect-[16/9]">
            <iframe
              title={`Peta ${data.name[lang]}`}
              src={data.mapUrl}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 5. DESTINASI TERDEKAT ─────────────────────────────────────
function DestinasiterdekatSection({ currentSlug, nearbyDestinations, lang }) {
  if (!nearbyDestinations || nearbyDestinations.length === 0) return null;

  const nearbyItems = nearbyDestinations
    .filter((slug) => slug !== currentSlug)
    .slice(0, 3)
    .map((slug) => wisataDetailData[slug])
    .filter(Boolean);

  if (nearbyItems.length === 0) return null;

  return (
    <section className="bg-[#F5F3EE] py-20 md:py-28 border-t border-zinc-200/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="inline-block bg-[#F4DBA4] text-[#8C6D23] px-4 py-1.5 rounded-full font-inter text-xs font-bold uppercase tracking-wider mb-4">
            {lang === 'id' ? 'REKOMENDASI' : 'RECOMMENDATIONS'}
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1E3F20] tracking-tight">
            {lang === 'id' ? 'Destinasi Bersejarah Terdekat' : 'Nearby Historic Destinations'}
          </h2>
          <p className="font-inter text-[#717973] text-lg mt-3 max-w-xl leading-relaxed">
            {lang === 'id' 
              ? 'Lengkapi perjalanan Anda dengan mengunjungi destinasi-destinasi ikonik lainnya di Kota Medan.' 
              : 'Complete your journey by visiting other iconic destinations in Medan City.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyItems.map((item) => (
            <Link
              key={item.slug}
              to={`/wisata/${item.slug}`}
              className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-zinc-100"
            >
              {/* Gambar */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.heroImage}
                  alt={item.name[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Konten */}
              <div className="p-6">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-3"
                  style={{ backgroundColor: item.badgeColor }}
                >
                  {item.badge[lang]}
                </span>
                <h3 className="font-playfair text-xl font-bold text-[#1E3F20] leading-snug mb-2 group-hover:text-[#B28A32] transition-colors">
                  {item.name[lang]}
                </h3>
                <p className="font-inter text-[#717973] text-sm leading-relaxed line-clamp-2">
                  {item.subtitle[lang]}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[#1E3F20] font-inter text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  <span>{lang === 'id' ? 'Lihat Detail' : 'See Details'}</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────
export default function DetailWisata() {
  const { slug } = useParams();
  const data = wisataDetailData[slug];
  const { lang } = useLanguage();

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!data) return <Navigate to="/wisata" replace />;

  return (
    <div className="bg-[#FAF9F5] font-inter text-[#1b1c1c] min-h-screen">
      <Navbar />

      {/* ── 1. HERO FULL SCREEN ── */}
      <section className="relative h-screen w-full overflow-hidden flex items-end">
        <img
          src={data.heroImage}
          alt={data.name[lang]}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient: gelap di bawah untuk readability info box */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

        {/* Tombol kembali */}
        <Link
          to="/wisata"
          className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'id' ? 'Wisata' : 'Tourism'}
        </Link>

        {/* Hero Text — di atas info boxes */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-36 md:pb-40">
          <span
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white"
            style={{ backgroundColor: data.badgeColor }}
          >
            {data.badge[lang]}
          </span>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-3 drop-shadow-md">
            {data.name[lang]}
          </h1>
          <p className="font-inter text-white/75 text-lg md:text-xl font-light max-w-2xl">
            {data.subtitle[lang]}
          </p>
        </div>

        {/* Info boxes melayang di bawah */}
        <HeroInfoBoxes data={data} lang={lang} />
      </section>

      {/* ── 2. SECTION DESKRIPSI ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block bg-[#F4DBA4] text-[#8C6D23] px-4 py-1.5 rounded-full font-inter text-xs font-bold uppercase tracking-wider mb-6">
            {lang === 'id' ? 'TENTANG DESTINASI' : 'ABOUT THE DESTINATION'}
          </span>
          {data.description[lang].map((para, i) => (
            <p key={i} className="font-inter text-[#414844] text-base md:text-lg leading-[1.9] font-light mb-5 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ── 3. SECTION ATTRACTIONS ── */}
      <div className="border-t border-zinc-200/50 bg-white">
        <AttractionSection data={data} lang={lang} />
      </div>

      {/* ── 4. GALERI ASIMETRIS ── */}
      <GallerySection data={data} lang={lang} />

      {/* ── 5. PETA & PETUNJUK ARAH ── */}
      <PetaSection data={data} lang={lang} />

      {/* ── 6. DESTINASI TERDEKAT ── */}
      <DestinasiterdekatSection
        currentSlug={slug}
        nearbyDestinations={data.nearbyDestinations}
        lang={lang}
      />

      <Footer />
    </div>
  );
}
