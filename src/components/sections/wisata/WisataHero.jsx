import { motion } from 'framer-motion';
import { wisataContent } from '@/constants/wisataData';

const heroVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const contentVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.25 } },
};

export default function WisataHero({ lang = 'id', sectionRef }) {
  const content = wisataContent[lang].hero;

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full pt-16 sm:pt-0"
      variants={heroVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="relative w-full h-screen bg-stone-900 overflow-hidden">
        <img
          src={content.image}
          alt="Wisata Kota Medan"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-[8000ms] ease-out"
          style={{ transformOrigin: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)' }}
        />

        {/* ── Hero Content ── */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 py-20"
          variants={contentVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight tracking-tight mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {content.headline}
          </h1>
          <p className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
