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
  id: 5,
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
};
