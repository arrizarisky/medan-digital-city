import istanamaimun from "../assets/istanamaimun.png";
import is3dImg from "../assets/images/3d/is3d.png";
import mjdImg from "../assets/images/3d/mjd.png";
import tirImg from "../assets/images/3d/tir.png";

import MelayuImg from "../assets/images/Budaya-Tradisi/Melayu-deli.png"
import TariTorTorImg from "../assets/images/Budaya-Tradisi/tari-tor-tor-batak.png"
import BarongsaiImg from "../assets/images/Budaya-Tradisi/barongsai.png"
import ThaipusamImg from "../assets/images/Budaya-Tradisi/thaipusam-india.png"


export const sejarahContent = {
  id: {
    nav: {
      home: "Beranda",
      history: "Sejarah",
      culture: "Budaya",
      tourism: "Pariwisata",
      news: "Berita",
      tech: "Teknologi",
    },
    hero: {
      title: "Jiwa Tanah Deli",
      subtitle:
        "Menelusuri jejak sejarah dari Kesultanan Deli hingga menjadi kota metropolitan modern. Jelajahi kekayaan budaya ibu kota Sumatera Utara.",
      reviews: "4.8 | 1.2k Ulasan",
      image: istanamaimun,
    },
    chronicle: {
      tag: "KRONIK",
      title: "Garis Waktu Sejarah",
      subtitle:
        "Perjalanan melintasi abad pertumbuhan, konflik, dan kemenangan.",
      items: [
        {
          year: "1590",
          title: "Awal Mula Kota Medan",
          desc: "Perjalanan Kota Medan bermula dari sebuah perkampungan kecil yang terletak di pertemuan Sungai Deli dan Sungai Babura. Lokasi yang strategis menjadikan kawasan ini sebagai tempat persinggahan dan jalur perdagangan sejak dahulu. Nama 'Medan' dipercaya berasal dari kata dalam bahasa Tamil, yaitu Maidan, yang berarti tanah lapang atau dataran.",
        },
        {
          year: "1863",
          title: "Masa Kolonial Belanda",
          desc: "Perkembangan Medan semakin pesat ketika Belanda membuka perkebunan tembakau Deli pada tahun 1863 melalui Jacob Nienhuys. Tembakau Deli yang terkenal hingga Eropa menjadikan Medan sebagai pusat industri perkebunan yang berkembang sangat cepat. Kehadiran berbagai etnis (Jawa, India, Tionghoa) memperkaya keberagaman budaya.",
        },
        {
          year: "1888",
          title: "Masa Kerajaan Aru & Kesultanan Deli",
          desc: "Pada abad ke-16, wilayah Medan di bawah pengaruh Kerajaan Aru. Setelahnya, berdirilah Kesultanan Deli. Memasuki abad ke-19, Sultan Ma'mun Al Rasyid Perkasa Alamsyah memindahkan pusat pemerintahan ke Medan, melahirkan berbagai bangunan bersejarah seperti Istana Maimun yang hingga kini menjadi ikon.",
        },
        {
          year: "1945",
          title: "Masa Kemerdekaan & Era Modern",
          desc: "Setelah proklamasi 1945, Medan berkembang menjadi kota otonom (1950) dan ibu kota Sumatra Utara. Kini, Medan tumbuh menjadi salah satu metropolitan terbesar di Indonesia, pusat ekonomi barat Nusantara dengan layanan publik berbasis digital, tanpa menghilangkan identitas multikulturalnya.",
        },
      ],
    },
    mosaic: {
      tag: "TRADISI",
      title: "Mosaik Budaya yang Dinamis",
      subtitle:
        "Identitas Medan dibentuk oleh komunitas Melayu, Batak, Tionghoa, India, dan Jawa yang hidup harmonis.",
      cards: [
        {
          title: "Kerajaan Melayu",
          desc: "Fondasi budaya Medan, ditandai dengan seni, musik, dan motif kuning ikonik Kesultanan Deli yang anggun.",
          image:
          MelayuImg
        },
        {
          title: "Tradisi Batak",
          desc: "Berani dan ekspresif, pengaruh Batak terlihat pada tenunan Ulos yang rumit dan tradisi musik Gondang yang bertenaga.",
          image:
          TariTorTorImg        
        },
        {
          title: "Warisan Tionghoa",
          desc: "Kesawan yang megah, Tahun Baru Imlek yang meriah, dan warisan kuliner yang lezat—budaya Tionghoa menjadi bagian integral dari identitas Medan.",
          image:
          BarongsaiImg        },
        {
          title: "Tradisi India",
          desc: "Kampung Madras yang berwarna-warni, Festival Cahaya Deepavali, dan warisan rempah-rempah yang aromatik—budaya India menghiasi kehidupan kota Medan.",
          image:
          ThaipusamImg        },
      ],
    },
    calendar: {
      title: "Kalender Budaya 2024",
      viewAll: "Lihat Semua",
      events: [
        {
          month: "FEB",
          date: "10",
          name: "Tahun Baru Imlek",
          desc: "Saksikan tarian barongsai yang meriah dan lampion merah di Kesawan.",
        },
        {
          month: "JUL",
          date: "15",
          name: "Ramadhan Fair",
          desc: "Festival kuliner dan religi selama sebulan di dekat Masjid Raya.",
        },
        {
          month: "OKT",
          date: "22",
          name: "Karnaval Deepavali",
          desc: "Rayakan Festival Cahaya di area Little India (Kampung Madras).",
        },
      ],
    },
    landmarks: {
      tag: "HERITAGE LANDMARKS",
      title: "Jelajahi Arsitektur Sejarah Medan",
      readMore: "Pelajari Selengkapnya",
      close: "Tutup",
      since: "Sejak",
      items: [
        {
          id: "maimun",
          title: "Istana Maimun",
          yearBuilt: "1888",
          imagePlaceholder:
            "https://images.unsplash.com/photo-1582662058694-811c75c88b64?q=80&w=2070&auto=format&fit=crop",
          shortDesc:
            "Istana peninggalan Kesultanan Deli dengan arsitektur perpaduan Melayu, Timur Tengah, dan Eropa.",
          longDetailedDesc:
            "Istana Maimun adalah istana kebesaran Kesultanan Deli dengan warna kuningnya yang khas (warna kebesaran Melayu). Dibangun oleh Sultan Ma'mun Al Rasyid Perkasa Alamsyah, arsitekturnya merupakan perpaduan unik antara gaya kebudayaan Melayu, pengaruh Islam dari Timur Tengah, serta elemen desain arsitektur Eropa. Bangunan ini memiliki 30 ruangan dan menjadi saksi bisu kejayaan Kesultanan Deli di masa lalu.",
        },
        {
          id: "tjongafie",
          title: "Tjong A Fie Mansion",
          yearBuilt: "1895",
          imagePlaceholder:
            "https://images.unsplash.com/photo-1549474776-609ee36412e6?q=80&w=2070&auto=format&fit=crop",
          shortDesc:
            "Kediaman megah saudagar Tionghoa Tjong A Fie yang memadukan gaya arsitektur Tionghoa, Melayu, dan Art Deco.",
          longDetailedDesc:
            "Tjong A Fie Mansion adalah bangunan cagar budaya yang dulunya merupakan kediaman dari Tjong A Fie, seorang saudagar dan tokoh berpengaruh etnis Tionghoa di Medan. Dibangun dengan desain arsitektur perpaduan Tiongkok kuno, Melayu, dan Eropa Art Deco, rumah dua lantai ini memiliki 35 ruangan dan kini menjadi museum yang menceritakan kehidupan multikultural dan sejarah awal kota Medan.",
        },
        {
          id: "lonsum",
          title: "Gedung London Sumatra",
          yearBuilt: "1906",
          imagePlaceholder:
            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
          shortDesc:
            "Gedung perkantoran bersejarah peninggalan perusahaan perkebunan Inggris dengan arsitektur Eropa klasik.",
          longDetailedDesc:
            "Gedung London Sumatra (Lonsum) adalah salah satu bangunan peninggalan kolonial Belanda yang dibangun oleh perusahaan perkebunan Inggris, Harrisons & Crosfield. Memiliki arsitektur gaya transisi awal abad ke-20 di Eropa, gedung ini merupakan bangunan pertama di Medan yang dilengkapi dengan lift (elevator) bergaya sangkar besi. Kondisinya masih terawat dan berfungsi sebagai area perkantoran komersial.",
        },
        {
          id: "kantorpos",
          title: "Kantor Pos Medan",
          yearBuilt: "1911",
          imagePlaceholder:
            "https://images.unsplash.com/photo-1601058268499-e52658b8ebf8?q=80&w=2070&auto=format&fit=crop",
          shortDesc:
            "Bangunan kolonial karya arsitek Simon Snuyf yang masih berdiri kokoh tepat di pusat kota (Kesawan).",
          longDetailedDesc:
            "Kantor Pos Besar Medan dibangun pada masa kolonial Belanda, dirancang oleh arsitek Snuyf yang pada saat itu menjabat sebagai Direktur Pekerjaan Umum Belanda untuk Hindia Belanda. Gaya arsitekturnya geometris bergaya transisi dari klasik ke modern. Sampai sekarang, bangunan berbentuk unik dengan kubah di puncaknya ini masih dioperasikan sebagai kantor pos pusat kota Medan.",
        },
        {
          id: "tirtanadi",
          title: "Menara Air Tirtanadi",
          yearBuilt: "1908",
          imagePlaceholder:
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
          shortDesc:
            "Ikon bersejarah kota Medan yang dibangun sebagai menara fasilitas penyediaan air bersih di era kolonial.",
          longDetailedDesc:
            "Menara Air Tirtanadi didirikan pada tahun 1908 oleh pemerintahan Belanda dengan nama NV Waterleiding Maatschappij Aert Berceh. Pada masanya, menara ini menjadi sarana vital bagi kebutuhan air bersih di kota Medan. Dengan tinggi dan arsitekturnya yang khas, menara air ini bukan hanya bernilai fungsi, tapi telah lama diakui sebagai salah satu tengara (landmark) yang tidak bisa dipisahkan dari citra kota Medan.",
        },
        {
          id: "mesjidraya",
          title: "Mesjid Raya Al-Mashun",
          yearBuilt: "1909",
          imagePlaceholder:
            "https://images.unsplash.com/photo-1549474776-609ee36412e6?q=80&w=2070&auto=format&fit=crop",
          shortDesc:
            "Masjid megah peninggalan Kesultanan Deli dengan gaya arsitektur perpaduan Timur Tengah, India, dan Eropa.",
          longDetailedDesc:
            "Mesjid Raya Al-Mashun merupakan salah satu masjid terindah di Indonesia yang dibangun oleh Sultan Deli, Ma'mun Al Rasyid. Dirancang oleh arsitek Belanda, bangunan ini memadukan corak Timur Tengah (Moorish), India, serta elemen Eropa dan Melayu secara harmonis. Bentuknya yang simetris segi delapan (oktagonal) dan ornamen mewahnya membuat masjid ini menjadi simbol kebanggaan umat Islam di Sumatra Utara.",
        },
      ],
    },
    culinary: {
      title: "Persimpangan Kuliner",
      desc: "Sejarah sejati Medan tertulis dalam cita rasanya—perpaduan resep Melayu, Tionghoa, dan India yang menciptakan identitas kuliner kelas dunia yang unik.",
      button: "Jelajahi Jejak Makanan",
      badge: "Jelajah Rasa",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop",
    },
    footer: {
      brand: "Medan Digital",
      slogan: "Portal resmi sejarah dan budaya.",
      contact: "Kontak",
      privacy: "Kebijakan Privasi",
      terms: "Syarat Layanan",
      faq: "FAQ",
      copyright: "© 2024 Pemerintah Kota Medan. Hak cipta dilindungi.",
    },
  },
  en: {
    nav: {
      home: "Home",
      history: "History",
      culture: "Culture",
      tourism: "Tourism",
      news: "News",
      tech: "Tech",
    },
    hero: {
      title: "The Soul of Tanah Deli",
      subtitle:
        "Tracing the threads of history from the Deli Sultanate to a modern Indonesian metropolis. Explore the rich tapestry of North Sumatra's capital.",
      reviews: "4.8 | 1.2k Reviews",
      image: istanamaimun,
    },
    chronicle: {
      tag: "CHRONICLE",
      title: "Timeline of Heritage",
      subtitle: "A journey through centuries of growth, conflict, and triumph.",
      items: [
        {
          year: "1590",
          title: "The Origins of Medan City",
          desc: "The journey of Medan City began as a small settlement located at the confluence of the Deli and Babura Rivers. Its strategic location made this area a vital transit and trade route since ancient times. The name 'Medan' is believed to originate from the Tamil word Maidan, which means a wide open space or plain.",
        },
        {
          year: "1863",
          title: "The Dutch Colonial Era",
          desc: "Medan's development accelerated rapidly when the Dutch opened the Deli tobacco plantations in 1863 through Jacob Nienhuys. The world-renowned Deli tobacco transformed Medan into a rapidly growing plantation industry hub. The arrival of various ethnicities (Javanese, Indian, Chinese) deeply enriched its cultural diversity.",
        },
        {
          year: "1888",
          title: "The Era of Aru Kingdom & Deli Sultanate",
          desc: "In the 16th century, the Medan region was under the influence of the Aru Kingdom. Subsequently, the Deli Sultanate was established. Entering the 19th century, Sultan Ma'mun Al Rasyid Perkasa Alamsyah moved the center of government to Medan, giving birth to historical landmarks like the Maimun Palace which remains an iconic symbol today.",
        },
        {
          year: "1945",
          title: "Independence Era & Modern Day",
          desc: "Following the 1945 proclamation, Medan evolved into an autonomous city (1950) and the capital of North Sumatra. Today, Medan has grown into one of Indonesia's largest metropolitan cities, a western economic hub of the archipelago with digital-based public services, without losing its rich multicultural identity.",
        },
      ],
    },
    mosaic: {
      tag: "TRADITIONS",
      title: "Vibrant Cultural Mosaic",
      subtitle:
        "Medan's identity is forged by the Malay, Batak, Chinese, Indian, and Javanese communities living in harmony.",
      cards: [
        {
          title: "The Malay Royalty",
          desc: "The bedrock of Medan's culture, characterized by the Deli Sultanate's refined arts, music, and the iconic yellow motifs.",
          image:
            "https://images.unsplash.com/photo-1549474776-609ee36412e6?q=80&w=2070&auto=format&fit=crop",
        },
        {
          title: "Batak Traditions",
          desc: "Bold and expressive, the Batak influence is seen in the intricate Ulos weaving and powerful Gondang music traditions.",
          image:
            "https://images.unsplash.com/photo-1531234799389-dcb7651eb0a2?q=80&w=2070&auto=format&fit=crop",
        },
        {
          title: "Chinese Heritage",
          desc: "Magnificent Kesawan, vibrant Chinese New Year, and delicious culinary heritage—Chinese culture is an integral part of Medan's identity.",
          image:
            "https://images.unsplash.com/photo-1559599545-80a4c36970cc?q=80&w=2070&auto=format&fit=crop",
        },
        {
          title: "Indian Traditions",
          desc: "Colorful Kampung Madras, Deepavali Festival of Lights, and aromatic spice heritage—Indian culture adorns Medan's city life.",
          image:
            "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=2070&auto=format&fit=crop",
        },
      ],
    },
    calendar: {
      title: "Cultural Calendar 2024",
      viewAll: "View All",
      events: [
        {
          month: "FEB",
          date: "10",
          name: "Chinese New Year (Imlek)",
          desc: "Experience the vibrant lion dances and red lanterns in Kesawan.",
        },
        {
          month: "JUL",
          date: "15",
          name: "Ramadhan Fair",
          desc: "A month-long culinary and religious festival near the Great Mosque.",
        },
        {
          month: "OCT",
          date: "22",
          name: "Deepavali Carnival",
          desc: "Celebrate the Festival of Lights in the Little India (Kampung Madras) area.",
        },
      ],
    },
    landmarks: {
      tag: "HERITAGE LANDMARKS",
      title: "Explore Medan's Historical Architecture",
      readMore: "Read More",
      close: "Close",
      since: "Since",
      items: [
        {
          id: "maimun",
          title: "Maimun Palace",
          yearBuilt: "1888",
          imagePlaceholder:
            "https://images.unsplash.com/photo-1582662058694-811c75c88b64?q=80&w=2070&auto=format&fit=crop",
          shortDesc:
            "The royal palace of the Deli Sultanate featuring a unique blend of Malay, Middle Eastern, and European architecture.",
          longDetailedDesc:
            "Maimun Palace is the grand palace of the Deli Sultanate, marked by its distinctive yellow color, representing Malay royalty. Built by Sultan Ma'mun Al Rasyid Perkasa Alamsyah, its architecture is a unique fusion of Malay cultural styles, Islamic influences from the Middle East, and European design elements. The building houses 30 rooms and stands as a silent witness to the past glory of the Deli Sultanate.",
        },
        {
          id: "tjongafie",
          title: "Tjong A Fie Mansion",
          yearBuilt: "1895",
          imagePlaceholder:
            "https://images.unsplash.com/photo-1549474776-609ee36412e6?q=80&w=2070&auto=format&fit=crop",
          shortDesc:
            "The grand residence of Chinese merchant Tjong A Fie, blending Chinese, Malay, and Art Deco architectural styles.",
          longDetailedDesc:
            "Tjong A Fie Mansion is a heritage building that was once the residence of Tjong A Fie, an influential Chinese merchant in Medan. Built with an architectural design blending ancient Chinese, Malay, and European Art Deco styles, this two-story house has 35 rooms and now serves as a museum telling the story of multicultural life and the early history of Medan.",
        },
        {
          id: "lonsum",
          title: "London Sumatra Building",
          yearBuilt: "1906",
          imagePlaceholder:
            "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
          shortDesc:
            "A historic office building from the British plantation era, showcasing distinct early 20th-century European architecture.",
          longDetailedDesc:
            "The London Sumatra (Lonsum) Building is a Dutch colonial heritage building constructed by the British plantation company, Harrisons & Crosfield. Featuring a transitional early 20th-century European architectural style, it was the first building in Medan to be equipped with a cage-style elevator. It remains well-maintained and continues to function as a commercial office space.",
        },
        {
          id: "kantorpos",
          title: "Medan Central Post Office",
          yearBuilt: "1911",
          imagePlaceholder:
            "https://images.unsplash.com/photo-1601058268499-e52658b8ebf8?q=80&w=2070&auto=format&fit=crop",
          shortDesc:
            "A Dutch colonial building designed by architect Simon Snuyf, located right in the city center (Kesawan).",
          longDetailedDesc:
            "The Medan Central Post Office was built during the Dutch colonial era, designed by architect Snuyf, who at the time served as the Dutch Director of Public Works for the Dutch East Indies. Its architectural style is a geometric transition from classic to modern. To this day, this uniquely shaped building with its iconic dome continues to operate as the central post office of Medan.",
        },
        {
          id: "tirtanadi",
          title: "Tirtanadi Water Tower",
          yearBuilt: "1908",
          imagePlaceholder:
            "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
          shortDesc:
            "A historic icon of Medan built by the Dutch colonial government as a clean water supply facility.",
          longDetailedDesc:
            "The Tirtanadi Water Tower was established in 1908 by the Dutch government under the name NV Waterleiding Maatschappij Aert Berceh. In its time, this tower was a vital facility for clean water needs in Medan. With its height and distinctive architecture, the water tower holds not only functional value but has long been recognized as an inseparable landmark of Medan's city image.",
        },
        {
          id: "mesjidraya",
          title: "Medan Grand Mosque",
          yearBuilt: "1909",
          imagePlaceholder:
            "https://images.unsplash.com/photo-1549474776-609ee36412e6?q=80&w=2070&auto=format&fit=crop",
          shortDesc:
            "A magnificent mosque built by the Deli Sultanate, blending Middle Eastern, Indian, and European styles.",
          longDetailedDesc:
            "The Medan Grand Mosque (Al-Mashun) is one of the most beautiful mosques in Indonesia, built by the Sultan of Deli, Ma'mun Al Rasyid. Designed by a Dutch architect, the building harmoniously blends Middle Eastern (Moorish), Indian, European, and Malay elements. Its symmetrical octagonal shape and luxurious ornaments make this mosque a proud symbol of the Islamic community in North Sumatra.",
        },
      ],
    },
    culinary: {
      title: "Culinary Crossroads",
      desc: "Medan's true history is written in its flavors—a melting pot of Malay, Chinese, and Indian recipes that created a unique world-class culinary identity.",
      button: "Explore Food Trails",
      badge: "Taste Journey",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop",
    },
    footer: {
      brand: "Medan Digital",
      slogan: "The official portal for history and heritage.",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      faq: "FAQ",
      copyright: "© 2024 Medan City Government. All rights reserved.",
    },
  },
};

export const landmark3DData = [
  {
    id: "maimun",
    src: is3dImg,
    year: "1888",
    title: { id: "Istana Maimun", en: "Maimun Palace" },
    shortDesc: {
      id: "Istana peninggalan Kesultanan Deli dengan arsitektur perpaduan Melayu, Timur Tengah, dan Eropa.",
      en: "The royal palace of the Deli Sultanate featuring a unique blend of Malay, Middle Eastern, and European architecture.",
    },
    longDesc: {
      id: "Istana Maimun adalah istana kebesaran Kesultanan Deli dengan warna kuning khasnya yang melambangkan keagungan Melayu. Dibangun oleh Sultan Ma'mun Al Rasyid Perkasa Alamsyah, arsitekturnya memadukan gaya budaya Melayu, pengaruh Islam dari Timur Tengah, serta elemen desain Eropa. Bangunan ini memiliki 30 ruangan dan menjadi saksi bisu kejayaan Kesultanan Deli di masa lampau.",
      en: "Maimun Palace is the grand palace of the Deli Sultanate, marked by its distinctive yellow color representing Malay royalty. Built by Sultan Ma'mun Al Rasyid Perkasa Alamsyah, its architecture is a unique fusion of Malay cultural styles, Islamic Middle Eastern influences, and European design elements. The building has 30 rooms and stands as a silent witness to the past glory of the Deli Sultanate.",
    },
  },
  {
    id: "mesjidraya",
    src: mjdImg,
    year: "1909",
    title: { id: "Mesjid Raya Al-Mashun", en: "Medan Grand Mosque" },
    shortDesc: {
      id: "Masjid megah peninggalan Kesultanan Deli dengan perpaduan gaya Moorish, India, dan Eropa yang harmonis.",
      en: "A magnificent mosque built by the Deli Sultanate, blending Moorish, Indian, and European architectural styles in harmony.",
    },
    longDesc: {
      id: "Mesjid Raya Al-Mashun merupakan salah satu masjid terindah di Indonesia, dibangun oleh Sultan Deli Ma'mun Al Rasyid. Dirancang oleh arsitek Belanda, bangunan ini memadukan corak Moorish, India, serta elemen Eropa dan Melayu secara harmonis. Bentuknya yang simetris segi delapan dan ornamen mewahnya menjadikan masjid ini simbol kebanggaan umat Islam di Sumatera Utara.",
      en: "The Medan Grand Mosque (Al-Mashun) is one of the most beautiful mosques in Indonesia, built by the Sultan of Deli, Ma'mun Al Rasyid. Designed by a Dutch architect, it harmoniously blends Moorish, Indian, European, and Malay elements. Its symmetrical octagonal shape and luxurious ornaments make this mosque a proud symbol of the Islamic community in North Sumatra.",
    },
  },
  {
    id: "tirtanadi",
    src: tirImg,
    year: "1908",
    title: { id: "Menara Air Tirtanadi", en: "Tirtanadi Water Tower" },
    shortDesc: {
      id: "Ikon bersejarah kota Medan yang dibangun sebagai fasilitas penyediaan air bersih di era kolonial Belanda.",
      en: "A historic icon of Medan built by the Dutch colonial government as a clean water supply facility.",
    },
    longDesc: {
      id: "Menara Air Tirtanadi didirikan pada tahun 1908 oleh pemerintah Belanda dengan nama NV Waterleiding Maatschappij Aert Berceh. Pada masanya, menara ini merupakan sarana vital bagi kebutuhan air bersih di kota Medan. Dengan tinggi dan arsitekturnya yang khas, menara air ini bukan hanya bernilai fungsional, tetapi telah lama diakui sebagai tengara yang tidak bisa dipisahkan dari citra kota Medan.",
      en: "The Tirtanadi Water Tower was established in 1908 by the Dutch government under the name NV Waterleiding Maatschappij Aert Berceh. In its time, this tower was a vital facility for clean water in Medan. With its distinctive height and architecture, it holds not only functional value but has long been recognized as an inseparable landmark of Medan's city image.",
    },
  },
];
