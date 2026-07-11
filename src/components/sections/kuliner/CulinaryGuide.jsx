import { guideConfig } from "@/constants/guideData";
import BgPattern from "../../../assets/images/bg-landscape.webp";

const guideIcons = {
  bag: (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  book: (
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </>
  ),
};

function GuideIcon({ name }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {guideIcons[name]}
    </svg>
  );
}

export default function CulinaryGuide() {
  const { title, subtitle, items } = guideConfig;

  return (
    <section
      data-gsap-section
      className="relative w-full bg-[#FAFAF4] py-20 px-4 md:px-8 lg:px-16 text-[#50652D] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
        style={{
          backgroundImage: `url(${BgPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          data-gsap-reveal
          className="text-center max-w-3xl mx-auto mb-16 px-4"
        >
          <h2 className="text-3xl font-bold font-montserrat tracking-tight text-[#50652D] mb-4">
            {title}
          </h2>
          <p className="text-sm text-neutral-600 font-inter leading-relaxed text-balance">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((card) => (
            <div
              key={card.id}
              data-gsap-reveal
              className={`flex flex-col justify-between rounded-[28px] p-8 border border-[#C5C8B9]/20 shadow-sm min-h-[340px] ${card.cardClass}`}
            >
              <div className="flex flex-col gap-5">
                <div className="w-6 h-6 flex items-center justify-start">
                  <GuideIcon name={card.icon} />
                </div>

                <h3 className="text-xl font-bold font-montserrat tracking-tight">
                  {card.title}
                </h3>

                {card.type === "list" ? (
                  <ul className="space-y-3 text-sm font-medium font-inter opacity-90">
                    {card.listItems.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0 size-4"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm font-inter leading-relaxed opacity-90">
                    {card.desc}
                  </p>
                )}
              </div>

              <div className="mt-6 flex">
                {card.id === 2 ? (
                  <a href={card.actionPath} className={card.btnClass}>
                    {card.actionText}
                  </a>
                ) : (
                  <a
                    href={card.actionPath}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold font-inter tracking-wider uppercase group ${card.btnClass}`}
                  >
                    <span>{card.actionText}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform group-hover:translate-x-0.5 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
