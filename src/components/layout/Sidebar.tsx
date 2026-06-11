"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, CalendarClock, Home, Search, ShieldCheck, Upload, UsersRound } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", ar: "الرئيسية", en: "Home", icon: Home },
  { href: "/dashboard/analyzer", ar: "المحلل", en: "Analyzer", icon: Upload },
  { href: "/dashboard/analysis", ar: "النتائج", en: "Results", icon: BarChart3 },
  { href: "/dashboard/therapists", ar: "المعالجون", en: "Therapists", icon: Search },
  { href: "/dashboard/therapist", ar: "لوحة المعالج", en: "Therapist", icon: CalendarClock },
  { href: "/dashboard/admin", ar: "الإدارة", en: "Admin", icon: ShieldCheck },
];

export function Sidebar() {
  const pathname = usePathname();
  const { locale } = useLanguage();

  return (
    <>
      <aside className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-background/95 px-2 py-2 backdrop-blur-xl md:hidden">
        <nav className="grid grid-cols-6 gap-1">
          {items.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "grid min-h-12 place-items-center rounded-lg text-xs font-bold text-text-secondary transition",
                  active && "bg-white/[0.08] text-text-primary",
                )}
                aria-label={item.en}
              >
                <Icon size={19} />
              </Link>
            );
          })}
        </nav>
      </aside>
      <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-20 shrink-0 flex-col rounded-lg border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl md:flex xl:w-64">
        <div className="mb-5 flex items-center gap-3 px-2">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary-from to-teal-to">
            <UsersRound size={20} />
          </span>
          <span className="hidden font-extrabold xl:block">CrossTalk</span>
        </div>
        <nav className="space-y-2">
          {items.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex min-h-12 items-center justify-center gap-3 rounded-lg px-3 text-sm font-bold text-text-secondary transition hover:bg-white/[0.06] hover:text-text-primary xl:justify-start",
                  active && "bg-white/[0.08] text-text-primary",
                )}
              >
                <Icon size={20} />
                <span className="hidden xl:inline">{locale === "ar" ? item.ar : item.en}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
