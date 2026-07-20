import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export default function SejarahTraditions({ content, sectionRef }) {
  return (
    <motion.div
      ref={sectionRef}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="mb-10">
        <span className="inline-block px-3 py-1 bg-[#FDF4E5] text-[#D5973A] text-[11px] font-black tracking-widest uppercase rounded-full mb-4 shadow-sm">
          {content.mosaic.tag}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#222] tracking-tight">{content.mosaic.title}</h2>
        <p className="text-[#666] text-[16px] leading-relaxed">{content.mosaic.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {content.mosaic.cards.map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={index * 0.1}
            viewport={{ once: false, amount: 0.15 }}
          >
            <Link
              to="/budaya"
              className="block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer group"
            >
              <div className="h-52 w-full overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col h-[calc(100%-13rem)]">
                <h3 className="text-[#222] font-extrabold text-[20px] mb-3 group-hover:text-[#D5973A] transition-colors">{card.title}</h3>
                <p className="text-[#666] text-[15px] leading-relaxed flex-grow">{card.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
