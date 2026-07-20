import masjidRayaImg from "../assets/images/mesjid-raya.jpg";
import tjongAfieImg from "../assets/images/tjong-afie-mansion.png";
import istanaMaimunImg from "../assets/images/istanamaimun.png";
import cadikaImg from "../assets/images/Destinasi-Wisata/cadika.png";
import lapanganMerdekaImg from "../assets/images/Destinasi-Wisata/lapangan-merdeka-walk.png";
import kantorPosImg from "../assets/images/Bangunan-bersejarah/kantor-pos-2.png";

// Detail images
import mrDalamImg from "../assets/images/detail/masjid raya bagian dalam.jpg";
import mr4Img from "../assets/images/detail/masjid raya 4.jpg";
import imSinggasanaImg from "../assets/images/detail/ruang singgasana istana maimun.jpg";
import imRuanganImg from "../assets/images/detail/ruangan di istana maimun.jpg";
import tjongAfieDetailImg from "../assets/images/Bangunan-bersejarah/tjong-afie-mansion-2.png";
import posIndonesiaImg from "../assets/images/Bangunan-bersejarah/kantor-pos-indonesia.png";
import lonsumImg from "../assets/images/Bangunan-bersejarah/Gedung-London-Sumatera.webp";

export const destinationConfig = {
  id: {
    items: [
      {
        id: 1,
        title: "Masjid Raya Al-Mashun",
        tag: "Bersejarah",
        tagClass: "bg-[#B28A32] text-white",
        desc: "Kemegahan arsitektur Maroko, Spanyol, dan Renaissance yang dibangun dalam satu mahakarya abadi.",
        imageUrl: masjidRayaImg,
        detailTitle: "Kemegahan Arsitektur Multikultural Abadi",
        details: [
          {
            highlight: "Landmark Spiritual Bersejarah di Jantung Kota.",
            text: "Masjid Raya Al-Mashun didirikan pada tahun 1906 oleh Sultan Ma'mun Al Rasyid Perkasa Alamsyah dari Kesultanan Deli. Masjid ini berdiri sebagai simbol keagungan iman dan saksi bisu masa kejayaan Kesultanan di Sumatra Utara.",
            image: mr4Img
          },
          {
            highlight: "Sentuhan Arsitektur Maroko, Spanyol, dan Renaissance.",
            text: "Dirancang oleh arsitek Belanda J.A. Tingdeman, bangunan ini memiliki bentuk segi delapan (oktagonal) simetris yang indah dengan kubah-kubah hitam besar dari tembaga, berpadu harmonis dengan detail mihrab dan pilar bergaya Spanyol-Renaissance.",
            image: mrDalamImg
          }
        ]
      },
      {
        id: 2,
        title: "Istana Maimun",
        tag: "Peninggalan",
        tagClass: "bg-[#50652D] text-white",
        desc: "Istana megah ikonik Kesultanan Deli yang menampilkan perpaduan arsitektur Melayu dan Islam yang anggun.",
        imageUrl: istanaMaimunImg,
        detailTitle: "Mahkota Kesultanan Deli yang Memikat Dunia",
        details: [
          {
            highlight: "Kemegahan Singgasana Berwarna Kuning Emas.",
            text: "Istana Maimun memiliki luas wilayah sebesar 2.772 meter persegi dengan total 30 ruangan. Area balairung utama (Singgasana) didominasi warna kuning keemasan yang melambangkan kemegahan dan kehormatan adat Melayu.",
            image: imSinggasanaImg
          },
          {
            highlight: "Harmoni Seni Bina Eropa, Islam, dan Melayu.",
            text: "Pengaruh Eropa terlihat jelas pada pintu, jendela lebar, prasasti marmer, dan lampu gantung kristal mewah. Gaya arsitektur Islam tampak pada kubah lengkung khas Timur Tengah yang memayungi atap istana.",
            image: imRuanganImg
          }
        ]
      },
      {
        id: 3,
        title: "Tjong A Fie Mansion",
        tag: "Budaya",
        tagClass: "bg-[#E9D48F] text-[#423419]",
        desc: "Jelajahi bangunan cagar budaya abad ke-19 milik saudagar dan filantropis ternama, Tjong A Fie.",
        imageUrl: tjongAfieImg,
        detailTitle: "Peninggalan Filantropi Abad ke-19 di Kesawan",
        details: [
          {
            highlight: "Cagar Budaya Kaya Akulturasi Tionghoa-Eropa-Melayu.",
            text: "Mansion bersejarah dengan 35 kamar ini dibangun pada tahun 1895 oleh Tjong A Fie, seorang saudagar dan filantropis terkemuka. Kediamannya melambangkan harmoni budaya dengan hiasan ornamen kayu berukir khas Tiongkok dan sentuhan furnitur bergaya kolonial Eropa.",
            image: tjongAfieImg
          },
          {
            highlight: "Ruang Tengah yang Menampilkan Keindahan Klasik.",
            text: "Setiap sudut mansion dirancang dengan memperhatikan prinsip Feng Shui yang ketat. Dilengkapi halaman dalam terbuka (courtyard) yang luas untuk memastikan sirkulasi udara dan cahaya alami yang melimpah.",
            image: tjongAfieDetailImg
          }
        ]
      },
      {
        id: 4,
        title: "Posbloc Medan",
        tag: "Peninggalan",
        tagClass: "bg-[#EFEFE9] text-[#50652D]",
        desc: "Gedung Kantor Pos Klasik peninggalan Belanda yang kini disulap menjadi ruang kreatif publik anak muda.",
        imageUrl: kantorPosImg,
        detailTitle: "Transformasi Pusat Korespondensi Menjadi Ruang Kreatif",
        details: [
          {
            highlight: "Monumen Bersejarah di Titik Nol Medan.",
            text: "Didirikan pada tahun 1911, gedung bekas Kantor Pos Medan ini dirancang oleh arsitek ternama Snuyf. Memiliki arsitektur kubah bundar khas Eropa kolonial dan berlokasi strategis tepat di seberang Lapangan Merdeka.",
            image: kantorPosImg
          },
          {
            highlight: "Pusat Kolaborasi Kreatif dan Kuliner Lokal.",
            text: "Kini, bangunan ini direvitalisasi menjadi Posbloc Medan—sebuah creative hub modern yang mewadahi UMKM, pameran seni, pertunjukan musik, dan tempat nongkrong kreatif bagi komunitas anak muda Medan.",
            image: posIndonesiaImg
          }
        ]
      },
      {
        id: 5,
        title: "Lapangan Merdeka Walk",
        tag: "Sports",
        tagClass: "bg-[#829E65] text-white",
        desc: "Pusat kegiatan warga Medan untuk bersantai, berolahraga, dan menikmati denyut nadi kota modern.",
        imageUrl: lapanganMerdekaImg,
        detailTitle: "Jantung Kota Medan yang Penuh Energi",
        details: [
          {
            highlight: "Esplanade Sejarah Kota Medan.",
            text: "Lapangan Merdeka awalnya merupakan alun-alun kota bersejarah sejak masa kolonial yang dikelilingi oleh bangunan-bangunan megah kuno seperti Gedung London Sumatera (Lonsum) dan Balaikota lama.",
            image: lapanganMerdekaImg
          },
          {
            highlight: "Kawasan Cagar Budaya dan Ruang Terbuka Hijau.",
            text: "Menjadi tempat bertemunya aktivitas olahraga, pameran festival, kuliner khas Medan, dan tempat bersantai di bawah rindangnya pepohonan trembesi tua yang ikonik.",
            image: lonsumImg
          }
        ]
      },
      {
        id: 6,
        title: "Taman Cadika",
        tag: "Sports",
        tagClass: "bg-[#829E65] text-white",
        desc: "Taman Hutan Kota seluas 25 hektare di Medan Johor yang menawarkan ruang terbuka hijau asri, fasilitas olahraga lengkap, dan danau buatan bagi warga secara gratis.",
        imageUrl: cadikaImg,
        detailTitle: "Taman Hutan Kota Cadika: Ruang Publik Modern Medan",
        details: [
          {
            highlight: "Fasilitas Olahraga & Rekreasi Lengkap.",
            text: "Memiliki luas 25 hektare, taman ini dilengkapi dengan danau buatan Paya Badau seluas 2,02 hektare serta fasilitas ramah anak. Pengunjung dapat menikmati berbagai sarana seperti lintasan joging, arena berkuda, panahan, lapangan basket, hingga panjat tebing tanpa dipungut biaya masuk.",
            image: cadikaImg
          },
          {
            highlight: "Sejarah Pemugaran & Revitalisasi.",
            text: "Taman ini telah melalui proses pemugaran dan diresmikan kembali pada September 2024. Proyek revitalisasi yang didanai melalui program tanggung jawab sosial ini menjadikan Taman Cadika sebagai salah satu ikon destinasi wisata modern yang dikelola oleh Dinas Pemuda dan Olahraga Kota Medan.",
            image: cadikaImg
          }
        ]
      }
    ]
  },
  en: {
    items: [
      {
        id: 1,
        title: "Masjid Raya Al-Mashun",
        tag: "Historical",
        tagClass: "bg-[#B28A32] text-white",
        desc: "The grandeur of Moroccan, Spanish, and Renaissance architecture built into an immortal masterpiece.",
        imageUrl: masjidRayaImg,
        detailTitle: "Timeless Multicultural Architectural Grandeur",
        details: [
          {
            highlight: "A Historical Spiritual Landmark in the Heart of the City.",
            text: "Masjid Raya Al-Mashun was founded in 1906 by Sultan Ma'mun Al Rasyid Perkasa Alamsyah of the Deli Sultanate. It stands as a symbol of the majesty of faith and a silent witness to the glory days of the Sultanate in North Sumatra.",
            image: mr4Img
          },
          {
            highlight: "Moroccan, Spanish, and Renaissance Architectural Touches.",
            text: "Designed by Dutch architect J.A. Tingdeman, this building features a beautiful symmetrical octagonal shape with large black copper domes, blending harmoniously with Spanish-Renaissance style mihrab and pillar details.",
            image: mrDalamImg
          }
        ]
      },
      {
        id: 2,
        title: "Maimun Palace",
        tag: "Heritage",
        tagClass: "bg-[#50652D] text-white",
        desc: "The iconic grand palace of the Deli Sultanate featuring an elegant blend of Malay and Islamic architecture.",
        imageUrl: istanaMaimunImg,
        detailTitle: "The Crown of the Deli Sultanate That Captivates the World",
        details: [
          {
            highlight: "The Magnificence of the Golden Yellow Throne.",
            text: "Maimun Palace covers an area of 2,772 square meters with a total of 30 rooms. The main hall (Throne) area is dominated by a golden yellow color that symbolizes the grandeur and honor of Malay customs.",
            image: imSinggasanaImg
          },
          {
            highlight: "Harmony of European, Islamic, and Malay Architecture.",
            text: "European influence is clearly visible on the doors, wide windows, marble inscriptions, and luxurious crystal chandeliers. The Islamic architectural style is seen in the Middle Eastern curved domes that umbrella the palace roof.",
            image: imRuanganImg
          }
        ]
      },
      {
        id: 3,
        title: "Tjong A Fie Mansion",
        tag: "Culture",
        tagClass: "bg-[#E9D48F] text-[#423419]",
        desc: "Explore the 19th-century cultural heritage building owned by prominent merchant and philanthropist, Tjong A Fie.",
        imageUrl: tjongAfieImg,
        detailTitle: "19th-Century Philanthropic Heritage in Kesawan",
        details: [
          {
            highlight: "Cultural Heritage Rich in Chinese-European-Malay Acculturation.",
            text: "This historic 35-room mansion was built in 1895 by Tjong A Fie, a prominent merchant and philanthropist. His residence symbolizes cultural harmony with ornate Chinese wooden ornaments and European colonial style furniture.",
            image: tjongAfieImg
          },
          {
            highlight: "Central Room Displaying Classic Beauty.",
            text: "Every corner of the mansion is designed following strict Feng Shui principles. Equipped with a spacious open courtyard to ensure abundant natural air circulation and light.",
            image: tjongAfieDetailImg
          }
        ]
      },
      {
        id: 4,
        title: "Posbloc Medan",
        tag: "Heritage",
        tagClass: "bg-[#EFEFE9] text-[#50652D]",
        desc: "A classic Dutch heritage Post Office building now transformed into a creative public space for youth.",
        imageUrl: kantorPosImg,
        detailTitle: "Transformation of Correspondence Center into Creative Space",
        details: [
          {
            highlight: "A Historical Monument at Medan's Ground Zero.",
            text: "Established in 1911, this former Medan Post Office building was designed by renowned architect Snuyf. It features a circular dome architecture typical of colonial Europe and is strategically located directly opposite Merdeka Square.",
            image: kantorPosImg
          },
          {
            highlight: "Center for Creative Collaboration and Local Culinary.",
            text: "Today, this building has been revitalized into Posbloc Medan—a modern creative hub that accommodates MSMEs, art exhibitions, music performances, and a creative hangout spot for Medan's youth community.",
            image: posIndonesiaImg
          }
        ]
      },
      {
        id: 5,
        title: "Merdeka Walk Square",
        tag: "Sports",
        tagClass: "bg-[#829E65] text-white",
        desc: "The center of Medan residents' activities to relax, exercise, and enjoy the heartbeat of a modern city.",
        imageUrl: lapanganMerdekaImg,
        detailTitle: "The Energetic Heart of Medan City",
        details: [
          {
            highlight: "The Historical Esplanade of Medan City.",
            text: "Merdeka Square was originally a historic city plaza since colonial times surrounded by majestic ancient buildings such as the London Sumatra Building (Lonsum) and the old City Hall.",
            image: lapanganMerdekaImg
          },
          {
            highlight: "Cultural Heritage Area and Green Open Space.",
            text: "A meeting place for sports activities, festival exhibitions, typical Medan culinary arts, and a place to relax under the shade of iconic old rain trees.",
            image: lonsumImg
          }
        ]
      },
      {
        id: 6,
        title: "Cadika Park",
        tag: "Sports",
        tagClass: "bg-[#829E65] text-white",
        desc: "A 25-hectare City Forest Park in Medan Johor offering beautiful green open spaces, complete sports facilities, and an artificial lake for residents for free.",
        imageUrl: cadikaImg,
        detailTitle: "Cadika City Forest Park: Medan's Modern Public Space",
        details: [
          {
            highlight: "Complete Sports & Recreation Facilities.",
            text: "Covering an area of 25 hectares, this park is equipped with the 2.02-hectare Paya Badau artificial lake as well as child-friendly facilities. Visitors can enjoy various facilities such as jogging tracks, horse riding arenas, archery, basketball courts, to rock climbing without entry fees.",
            image: cadikaImg
          },
          {
            highlight: "History of Restoration & Revitalization.",
            text: "This park has undergone a restoration process and was reopened in September 2024. The revitalization project funded through social responsibility programs makes Cadika Park one of the iconic modern tourist destinations managed by the Medan City Youth and Sports Service.",
            image: cadikaImg
          }
        ]
      }
    ]
  }
};
