import { budayaContent } from "@/constants/budayaData";
import { useNavigate } from "react-router-dom";

export default function MosaikEtnis({ lang = "id", sectionRef }) {
  const content = budayaContent[lang].mosaik;
  const navigate = useNavigate();

  return (
    <section ref={sectionRef} className="reveal-up relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            {content.title}
          </h2>
          <p className="text-zinc-600 mt-4 text-lg max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Dense Bento Grid Layout Math */}
        <div className="grid grid-cols-1 md:grid-cols-12 grid-flow-dense gap-6">
          
          {/* Card 1: Melayu Deli (Row 1, Cols 1-8) */}
          <div 
            onClick={() => navigate(`/budaya/etnis/melayu`)}
            className="col-span-1 md:col-span-8 group relative rounded-[2rem] overflow-hidden aspect-[16/9] bg-stone-100 shadow-lg cursor-pointer"
          >
            <img src={content.items[0].image} alt={content.items[0].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{content.items[0].name}</h3>
              <p className="text-white/80 line-clamp-2 text-sm md:text-base">{content.items[0].description}</p>
            </div>
          </div>
          
          {/* Card 2: Batak (Row 1-2, Cols 9-12) */}
          <div 
            onClick={() => navigate(`/budaya/etnis/batak`)}
            className="col-span-1 md:col-span-4 md:row-span-2 group relative rounded-[2rem] overflow-hidden aspect-[3/4] md:aspect-auto h-full bg-stone-100 shadow-lg cursor-pointer"
          >
            <img src={content.items[1].image} alt={content.items[1].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{content.items[1].name}</h3>
              <p className="text-white/80 line-clamp-3 text-sm md:text-base">{content.items[1].description}</p>
            </div>
          </div>

          {/* Card 3: Tionghoa (Row 2, Cols 1-4) */}
          <div 
            onClick={() => navigate(`/budaya/etnis/tionghoa`)}
            className="col-span-1 md:col-span-4 group relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/3] bg-stone-100 shadow-lg cursor-pointer"
          >
            <img src={content.items[2].image} alt={content.items[2].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{content.items[2].name}</h3>
            </div>
          </div>
          
          {/* Card 4: India (Row 2, Cols 5-8 to perfectly fit next to Batak!) */}
          <div 
            onClick={() => navigate(`/budaya/etnis/india`)}
            className="col-span-1 md:col-span-4 group relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/3] bg-stone-100 shadow-lg cursor-pointer"
          >
            <img src={content.items[3].image} alt={content.items[3].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{content.items[3].name}</h3>
              <p className="text-white/80 line-clamp-2 text-sm md:text-base">{content.items[3].description}</p>
            </div>
          </div>

          {/* Card 5: Jawa (Row 3, Cols 1-6) */}
          <div 
            onClick={() => navigate(`/budaya/etnis/jawa`)}
            className="col-span-1 md:col-span-6 group relative rounded-[2rem] overflow-hidden aspect-video bg-stone-100 shadow-lg cursor-pointer"
          >
            <img src={content.items[4].image} alt={content.items[4].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{content.items[4].name}</h3>
            </div>
          </div>
          
          {/* Card 6: Minangkabau (Row 3, Cols 7-12) */}
          <div 
            onClick={() => navigate(`/budaya/etnis/minangkabau`)}
            className="col-span-1 md:col-span-6 group relative rounded-[2rem] overflow-hidden aspect-video bg-stone-100 shadow-lg cursor-pointer"
          >
            <img src={content.items[5].image} alt={content.items[5].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{content.items[5].name}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
