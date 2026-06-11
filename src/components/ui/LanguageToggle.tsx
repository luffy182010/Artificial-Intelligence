"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-sm font-bold text-text-primary transition hover:bg-white/[0.08]"
      aria-label="Toggle language"
    >
      <Languages size={18} />
      {locale === "ar" ? "EN" : "عربي"}
    </button>
  );
}
