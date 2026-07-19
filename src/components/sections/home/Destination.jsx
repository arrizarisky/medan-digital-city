import { useRef } from "react";
import { destinationConfig } from "@/constants/destinationData";

export default function Destination() {
  const destinations = destinationConfig.items;
  const carouselRef = useRef(null);

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
    <section className="w-full bg-[#FAFAF4] py-10 md:py-20">
      <div className="relative w-full">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-10 text-neutral-800 font-bold px-4 md:px-8 lg:px-16">
          Destinasi Wisata
        </h1>
        <div
          ref={carouselRef}
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none]"
        >
          <div className="pointer-events-none absolute right-0 top-0 z-[1000] h-full w-[5%] overflow-hidden bg-gradient-to-l from-[#FAFAF4]"></div>

          <div className="mx-auto flex max-w-8xl flex-row justify-start gap-4 pl-4 md:pl-8 lg:pl-16">
            {destinations.map((item) => (
              <div key={item.id} className="rounded-3xl last:pr-[5%] md:last:pr-[33%]">
                <button className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900">
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/80 via-black/10 to-transparent" />

                  <div className="relative z-40 p-8 text-left">
                    <span
                      className={`inline-block rounded-md px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white ${item.tagClass}`}
                    >
                      {item.tag}
                    </span>
                    <p className="mt-3 max-w-xs font-sans text-xl font-semibold text-white [text-wrap:balance] md:text-3xl">
                      {item.title}
                    </p>
                    <p className="mt-2 max-w-xs font-sans text-xs leading-relaxed text-white/80 line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 z-10 h-full w-full object-cover blur-0 transition duration-300"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mr-4 mt-2 flex justify-end gap-2 md:mr-10">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
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
              className="h-6 w-6 text-gray-500"
            >
              <path d="M5 12l14 0" />
              <path d="M5 12l4 4" />
              <path d="M5 12l4 -4" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
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
              className="h-6 w-6 text-gray-500"
            >
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}