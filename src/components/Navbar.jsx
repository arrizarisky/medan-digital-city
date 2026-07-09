import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { navConfig } from "@/constants/NavData"; // Mengikuti penulisan kapital kawanmu
import { globe, search } from "@/assets/icons";
import Logo from "@/assets/logo/Logo_Kota_Medan.webp";

const MergedShape = ({
  fill = "#ffffff",
  children,
  style: containerStyle,
  className = "",
  ...props
}) => (
  <div
    className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
    style={{
      position: "absolute",
      width: 90,
      height: 38,
      ...containerStyle,
    }}
    {...props}
  >
    <div
      style={{
        position: "absolute",
        left: 30,
        top: 3,
        width: 30,
        height: 35,
        backgroundColor: fill,
        borderRadius: "18px",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 45,
        height: 30,
        backgroundColor: fill,
        borderRadius: "18px 0 0 18px",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 45,
        top: 0,
        width: 45,
        height: 30,
        backgroundColor: fill,
        borderRadius: "0 18px 18px 0",
      }}
    />
    {children}
  </div>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Language toggle handler (Tetap dipertahankan)
  const toggleLanguage = () => {
    if (setLang) {
      setLang((prev) => (prev === "en" ? "id" : "en"));
    }
  };

  return (
    <header
      className={`fixed top-0 transition-all duration-300 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 w-full ${scrolled ? "py-4" : "py-6"}`}
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-300 text-[#50652D] ${
          scrolled
            ? "bg-white/60 backdrop-blur-md border border-white/40 shadow-lg"
            : "bg-transparent border border-transparent shadow-none"
        } ${isMenuOpen ? "rounded-3xl" : "rounded-full"}`}
      >
        <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex w-full items-center justify-between gap-3 md:w-auto">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <img
                src={Logo}
                alt="Logo Kota Medan"
                className="h-10 w-10 object-contain"
              />
              <img
                src="https://medantourism.medan.go.id/assets/images/medan_untuk_semua.png"
                alt="Medan Untuk Semua"
                className="h-18 w-18 object-contain"
              />
              <img
                src="https://medantourism.medan.go.id/assets/images/logo_colorful_medan.png"
                alt="Colorful Medan"
                className="h-18 w-18 object-contain"
              />
              <img
                src="https://medantourism.medan.go.id/assets/images/medan_bangga.png"
                alt="Medan Bangga"
                className="h-18 w-18 object-contain"
              />
              <img
                src="https://medantourism.medan.go.id/assets/images/logo_wonderful.png"
                alt="Wonderful Indonesia"
                className="h-18 w-18 object-contain"
              />
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/50 bg-white/30 hover:bg-white/50 md:hidden transition-colors"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                  width="20"
                  height="20"
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

          <nav className="hidden items-center gap-8 md:flex ">
            {navConfig.items.map((item) => (
              <NavLink
                key={item.id || item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group relative isolate px-3 py-3 text-[15px] font-semibold tracking-normal transition-all duration-300 hover:text-white ${
                    isActive ? "text-white" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <MergedShape
                      fill={isActive ? "#000000" : "#50652D"}
                      className={`scale-75 opacity-0 transition-all duration-300 group-hover:scale-80 group-hover:opacity-100 top-[25px] ${
                        isActive ? "opacity-30 " : ""
                      }`}
                    />
                    <span className="relative z-10">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Fitur Search & Language Toggle Desktop (Gabungan fungsionalitas & styling) */}
          <div className="hidden items-center gap-4 md:flex">
            <div className="relative hidden lg:block">
              <div className="flex justify-center items-center gap-5">
                <button
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Search"
                >
                  <img src={search} alt="Search Icon" />
                </button>
                <button
                  onClick={toggleLanguage}
                  className="px-6 py-2 border border-[#C5C8B9]/30 rounded-full hover:bg-[#50652D]/10 transition-colors flex items-center gap-2"
                  aria-label="Toggle Language"
                  title={`Switch to ${lang === "id" ? "English" : "Indonesian"}`}
                >
                  <img src={globe} alt="Globe Icon" className="w-4 h-4" />
                  <span className="text-sm font-semibold uppercase">
                    {lang}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        {isMenuOpen && (
          <div className="border-t border-[#C5C8B9]/30 py-4 px-2 md:hidden">
            <nav className="grid gap-1.5">
              {navConfig.items.map((item) => (
                <NavLink
                  key={item.id || item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[#50652D]/10 transition-colors ${
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

              {/* Aksesoris Tambahan di Bawah Menu Mobile */}
              <div className="flex items-center justify-between gap-2 px-3 pt-4 border-t border-[#C5C8B9]/30 mt-2">
                <div className="flex gap-4">
                  <button className="hover:opacity-70 transition-opacity" aria-label="Search">
                    <img
                      src={search}
                      alt="Search Icon"
                      className="w-5 h-5"
                    />
                  </button>
                  <button
                    onClick={toggleLanguage}
                    className="hover:opacity-70 transition-opacity flex items-center gap-1"
                    aria-label="Toggle Language"
                  >
                    <img
                      src={globe}
                      alt="Globe Icon"
                      className="w-5 h-5"
                    />
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