import Home from "@/pages/Home";
import Kuliner from "@/pages/KulinerPage";
import Inovation from "@/pages/Inovation";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kuliner" element={<Kuliner />} />
      <Route path="/tech" element={<Inovation />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
