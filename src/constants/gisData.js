import MansionTjongAfieImg from "../assets/images/tjong-afie-mansion.png";
import MasjidRayaImg from "../assets/images/mesjid-raya.jpg";
import IstanaMaimunImg from "../assets/images/istanamaimun.png";
import KantorPosImg from "../assets/images/Bangunan-bersejarah/kantor-pos-2.png";

export const gisData = {
  categories: [
    { id: "all", label: "Semua Lokasi" },
    { id: "sejarah", label: "Sejarah & Budaya" },
    { id: "landmark", label: "Landmark Kota" },
    { id: "religi", label: "Wisata Religi" },
  ],
  locations: [
    {
      id: 1,
      name: "Mansion Tjong A Fie",
      category: "sejarah",
      coordinates: [3.5824, 98.6792],
      address: "Jl. Jend. Ahmad Yani No.105, Kesawan",
      desc: "Rumah saudagar kaya Tjong A Fie yang dibangun tahun 1895, menampilkan arsitektur memukau perpaduan Tiongkok, Eropa, dan Melayu.",
      history: "Dibangun pada tahun 1895 di kawasan Kesawan, rumah ini memiliki 35 kamar dengan arsitektur Tionghoa klasik. Tjong A Fie adalah kapten komunitas Tionghoa yang berjasa besar dalam pembangunan infrastruktur Medan. Mansion ini menjadi saksi akulturasi budaya Tionghoa dan Melayu di kota ini.",
      price: "Rp 35.000 / orang",
      hours: "09.00 - 17.00 WIB (Selasa-Minggu)",
      image: MansionTjongAfieImg,
    },
    {
      id: 2,
      name: "Istana Maimun",
      category: "sejarah",
      coordinates: [3.5755, 98.6837],
      address: "Jl. Brigjend Katamso No.66, Medan Maimun",
      desc: "Istana megah peninggalan Kesultanan Deli dengan arsitektur perpaduan Melayu, Islam, Spanyol, dan India.",
      history: "Selesai dibangun pada tahun 1891 oleh Sultan Makmun Al Rasyid Perkasa Alamsyah. Desainernya adalah arsitek asal Italia. Istana ini merupakan ikon Kota Medan yang melambangkan kebesaran Kesultanan Deli pada masa lampau.",
      price: "Rp 10.000 / orang",
      hours: "08.00 - 17.00 WIB (Setiap Hari)",
      image: IstanaMaimunImg,
    },
    {
      id: 3,
      name: "Masjid Raya Al-Mashun",
      category: "religi",
      coordinates: [3.5733, 98.6874],
      address: "Jl. Sisingamangaraja No.61, Medan Kota",
      desc: "Salah satu masjid tertua dan terindah di Medan, dibangun pada tahun 1906 oleh Sultan Ma'moen Al Rasyid.",
      history: "Dibangun pada tahun 1906 dan selesai pada tahun 1909. Pada awal pembangunannya, masjid ini menyatu dengan kompleks istana. Arsitekturnya memadukan unsur Timur Tengah, India, dan Spanyol.",
      price: "Gratis",
      hours: "Buka 24 Jam",
      image: MasjidRayaImg,
    },
    {
      id: 4,
      name: "Kantor Pos Medan",
      category: "landmark",
      coordinates: [3.5905, 98.6775],
      address: "Jl. Pos No.1, Kesawan",
      desc: "Bangunan bersejarah peninggalan Belanda yang berhadapan langsung dengan Lapangan Merdeka.",
      history: "Kantor pos ini didirikan pada tahun 1911 oleh arsitek Belanda Snuyf. Bangunan ini mempertahankan bentuk aslinya dengan gaya arsitektur kolonial yang khas, menjadikannya salah satu titik nol kilometer Kota Medan.",
      price: "Gratis (Parkir sesuai tarif)",
      hours: "08.00 - 22.00 WIB",
      image: KantorPosImg,
    }
  ]
};