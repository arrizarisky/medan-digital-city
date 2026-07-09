import { sejarahContent } from "@/constants/sejarahData";

export default function SejarahHero({ lang = "id", sectionRef }) {
  const content = sejarahContent[lang].hero;

  return (
    <section ref={sectionRef} className="reveal-up">
      <div className="max-w-6xl mx-auto px-6 pt-16 sm:pt-20">
        {/* Full-Width Banner Card Overlay */}
        <div className="relative w-full rounded-3xl overflow-hidden h-[400px] md:h-[500px]">
          {/* Background Image */}
          <img
            src={content.image}
            alt={content.title}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Text Overlay (Bottom-Left) */}
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <div className="max-w-2xl space-y-3">
              {/* Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight font-playfair">
                {content.title}
              </h1>

              {/* Subtitle */}
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                {content.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
