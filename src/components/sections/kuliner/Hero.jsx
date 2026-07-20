import KulinerHero from "../../../assets/images/kuliner-hero.png";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

// ── Kamus terjemahan lokal ────────────────────────────────────
const t = {
  id: {
    badge:    'EKSPLORASI RASA',
    headline: 'Surga Kuliner Nusantara di Jantung Kota Medan',
    subtitle: 'Menjelajahi keanekaragaman cita rasa autentik legendaris yang menyatukan tradisi kuliner Nusantara di setiap sudut Kota Medan.',
  },
  en: {
    badge:    'EXPLORE THE FLAVORS',
    headline: 'A Nusantara Culinary Paradise in the Heart of Medan',
    subtitle: 'Exploring the legendary authentic diversity of flavors that unite the culinary traditions of the Nusantara archipelago across every corner of Medan City.',
  },
};

export default function Hero({ lang = 'id' }) {
  const c = t[lang] ?? t.id;

  return (
    <div className="relative">
      <img
        src={KulinerHero}
        alt="Kuliner Hero"
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[778px] object-cover"
      />
      <div className="bg-linear-to-t from-black/80 to-black/0 absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-7xl inline-flex flex-col justify-start items-center gap-3 sm:gap-4">
          {/* Badge */}
          <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-yellow-800 rounded-full inline-flex justify-center items-start">
            <div className="text-center justify-center text-white text-xs sm:text-sm font-semibold font-inter leading-5 tracking-wide">
              {c.badge}
            </div>
          </div>

          {/* Headline */}
          <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[896px] pb-2 shadow-[0px_10px_8px_0px_rgba(0,0,0,0.04)] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.10)] flex flex-col justify-start items-center">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.08}
              transition={{ type: "spring", stiffness: 150, damping: 24 }}
              containerClassName="justify-center text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat leading-tight sm:leading-snug md:leading-tight lg:leading-[56px]"
              wordLevelClassName="justify-center"
            >
              {c.headline}
            </VerticalCutReveal>
          </div>

          {/* Subtitle */}
          <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[630px] lg:max-w-[672px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07)] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06)] flex flex-col justify-start items-center">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.025}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.35 }}
              containerClassName="self-stretch justify-center text-center text-white/90 text-sm sm:text-base md:text-lg font-medium font-['Inter'] leading-6 sm:leading-7"
              wordLevelClassName="justify-center"
            >
              {c.subtitle}
            </VerticalCutReveal>
          </div>

          <div className="self-stretch h-8 sm:h-12 md:h-16 pt-2 sm:pt-3 md:pt-4" />
        </div>
      </div>
    </div>
  );
}
