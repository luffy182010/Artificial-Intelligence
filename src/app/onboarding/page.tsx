"use client";

import { MailPlus, Plus, UsersRound } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { useLanguage } from "@/lib/i18n";
import type { GroupType } from "@/mock/groups";

const groupTypes: { value: GroupType; ar: string; en: string }[] = [
  { value: "Family", ar: "عائلة", en: "Family" },
  { value: "Work", ar: "عمل", en: "Work" },
  { value: "School", ar: "مدرسة", en: "School" },
];

export default function OnboardingPage() {
  const { locale } = useLanguage();
  const [mode, setMode] = useState<"create" | "join">("create");
  const [groupType, setGroupType] = useState<GroupType>("Family");

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="aurora" />
      <Navbar />
      <section className="relative mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <Badge variant="teal">{locale === "ar" ? "لنبدأ بهدوء" : "A calm start"}</Badge>
          <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">{locale === "ar" ? "اصنع مساحة للحديث" : "Make room for the conversation"}</h1>
          <p className="mt-3 leading-7 text-text-secondary">
            {locale === "ar" ? "يمكنك إنشاء مجموعة جديدة أو الانضمام لمساحة دعاك إليها شخص تعرفه." : "Create a new group or join a space someone you know invited you to."}
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["create", Plus, locale === "ar" ? "إنشاء مجموعة" : "Create group", locale === "ar" ? "ابدأ لعائلة أو فريق أو صف." : "Start for a family, team, or class."],
              ["join", UsersRound, locale === "ar" ? "انضمام لمجموعة" : "Join group", locale === "ar" ? "استخدم رمز الدعوة الذي وصلك." : "Use the invite code you received."],
            ].map(([value, Icon, title, body]) => {
              const TypedIcon = Icon as typeof Plus;
              return (
                <button
                  key={String(value)}
                  type="button"
                  onClick={() => setMode(value as "create" | "join")}
                  className={`rounded-lg border p-5 text-start transition ${
                    mode === value ? "border-teal-to bg-teal-from/15" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                  }`}
                >
                  <TypedIcon size={24} className="text-teal-to" />
                  <h2 className="mt-4 text-xl font-extrabold">{String(title)}</h2>
                  <p className="mt-2 leading-7 text-text-secondary">{String(body)}</p>
                </button>
              );
            })}
          </div>
          <Card className="space-y-5">
            {mode === "create" ? (
              <>
                <Input label={locale === "ar" ? "اسم المجموعة" : "Group name"} placeholder={locale === "ar" ? "مثلا: بيت آل سامي" : "Example: The Sami home"} />
                <div>
                  <p className="mb-3 text-sm font-bold">{locale === "ar" ? "نوع المجموعة" : "Group type"}</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {groupTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setGroupType(type.value)}
                        className={`min-h-16 rounded-lg border px-4 font-bold transition ${
                          groupType === type.value ? "border-primary-to bg-primary-from/15" : "border-white/10 bg-white/[0.03]"
                        }`}
                      >
                        {locale === "ar" ? type.ar : type.en}
                      </button>
                    ))}
                  </div>
                </div>
                <Input label={locale === "ar" ? "ادع عضوا بالبريد" : "Invite member by email"} type="email" placeholder="member@email.com" icon={<MailPlus size={18} />} />
                <Button className="w-full">{locale === "ar" ? "إنشاء وإرسال الدعوة" : "Create and invite"}</Button>
              </>
            ) : (
              <>
                <Input label={locale === "ar" ? "رمز الدعوة" : "Invite code"} placeholder="CT-2026" />
                <Input label={locale === "ar" ? "بريدك داخل المجموعة" : "Your email in the group"} type="email" placeholder="name@email.com" />
                <Button className="w-full" variant="teal">{locale === "ar" ? "الانضمام" : "Join"}</Button>
              </>
            )}
          </Card>
        </div>
      </section>
    </main>
  );
}
