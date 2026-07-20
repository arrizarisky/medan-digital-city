// ============================================================
// Navbar.jsx
// Komponen navigasi utama — responsif, scroll-aware, bilingual.
// Data pencarian  → @/constants/searchIndexData
// ============================================================
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { navConfig }                             from "@/constants/NavData";
import { globalContentIndex, getResultCategory } from "@/constants/searchIndexData";
import { globe, search }                         from "@/assets/icons";
import Logo                                      from "@/assets/logo/Logo_Kota_Medan.webp";
import { useLanguage }                           from "@/context/LanguageContext";

// ── Search Overlay ────────────────────────────────────────────
function SearchOverlay({ lang, searchQuery, setSearchQuery, searchResults,
                         onNavigate, onClose, inputRef, onSubmit }) {
  const isTyping = searchQuery.trim().length >= 2;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 px-4 pt-24 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input bar */}
        <form
          onSubmit={onSubmit}
          className="flex items-center gap-3 border-b border-zinc-100 px-5 py-4"
        >
          <img src={search} alt="Search" className="h-5 w-5 shrink-0 opacity-40" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === "id"
                ? "Cari halaman, destinasi, budaya..."
                : "Search pages, destinations, culture..."
            }
            className="flex-1 bg-transparent text-base text-gray-800 outline-none placeholder-gray-400"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded px-2 py-1 text-sm font-medium text-gray-400 transition-colors hover:text-gray-600"
          >
            Esc
          </button>
        </form>

        {/* Hasil pencarian */}
        {isTyping ? (
          <div className="max-h-80 divide-y divide-zinc-50 overflow-y-auto">
            {searchResults.length > 0 ? (
              searchResults.map((result, i) => (
                <button
                  key={i}
                  onClick={() => onNavigate(result.path)}
                  className="group flex w-full items-center gap-3 px-5 py-3.5 text-left transition-colors hover:bg-[#50652D]/5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#50652D]/10 text-base transition-colors group-hover:bg-[#50652D]/20">
                    {getResultCategory(result)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#1b1c1c] transition-colors group-hover:text-[#1E3F20]">
                      {result.title}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-[#B28A32]">
                      {result.category}
                    </p>
                  </div>
                  <svg
                    className="ml-auto h-4 w-4 shrink-0 text-zinc-300 transition-colors group-hover:text-[#50652D]"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              ))
            ) : (
              <div className="px-5 py-10 text-center">
                <p className="mb-2 text-2xl">🔍</p>
                <p className="text-sm text-gray-400">
                  {lang === "id" ? "Tidak ada hasil untuk" : "No results for"}{" "}
                  <span className="font-semibold text-gray-500">
                    &ldquo;{searchQuery}&rdquo;
                  </span>
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="px-5 py-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              {lang === "id" ? "Pencarian Populer" : "Popular Searches"}
            </p>
            <div className="flex flex-wrap gap-2">
              {(lang === "id"
                ? ["Istana Maimun", "Tari Tortor", "Imlek", "Bika Ambon", "Ulos"]
                : ["Maimun Palace", "Tortor Dance", "Chinese New Year", "Batak Culture", "History"]
              ).map((hint) => (
                <button
                  key={hint}
                  onClick={() => setSearchQuery(hint.toLowerCase())}
                  className="rounded-full border border-[#50652D]/20 bg-[#50652D]/8 px-3 py-1.5 text-xs font-medium text-[#50652D] transition-colors hover:bg-[#50652D]/15"
                >
                  {hint}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────
export default function Navbar() {
  // Ambil lang/setLang dari context global — tidak perlu props lagi
  const { lang, setLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [searchOpen, setSearchOpen]   = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef                = useRef(null);
  const navigate                      = useNavigate();

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Autofocus & reset query saat panel buka/tutup
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery("");
    }
  }, [searchOpen]);

  // Escape key menutup overlay
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSearchOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleLanguage = () =>
    setLang?.((prev) => (prev === "en" ? "id" : "en"));

  // Filter hasil pencarian dari indeks bahasa yang aktif (min 2 karakter, maks 7 hasil)
  const searchResults =
    searchQuery.trim().length >= 2
      ? (globalContentIndex[lang] ?? globalContentIndex.id)
          .filter(({ title, category, keywords }) => {
            const q = searchQuery.toLowerCase();
            return (
              title.toLowerCase().includes(q) ||
              category.toLowerCase().includes(q) ||
              keywords.toLowerCase().includes(q)
            );
          })
          .slice(0, 7)
      : [];

  const handleSearchNavigate = (path) => {
    navigate(path);
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) handleSearchNavigate(searchResults[0].path);
  };

  return (
    <>
      {/* Search Overlay */}
      {searchOpen && (
        <SearchOverlay
          lang={lang}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchResults={searchResults}
          onNavigate={handleSearchNavigate}
          onClose={() => setSearchOpen(false)}
          inputRef={searchInputRef}
          onSubmit={handleSearchSubmit}
        />
      )}

      {/* Header bar */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 w-full px-3 transition-all duration-300 sm:px-4 md:px-8 lg:px-16 ${
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

            {/* ── Logo group ── */}
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

              {/* Hamburger — hanya tampil di bawah lg */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="ml-auto inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/30 transition-colors hover:bg-white/50 sm:size-10 lg:hidden"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />
                  </svg>
                )}
              </button>
            </div>

            {/* ── Desktop nav ── */}
            <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
              {navConfig.items.map((item) => (
                <NavLink
                  key={item.id || item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-[14px] font-semibold tracking-normal transition-all duration-200 xl:text-[15px] ${
                      isActive
                        ? "bg-[#50652D] text-white shadow-sm"
                        : "text-[#50652D] hover:bg-[#50652D]/10 hover:text-[#3d4e22]"
                    }`
                  }
                >
                  {item.label[lang]}
                </NavLink>
              ))}
            </nav>

            {/* ── Desktop actions: search + lang ── */}
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

          {/* ── Mobile / tablet dropdown ── */}
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
                        isActive ? "bg-[#50652D]/10 text-[#50652D] font-semibold" : ""
                      }`
                    }
                  >
                    <span>{item.label[lang]}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="text-[#50652D]/70"
                    >
                      <path d="M9 6l6 6l-6 6" />
                    </svg>
                  </NavLink>
                ))}

                {/* Bottom row: search + lang */}
                <div className="mt-2 flex items-center gap-4 border-t border-[#C5C8B9]/30 px-3 pt-4">
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
                  >
                    <img src={globe} alt="Globe Icon" className="h-5 w-5" />
                    <span className="text-xs font-semibold uppercase">{lang}</span>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
