import { motion } from 'framer-motion';
import { sejarahContent } from "@/constants/sejarahData";

// ── Shared fade-up variant ────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export default function SejarahHero({ lang = "id", sectionRef }) {
  const content = sejarahContent[lang].hero;

  return (
    <motion.section
      ref={sectionRef}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
    >
      <div className="max-w-6xl mx-auto px-6 pt-16 sm:pt-20">
        {/* Full-Width Banner Card Overlay */}
        <div className="relative w-full rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
          <img
            src={content.image}
            alt={content.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <div className="max-w-2xl space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight font-playfair">
                {content.title}
              </h1>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                {content.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
