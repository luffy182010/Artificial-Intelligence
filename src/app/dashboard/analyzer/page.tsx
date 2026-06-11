"use client";

import { FileUp, Send, UserPlus } from "lucide-react";
import { useState } from "react";
import { Chatbot } from "@/components/dashboard/Chatbot";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { useLanguage } from "@/lib/i18n";
import { analysisResults } from "@/mock/analysis";
import type { Generation } from "@/mock/user";

const generations: Generation[] = ["Gen Z", "Millennial", "Gen X"];

export default function AnalyzerPage() {
  const { locale } = useLanguage();
  const [showResult, setShowResult] = useState(false);
  const result = analysisResults[0];

  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <div className="mx-auto flex w-full max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <section className="min-w-0 flex-1 space-y-6">
          <div>
            <Badge variant="teal">{locale === "ar" ? "محلل الذكاء" : "AI analyzer"}</Badge>
            <h1 className="mt-3 text-3xl font-extrabold">{locale === "ar" ? "حلل محادثة بين الأجيال" : "Analyze an intergenerational conversation"}</h1>
            <p className="mt-2 text-text-secondary">
              {locale === "ar" ? "الصق النص أو ارفع ملفا، ثم عرّف كل مشارك وجيله." : "Paste text or upload a file, then tag each participant and generation."}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Card>
              <label className="block space-y-2">
                <span className="text-sm font-bold">{locale === "ar" ? "نص المحادثة" : "Conversation text"}</span>
                <textarea
                  className="min-h-72 w-full resize-y rounded-lg border border-white/10 bg-white/[0.04] p-4 leading-7 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-primary-to"
                  placeholder={locale === "ar" ? "الصق الحوار هنا..." : "Paste the conversation here..."}
                  defaultValue={
                    locale === "ar"
                      ? "زينة: أحتاج أن أقول رأيي بدون أن يبدو كأنه اعتراض.\nكريم: أنا فقط أريد خطة واضحة قبل أن نتحرك."
                      : "Zaina: I need to share my opinion without sounding like I am objecting.\nKarim: I just want a clear plan before we move."
                  }
                />
              </label>
              <div className="mt-4 rounded-lg border border-dashed border-white/15 bg-white/[0.03] p-5 text-center">
                <FileUp className="mx-auto text-teal-to" size={28} />
                <p className="mt-3 font-bold">{locale === "ar" ? "أو ارفع ملفا" : "Or upload a file"}</p>
                <input className="mx-auto mt-4 max-w-full text-sm text-text-secondary file:me-3 file:min-h-10 file:rounded-lg file:border-0 file:bg-white/[0.08] file:px-4 file:font-bold file:text-text-primary" type="file" accept=".txt,.pdf,.doc,.docx" />
              </div>
            </Card>

            <Card className="space-y-4">
              <div className="flex items-center gap-3">
                <UserPlus className="text-teal-to" size={22} />
                <h2 className="text-xl font-extrabold">{locale === "ar" ? "المشاركون" : "Participants"}</h2>
              </div>
              {["زينة", "كريم", "مها"].map((name, index) => (
                <div key={index} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <Input label={locale === "ar" ? `المشارك ${index + 1}` : `Participant ${index + 1}`} defaultValue={locale === "ar" ? name : ["Zaina", "Karim", "Maha"][index]} />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {generations.map((generation) => (
                      <button
                        key={generation}
                        type="button"
                        className={`min-h-11 rounded-lg border px-2 text-xs font-bold transition ${
                          generations[index] === generation ? "border-teal-to bg-teal-from/15" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                        }`}
                      >
                        {generation}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <Button className="w-full" icon={<Send size={18} />} onClick={() => setShowResult(true)}>
                {locale === "ar" ? "إرسال للتحليل" : "Submit for analysis"}
              </Button>
            </Card>
          </div>

          {showResult ? (
            <div className="space-y-5">
              <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
                <Card className="text-center">
                  <p className="text-sm font-bold text-text-secondary">{locale === "ar" ? "مؤشر الفجوة" : "Generational gap score"}</p>
                  <div className="mx-auto mt-6 grid aspect-square w-52 place-items-center rounded-full bg-[conic-gradient(#F0997B_0_68%,rgba(255,255,255,0.1)_68%_100%)] p-4">
                    <div className="grid h-full w-full place-items-center rounded-full bg-surface">
                      <span className="text-5xl font-extrabold">{result.gapScore}</span>
                    </div>
                  </div>
                  <Badge className="mt-5" variant="indigo">{locale === "ar" ? "مخاطر متوسطة" : "Medium risk"}</Badge>
                </Card>
                <Card>
                  <h2 className="text-xl font-extrabold">{locale === "ar" ? "تفكيك التواصل" : "Communication breakdown"}</h2>
                  <div className="mt-5 space-y-4">
                    {Object.entries(result.breakdown).map(([key, value]) => (
                      <div key={key}>
                        <div className="mb-2 flex items-center justify-between text-sm font-bold">
                          <span>{key}</span>
                          <span>{value}%</span>
                        </div>
                        <div className="h-3 rounded-full bg-white/10">
                          <div className="h-3 rounded-full bg-gradient-to-r from-primary-from to-teal-to" style={{ width: `${value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
              <Card>
                <h2 className="text-xl font-extrabold">{locale === "ar" ? "نصيحة المستشار" : "AI counselor advice"}</h2>
                <p className="mt-3 leading-8 text-text-secondary">{result.advice}</p>
              </Card>
              <div className="grid gap-4 md:grid-cols-3">
                {result.actions.map((action, index) => (
                  <Card key={action}>
                    <Badge variant={index === 0 ? "teal" : index === 1 ? "indigo" : "coral"}>{index + 1}</Badge>
                    <p className="mt-4 leading-7 text-text-secondary">{action}</p>
                  </Card>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </div>
      <Chatbot />
    </main>
  );
}
