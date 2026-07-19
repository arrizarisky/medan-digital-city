// ============================================================
// searchIndexData.js — Global Content Search Index
// Digunakan oleh Navbar untuk fitur pencarian konten global
// ============================================================

/**
 * @typedef {Object} SearchItem
 * @property {string} title    - Judul konten yang ditampilkan
 * @property {string} category - Label kategori (ditampilkan sebagai sub-teks)
 * @property {string} path     - Route tujuan navigasi
 * @property {string} keywords - Kata kunci untuk fuzzy matching (lowercase, spasi-pisah)
 */

/** @type {SearchItem[]} */
export const globalContentIndex = [
  // ── Wisata & Destinasi ────────────────────────────────────
  { title: 'Masjid Raya Al-Mashun',        category: 'Wisata Sejarah',           path: '/wisata/mesjid-raya',      keywords: 'masjid raya al-mashun religi arsitektur kesultanan deli mesjid' },
  { title: 'Istana Maimun',                category: 'Wisata Sejarah',           path: '/wisata/istana-maimun',    keywords: 'istana maimun kesultanan deli sultan melayu kerajaan bersejarah' },
  { title: 'Tjong A Fie Mansion',          category: 'Wisata Sejarah',           path: '/wisata/tjong-afie',       keywords: 'tjong a fie mansion tionghoa museum bersejarah saudagar kesawan' },
  { title: 'Graha Maria Velangkanni',      category: 'Wisata Religi',            path: '/wisata/graha-maria',      keywords: 'graha maria velangkanni gereja katolik india tamil ziarah religi' },
  { title: 'Taman Cadika Pramuka',         category: 'Wisata Alam',              path: '/wisata/cadika',           keywords: 'taman cadika pramuka alam hijau danau rekreasi keluarga johor' },
  { title: 'Museum Negeri Sumatera Utara', category: 'Wisata Edukasi',           path: '/wisata/museum',           keywords: 'museum negeri sumatera utara artefak koleksi budaya sejarah edukasi' },

  // ── Budaya & Etnis ────────────────────────────────────────
  { title: 'Budaya Melayu Deli',           category: 'Etnis & Budaya',           path: '/budaya/etnis/melayu',     keywords: 'melayu deli kesultanan tari zapin songket baju kurung pantun budaya' },
  { title: 'Budaya Batak',                 category: 'Etnis & Budaya',           path: '/budaya/etnis/batak',      keywords: 'batak toba karo simalungun mandailing ulos gondang tari tortor dalihan' },
  { title: 'Budaya Tionghoa',              category: 'Etnis & Budaya',           path: '/budaya/etnis/tionghoa',   keywords: 'tionghoa imlek barongsai cap go meh tjong a fie kesawan vihara' },
  { title: 'Budaya India Tamil',           category: 'Etnis & Budaya',           path: '/budaya/etnis/india',      keywords: 'india tamil deepavali thaipusam kampung madras kuil bharatanatyam rempah' },
  { title: 'Budaya Jawa Deli',             category: 'Etnis & Budaya',           path: '/budaya/etnis/jawa',       keywords: 'jawa deli kuda lumping gamelan wayang batik pecel pujakesuma' },
  { title: 'Budaya Minangkabau',           category: 'Etnis & Budaya',           path: '/budaya/etnis/minangkabau',keywords: 'minangkabau minang randang rendang tari piring rumah gadang merantau' },

  // ── Seni & Galeri ─────────────────────────────────────────
  { title: 'Tari Tortor',                  category: 'Seni Pertunjukan',         path: '/galeri-seni',             keywords: 'tari tortor batak tradisional spiritual ritual galeri seni' },
  { title: 'Mangalahat Horbo',             category: 'Ritual Adat',              path: '/galeri-seni',             keywords: 'mangalahat horbo ritual batak kerbau syukur upacara adat' },
  { title: 'Gordang Sambilan',             category: 'Seni Musik',               path: '/galeri-seni',             keywords: 'gordang sambilan sembilan gendang mandailing musik sakral' },
  { title: 'Tari Serampang Dua Belas',     category: 'Seni Pertunjukan',         path: '/galeri-seni',             keywords: 'tari serampang dua belas melayu deli cinta pernikahan galeri' },
  { title: 'Ulos Batak',                   category: 'Kriya & Tekstil',          path: '/galeri-seni',             keywords: 'ulos batak kain tenun tangan tradisional doa warisan budaya' },
  { title: 'Galeri Karya & Seni',          category: 'Galeri',                   path: '/galeri-seni',             keywords: 'galeri seni pertunjukan koleksi karya budaya medan' },

  // ── Event & Kalender ──────────────────────────────────────
  { title: 'Tahun Baru Imlek 2026',        category: 'Festival Budaya',          path: '/kalender-budaya',         keywords: 'imlek tahun baru cina barongsai lampion kesawan festival' },
  { title: 'Ramadhan Fair 2026',           category: 'Festival Religi & Kuliner',path: '/kalender-budaya',         keywords: 'ramadhan fair bazar takjil kuliner masjid raya islami' },
  { title: 'Karnaval Deepavali',           category: 'Festival Budaya',          path: '/kalender-budaya',         keywords: 'deepavali karnaval cahaya india kampung madras festival' },
  { title: 'Festival Bunga & Buah',        category: 'Festival Kota',            path: '/kalender-budaya',         keywords: 'festival bunga buah lapangan merdeka pawai karo agrikultur' },
  { title: 'Gelar Melayu Serumpun',        category: 'Festival Tradisi',         path: '/kalender-budaya',         keywords: 'gelar melayu serumpun istana maimun budaya tradisi' },
  { title: 'Kalender Budaya 2026',         category: 'Agenda Kota',              path: '/kalender-budaya',         keywords: 'kalender budaya 2026 event agenda kota medan semua acara' },

  // ── Sejarah ───────────────────────────────────────────────
  { title: 'Sejarah Kota Medan',           category: 'Sejarah',                  path: '/sejarah',                 keywords: 'sejarah medan kesultanan deli 1590 belanda tembakau kolonial kemerdekaan' },
  { title: 'Menara Air Tirtanadi',         category: 'Landmark Sejarah',         path: '/sejarah',                 keywords: 'menara air tirtanadi 1908 landmark bersejarah colonial belanda' },
  { title: 'Gedung London Sumatra',        category: 'Landmark Sejarah',         path: '/sejarah',                 keywords: 'gedung london sumatra lonsum 1906 kolonial inggris kesawan perkebunan' },
  { title: 'Pos Bloc Medan',               category: 'Landmark Sejarah',         path: '/sejarah',                 keywords: 'pos bloc kantor pos besar 1911 snuyf kolonial bersejarah kreatif' },

  // ── Kuliner ───────────────────────────────────────────────
  { title: 'Kuliner Khas Medan',           category: 'Kuliner',                  path: '/kuliner',                 keywords: 'kuliner medan bika ambon lontong mie aceh soto durian ucok masakan' },

  // ── Peta ──────────────────────────────────────────────────
  { title: 'Peta Eksplorasi Medan',        category: 'Peta Interaktif',          path: '/peta-eksplorasi',         keywords: 'peta eksplorasi interaktif lokasi navigate wisata medan gis' },
];

// ── Emoji icon map per kategori ───────────────────────────────
const CATEGORY_ICON_MAP = {
  'Wisata Sejarah':            '🏛️',
  'Wisata Religi':             '🕌',
  'Wisata Alam':               '🌿',
  'Wisata Edukasi':            '🎓',
  'Etnis & Budaya':            '🎭',
  'Seni Pertunjukan':          '💃',
  'Seni Musik':                '🥁',
  'Ritual Adat':               '🙏',
  'Kriya & Tekstil':           '🧵',
  'Galeri':                    '🖼️',
  'Festival Budaya':           '🎊',
  'Festival Religi & Kuliner': '🌙',
  'Festival Kota':             '🌸',
  'Festival Tradisi':          '🎶',
  'Agenda Kota':               '📅',
  'Sejarah':                   '📜',
  'Landmark Sejarah':          '🏗️',
  'Kuliner':                   '🍜',
  'Peta Interaktif':           '🗺️',
};

/**
 * Mengembalikan emoji ikon untuk kategori hasil pencarian.
 * @param {{ category: string }} result
 * @returns {string} emoji
 */
export function getResultCategory(result) {
  return CATEGORY_ICON_MAP[result.category] ?? '🔍';
}
