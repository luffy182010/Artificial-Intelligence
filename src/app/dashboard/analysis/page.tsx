"use client";

import { Download, Share2 } from "lucide-react";
import { Chatbot } from "@/components/dashboard/Chatbot";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/lib/i18n";
import { analysisResults } from "@/mock/analysis";

export default function AnalysisPage() {
  const { locale } = useLanguage();
  const result = analysisResults[0];

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      <div className="mx-auto flex w-full max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <section className="min-w-0 flex-1 space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge variant="indigo">{locale === "ar" ? "نتيجة التحليل" : "Analysis result"}</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">{result.title}</h1>
              <p className="mt-2 text-text-secondary">{locale === "ar" ? "قراءة عملية لنقاط التواصل التي تحتاج وضوحا." : "A practical reading of the communication points that need clarity."}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" icon={<Download size={18} />}>{locale === "ar" ? "حفظ" : "Save"}</Button>
              <Button variant="teal" icon={<Share2 size={18} />}>{locale === "ar" ? "مشاركة" : "Share"}</Button>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <Card className="text-center">
              <p className="text-sm font-bold text-text-secondary">{locale === "ar" ? "مؤشر الفجوة" : "Gap score"}</p>
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
            <h2 className="text-xl font-extrabold">{locale === "ar" ? "نصيحة المستشار" : "Counselor advice"}</h2>
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
        </section>
      </div>
      <Chatbot />
    </main>
  );
}
