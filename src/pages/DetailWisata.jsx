import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { wisataDetailData } from '@/constants/wisataDetailData';
import { ArrowLeft, MapPin, Navigation } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// UTILITY: Defensively extract 4 hero metric values
// Priority 1: top-level keys  |  Priority 2: info[] array scan
// ─────────────────────────────────────────────────────────────
function extractMetrics(data) {
  const find = (label) =>
    data.info?.find((i) => i.label.toLowerCase().includes(label.toLowerCase()))?.value ?? '—';

  return [
    {
      label: 'Dibangun',
      value: data.builtYear ?? find('dibangun') ?? find('tahun'),
    },
    {
      label: 'Arsitek',
      value: data.architect ?? find('arsitek') ?? '—',
    },
    {
      label: 'Alamat',
      value: data.shortAddress ?? find('lokasi'),
    },
    {
      label: 'Tiket Masuk',
      value: data.ticketPrice ?? find('tiket'),
    },
  ];
}

// ─────────────────────────────────────────────────────────────
// SECTION 1 — HERO + FLOATING INFO BAR
// ─────────────────────────────────────────────────────────────
function HeroSection({ data }) {
  const metrics = extractMetrics(data);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src={data.heroImage}
        alt={data.name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.35) 100%)',
        }}
      />

      {/* Back button */}
      <Link
        to="/wisata"
        className="absolute left-6 top-24 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-colors hover:text-white md:left-12"
      >
        <ArrowLeft className="h-4 w-4" />
        Wisata
      </Link>

      {/* Hero text */}
      <div className="absolute bottom-44 left-0 right-0 z-10 md:bottom-48">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
            style={{ backgroundColor: data.badgeColor }}
          >
            {data.badge}
          </span>
          <h1
            className="mb-3 font-playfair text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-md md:text-7xl lg:text-8xl"
          >
            {data.name}
          </h1>
          <p className="max-w-2xl font-inter text-lg font-light text-white/75 md:text-xl">
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* Floating info bar */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-center backdrop-blur-md"
              >
                <p className="mb-1 font-inter text-[10px] font-bold uppercase tracking-widest text-white/60">
                  {m.label}
                </p>
                <p className="line-clamp-2 font-inter text-sm font-semibold leading-snug text-white">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION 2 — DESCRIPTION + ATTRACTIONS (2-COL)
// ─────────────────────────────────────────────────────────────
function AttractionSection({ data }) {
  return (
    <section className="bg-[#FAF9F5] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">

        {/* Section label */}
        <div className="mb-14">
          <span className="mb-4 inline-block rounded-full bg-[#F4DBA4] px-4 py-1.5 font-inter text-xs font-bold uppercase tracking-wider text-[#8C6D23]">
            DAYA TARIK UTAMA
          </span>
          <h2 className="font-playfair text-4xl font-bold leading-tight tracking-tight text-[#1E3F20] md:text-5xl">
            {data.attractionSectionTitle}
          </h2>
          <p className="mt-3 max-w-2xl font-inter text-lg leading-relaxed text-[#717973]">
            {data.attractionSectionSubtitle}
          </p>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">

          {/* LEFT — description paragraphs + numbered attractions */}
          <div className="space-y-8">
            {/* Description */}
            <div className="space-y-5">
              {data.description.map((para, i) => (
                <p
                  key={i}
                  className="font-inter text-base font-light leading-[1.9] text-[#414844] md:text-lg"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Numbered attraction list */}
            {data.attractions?.length > 0 && (
              <ol className="space-y-8 pt-2">
                {data.attractions.map((item, i) => (
                  <li key={i} className="flex gap-5">
                    {/* Circled number using badgeColor */}
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-playfair text-base font-bold text-white shadow-md"
                      style={{ backgroundColor: data.badgeColor }}
                    >
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <h3 className="mb-1.5 font-inter text-[17px] font-bold leading-snug text-[#1E3F20]">
                        {item.title}
                      </h3>
                      <p className="font-inter text-base font-light leading-[1.8] text-[#5A5F5B]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>

          {/* RIGHT — interior image + quote card */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl aspect-[3/4]">
              <img
                src={data.interiorImage}
                alt={`Interior ${data.name}`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Absolute quote card at bottom */}
            {data.architectureQuote && (
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white p-5 shadow-2xl">
                <p className="font-playfair text-sm italic leading-relaxed text-[#1E3F20]">
                  {data.architectureQuote}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION 3 — ADAPTIVE GALLERY ("Pesona Warisan")
// ─────────────────────────────────────────────────────────────
function GalleryGrid({ images }) {
  const count = images.length;
  if (count === 0) return null;

  // ── 1 image ──
  if (count === 1) {
    return (
      <div className="overflow-hidden rounded-3xl">
        <img
          src={images[0]}
          alt="Gallery 1"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 aspect-[16/7]"
        />
      </div>
    );
  }

  // ── 2 images — equal side by side ──
  if (count === 2) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-3xl aspect-[4/3]">
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>
    );
  }

  // ── 3 images — 1 tall left + 2 stacked right ──
  if (count === 3) {
    return (
      <div className="grid h-[540px] grid-cols-2 gap-4">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={images[0]}
            alt="Gallery 1"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-4">
          {images.slice(1).map((img, i) => (
            <div key={i} className="flex-1 overflow-hidden rounded-3xl">
              <img
                src={img}
                alt={`Gallery ${i + 2}`}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── 4+ images — editorial asymmetric:
  //    LEFT: 1 tall vertical card
  //    RIGHT: 1 wide top + 2 small bottom
  // ──
  return (
    <div className="grid h-[540px] grid-cols-1 gap-4 md:grid-cols-2">
      {/* Left: tall vertical */}
      <div className="overflow-hidden rounded-3xl">
        <img
          src={images[0]}
          alt="Gallery 1"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Right: top-wide + 2 bottom */}
      <div className="flex flex-col gap-4">
        {/* Top: wide landscape */}
        <div className="h-[280px] overflow-hidden rounded-3xl">
          <img
            src={images[1]}
            alt="Gallery 2"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        {/* Bottom: 2 square thumbnails */}
        <div className="grid flex-1 grid-cols-2 gap-4">
          {images.slice(2, 4).map((img, i) => (
            <div key={i} className="overflow-hidden rounded-3xl">
              <img
                src={img}
                alt={`Gallery ${i + 3}`}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GallerySection({ data }) {
  if (!data.gallery?.length) return null;

  return (
    <section className="border-t border-zinc-200/50 bg-[#F5F3EE] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-12">
          <span className="mb-4 inline-block rounded-full bg-[#F4DBA4] px-4 py-1.5 font-inter text-xs font-bold uppercase tracking-wider text-[#8C6D23]">
            {data.galleryCaption}
          </span>
          <h2 className="font-playfair text-4xl font-bold tracking-tight text-[#1E3F20] md:text-5xl">
            {data.galleryCaption}{' '}
            <span style={{ color: data.badgeColor }}>— {data.name}</span>
          </h2>
          <p className="mt-3 max-w-xl font-inter text-lg leading-relaxed text-[#717973]">
            {data.gallerySubtitle}
          </p>
        </div>

        <GalleryGrid images={data.gallery} />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// SECTION 4 — MAP & DIRECTIONS
// ─────────────────────────────────────────────────────────────
function MapSection({ data }) {
  return (
    <section className="border-t border-zinc-200/50 bg-[#FAF9F5] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-12">
          <span className="mb-4 inline-block rounded-full bg-[#F4DBA4] px-4 py-1.5 font-inter text-xs font-bold uppercase tracking-wider text-[#8C6D23]">
            NAVIGASI
          </span>
          <h2 className="font-playfair text-4xl font-bold tracking-tight text-[#1E3F20]">
            Cara Menuju ke Sana
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
          {/* LEFT — numbered directions + CTA */}
          <div className="space-y-6">
            <h3 className="font-inter text-lg font-bold text-[#1E3F20]">Petunjuk Arah</h3>
            <ol className="space-y-4">
              {(data.directionsSteps ?? []).map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-inter text-xs font-bold text-white"
                    style={{ backgroundColor: data.badgeColor }}
                  >
                    {i + 1}
                  </span>
                  <p className="font-inter text-sm leading-relaxed text-[#5A5F5B]">{step}</p>
                </li>
              ))}
            </ol>

            <a
              href={data.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 font-inter text-sm font-semibold px-5 py-2.5 transition-colors hover:text-white"
              style={{
                borderColor: data.badgeColor,
                color: data.badgeColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = data.badgeColor;
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = data.badgeColor;
              }}
            >
              <Navigation className="h-4 w-4" />
              Buka Google Maps
            </a>
          </div>

          {/* RIGHT — iframe map (2-col span) */}
          <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-xl lg:col-span-2 aspect-[16/9]">
            <iframe
              title={`Peta ${data.name}`}
              src={data.mapUrl}
              className="h-full w-full"
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

// ─────────────────────────────────────────────────────────────
// SECTION 5 — NEARBY DESTINATIONS
// ─────────────────────────────────────────────────────────────
function NearbySection({ currentSlug, nearbyDestinations }) {
  if (!nearbyDestinations?.length) return null;

  const nearby = nearbyDestinations
    .filter((slug) => slug !== currentSlug)
    .slice(0, 3)
    .map((slug) => wisataDetailData[slug])
    .filter(Boolean);

  if (!nearby.length) return null;

  return (
    <section className="border-t border-zinc-200/50 bg-[#F5F3EE] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="mb-12">
          <span className="mb-4 inline-block rounded-full bg-[#F4DBA4] px-4 py-1.5 font-inter text-xs font-bold uppercase tracking-wider text-[#8C6D23]">
            REKOMENDASI
          </span>
          <h2 className="font-playfair text-4xl font-bold tracking-tight text-[#1E3F20] md:text-5xl">
            Destinasi Bersejarah Terdekat
          </h2>
          <p className="mt-3 max-w-xl font-inter text-lg leading-relaxed text-[#717973]">
            Lengkapi perjalanan Anda dengan destinasi ikonik lainnya di Kota Medan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nearby.map((dest) => (
            <Link
              key={dest.slug}
              to={`/wisata/${dest.slug}`}
              className="group block overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Thumbnail */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Body */}
              <div className="p-6">
                <span
                  className="mb-3 inline-block rounded-full px-3 py-1 font-inter text-xs font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: dest.badgeColor }}
                >
                  {dest.badge}
                </span>
                <h3 className="font-playfair text-xl font-bold leading-snug text-[#1E3F20] transition-colors group-hover:text-[#B28A32]">
                  {dest.name}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-[#717973]">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <p className="font-inter text-sm leading-relaxed">{dest.shortAddress}</p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 font-inter text-sm font-semibold text-[#1E3F20] transition-all duration-200 group-hover:gap-2.5">
                  <span>Lihat Detail</span>
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// NOT FOUND FALLBACK
// ─────────────────────────────────────────────────────────────
function DestinationNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#FAF9F5] px-6 text-center">
      <span className="text-7xl">🗺️</span>
      <h1 className="font-playfair text-4xl font-bold text-[#1E3F20]">
        Destinasi Tidak Ditemukan
      </h1>
      <p className="max-w-md font-inter text-lg text-[#717973]">
        Halaman yang Anda cari tidak tersedia atau slug URL tidak valid.
      </p>
      <Link
        to="/wisata"
        className="rounded-full bg-[#1E3F20] px-8 py-3 font-inter font-semibold text-white transition-colors hover:bg-[#152c16]"
      >
        ← Kembali ke Wisata
      </Link>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default function DetailWisata({ lang, setLang }) {
  const { slug } = useParams();
  const data = wisataDetailData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] font-inter text-[#1b1c1c]">
        <Navbar lang={lang} setLang={setLang} />
        <DestinationNotFound />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F5] font-inter text-[#1b1c1c]">
      <Navbar lang={lang} setLang={setLang} />

      <main>
        {/* 1. Hero + floating info bar */}
        <HeroSection data={data} />

        {/* 2. Description + numbered attractions + interior photo */}
        <AttractionSection data={data} />

        {/* 3. Adaptive gallery grid */}
        <GallerySection data={data} />

        {/* 4. Map & directions */}
        <MapSection data={data} />

        {/* 5. Nearby destinations */}
        <NearbySection
          currentSlug={slug}
          nearbyDestinations={data.nearbyDestinations}
        />
      </main>

      <Footer />
    </div>
  );
}
