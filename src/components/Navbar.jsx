import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { navConfig } from "@/constants/NavData"; 
import { globe, search } from "@/assets/icons";
import Logo from "@/assets/logo/Logo_Kota_Medan.webp";

// ── INDEX KONTEN GLOBAL ──────────────────────────────────────
const globalContentIndex = [
  // ── Wisata & Destinasi ──
  { title: 'Masjid Raya Al-Mashun', category: 'Wisata Sejarah', path: '/wisata/mesjid-raya', keywords: 'masjid raya al-mashun religi arsitektur kesultanan deli mesjid' },
  { title: 'Istana Maimun', category: 'Wisata Sejarah', path: '/wisata/istana-maimun', keywords: 'istana maimun kesultanan deli sultan melayu kerajaan bersejarah' },
  { title: 'Tjong A Fie Mansion', category: 'Wisata Sejarah', path: '/wisata/tjong-afie', keywords: 'tjong a fie mansion tionghoa museum bersejarah saudagar kesawan' },
  { title: 'Graha Maria Velangkanni', category: 'Wisata Religi', path: '/wisata/graha-maria', keywords: 'graha maria velangkanni gereja katolik india tamil ziarah religi' },
  { title: 'Taman Cadika Pramuka', category: 'Wisata Alam', path: '/wisata/cadika', keywords: 'taman cadika pramuka alam hijau danau rekreasi keluarga johor' },
  { title: 'Museum Negeri Sumatera Utara', category: 'Wisata Edukasi', path: '/wisata/museum', keywords: 'museum negeri sumatera utara artefak koleksi budaya sejarah edukasi' },

  // ── Budaya & Etnis ──
  { title: 'Budaya Melayu Deli', category: 'Etnis & Budaya', path: '/budaya/etnis/melayu', keywords: 'melayu deli kesultanan tari zapin songket baju kurung pantun budaya' },
  { title: 'Budaya Batak', category: 'Etnis & Budaya', path: '/budaya/etnis/batak', keywords: 'batak toba karo simalungun mandailing ulos gondang tari tortor dalihan' },
  { title: 'Budaya Tionghoa', category: 'Etnis & Budaya', path: '/budaya/etnis/tionghoa', keywords: 'tionghoa imlek barongsai cap go meh tjong a fie kesawan vihara' },
  { title: 'Budaya India Tamil', category: 'Etnis & Budaya', path: '/budaya/etnis/india', keywords: 'india tamil deepavali thaipusam kampung madras kuil bharatanatyam rempah' },
  { title: 'Budaya Jawa Deli', category: 'Etnis & Budaya', path: '/budaya/etnis/jawa', keywords: 'jawa deli kuda lumping gamelan wayang batik pecel pujakesuma' },
  { title: 'Budaya Minangkabau', category: 'Etnis & Budaya', path: '/budaya/etnis/minangkabau', keywords: 'minangkabau minang randang rendang tari piring rumah gadang merantau' },

  // ── Seni & Galeri ──
  { title: 'Tari Tortor', category: 'Seni Pertunjukan', path: '/galeri-seni', keywords: 'tari tortor batak tradisional spiritual ritual galeri seni' },
  { title: 'Mangalahat Horbo', category: 'Ritual Adat', path: '/galeri-seni', keywords: 'mangalahat horbo ritual batak kerbau syukur upacara adat' },
  { title: 'Gordang Sambilan', category: 'Seni Musik', path: '/galeri-seni', keywords: 'gordang sambilan sembilan gendang mandailing musik sakral' },
  { title: 'Tari Serampang Dua Belas', category: 'Seni Pertunjukan', path: '/galeri-seni', keywords: 'tari serampang dua belas melayu deli cinta pernikahan galeri' },
  { title: 'Ulos Batak', category: 'Kriya & Tekstil', path: '/galeri-seni', keywords: 'ulos batak kain tenun tangan tradisional doa warisan budaya' },
  { title: 'Galeri Karya & Seni Pertunjukan', category: 'Galeri', path: '/galeri-seni', keywords: 'galeri seni pertunjukan koleksi karya budaya medan' },

  // ── Event & Kalender ──
  { title: 'Tahun Baru Imlek 2026', category: 'Festival Budaya', path: '/kalender-budaya', keywords: 'imlek tahun baru cina barongsai lampion kesawan festival' },
  { title: 'Ramadhan Fair 2026', category: 'Festival Religi & Kuliner', path: '/kalender-budaya', keywords: 'ramadhan fair bazar takjil kuliner masjid raya islami' },
  { title: 'Karnaval Deepavali', category: 'Festival Budaya', path: '/kalender-budaya', keywords: 'deepavali karnaval cahaya india kampung madras festival' },
  { title: 'Festival Bunga & Buah', category: 'Festival Kota', path: '/kalender-budaya', keywords: 'festival bunga buah lapangan merdeka pawai karo agrikultur' },
  { title: 'Gelar Melayu Serumpun', category: 'Festival Tradisi', path: '/kalender-budaya', keywords: 'gelar melayu serumpun istana maimun budaya tradisi' },
  { title: 'Kalender Budaya 2026', category: 'Agenda Kota', path: '/kalender-budaya', keywords: 'kalender budaya 2026 event agenda kota medan semua acara' },

  // ── Sejarah ──
  { title: 'Sejarah Kota Medan', category: 'Sejarah', path: '/sejarah', keywords: 'sejarah medan kesultanan deli 1590 belanda tembakau kolonial kemerdekaan' },
  { title: 'Menara Air Tirtanadi', category: 'Landmark Sejarah', path: '/sejarah', keywords: 'menara air tirtanadi 1908 landmark bersejarah colonial belanda' },
  { title: 'Gedung London Sumatra', category: 'Landmark Sejarah', path: '/sejarah', keywords: 'gedung london sumatra lonsum 1906 kolonial inggris kesawan perkebunan' },
  { title: 'Pos Bloc Medan', category: 'Landmark Sejarah', path: '/sejarah', keywords: 'pos bloc kantor pos besar 1911 snuyf kolonial bersejarah kreatif' },

  // ── Kuliner ──
  { title: 'Kuliner Khas Medan', category: 'Kuliner', path: '/kuliner', keywords: 'kuliner medan bika ambon lontong mie aceh soto durian ucok masakan' },

  // ── Peta & Navigasi ──
  { title: 'Peta Eksplorasi Medan', category: 'Peta Interaktif', path: '/peta-eksplorasi', keywords: 'peta eksplorasi interaktif lokasi navigate wisata medan gis' },
];

function getResultCategory(result) {
  const iconMap = {
    'Wisata Sejarah': '🏛️',
    'Wisata Religi': '🕌',
    'Wisata Alam': '🌿',
    'Wisata Edukasi': '🎓',
    'Etnis & Budaya': '🎭',
    'Seni Pertunjukan': '💃',
    'Seni Musik': '🥁',
    'Ritual Adat': '🙏',
    'Kriya & Tekstil': '🧵',
    'Galeri': '🖼️',
    'Festival Budaya': '🎊',
    'Festival Religi & Kuliner': '🌙',
    'Festival Kota': '🌸',
    'Festival Tradisi': '🎶',
    'Agenda Kota': '📅',
    'Sejarah': '📜',
    'Landmark Sejarah': '🏗️',
    'Kuliner': '🍜',
    'Peta Interaktif': '🗺️',
  };
  return iconMap[result.category] || '🔍';
}

const MergedShape = ({
  fill = "#ffffff",
  children,
  style: containerStyle,
  className = "",
  ...props
}) => (
  <div
    className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
    style={{ position: "absolute", width: 90, height: 38, ...containerStyle }}
    {...props}
  >
    <div style={{ position: "absolute", left: 30, top: 3, width: 30, height: 35, backgroundColor: fill, borderRadius: "18px" }} />
    <div style={{ position: "absolute", left: 0, top: 0, width: 45, height: 30, backgroundColor: fill, borderRadius: "18px 0 0 18px" }} />
    <div style={{ position: "absolute", left: 45, top: 0, width: 45, height: 30, backgroundColor: fill, borderRadius: "0 18px 18px 0" }} />
    {children}
  </div>
);

export default function Navbar({ lang = "id", setLang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
    if (!searchOpen) setSearchQuery('');
  }, [searchOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSearchOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const toggleLanguage = () => {
    setLang?.((prev) => (prev === "en" ? "id" : "en"));
  };

  const searchResults = searchQuery.trim().length >= 2
    ? globalContentIndex.filter((item) => {
        const q = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.keywords.toLowerCase().includes(q)
        );
      }).slice(0, 7)
    : [];

  const handleSearchNavigate = (path) => {
    navigate(path);
    setSearchOpen(false);
    setSearchQuery('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleSearchNavigate(searchResults[0].path);
    }
  };

  return (
    <>
      {/* ── Search Overlay Panel ── */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearchSubmit} className="flex items-center gap-3 px-5 py-4 border-b border-zinc-100">
              <img src={search} alt="Search" className="w-5 h-5 opacity-40 shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'id' ? 'Cari halaman, destinasi, budaya...' : 'Search pages, destinations, culture...'}
                className="flex-1 text-base text-gray-800 bg-transparent outline-none placeholder-gray-400 font-inter"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-sm font-medium px-2 py-1 rounded transition-colors"
              >
                Esc
              </button>
            </form>

            {/* Hasil Pencarian */}
            {searchQuery.trim().length >= 2 && (
              <div className="max-h-80 overflow-y-auto divide-y divide-zinc-50">
                {searchResults.length > 0 ? (
                  searchResults.map((result, i) => (
                    <button
                      key={i}
                      onClick={() => handleSearchNavigate(result.path)}
                      className="w-full flex items-center gap-3 px-5 py-3.5 hover:bg-[#50652D]/5 transition-colors text-left group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#50652D]/8 flex items-center justify-center shrink-0 text-base group-hover:bg-[#50652D]/15 transition-colors">
                        {getResultCategory(result)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#1b1c1c] group-hover:text-[#1E3F20] transition-colors truncate">
                          {result.title}
                        </p>
                        <p className="text-xs text-[#B28A32] font-medium mt-0.5">
                          {result.category}
                        </p>
                      </div>
                      <svg className="w-4 h-4 text-zinc-300 group-hover:text-[#50652D] transition-colors ml-auto shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  ))
                ) : (
                  <div className="px-5 py-10 text-center">
                    <p className="text-2xl mb-2">🔍</p>
                    <p className="text-gray-400 text-sm">
                      {lang === 'id' ? 'Tidak ada hasil untuk' : 'No results for'}{' '}
                      <span className="font-semibold text-gray-500">&ldquo;{searchQuery}&rdquo;</span>
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Hint chips saat belum mengetik */}
            {searchQuery.trim().length < 2 && (
              <div className="px-5 py-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  {lang === 'id' ? 'Pencarian Populer' : 'Popular Searches'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Istana Maimun', 'Tari Tortor', 'Imlek', 'Bika Ambon', 'Ulos'].map((hint) => (
                    <button
                      key={hint}
                      onClick={() => setSearchQuery(hint.toLowerCase())}
                      className="text-xs px-3 py-1.5 bg-[#50652D]/6 text-[#50652D] rounded-full hover:bg-[#50652D]/12 transition-colors font-medium border border-[#50652D]/12"
                    >
                      {hint}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-3 transition-all duration-300 sm:px-4 md:px-8 lg:px-16 ${
          scrolled ? "py-2 sm:py-4" : "py-0"
        }`}
      >
        <div
          className={`mx-auto max-w-6xl text-[#50652D] transition-all duration-300 ${
            scrolled
              ? "border border-white/40 bg-white/60 shadow-lg backdrop-blur-md"
              : "border border-transparent bg-transparent shadow-none"
          } ${isMenuOpen ? "rounded-3xl" : "rounded-full"}`}
        >
          <div className="flex h-14 items-center justify-between gap-2 px-3 sm:h-16 sm:gap-4 sm:px-4 md:px-6">
            {/* LOGO GROUP */}
            <div className="flex min-w-0 flex-1 items-center gap-3 lg:flex-none">
              <Link
                to="/"
                className="flex min-w-0 shrink items-center gap-1 overflow-hidden text-xl font-bold sm:gap-2"
              >
                <img
                  src={Logo}
                  alt="Logo Kota Medan"
                  className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9 md:h-10 md:w-10"
                />
                <div className="hidden min-w-0 shrink items-center gap-1 max-[420px]:hidden sm:flex sm:gap-2">
                  <img
                    src="https://medantourism.medan.go.id/assets/images/medan_untuk_semua.png"
                    alt="Medan Untuk Semua"
                    className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
                  />
                  <img
                    src="https://medantourism.medan.go.id/assets/images/logo_colorful_medan.png"
                    alt="Colorful Medan"
                    className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
                  />
                  <img
                    src="https://medantourism.medan.go.id/assets/images/medan_bangga.png"
                    alt="Medan Bangga"
                    className="hidden h-8 w-8 shrink-0 object-contain min-[480px]:block sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
                  />
                  <img
                    src="https://medantourism.medan.go.id/assets/images/logo_wonderful.png"
                    alt="Wonderful Indonesia"
                    className="hidden h-8 w-8 shrink-0 object-contain min-[560px]:block sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16"
                  />
                </div>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="ml-auto inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/30 transition-colors hover:bg-white/50 sm:size-10 lg:hidden"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path>
                  </svg>
                )}
              </button>
            </div>

            {/* Navbar Menu Desktop/Tablet Besar */}
            <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
              {navConfig.items.map((item) => (
                <NavLink
                  key={item.id || item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative isolate rounded-full px-3 py-2 text-[14px] font-semibold tracking-normal transition-all duration-300 xl:px-4 xl:text-[15px] ${
                      isActive
                        ? "bg-black/20 text-white"
                        : "hover:bg-[#50652D]/10 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <MergedShape
                        fill={isActive ? "#000000" : "#50652D"}
                        className={`scale-75 opacity-0 transition-all duration-300 group-hover:scale-80 group-hover:opacity-100 top-[20px] ${
                          isActive ? "opacity-30 " : ""
                        }`}
                      />
                      <span className="relative z-10">{item.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Fitur Search & Language Toggle Desktop/Tablet Besar */}
            <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-5">
              <button
                onClick={() => setSearchOpen(true)}
                className="rounded-full p-2 transition-colors hover:bg-[#50652D]/10"
                aria-label="Search"
              >
                <img src={search} alt="Search Icon" className="h-4 w-4" />
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 rounded-full border border-[#C5C8B9]/30 px-4 py-2 transition-colors hover:bg-[#50652D]/10 xl:px-6"
                aria-label="Toggle Language"
                title={`Switch to ${lang === "id" ? "English" : "Indonesian"}`}
              >
                <img src={globe} alt="Globe Icon" className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase">{lang}</span>
              </button>
            </div>
          </div>

          {/* MOBILE / TABLET DROPDOWN MENU */}
          {isMenuOpen && (
            <div className="border-t border-[#C5C8B9]/30 px-2 py-4 lg:hidden">
              <nav className="grid gap-1.5">
                {navConfig.items.map((item) => (
                  <NavLink
                    key={item.id || item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[#50652D]/10 ${
                        isActive ? "bg-[#50652D]/10 text-[#B28A32]" : ""
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#50652D]/70">
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </NavLink>
                ))}

                {/* Aksesoris Tambahan di Bawah Menu Mobile/Tablet */}
                <div className="mt-2 flex items-center justify-between gap-2 border-t border-[#C5C8B9]/30 px-3 pt-4">
                  <div className="flex gap-4">
                    <button
                      onClick={() => { setIsMenuOpen(false); setSearchOpen(true); }}
                      className="rounded-full p-2 transition-colors hover:bg-[#50652D]/10"
                      aria-label="Search"
                    >
                      <img src={search} alt="Search Icon" className="h-5 w-5" />
                    </button>
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-1 rounded-full px-2 py-1 transition-colors hover:bg-[#50652D]/10"
                      aria-label="Toggle Language"
                      title={`Switch to ${lang === "id" ? "English" : "Indonesian"}`}
                    >
                      <img src={globe} alt="Globe Icon" className="h-5 w-5" />
                      <span className="text-xs font-semibold uppercase">{lang}</span>
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}