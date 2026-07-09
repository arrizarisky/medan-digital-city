import { useState } from 'react';
import { wisataContent } from '@/constants/wisataData';
import searchIcon from '@/assets/icons/search.svg';

export default function WisataHero({ lang = 'id', sectionRef }) {
  const content = wisataContent[lang].hero;
  const [activeFilter, setActiveFilter] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section ref={sectionRef} className="reveal-up relative w-full pt-16 sm:pt-0">
      {/* ── Cinematic Full-Width Banner ── */}
      <div className="relative w-full min-h-[480px] md:min-h-[560px] lg:min-h-[640px] bg-stone-900 overflow-hidden">
        {/* Background Image */}
        <img
          src={content.image}
          alt="Wisata Kota Medan"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-[8000ms] ease-out"
          style={{ transformOrigin: 'center center' }}
        />

        {/* Gradient Overlay — bottom heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Radial vignette for premium feel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
          }}
        />

        {/* ── Hero Content ── */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[480px] md:min-h-[560px] lg:min-h-[640px] px-4 py-20">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8DB870] animate-pulse" />
            <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">
              Explore Medan
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight tracking-tight mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {content.headline}
          </h1>

          {/* Subtitle */}
          <p className="text-white/75 text-base md:text-lg max-w-xl leading-relaxed mb-10">
            {content.subtitle}
          </p>

          {/* ── Search Bar ── */}
          <div className="w-full max-w-xl">
            <div className="flex items-center gap-2 bg-white rounded-xl shadow-2xl px-4 py-2">
              <img src={searchIcon} alt="Search" className="w-4 h-4 opacity-40 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={content.searchPlaceholder}
                className="flex-1 py-2 text-sm text-gray-800 bg-transparent outline-none placeholder-gray-400"
              />
              <button className="px-5 py-2 bg-[#50652D] text-white text-sm font-semibold rounded-lg hover:bg-[#3d4e22] transition-colors duration-200 shrink-0">
                {content.searchButton}
              </button>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {content.filterLabels.map((label, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(idx)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                    activeFilter === idx
                      ? 'bg-white text-[#50652D] border-white shadow-md scale-105'
                      : 'bg-white/10 text-white/80 border-white/25 hover:bg-white/20 backdrop-blur-sm'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
