import { digitalConfig } from "@/constants/digitalData";

export default function DigitalisasiLayanan() {
  const { header, title, cards, banner } = digitalConfig;

  return (
    <section className="w-full bg-[#FAFAFA] py-20 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[#B28A32] text-xs font-bold uppercase tracking-widest mb-4 block">
              {header}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold font-montserrat text-[#000000] leading-[1.2] mb-10">
              {title}
            </h2>

            <div className="flex flex-col gap-5">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-[24px] p-6 flex gap-5 items-start shadow-sm"
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 mt-8 lg:mt-0 flex items-center justify-center rounded-2xl">
            <div className="relative flex flex-col items-center w-full max-w-lg">
              <div className="relative z-0 w-full flex justify-center">
                <img
                  src={banner.image}
                  alt="QRIS & Virtual Account Payment"
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl scale-120"
                />
              </div>

              <div className="relative z-10 bg-[#939FB8] rounded-xl p-2 border border-white/20 shadow-lg w-[90%] -mt-5 md:-mt-12">
                <p className="text-sm font-inter text-[#1E293B] italic font-light leading-relaxed text-center">
                  {banner.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
