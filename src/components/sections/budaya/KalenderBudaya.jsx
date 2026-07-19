import { motion } from 'framer-motion';
import { budayaContent } from "@/constants/budayaData";
import iconTopeng from "@/assets/icons/topeng.svg";
import iconMesjid from "@/assets/icons/mesjid.svg";
import iconMatahari from "@/assets/icons/matahari.svg";

const sectionVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const rowVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export default function KalenderBudaya({ lang = "id", sectionRef }) {
  const content = budayaContent[lang].kalender;

  const getColorClasses = (color) => {
    switch (color) {
      case "red": return "bg-red-600";
      case "green": return "bg-green-600";
      case "gold": return "bg-yellow-500";
      default: return "bg-zinc-600";
    }
  };

  const getIconForColor = (color) => {
    switch (color) {
      case "red": return iconTopeng;
      case "green": return iconMesjid;
      case "gold": return iconMatahari;
      default: return null;
    }
  };

  return (
    <motion.section
      id="kalender-budaya"
      ref={sectionRef}
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.08 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-20">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            {content.title}
          </h2>
          <div className="w-24 h-1.5 bg-amber-600 mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative">
          {/* Continuous Line (Desktop Only) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-zinc-200/80 rounded-full z-0" />
          
          {content.items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center mb-16 md:mb-24 group relative"
                variants={rowVariant}
                initial="hidden"
                whileInView="visible"
                custom={index * 0.1}
                viewport={{ once: false, amount: 0.15 }}
              >
                
                {/* Desktop: Alternating Content/Image based on isEven */}
                {/* Left Column */}
                <div className={`hidden md:block w-full ${isEven ? 'text-right' : ''}`}>
                  {isEven ? (
                    <div>
                      <span className="inline-block text-sm md:text-base font-black tracking-widest text-amber-600 uppercase mb-4">{item.month}</span>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4 leading-tight">{item.title}</h3>
                      <p className="text-zinc-600 text-base md:text-lg leading-relaxed">{item.description}</p>
                    </div>
                  ) : (
                    <div className="rounded-[2rem] overflow-hidden h-64 md:h-80 shadow-2xl relative">
                      <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  )}
                </div>

                {/* Mobile: Unified Content Layout */}
                <div className="md:hidden flex flex-col gap-6">
                  <div>
                    <span className="inline-block text-sm md:text-base font-black tracking-widest text-amber-600 uppercase mb-3">{item.month}</span>
                    <h3 className="text-2xl font-extrabold text-zinc-900 mb-3">{item.title}</h3>
                    <p className="text-zinc-600 text-base">{item.description}</p>
                  </div>
                  <div className="rounded-[2rem] overflow-hidden h-64 shadow-2xl relative">
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>

                {/* Center Track */}
                <div className="hidden md:flex flex-col items-center justify-center relative z-10">
                  <div className={`w-10 h-10 rounded-full ${getColorClasses(item.color)} border-4 border-white shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-125`}>
                    <img src={getIconForColor(item.color)} alt="Timeline Icon" className="w-4 h-4 object-contain brightness-0 invert" />
                  </div>
                </div>

                {/* Right Column */}
                <div className={`hidden md:block w-full ${!isEven ? 'text-left' : ''}`}>
                  {!isEven ? (
                    <div>
                      <span className="inline-block text-sm md:text-base font-black tracking-widest text-amber-600 uppercase mb-4">{item.month}</span>
                      <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4 leading-tight">{item.title}</h3>
                      <p className="text-zinc-600 text-base md:text-lg leading-relaxed">{item.description}</p>
                    </div>
                  ) : (
                    <div className="rounded-[2rem] overflow-hidden h-64 md:h-80 shadow-2xl relative">
                      <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
