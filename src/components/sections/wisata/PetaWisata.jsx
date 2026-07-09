import { wisataContent } from '@/constants/wisataData';

// ── Map Placeholder Visual ────────────────────────────────────
function MapPlaceholder({ title, subtitle, note }) {
  return (
    <div className="relative w-full h-full min-h-[360px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#e8f0e0] via-[#d4e6c3] to-[#b8d4a0] border border-[#50652D]/15 shadow-lg">
      {/* Faux map grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="map-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#50652D"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />
      </svg>

      {/* Faux road lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal road */}
        <line x1="0" y1="40%" x2="100%" y2="43%" stroke="#6a8a40" strokeWidth="3" />
        <line x1="0" y1="65%" x2="100%" y2="60%" stroke="#6a8a40" strokeWidth="2" />
        {/* Vertical road */}
        <line x1="38%" y1="0" x2="42%" y2="100%" stroke="#6a8a40" strokeWidth="3" />
        <line x1="70%" y1="0" x2="68%" y2="100%" stroke="#6a8a40" strokeWidth="2" />
        {/* Diagonal road */}
        <line x1="0" y1="0" x2="55%" y2="80%" stroke="#6a8a40" strokeWidth="1.5" />
      </svg>

      {/* Faux location pins */}
      {[
        { top: '28%', left: '35%', color: '#e74c3c', size: 'w-4 h-4' },
        { top: '48%', left: '55%', color: '#e74c3c', size: 'w-5 h-5' },
        { top: '60%', left: '72%', color: '#f39c12', size: 'w-3.5 h-3.5' },
        { top: '35%', left: '20%', color: '#e74c3c', size: 'w-3.5 h-3.5' },
        { top: '70%', left: '42%', color: '#f39c12', size: 'w-3 h-3' },
        { top: '22%', left: '65%', color: '#e74c3c', size: 'w-3 h-3' },
      ].map((pin, i) => (
        <div
          key={i}
          className={`absolute ${pin.size} rounded-full border-2 border-white shadow-md animate-pulse`}
          style={{
            top: pin.top,
            left: pin.left,
            backgroundColor: pin.color,
            animationDelay: `${i * 400}ms`,
            animationDuration: '2s',
          }}
        />
      ))}

      {/* City label "Medan" */}
      <div
        className="absolute text-[#50652D] font-bold text-sm tracking-wide opacity-60"
        style={{ top: '45%', left: '38%' }}
      >
        Medan
      </div>

      {/* Center "Coming Soon" badge */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="bg-white/85 backdrop-blur-sm rounded-2xl px-8 py-6 text-center shadow-xl border border-white/60">
          {/* Map icon */}
          <div className="w-14 h-14 bg-[#50652D]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#50652D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3z" />
              <path d="M9 4v13" />
              <path d="M15 7v13" />
            </svg>
          </div>
          <p className="text-[#50652D] font-bold text-lg mb-1">{title}</p>
          <p className="text-gray-400 text-sm font-medium">{subtitle}</p>
          <div className="mt-3 w-6 h-1 bg-[#50652D]/30 rounded-full mx-auto" />
          <p className="text-gray-400 text-xs mt-2">{note}</p>
        </div>
      </div>

      {/* Top-right map controls mockup */}
      <div className="absolute top-4 right-4 flex flex-col gap-1.5">
        {['+', '−'].map((sym) => (
          <div
            key={sym}
            className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-lg border border-white/60 flex items-center justify-center text-gray-500 text-sm font-bold shadow-sm"
          >
            {sym}
          </div>
        ))}
      </div>

      {/* Bottom-left scale bar mockup */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <div className="h-1 w-16 bg-[#50652D]/40 rounded-full" />
        <span className="text-[10px] text-[#50652D]/60 font-medium">1 km</span>
      </div>
    </div>
  );
}

// ── Stat Item ─────────────────────────────────────────────────
function StatItem({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-[#50652D]/10 flex items-center justify-center text-xl shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[#50652D] font-bold text-lg leading-none">{value}</p>
        <p className="text-gray-500 text-sm mt-0.5">{label}</p>
      </div>
    </div>
  );
}

// ── Main Section Component ────────────────────────────────────
export default function PetaWisata({ lang = 'id', sectionRef }) {
  const content = wisataContent[lang].peta;

  return (
    <section ref={sectionRef} className="reveal-up w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ── Left Column: Text Content ── */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow label */}
            <p className="text-xs font-bold tracking-widest text-[#50652D] uppercase">
              {content.sectionLabel}
            </p>

            {/* Title */}
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {content.sectionTitle}
            </h2>

            {/* Divider accent */}
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-10 rounded-full bg-[#50652D]" />
              <div className="h-0.5 w-4 rounded-full bg-[#50652D]/30" />
            </div>

            {/* Description */}
            <p className="text-gray-500 text-base leading-relaxed">
              {content.description}
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {content.stats.map((stat, i) => (
                <StatItem
                  key={i}
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>

            {/* CTA Button — subtle */}
            <div className="pt-2">
              <button
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#50652D]/10 text-[#50652D] text-sm font-semibold rounded-xl border border-[#50652D]/20 opacity-70 cursor-not-allowed"
                title="Segera hadir"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 7l6-3l6 3l6-3v13l-6 3l-6-3l-6 3z" />
                  <path d="M9 4v13" />
                  <path d="M15 7v13" />
                </svg>
                {lang === 'id' ? 'Buka Peta Interaktif' : 'Open Interactive Map'}
              </button>
            </div>
          </div>

          {/* ── Right Column: Map Placeholder ── */}
          <div className="w-full">
            <MapPlaceholder
              title={content.mapPlaceholderTitle}
              subtitle={content.mapPlaceholderSubtitle}
              note={content.mapPlaceholderNote}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
