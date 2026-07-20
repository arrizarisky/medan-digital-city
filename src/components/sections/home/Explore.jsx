import { exploreConfig } from "@/constants/exploreData";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const t = {
  id: {
    badge: "Eksplorasi Kota",
    title: "Jelajahi Medan",
    desc: "Mulai petualangan Anda dengan menelusuri kekayaan sejarah, keragaman budaya, kecanggihan teknologi, serta cita rasa kuliner legendaris Kota Medan.",
    explore: "Jelajahi →"
  },
  en: {
    badge: "City Exploration",
    title: "Explore Medan",
    desc: "Start your adventure by exploring the rich history, cultural diversity, technological advancements, and legendary culinary flavors of Medan City.",
    explore: "Explore →"
  }
};

export default function Explore() {
  const { lang } = useLanguage();
  const c = exploreConfig[lang] ?? exploreConfig.id;
  const exploreItems = c.items;
  const text = t[lang] ?? t.id;

  return (
    <section className="w-full bg-[#FAFAF4] py-16 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-14">
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

        <div className="grid grid-cols-1 divide-x-0 divide-y divide-[#C5C8B9]/50 overflow-hidden rounded-2xl shadow-sm ring-1 ring-[#50652D]/15 md:grid-cols-2 md:divide-y-0 lg:grid-cols-5 md:divide-x">
          {exploreItems.map((card, i) => (
            <Link
              key={card.id}
              to={card.path}
              className={`group flex h-full flex-col justify-between bg-white p-6 transition-colors duration-300 hover:bg-[#F1F3EA] ${
                i === 0 ? "first:rounded-l-lg" : ""
              } ${i === exploreItems.length - 1 ? "last:rounded-r-lg" : ""}`}
            >
              <div className="relative h-40 w-full overflow-hidden rounded-md">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 flex size-8 items-center justify-center rounded-full bg-[#829E65] shadow-sm ring-2 ring-white">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="h-4 w-4 object-contain brightness-0 invert"
                  />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-base font-bold tracking-tight text-[#50652D]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm tracking-tight text-[#6E7C5A]">
                  {card.desc}
                </p>
              </div>

              <div className="mt-5 text-xs font-bold text-[#829E65] group-hover:text-[#50652D]">
                {text.explore}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}