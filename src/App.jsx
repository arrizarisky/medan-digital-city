import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sejarah from "./pages/Sejarah";
import Budaya from "./pages/Budaya";

export default function App() {
  // Global language state - single source of truth
  const [lang, setLang] = useState("id");

  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}
