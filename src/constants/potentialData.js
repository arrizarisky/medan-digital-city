import smartCityCenterImg from "../assets/images/Teknologi-Modern/smart-city1.png";
import BandaraImg from "../assets/images/Teknologi-Modern/bandara.png";
import JalanTolImg from "../assets/images/Teknologi-Modern/jalan-tol.png";
import smartCityCenterImg2 from "../assets/images/Teknologi-Modern/smart-city2.png";
import Petir from "../assets/icons/petir.svg";
import Rocket from "../assets/icons/rocket.svg";
import Wifi from "../assets/icons/wifi.svg";

export const potentialConfig = {
  id: {
    features: [
      {
        id: 1,
        iconType: Petir,
        title: "Layanan Publik Terpadu",
        desc: "Portal digital satu pintu untuk semua urusan administrasi dan aspirasi warga.",
        iconColor: "bg-[#50652D]/10 text-[#50652D]",
      },
      {
        id: 2,
        iconType: Rocket,
        title: "Program Inkubator Startup",
        desc: "Memberdayakan inovator lokal dengan akses sumber daya dan jaringan global.",
        iconColor: "bg-[#B28A32]/10 text-[#B28A32]",
      },
      {
        id: 3,
        iconType: Wifi,
        title: "Konektivitas Universal",
        desc: "Perluasan jaringan Wi-Fi publik berkecepatan tinggi di pusat budaya dan titik transit transportasi.",
        iconColor: "bg-[#50652D]/10 text-[#50652D]",
      },
    ]
  },
  en: {
    features: [
      {
        id: 1,
        iconType: Petir,
        title: "Integrated Public Services",
        desc: "A one-stop digital portal for all administrative affairs and citizen aspirations.",
        iconColor: "bg-[#50652D]/10 text-[#50652D]",
      },
      {
        id: 2,
        iconType: Rocket,
        title: "Startup Incubator Program",
        desc: "Empowering local innovators with access to resources and global networks.",
        iconColor: "bg-[#B28A32]/10 text-[#B28A32]",
      },
      {
        id: 3,
        iconType: Wifi,
        title: "Universal Connectivity",
        desc: "Expansion of high-speed public Wi-Fi networks in cultural centers and transportation transit points.",
        iconColor: "bg-[#50652D]/10 text-[#50652D]",
      },
    ]
  },
  images: {
    smartCityCenter: smartCityCenterImg,
    kualanamuAirport: BandaraImg,
    binjaiTollGate: JalanTolImg,
    trafficControl: smartCityCenterImg2,
  },
};
