import GsapScrollReveal from "@/components/ui/gsap-scroll-reveal";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { useLanguage } from "@/context/LanguageContext";

const factsData = {
  id: {
    badge: "Sekilas Pandangan",
    title: "Medan: Sebuah Perpaduan Pertumbuhan",
    desc: "Kota terbesar ketiga di Indonesia, yang menjadi penggerak ekonomi dan pusat budaya Sumatra Utara.",
    items: [
      {
        id: "populasi",
        title: "2.5 Juta+",
        desc: "Penduduk yang beragam, mewakili lebih dari 10 kelompok etnis utama, hidup dalam keharmonisan.",
        className:
          "col-span-12 md:col-span-6 lg:col-span-6 bg-[#EFEFE9] text-neutral-800",
        icon: (
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
            className="text-[#50652D]"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
      {
        id: "kuliner",
        title: "Pusat Kuliner",
        desc: "Terkenal sebagai destinasi kuliner unggulan Indonesia.",
        className:
          "col-span-12 md:col-span-3 lg:col-span-3 bg-[#50652D] text-white",
        icon: (
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
            className="text-white"
          >
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v2M21 15V2v0a5 5 0 0 0-5 5v3c0 1.1.9 2 2 2h3Zm0 0v7" />
            <path d="M12 18v3M8 21h8" />
          </svg>
        ),
      },
      {
        id: "sejarah",
        title: "Akar Sejarah",
        desc: "Didirikan pada tahun 1590, kaya akan sejarah kolonial dan kerajaan.",
        className:
          "col-span-12 md:col-span-3 lg:col-span-3 bg-[#E9D48F] text-[#423419]",
        icon: (
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
            className="text-[#423419]"
          >
            <path d="M3 21h18M3 10h18M5 6h14M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3M4 6l8-4 8 4" />
          </svg>
        ),
      },
      {
        id: "ekonomi",
        title: "Gerbang Ekonomi",
        desc: "Berlokasi strategis di Selat Malaka, Medan berperan sebagai pusat logistik dan digital utama bagi wilayah Indonesia bagian barat, yang menghubungkan kepulauan ini dengan pasar global.",
        className:
          "col-span-12 bg-[#EFEFE9] text-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
        hasImage: true,
        icon: null,
      },
    ]
  },
  en: {
    badge: "At a Glance",
    title: "Medan: A Blend of Growth",
    desc: "The third largest city in Indonesia, serving as the economic engine and cultural center of North Sumatra.",
    items: [
      {
        id: "populasi",
        title: "2.5 Million+",
        desc: "A diverse population, representing over 10 major ethnic groups, living in harmony.",
        className:
          "col-span-12 md:col-span-6 lg:col-span-6 bg-[#EFEFE9] text-neutral-800",
        icon: (
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
            className="text-[#50652D]"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
      {
        id: "kuliner",
        title: "Culinary Hub",
        desc: "Renowned as Indonesia's premier culinary destination.",
        className:
          "col-span-12 md:col-span-3 lg:col-span-3 bg-[#50652D] text-white",
        icon: (
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
            className="text-white"
          >
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v2M21 15V2v0a5 5 0 0 0-5 5v3c0 1.1.9 2 2 2h3Zm0 0v7" />
            <path d="M12 18v3M8 21h8" />
          </svg>
        ),
      },
      {
        id: "sejarah",
        title: "Historical Roots",
        desc: "Founded in 1590, rich in colonial and royal history.",
        className:
          "col-span-12 md:col-span-3 lg:col-span-3 bg-[#E9D48F] text-[#423419]",
        icon: (
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
            className="text-[#423419]"
          >
            <path d="M3 21h18M3 10h18M5 6h14M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3M4 6l8-4 8 4" />
          </svg>
        ),
      },
      {
        id: "ekonomi",
        title: "Economic Gateway",
        desc: "Strategically located on the Malacca Strait, Medan serves as a major logistics and digital hub for western Indonesia, connecting the archipelago to global markets.",
        className:
          "col-span-12 bg-[#EFEFE9] text-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6",
        hasImage: true,
        icon: null,
      },
    ]
  }
};

export default function QuickFacts() {
  const { lang } = useLanguage();
  const data = factsData[lang] ?? factsData.id;

  return (
    <GsapScrollReveal className="">
    <section className="w-full bg-white py-16 px-4 md:px-8 lg:px-16 text-[#50652D]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#B28A32] block mb-2">
              {data.badge}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#50652D] leading-[1.15]">
              {data.title}
            </h2>
          </div>
          <div className="max-w-md md:text-right">
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              {data.desc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {data.items.map((fact) => (
            <div
              key={fact.id}
              className={`rounded-2xl border border-[#C5C8B9]/30 p-6 shadow-sm hover:shadow-md transition-all duration-300 ${fact.className}`}
            >
              {!fact.hasImage ? (
                <div className="flex flex-col h-full justify-between min-h-[160px]">
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-start">
                      {fact.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{fact.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {fact.desc}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex-1 max-w-2xl">
                    <h3 className="text-xl font-bold text-[#50652D] mb-3">
                      {fact.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {fact.desc}
                    </p>
                  </div>
                  <div className="w-full md:w-[280px] lg:w-[340px] shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop"
                      alt="Medan Logistics Port Gateway"
                      className="w-full h-44 object-cover rounded-xl shadow-inner"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </GsapScrollReveal>
  );
}
