import { Routes, Route, Navigate } from "react-router-dom"; // Impor sudah lengkap & benar
import Home from "@/pages/Home";
import Sejarah from "@/pages/Sejarah";
import Budaya from "@/pages/Budaya";
import Wisata from "@/pages/Wisata";
import Kuliner from "@/pages/KulinerPage";
import LegendarySpotsPage from "@/pages/LegendarySpotsPage";
import Inovation, { InovationDetail } from "@/pages/Inovation";
import CulinaryDetail from "@/components/sections/kuliner/CulinaryDetail";

export default function AppRoutes({ lang, setLang }) {
  return (
    <Routes>
      <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
      <Route
        path="/sejarah"
        element={<Sejarah lang={lang} setLang={setLang} />}
      />
      <Route
        path="/budaya"
        element={<Budaya lang={lang} setLang={setLang} />}
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

      <Route path="/kuliner" element={<Kuliner />} />
      <Route path="/kuliner/legendary-spots" element={<LegendarySpotsPage />} />
      <Route path="/kuliner/:id" element={<CulinaryDetail />} />
      <Route path="/inovasi" element={<Inovation />} />
      <Route path="/inovasi/:slug" element={<InovationDetail />} />
      <Route path="/tech" element={<Inovation />} />
      <Route path="/tech/:slug" element={<InovationDetail />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
