import { wisataContent } from '@/constants/wisataData';

export default function WisataHero({ lang = 'id', sectionRef }) {
  const content = wisataContent[lang].hero;

  return (
    <section ref={sectionRef} className="reveal-up relative w-full">
      <div className="relative w-full h-screen bg-stone-900 overflow-hidden">
        {/* Background Image */}
        <img
          src={content.image}
          alt="Wisata Kota Medan"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-[8000ms] ease-out"
          style={{ transformOrigin: 'center center' }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight tracking-tight mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {content.headline}
          </h1>
          <p className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed">
            {content.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
