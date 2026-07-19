import { Link } from 'react-router-dom';
import { wisataContent } from '@/constants/wisataData';

// ── Individual Category Card ──────────────────────────────────
function KategoriCard({ item, index }) {
  return (
    <Link
      to={item.path}
      className="group relative block rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
      style={{ animationDelay: `${index * 120}ms` }}
      aria-label={item.name}
    >
      {/* Background Image */}
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.style.background =
            'linear-gradient(135deg, #3d4e22 0%, #50652D 100%)';
        }}
      />

      {/* Dark overlay — stronger at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

      {/* Subtle color tint on hover */}
      <div className="absolute inset-0 bg-[#50652D]/0 group-hover:bg-[#50652D]/20 transition-colors duration-300" />

      {/* Card Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Icon */}
        <div className="mb-3 w-10 h-10 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 transition-transform duration-300 group-hover:scale-110">
          <img
            src={item.icon}
            alt={item.name}
            className="w-5 h-5 object-contain brightness-0 invert"
          />
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold text-white leading-tight mb-2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {item.name}
        </h3>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed line-clamp-2 transition-all duration-300 group-hover:text-white/90">
          {item.description}
        </p>

        {/* Arrow indicator on hover */}
        <div className="mt-3 flex items-center gap-1 text-white/0 group-hover:text-white/80 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
          <span className="text-xs font-semibold tracking-wide">Jelajahi</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

// ── Main Section Component ────────────────────────────────────
export default function KategoriWisata({ lang = 'id', sectionRef }) {
  const content = wisataContent[lang].kategori;

  return (
    <section
      ref={sectionRef}
      className="reveal-up w-full py-20"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Section Header — Centered ── */}
        <div className="text-center mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {content.sectionTitle}
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {content.sectionSubtitle}
          </p>
        </div>

        {/* ── Card Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item, idx) => (
            <KategoriCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
