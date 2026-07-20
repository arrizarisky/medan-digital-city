import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Navigation, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { spotConfig } from "@/constants/spotData";
import BgPattern from "@/assets/images/bg-landscape.webp";
import { useLanguage } from "@/context/LanguageContext";

const t = {
  id: {
    badge: "Kuliner Legendaris",
    route: "Rute",
    back: "Kembali ke Halaman Kuliner",
  },
  en: {
    badge: "Legendary Culinary",
    route: "Directions",
    back: "Back to Culinary Page",
  }
};

export default function LegendarySpotsPage() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const c = spotConfig[lang] ?? spotConfig.id;
  const { title, subtitle, items } = c;
  const text = t[lang] ?? t.id;

  return (
    <div className="min-h-screen bg-[#FAFAF4] font-inter text-[#2f381d] selection:bg-[#50652D] selection:text-white">
      <Navbar />

      <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-8 lg:px-16">
          <div
            className="absolute inset-0 opacity-[0.1] pointer-events-none"
            style={{
              backgroundImage: `url(${BgPattern})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div className="relative z-10 mx-auto max-w-6xl">

            <div className="mb-10 max-w-3xl">
              <span className="mb-3 inline-flex rounded-sm bg-[#B28A32]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#B28A32]">
                {text.badge}
              </span>
              <h1 className="mb-4 font-montserrat text-4xl font-bold tracking-tight text-[#50652D] md:text-5xl">
                {title}
              </h1>
              <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
                {subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((spot) => (
                <article
                  key={spot.id}
                  className="flex overflow-hidden rounded-[24px] border border-[#C5C8B9]/30 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex w-full flex-col">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <img
                        src={spot.imageUrl}
                        alt={spot.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-bold text-neutral-800 shadow-sm backdrop-blur-sm">
                        <Star size={13} fill="#B28A32" stroke="#B28A32" />
                        <span>{spot.rating}</span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="mb-2 font-montserrat text-xl font-bold tracking-tight text-neutral-800">
                        {spot.title}
                      </h2>

                      <div className="mb-3 flex items-start gap-2 text-neutral-500">
                        <MapPin
                          size={16}
                          className="mt-0.5 shrink-0 text-[#50652D]/70"
                        />
                        <span className="text-xs leading-relaxed">
                          {spot.address}
                        </span>
                      </div>

                      <p className="mb-5 text-sm leading-relaxed text-neutral-600">
                        {spot.desc}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4">
                        <span className="text-xs font-bold text-[#50652D]">
                          {spot.status}
                        </span>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            `${spot.title} ${spot.address} Medan`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Lihat rute ke ${spot.title}`}
                          className="inline-flex items-center gap-2 rounded-full border border-[#C5C8B9] px-3 py-2 text-xs font-semibold text-[#50652D] transition-colors hover:bg-[#50652D]/10"
                        >
                          <Navigation size={14} />
                          {text.route}
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <Link
                to="/kuliner"
                className="inline-flex rounded-full bg-[#50652D] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3f5224]"
              >
                {text.back}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
