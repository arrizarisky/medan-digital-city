import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Sejarah from "./pages/Sejarah";
import Budaya from "./pages/Budaya";
import Wisata from "@/pages/Wisata";
import Kuliner from "@/pages/KulinerPage";
import Inovation from "@/pages/Inovation";

export default function App() {
  const [lang, setLang] = useState("id");

  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Utama & Fitur yang Sedang Kamu Kerjakan */}
        <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
        <Route path="/sejarah" element={<Sejarah lang={lang} setLang={setLang} />} />
        <Route path="/budaya" element={<Budaya lang={lang} setLang={setLang} />} />
        <Route path="/layanan" element={<Budaya lang={lang} setLang={setLang} />} />
        <Route path="/tentang" element={<Sejarah lang={lang} setLang={setLang} />} />
        <Route path="/wisata" element={<Wisata lang={lang} setLang={setLang} />} />
        
        {/* Halaman Kuliner & Inovasi (Menyesuaikan rute baru dari kawanmu) */}
        <Route path="/kuliner" element={<Kuliner />} />
        <Route path="/inovasi" element={<Inovation />} />
        <Route path="/tech" element={<Inovation />} /> {/* Mengakomodasi path baru kawanmu */}

        {/* Fallback jika route tidak ditemukan */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}