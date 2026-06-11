"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, GraduationCap, HeartHandshake, MessageSquareText, UsersRound } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/lib/i18n";

export default function LandingPage() {
  const { locale, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  const steps = locale === "ar"
    ? [
        ["أضف محادثة", "انسخ الحوار كما حدث أو ارفعه كملف، ثم عرّف المشاركين وأجيالهم."],
        ["اقرأ النبرة", "CrossTalk يلتقط مواضع الالتباس، سرعة الرد، وحساسية الكلمات."],
        ["اتفقوا على خطوة", "تحصلون على نصيحة عملية تساعد الحديث التالي أن يكون أهدأ وأوضح."],
      ]
    : [
        ["Add a conversation", "Paste the chat or upload a file, then tag each participant and generation."],
        ["Read the tone", "CrossTalk spots unclear phrasing, reply pace, and words that raised tension."],
        ["Choose one next step", "You get practical advice for a calmer and clearer next conversation."],
      ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="aurora" />
      <Navbar />
      <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="animate-fade-up">
          <Badge variant="teal">{locale === "ar" ? "للعائلة والعمل والمدرسة" : "For family, work, and school"}</Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-normal text-text-primary sm:text-5xl lg:text-6xl">
            {locale === "ar" ? "CrossTalk يفك عقدة الحديث بين الأجيال" : "CrossTalk helps generations hear each other better"}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
            {locale === "ar"
              ? "منصة تقرأ أنماط التواصل بين Gen Z وMillennials وGen X، وتحوّل سوء الفهم إلى خطوات صغيرة قابلة للتجربة."
              : "A communication intelligence platform that reads patterns between Gen Z, Millennials, and Gen X, then turns confusion into small practical moves."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/auth/register">
              <Button icon={<Arrow size={18} />}>{locale === "ar" ? "ابدأ مساحة جديدة" : "Start a new space"}</Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost">{locale === "ar" ? "شاهد لوحة العمل" : "View dashboard"}</Button>
            </Link>
          </div>
        </div>
        <div className="animate-fade-up rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-glow backdrop-blur-2xl [animation-delay:120ms]">
          <div className="rounded-lg bg-surface/70 p-4">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-text-secondary">{locale === "ar" ? "نقاش عائلي" : "Family thread"}</p>
                <h2 className="text-2xl font-extrabold">{locale === "ar" ? "خطة نهاية الأسبوع" : "Weekend plan"}</h2>
              </div>
              <Badge variant="coral">{locale === "ar" ? "يحتاج هدوء" : "Needs care"}</Badge>
            </div>
            <div className="space-y-3">
              {["Gen Z", "Millennial", "Gen X"].map((gen, index) => (
                <div key={gen} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="font-extrabold">{gen}</span>
                    <span className="h-2 w-24 rounded-full bg-white/10">
                      <span
                        className="block h-2 rounded-full bg-gradient-to-r from-primary-from to-teal-to"
                        style={{ width: `${76 - index * 14}%` }}
                      />
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-text-secondary">
                    {locale === "ar"
                      ? ["يريد مساحة للاقتراح بدون حكم سريع.", "يحاول تهدئة الإيقاع وربط التفاصيل.", "يبحث عن وضوح قبل الموافقة."][index]
                      : ["Needs room to suggest without quick judgment.", "Tries to slow the pace and connect details.", "Looks for clarity before agreeing."][index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(([title, body], index) => (
            <Card key={title} className="animate-fade-up" style={{ animationDelay: `${index * 90}ms` }}>
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-primary-from to-primary-to font-extrabold">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
              <p className="mt-3 leading-7 text-text-secondary">{body}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 pb-20 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          [HeartHandshake, locale === "ar" ? "العائلة" : "Family", locale === "ar" ? "حين تختلط المحبة بالتوقعات القديمة." : "When love and old expectations share the same table."],
          [BriefcaseBusiness, locale === "ar" ? "العمل" : "Work", locale === "ar" ? "حين تختلف السرعة عن طريقة طلب الوضوح." : "When speed and clarity do not arrive together."],
          [GraduationCap, locale === "ar" ? "المدرسة" : "School", locale === "ar" ? "حين يحتاج الطلاب والأهل والمعلمون لغة مشتركة." : "When students, parents, and teachers need a shared language."],
        ].map(([Icon, title, body]) => {
          const TypedIcon = Icon as typeof UsersRound;
          return (
            <Card key={String(title)}>
              <TypedIcon className="text-teal-to" size={28} />
              <h3 className="mt-4 text-xl font-extrabold">{String(title)}</h3>
              <p className="mt-3 leading-7 text-text-secondary">{String(body)}</p>
            </Card>
          );
        })}
      </section>
      <section className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
          <div>
            <MessageSquareText className="text-coral-to" size={32} />
            <h2 className="mt-4 text-3xl font-extrabold">{locale === "ar" ? "الفجوة ليست عيبا في أحد" : "The gap is not a flaw in anyone"}</h2>
            <p className="mt-4 leading-8 text-text-secondary">
              {locale === "ar"
                ? "كل جيل تعلم طريقة مختلفة لطلب الاهتمام، حماية الوقت، وإظهار الاحترام. CrossTalk يساعدكم تسمية هذه الفروق بدون لوم."
                : "Each generation learned a different way to ask for attention, protect time, and show respect. CrossTalk helps name those differences without blame."}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {["Gen Z", "Millennials", "Gen X"].map((gen) => (
              <div key={gen} className="rounded-lg border border-white/10 bg-background/45 p-4">
                <h3 className="font-extrabold">{gen}</h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {locale === "ar" ? "له إيقاعه، مفرداته، وحساسيته الخاصة." : "Has its own pace, vocabulary, and pressure points."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
