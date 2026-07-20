// ============================================================
// LanguageContext.jsx
// Context global untuk state bahasa.
// ============================================================
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({ lang: "id", setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("id");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Hook untuk konsumsi lang/setLang dari komponen mana saja */
export function useLanguage() {
  return useContext(LanguageContext);
}
