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

export const galeriCategories = {
  id: [
    'Semua Koleksi',
    'Seni Tari & Gerak',
    'Seni Musik & Instrumen',
    'Ritual & Upacara Adat',
    'Festival Budaya',
  ],
  en: [
    'All Collections',
    'Dance & Movement Arts',
    'Music & Instruments Arts',
    'Ritual & Traditional Ceremonies',
    'Cultural Festivals',
  ],
};

export const galeriItems = [
  {
    id: 1,
    title: { id: 'Tari Tortor Sawan', en: 'Tortor Sawan Dance' },
    category: { id: 'Seni Tari & Gerak', en: 'Dance & Movement Arts' },
    koleksi: { id: 'Suku Batak Toba', en: 'Batak Toba Ethnic' },
    caption: { id: 'Media komunikasi spiritual yang manifestasikan sakralitas kosmologi Batak Toba melalui gerak repetitif.', en: 'A spiritual communication medium that manifests the sacredness of Batak Toba cosmology through repetitive movements.' },
    description: { id: 'Media komunikasi spiritual yang manifestasikan sakralitas kosmologi Batak Toba melalui gerak repetitif.', en: 'A spiritual communication medium that manifests the sacredness of Batak Toba cosmology through repetitive movements.' },
    image: imgTariTortor,
    cardType: 'portrait',
  },
  {
    id: 2,
    title: { id: 'Mangalahat Horbo', en: 'Mangalahat Horbo' },
    category: { id: 'Ritual & Upacara Adat', en: 'Ritual & Traditional Ceremonies' },
    koleksi: { id: 'Ritual & Upacara', en: 'Ritual & Ceremony' },
    caption: { id: 'Upacara sakral masyarakat Batak yang melibatkan penyembelihan kerbau sebagai bentuk syukur dan kurban kepada Sang Pencipta.', en: 'A sacred Batak community ceremony involving buffalo slaughter as a form of gratitude and sacrifice to the Creator.' },
    description: { id: 'Upacara sakral masyarakat Batak yang melibatkan penyembelihan kerbau sebagai bentuk syukur dan kurban kepada Sang Pencipta.', en: 'A sacred Batak community ceremony involving buffalo slaughter as a form of gratitude and sacrifice to the Creator.' },
    image: imgMangalahatHorbo,
    cardType: 'landscape',
    imgSide: 'left',
  },
  {
    id: 3,
    title: { id: 'Gordang Sambilan', en: 'Gordang Sambilan' },
    category: { id: 'Seni Musik & Instrumen', en: 'Music & Instruments Arts' },
    koleksi: { id: 'Mandailing', en: 'Mandailing' },
    caption: { id: 'Sembilan gendang kayu raksasa yang melambangkan kepemimpinan adat sakral.', en: 'Nine giant wooden drums symbolizing sacred traditional leadership.' },
    description: { id: 'Sembilan gendang kayu raksasa yang melambangkan kepemimpinan adat sakral.', en: 'Nine giant wooden drums symbolizing sacred traditional leadership.' },
    image: imgGordangSambilan,
    cardType: 'square',
  },
  {
    id: 5,
    title: { id: 'Seni Tenun Ulos Batak', en: 'Batak Ulos Weaving Art' },
    category: { id: 'Ritual & Upacara Adat', en: 'Ritual & Traditional Ceremonies' },
    koleksi: { id: 'Kriya & Tekstil', en: 'Craft & Textile' },
    caption: { id: 'Kain kebanggaan masyarakat Batak yang tidak hanya indah secara visual namun sarat akan makna filosofis kehidupan.', en: 'Batak community pride cloth, not only visually beautiful but full of philosophical life meanings.' },
    description: { id: 'Kain kebanggaan masyarakat Batak yang tidak hanya indah secara visual namun sarat akan makna filosofis kehidupan.', en: 'Batak community pride cloth, not only visually beautiful but full of philosophical life meanings.' },
    image: imgUlosCouple,
    cardType: 'landscape',
    imgSide: 'right',
  },
  {
    id: 6,
    title: { id: 'Tari Serampang Dua Belas', en: 'Serampang Dua Belas Dance' },
    category: { id: 'Seni Tari & Gerak', en: 'Dance & Movement Arts' },
    koleksi: { id: 'Melayu Deli', en: 'Deli Malay' },
    caption: { id: 'Tarian khas Melayu Deli yang menggambarkan perjalanan cinta dari perkenalan hingga pernikahan.', en: 'A typical Deli Malay dance depicting a love journey from introduction to marriage.' },
    description: { id: 'Ikon budaya Melayu Deli yang terdiri dari 12 rangkaian gerakan dinamis. Sering dipentaskan pada Festival Melayu Deli, penyambutan tamu kehormatan, serta upacara adat penting di Medan.', en: 'A Deli Malay cultural icon consisting of 12 dynamic movement sequences. Often performed at the Deli Malay Festival, reception of distinguished guests, and important traditional ceremonies in Medan.' },
    image: imgTariSerampang,
    cardType: 'portrait',
  },
  
  {
    id: 7,
    title: { id: 'Kain Songket Melayu', en: 'Malay Songket Cloth' },
    category: { id: 'Ritual & Upacara Adat', en: 'Ritual & Traditional Ceremonies' },
    koleksi: { id: 'Warisan Tenun Deli', en: 'Deli Weaving Heritage' },
    caption: { id: 'Kain mewah berhias benang emas yang menjadi simbol kebangsawanan dan keanggunan budaya Melayu di Pesisir Timur Sumatera.', en: 'Luxury cloth decorated with gold thread, a symbol of nobility and elegance of Malay culture on the East Coast of Sumatra.' },
    description: { id: 'Kain mewah berhias benang emas yang menjadi simbol kebangsawanan dan keanggunan budaya Melayu di Pesisir Timur Sumatera.', en: 'Luxury cloth decorated with gold thread, a symbol of nobility and elegance of Malay culture on the East Coast of Sumatra.' },
    image: imgUlosWeaving,
    cardType: 'landscape',
    imgSide: 'left',
  },

  // Seni Tari & Gerak + Ritual + Musik (Melayu)
  {
    id: 8,
    title: { id: 'Tradisi Tepung Tawar', en: 'Tepung Tawar Tradition' },
    category: { id: 'Ritual & Upacara Adat', en: 'Ritual & Traditional Ceremonies' },
    koleksi: { id: 'Melayu Deli', en: 'Deli Malay' },
    caption: { id: 'Ritual adat Melayu sebagai simbol doa, restu, dan harapan akan keselamatan.', en: 'A Malay traditional ritual as a symbol of prayer, blessing, and hope for safety.' },
    description: { id: 'Ritual memercikkan air campuran bunga dan dedaunan sebagai bentuk pemberkatan. Hingga kini tetap hidup dalam pernikahan adat Melayu dan penyambutan tokoh penting di Kota Medan.', en: 'Ritual of sprinkling water mixed with flowers and leaves as a form of blessing. Still alive today in Malay traditional weddings and reception of important figures in Medan City.' },
    image: imgTepungTawar,
    cardType: 'square',
  },
  {
    id: 9,
    title: { id: 'Musik Kompang', en: 'Kompang Music' },
    category: { id: 'Seni Musik & Instrumen', en: 'Music & Instruments Arts' },
    koleksi: { id: 'Melayu Deli', en: 'Deli Malay' },
    caption: { id: 'Alunan rebana tradisional yang mengiringi berbagai upacara adat Melayu.', en: 'Traditional rebana tunes accompanying various Malay traditional ceremonies.' },
    description: { id: 'Alat musik pukul tradisional yang dimainkan secara ansambel (berkelompok). Menjadi ruh pengiring dalam pernikahan, hari besar keagamaan, serta festival budaya Melayu Deli.', en: 'A traditional percussion instrument played in an ensemble (group). Being the soul accompaniment in weddings, religious holidays, and Deli Malay cultural festivals.' },
    image: imgMusikKompang,
    cardType: 'landscape',
    imgSide: 'right',
  },

  // Batak Karo
  {
    id: 10,
    title: { id: 'Tari Landek', en: 'Landek Dance' },
    category: { id: 'Seni Tari & Gerak', en: 'Dance & Movement Arts' },
    koleksi: { id: 'Batak Karo', en: 'Batak Karo' },
    caption: { id: 'Tarian tradisional Batak Karo yang melambangkan rasa syukur dan kebersamaan.', en: 'A Batak Karo traditional dance symbolizing gratitude and togetherness.' },
    description: { id: 'Tarian estetik khas Karo yang mengekspresikan penghormatan dan rasa syukur. Rutin dipentaskan pada pesta adat (kerja tahun) serta festival kebudayaan daerah di Medan.', en: 'A typical Karo aesthetic dance expressing respect and gratitude. Routinely performed at traditional parties (kerja tahun) and regional cultural festivals in Medan.' },
    image: imgTariLandek,
    cardType: 'portrait',
  },
  {
    id: 11,
    title: { id: 'Festival Kerja Tahun', en: 'Kerja Tahun Festival' },
    category: { id: 'Festival Budaya', en: 'Cultural Festivals' },
    koleksi: { id: 'Batak Karo', en: 'Batak Karo' },
    caption: { id: 'Perayaan budaya masyarakat Karo sebagai ungkapan syukur atas hasil panen.', en: 'Karo community cultural celebration as an expression of gratitude for harvests.' },
    description: { id: 'Pesta rakyat tahunan komunitas Karo yang menghadirkan pagelaran seni, musik tradisional, dan kuliner khas. Menjadi ruang silaturahmi sekaligus pelestarian budaya di tengah kota.', en: 'Annual Karo community folk party featuring art performances, traditional music, and specialty cuisine. Becoming a space for friendship as well as cultural preservation in the middle of the city.' },
    image: imgFestivalKerjaTahun,
    cardType: 'square',
  },
  {
    id: 12,
    title: { id: 'Gendang Lima Sendalanen', en: 'Gendang Lima Sendalanen' },
    category: { id: 'Seni Musik & Instrumen', en: 'Music & Instruments Arts' },
    koleksi: { id: 'Batak Karo', en: 'Batak Karo' },
    caption: { id: 'Ansambel musik tradisional Karo yang mengiringi berbagai upacara adat.', en: 'Karo traditional music ensemble accompanying various traditional ceremonies.' },
    description: { id: 'Musik instrumental sakral yang terdiri dari lima instrumen utama Karo. Digunakan sebagai pengiring utama upacara adat, tari-tarian, dan pagelaran festival budaya Karo.', en: 'Sacred instrumental music consisting of five main Karo instruments. Used as the main accompaniment for traditional ceremonies, dances, and Karo cultural festival performances.' },
    image: imgGendangLima,
    cardType: 'square',
  },

  // India Tamil
  {
    id: 13,
    title: { id: 'Festival Deepavali', en: 'Deepavali Festival' },
    category: { id: 'Festival Budaya', en: 'Cultural Festivals' },
    koleksi: { id: 'India Tamil', en: 'Tamil Indian' },
    caption: { id: 'Perayaan cahaya yang menjadi simbol kemenangan kebaikan atas kejahatan.', en: 'The celebration of light as a symbol of the victory of good over evil.' },
    description: { id: 'Perayaan terbesar umat Hindu Tamil di kawasan Kampung Madras, Medan. Kawasan ini disulap menjadi penuh cahaya lampu hias, dekorasi kolam, pertunjukan seni, serta bazar kuliner.', en: 'The biggest celebration of Tamil Hindu community in Kampung Madras, Medan. This area is transformed into full of decorative lights, kolam decorations, art performances, and culinary bazaars.' },
    image: imgDeepavali,
    cardType: 'square',
  },
  {
    id: 14,
    title: { id: 'Thaipusam', en: 'Thaipusam' },
    category: { id: 'Festival Budaya', en: 'Cultural Festivals' },
    koleksi: { id: 'India Tamil', en: 'Tamil Indian' },
    caption: { id: 'Prosesi keagamaan masyarakat Tamil yang penuh makna spiritual.', en: 'Tamil community religious procession full of spiritual meaning.' },
    description: { id: 'Prosesi penghormatan Dewa Murugan yang dipusatkan di Kuil Shri Mariamman, Medan. Menjadi daya tarik wisata spiritual religius yang menunjukkan kekayaan multikultural kota.', en: 'Procession honoring Lord Murugan centered at Shri Mariamman Temple, Medan. Becoming a religious spiritual tourism attraction showing the city\'s multicultural richness.' },
    image: imgThaipusam,
    cardType: 'landscape',
    imgSide: 'right',
  },
  {
    id: 15,
    title: { id: 'Tari Bharatanatyam', en: 'Bharatanatyam Dance' },
    category: { id: 'Seni Tari & Gerak', en: 'Dance & Movement Arts' },
    koleksi: { id: 'India Tamil', en: 'Tamil Indian' },
    caption: { id: 'Tarian klasik India yang memadukan gerak, ekspresi, dan cerita.', en: 'A classical Indian dance combining movement, expression, and story.' },
    description: { id: 'Seni tari klasik India tertua yang masih dijaga kelestariannya oleh generasi muda Tamil Medan. Menampilkan gerakan mata, tangan, dan kaki yang bercerita tentang kisah filosofis.', en: 'The oldest Indian classical dance art still preserved by young Tamil Medan generations. Featuring eye, hand, and foot movements telling philosophical stories.' },
    image: imgBharatanatyam,
    cardType: 'portrait',
  },

  // Tionghoa
  {
    id: 16,
    title: { id: 'Barongsai', en: 'Barongsai (Lion Dance)' },
    category: { id: 'Festival Budaya', en: 'Cultural Festivals' },
    koleksi: { id: 'Tionghoa', en: 'Chinese' },
    caption: { id: 'Pertunjukan tari singa yang dipercaya membawa keberuntungan dan kemakmuran.', en: 'A lion dance performance believed to bring good luck and prosperity.' },
    description: { id: 'Kesenian tari singa akrobatik yang menjadi atraksi wajib selama Imlek di Kota Medan. Sering memadati area Kesawan, pusat perbelanjaan, vihara, dan berbagai festival multietnis.', en: 'Acrobatic lion dance art that is a mandatory attraction during Chinese New Year in Medan City. Often crowds the Kesawan area, shopping centers, temples, and various multicultural festivals.' },
    image: imgBarongsai,
    cardType: 'square',
  },
  {
    id: 17,
    title: { id: 'Festival Cap Go Meh', en: 'Cap Go Meh Festival' },
    category: { id: 'Festival Budaya', en: 'Cultural Festivals' },
    koleksi: { id: 'Tionghoa', en: 'Chinese' },
    caption: { id: 'Penutup rangkaian Tahun Baru Imlek yang dirayakan dengan meriah.', en: 'Closing of the Chinese New Year series celebrated lively.' },
    description: { id: 'Perayaan malam ke-15 Imlek yang dimeriahkan parade Barongsai, festival lampion, bazar makanan khas Tionghoa Medan, serta panggung seni lintas budaya yang sangat inklusif.', en: '15th night of Chinese New Year celebration enlivened by Barongsai parades, lantern festivals, Medan Chinese specialty food bazaars, and a very inclusive cross-cultural art stage.' },
    image: imgCapGoMeh,
    cardType: 'landscape',
    imgSide: 'left',
  },
  {
    id: 18,
    title: { id: 'Wayang Potehi', en: 'Wayang Potehi (Glove Puppet)' },
    category: { id: 'Ritual & Upacara Adat', en: 'Ritual & Traditional Ceremonies' },
    koleksi: { id: 'Seni Teater', en: 'Theater Arts' },
    caption: { id: 'Pertunjukan boneka tradisional yang sarat nilai sejarah dan budaya.', en: 'Traditional puppet performance full of historical and cultural values.' },
    description: { id: 'Seni teater boneka kain klasik yang menceritakan legenda Tiongkok kuno. Di Medan, pertunjukan langka ini masih dipentaskan pada momen ulang tahun dewa-dewi di vihara-vihara tua.', en: 'Classic cloth puppet theater art telling ancient Chinese legends. In Medan, this rare performance is still staged at deity birthday moments in old temples.' },
    image: imgWayangPotehi,
    cardType: 'square',
  },
];
