// ============================================================
// searchIndexData.js
// Indeks konten global — bilingual (id / en).
// Format: globalContentIndex[lang].filter(...)
// ============================================================

/**
 * @typedef {{ title: string, category: string, path: string, keywords: string }} SearchItem
 * @type {{ id: SearchItem[], en: SearchItem[] }}
 */
export const globalContentIndex = {
  // ── Bahasa Indonesia ──────────────────────────────────────
  id: [
    // Wisata & Destinasi
    { title: 'Masjid Raya Al-Mashun',        category: 'Wisata Sejarah',           path: '/wisata/mesjid-raya',       keywords: 'masjid raya al-mashun religi arsitektur kesultanan deli mesjid' },
    { title: 'Istana Maimun',                category: 'Wisata Sejarah',           path: '/wisata/istana-maimun',     keywords: 'istana maimun kesultanan deli sultan melayu kerajaan bersejarah' },
    { title: 'Tjong A Fie Mansion',          category: 'Wisata Sejarah',           path: '/wisata/tjong-afie',        keywords: 'tjong a fie mansion tionghoa museum bersejarah saudagar kesawan' },
    { title: 'Graha Maria Velangkanni',      category: 'Wisata Religi',            path: '/wisata/graha-maria',       keywords: 'graha maria velangkanni gereja katolik india tamil ziarah religi' },
    { title: 'Taman Cadika Pramuka',         category: 'Wisata Alam',              path: '/wisata/cadika',            keywords: 'taman cadika pramuka alam hijau danau rekreasi keluarga johor' },
    { title: 'Museum Negeri Sumatera Utara', category: 'Wisata Edukasi',           path: '/wisata/museum',            keywords: 'museum negeri sumatera utara artefak koleksi budaya sejarah edukasi' },
    // Budaya & Etnis
    { title: 'Budaya Melayu Deli',           category: 'Etnis & Budaya',           path: '/budaya/etnis/melayu',      keywords: 'melayu deli kesultanan tari zapin songket baju kurung pantun budaya' },
    { title: 'Budaya Batak',                 category: 'Etnis & Budaya',           path: '/budaya/etnis/batak',       keywords: 'batak toba karo simalungun mandailing ulos gondang tari tortor dalihan' },
    { title: 'Budaya Tionghoa',              category: 'Etnis & Budaya',           path: '/budaya/etnis/tionghoa',    keywords: 'tionghoa imlek barongsai cap go meh tjong a fie kesawan vihara' },
    { title: 'Budaya India Tamil',           category: 'Etnis & Budaya',           path: '/budaya/etnis/india',       keywords: 'india tamil deepavali thaipusam kampung madras kuil bharatanatyam rempah' },
    { title: 'Budaya Jawa Deli',             category: 'Etnis & Budaya',           path: '/budaya/etnis/jawa',        keywords: 'jawa deli kuda lumping gamelan wayang batik pecel pujakesuma' },
    { title: 'Budaya Minangkabau',           category: 'Etnis & Budaya',           path: '/budaya/etnis/minangkabau', keywords: 'minangkabau minang randang rendang tari piring rumah gadang merantau' },
    // Seni & Galeri
    { title: 'Tari Tortor',                  category: 'Seni Pertunjukan',         path: '/galeri-seni',              keywords: 'tari tortor batak tradisional spiritual ritual galeri seni' },
    { title: 'Mangalahat Horbo',             category: 'Ritual Adat',              path: '/galeri-seni',              keywords: 'mangalahat horbo ritual batak kerbau syukur upacara adat' },
    { title: 'Gordang Sambilan',             category: 'Seni Musik',               path: '/galeri-seni',              keywords: 'gordang sambilan sembilan gendang mandailing musik sakral' },
    { title: 'Tari Serampang Dua Belas',     category: 'Seni Pertunjukan',         path: '/galeri-seni',              keywords: 'tari serampang dua belas melayu deli cinta pernikahan galeri' },
    { title: 'Ulos Batak',                   category: 'Kriya & Tekstil',          path: '/galeri-seni',              keywords: 'ulos batak kain tenun tangan tradisional doa warisan budaya' },
    { title: 'Galeri Karya & Seni',          category: 'Galeri',                   path: '/galeri-seni',              keywords: 'galeri seni pertunjukan koleksi karya budaya medan' },
    // Event & Kalender
    { title: 'Tahun Baru Imlek 2026',        category: 'Festival Budaya',          path: '/kalender-budaya',          keywords: 'imlek tahun baru cina barongsai lampion kesawan festival' },
    { title: 'Ramadhan Fair 2026',           category: 'Festival Religi & Kuliner',path: '/kalender-budaya',          keywords: 'ramadhan fair bazar takjil kuliner masjid raya islami' },
    { title: 'Karnaval Deepavali',           category: 'Festival Budaya',          path: '/kalender-budaya',          keywords: 'deepavali karnaval cahaya india kampung madras festival' },
    { title: 'Festival Bunga & Buah',        category: 'Festival Kota',            path: '/kalender-budaya',          keywords: 'festival bunga buah lapangan merdeka pawai karo agrikultur' },
    { title: 'Gelar Melayu Serumpun',        category: 'Festival Tradisi',         path: '/kalender-budaya',          keywords: 'gelar melayu serumpun istana maimun budaya tradisi' },
    { title: 'Kalender Budaya 2026',         category: 'Agenda Kota',              path: '/kalender-budaya',          keywords: 'kalender budaya 2026 event agenda kota medan semua acara' },
    // Sejarah
    { title: 'Sejarah Kota Medan',           category: 'Sejarah',                  path: '/sejarah',                  keywords: 'sejarah medan kesultanan deli 1590 belanda tembakau kolonial kemerdekaan' },
    { title: 'Menara Air Tirtanadi',         category: 'Landmark Sejarah',         path: '/sejarah',                  keywords: 'menara air tirtanadi 1908 landmark bersejarah colonial belanda' },
    { title: 'Gedung London Sumatra',        category: 'Landmark Sejarah',         path: '/sejarah',                  keywords: 'gedung london sumatra lonsum 1906 kolonial inggris kesawan perkebunan' },
    { title: 'Pos Bloc Medan',               category: 'Landmark Sejarah',         path: '/sejarah',                  keywords: 'pos bloc kantor pos besar 1911 snuyf kolonial bersejarah kreatif' },
    // Kuliner
    { title: 'Kuliner Khas Medan',           category: 'Kuliner',                  path: '/kuliner',                  keywords: 'kuliner medan bika ambon lontong mie aceh soto durian ucok masakan' },
    // Peta
    { title: 'Peta Eksplorasi Medan',        category: 'Peta Interaktif',          path: '/peta-eksplorasi',          keywords: 'peta eksplorasi interaktif lokasi navigate wisata medan gis' },
  ],

  // ── English ───────────────────────────────────────────────
  en: [
    // Tourism & Destinations
    { title: 'Masjid Raya Al-Mashun',        category: 'Historical Tourism',       path: '/wisata/mesjid-raya',       keywords: 'masjid raya al-mashun mosque religious architecture deli sultanate heritage' },
    { title: 'Maimun Palace',                category: 'Historical Tourism',       path: '/wisata/istana-maimun',     keywords: 'maimun palace istana deli sultanate sultan malay royal heritage historic' },
    { title: 'Tjong A Fie Mansion',          category: 'Historical Tourism',       path: '/wisata/tjong-afie',        keywords: 'tjong a fie mansion chinese museum historic merchant kesawan heritage' },
    { title: 'Graha Maria Velangkanni',      category: 'Religious Tourism',        path: '/wisata/graha-maria',       keywords: 'graha maria velangkanni church catholic indian tamil pilgrimage religious' },
    { title: 'Cadika Scout Park',            category: 'Nature Tourism',           path: '/wisata/cadika',            keywords: 'cadika scout park nature green lake recreation family park johor' },
    { title: 'North Sumatra State Museum',   category: 'Educational Tourism',      path: '/wisata/museum',            keywords: 'north sumatra state museum artifacts collection culture history education' },
    // Culture & Ethnicity
    { title: 'Malay Deli Culture',           category: 'Ethnic & Culture',         path: '/budaya/etnis/melayu',      keywords: 'malay deli sultanate zapin dance songket traditional costume culture' },
    { title: 'Batak Culture',                category: 'Ethnic & Culture',         path: '/budaya/etnis/batak',       keywords: 'batak toba karo simalungun mandailing ulos gondang tortor dance tradition' },
    { title: 'Chinese Culture',              category: 'Ethnic & Culture',         path: '/budaya/etnis/tionghoa',    keywords: 'chinese imlek barongsai cap go meh kesawan vihara temple lunar new year' },
    { title: 'Indian Tamil Culture',         category: 'Ethnic & Culture',         path: '/budaya/etnis/india',       keywords: 'indian tamil deepavali thaipusam kampung madras temple bharatanatyam spices' },
    { title: 'Javanese Deli Culture',        category: 'Ethnic & Culture',         path: '/budaya/etnis/jawa',        keywords: 'javanese deli kuda lumping gamelan wayang batik pecel pujakesuma' },
    { title: 'Minangkabau Culture',          category: 'Ethnic & Culture',         path: '/budaya/etnis/minangkabau', keywords: 'minangkabau minang rendang plate dance rumah gadang rantau culture' },
    // Arts & Gallery
    { title: 'Tortor Dance',                 category: 'Performing Arts',          path: '/galeri-seni',              keywords: 'tortor dance batak traditional spiritual ritual art gallery performance' },
    { title: 'Mangalahat Horbo',             category: 'Traditional Ritual',       path: '/galeri-seni',              keywords: 'mangalahat horbo batak buffalo ritual gratitude traditional ceremony' },
    { title: 'Gordang Sambilan',             category: 'Musical Arts',             path: '/galeri-seni',              keywords: 'gordang sambilan nine drums mandailing sacred music traditional' },
    { title: 'Serampang Dua Belas Dance',    category: 'Performing Arts',          path: '/galeri-seni',              keywords: 'serampang dua belas dance malay deli love wedding gallery performance' },
    { title: 'Batak Ulos',                   category: 'Craft & Textile',          path: '/galeri-seni',              keywords: 'ulos batak woven fabric hand-woven traditional prayer heritage cultural' },
    { title: 'Arts & Performance Gallery',   category: 'Gallery',                  path: '/galeri-seni',              keywords: 'gallery arts performance collection cultural works heritage medan' },
    // Events & Calendar
    { title: 'Chinese New Year 2026',        category: 'Cultural Festival',        path: '/kalender-budaya',          keywords: 'imlek chinese new year barongsai lantern kesawan festival lunar' },
    { title: 'Ramadhan Fair 2026',           category: 'Religious & Culinary Festival', path: '/kalender-budaya',     keywords: 'ramadhan fair bazaar iftar culinary great mosque islamic' },
    { title: 'Deepavali Carnival',           category: 'Cultural Festival',        path: '/kalender-budaya',          keywords: 'deepavali carnival festival of lights india kampung madras' },
    { title: 'Flower & Fruit Festival',      category: 'City Festival',            path: '/kalender-budaya',          keywords: 'flower fruit festival merdeka square parade karo agriculture' },
    { title: 'Malay Cultural Showcase',      category: 'Traditional Festival',     path: '/kalender-budaya',          keywords: 'malay serumpun maimun palace cultural tradition showcase' },
    { title: 'Cultural Calendar 2026',       category: 'City Agenda',              path: '/kalender-budaya',          keywords: 'cultural calendar 2026 events city agenda medan all programs' },
    // History
    { title: 'History of Medan City',        category: 'History',                  path: '/sejarah',                  keywords: 'history medan deli sultanate 1590 dutch tobacco colonial independence' },
    { title: 'Tirtanadi Water Tower',        category: 'Historic Landmark',        path: '/sejarah',                  keywords: 'tirtanadi water tower 1908 landmark historic colonial dutch' },
    { title: 'London Sumatra Building',      category: 'Historic Landmark',        path: '/sejarah',                  keywords: 'london sumatra building lonsum 1906 colonial english kesawan plantation' },
    { title: 'Pos Bloc Medan',               category: 'Historic Landmark',        path: '/sejarah',                  keywords: 'pos bloc post office 1911 snuyf colonial heritage creative' },
    // Culinary
    { title: 'Medan Signature Cuisine',      category: 'Culinary',                 path: '/kuliner',                  keywords: 'kuliner medan bika ambon lontong laksa mie aceh soto durian ucok food' },
    // Map
    { title: 'Medan Exploration Map',        category: 'Interactive Map',          path: '/peta-eksplorasi',          keywords: 'map exploration interactive location navigate tourism medan gis' },
  ],
};

// ── Emoji icon map — bilingual (category key disesuaikan) ─────
const CATEGORY_ICON_MAP = {
  // id
  'Wisata Sejarah':             '🏛️',
  'Wisata Religi':              '🕌',
  'Wisata Alam':                '🌿',
  'Wisata Edukasi':             '🎓',
  'Etnis & Budaya':             '🎭',
  'Seni Pertunjukan':           '💃',
  'Seni Musik':                 '🥁',
  'Ritual Adat':                '🙏',
  'Kriya & Tekstil':            '🧵',
  'Galeri':                     '🖼️',
  'Festival Budaya':            '🎊',
  'Festival Religi & Kuliner':  '🌙',
  'Festival Kota':              '🌸',
  'Festival Tradisi':           '🎶',
  'Agenda Kota':                '📅',
  'Sejarah':                    '📜',
  'Landmark Sejarah':           '🏗️',
  'Kuliner':                    '🍜',
  'Peta Interaktif':            '🗺️',
  // en
  'Historical Tourism':             '🏛️',
  'Religious Tourism':              '🕌',
  'Nature Tourism':                 '🌿',
  'Educational Tourism':            '🎓',
  'Ethnic & Culture':               '🎭',
  'Performing Arts':                '💃',
  'Musical Arts':                   '🥁',
  'Traditional Ritual':             '🙏',
  'Craft & Textile':                '🧵',
  'Gallery':                        '🖼️',
  'Cultural Festival':              '🎊',
  'Religious & Culinary Festival':  '🌙',
  'City Festival':                  '🌸',
  'Traditional Festival':           '🎶',
  'City Agenda':                    '📅',
  'History':                        '📜',
  'Historic Landmark':              '🏗️',
  'Culinary':                       '🍜',
  'Interactive Map':                '🗺️',
};

/**
 * Mengembalikan emoji ikon untuk hasil pencarian berdasarkan kategorinya.
 * Bekerja untuk kedua bahasa (id dan en).
 * @param {{ category: string }} result
 * @returns {string}
 */
export function getResultCategory(result) {
  return CATEGORY_ICON_MAP[result.category] ?? '🔍';
}
