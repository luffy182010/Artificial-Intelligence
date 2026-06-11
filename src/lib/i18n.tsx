"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { copy, localeMeta, type Locale } from "@/lib/utils";

type LanguageContextValue = {
  locale: Locale;
  dir: "rtl" | "ltr";
  t: (path: string) => string;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readPath(source: unknown, path: string): string | undefined {
  return path.split(".").reduce<unknown>((value, key) => {
    if (value && typeof value === "object" && key in value) {
      return (value as Record<string, unknown>)[key];
    }
    return undefined;
  }, source) as string | undefined;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem("crosstalk-locale") as Locale | null;
    if (stored === "ar" || stored === "en") {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = localeMeta[locale].dir;
    window.localStorage.setItem("crosstalk-locale", locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(() => {
    const dir = localeMeta[locale].dir;
    return {
      locale,
      dir,
      t: (path: string) => readPath(copy[locale], path) ?? path,
      toggleLocale: () => setLocale((current) => (current === "ar" ? "en" : "ar")),
    };
  }, [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return value;
}
