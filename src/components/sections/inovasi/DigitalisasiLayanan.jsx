import { digitalConfig } from "@/constants/digitalData";
import { Link } from "react-router-dom";
import GsapScrollReveal from "@/components/ui/gsap-scroll-reveal";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";

export default function DigitalisasiLayanan() {
  const { header, title, cards, banner } = digitalConfig;

  return (
    <GsapScrollReveal className="w-full bg-[#FAFAFA] py-20 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl" data-gsap-section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[#B28A32] text-xs font-bold uppercase tracking-widest mb-4 block" data-gsap-reveal>
              {header}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold font-montserrat text-[#000000] leading-[1.2] mb-10" data-gsap-reveal>
              <VerticalCutReveal splitBy="words" staggerDuration={0.05} autoStart={true}>
                {title}
              </VerticalCutReveal>
            </h2>

            <div className="flex flex-col gap-5">
              {cards.map((card) => (
                <Link
                  key={card.id}
                  to={`/inovasi/${card.slug}`}
                  className="bg-white rounded-[24px] p-6 flex gap-5 items-start shadow-sm"
                  data-gsap-reveal
                >
                  <div
                    className={`shrink-0 size-12 rounded-xl flex items-center justify-center ${card.iconBg} ${card.iconColor}`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat text-[#50652D] mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-sm text-neutral-600 font-inter leading-relaxed">
                      {card.desc}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#50652D]">
                      Lihat detail
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 mt-8 lg:mt-0 flex items-center justify-center rounded-2xl">
            <div className="relative flex flex-col items-center w-full max-w-lg">
              <div className="relative z-0 w-full flex justify-center overflow-hidden rounded-2xl" data-gsap-reveal>
                <img
                  src={banner.image}
                  alt="QRIS & Virtual Account Payment"
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl scale-120"
                  data-gsap-image
                />
              </div>

              <div className="relative z-10 bg-[#939FB8] rounded-xl p-2 border border-white/20 shadow-lg w-[90%] -mt-5 md:-mt-12" data-gsap-reveal>
                <p className="text-sm font-inter text-[#1E293B] italic font-light leading-relaxed text-center">
                  {banner.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GsapScrollReveal>
  );
}
