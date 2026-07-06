import { Link } from 'react-router-dom';
import { wisataContent } from '@/constants/wisataData';

// ── Badge color variants ──────────────────────────────────────
const badgeVariants = {
  green: 'bg-[#50652D] text-white',
  yellow: 'bg-amber-400 text-amber-900',
};

// ── Individual Destination Card ───────────────────────────────
function DestinasiCard({ item, viewDetailBtn, index }) {
  return (
    <article
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback to a gradient placeholder if image is broken/placeholder
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-stone-200', 'to-stone-300');
          }}
        />

        {/* Price/Entry Badge */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-full ${
            badgeVariants[item.badgeColor] || badgeVariants.green
          }`}
        >
          {item.badge}
        </span>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex-1">
          <h3 className="text-base font-bold text-gray-900 leading-snug mb-1.5">
            {item.name}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* CTA */}
        <Link
          to={item.path}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#50652D] border border-[#50652D]/30 rounded-lg px-4 py-2 hover:bg-[#50652D] hover:text-white hover:border-[#50652D] transition-all duration-200 w-fit mt-1"
        >
          {viewDetailBtn}
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
        </Link>
      </div>
    </article>
  );
}

// ── Main Section Component ────────────────────────────────────
export default function DestinasiPopuler({ lang = 'id', sectionRef }) {
  const content = wisataContent[lang].destinasi;

  return (
    <section ref={sectionRef} className="reveal-up w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Section Header ── */}
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            {/* Eyebrow Label */}
            <p className="text-xs font-bold tracking-widest text-[#50652D] uppercase mb-2">
              {content.sectionLabel}
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {content.sectionTitle}
            </h2>
          </div>

          {/* View All Link */}
          <Link
            to="/wisata"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[#50652D] hover:text-[#3d4e22] shrink-0 transition-colors group"
          >
            {content.viewAll}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </Link>
        </div>

        {/* ── Card Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.items.map((item, idx) => (
            <DestinasiCard
              key={item.id}
              item={item}
              viewDetailBtn={content.viewDetailBtn}
              index={idx}
            />
          ))}
        </div>

        {/* Mobile: View All Button */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            to="/wisata"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#50652D]/40 text-[#50652D] text-sm font-semibold rounded-full hover:bg-[#50652D] hover:text-white transition-all duration-200"
          >
            {content.viewAll}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
