"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, type Lang, type Translations } from "./translations";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "es",
  toggle: () => {},
  t: translations.es,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("psf-lang") as Lang | null;
    if (stored === "es" || stored === "en") setLangState(stored);
  }, []);

  function toggle() {
    const next: Lang = lang === "es" ? "en" : "es";
    setLangState(next);
    localStorage.setItem("psf-lang", next);
    // Also set cookie so server components can read the language
    document.cookie = `psf-lang=${next}; path=/; max-age=31536000; SameSite=Lax`;
  }

  return (
    <LangContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export type { Lang, Translations };
