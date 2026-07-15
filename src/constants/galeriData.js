import imgTariTortor from '@/assets/images/Budaya-Tradisi/tari-tor-tor-batak.png';
import imgMangalahatHorbo from '@/assets/images/Budaya-Tradisi/manghalat-horbo.jpg';
import imgUlosWeaving from '@/assets/images/Budaya-Tradisi/ulos-weaving-landscape.png';
import imgUlosCouple from '@/assets/images/Budaya-Tradisi/ulos-couple-portrait.png';
import imgTariSerampang from '@/assets/images/Budaya-Tradisi/tari-serampang-duabelas.png';
import imgTepungTawar from '@/assets/images/Budaya-Tradisi/tepung-tawar.png';
import imgMusikKompang from '@/assets/images/Budaya-Tradisi/musik-kompang.png';
import imgTariLandek from '@/assets/images/Budaya-Tradisi/tari-landek.png';
import imgFestivalKerjaTahun from '@/assets/images/Budaya-Tradisi/Festival-Kerja-Tahun.png';
import imgGendangLima from '@/assets/images/Budaya-Tradisi/Gendang-Lima-Sendalanen.png';
import imgDeepavali from '@/assets/images/Budaya-Tradisi/devapali-festival-medan.png';
import imgThaipusam from '@/assets/images/Budaya-Tradisi/thaipusam-india.png';
import imgBharatanatyam from '@/assets/images/Budaya-Tradisi/Tari-Bharatanatyam.png';
import imgBarongsai from '@/assets/images/Budaya-Tradisi/barongsai.png';
import imgCapGoMeh from '@/assets/images/Budaya-Tradisi/Festival-Cap-Go-Meh.png';
import imgWayangPotehi from '@/assets/images/Budaya-Tradisi/Wayang-Potehi.png';
import imgGordangSambilan from '@/assets/images/Budaya-Tradisi/gordang-sambilan.png';
// ─────────────────────────────────────────────────────────────────────────────
// KATEGORI FILTER (4 Kategori Asli + Semua Koleksi)
// ─────────────────────────────────────────────────────────────────────────────
export const galeriCategories = [
  'Semua Koleksi',
  'Seni Tari & Gerak',
  'Seni Musik & Instrumen',
  'Ritual & Upacara Adat',
  'Festival Budaya',
];

// ─────────────────────────────────────────────────────────────────────────────
// DATA GALERI (7 Lama + 11 Baru = 18 Total)
// ─────────────────────────────────────────────────────────────────────────────
// cardType: 'portrait' = md:row-span-2 (tall), 'landscape' = md:col-span-2 (wide), 'square' = 1x1
// imgSide: (only for landscape) 'left' | 'right'
export const galeriItems = [
  // ── KOLEKSI LAMA (7 item) ─────────────────────────────────────────────────
  {
    id: 1,
    title: 'Tari Tortor Sawan',
    category: 'Seni Tari & Gerak',
    koleksi: 'Suku Batak Toba',
    caption: 'Media komunikasi spiritual yang manifestasikan sakralitas kosmologi Batak Toba melalui gerak repetitif.',
    description: 'Media komunikasi spiritual yang manifestasikan sakralitas kosmologi Batak Toba melalui gerak repetitif.',
    image: imgTariTortor,
    cardType: 'portrait',
  },
  {
    id: 2,
    title: 'Mangalahat Horbo',
    category: 'Ritual & Upacara Adat',
    koleksi: 'Ritual & Upacara',
    caption: 'Upacara sakral masyarakat Batak yang melibatkan penyembelihan kerbau sebagai bentuk syukur dan kurban kepada Sang Pencipta.',
    description: 'Upacara sakral masyarakat Batak yang melibatkan penyembelihan kerbau sebagai bentuk syukur dan kurban kepada Sang Pencipta.',
    image: imgMangalahatHorbo,
    cardType: 'landscape',
    imgSide: 'left',
  },
  {
    id: 3,
    title: 'Gordang Sambilan',
    category: 'Seni Musik & Instrumen',
    koleksi: 'Mandailing',
    caption: 'Sembilan gendang kayu raksasa yang melambangkan kepemimpinan adat sakral.',
    description: 'Sembilan gendang kayu raksasa yang melambangkan kepemimpinan adat sakral.',
    image: imgGordangSambilan,
    cardType: 'square',
  },
  {
    id: 5,
    title: 'Seni Tenun Ulos Batak',
    category: 'Ritual & Upacara Adat',
    koleksi: 'Kriya & Tekstil',
    caption: 'Kain kebanggaan masyarakat Batak yang tidak hanya indah secara visual namun sarat akan makna filosofis kehidupan.',
    description: 'Kain kebanggaan masyarakat Batak yang tidak hanya indah secara visual namun sarat akan makna filosofis kehidupan.',
    image: imgUlosCouple,
    cardType: 'landscape',
    imgSide: 'right',
  },
  {
    id: 6,
    title: 'Tari Serampang Dua Belas',
    category: 'Seni Tari & Gerak',
    koleksi: 'Melayu Deli',
    caption: 'Tarian khas Melayu Deli yang menggambarkan perjalanan cinta dari perkenalan hingga pernikahan.',
    description: 'Ikon budaya Melayu Deli yang terdiri dari 12 rangkaian gerakan dinamis. Sering dipentaskan pada Festival Melayu Deli, penyambutan tamu kehormatan, serta upacara adat penting di Medan.',
    image: imgTariSerampang,
    cardType: 'portrait',
  },
  
  {
    id: 7,
    title: 'Kain Songket Melayu',
    category: 'Ritual & Upacara Adat',
    koleksi: 'Warisan Tenun Deli',
    caption: 'Kain mewah berhias benang emas yang menjadi simbol kebangsawanan dan keanggunan budaya Melayu di Pesisir Timur Sumatera.',
    description: 'Kain mewah berhias benang emas yang menjadi simbol kebangsawanan dan keanggunan budaya Melayu di Pesisir Timur Sumatera.',
    image: imgUlosWeaving,
    cardType: 'landscape',
    imgSide: 'left',
  },

  // ── KOLEKSI BARU (11 item) ────────────────────────────────────────────────

  // Seni Tari & Gerak + Ritual + Musik (Melayu)
  {
    id: 8,
    title: 'Tradisi Tepung Tawar',
    category: 'Ritual & Upacara Adat',
    koleksi: 'Melayu Deli',
    caption: 'Ritual adat Melayu sebagai simbol doa, restu, dan harapan akan keselamatan.',
    description: 'Ritual memercikkan air campuran bunga dan dedaunan sebagai bentuk pemberkatan. Hingga kini tetap hidup dalam pernikahan adat Melayu dan penyambutan tokoh penting di Kota Medan.',
    image: imgTepungTawar,
    cardType: 'square',
  },
  {
    id: 9,
    title: 'Musik Kompang',
    category: 'Seni Musik & Instrumen',
    koleksi: 'Melayu Deli',
    caption: 'Alunan rebana tradisional yang mengiringi berbagai upacara adat Melayu.',
    description: 'Alat musik pukul tradisional yang dimainkan secara ansambel (berkelompok). Menjadi ruh pengiring dalam pernikahan, hari besar keagamaan, serta festival budaya Melayu Deli.',
    image: imgMusikKompang,
    cardType: 'landscape',
    imgSide: 'right',
  },

  // Batak Karo
  {
    id: 10,
    title: 'Tari Landek',
    category: 'Seni Tari & Gerak',
    koleksi: 'Batak Karo',
    caption: 'Tarian tradisional Batak Karo yang melambangkan rasa syukur dan kebersamaan.',
    description: 'Tarian estetik khas Karo yang mengekspresikan penghormatan dan rasa syukur. Rutin dipentaskan pada pesta adat (kerja tahun) serta festival kebudayaan daerah di Medan.',
    image: imgTariLandek,
    cardType: 'portrait',
  },
  {
    id: 11,
    title: 'Festival Kerja Tahun',
    category: 'Festival Budaya',
    koleksi: 'Batak Karo',
    caption: 'Perayaan budaya masyarakat Karo sebagai ungkapan syukur atas hasil panen.',
    description: 'Pesta rakyat tahunan komunitas Karo yang menghadirkan pagelaran seni, musik tradisional, dan kuliner khas. Menjadi ruang silaturahmi sekaligus pelestarian budaya di tengah kota.',
    image: imgFestivalKerjaTahun,
    cardType: 'square',
  },
  {
    id: 12,
    title: 'Gendang Lima Sendalanen',
    category: 'Seni Musik & Instrumen',
    koleksi: 'Batak Karo',
    caption: 'Ansambel musik tradisional Karo yang mengiringi berbagai upacara adat.',
    description: 'Musik instrumental sakral yang terdiri dari lima instrumen utama Karo. Digunakan sebagai pengiring utama upacara adat, tari-tarian, dan pagelaran festival budaya Karo.',
    image: imgGendangLima,
    cardType: 'square',
  },

  // India Tamil
  {
    id: 13,
    title: 'Festival Deepavali',
    category: 'Festival Budaya',
    koleksi: 'India Tamil',
    caption: 'Perayaan cahaya yang menjadi simbol kemenangan kebaikan atas kejahatan.',
    description: 'Perayaan terbesar umat Hindu Tamil di kawasan Kampung Madras, Medan. Kawasan ini disulap menjadi penuh cahaya lampu hias, dekorasi kolam, pertunjukan seni, serta bazar kuliner.',
    image: imgDeepavali,
    cardType: 'square',
  },
  {
    id: 14,
    title: 'Thaipusam',
    category: 'Festival Budaya',
    koleksi: 'India Tamil',
    caption: 'Prosesi keagamaan masyarakat Tamil yang penuh makna spiritual.',
    description: 'Prosesi penghormatan Dewa Murugan yang dipusatkan di Kuil Shri Mariamman, Medan. Menjadi daya tarik wisata spiritual religius yang menunjukkan kekayaan multikultural kota.',
    image: imgThaipusam,
    cardType: 'landscape',
    imgSide: 'right',
  },
  {
    id: 15,
    title: 'Tari Bharatanatyam',
    category: 'Seni Tari & Gerak',
    koleksi: 'India Tamil',
    caption: 'Tarian klasik India yang memadukan gerak, ekspresi, dan cerita.',
    description: 'Seni tari klasik India tertua yang masih dijaga kelestariannya oleh generasi muda Tamil Medan. Menampilkan gerakan mata, tangan, dan kaki yang bercerita tentang kisah filosofis.',
    image: imgBharatanatyam,
    cardType: 'portrait',
  },

  // Tionghoa
  {
    id: 16,
    title: 'Barongsai',
    category: 'Festival Budaya',
    koleksi: 'Tionghoa',
    caption: 'Pertunjukan tari singa yang dipercaya membawa keberuntungan dan kemakmuran.',
    description: 'Kesenian tari singa akrobatik yang menjadi atraksi wajib selama Imlek di Kota Medan. Sering memadati area Kesawan, pusat perbelanjaan, vihara, dan berbagai festival multietnis.',
    image: imgBarongsai,
    cardType: 'square',
  },
  {
    id: 17,
    title: 'Festival Cap Go Meh',
    category: 'Festival Budaya',
    koleksi: 'Tionghoa',
    caption: 'Penutup rangkaian Tahun Baru Imlek yang dirayakan dengan meriah.',
    description: 'Perayaan malam ke-15 Imlek yang dimeriahkan parade Barongsai, festival lampion, bazar makanan khas Tionghoa Medan, serta panggung seni lintas budaya yang sangat inklusif.',
    image: imgCapGoMeh,
    cardType: 'landscape',
    imgSide: 'left',
  },
  {
    id: 18,
    title: 'Wayang Potehi',
    category: 'Ritual & Upacara Adat',
    koleksi: 'Seni Teater',
    caption: 'Pertunjukan boneka tradisional yang sarat nilai sejarah dan budaya.',
    description: 'Seni teater boneka kain klasik yang menceritakan legenda Tiongkok kuno. Di Medan, pertunjukan langka ini masih dipentaskan pada momen ulang tahun dewa-dewi di vihara-vihara tua.',
    image: imgWayangPotehi,
    cardType: 'square',
  },
];
