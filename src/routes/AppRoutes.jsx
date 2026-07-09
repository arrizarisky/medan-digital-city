import Home from "@/pages/Home";
import Inovation from "@/pages/Inovation";
import Kuliner from "@/pages/KulinerPage";
import { Navigate, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kuliner" element={<Kuliner />} />
      <Route path="/tech" element={<Inovation />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
