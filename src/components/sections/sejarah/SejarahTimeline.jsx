import { motion } from 'framer-motion';

// ── Shared fade-up variant ────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export default function SejarahTimeline({ content, sectionRef }) {
  return (
    <motion.section
      ref={sectionRef}
      className="lg:col-span-5"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#50652D]"></span>
          <span className="px-3 py-1 bg-[#EEF3E8] text-[#50652D] text-[11px] font-black tracking-widest uppercase rounded-full shadow-sm">
            {content.chronicle.tag}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#222] tracking-tight">{content.chronicle.title}</h2>
        <p className="text-[#666] text-[16px] leading-relaxed">{content.chronicle.subtitle}</p>
      </div>

      <div className="relative pl-[28px] space-y-12 before:absolute before:inset-0 before:left-[11px] before:w-[2px] before:bg-gradient-to-b before:from-[#50652D] before:via-gray-300 before:to-gray-100">
        {content.chronicle.items.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item relative group cursor-default"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={index * 0.12}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Glowing Timeline Node */}
            <div className="absolute -left-[28px] top-1.5 flex items-center justify-center">
              <div className="w-[18px] h-[18px] rounded-full bg-white border-4 border-[#50652D] z-10 transition-all duration-300 ease-in-out group-hover:scale-[1.4] group-hover:border-[#526344] group-hover:shadow-[0_0_15px_rgba(80,101,45,0.5)]"></div>
            </div>

            {/* Content */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-[#50652D]/30 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#EEF3E8] rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-out scale-0 group-hover:scale-100"></div>
              <div className="relative z-10">
                <div className="text-[#50652D] font-extrabold text-sm mb-2 tracking-wide group-hover:text-[#526344] transition-colors">{item.year}</div>
                <h3 className="text-[20px] font-bold mb-3 text-[#222] leading-snug">{item.title}</h3>
                <p className="text-[#666] text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
