// ============================================================
// WISATA DATA — Halaman Wisata Medan Digital City
// Mendukung i18n: Bahasa Indonesia (id) dan English (en)
// ============================================================

import imgMesjidRaya from '@/assets/images/mesjid-raya.jpg';
import imgTjongAfie from '@/assets/images/tjong-afie-mansion.png';
import imgGerejaIndia from '@/assets/images/Budaya-Tradisi/gereja-india.png';
import imgCadika from '@/assets/images/Destinasi-Wisata/cadika.png';
import imgMuseum from '@/assets/images/Destinasi-Wisata/museum.png';
import imgKuliner from '@/assets/images/kuliner/kuliner.png';
import imgIstanaMaimun from '@/assets/images/Bangunan-bersejarah/istana-maimun.png';
import imgHeroBg from '@/assets/images/mesjid-raya.jpg';

// Ikon SVG lokal untuk Kategori Wisata
import iconAlatMakan from '@/assets/icons/alat-makan.svg';
import iconSejarah from '@/assets/icons/sejarah.svg';
import iconTopeng from '@/assets/icons/topeng.svg';

// ─── HERO SECTION ────────────────────────────────────────────
const heroData = {
  id: {
    headline: 'Jelajahi Pesona Kota Medan',
    subtitle:
      'Temukan harmoni antara warisan sejarah megah dan modernitas yang dinamis di jantung Sumatera Utara.',
    searchPlaceholder: 'Cari destinasi...',
    searchButton: 'Cari',
    filterLabels: ['Semua', 'Ziarah', 'Alam', 'Modern'],
    image: imgHeroBg,
  },
  en: {
    headline: 'Explore the Splendor of Medan City',
    subtitle:
      'Discover the harmony between majestic historical heritage and dynamic modernity in the heart of North Sumatra.',
    searchPlaceholder: 'Search destinations...',
    searchButton: 'Search',
    filterLabels: ['All', 'Pilgrimage', 'Nature', 'Modern'],
    image: imgHeroBg,
  },
};

// ─── DESTINASI TERPOPULER SECTION ────────────────────────────
const destinasiData = {
  id: {
    sectionLabel: 'PILIHAN UTAMA',
    sectionTitle: 'Destinasi Terpopuler',
    viewAll: 'Lihat Semua',
    viewLess: 'Lihat Sedikit',
    viewDetailBtn: 'Lihat Detail',
    items: [
      {
        id: 'mesjid-raya',
        name: 'Masjid Raya Al-Mashun',
        description:
          'Ikon arsitektur megah yang menjadi kebanggaan sejarah dan keindahan kota Medan.',
        badge: 'Religi',
        badgeColor: 'green',
        image: imgMesjidRaya,
        path: '/wisata/mesjid-raya',
      },
      {
        id: 'tjong-afie',
        name: 'Tjong A Fie Mansion',
        description:
        'Rumah bersejarah milik saudagar Tionghoa yang menjadi museum budaya lintas etnis.',
        badge: 'Sejarah',
        badgeColor: 'yellow',
        image: imgTjongAfie,
        path: '/wisata/tjong-afie',
      },
      {
        id: 'graha-maria',
        name: 'Graha Maria Velangkanni',
        description:
          'Gereja Katolik dengan arsitektur unik yang menjadi destinasi ziarah dan wisata religi.',
        badge: 'Religi',
        badgeColor: 'green',
        image: imgGerejaIndia,
        path: '/wisata/graha-maria',
      },
      {
        id: 'istana-maimun',
        name: 'Istana Maimun',
        description:
          'Istana megah Kesultanan Deli yang dibangun tahun 1888, perpaduan arsitektur Melayu, Islam, dan Eropa.',
        badge: 'Sejarah',
        badgeColor: 'yellow',
        image: imgIstanaMaimun,
        path: '/wisata/istana-maimun',
      },
      {
        id: 'cadika',
        name: 'Taman Cadika Pramuka',
        description:
          'Ruang hijau terbuka keluarga yang luas, dilengkapi danau buatan dan area bermain yang menyegarkan.',
        badge: 'Alam',
        badgeColor: 'green',
        image: imgCadika,
        path: '/wisata/cadika',
      },
      {
        id: 'museum-medan',
        name: 'Museum Negeri Sumatera Utara',
        description:
          'Koleksi artefak dan warisan budaya Sumatera Utara yang komprehensif dari berbagai era sejarah.',
        badge: 'Sejarah',
        badgeColor: 'yellow',
        image: imgMuseum,
        path: '/wisata/museum',
      },
    ],
  },
  en: {
    sectionLabel: 'TOP PICKS',
    sectionTitle: 'Most Popular Destinations',
    viewAll: 'View All',
    viewLess: 'Show Less',
    viewDetailBtn: 'View Detail',
    items: [
      {
        id: 'mesjid-raya',
        name: 'Masjid Raya Al-Mashun',
        description:
          "An iconic majestic architectural landmark that is the pride of Medan's history and beauty.",
        badge: 'Religious',
        badgeColor: 'green',
        image: imgMesjidRaya,
        path: '/wisata/mesjid-raya',
      },
      {
        id: 'tjong-afie',
        name: 'Tjong A Fie Mansion',
        description:
          'A historic house owned by a Chinese merchant, now a cross-ethnic cultural museum.',
        badge: 'History',
        badgeColor: 'yellow',
        image: imgTjongAfie,
        path: '/wisata/tjong-afie',
      },
      {
        id: 'graha-maria',
        name: 'Graha Maria Velangkanni',
        description:
          'A Catholic church with unique architecture serving as a pilgrimage and religious tourism destination.',
        badge: 'Religious',
        badgeColor: 'green',
        image: imgGerejaIndia,
        path: '/wisata/graha-maria',
      },
      {
        id: 'istana-maimun',
        name: 'Maimun Palace',
        description:
          'The grand palace of the Deli Sultanate built in 1888, a blend of Malay, Islamic, and European architecture.',
        badge: 'History',
        badgeColor: 'yellow',
        image: imgIstanaMaimun,
        path: '/wisata/istana-maimun',
      },
      {
        id: 'cadika',
        name: 'Cadika Scout Park',
        description:
          'A wide open green family space, equipped with an artificial lake and refreshing play areas.',
        badge: 'Nature',
        badgeColor: 'green',
        image: imgCadika,
        path: '/wisata/cadika',
      },
      {
        id: 'museum-medan',
        name: 'North Sumatra State Museum',
        description:
          'A comprehensive collection of artifacts and cultural heritage of North Sumatra from various historical eras.',
        badge: 'History',
        badgeColor: 'yellow',
        image: imgMuseum,
        path: '/wisata/museum',
      },
    ],
  },
};

// ─── KATEGORI WISATA SECTION ──────────────────────────────────
const kategoriData = {
  id: {
    sectionTitle: 'Eksplorasi Berdasarkan Kategori',
    sectionSubtitle:
      'Sesuaikan rencana perjalanan Anda dengan ragam kategori wisata yang berbeda.',
    items: [
      {
        id: 'kuliner',
        icon: iconAlatMakan,
        name: 'Wisata Kuliner',
        description:
          'Nikmati kekayaan cita rasa kuliner khas Medan yang terkenal lezat dan beragam di setiap sudut kota.',
        image: imgKuliner,
        path: '/kuliner',
      },
      {
        id: 'sejarah',
        icon: iconSejarah,
        name: 'Wisata Sejarah',
        description:
          'Telusuri bangunan-bangunan bersejarah yang menjadi saksi bisu perjalanan panjang kota Medan.',
        image: imgMesjidRaya,
        path: '/sejarah',
      },
      {
        id: 'taman',
        icon: iconTopeng,
        name: 'Wisata Budaya',
        description:
          'Selami kekayaan adat, kesenian, dan tradisi dari beragam etnis yang membentuk identitas unik kota Medan.',
        image: imgCadika,
        path: '/budaya',
      },
    ],
  },
  en: {
    sectionTitle: 'Explore by Category',
    sectionSubtitle:
      'Tailor your travel plans to a diverse range of different tourism categories.',
    items: [
      {
        id: 'kuliner',
        icon: iconAlatMakan,
        name: 'Culinary Tourism',
        description:
          "Enjoy the richness of Medan's signature culinary flavors, famous for being delicious and diverse throughout the city.",
        image: imgKuliner,
        path: '/kuliner',
      },
      {
        id: 'sejarah',
        icon: iconSejarah,
        name: 'Historical Tourism',
        description:
          "Explore historical buildings that serve as silent witnesses to Medan's long journey through time.",
        image: imgMesjidRaya,
        path: '/sejarah',
      },
      {
        id: 'taman',
        icon: iconTopeng,
        name: 'Cultural Tourism',
        description:
          "Immerse yourself in the rich customs, arts, and traditions of the diverse ethnic groups that shape Medan's unique identity.",
        image: imgCadika,
        path: '/budaya',
      },
    ],
  },
};

// ─── PETA WISATA SECTION ──────────────────────────────────────
const petaData = {
  id: {
    sectionLabel: 'INTERAKTIF',
    sectionTitle: 'Peta Wisata Medan',
    description:
      'Temukan semua destinasi wisata terbaik Kota Medan dalam satu peta terintegrasi. Dari situs bersejarah hingga pusat kuliner, semua ada di sini.',
    stats: [
      { icon: '📍', value: '65+', label: 'Destinasi Sejarah' },
      { icon: '🍽️', value: '60+', label: 'Jenis Kuliner' },
    ],
    mapPlaceholderTitle: 'Peta Wisata Interaktif',
    mapPlaceholderSubtitle: 'Segera Hadir',
    mapPlaceholderNote: 'Peta interaktif sedang dalam pengembangan',
  },
  en: {
    sectionLabel: 'INTERACTIVE',
    sectionTitle: 'Medan Tourism Map',
    description:
      'Find all the best tourist destinations in Medan City on one integrated map. From historical sites to culinary centers, everything is here.',
    stats: [
      { icon: '📍', value: '65+', label: 'Historical Destinations' },
      { icon: '🍽️', value: '60+', label: 'Culinary Varieties' },
    ],
    mapPlaceholderTitle: 'Interactive Tourism Map',
    mapPlaceholderSubtitle: 'Coming Soon',
    mapPlaceholderNote: 'Interactive map is currently under development',
  },
};

// ─── EXPORT ───────────────────────────────────────────────────
export const wisataContent = {
  id: {
    hero: heroData.id,
    destinasi: destinasiData.id,
    kategori: kategoriData.id,
    peta: petaData.id,
  },
  en: {
    hero: heroData.en,
    destinasi: destinasiData.en,
    kategori: kategoriData.en,
    peta: petaData.en,
  },
};
