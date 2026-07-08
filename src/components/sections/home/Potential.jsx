import { potentialConfig } from "@/constants/potentialData";
import { Link } from "react-router-dom";

export default function Potential() {
  const { features, images } = potentialConfig;

  return (
    <section className="w-full bg-[#FFFF] py-20 px-4 md:px-8 lg:px-16 text-[#50652D]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest uppercase text-[#B28A32] mb-3 block">
              Transformasi Digital
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#50652D] leading-[1.15] mb-6 max-w-xl">
              Mengoptimalkan Potensi Ekosistem Smart City.
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-10">
              Medan tengah berkembang pesat menjadi pusat teknologi utama di
              Sumatra. Mulai dari digitalisasi pemerintahan hingga ekosistem
              startup yang terus tumbuh, kami sedang membangun fondasi bagi kota
              cerdas yang sesungguhnya.
            </p>

            <div className="space-y-6 mb-10 max-w-xl">
              {features.map((feature) => (
                <div key={feature.id} className="flex gap-4 items-start">
                  <div
                    className={`shrink-0 flex size-9 items-center justify-center rounded-xl ${feature.iconColor}`}
                  >
                    <img src={feature.iconType} alt={feature.title} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Link
                to="/tech"
                className="inline-flex items-center gap-2 rounded-full bg-[#50652D] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#3e4f1f] transition-colors group"
              >
                <span>Jelajahi Layanan Teknologi</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 flex gap-4 mt-8 lg:mt-0">
            <div className="flex flex-col gap-4 flex-1 justify-center">
              <div className="overflow-hidden rounded-2xl shadow-sm border border-[#C5C8B9]/20 aspect-[4/5]">
                <img
                  src={images.smartCityCenter}
                  alt="Smart City Dashboard Command Center"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm border border-[#C5C8B9]/20 aspect-video">
                <img
                  src={images.kualanamuAirport}
                  alt="Kualanamu International Airport Transit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <div className="overflow-hidden rounded-2xl shadow-sm border border-[#C5C8B9]/20 aspect-video">
                <img
                  src={images.binjaiTollGate}
                  alt="Gerbang Tol Binjai Infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-sm border border-[#C5C8B9]/20 aspect-[4/5]">
                <img
                  src={images.trafficControl}
                  alt="Dishub Traffic Control Monitoring Screen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
