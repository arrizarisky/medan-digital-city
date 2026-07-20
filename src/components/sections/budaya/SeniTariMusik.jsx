import { motion } from 'framer-motion';
import { budayaContent } from "@/constants/budayaData";
import { Music2 } from "lucide-react";
import { Link } from "react-router-dom";

// ── Staggered container + item variants ──────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export default function SeniTariMusik({ lang = "id", sectionRef }) {
  const content = budayaContent[lang].seni;
  const gordangYouTubeUrl = "https://youtu.be/bh66EAtVN4Y?si=j2GJ39d3TpbuEeAc";

  return (
    <motion.section
      ref={sectionRef}
      className="relative z-10"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              {content.title}
            </h2>
          </div>
          <Link to="/galeri-seni" className="text-zinc-900 font-semibold border-b-2 border-zinc-900 pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors inline-flex items-center gap-2">
            {content.cta} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* ── Grid editorial dengan stagger per-card ── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.08 }}
        >
          {/* Card 1 — Tari Tortor: hero tall kiri */}
          <motion.div variants={cardVariant} className="col-span-1 lg:col-span-5 h-full">
            <Link to="/galeri-seni" className="h-full group cursor-pointer block">
              <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col h-full border border-stone-100">
                <div className="relative aspect-[3/4]">
                  <img
                    src={content.heroItem.image}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={content.heroItem.title}
                  />
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow bg-white z-10">
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                      {content.heroItem.title}
                    </h3>
                    <p className="text-stone-600 text-lg mt-3 leading-relaxed">{content.heroItem.subtitle}</p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Kolom kanan: Mangalahat Horbo + Gordang Sambilan */}
          <div className="col-span-1 lg:col-span-7 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">

              {/* Card 2 — Mangalahat Horbo: wide atas */}
              <motion.div variants={cardVariant} className="sm:col-span-2">
                <Link
                  to="/galeri-seni"
                  className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-stone-100 grid grid-cols-1 sm:grid-cols-2 group cursor-pointer w-full h-full"
                >
                  <div className="relative min-h-[240px] lg:min-h-0 overflow-hidden">
                    <img
                      src={content.rightItem.image}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={content.rightItem.title}
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center bg-white">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                      {content.rightItem.title}
                    </h3>
                    <p className="text-stone-600 text-base mt-4 leading-relaxed">{content.rightItem.subtitle}</p>
                  </div>
                </Link>
              </motion.div>

              {/* Card 3 — Gordang Sambilan: lebar penuh bawah */}
              <motion.div variants={cardVariant} className="sm:col-span-2">
                <a
                  href={gordangYouTubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-[2rem] shadow-xl border border-stone-100 p-8 flex flex-col items-center justify-center text-center group cursor-pointer w-full h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100/70 text-green-700 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                    <Music2 className="w-7 h-7" strokeWidth={2.25} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                    {content.featureItems[0].title}
                  </h3>
                  <p className="text-stone-500 text-sm mt-2 leading-relaxed">{content.featureItems[0].subtitle}</p>
                </a>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
