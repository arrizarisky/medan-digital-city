// ============================================================
// SearchOverlay.jsx — Panel overlay pencarian konten global
// Menerima semua state & handler dari useSearch hook
// ============================================================
import { getResultCategory } from "@/constants/searchIndexData";
import searchIcon from "@/assets/icons/search.svg";

/**
 * @param {object}   props
 * @param {string}   props.lang
 * @param {string}   props.searchQuery
 * @param {Function} props.setSearchQuery
 * @param {Array}    props.searchResults
 * @param {Function} props.onNavigate
 * @param {Function} props.onClose
 * @param {object}   props.inputRef
 * @param {Function} props.onSubmit
 */
export default function SearchOverlay({
  lang,
  searchQuery,
  setSearchQuery,
  searchResults,
  onNavigate,
  onClose,
  inputRef,
  onSubmit,
}) {
  const isTyping = searchQuery.trim().length >= 2;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 px-4 pt-24 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Input Bar ── */}
        <form
          onSubmit={onSubmit}
          className="flex items-center gap-3 border-b border-zinc-100 px-5 py-4"
        >
          <img src={searchIcon} alt="Search" className="h-5 w-5 shrink-0 opacity-40" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === "id"
                ? "Cari destinasi, budaya, event..."
                : "Search destinations, culture, events..."
            }
            className="flex-1 bg-transparent text-base text-gray-800 outline-none placeholder-gray-400"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded px-2 py-1 text-sm font-medium text-gray-400 transition-colors hover:text-gray-600"
          >
            Esc
          </button>
        </form>

        {/* ── Hasil Pencarian ── */}
        {isTyping ? (
          <div className="max-h-80 divide-y divide-zinc-50 overflow-y-auto">
            {searchResults.length > 0 ? (
              searchResults.map((result, i) => (
                <button
                  key={i}
                  onClick={() => onNavigate(result.path)}
                  className="group flex w-full items-center gap-3 px-5 py-3.5 text-left transition-colors hover:bg-[#50652D]/5"
                >
                  {/* Ikon kategori */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#50652D]/[0.08] text-base transition-colors group-hover:bg-[#50652D]/[0.15]">
                    {getResultCategory(result)}
                  </div>

                  {/* Judul + Kategori (tanpa path URL) */}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#1b1c1c] transition-colors group-hover:text-[#1E3F20]">
                      {result.title}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-[#B28A32]">
                      {result.category}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg
                    className="ml-auto h-4 w-4 shrink-0 text-zinc-300 transition-colors group-hover:text-[#50652D]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              ))
            ) : (
              <div className="px-5 py-10 text-center">
                <p className="mb-2 text-2xl">🔍</p>
                <p className="text-sm text-gray-400">
                  {lang === "id" ? "Tidak ada hasil untuk" : "No results for"}{" "}
                  <span className="font-semibold text-gray-500">
                    &ldquo;{searchQuery}&rdquo;
                  </span>
                </p>
              </div>
            )}
          </div>
        ) : (
          /* ── Pencarian Populer (saat belum mengetik) ── */
          <div className="px-5 py-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              {lang === "id" ? "Pencarian Populer" : "Popular Searches"}
            </p>
            <div className="flex flex-wrap gap-2">
              {["Istana Maimun", "Tari Tortor", "Imlek", "Bika Ambon", "Ulos"].map(
                (hint) => (
                  <button
                    key={hint}
                    onClick={() => setSearchQuery(hint.toLowerCase())}
                    className="rounded-full border border-[#50652D]/[0.12] bg-[#50652D]/[0.06] px-3 py-1.5 text-xs font-medium text-[#50652D] transition-colors hover:bg-[#50652D]/[0.12]"
                  >
                    {hint}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
