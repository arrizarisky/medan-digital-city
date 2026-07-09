import { budayaContent } from "@/constants/budayaData";

export default function SorotanBudaya({ lang = "id" }) {
  const content = budayaContent[lang].sorotan;

  return (
    <section className="relative z-10 bg-[#4B6431] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-7 leading-tight font-serif max-w-[11ch]">
              {content.title}
            </h2>
            <div className="space-y-6 max-w-xl">
              <p className="text-white/90 text-[15px] md:text-base leading-relaxed font-light">
                {content.descriptionLeft}
              </p>
              <p className="text-white/90 text-[15px] md:text-base leading-relaxed font-light">
                {content.descriptionRight}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]">
              <img
                src={content.images[0]}
                alt="Ulos weaving process"
                className="absolute top-0 right-0 w-[86%] h-[82%] object-cover rounded-[1.5rem] shadow-2xl z-10"
              />

              <img
                src={content.images[1]}
                alt="Traditional Ulos attire"
                className="absolute bottom-0 left-[4%] w-[34%] h-[42%] object-cover rounded-[1.25rem] shadow-2xl ring-[10px] ring-[#4B6431] z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
