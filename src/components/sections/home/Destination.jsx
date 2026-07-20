import { useRef, useState, useEffect } from "react";
import { destinationConfig } from "@/constants/destinationData";
import { useLanguage } from "@/context/LanguageContext";

const t = {
  id: {
    badge: "Destinasi Pilihan",
    title: "Destinasi Wisata",
    desc: "Jelajahi keindahan arsitektur bersejarah, warisan budaya yang megah, dan pesona wisata ikonik yang membuat Kota Medan begitu istimewa.",
    about: "Tentang",
  },
  en: {
    badge: "Featured Destinations",
    title: "Tourism Destinations",
    desc: "Explore the beauty of historical architecture, majestic cultural heritage, and iconic tourist charms that make Medan City so special.",
    about: "About",
  }
};

export default function Destination() {
  const { lang } = useLanguage();
  const c = destinationConfig[lang] ?? destinationConfig.id;
  const destinations = c.items;
  const text = t[lang] ?? t.id;

  const carouselRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

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

  // Disable scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  return (
    <section className="w-full bg-[#FAFAF4] py-12 md:py-24">
      <div className="relative w-full">
        {/* Section Header with rich hierarchy and whitespace */}
        <div className="px-4 md:px-8 lg:px-16 mb-10 md:mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#B28A32] block mb-2">
            {text.badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#50652D] tracking-tight leading-tight">
            {text.title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#6E7C5A] max-w-2xl leading-relaxed">
            {text.desc}
          </p>
        </div>

        <div
          ref={carouselRef}
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
        >
          <div className="pointer-events-none absolute right-0 top-0 z-[1000] h-full w-[5%] overflow-hidden bg-gradient-to-l from-[#FAFAF4]"></div>
          <div className="pointer-events-none absolute left-0 top-0 z-[1000] h-full w-[5%] overflow-hidden bg-gradient-to-r from-[#FAFAF4] opacity-50"></div>

          <div className="mx-auto flex max-w-8xl flex-row justify-start gap-6 pl-4 md:pl-8 lg:pl-16">
            {destinations.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="rounded-3xl last:pr-[5%] md:last:pr-[33%]">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="group relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-neutral-950 md:h-[36rem] md:w-96 transition-all duration-500 hover:shadow-2xl hover:shadow-[#50652D]/15 hover:-translate-y-1 hover:ring-2 hover:ring-[#829E65]/20 cursor-pointer"
                >
                  {/* High contrast dark overlay */}
                  <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/90 via-black/45 to-black/20 mix-blend-multiply opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

                  <div className="relative z-40 p-6 md:p-8 text-left">
                    <span
                      className={`inline-block rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${item.tagClass}`}
                    >
                      {item.tag}
                    </span>
                    <h3 className="mt-4 max-w-xs font-montserrat text-xl font-extrabold text-white [text-wrap:balance] md:text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] group-hover:text-[#E9D48F] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xs font-sans text-xs leading-relaxed text-white/90 line-clamp-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                      {item.desc}
                    </p>
                  </div>

                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 z-10 h-full w-full object-cover brightness-[0.7] contrast-[1.05] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.8]"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mr-4 mt-6 flex justify-end gap-2 md:mr-10">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-neutral-100 transition-colors border border-neutral-200 shadow-sm cursor-pointer disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[#50652D]"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-neutral-100 transition-colors border border-neutral-200 shadow-sm cursor-pointer disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-[#50652D]"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Expand Modal detail - Aceternity UI Apple Cards Carousel Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-md p-4 sm:p-6 md:p-10 transition-all duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedItem(null);
          }}
        >
          <div
            className="relative z-[110] mx-auto my-10 h-fit w-full max-w-5xl rounded-3xl bg-white p-6 font-sans md:p-10 dark:bg-neutral-900 shadow-2xl animate-in fade-in zoom-in duration-300"
            style={{ opacity: 1 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="sticky top-4 right-0 ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-white hover:bg-neutral-900 transition-colors shadow-lg z-[120] cursor-pointer"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
              >
                <path d="M18 6l-12 12"></path>
                <path d="M6 6l12 12"></path>
              </svg>
            </button>

            {/* Modal Heading */}
            <div className="mt-4">
              <span className="text-sm font-extrabold tracking-wider uppercase text-[#B28A32] block mb-1">
                {selectedItem.tag}
              </span>
              <h3 className="text-3xl font-extrabold text-[#50652D] md:text-5xl tracking-tight leading-tight dark:text-white">
                {selectedItem.title}
              </h3>
              <p className="mt-3 text-sm md:text-lg text-neutral-500 font-medium max-w-3xl leading-relaxed dark:text-neutral-400">
                {selectedItem.detailTitle || selectedItem.desc}
              </p>
            </div>

            {/* Detailed Content Sections */}
            <div className="py-8 md:py-12 space-y-6">
              {selectedItem.details && selectedItem.details.length > 0 ? (
                selectedItem.details.map((detail, index) => (
                  <div
                    key={index}
                    className="bg-[#F5F5F7] dark:bg-neutral-800/80 p-6 md:p-14 rounded-3xl border border-neutral-100/5 transition-all duration-300 hover:shadow-md"
                  >
                    <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed mb-6 md:mb-10">
                      <span className="font-extrabold text-[#50652D] dark:text-[#E9D48F]">
                        {detail.highlight}{" "}
                      </span>
                      {detail.text}
                    </p>
                    {detail.image && (
                      <div className="relative overflow-hidden rounded-2xl max-w-2xl mx-auto shadow-lg border border-white/20">
                        <img
                          alt={detail.highlight}
                          src={detail.image}
                          loading="lazy"
                          className="w-full h-auto object-cover max-h-[450px]"
                        />
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-[#F5F5F7] dark:bg-neutral-800/80 p-6 md:p-14 rounded-3xl border border-neutral-100/5">
                  <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed mb-6">
                    <span className="font-extrabold text-[#50652D] dark:text-[#E9D48F]">
                      {text.about} {selectedItem.title}.{" "}
                    </span>
                    {selectedItem.desc}
                  </p>
                  <div className="relative overflow-hidden rounded-2xl max-w-2xl mx-auto shadow-lg border border-white/20">
                    <img
                      alt={selectedItem.title}
                      src={selectedItem.imageUrl}
                      loading="lazy"
                      className="w-full h-auto object-cover max-h-[450px]"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}