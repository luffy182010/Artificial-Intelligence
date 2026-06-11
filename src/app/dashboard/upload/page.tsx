"use client";

import { FileUp, Send } from "lucide-react";
import { Chatbot } from "@/components/dashboard/Chatbot";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { useLanguage } from "@/lib/i18n";

export default function UploadPage() {
  const { locale } = useLanguage();

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      <div className="mx-auto flex w-full max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <section className="min-w-0 flex-1 space-y-6">
          <div>
            <Badge variant="teal">{locale === "ar" ? "محادثة جديدة" : "New conversation"}</Badge>
            <h1 className="mt-3 text-3xl font-extrabold">{locale === "ar" ? "ارفع حوارا للتحليل" : "Upload a conversation"}</h1>
            <p className="mt-2 text-text-secondary">
              {locale === "ar" ? "الصق النص كما هو أو ارفع ملفا، ثم عرّف المشاركين." : "Paste the text as-is or upload a file, then tag the participants."}
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Card>
              <label className="block space-y-2">
                <span className="text-sm font-bold">{locale === "ar" ? "نص المحادثة" : "Conversation text"}</span>
                <textarea
                  className="min-h-72 w-full resize-y rounded-lg border border-white/10 bg-white/[0.04] p-4 leading-7 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-primary-to"
                  placeholder={locale === "ar" ? "الصق الحوار هنا..." : "Paste the conversation here..."}
                />
              </label>
              <div className="mt-4 rounded-lg border border-dashed border-white/15 bg-white/[0.03] p-5 text-center">
                <FileUp className="mx-auto text-teal-to" size={28} />
                <p className="mt-3 font-bold">{locale === "ar" ? "أو ارفع ملف TXT / PDF" : "Or upload a TXT / PDF file"}</p>
                <p className="mt-1 text-sm text-text-secondary">{locale === "ar" ? "واجهة تجريبية بدون رفع فعلي." : "Mock interface, no real upload."}</p>
              </div>
            </Card>
            <Card className="space-y-4">
              <h2 className="text-xl font-extrabold">{locale === "ar" ? "المشاركون" : "Participants"}</h2>
              {["الأول", "الثاني", "الثالث"].map((label, index) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <Input label={locale === "ar" ? `المشارك ${label}` : `Participant ${index + 1}`} placeholder={locale === "ar" ? "الاسم" : "Name"} />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {["Gen Z", "Millennial", "Gen X"].map((generation) => (
                      <button key={generation} type="button" className="min-h-11 rounded-lg border border-white/10 bg-white/[0.04] px-2 text-xs font-bold transition hover:bg-white/[0.08]">
                        {generation}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <Button className="w-full" icon={<Send size={18} />}>{locale === "ar" ? "إرسال للتحليل" : "Send for analysis"}</Button>
            </Card>
          </div>
        </section>
      </div>
      <Chatbot />
    </main>
  );
}
