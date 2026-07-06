import { useState } from "react";
import { navConfig } from "@/constants/navData";
import { globe, search } from "@/assets/icons";
import Logo from "@/assets/logo/Logo_Kota_Medan.webp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = navConfig.items;

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 w-full">
      <div
        className={`mx-auto max-w-6xl transition-all duration-300 bg-white/60 backdrop-blur-md border border-white/40 shadow-lg text-[#50652D] ${
          isMenuOpen ? "rounded-3xl" : "rounded-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex w-full items-center justify-between gap-3 md:w-auto">
            <a href="/" className="flex items-center gap-2 text-xl font-bold">
              <img
                src={Logo}
                alt="Logo Kota Medan"
                className="h-10 w-10 object-contain"
              />
              <span>Medan</span>
            </a>

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

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className="text-[15px] font-semibold tracking-wide transition-colors hover:text-[#50652D]/60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <div className="relative hidden lg:block">
              <div className="flex justify-center items-center gap-5">
                <img
                  src={search}
                  alt="Search Icon"
                  className="cursor-pointer hover:opacity-70 transition-opacity"
                />
                <img
                  src={globe}
                  alt="Globe Icon"
                  className="px-6 py-2 border border-[#C5C8B9]/30 rounded-full hover:bg-white/50 transition-colors cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-[#C5C8B9]/30 py-4 px-2 md:hidden">
            <nav className="grid gap-1.5">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-white/50 transition-colors"
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
                </a>
              ))}

              <div className="flex items-center justify-start gap-6 px-4 pt-4 border-t border-[#C5C8B9]/30 mt-2">
                <img
                  src={search}
                  alt="Search Icon"
                  className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"
                />
                <img
                  src={globe}
                  alt="Globe Icon"
                  className="w-5 h-5 cursor-pointer hover:opacity-70 transition-opacity"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
