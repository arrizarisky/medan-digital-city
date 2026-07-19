import { useState } from 'react';
import { Link } from 'react-router-dom';
import { wisataContent } from '@/constants/wisataData';
import iconMata from '@/assets/icons/mata.svg';

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
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-stone-200', 'to-stone-300');
          }}
        />
        {/* Category Badge */}
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

        {/* CTA — "Lihat Detail" + ikon mata lokal */}
        <Link
          to={item.path}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#50652D] border border-[#50652D]/30 rounded-lg px-4 py-2 hover:bg-[#50652D] hover:text-white hover:border-[#50652D] transition-all duration-200 w-fit mt-1 group/btn"
        >
          {viewDetailBtn}
          <img
            src={iconMata}
            alt="Lihat"
            className="w-4 h-4 object-contain group-hover/btn:brightness-0 group-hover/btn:invert transition-all duration-200"
          />
        </Link>
      </div>
    </article>
  );
}

// ── Main Section Component ────────────────────────────────────
export default function DestinasiPopuler({ lang = 'id', sectionRef }) {
  const content = wisataContent[lang].destinasi;
  const [showAll, setShowAll] = useState(false);

  // Default tampilkan 3 item; expand untuk semua
  const visibleItems = showAll ? content.items : content.items.slice(0, 3);

  // Label toggle dari data (dengan fallback)
  const toggleLabel = showAll
    ? (content.viewLess || (lang === 'id' ? 'Lihat Sedikit' : 'Show Less'))
    : content.viewAll;

  return (
    <section ref={sectionRef} className="reveal-up w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Section Header ── */}
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
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

          {/* Toggle Button — desktop, selalu tampil jika ada lebih dari 3 */}
          {content.items.length > 3 && (
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[#50652D] hover:text-[#3d4e22] shrink-0 transition-colors group"
            >
              {toggleLabel}
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
                className={`transition-transform duration-300 ${
                  showAll ? 'rotate-90' : ''
                } group-hover:translate-x-0.5`}
              >
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          )}
        </div>

        {/* ── Card Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((item, idx) => (
            <DestinasiCard
              key={item.id}
              item={item}
              viewDetailBtn={content.viewDetailBtn}
              index={idx}
            />
          ))}
        </div>

        {/* Toggle Button — mobile */}
        {content.items.length > 3 && (
          <div className="mt-8 flex justify-center sm:hidden">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#50652D]/40 text-[#50652D] text-sm font-semibold rounded-full hover:bg-[#50652D] hover:text-white transition-all duration-200"
            >
              {toggleLabel}
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
                className={`transition-transform duration-300 ${showAll ? 'rotate-90' : ''}`}
              >
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
