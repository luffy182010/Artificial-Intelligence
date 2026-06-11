"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-text-primary">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary-from to-teal-to">
            <MessageCircle size={22} />
          </span>
          <span>{t("common.product")}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-text-secondary md:flex">
          <Link href="/" className="transition hover:text-text-primary">
            {t("nav.home")}
          </Link>
          <Link href="/dashboard" className="transition hover:text-text-primary">
            {t("nav.dashboard")}
          </Link>
          <Link href="/auth/login" className="transition hover:text-text-primary">
            {t("nav.login")}
          </Link>
          <Link href="/auth/register" className="rounded-lg bg-white/[0.06] px-4 py-2 text-text-primary transition hover:bg-white/[0.1]">
            {t("nav.register")}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <div className="hidden h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-coral-from to-primary-to text-sm font-extrabold sm:grid">
            ل
          </div>
        </div>
      </div>
    </header>
  );
}
