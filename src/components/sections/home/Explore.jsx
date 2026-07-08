import { exploreConfig } from "@/constants/exploreData";
import { Link } from "react-router-dom";

export default function Explore() {
  const exploreItems = exploreConfig.items;

  return (
    <section className="w-full bg-[#FAFAF4] py-16 px-4 md:px-8 lg:px-16 text-[#50652D]">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10 text-neutral-800">
          Jelajahi Medan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {exploreItems.map((card) => (
            <div
              key={card.id}
              className="flex flex-col rounded-3xl bg-white border border-[#C5C8B9]/30 p-4 shadow-sm hover:shadow-md transition-all duration-300 items-center text-center justify-between"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-10 -mt-5 flex size-10 items-center justify-center rounded-full bg-[#829E65] text-white border-4 border-white shadow-sm">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="flex item-center justify-center w-5 h-5"
                />
              </div>

              <div className="flex-1 flex flex-col items-center justify-center mt-4 px-2">
                <h3 className="text-base font-bold text-neutral-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed min-h-[40px] mb-5">
                  {card.desc}
                </p>
              </div>

              <div className="w-full mt-auto">
                <Link
                  to={card.path}
                  className="block w-full text-center rounded-xl border border-[#C5C8B9] py-2 text-xs font-bold text-neutral-700 hover:bg-[#50652D]/10 transition-colors"
                >
                  Jelajahi
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
