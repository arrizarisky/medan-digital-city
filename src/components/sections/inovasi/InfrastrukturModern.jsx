import { infraConfig } from "@/constants/infraData";
import { Link } from "react-router-dom";

export default function InfrastrukturModern() {
  const { header, title, mainCard, statsCard, mapCard } = infraConfig;

  return (
    <section className="w-full bg-[#F4F4F4F4] py-20 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[#6B8E23] text-xs font-bold uppercase tracking-widest mb-4 block">
            {header}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold font-montserrat text-black/90 leading-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[560px]">
          <Link
            to={`/inovasi/${mainCard.slug}`}
            className="lg:col-span-8 relative rounded-[32px] overflow-hidden group min-h-[400px] lg:min-h-0 shadow-lg"
          >
            <img
              src={mainCard.image}
              alt={mainCard.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-3">
                {mainCard.title}
              </h3>
              <p className="text-sm md:text-base text-white/80 font-inter leading-relaxed max-w-2xl">
                {mainCard.desc}
              </p>
              <span className="mt-5 inline-block text-sm font-semibold text-white">
                Lihat detail
              </span>
            </div>
          </Link>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link
              to={`/inovasi/${statsCard.slug}`}
              className="flex-1 rounded-[32px] bg-[#4A5D23] p-8 relative overflow-hidden flex flex-col justify-center shadow-lg group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute -top-6 -right-6 w-48 h-48 text-black/10 transform rotate-12 transition-transform duration-500 group-hover:scale-110"
              >
                <path d="M11.988 2.063a.75.75 0 0 0-.967-.184L2.52 7.822a.75.75 0 0 0 .19 1.341l4.982 1.392L4.62 21.096a.75.75 0 0 0 1.25.758l9.467-12.016a.75.75 0 0 0-.256-1.18l-5.118-1.895 2.871-6.19a.75.75 0 0 0-.846-1.01z" />
              </svg>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold font-montserrat text-white mb-3">
                  {statsCard.title}
                </h3>
                <p className="text-sm text-white/90 font-inter leading-relaxed">
                  {statsCard.desc}
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-white">
                  Lihat detail
                </span>
              </div>
            </Link>

            <Link
              to={`/inovasi/${mapCard.slug}`}
              className="flex-1 relative rounded-[32px] overflow-hidden shadow-lg group min-h-[240px] lg:min-h-0"
            >
              <img
                src={mapCard.image}
                alt={mapCard.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <h3 className="text-xl font-bold font-montserrat text-white">
                  {mapCard.title}
                </h3>
                <span className="mt-3 inline-block text-sm font-semibold text-white">
                  Lihat detail
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
