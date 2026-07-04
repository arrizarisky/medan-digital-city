import { useState } from "react";
import { navConfig } from "@/constants/navData";
import { globe, search } from "@/assets/icons";
import Logo from "@/assets/logo/Logo_Kota_Medan.webp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = navConfig.items;

  return (
    <header className="sticky top-0 w-full border-b border-[#C5C8B9] bg-[#FFFFFF] text-[#50652D] z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* BAGIAN 1: LOGO & TOMBOL MENU MOBILE */}
          <div className="flex w-full items-center justify-between gap-3 md:w-auto">
            <a href="/" className="flex items-center gap-2 text-xl font-bold">
              {/* Anda bisa menambahkan tag <img> logo di sini jika ada */}
              <img
                src={Logo}
                alt="Logo Kota Medan"
                className="h-10 w-10 object-contain"
              />
              <span>Medan</span>
            </a>

            {/* Tombol Hamburger (Hanya muncul di HP/Mobile) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-[#C5C8B9] hover:bg-[#50652D]/10 md:hidden"
            >
              {isMenuOpen ? (
                // Ikon Silang (X) saat menu terbuka
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
                // Ikon Hamburger saat menu tertutup
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

          {/* Navbar */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className="text-lg font-medium transition-colors hover:border-b-2 hover:border-[#50652D]/70 hover:text-[#50652D]/90"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            {/* Fitur Search (Hanya muncul di layar LG/Besar ke atas) */}
            <div className="relative hidden lg:block">
              <div className="flex justify-center items-center gap-5">
                <img src={search} alt="Search Icon" />
                <img
                  src={globe}
                  alt="Globe Icon"
                  className="px-6 py-2 border border-[#C5C8B9]/30 rounded-full hover:bg-[#50652D]/10 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
        {/* BAGIAN 4: MOBILE DROPDOWN MENU */}
        {isMenuOpen && (
          <div className="border-t border-[#C5C8B9]/50 py-3 md:hidden">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-[#50652D]/10 transition-colors"
                >
                  <span>{item.label}</span>
                  {/* Ikon panah kanan (Chevron Right) */}
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
                </a>
              ))}

              {/* Aksesoris Tambahan di Bawah Menu Mobile */}
              <div className="flex items-center justify-between gap-2 px-3 pt-4 border-t border-[#C5C8B9]/30 mt-2">
                <div className="flex gap-4">
                  <img
                    src={search}
                    alt="Search Icon"
                    className="w-5 h-5 opacity-8xl"
                  />
                  <img
                    src={globe}
                    alt="Globe Icon"
                    className="w-5 h-5 opacity-8xl"
                  />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
