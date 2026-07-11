import KulinerHero from "../../../assets/images/kuliner-hero.png";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

export default function Hero() {
  return (
    <div className="relative">
      <img
        src={KulinerHero}
        alt="Kuliner Hero"
        className="w-full h-[778px] object-cover"
      />
      <div className="bg-linear-to-t from-black/80 to-black/0 absolute inset-0"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-4 inline-flex flex-col justify-start items-center gap-4">
          <div className="px-4 py-1 bg-yellow-800 rounded-full inline-flex justify-center items-start">
            <div className="text-center justify-center text-white text-sm font-semibold font-inter leading-5 tracking-wide">
              EKSPLORASI RASA
            </div>
          </div>
          <div className="w-full max-w-[896px] pb-2 shadow-[0px_10px_8px_0px_rgba(0,0,0,0.04)] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.10)] flex flex-col justify-start items-center">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.08}
              transition={{ type: "spring", stiffness: 150, damping: 24 }}
              containerClassName="justify-center text-center text-white text-4xl md:text-5xl font-bold font-montserrat leading-tight md:leading-[56px]"
              wordLevelClassName="justify-center"
            >
              Surga Kuliner Nusantara di Jantung Kota Medan
            </VerticalCutReveal>
          </div>
          <div className="w-[630px] max-w-[672px] shadow-[0px_4px_3px_0px_rgba(0,0,0,0.07)] shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06)] flex flex-col justify-start items-center">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.025}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                delay: 0.35,
              }}
              containerClassName="self-stretch justify-center text-center text-white/90 text-lg font-medium font-['Inter'] leading-7"
              wordLevelClassName="justify-center"
            >
              Menjelajahi keanekaragaman cita rasa autentik legendaris yang menyatukan tradisi kuliner Nusantara di setiap sudut Kota Medan.
            </VerticalCutReveal>
          </div>
          <div className="self-stretch h-16 pt-4" />
        </div>
      </div>
    </div>
  );
}
