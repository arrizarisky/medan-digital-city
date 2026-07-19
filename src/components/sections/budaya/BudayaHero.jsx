import { motion } from 'framer-motion';
import { budayaContent } from "@/constants/budayaData";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function BudayaHero({ lang = "id", sectionRef }) {
  const content = budayaContent[lang].hero;
  const navigate = useNavigate();

  const handleLihatEvent = () => {
    navigate('/kalender-budaya');
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative z-10 w-full pt-16 sm:pt-0"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="relative w-full h-screen bg-stone-900 overflow-hidden shadow-2xl">
        <img
          src={content.image}
          alt={content.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pb-12 md:pb-20">
          <div className="w-full max-w-6xl mx-auto px-6">
            <motion.div
              className="max-w-2xl space-y-5"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <h1
                className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif" }}
              >
                {content.title}
              </h1>
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                {content.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={handleLihatEvent}
                  className="px-8 py-4 border border-white/40 bg-black/20 backdrop-blur-md text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  {content.ctaSecondary}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
