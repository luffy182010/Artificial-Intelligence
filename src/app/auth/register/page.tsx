"use client";

import Link from "next/link";
import { Check, FileUp, Lock, Mail, Stethoscope, UserRound } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { useLanguage } from "@/lib/i18n";
import type { Generation, UserRole } from "@/mock/user";

const generationOptions: { value: Generation; ar: string; en: string }[] = [
  { value: "Gen Z", ar: "أحب الاختصار والوضوح المباشر.", en: "Prefers brevity and direct clarity." },
  { value: "Millennial", ar: "أمزج بين المرونة والحاجة لسياق كاف.", en: "Balances flexibility with enough context." },
  { value: "Gen X", ar: "أقدّر الاستقلالية والاتفاقات المحددة.", en: "Values independence and defined agreements." },
];

const roleOptions: { value: UserRole; ar: string; en: string }[] = [
  { value: "User", ar: "مستخدم", en: "User" },
  { value: "Therapist", ar: "معالج", en: "Therapist" },
];

export default function RegisterPage() {
  const { locale } = useLanguage();
  const [generation, setGeneration] = useState<Generation>("Gen Z");
  const [role, setRole] = useState<UserRole>("User");

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="aurora" />
      <Navbar />
      <section className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl animate-fade-up">
          <Badge variant="indigo">{locale === "ar" ? "تسجيل حسب الدور" : "Role-based registration"}</Badge>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            {locale === "ar" ? "ابدأ بالطريقة المناسبة لك" : "Start in the right lane"}
          </h1>
          <p className="mt-3 leading-7 text-text-secondary">
            {locale === "ar"
              ? "المستخدم يكمل اختبار الشخصية أولا، والمعالج يرفع شهادة للمراجعة من الإدارة."
              : "Users complete a personality test first; therapists upload a certificate for admin review."}
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="space-y-5">
            <Input label={locale === "ar" ? "الاسم" : "Name"} placeholder={locale === "ar" ? "اسمك" : "Your name"} icon={<UserRound size={18} />} />
            <Input label={locale === "ar" ? "البريد الإلكتروني" : "Email"} type="email" placeholder="name@email.com" icon={<Mail size={18} />} />
            <Input label={locale === "ar" ? "كلمة المرور" : "Password"} type="password" placeholder="••••••••" icon={<Lock size={18} />} />
            {role === "Therapist" ? (
              <div className="rounded-lg border border-dashed border-white/15 bg-white/[0.03] p-5">
                <FileUp className="text-teal-to" size={26} />
                <h2 className="mt-3 font-extrabold">{locale === "ar" ? "شهادة الاعتماد" : "Certificate upload"}</h2>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {locale === "ar" ? "ارفع PDF أو صورة. الحالة ستكون pending حتى موافقة الإدارة." : "Upload a PDF or image. Status stays pending until admin approval."}
                </p>
                <input className="mt-4 w-full text-sm text-text-secondary file:me-3 file:min-h-10 file:rounded-lg file:border-0 file:bg-white/[0.08] file:px-4 file:font-bold file:text-text-primary" type="file" accept=".pdf,image/*" />
              </div>
            ) : null}
            <Link href={role === "User" ? "/personality-test" : "/auth/pending"} className="block pt-2">
              <Button className="w-full">
                {role === "User"
                  ? locale === "ar" ? "التسجيل وبدء اختبار الشخصية" : "Register and start test"
                  : locale === "ar" ? "إرسال للمراجعة" : "Submit for review"}
              </Button>
            </Link>
          </Card>
          <div className="space-y-5">
            <Card>
              <div className="mb-4 flex items-center gap-3">
                <Badge variant="teal">1</Badge>
                <h2 className="text-xl font-extrabold">{locale === "ar" ? "اختر الدور" : "Choose role"}</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {roleOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setRole(option.value)}
                    className={`min-h-28 rounded-lg border p-4 text-start font-bold transition ${
                      role === option.value ? "border-primary-to bg-primary-from/15" : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {option.value === "Therapist" ? <Stethoscope size={18} /> : <UserRound size={18} />}
                      {locale === "ar" ? option.ar : option.en}
                      {role === option.value ? <Check size={18} className="ms-auto" /> : null}
                    </span>
                    <span className="mt-3 block text-sm font-normal leading-6 text-text-secondary">
                      {option.value === "User"
                        ? locale === "ar" ? "سأرفع محادثات وأحجز جلسات عند الحاجة." : "I will upload conversations and book sessions when needed."
                        : locale === "ar" ? "سأراجع حالات بعد موافقة الإدارة." : "I will review cases after admin approval."}
                    </span>
                  </button>
                ))}
              </div>
            </Card>
            <Card>
              <div className="mb-4 flex items-center gap-3">
                <Badge variant="indigo">2</Badge>
                <h2 className="text-xl font-extrabold">{locale === "ar" ? "اختر جيلك" : "Choose generation"}</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {generationOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setGeneration(option.value)}
                    className={`min-h-32 rounded-lg border p-4 text-start transition ${
                      generation === option.value ? "border-teal-to bg-teal-from/15" : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-2 font-extrabold">
                      {option.value}
                      {generation === option.value ? <Check size={18} /> : null}
                    </span>
                    <span className="mt-3 block text-sm leading-6 text-text-secondary">{locale === "ar" ? option.ar : option.en}</span>
                  </button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
