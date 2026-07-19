import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { navConfig } from "@/constants/NavData";
import { globe, search } from "@/assets/icons";
import Logo from "@/assets/logo/Logo_Kota_Medan.webp";

export default function Navbar({ lang = "id", setLang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang?.((prev) => (prev === "en" ? "id" : "en"));
  };

  return (
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6l16 0"></path>
                  <path d="M4 12l16 0"></path>
                  <path d="M4 18l16 0"></path>
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
                  `rounded-full px-3 py-2 text-[14px] font-semibold tracking-normal transition-colors duration-300 xl:px-4 xl:text-[15px] ${
                    isActive
                      ? "bg-black/20 text-white"
                      : "hover:bg-[#50652D]/10 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Fitur Search & Language Toggle Desktop/Tablet Besar */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-5">
            <button
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#50652D]/70"
                  >
                    <path d="M9 6l6 6l-6 6"></path>
                  </svg>
                </NavLink>
              ))}

              {/* Aksesoris Tambahan di Bawah Menu Mobile/Tablet */}
              <div className="mt-2 flex items-center justify-between gap-2 border-t border-[#C5C8B9]/30 px-3 pt-4">
                <div className="flex gap-4">
                  <button
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
                    <span className="text-xs font-semibold uppercase">
                      {lang}
                    </span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}