"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionary } from "../i18n/dictionary";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("fa");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("locale");
    if (saved && saved !== locale) {
      setLocale(saved);
      return; // will run again with updated locale
    }
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale === "fa" ? "fa" : "en";
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
  }, [locale]);

  const t = useMemo(() => {
    const dict = dictionary[locale] || dictionary.fa;
    return (key) => {
      const value = key.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), dict);
      return typeof value === "string" ? value : key;
    };
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}


