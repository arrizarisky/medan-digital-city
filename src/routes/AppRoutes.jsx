import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Sejarah from "@/pages/Sejarah";
import Budaya from "@/pages/Budaya";
import Wisata from "@/pages/Wisata";
import Kuliner from "@/pages/KulinerPage";

import LegendarySpotsPage from "@/pages/LegendarySpotsPage";
import Inovation, { InovationDetail } from "@/pages/Inovation";
import CulinaryDetail from "@/components/sections/kuliner/CulinaryDetail";
import ExploreMap from "@/pages/ExploreMaps";

import KalenderBudaya from "@/pages/KalenderBudaya";
import GaleriSeni from "@/pages/GaleriSeni";
import DetailEtnis from "@/pages/DetailEtnis";
import DetailWisata from "@/pages/DetailWisata";

// lang/setLang tidak lagi di-pass sebagai props —
// setiap komponen mengambil dari useLanguage() context.
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"                      element={<Home />} />
      <Route path="/sejarah"               element={<Sejarah />} />
      <Route path="/kalender-budaya"       element={<KalenderBudaya />} />
      <Route path="/galeri-seni"           element={<GaleriSeni />} />
      <Route path="/budaya"                element={<Budaya />} />
      <Route path="/budaya/etnis/:slug"    element={<DetailEtnis />} />
      <Route path="/layanan"               element={<Budaya />} />
      <Route path="/tentang"               element={<Sejarah />} />
      <Route path="/wisata"                element={<Wisata />} />
      <Route path="/wisata/:slug"          element={<DetailWisata />} />

      <Route path="/kuliner"               element={<Kuliner />} />
      <Route path="/kuliner/legendary-spots" element={<LegendarySpotsPage />} />
      <Route path="/kuliner/:id"           element={<CulinaryDetail />} />

      <Route path="/inovasi"               element={<Inovation />} />
      <Route path="/inovasi/:slug"         element={<InovationDetail />} />
      <Route path="/tech"                  element={<Inovation />} />
      <Route path="/tech/:slug"            element={<InovationDetail />} />

      <Route path="/peta-eksplorasi"       element={<ExploreMap />} />

      <Route path="*"                      element={<Navigate to="/" replace />} />
    </Routes>
  );
}
