// ============================================================
// wisataDetailData.js — Data halaman Detail Destinasi Wisata
// ============================================================

import imgMesjidRaya1 from "@/assets/images/detail/masjid raya 1.jpg";
import imgMesjidRaya2 from "@/assets/images/detail/masjid raya 2.jpg";
import imgMesjidRaya3 from "@/assets/images/detail/masjid raya 3.jpg";
import imgMesjidRaya4 from "@/assets/images/detail/masjid raya 4.jpg";
import imgMesjidRayaDalam from "@/assets/images/detail/masjid raya bagian dalam.jpg";
import imgMesjidRayaHero from "@/assets/images/mesjid-raya.jpg";

import imgIstanaMaimun from "@/assets/images/detail/istana maimun.jpg";
import imgKubahMaimun from "@/assets/images/detail/kubah istana maimun.jpg";
import imgRuanganMaimun from "@/assets/images/detail/ruangan di istana maimun.jpg";
import imgSinggasanaMaimun from "@/assets/images/detail/ruang singgasana istana maimun.jpg";
import imgIstanaHero from "@/assets/images/Bangunan-bersejarah/istana-maimun.png";

import imgTjongAfie from "@/assets/images/Bangunan-bersejarah/tjong-afie-mansion-2.png";
import imgTjongAfie2 from "@/assets/images/Bangunan-bersejarah/Tjong-AFie-Mansion.jpg";
import imgGerejaIndia from "@/assets/images/Budaya-Tradisi/gereja-india.png";
import imgCadika from "@/assets/images/Destinasi-Wisata/cadika.png";
import imgMuseum from "@/assets/images/Destinasi-Wisata/museum.png";
import imgKuil from "@/assets/images/detail/kuil india.png";
import imgKesultananDeli from "@/assets/images/detail/museum-sumut.png";

export const wisataDetailData = {
  "mesjid-raya": {
    slug: "mesjid-raya",
    heroImage: imgMesjidRayaHero,
    badge: { id: "Religi", en: "Religious" },
    badgeColor: "#50652D",
    name: { id: "Masjid Raya Al-Mashun", en: "Al-Mashun Grand Mosque" },
    subtitle: {
      id: "Permata Arsitektur Kesultanan Deli",
      en: "The Jewel of Deli Sultanate Architecture",
    },

    // ── Info boxes melayang di Hero ──
    builtYear: { id: "1906", en: "1906" },
    architect: { id: "Van Erp (Belanda)", en: "Van Erp (Netherlands)" },
    shortAddress: {
      id: "Jl. Sisingamangaraja, Medan",
      en: "Sisingamangaraja Street, Medan",
    },
    ticketPrice: { id: "Gratis", en: "Free" },

    description: {
      id: [
        "Masjid Raya Al-Mashun adalah mahakarya arsitektur yang dibangun pada tahun 1906 atas perintah Sultan Deli, Ma'mun Al Rasyid Perkasa Alamsyah. Masjid ini menjadi pusat spiritual dan budaya Kesultanan Deli serta merupakan salah satu masjid terindah dan bersejarah di Indonesia.",
        "Dirancang oleh arsitek Belanda dengan memadukan gaya arsitektur Melayu, Mughal India, dan Art Deco Eropa, bangunan ini menampilkan kubah utama yang megah, empat menara ramping, serta ornamen keramik Maroko dan lantai marmer Italia yang memukau.",
      ],
      en: [
        "Al-Mashun Grand Mosque is an architectural masterpiece built in 1906 on the orders of the Deli Sultan, Ma'mun Al Rasyid Perkasa Alamsyah. This mosque became the spiritual and cultural center of the Deli Sultanate and is one of the most beautiful and historic mosques in Indonesia.",
        "Designed by Dutch architects combining Malay, Indian Mughal, and European Art Deco architectural styles, this building features a magnificent main dome, four slender minarets, stunning Moroccan ceramic ornaments, and Italian marble floors.",
      ],
    },

    // ── Section "Harmoni Tiga Budaya" ──
    attractionSectionTitle: {
      id: "Harmoni Tiga Budaya",
      en: "Harmony of Three Cultures",
    },
    attractionSectionSubtitle: {
      id: "Daya tarik unik yang menjadikan Masjid Raya Al-Mashun sebagai warisan arsitektur lintas peradaban.",
      en: "Unique attractions that make Al-Mashun Grand Mosque a cross-civilization architectural heritage.",
    },
    attractions: [
      {
        title: {
          id: "Kubah & Menara Meghal India",
          en: "Indian Mughal Dome & Minarets",
        },
        description: {
          id: "Empat menara ramping berstyle Mughal India berdiri kokoh di setiap sudut, dihiasi ornamen geometris berwarna-warni yang mencerminkan kejayaan arsitektur Islam abad ke-20.",
          en: "Four slender Indian Mughal-style minarets stand firmly at each corner, decorated with colorful geometric ornaments reflecting the glory of 20th-century Islamic architecture.",
        },
      },
      {
        title: {
          id: "Ornamen Eropa & Maroko",
          en: "European & Moroccan Ornaments",
        },
        description: {
          id: "Lantai marmer Italia, keramik Maroko berpola arabesque, dan jendela kaca patri Eropa berpadu harmonis menciptakan interior yang memukau secara visual.",
          en: "Italian marble floors, Moroccan arabesque ceramic tiles, and European stained glass windows blend harmoniously to create a visually stunning interior.",
        },
      },
      {
        title: { id: "Sentuhan Melayu yang Kental", en: "Strong Malay Touch" },
        description: {
          id: "Atap bertingkat dan ukiran kayu lokal yang kaya motif menjadi penanda kuat identitas Melayu Deli yang mewarnai seluruh sendi bangunan sakral ini.",
          en: "Tiered roofs and richly patterned local wood carvings are strong markers of Deli Malay identity that color every part of this sacred building.",
        },
      },
    ],
    interiorImage: imgMesjidRayaDalam,
    architectureQuote: {
      id: '"Sebuah masjid yang tidak hanya menjadi rumah ibadah, tetapi juga simbol peradaban yang melampaui batas etnis dan budaya."',
      en: '"A mosque that is not only a house of worship, but also a symbol of civilization that transcends ethnic and cultural boundaries."',
    },

    info: [
      {
        label: { id: "Dibangun", en: "Built" },
        value: { id: "1906", en: "1906" },
      },
      {
        label: { id: "Lokasi", en: "Location" },
        value: {
          id: "Jl. Sisingamangaraja, Medan",
          en: "Sisingamangaraja Street, Medan",
        },
      },
      {
        label: { id: "Kategori", en: "Category" },
        value: {
          id: "Situs Bersejarah & Religi",
          en: "Historic & Religious Site",
        },
      },
      {
        label: { id: "Tiket Masuk", en: "Entrance Ticket" },
        value: { id: "Gratis", en: "Free" },
      },
      {
        label: { id: "Jam Buka", en: "Opening Hours" },
        value: { id: "05.00 – 21.00 WIB", en: "5:00 AM – 9:00 PM WIB" },
      },
    ],

    gallery: [imgMesjidRaya1, imgMesjidRaya2, imgMesjidRaya3, imgMesjidRaya4],
    galleryCaption: { id: "Pesona Warisan", en: "Heritage Charm" },
    gallerySubtitle: {
      id: "Kemegahan arsitektur dan keindahan ornamen Masjid Raya Al-Mashun dari berbagai sudut pandang.",
      en: "The architectural grandeur and ornamental beauty of Al-Mashun Grand Mosque from various perspectives.",
    },

    // ── Petunjuk Arah ──
    directionsSteps: {
      id: [
        "Dari pusat kota Medan, ambil Jl. Pemuda menuju Jl. Sisingamangaraja.",
        "Masjid Raya Al-Mashun terletak sekitar 500m dari Lapangan Merdeka Medan.",
        "Tersedia lahan parkir luas di sebelah kanan gerbang utama.",
      ],
      en: [
        "From Medan city center, take Pemuda Street towards Sisingamangaraja Street.",
        "Al-Mashun Grand Mosque is located approximately 500m from Medan Independence Square.",
        "Spacious parking area is available to the right of the main gate.",
      ],
    },

    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.006!2d98.681!3d3.5908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131c1a01a9c27%3A0x9d94e3e8e28fb9ba!2sMasjid%20Raya%20Al%20Mashun!5e0!3m2!1sid!2sid!4v1234567890",
    mapsLink: "https://maps.app.goo.gl/mesjid-raya-medan",

    // ── Destinasi terdekat (slug dari wisataDetailData) ──
    nearbyDestinations: ["istana-maimun", "tjong-afie", "museum"],
  },

  "istana-maimun": {
    slug: "istana-maimun",
    heroImage: imgIstanaHero,
    badge: { id: "Sejarah", en: "History" },
    badgeColor: "#B28A32",
    name: { id: "Istana Maimun", en: "Maimun Palace" },
    subtitle: {
      id: "Mahkota Budaya Kesultanan Deli",
      en: "The Crown of Deli Sultanate Culture",
    },

    builtYear: { id: "1888", en: "1888" },
    architect: { id: "T.H. van Erp", en: "T.H. van Erp" },
    shortAddress: {
      id: "Jl. Brigjen Katamso, Medan",
      en: "Brigjen Katamso Street, Medan",
    },
    ticketPrice: { id: "Rp 8.000", en: "Rp 8,000" },

    description: {
      id: [
        "Istana Maimun adalah istana kebanggaan Kesultanan Deli yang dibangun pada tahun 1888 atas perintah Sultan Ma'mun Al Rasyid Perkasa Alamsyah. Dengan 30 ruangan megah, istana ini menampilkan perpaduan arsitektur Melayu, Islam, dan Eropa yang luar biasa indah.",
        "Hingga hari ini, istana ini masih dihuni oleh keluarga Kesultanan Deli dan menjadi ikon kebanggaan Kota Medan. Pengunjung dapat menyaksikan koleksi furnitur, foto bersejarah, serta replika peralatan kerajaan sambil menikmati indahnya interior bernuansa kuning keemasan.",
      ],
      en: [
        "Maimun Palace is the proud palace of the Deli Sultanate built in 1888 on the orders of Sultan Ma'mun Al Rasyid Perkasa Alamsyah. With 30 magnificent rooms, this palace showcases an incredibly beautiful blend of Malay, Islamic, and European architecture.",
        "To this day, this palace is still inhabited by the Deli Sultanate family and remains an icon of pride for Medan City. Visitors can witness collections of furniture, historical photos, and replicas of royal equipment while enjoying the beautiful golden-yellow interior.",
      ],
    },

    attractionSectionTitle: {
      id: "Mahkota Tiga Peradaban",
      en: "Crown of Three Civilizations",
    },
    attractionSectionSubtitle: {
      id: "Istana Maimun adalah simbol kebijaksanaan Kesultanan Deli yang menyatukan tiga tradisi arsitektur dunia dalam satu bangunan megah.",
      en: "Maimun Palace is a symbol of Deli Sultanate wisdom that unites three world architectural traditions in one magnificent building.",
    },
    attractions: [
      {
        title: {
          id: "Arsitektur Melayu yang Agung",
          en: "Grand Malay Architecture",
        },
        description: {
          id: "Atap bergaya Melayu dengan ornamen khas dan dominasi warna kuning keemasan mencerminkan kejayaan dan keagungan Kesultanan Deli sebagai penguasa wilayah Sumatera Timur.",
          en: "Malay-style roof with distinctive ornaments and dominant golden-yellow color reflects the glory and grandeur of the Deli Sultanate as rulers of the East Sumatra region.",
        },
      },
      {
        title: {
          id: "Sentuhan Eropa yang Elegan",
          en: "Elegant European Touch",
        },
        description: {
          id: "Pintu melengkung bergaya Eropa, jendela kaca warna-warni, dan furnitur antik impor dari Eropa menjadi bukti hubungan diplomatik Kesultanan Deli dengan dunia Barat.",
          en: "European-style curved doors, colorful glass windows, and antique imported furniture from Europe are evidence of the Deli Sultanate's diplomatic relations with the Western world.",
        },
      },
      {
        title: { id: "Nuansa Islam yang Kental", en: "Strong Islamic Nuance" },
        description: {
          id: "Kaligrafi Arab menghiasi dinding, serta struktur ruang yang mengikuti kaidah arsitektur Islam menjadikan Istana Maimun sebagai simbol kuat identitas Islam Kesultanan Deli.",
          en: "Arabic calligraphy adorns the walls, and spatial structure following Islamic architectural principles make Maimun Palace a strong symbol of Deli Sultanate's Islamic identity.",
        },
      },
    ],
    interiorImage: imgRuanganMaimun,
    architectureQuote: {
      id: '"Istana ini bukan sekadar bangunan, melainkan kitab sejarah yang ditulis dalam bahasa arsitektur — cerita tentang kebanggaan, diplomasi, dan identitas Melayu Deli."',
      en: '"This palace is not just a building, but a history book written in the language of architecture — a story about pride, diplomacy, and Deli Malay identity."',
    },

    info: [
      {
        label: { id: "Dibangun", en: "Built" },
        value: { id: "1888", en: "1888" },
      },
      {
        label: { id: "Lokasi", en: "Location" },
        value: {
          id: "Jl. Brigadir Jenderal Katamso, Medan",
          en: "Brigadier General Katamso Street, Medan",
        },
      },
      {
        label: { id: "Kategori", en: "Category" },
        value: {
          id: "Istana & Situs Bersejarah",
          en: "Palace & Historic Site",
        },
      },
      {
        label: { id: "Tiket Masuk", en: "Entrance Ticket" },
        value: { id: "Rp 8.000", en: "Rp 8,000" },
      },
      {
        label: { id: "Jam Buka", en: "Opening Hours" },
        value: { id: "08.00 – 17.00 WIB", en: "8:00 AM – 5:00 PM WIB" },
      },
    ],
    gallery: [
      imgIstanaMaimun,
      imgKubahMaimun,
      imgRuanganMaimun,
      imgSinggasanaMaimun,
    ],
    galleryCaption: { id: "Pesona Warisan", en: "Heritage Charm" },
    gallerySubtitle: {
      id: "Keagungan arsitektur dan interior mewah Istana Maimun dari berbagai sudut.",
      en: "The architectural grandeur and luxurious interior of Maimun Palace from various angles.",
    },
    directionsSteps: {
      id: [
        "Dari Lapangan Merdeka, ambil Jl. Brigjen Katamso ke arah selatan ± 1.2 km.",
        "Istana Maimun terletak di sebelah kanan jalan, berdampingan dengan Masjid Raya.",
        "Parkir tersedia di area halaman depan istana.",
      ],
      en: [
        "From Independence Square, take Brigjen Katamso Street south for ± 1.2 km.",
        "Maimun Palace is located on the right side of the road, adjacent to the Grand Mosque.",
        "Parking is available in the palace front yard area.",
      ],
    },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.006!2d98.680!3d3.5732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131c1!2sIstana+Maimun!5e0!3m2!1sid!2sid!4v1234567890",
    mapsLink: "https://maps.app.goo.gl/istana-maimun-medan",
    nearbyDestinations: ["mesjid-raya", "tjong-afie", "museum"],
  },

  "tjong-afie": {
    slug: "tjong-afie",
    heroImage: imgTjongAfie,
    badge: { id: "Sejarah", en: "History" },
    badgeColor: "#B28A32",
    name: { id: "Tjong A Fie Mansion", en: "Tjong A Fie Mansion" },
    subtitle: {
      id: "Warisan Kejayaan Saudagar Tionghoa Medan",
      en: "Legacy of Medan Chinese Merchant Glory",
    },

    builtYear: { id: "1895", en: "1895" },
    architect: {
      id: "Arsitek Tionghoa-Eropa",
      en: "Chinese-European Architect",
    },
    shortAddress: {
      id: "Jl. Ahmad Yani, Kesawan",
      en: "Ahmad Yani Street, Kesawan",
    },
    ticketPrice: { id: "Rp 35.000", en: "Rp 35,000" },

    description: {
      id: [
        "Tjong A Fie Mansion adalah istana megah dua lantai yang dibangun pada tahun 1895 oleh Tjong A Fie, seorang saudagar dan tokoh filantropi legendaris dari etnis Tionghoa. Bangunan ini merupakan monumen bersejarah yang menceritakan era kejayaan perdagangan di Kota Medan abad ke-19.",
        "Arsitekturnya merupakan perpaduan unik antara gaya Tionghoa kuno, Melayu, dan Art Nouveau Eropa. Kini difungsikan sebagai museum yang menampilkan koleksi furnitur antik, foto bersejarah, serta artefak kehidupan kemewahan era kolonial.",
      ],
      en: [
        "Tjong A Fie Mansion is a magnificent two-story palace built in 1895 by Tjong A Fie, a legendary merchant and philanthropist of Chinese ethnicity. This building is a historic monument that tells the story of the glorious trade era in Medan City in the 19th century.",
        "Its architecture is a unique blend of ancient Chinese, Malay, and European Art Nouveau styles. Now functioning as a museum displaying collections of antique furniture, historical photos, and artifacts of luxurious colonial-era life.",
      ],
    },

    attractionSectionTitle: {
      id: "Simfoni Tiga Kebudayaan",
      en: "Symphony of Three Cultures",
    },
    attractionSectionSubtitle: {
      id: "Tjong A Fie Mansion adalah bukti nyata bahwa keharmonisan lintas budaya telah lama mengakar di jantung Kota Medan.",
      en: "Tjong A Fie Mansion is tangible proof that cross-cultural harmony has long been rooted in the heart of Medan City.",
    },
    attractions: [
      {
        title: {
          id: "Warisan Tionghoa yang Kaya",
          en: "Rich Chinese Heritage",
        },
        description: {
          id: "Ornamen naga, ukiran kayu bermotif bunga teratai, serta tata ruang Feng Shui yang kental menjadi identitas Tionghoa yang dominan dan memesona di setiap sudut bangunan.",
          en: "Dragon ornaments, lotus flower wood carvings, and strong Feng Shui spatial arrangement are dominant and charming Chinese identities in every corner of the building.",
        },
      },
      {
        title: { id: "Sentuhan Melayu yang Hangat", en: "Warm Malay Touch" },
        description: {
          id: "Perpaduan elemen Melayu pada pilar dan detail atap mencerminkan hubungan persaudaraan erat antara Tjong A Fie dengan Kesultanan Deli dan masyarakat Melayu Medan.",
          en: "The blend of Malay elements in pillars and roof details reflects the close fraternal relationship between Tjong A Fie and the Deli Sultanate and Medan Malay community.",
        },
      },
      {
        title: {
          id: "Kemewahan Eropa Art Nouveau",
          en: "Luxurious European Art Nouveau",
        },
        description: {
          id: "Furnitur impor Eropa, lantai keramik Portugis bermotif, dan jendela Art Nouveau menciptakan atmosfer museum hidup yang membawa pengunjung ke era kolonial abad ke-19.",
          en: "European imported furniture, patterned Portuguese ceramic floors, and Art Nouveau windows create a living museum atmosphere that transports visitors to the 19th-century colonial era.",
        },
      },
    ],
    interiorImage: imgTjongAfie2,
    architectureQuote: {
      id: '"Rumah ini adalah jembatan hidup antara Timur dan Barat — testament bahwa kemakmuran sejati lahir dari saling menghormati antar peradaban."',
      en: '"This house is a living bridge between East and West — a testament that true prosperity is born from mutual respect between civilizations."',
    },

    info: [
      {
        label: { id: "Dibangun", en: "Built" },
        value: { id: "1895", en: "1895" },
      },
      {
        label: { id: "Lokasi", en: "Location" },
        value: {
          id: "Jl. Ahmad Yani, Kesawan, Medan",
          en: "Ahmad Yani Street, Kesawan, Medan",
        },
      },
      {
        label: { id: "Kategori", en: "Category" },
        value: {
          id: "Museum & Situs Bersejarah",
          en: "Museum & Historic Site",
        },
      },
      {
        label: { id: "Tiket Masuk", en: "Entrance Ticket" },
        value: { id: "Rp 35.000", en: "Rp 35,000" },
      },
      {
        label: { id: "Jam Buka", en: "Opening Hours" },
        value: { id: "09.00 – 17.00 WIB", en: "9:00 AM – 5:00 PM WIB" },
      },
    ],
    gallery: [imgTjongAfie, imgTjongAfie2],
    galleryCaption: { id: "Pesona Warisan", en: "Heritage Charm" },
    gallerySubtitle: {
      id: "Kemegahan arsitektur eklektik dan koleksi bersejarah Tjong A Fie Mansion.",
      en: "The eclectic architectural grandeur and historic collection of Tjong A Fie Mansion.",
    },
    directionsSteps: {
      id: [
        "Dari Lapangan Merdeka, ikuti Jl. Ahmad Yani ke arah barat menuju kawasan Kesawan.",
        "Mansion terletak di sisi kanan jalan, dengan fasad kuning khas yang mudah dikenali.",
        "Parkir terbatas tersedia di bahu jalan depan bangunan.",
      ],
      en: [
        "From Independence Square, follow Ahmad Yani Street west towards Kesawan area.",
        "The mansion is located on the right side of the road, with its distinctive yellow facade easily recognizable.",
        "Limited parking is available on the roadside in front of the building.",
      ],
    },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.006!2d98.677!3d3.5882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131b28!2sTjong+A+Fie+Mansion!5e0!3m2!1sid!2sid!4v1234567890",
    mapsLink: "https://maps.app.goo.gl/tjong-afie-medan",
    nearbyDestinations: ["mesjid-raya", "istana-maimun", "graha-maria"],
  },

  "graha-maria": {
    slug: "graha-maria",
    heroImage: imgGerejaIndia,
    badge: { id: "Religi", en: "Religious" },
    badgeColor: "#50652D",
    name: { id: "Graha Maria Velangkanni", en: "Graha Maria Velangkanni" },
    subtitle: {
      id: "Destinasi Ziarah & Arsitektur Sakral",
      en: "Pilgrimage Destination & Sacred Architecture",
    },

    builtYear: { id: "2001", en: "2001" },
    architect: {
      id: "Komunitas Tamil Katolik",
      en: "Tamil Catholic Community",
    },
    shortAddress: {
      id: "Jl. Sakura III, Tanjung Selamat",
      en: "Sakura III Street, Tanjung Selamat",
    },
    ticketPrice: { id: "Gratis", en: "Free" },

    description: {
      id: [
        "Graha Maria Annai Velangkanni adalah sebuah gereja Katolik yang menjadi destinasi ziarah ikonik di Kota Medan. Didirikan oleh komunitas umat Katolik India Tamil, gereja ini memiliki arsitektur yang sangat unik, memadukan gaya Indo-Mughal dengan ornamen khas India Selatan.",
        "Menara-menaranya yang berwarna-warni dan relief pahatan yang kaya menjadikan gereja ini sebagai salah satu bangunan paling memukau secara visual di Medan, sekaligus simbol kerukunan dan keindahan toleransi antarumat beragama.",
      ],
      en: [
        "Graha Maria Annai Velangkanni is a Catholic church that has become an iconic pilgrimage destination in Medan City. Founded by the Tamil Indian Catholic community, this church has a very unique architecture, blending Indo-Mughal style with distinctive South Indian ornaments.",
        "Its colorful towers and rich carved reliefs make this church one of the most visually stunning buildings in Medan, as well as a symbol of harmony and the beauty of interfaith tolerance.",
      ],
    },

    attractionSectionTitle: {
      id: "Keajaiban Arsitektur Sakral",
      en: "Sacred Architectural Wonder",
    },
    attractionSectionSubtitle: {
      id: "Graha Maria Velangkanni adalah monumen toleransi hidup yang memancarkan keindahan spiritual dan keharmonisan budaya di Kota Medan.",
      en: "Graha Maria Velangkanni is a living monument of tolerance radiating spiritual beauty and cultural harmony in Medan City.",
    },
    attractions: [
      {
        title: {
          id: "Arsitektur Indo-Mughal yang Memukau",
          en: "Stunning Indo-Mughal Architecture",
        },
        description: {
          id: "Kubah berlapis dan menara berwarna-warni terinspirasi dari gaya Indo-Mughal India, menciptakan siluet yang sangat khas dan mudah dikenali dari kejauhan.",
          en: "Layered domes and colorful towers inspired by Indian Indo-Mughal style, creating a very distinctive silhouette easily recognizable from afar.",
        },
      },
      {
        title: {
          id: "Relief & Pahatan India Selatan",
          en: "South Indian Reliefs & Carvings",
        },
        description: {
          id: "Ratusan relief pahatan tangan menggambarkan kisah-kisah suci dan figur-figur devosi, dieksekusi dengan gaya tradisional India Selatan yang penuh ekspresi.",
          en: "Hundreds of hand-carved reliefs depicting sacred stories and devotional figures, executed in a traditional South Indian style full of expression.",
        },
      },
      {
        title: {
          id: "Simbol Toleransi Beragama",
          en: "Symbol of Religious Tolerance",
        },
        description: {
          id: "Keberadaan gereja ini di tengah kota yang majemuk menjadikannya simbol nyata toleransi dan kehidupan berdampingan yang harmonis antar komunitas di Medan.",
          en: "The existence of this church in the middle of a diverse city makes it a real symbol of tolerance and harmonious coexistence between communities in Medan.",
        },
      },
    ],
    interiorImage: imgKuil,
    architectureQuote: {
      id: '"Setiap warna, setiap ukiran adalah doa yang dibekukan dalam batu — persembahan indah komunitas Tamil kepada kota yang mereka cintai."',
      en: '"Every color, every carving is a prayer frozen in stone — a beautiful offering from the Tamil community to the city they love."',
    },

    info: [
      {
        label: { id: "Lokasi", en: "Location" },
        value: {
          id: "Jl. Sakura III, Tanjung Selamat, Medan",
          en: "Sakura III Street, Tanjung Selamat, Medan",
        },
      },
      {
        label: { id: "Kategori", en: "Category" },
        value: { id: "Wisata Religi", en: "Religious Tourism" },
      },
      {
        label: { id: "Tiket Masuk", en: "Entrance Ticket" },
        value: { id: "Gratis", en: "Free" },
      },
      {
        label: { id: "Jam Buka", en: "Opening Hours" },
        value: { id: "06.00 – 21.00 WIB", en: "6:00 AM – 9:00 PM WIB" },
      },
    ],
    gallery: [imgGerejaIndia],
    galleryCaption: { id: "Pesona Warisan", en: "Heritage Charm" },
    gallerySubtitle: {
      id: "Kemegahan arsitektur Indo-Mughal Graha Maria Annai Velangkanni.",
      en: "The grandeur of Graha Maria Annai Velangkanni's Indo-Mughal architecture.",
    },
    directionsSteps: {
      id: [
        "Dari pusat kota, ambil Jl. Jamin Ginting ke arah Pancur Batu.",
        "Belok kiri ke Jl. Sakura III, gereja terletak sekitar 300m dari tikungan.",
        "Parkir tersedia di halaman dalam kompleks gereja.",
      ],
      en: [
        "From the city center, take Jamin Ginting Street towards Pancur Batu.",
        "Turn left onto Sakura III Street, the church is located approximately 300m from the intersection.",
        "Parking is available in the inner yard of the church complex.",
      ],
    },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.006!2d98.701!3d3.623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131!2sGraha+Maria!5e0!3m2!1sid!2sid!4v1234567890",
    mapsLink: "https://maps.app.goo.gl/graha-maria-medan",
    nearbyDestinations: ["mesjid-raya", "museum", "cadika"],
  },

  cadika: {
    slug: "cadika",
    heroImage: imgCadika,
    badge: { id: "Alam", en: "Nature" },
    badgeColor: "#50652D",
    name: { id: "Taman Cadika Pramuka", en: "Cadika Pramuka Park" },
    subtitle: {
      id: "Paru-Paru Hijau Kota Medan",
      en: "The Green Lungs of Medan City",
    },

    builtYear: { id: "1990", en: "1990" },
    architect: { id: "Pemerintah Kota Medan", en: "Medan City Government" },
    shortAddress: {
      id: "Jl. Karya Jasa, Medan Johor",
      en: "Karya Jasa Street, Medan Johor",
    },
    ticketPrice: { id: "Rp 5.000", en: "Rp 5,000" },

    description: {
      id: [
        "Taman Cadika Pramuka adalah salah satu ruang terbuka hijau terluas di Kota Medan. Dilengkapi dengan danau buatan yang tenang, area piknik, jogging track, dan zona bermain anak, taman ini menjadi destinasi rekreasi favorit keluarga di akhir pekan.",
        "Suasana asri dan udara segar di tengah kota menjadikan Taman Cadika sebagai oasis kehijauan yang memanjakan mata. Berbagai kegiatan komunitas, festival outdoor, dan perkemahan juga sering digelar di area taman yang luas ini.",
      ],
      en: [
        "Cadika Pramuka Park is one of the largest green open spaces in Medan City. Equipped with a calm artificial lake, picnic area, jogging track, and children's play zone, this park has become a favorite family recreation destination on weekends.",
        "The green atmosphere and fresh air in the middle of the city make Cadika Park a green oasis that pleases the eye. Various community activities, outdoor festivals, and camping are also often held in this spacious park area.",
      ],
    },

    attractionSectionTitle: {
      id: "Oasis Hijau di Jantung Kota",
      en: "Green Oasis in the Heart of the City",
    },
    attractionSectionSubtitle: {
      id: "Taman Cadika Pramuka menawarkan ruang bernapas yang luas bagi warga Medan dengan berbagai fasilitas rekreasi yang lengkap.",
      en: "Cadika Pramuka Park offers a wide breathing space for Medan residents with complete recreation facilities.",
    },
    attractions: [
      {
        title: { id: "Danau Buatan yang Tenang", en: "Calm Artificial Lake" },
        description: {
          id: "Danau buatan di tengah taman menjadi magnet utama pengunjung. Aktivitas memancing, perahu dayung, dan piknik tepi danau menjadi pilihan favorit keluarga di akhir pekan.",
          en: "The artificial lake in the middle of the park is the main attraction for visitors. Fishing activities, rowboats, and lakeside picnics are favorite family choices on weekends.",
        },
      },
      {
        title: {
          id: "Jogging Track & Area Olahraga",
          en: "Jogging Track & Sports Area",
        },
        description: {
          id: "Jalur jogging melingkari taman sepanjang 2 km, dilengkapi area fitness outdoor dan lapangan olahraga yang terbuka untuk umum setiap hari.",
          en: "The jogging track circles the park for 2 km, equipped with an outdoor fitness area and sports field open to the public every day.",
        },
      },
      {
        title: { id: "Zona Bermain & Perkemahan", en: "Play Zone & Camping" },
        description: {
          id: "Area bermain anak yang aman dan lahan perkemahan yang luas menjadikan Cadika sebagai destinasi edukasi alam yang sempurna untuk keluarga dan komunitas pramuka.",
          en: "Safe children's play area and spacious camping grounds make Cadika a perfect nature education destination for families and scout communities.",
        },
      },
    ],
    interiorImage: imgCadika,
    architectureQuote: {
      id: '"Di tengah hiruk pikuk kota, Cadika adalah pengingat bahwa alam dan manusia bisa hidup berdampingan dengan damai."',
      en: '"In the middle of the city\'s hustle and bustle, Cadika is a reminder that nature and humans can live together in peace."',
    },

    info: [
      {
        label: { id: "Lokasi", en: "Location" },
        value: {
          id: "Jl. Karya Jasa, Medan Johor",
          en: "Karya Jasa Street, Medan Johor",
        },
      },
      {
        label: { id: "Kategori", en: "Category" },
        value: {
          id: "Wisata Alam & Rekreasi",
          en: "Nature & Recreation Tourism",
        },
      },
      {
        label: { id: "Tiket Masuk", en: "Entrance Ticket" },
        value: { id: "Rp 5.000", en: "Rp 5,000" },
      },
      {
        label: { id: "Jam Buka", en: "Opening Hours" },
        value: { id: "06.00 – 18.00 WIB", en: "6:00 AM – 6:00 PM WIB" },
      },
    ],
    gallery: [imgCadika],
    galleryCaption: { id: "Pesona Alam", en: "Nature's Charm" },
    gallerySubtitle: {
      id: "Keindahan dan kesegaran Taman Cadika Pramuka di jantung Kota Medan.",
      en: "The beauty and freshness of Cadika Pramuka Park in the heart of Medan City.",
    },
    directionsSteps: {
      id: [
        "Dari pusat kota, ambil Jl. Karya menuju Medan Johor ke arah selatan.",
        "Taman Cadika terletak di Jl. Karya Jasa, mudah dijangkau dengan kendaraan pribadi.",
        "Parkir luas tersedia di area depan gerbang masuk taman.",
      ],
      en: [
        "From the city center, take Karya Street towards Medan Johor heading south.",
        "Cadika Park is located on Karya Jasa Street, easily accessible by private vehicle.",
        "Spacious parking is available in the front area of the park entrance gate.",
      ],
    },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.006!2d98.690!3d3.556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131!2sCadika+Medan!5e0!3m2!1sid!2sid!4v1234567890",
    mapsLink: "https://maps.app.goo.gl/cadika-medan",
    nearbyDestinations: ["museum", "graha-maria", "istana-maimun"],
  },

  museum: {
    slug: "museum",
    heroImage: imgMuseum,
    badge: { id: "Sejarah", en: "History" },
    badgeColor: "#B28A32",
    name: {
      id: "Museum Negeri Sumatera Utara",
      en: "North Sumatra State Museum",
    },
    subtitle: {
      id: "Jendela Warisan Budaya Nusantara",
      en: "Window to Nusantara Cultural Heritage",
    },

    builtYear: { id: "1954", en: "1954" },
    architect: { id: "Pemerintah RI", en: "Indonesian Government" },
    shortAddress: {
      id: "Jl. H.M. Joni No.51, Medan",
      en: "H.M. Joni Street No.51, Medan",
    },
    ticketPrice: { id: "Rp 5.000", en: "Rp 5,000" },

    description: {
      id: [
        "Museum Negeri Sumatera Utara adalah museum terbesar di Sumatera Utara yang menyimpan koleksi artefak, etnografi, geologi, dan sejarah dari seluruh penjuru provinsi. Museum ini menjadi pusat edukasi dan pelestarian warisan budaya Nusantara.",
        "Pengunjung dapat menjelajahi ribuan koleksi, mulai dari replika rumah adat berbagai etnis Sumatera Utara, koleksi ulos dan tekstil tradisional, senjata antik, hingga benda-benda peninggalan era kerajaan dan kolonial.",
      ],
      en: [
        "The North Sumatra State Museum is the largest museum in North Sumatra, housing artifact, ethnographic, geological, and historical collections from all corners of the province. This museum has become an education and Nusantara cultural heritage preservation center.",
        "Visitors can explore thousands of collections, ranging from replicas of traditional houses from various North Sumatran ethnic groups, ulos and traditional textile collections, antique weapons, to relics from the kingdom and colonial eras.",
      ],
    },

    attractionSectionTitle: {
      id: "Khazanah Nusantara",
      en: "Nusantara Treasure",
    },
    attractionSectionSubtitle: {
      id: "Museum Negeri Sumatera Utara menyimpan ribuan artefak yang menceritakan kekayaan budaya dan sejarah peradaban Sumatera Utara.",
      en: "The North Sumatra State Museum houses thousands of artifacts that tell the story of North Sumatra's rich culture and civilization history.",
    },
    attractions: [
      {
        title: {
          id: "Koleksi Etnografi Lengkap",
          en: "Complete Ethnographic Collection",
        },
        description: {
          id: "Lebih dari 7.000 koleksi etnografi dari seluruh etnis Sumatera Utara, mulai dari Batak Toba, Karo, Simalungun, Mandailing, Melayu, hingga Nias tersimpan rapi di ruang pamer.",
          en: "More than 7,000 ethnographic collections from all North Sumatran ethnic groups, from Batak Toba, Karo, Simalungun, Mandailing, Malay, to Nias are neatly stored in the exhibition hall.",
        },
      },
      {
        title: {
          id: "Artefak Kerajaan & Kolonial",
          en: "Kingdom & Colonial Artifacts",
        },
        description: {
          id: "Senjata, perhiasan, dan benda-benda pusaka dari era kerajaan-kerajaan Sumatera Utara hingga artefak era kolonial Belanda tersimpan sebagai bukti sejarah yang tak ternilai.",
          en: "Weapons, jewelry, and heirloom items from North Sumatran kingdoms to Dutch colonial-era artifacts are stored as invaluable historical evidence.",
        },
      },
      {
        title: {
          id: "Replika Rumah Adat Tradisional",
          en: "Traditional House Replicas",
        },
        description: {
          id: "Replika rumah adat skala penuh dari berbagai etnis Sumatera Utara menjadi atraksi utama yang memungkinkan pengunjung memahami keanekaragaman budaya secara visual.",
          en: "Full-scale traditional house replicas from various North Sumatran ethnic groups are the main attraction allowing visitors to understand cultural diversity visually.",
        },
      },
    ],
    interiorImage: imgKesultananDeli,
    architectureQuote: {
      id: '"Museum ini adalah ingatan kolektif sebuah bangsa — tempat di mana setiap artefak berbicara tentang identitas, keberanian, dan kecerdasan nenek moyang kita."',
      en: '"This museum is a nation\'s collective memory — a place where every artifact speaks about the identity, courage, and intelligence of our ancestors."',
    },

    info: [
      {
        label: { id: "Lokasi", en: "Location" },
        value: {
          id: "Jl. H.M. Joni No.51, Medan",
          en: "H.M. Joni Street No.51, Medan",
        },
      },
      {
        label: { id: "Kategori", en: "Category" },
        value: { id: "Museum & Edukasi", en: "Museum & Education" },
      },
      {
        label: { id: "Tiket Masuk", en: "Entrance Ticket" },
        value: { id: "Rp 5.000", en: "Rp 5,000" },
      },
      {
        label: { id: "Jam Buka", en: "Opening Hours" },
        value: {
          id: "08.00 – 16.00 WIB (Selasa–Minggu)",
          en: "8:00 AM – 4:00 PM WIB (Tuesday–Sunday)",
        },
      },
    ],
    gallery: [imgMuseum, imgKesultananDeli],
    galleryCaption: { id: "Pesona Warisan", en: "Heritage Charm" },
    gallerySubtitle: {
      id: "Koleksi artefak dan warisan budaya Museum Negeri Sumatera Utara.",
      en: "Artifact collections and cultural heritage of the North Sumatra State Museum.",
    },
    directionsSteps: {
      id: [
        "Dari Lapangan Merdeka, ikuti Jl. Diponegoro ke arah timur menuju Jl. H.M. Joni.",
        "Museum terletak di sisi kanan jalan, ditandai dengan patung di halaman depan.",
        "Parkir tersedia di halaman dalam kompleks museum.",
      ],
      en: [
        "From Independence Square, follow Diponegoro Street east towards H.M. Joni Street.",
        "The museum is located on the right side of the road, marked by a statue in the front yard.",
        "Parking is available in the inner yard of the museum complex.",
      ],
    },
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.006!2d98.694!3d3.593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131!2sMuseum+Sumut!5e0!3m2!1sid!2sid!4v1234567890",
    mapsLink: "https://maps.app.goo.gl/museum-sumut-medan",
    nearbyDestinations: ["mesjid-raya", "istana-maimun", "tjong-afie"],
  },
};
