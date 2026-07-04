// src/components/sections/Destination.jsx
import { useRef } from "react";
import { destinationConfig } from "@/constants/destinationData";

export default function Destination() {
  const destinations = destinationConfig.items;
  const carouselRef = useRef(null);

  // Fungsi navigasi tombol panah kanan-kiri
  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#FAFAF4] py-16 px-4 md:px-8 lg:px-16 text-[#50652D]">
      <div className="mx-auto max-w-6xl">
        {/* HEADER SECTION & NAVIGASI PANAH */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Destinasi Unggulan
          </h2>

          {/* Tombol Kontrol Kanan & Kiri */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="flex size-10 items-center justify-center rounded-full border border-[#C5C8B9] bg-white text-[#50652D] hover:bg-[#50652D]/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="flex size-10 items-center justify-center rounded-full bg-[#50652D] text-white hover:bg-[#3e4f1f] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* CONTAINER CAROUSEL */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Menyembunyikan scrollbar bawaan browser
        >
          {destinations.map((item) => (
            <div
              key={item.id}
              className="relative w-[290px] sm:w-[340px] aspect-[4/5] shrink-0 snap-start overflow-hidden rounded-3xl shadow-sm group hover:shadow-md transition-all duration-300"
            >
              {/* Gambar Utama */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Lapisan Gradient Gelap (Aman untuk Keterbacaan Teks Putih) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Konten Teks di Atas Gambar */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div>
                  <span
                    className={`inline-block rounded-md px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider mb-3 ${item.tagClass}`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight mb-2 drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed drop-shadow-sm line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
