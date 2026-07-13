import { economyConfig } from "@/constants/economyData";
import { Link } from "react-router-dom";

export default function IndustriKomersial() {
  const { header, title, desc, features, cards } = economyConfig;

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl bg-[#F0EFEA] rounded-[40px] p-8 md:p-12 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[#967634] text-xs font-bold uppercase tracking-widest mb-4 block">
              {header}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold font-montserrat text-neutral-900 leading-[1.2] mb-6">
              {title}
            </h2>
            <p className="text-sm md:text-base text-neutral-600 font-inter leading-relaxed mb-8 max-w-md">
              {desc}
            </p>

            <ul className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="shrink-0 text-[#50652D]">
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
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-semibold font-inter text-neutral-800">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card) => (
              <Link
                key={card.id}
                to={`/inovasi/${card.slug}`}
                className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="w-full h-48 sm:h-56 overflow-hidden p-3 pb-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-[20px] transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-bold font-montserrat text-neutral-900 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-500 font-inter leading-relaxed">
                    {card.desc}
                  </p>
                  <span className="mt-5 inline-block text-sm font-semibold text-[#50652D]">
                    Lihat detail
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
