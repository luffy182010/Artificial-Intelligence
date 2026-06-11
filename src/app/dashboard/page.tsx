"use client";

import Link from "next/link";
import { CalendarPlus, MessageSquarePlus, Sparkles } from "lucide-react";
import { Chatbot } from "@/components/dashboard/Chatbot";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/lib/i18n";
import { analysisResults } from "@/mock/analysis";
import { groups } from "@/mock/groups";
import { bookedSessions } from "@/mock/sessions";
import { currentUser } from "@/mock/user";

const traitNames = {
  openness: { ar: "الانفتاح", en: "Openness" },
  conscientiousness: { ar: "الانضباط", en: "Conscientiousness" },
  extraversion: { ar: "الاجتماعية", en: "Extraversion" },
  agreeableness: { ar: "التعاون", en: "Agreeableness" },
  neuroticism: { ar: "التوتر", en: "Neuroticism" },
} as const;

export default function DashboardPage() {
  const { locale } = useLanguage();
  const personality = currentUser.personality;

  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <div className="mx-auto flex w-full max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <section className="min-w-0 flex-1 space-y-6">
          <div className="flex flex-col gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="indigo">{currentUser.generation}</Badge>
                <Badge variant="teal">{currentUser.personalityBadge}</Badge>
              </div>
              <h1 className="mt-3 text-3xl font-extrabold">
                {locale === "ar" ? `أهلا ${currentUser.name}` : `Hello ${currentUser.name}`}
              </h1>
              <p className="mt-2 max-w-2xl text-text-secondary">
                {locale === "ar"
                  ? "لوحة المستخدم تجمع مجموعاتك، جلساتك، وتحليل المحادثات في مكان واحد."
                  : "Your user dashboard keeps groups, sessions, and conversation analysis in one place."}
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="/dashboard/analyzer">
                <Button icon={<MessageSquarePlus size={18} />}>{locale === "ar" ? "تحليل محادثة" : "Analyze chat"}</Button>
              </Link>
              <Link href="/dashboard/therapists">
                <Button variant="teal" icon={<CalendarPlus size={18} />}>{locale === "ar" ? "حجز جلسة" : "Book session"}</Button>
              </Link>
            </div>
          </div>

          {personality ? (
            <Card>
              <div className="mb-5 flex items-center gap-3">
                <Sparkles className="text-teal-to" size={24} />
                <h2 className="text-xl font-extrabold">{locale === "ar" ? "ملف الشخصية" : "Personality profile"}</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-5">
                {Object.entries(personality).map(([trait, value]) => (
                  <div key={trait} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-bold text-text-secondary">
                      {locale === "ar" ? traitNames[trait as keyof typeof traitNames].ar : traitNames[trait as keyof typeof traitNames].en}
                    </p>
                    <p className="mt-2 text-2xl font-extrabold">{value}%</p>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-gradient-to-r from-primary-from to-teal-to" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ) : null}

          <div className="grid gap-4 lg:grid-cols-3">
            {groups.map((group) => (
              <Card key={group.id}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-extrabold">{group.name}</h2>
                    <p className="mt-2 text-sm text-text-secondary">
                      {group.type} · {group.members} {locale === "ar" ? "أعضاء" : "members"}
                    </p>
                  </div>
                  <Badge variant={group.health === "Calm" ? "teal" : group.health === "Tense" ? "coral" : "indigo"}>{group.health}</Badge>
                </div>
                <p className="mt-5 leading-7 text-text-secondary">{group.lastInsight}</p>
              </Card>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Card>
              <h2 className="mb-5 text-xl font-extrabold">{locale === "ar" ? "آخر تحليلات الذكاء" : "Recent AI insights"}</h2>
              <div className="space-y-3">
                {analysisResults.map((item) => (
                  <div key={item.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-extrabold">{item.title}</h3>
                      <Badge variant={item.risk === "Low" ? "teal" : item.risk === "Medium" ? "indigo" : "coral"}>{item.risk}</Badge>
                    </div>
                    <p className="mt-2 leading-7 text-text-secondary">{item.advice}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <h2 className="mb-5 text-xl font-extrabold">{locale === "ar" ? "جلساتي" : "My sessions"}</h2>
              <div className="space-y-3">
                {bookedSessions.slice(0, 2).map((session) => (
                  <div key={session.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-extrabold">{session.therapistName}</h3>
                      <Badge variant="teal">{session.status}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-text-secondary">
                      {session.date} · {session.time} · {session.method}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </div>
      <Chatbot />
    </main>
  );
}
