import { Link } from "react-router-dom";
import { spotConfig } from "@/constants/spotData";
import BgPattern from "../../../assets/images/bg-landscape.webp";

export default function LegendarySpots() {
  const { title, subtitle, viewAllText, viewAllPath, bgPattern, items } =
    spotConfig;

  return (
    <section className="relative w-full bg-[#FAFAF4] py-20 px-4 md:px-8 lg:px-16 text-[#50652D] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none z-0"
        style={{
          backgroundImage: `url(${BgPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold font-montserrat tracking-tight text-[#50652D] mb-3">
              {title}
            </h2>
            <p className="text-sm text-neutral-600 font-inter leading-relaxed">
              {subtitle}
            </p>
          </div>
          <Link
            to={viewAllPath}
            className="inline-flex items-center gap-1.5 text-xs font-bold font-inter tracking-wider uppercase text-[#B28A32] hover:text-[#50652D] transition-colors whitespace-nowrap group self-start sm:self-end"
          >
            <span>{viewAllText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((spot) => (
            <div
              key={spot.id}
              className="flex flex-col bg-white rounded-[24px] border border-[#C5C8B9]/30 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  src={spot.imageUrl}
                  alt={spot.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                />

                <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-lg bg-white/90 backdrop-blur-xs px-2.5 py-1 text-xs font-bold text-neutral-800 shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#B28A32"
                    stroke="#B28A32"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span>{spot.rating}</span>
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col justify-start">
                <h3 className="text-xl font-bold font-montserrat text-neutral-800 mb-2 tracking-tight">
                  {spot.title}
                </h3>

                <div className="flex items-start gap-1.5 text-neutral-400 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-0.5 text-[#50652D]/70"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-xs font-inter line-clamp-1">
                    {spot.address}
                  </span>
                </div>

                <p className="text-xs text-neutral-500 font-inter leading-relaxed line-clamp-3">
                  {spot.desc}
                </p>
              </div>

              <div className="mx-6 py-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold mt-auto">
                <span className="text-[#50652D] font-inter">{spot.status}</span>

                <a
                  href={spot.mapPath}
                  aria-label={`Lihat rute ke ${spot.title}`}
                  className="flex size-7 items-center justify-center rounded-lg border border-[#C5C8B9] text-[#50652D] hover:bg-[#50652D]/10 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
