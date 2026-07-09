import istanaMaimunImg from "../assets/images/istanamaimun.png";
import TjongAfie2Img from "../assets/images/Tjong-AFie-Mansion.png";
import KulinerImg from "../assets/images/kuliner-hero.png";
import masjidRayaImg from "../assets/images/mesjid-raya.jpg";
import JalanTolImg from "../assets/images/Teknologi-Modern/jalan-tol.png";
import BuildingIcon from "../assets/icons/sejarah-putih.svg";
import MaskIcon from "../assets/icons/topeng.svg";
import FoodIcon from "../assets/icons/alat-makan.svg";
import CameraIcon from "../assets/icons/kamera.svg";
import TechIcon from "../assets/icons/panah-naik.svg";

export const exploreConfig = {
  items: [
    {
      id: 1,
      title: "Sejarah",
      desc: "Perjalanan panjang Kota Medan dari masa ke masa.",
      imageUrl: istanaMaimunImg,
      path: "/sejarah",
      icon: BuildingIcon,
    },
    {
      id: 2,
      title: "Budaya & Tradisi",
      desc: "Keberagaman budaya yang hidup dan diwariskan.",
      imageUrl: TjongAfie2Img,
      path: "/budaya",
      icon: MaskIcon,
    },
    {
      id: 3,
      title: "Kuliner Khas",
      desc: "Cita rasa khas Medan yang menggoda selera.",
      imageUrl: KulinerImg,
      path: "/kuliner",
      icon: FoodIcon,
    },
    {
      id: 4,
      title: "Wisata Unggulan",
      desc: "Tempat wisata terbaik yang wajib dikunjungi.",
      imageUrl: masjidRayaImg,
      path: "/wisata",
      icon: CameraIcon,
    },
    {
      id: 5,
      title: "Potensi Modern",
      desc: "Inovasi dan pembangunan untuk masa depan Medan.",
      imageUrl: JalanTolImg,
      path: "/tech",
      icon: TechIcon,
    },
  ],
};
