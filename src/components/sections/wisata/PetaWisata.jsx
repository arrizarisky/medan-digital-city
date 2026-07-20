import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { wisataContent } from '@/constants/wisataData';
import imgPetaWisata from '@/assets/images/detail/ilustrasi-peta-wisata.png';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

// ── Stat Item ─────────────────────────────────────────────────
function StatItem({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-[#50652D]/10 flex items-center justify-center text-xl shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[#50652D] font-bold text-lg leading-none">{value}</p>
        <p className="text-gray-500 text-sm mt-0.5">{label}</p>
      </div>
    </div>
  );
}

// ── Main Section Component ────────────────────────────────────
export default function PetaWisata({ lang = 'id', sectionRef }) {
  const content = wisataContent[lang].peta;

  return (
    <motion.section
      ref={sectionRef}
      className="w-full bg-white py-16"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left Column: Text Content ── */}
          <motion.div
            className="flex flex-col gap-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: false, amount: 0.15 }}
          >
            <p className="text-xs font-bold tracking-widest text-[#50652D] uppercase">
              {content.sectionLabel}
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {content.sectionTitle}
            </h2>
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-10 rounded-full bg-[#50652D]" />
              <div className="h-0.5 w-4 rounded-full bg-[#50652D]/30" />
            </div>
            <p className="text-gray-500 text-base leading-relaxed">
              {content.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {content.stats.map((stat, i) => (
                <StatItem key={i} icon={stat.icon} value={stat.value} label={stat.label} />
              ))}
            </div>
            <div className="pt-2">
              <Link
                to="/peta-eksplorasi"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#50652D]/10 text-[#50652D] text-sm font-semibold rounded-xl border border-[#50652D]/20 hover:bg-[#50652D]/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3" />
                  <path d="M9 4v13" />
                  <path d="M15 7v13" />
                </svg>
                {lang === 'id' ? 'Buka Peta Interaktif' : 'Open Interactive Map'}
              </Link>
            </div>
          </motion.div>

          {/* ── Right Column: Gambar Wisata ── */}
          <motion.div
            className="w-full"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: false, amount: 0.15 }}
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-[#50652D]/10 aspect-[4/3]">
              <img
                src={imgPetaWisata}
                alt="Wisata Kota Medan"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3F20]/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="bg-white/90 backdrop-blur-sm text-[#1E3F20] font-bold text-sm px-4 py-2 rounded-full shadow-md">
                  📍 Kota Medan, Sumatera Utara
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
