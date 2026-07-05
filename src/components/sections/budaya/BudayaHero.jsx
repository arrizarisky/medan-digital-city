import { budayaContent } from "@/constants/budayaData";

export default function BudayaHero({ lang = "id", sectionRef }) {
  const content = budayaContent[lang].hero;

  return (
    <section ref={sectionRef} className="reveal-up relative z-10 w-full pt-16 sm:pt-0">
      {/* Edge-to-edge cinematic banner. No max-w-6xl container on the outer wrapper. */}
      {/* Removed rounded borders and margins from the outer container so it bleeds fully */}
      <div className="relative w-full aspect-[16/7] md:aspect-[21/9] bg-stone-900 overflow-hidden shadow-2xl">
        <img
          src={content.image}
          alt={content.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Inner container to constrain text and align it perfectly within the max-w-6xl column */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pb-12 md:pb-20">
          <div className="w-full max-w-6xl mx-auto px-6">
            <div className="max-w-2xl space-y-5">
              <h1
                className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
              >
                {content.title}
              </h1>
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                {content.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-white text-zinc-900 font-bold rounded-full hover:bg-zinc-100 transition-all duration-300 shadow-xl">
                  {content.ctaPrimary}
                </button>
                <button className="px-8 py-4 border border-white/40 bg-black/20 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300">
                  {content.ctaSecondary}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
