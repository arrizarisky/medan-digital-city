import imgMesjidRaya1 from '@/assets/images/detail/masjid raya 1.jpg';
import imgMesjidRaya2 from '@/assets/images/detail/masjid raya 2.jpg';
import imgMesjidRaya3 from '@/assets/images/detail/masjid raya 3.jpg';
import imgMesjidRaya4 from '@/assets/images/detail/masjid raya 4.jpg';
import imgMesjidRayaDalam from '@/assets/images/detail/masjid raya bagian dalam.jpg';
import imgMesjidRayaHero from '@/assets/images/mesjid-raya.jpg';

import imgIstanaMaimun from '@/assets/images/detail/istana maimun.jpg';
import imgKubahMaimun from '@/assets/images/detail/kubah istana maimun.jpg';
import imgRuanganMaimun from '@/assets/images/detail/ruangan di istana maimun.jpg';
import imgSinggasanaMaimun from '@/assets/images/detail/ruang singgasana istana maimun.jpg';
import imgIstanaHero from '@/assets/images/Bangunan-bersejarah/istana-maimun.png';

import imgTjongAfie from '@/assets/images/Bangunan-bersejarah/tjong-afie-mansion-2.png';
import imgTjongAfie2 from '@/assets/images/Bangunan-bersejarah/Tjong-AFie-Mansion.jpg';
import imgGerejaIndia from '@/assets/images/Budaya-Tradisi/gereja-india.png';
import imgCadika from '@/assets/images/Destinasi-Wisata/cadika.png';
import imgMuseum from '@/assets/images/Destinasi-Wisata/museum.png';
import imgKuil from '@/assets/images/detail/kuil india.png';
import imgKesultananDeli from '@/assets/images/detail/museum-sumut.png';

export const wisataDetailData = {
  'mesjid-raya': {
    slug: 'mesjid-raya',
    heroImage: imgMesjidRayaHero,
    badge: 'Religi',
    badgeColor: '#50652D',
    name: 'Masjid Raya Al-Mashun',
    subtitle: 'Permata Arsitektur Kesultanan Deli',
    builtYear: '1906',
    architect: 'Van Erp (Belanda)',
    shortAddress: 'Jl. Sisingamangaraja, Medan',
    ticketPrice: 'Gratis',
    description: [
      'Masjid Raya Al-Mashun adalah mahakarya arsitektur yang dibangun pada tahun 1906 atas perintah Sultan Deli, Ma\'mun Al Rasyid Perkasa Alamsyah. Masjid ini menjadi pusat spiritual dan budaya Kesultanan Deli serta merupakan salah satu masjid terindah dan bersejarah di Indonesia.',
      'Dirancang oleh arsitek Belanda dengan memadukan gaya arsitektur Melayu, Mughal India, dan Art Deco Eropa, bangunan ini menampilkan kubah utama yang megah, empat menara ramping, serta ornamen keramik Maroko dan lantai marmer Italia yang memukau.',
    ],
    attractionSectionTitle: 'Harmoni Tiga Budaya',
    attractionSectionSubtitle: 'Daya tarik unik yang menjadikan Masjid Raya Al-Mashun sebagai warisan arsitektur lintas peradaban.',
    attractions: [
      {
        title: 'Kubah & Menara Meghal India',
        description: 'Empat menara ramping berstyle Mughal India berdiri kokoh di setiap sudut, dihiasi ornamen geometris berwarna-warni yang mencerminkan kejayaan arsitektur Islam abad ke-20.',
      },
      {
        title: 'Ornamen Eropa & Maroko',
        description: 'Lantai marmer Italia, keramik Maroko berpola arabesque, dan jendela kaca patri Eropa berpadu harmonis menciptakan interior yang memukau secara visual.',
      },
      {
        title: 'Sentuhan Melayu yang Kental',
        description: 'Atap bertingkat dan ukiran kayu lokal yang kaya motif menjadi penanda kuat identitas Melayu Deli yang mewarnai seluruh sendi bangunan sakral ini.',
      },
    ],
    interiorImage: imgMesjidRayaDalam,
    architectureQuote: '"Sebuah masjid yang tidak hanya menjadi rumah ibadah, tetapi juga simbol peradaban yang melampaui batas etnis dan budaya."',
    info: [
      { label: 'Dibangun', value: '1906' },
      { label: 'Lokasi', value: 'Jl. Sisingamangaraja, Medan' },
      { label: 'Kategori', value: 'Situs Bersejarah & Religi' },
      { label: 'Tiket Masuk', value: 'Gratis' },
      { label: 'Jam Buka', value: '05.00 – 21.00 WIB' },
    ],
    gallery: [imgMesjidRaya1, imgMesjidRaya2, imgMesjidRaya3, imgMesjidRaya4],
    galleryCaption: 'Pesona Warisan',
    gallerySubtitle: 'Kemegahan arsitektur dan keindahan ornamen Masjid Raya Al-Mashun dari berbagai sudut pandang.',
    directionsSteps: [
      'Dari pusat kota Medan, ambil Jl. Pemuda menuju Jl. Sisingamangaraja.',
      'Masjid Raya Al-Mashun terletak sekitar 500m dari Lapangan Merdeka Medan.',
      'Tersedia lahan parkir luas di sebelah kanan gerbang utama.',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.006!2d98.681!3d3.5908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131c1a01a9c27%3A0x9d94e3e8e28fb9ba!2sMasjid%20Raya%20Al%20Mashun!5e0!3m2!1sid!2sid!4v1234567890',
    mapsLink: 'https://maps.app.goo.gl/mesjid-raya-medan',
    nearbyDestinations: ['istana-maimun', 'tjong-afie', 'museum'],
  },
  'istana-maimun': {
    slug: 'istana-maimun',
    heroImage: imgIstanaHero,
    badge: 'Sejarah',
    badgeColor: '#B28A32',
    name: 'Istana Maimun',
    subtitle: 'Mahkota Budaya Kesultanan Deli',
    builtYear: '1888',
    architect: 'T.H. van Erp',
    shortAddress: 'Jl. Brigjen Katamso, Medan',
    ticketPrice: 'Rp 8.000',
    description: [
      'Istana Maimun adalah istana kebanggaan Kesultanan Deli yang dibangun pada tahun 1888 atas perintah Sultan Ma\'mun Al Rasyid Perkasa Alamsyah. Dengan 30 ruangan megah, istana ini menampilkan perpaduan arsitektur Melayu, Islam, dan Eropa yang luar biasa indah.',
      'Hingga hari ini, istana ini masih dihuni oleh keluarga Kesultanan Deli dan menjadi ikon kebanggaan Kota Medan. Pengunjung dapat menyaksikan koleksi furnitur, foto bersejarah, serta replika peralatan kerajaan sambil menikmati indahnya interior bernuansa kuning keemasan.',
    ],
    attractionSectionTitle: 'Mahkota Tiga Peradaban',
    attractionSectionSubtitle: 'Istana Maimun adalah simbol kebijaksanaan Kesultanan Deli yang menyatukan tiga tradisi arsitektur dunia dalam satu bangunan megah.',
    attractions: [
      {
        title: 'Arsitektur Melayu yang Agung',
        description: 'Atap bergaya Melayu dengan ornamen khas dan dominasi warna kuning keemasan mencerminkan kejayaan dan keagungan Kesultanan Deli sebagai penguasa wilayah Sumatera Timur.',
      },
      {
        title: 'Sentuhan Eropa yang Elegan',
        description: 'Pintu melengkung bergaya Eropa, jendela kaca warna-warni, dan furnitur antik impor dari Eropa menjadi bukti hubungan diplomatik Kesultanan Deli dengan dunia Barat.',
      },
      {
        title: 'Nuansa Islam yang Kental',
        description: 'Kaligrafi Arab menghiasi dinding, serta struktur ruang yang mengikuti kaidah arsitektur Islam menjadikan Istana Maimun sebagai simbol kuat identitas Islam Kesultanan Deli.',
      },
    ],
    interiorImage: imgRuanganMaimun,
    architectureQuote: '"Istana ini bukan sekadar bangunan, melainkan kitab sejarah yang ditulis dalam bahasa arsitektur — cerita tentang kebanggaan, diplomasi, dan identitas Melayu Deli."',
    info: [
      { label: 'Dibangun', value: '1888' },
      { label: 'Lokasi', value: 'Jl. Brigadir Jenderal Katamso, Medan' },
      { label: 'Kategori', value: 'Istana & Situs Bersejarah' },
      { label: 'Tiket Masuk', value: 'Rp 8.000' },
      { label: 'Jam Buka', value: '08.00 – 17.00 WIB' },
    ],
    gallery: [imgIstanaMaimun, imgKubahMaimun, imgRuanganMaimun, imgSinggasanaMaimun],
    galleryCaption: 'Pesona Warisan',
    gallerySubtitle: 'Keagungan arsitektur and interior mewah Istana Maimun dari berbagai sudut.',
    directionsSteps: [
      'Dari Lapangan Merdeka, ambil Jl. Brigjen Katamso ke arah selatan ± 1.2 km.',
      'Istana Maimun terletak di sebelah kanan jalan, berdampingan dengan Masjid Raya.',
      'Parkir tersedia di area halaman depan istana.',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.006!2d98.680!3d3.5732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131!2sIstana+Maimun!5e0!3m2!1sid!2sid!4v1234567890',
    mapsLink: 'https://maps.app.goo.gl/istana-maimun-medan',
    nearbyDestinations: ['mesjid-raya', 'tjong-afie', 'museum'],
  },
  'tjong-afie': {
    slug: 'tjong-afie',
    heroImage: imgTjongAfie,
    badge: 'Sejarah',
    badgeColor: '#B28A32',
    name: 'Tjong A Fie Mansion',
    subtitle: 'Warisan Kejayaan Saudagar Tionghoa Medan',
    builtYear: '1895',
    architect: 'Arsitek Tionghoa-Eropa',
    shortAddress: 'Jl. Ahmad Yani, Kesawan',
    ticketPrice: 'Rp 35.000',
    description: [
      'Tjong A Fie Mansion adalah istana megah dua lantai yang dibangun pada tahun 1895 oleh Tjong A Fie, seorang saudagar dan tokoh filantropi legendaris dari etnis Tionghoa. Bangunan ini merupakan monumen bersejarah yang menceritakan era kejayaan perdagangan di Kota Medan abad ke-19.',
      'Arsitekturnya merupakan perpaduan unik antara gaya Tionghoa kuno, Melayu, dan Art Nouveau Eropa. Kini difungsikan sebagai museum yang menampilkan koleksi furnitur antik, foto bersejarah, serta artefak kehidupan kemewahan era kolonial.',
    ],
    attractionSectionTitle: 'Simfoni Tiga Kebudayaan',
    attractionSectionSubtitle: 'Tjong A Fie Mansion adalah bukti nyata bahwa keharmonisan lintas budaya telah lama mengakar di jantung Kota Medan.',
    attractions: [
      {
        title: 'Warisan Tionghoa yang Kaya',
        description: 'Ornamen naga, ukiran kayu bermotif bunga teratai, serta tata ruang Feng Shui yang kental menjadi identitas Tionghoa yang dominan dan memesona di setiap sudut bangunan.',
      },
      {
        title: 'Sentuhan Melayu yang Hangat',
        description: 'Perpaduan elemen Melayu pada pilar dan detail atap mencerminkan hubungan persaudaraan erat antara Tjong A Fie dengan Kesultanan Deli dan masyarakat Melayu Medan.',
      },
      {
        title: 'Kemewahan Eropa Art Nouveau',
        description: 'Furnitur impor Eropa, lantai keramik Portugis bermotif, dan jendela Art Nouveau menciptakan atmosfer museum hidup yang membawa pengunjung ke era kolonial abad ke-19.',
      },
    ],
    interiorImage: imgTjongAfie2,
    architectureQuote: '"Rumah ini adalah jembatan hidup antara Timur dan Barat — testament bahwa kemakmuran sejati lahir dari saling menghormati antar peradaban."',
    info: [
      { label: 'Dibangun', value: '1895' },
      { label: 'Lokasi', value: 'Jl. Ahmad Yani, Kesawan, Medan' },
      { label: 'Kategori', value: 'Museum & Situs Bersejarah' },
      { label: 'Tiket Masuk', value: 'Rp 35.000' },
      { label: 'Jam Buka', value: '09.00 – 17.00 WIB' },
    ],
    gallery: [imgTjongAfie, imgTjongAfie2],
    galleryCaption: 'Pesona Warisan',
    gallerySubtitle: 'Kemegahan arsitektur eklektik dan koleksi bersejarah Tjong A Fie Mansion.',
    directionsSteps: [
      'Dari Lapangan Merdeka, ikuti Jl. Ahmad Yani ke arah barat menuju kawasan Kesawan.',
      'Mansion terletak di sisi kanan jalan, dengan fasad kuning khas yang mudah dikenali.',
      'Parkir terbatas tersedia di bahu jalan depan bangunan.',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.006!2d98.677!3d3.5882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131b28!2sTjong+A+Fie+Mansion!5e0!3m2!1sid!2sid!4v1234567890',
    mapsLink: 'https://maps.app.goo.gl/tjong-afie-medan',
    nearbyDestinations: ['mesjid-raya', 'istana-maimun', 'graha-maria'],
  },
  'graha-maria': {
    slug: 'graha-maria',
    heroImage: imgGerejaIndia,
    badge: 'Religi',
    badgeColor: '#50652D',
    name: 'Graha Maria Velangkanni',
    subtitle: 'Destinasi Ziarah & Arsitektur Sakral',
    builtYear: '2001',
    architect: 'Komunitas Tamil Katolik',
    shortAddress: 'Jl. Sakura III, Tanjung Selamat',
    ticketPrice: 'Gratis',
    description: [
      'Graha Maria Annai Velangkanni adalah sebuah gereja Katolik yang menjadi destinasi ziarah ikonik di Kota Medan. Didirikan oleh komunitas umat Katolik India Tamil, gereja ini memiliki arsitektur yang sangat unik, memadukan gaya Indo-Mughal dengan ornamen khas India Selatan.',
      'Menara-menaranya yang berwarna-warni dan relief pahatan yang kaya menjadikan gereja ini sebagai salah satu bangunan paling memukau secara visual di Medan, sekaligus simbol kerukunan dan keindahan toleransi antarumat beragama.',
    ],
    attractionSectionTitle: 'Keajaiban Arsitektur Sakral',
    attractionSectionSubtitle: 'Graha Maria Velangkanni adalah monumen toleransi hidup yang memancarkan keindahan spiritual dan keharmonisan budaya di Kota Medan.',
    attractions: [
      {
        title: 'Arsitektur Indo-Mughal yang Memukau',
        description: 'Kubah berlapis dan menara berwarna-warni terinspirasi dari gaya Indo-Mughal India, menciptakan siluet yang sangat khas dan mudah dikenali dari kejauhan.',
      },
      {
        title: 'Relief & Pahatan India Selatan',
        description: 'Ratusan relief pahatan tangan menggambarkan kisah-kisah suci dan figur-figur devosi, dieksekusi dengan gaya tradisional India Selatan yang penuh ekspresi.',
      },
      {
        title: 'Simbol Toleransi Beragama',
        description: 'Keberadaan gereja ini di tengah kota yang majemuk menjadikannya simbol nyata toleransi dan kehidupan berdampingan yang harmonis antar komunitas di Medan.',
      },
    ],
    interiorImage: imgKuil,
    architectureQuote: '"Setiap warna, setiap ukiran adalah doa yang dibekukan dalam batu — persembahan indah komunitas Tamil kepada kota yang mereka cintai."',
    info: [
      { label: 'Lokasi', value: 'Jl. Sakura III, Tanjung Selamat, Medan' },
      { label: 'Kategori', value: 'Wisata Religi' },
      { label: 'Tiket Masuk', value: 'Gratis' },
      { label: 'Jam Buka', value: '06.00 – 21.00 WIB' },
    ],
    gallery: [imgGerejaIndia, imgKuil],
    galleryCaption: 'Pesona Warisan',
    gallerySubtitle: 'Kemegahan arsitektur Indo-Mughal Graha Maria Annai Velangkanni.',
    directionsSteps: [
      'Dari pusat kota, ambil Jl. Jamin Ginting ke arah Pancur Batu.',
      'Belok kiri ke Jl. Sakura III, gereja terletak sekitar 300m dari tikungan.',
      'Parkir tersedia di halaman dalam kompleks gereja.',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.006!2d98.701!3d3.623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131!2sGraha+Maria!5e0!3m2!1sid!2sid!4v1234567890',
    mapsLink: 'https://maps.app.goo.gl/graha-maria-medan',
    nearbyDestinations: ['mesjid-raya', 'museum', 'cadika'],
  },
  'cadika': {
    slug: 'cadika',
    heroImage: imgCadika,
    badge: 'Alam',
    badgeColor: '#50652D',
    name: 'Taman Cadika Pramuka',
    subtitle: 'Paru-Paru Hijau Kota Medan',
    builtYear: '1990',
    architect: 'Pemerintah Kota Medan',
    shortAddress: 'Jl. Karya Jasa, Medan Johor',
    ticketPrice: 'Rp 5.000',
    description: [
      'Taman Cadika Pramuka adalah salah satu ruang terbuka hijau terluas di Kota Medan. Dilengkapi dengan danau buatan yang tenang, area piknik, jogging track, dan zona bermain anak, taman ini menjadi destinasi rekreasi favorit keluarga di akhir pekan.',
      'Suasana asri dan udara segar di tengah kota menjadikan Taman Cadika sebagai oasis kehijauan yang memanjakan mata. Berbagai kegiatan komunitas, festival outdoor, dan perkemahan juga sering digelar di area taman yang luas ini.',
    ],
    attractionSectionTitle: 'Oasis Hijau di Jantung Kota',
    attractionSectionSubtitle: 'Taman Cadika Pramuka menawarkan ruang bernapas yang luas bagi warga Medan dengan berbagai fasilitas rekreasi yang lengkap.',
    attractions: [
      {
        title: 'Danau Buatan yang Tenang',
        description: 'Danau buatan di tengah taman menjadi magnet utama pengunjung. Aktivitas memancing, perahu dayung, dan piknik tepi danau menjadi pilihan favorit keluarga di akhir pekan.',
      },
      {
        title: 'Jogging Track & Area Olahraga',
        description: 'Jalur jogging melingkari taman sepanjang 2 km, dilengkapi area fitness outdoor dan lapangan olahraga yang terbuka untuk umum setiap hari.',
      },
      {
        title: 'Zona Bermain & Perkemahan',
        description: 'Area bermain anak yang aman dan lahan perkemahan yang luas menjadikan Cadika sebagai destinasi edukasi alam yang sempurna untuk keluarga dan komunitas pramuka.',
      },
    ],
    interiorImage: imgCadika,
    architectureQuote: '"Di tengah hiruk pikuk kota, Cadika adalah pengingat bahwa alam dan manusia bisa hidup berdampingan dengan damai."',
    info: [
      { label: 'Lokasi', value: 'Jl. Karya Jasa, Medan Johor' },
      { label: 'Kategori', value: 'Wisata Alam & Rekreasi' },
      { label: 'Tiket Masuk', value: 'Rp 5.000' },
      { label: 'Jam Buka', value: '06.00 – 18.00 WIB' },
    ],
    gallery: [imgCadika],
    galleryCaption: 'Pesona Alam',
    gallerySubtitle: 'Keindahan dan kesegaran Taman Cadika Pramuka di jantung Kota Medan.',
    directionsSteps: [
      'Dari pusat kota, ambil Jl. Karya menuju Medan Johor ke arah selatan.',
      'Taman Cadika terletak di Jl. Karya Jasa, mudah dijangkau dengan kendaraan pribadi.',
      'Parkir luas tersedia di area depan gerbang masuk taman.',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.006!2d98.690!3d3.556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131!2sCadika+Medan!5e0!3m2!1sid!2sid!4v1234567890',
    mapsLink: 'https://maps.app.goo.gl/cadika-medan',
    nearbyDestinations: ['museum', 'graha-maria', 'istana-maimun'],
  },
  'museum': {
    slug: 'museum',
    heroImage: imgMuseum,
    badge: 'Sejarah',
    badgeColor: '#B28A32',
    name: 'Museum Negeri Sumatera Utara',
    subtitle: 'Jendela Warisan Budaya Nusantara',
    builtYear: '1954',
    architect: 'Pemerintah RI',
    shortAddress: 'Jl. H.M. Joni No.51, Medan',
    ticketPrice: 'Rp 5.000',
    description: [
      'Museum Negeri Sumatera Utara adalah museum terbesar di Sumatera Utara yang menyimpan koleksi artefak, etnografi, geologi, dan sejarah dari seluruh penjuru provinsi. Museum ini menjadi pusat edukasi dan pelestarian warisan budaya Nusantara.',
      'Pengunjung dapat menjelajahi ribuan koleksi, mulai dari replika rumah adat berbagai etnis Sumatera Utara, koleksi ulos dan tekstil tradisional, senjata antik, hingga benda-benda peninggalan era kerajaan dan kolonial.',
    ],
    attractionSectionTitle: 'Khazanah Nusantara',
    attractionSectionSubtitle: 'Museum Negeri Sumatera Utara menyimpan ribuan artefak yang menceritakan kekayaan budaya dan sejarah peradaban Sumatera Utara.',
    attractions: [
      {
        title: 'Koleksi Etnografi Lengkap',
        description: 'Lebih dari 7.000 koleksi etnografi dari seluruh etnis Sumatera Utara, mulai dari Batak Toba, Karo, Simalungun, Mandailing, Melayu, hingga Nias tersimpan rapi di ruang pamer.',
      },
      {
        title: 'Artefak Kerajaan & Kolonial',
        description: 'Senjata, perhiasan, dan benda-benda pusaka dari era kerajaan-kerajaan Sumatera Utara hingga artefak era kolonial Belanda tersimpan sebagai bukti sejarah yang tak ternilai.',
      },
      {
        title: 'Replika Rumah Adat Tradisional',
        description: 'Replika rumah adat skala penuh dari berbagai etnis Sumatera Utara menjadi atraksi utama yang memungkinkan pengunjung memahami keanekaragaman budaya secara visual.',
      },
    ],
    interiorImage: imgKesultananDeli,
    architectureQuote: '"Museum ini adalah ingatan kolektif sebuah bangsa — tempat di mana setiap artefak berbicara tentang identitas, keberanian, dan kecerdasan nenek moyang kita."',
    info: [
      { label: 'Lokasi', value: 'Jl. H.M. Joni No.51, Medan' },
      { label: 'Kategori', value: 'Museum & Edukasi' },
      { label: 'Tiket Masuk', value: 'Rp 5.000' },
      { label: 'Jam Buka', value: '08.00 – 16.00 WIB (Selasa–Minggu)' },
    ],
    gallery: [imgMuseum, imgKesultananDeli],
    galleryCaption: 'Pesona Warisan',
    gallerySubtitle: 'Koleksi artefak dan warisan budaya Museum Negeri Sumatera Utara.',
    directionsSteps: [
      'Dari Lapangan Merdeka, ikuti Jl. Diponegoro ke arah timur menuju Jl. H.M. Joni.',
      'Museum terletak di sisi kanan jalan, ditandai dengan patung di halaman depan.',
      'Parkir tersedia di halaman dalam kompleks museum.',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.006!2d98.694!3d3.593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131!2sMuseum+Sumut!5e0!3m2!1sid!2sid!4v1234567890',
    mapsLink: 'https://maps.app.goo.gl/museum-sumut-medan',
    nearbyDestinations: ['mesjid-raya', 'istana-maimun', 'tjong-afie'],
  },
};