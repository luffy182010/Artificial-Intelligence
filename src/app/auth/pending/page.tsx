"use client";

import Link from "next/link";
import { Clock3, FileCheck2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/lib/i18n";

export default function PendingTherapistPage() {
  const { locale } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="aurora" />
      <Navbar />
      <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-xl place-items-center px-4 py-10">
        <Card className="w-full text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-gradient-to-br from-primary-from to-teal-to">
            <Clock3 size={28} />
          </span>
          <Badge className="mt-6" variant="indigo">pending</Badge>
          <h1 className="mt-4 text-3xl font-extrabold">{locale === "ar" ? "طلبك قيد المراجعة" : "Your request is under review"}</h1>
          <p className="mt-3 leading-7 text-text-secondary">
            {locale === "ar"
              ? "ستظهر في لوحة الإدارة كطلب معالج جديد. بعد الموافقة يمكنك دخول لوحة المعالج."
              : "You now appear in the admin dashboard as a new therapist request. Once approved, the therapist dashboard opens."}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/dashboard/admin">
              <Button variant="teal" icon={<FileCheck2 size={18} />}>{locale === "ar" ? "عرض الإدارة" : "View admin"}</Button>
            </Link>
            <Link href="/">
              <Button variant="ghost">{locale === "ar" ? "الرئيسية" : "Home"}</Button>
            </Link>
          </div>
        </Card>
      </section>
    </main>
  );
}
