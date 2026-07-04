// src/components/sections/CTA.jsx
import { ctaConfig } from "@/constants/ctaData";

export default function CTA() {
  return (
    <section className="w-full bg-[#FAFAF4] py-16 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* KARTU UTAMA CTA */}
        <div className="relative w-full rounded-[32px] bg-[#829E65] p-8 md:p-12 lg:p-16 overflow-hidden shadow-sm">
          {/* KONTEN UTAMA (Z-10 agar berada di atas gambar background) */}
          <div className="relative z-10 max-w-2xl text-white">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {ctaConfig.title}
            </h2>

            <p className="text-sm md:text-base text-white/90 leading-relaxed mb-8 max-w-xl">
              {ctaConfig.desc}
            </p>

            {/* FORM INPUT & TOMBOL LANGGANAN */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 w-full mb-4"
            >
              <input
                type="email"
                required
                placeholder={ctaConfig.placeholder}
                className="w-full sm:flex-1 h-12 rounded-full bg-white px-6 text-sm text-neutral-800 placeholder-neutral-400 outline-none shadow-inner"
              />

              <button
                type="submit"
                className="h-12 shrink-0 rounded-full bg-[#654E29] hover:bg-[#523F1F] px-8 text-sm font-bold text-white transition-colors shadow-md"
              >
                {ctaConfig.buttonText}
              </button>
            </form>

            {/* KETERANGAN DISCLAIMER BAWAH */}
            <p className="text-[11px] text-white/70 leading-normal">
              {ctaConfig.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
