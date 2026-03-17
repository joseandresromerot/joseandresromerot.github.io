"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { en, type Translations } from "./translations/en";
import { es } from "./translations/es";

type Language = "en" | "es";

type I18nContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextType | null>(null);

const STORAGE_KEY = "portfolio-language";

const translations: Record<Language, Translations> = { en, es };

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && (stored === "en" || stored === "es")) {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  return (
    <I18nContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useTranslation = (): I18nContextType => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within I18nProvider");
  }
  return ctx;
};
