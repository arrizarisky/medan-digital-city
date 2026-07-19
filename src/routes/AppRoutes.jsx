import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Sejarah from "@/pages/Sejarah";
import Budaya from "@/pages/Budaya";
import Wisata from "@/pages/Wisata";
import Kuliner from "@/pages/KulinerPage";

// Rute Hasil Penggabungan (Inovasi & Peta dari Main)
import LegendarySpotsPage from "@/pages/LegendarySpotsPage";
import Inovation, { InovationDetail } from "@/pages/Inovation";
import CulinaryDetail from "@/components/sections/kuliner/CulinaryDetail";
import ExploreMap from "@/pages/ExploreMaps";

// Rute Fitur Budaya & Galeri (Dari Stash Lokal Kamu)
import KalenderBudaya from "@/pages/KalenderBudaya";
import GaleriSeni from "@/pages/GaleriSeni";
import DetailEtnis from "@/pages/DetailEtnis";
import DetailWisata from "@/pages/DetailWisata";

export default function AppRoutes({ lang, setLang }) {
  return (
    <Routes>
      <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
      <Route
        path="/sejarah"
        element={<Sejarah lang={lang} setLang={setLang} />}
      />
      <Route
        path="/kalender-budaya"
        element={<KalenderBudaya lang={lang} setLang={setLang} />}
      />
      <Route
        path="/galeri-seni"
        element={<GaleriSeni lang={lang} setLang={setLang} />}
      />
      <Route
        path="/budaya"
        element={<Budaya lang={lang} setLang={setLang} />}
      />
      <Route
        path="/budaya/etnis/:slug"
        element={<DetailEtnis lang={lang} setLang={setLang} />}
      />
      <Route
        path="/layanan"
        element={<Budaya lang={lang} setLang={setLang} />}
      />
      <Route
        path="/tentang"
        element={<Sejarah lang={lang} setLang={setLang} />}
      />
      <Route
        path="/wisata"
        element={<Wisata lang={lang} setLang={setLang} />}
      />
      <Route
        path="/wisata/:slug"
        element={<DetailWisata lang={lang} setLang={setLang} />}
      />

      {/* Rute Kuliner */}
      <Route path="/kuliner" element={<Kuliner />} />
      <Route path="/kuliner/legendary-spots" element={<LegendarySpotsPage />} />
      <Route path="/kuliner/:id" element={<CulinaryDetail />} />
      
      {/* Rute Inovasi & Tech */}
      <Route path="/inovasi" element={<Inovation />} />
      <Route path="/inovasi/:slug" element={<InovationDetail />} />
      <Route path="/tech" element={<Inovation />} />
      <Route path="/tech/:slug" element={<InovationDetail />} />
      
      {/* Rute GIS / Peta Eksplorasi */}
      <Route path="/peta-eksplorasi" element={<ExploreMap />} />

      {/* Fallback Rute */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}