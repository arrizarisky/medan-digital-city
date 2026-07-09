import { useState } from "react";
import AppRoutes from "@/routes/AppRoutes";
export default function App() {
  const [lang, setLang] = useState("id");
  return <AppRoutes lang={lang} setLang={setLang} />;
}
