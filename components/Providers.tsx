"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { ThemeProvider } from "next-themes";
import type { Language } from "@/data/portfolioData";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_STORAGE_KEY = "portfolio-language";
const languageListeners = new Set<() => void>();

function getLanguageSnapshot(): Language {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return savedLanguage === "vi" || savedLanguage === "en" ? savedLanguage : "en";
}

function getServerLanguageSnapshot(): Language {
  return "en";
}

function subscribeToLanguageChanges(listener: () => void): () => void {
  languageListeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    languageListeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function persistLanguage(language: Language): void {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  languageListeners.forEach((listener) => listener());
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within the app providers.");
  }

  return context;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguageChanges,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: persistLanguage,
    }),
    [language],
  );

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      scriptProps={{
        type: typeof window === "undefined" ? "text/javascript" : "text/plain",
      }}
    >
      <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    </ThemeProvider>
  );
}
