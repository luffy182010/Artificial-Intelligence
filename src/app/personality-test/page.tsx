"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Brain } from "lucide-react";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/lib/i18n";
import { bigFiveQuestions } from "@/mock/personality";
import type { PersonalityScores } from "@/mock/user";

const traitLabels = {
  openness: { ar: "الانفتاح", en: "Openness" },
  conscientiousness: { ar: "الانضباط", en: "Conscientiousness" },
  extraversion: { ar: "الاجتماعية", en: "Extraversion" },
  agreeableness: { ar: "التعاون", en: "Agreeableness" },
  neuroticism: { ar: "الحساسية للتوتر", en: "Neuroticism" },
} as const;

const choices = [1, 2, 3, 4, 5];

export default function PersonalityTestPage() {
  const { locale, dir } = useLanguage();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;
  const question = bigFiveQuestions[step];
  const progress = showResult ? 100 : Math.round(((step + 1) / bigFiveQuestions.length) * 100);

  const result = useMemo<PersonalityScores>(() => {
    const base: PersonalityScores = {
      openness: 50,
      conscientiousness: 50,
      extraversion: 50,
      agreeableness: 50,
      neuroticism: 50,
    };
    bigFiveQuestions.forEach((item, index) => {
      const answer = answers[index] ?? 3;
      base[item.trait] = Math.min(96, Math.max(24, base[item.trait] + (answer - 3) * 11));
    });
    return base;
  }, [answers]);

  function answer(value: number) {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
    if (step === bigFiveQuestions.length - 1) {
      setShowResult(true);
    } else {
      setStep((current) => current + 1);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="aurora" />
      <Navbar />
      <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-3xl place-items-center px-4 py-10">
        <Card className="w-full animate-fade-up p-5 sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <Badge variant="teal">{locale === "ar" ? "اختبار Big Five" : "Big Five test"}</Badge>
              <h1 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                {showResult ? (locale === "ar" ? "نتيجتك جاهزة" : "Your result is ready") : locale === "ar" ? "سؤال واحد في كل مرة" : "One question at a time"}
              </h1>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary-from to-teal-to">
              <Brain size={24} />
            </span>
          </div>
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-sm font-bold text-text-secondary">
              <span>{showResult ? (locale === "ar" ? "اكتمل" : "Complete") : `${step + 1}/${bigFiveQuestions.length}`}</span>
              <span>{progress}%</span>
            </div>
            <div className="h-3 rounded-full bg-white/10">
              <div className="h-3 rounded-full bg-gradient-to-r from-primary-from to-teal-to transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
          {!showResult ? (
            <div>
              <p className="text-xl font-extrabold leading-9">{locale === "ar" ? question.ar : question.en}</p>
              <div className="mt-8 grid grid-cols-5 gap-2">
                {choices.map((choice) => (
                  <button
                    key={choice}
                    type="button"
                    onClick={() => answer(choice)}
                    className="min-h-16 rounded-lg border border-white/10 bg-white/[0.04] text-lg font-extrabold transition hover:border-teal-to hover:bg-teal-from/15"
                  >
                    {choice}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex justify-between text-xs font-bold text-text-secondary">
                <span>{locale === "ar" ? "لا أوافق" : "Disagree"}</span>
                <span>{locale === "ar" ? "أوافق" : "Agree"}</span>
              </div>
            </div>
          ) : (
            <div>
              <div className="space-y-4">
                {(Object.keys(result) as Array<keyof PersonalityScores>).map((trait) => (
                  <div key={trait}>
                    <div className="mb-2 flex items-center justify-between gap-3 text-sm font-bold">
                      <span>{locale === "ar" ? traitLabels[trait].ar : traitLabels[trait].en}</span>
                      <span>{result[trait]}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10">
                      <div className="h-3 rounded-full bg-gradient-to-r from-primary-from to-teal-to" style={{ width: `${result[trait]}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 rounded-lg border border-white/10 bg-white/[0.04] p-4 leading-7 text-text-secondary">
                {locale === "ar"
                  ? "تم حفظ النتيجة في ملفك التجريبي. سنستخدمها لتقديم نصائح تواصل ألطف وأكثر قربا لطريقتك."
                  : "Your result is saved to the mock profile. It will shape gentler advice that fits your communication style."}
              </p>
              <Link href="/dashboard" className="mt-6 block">
                <Button className="w-full" icon={<Arrow size={18} />}>{locale === "ar" ? "الدخول إلى لوحة المستخدم" : "Go to user dashboard"}</Button>
              </Link>
            </div>
          )}
        </Card>
      </section>
    </main>
  );
}
