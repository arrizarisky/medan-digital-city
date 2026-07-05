import { MapPin, ArrowRight } from 'lucide-react';

export default function SejarahCulinary({ content, sectionRef }) {
  return (
    <section ref={sectionRef} className="reveal-up">
      <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl h-[400px] group cursor-pointer">
        <img 
          src={content.culinary.image}
          alt="Culinary Crossroads" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        
        <div className="absolute inset-0 p-12 md:p-16 flex flex-col justify-center max-w-2xl z-10">
          <div className="inline-flex items-center gap-2 text-[#89A071] font-bold tracking-widest uppercase text-[12px] mb-4 bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full w-max border border-[#89A071]/30">
            <MapPin size={14} /> {content.culinary.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight drop-shadow-lg">
            {content.culinary.title}
          </h2>
          <p className="text-white/80 text-[16px] mb-10 leading-relaxed max-w-[500px]">
            {content.culinary.desc}
          </p>
          <button className="self-start relative overflow-hidden px-8 py-4 bg-[#89A071] text-white font-bold text-[15px] rounded-xl transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(137,160,113,0.6)] hover:shadow-[0_15px_30px_-10px_rgba(137,160,113,0.8)] hover:-translate-y-1 group/btn">
            <span className="relative z-10 flex items-center gap-2">
              {content.culinary.button}
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </span>
            {/* Button sweep animation */}
            <span className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 group-hover/btn:animate-[sweep_0.6s_ease-out_forwards]"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
