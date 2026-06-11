"use client";

import { CalendarPlus, MessageCircle, Phone, Video } from "lucide-react";
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
import { approvedTherapists } from "@/mock/therapists";

const patients = [
  { name: "زينة سامي", generation: "Gen Z", group: "بيت آل سامي", status: "Needs care" },
  { name: "يوسف نادر", generation: "Gen Z", group: "فريق المنتج", status: "Calm" },
  { name: "مها عادل", generation: "Millennial", group: "مجلس الصف", status: "Calm" },
];

export default function TherapistPage() {
  const { locale } = useLanguage();
  const approved = approvedTherapists[0].status === "approved";

  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <div className="mx-auto flex w-full max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <section className="min-w-0 flex-1 space-y-6">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <Badge variant={approved ? "teal" : "coral"}>{approved ? "approved" : "pending"}</Badge>
            <h1 className="mt-3 text-3xl font-extrabold">{locale === "ar" ? "لوحة المعالج" : "Therapist dashboard"}</h1>
            <p className="mt-2 max-w-2xl text-text-secondary">
              {locale === "ar"
                ? "هذه اللوحة تظهر بعد موافقة الإدارة، وفيها المرضى والتقارير والمواعيد."
                : "This dashboard opens after admin approval, with patients, reports, and sessions."}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <Card>
              <h2 className="text-xl font-extrabold">{locale === "ar" ? "مرضاي" : "My patients"}</h2>
              <div className="mt-5 space-y-3">
                {patients.map((patient) => (
                  <div key={patient.name} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="font-extrabold">{patient.name}</h3>
                        <p className="mt-1 text-sm text-text-secondary">{patient.group} · {patient.generation}</p>
                      </div>
                      <Badge variant={patient.status === "Calm" ? "teal" : "indigo"}>{patient.status}</Badge>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <Button variant="ghost" icon={<MessageCircle size={16} />}>{locale === "ar" ? "محادثة" : "Chat"}</Button>
                      <Button variant="teal" icon={<Phone size={16} />}>{locale === "ar" ? "صوت" : "Voice"}</Button>
                      <Button variant="primary" icon={<Video size={16} />}>{locale === "ar" ? "فيديو" : "Video"}</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-extrabold">{locale === "ar" ? "تقارير وتحليلات" : "Reports and summaries"}</h2>
              <div className="mt-5 space-y-4">
                {analysisResults.map((item) => (
                  <div key={item.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-extrabold">{item.title}</h3>
                      <Badge variant={item.risk === "Low" ? "teal" : "indigo"}>{item.risk}</Badge>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{item.notes}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
            <Card>
              <h2 className="text-xl font-extrabold">{locale === "ar" ? "محادثة نصية مع المرضى" : "Text chat with patients"}</h2>
              <div className="mt-5 space-y-3">
                <div className="me-auto max-w-[80%] rounded-lg border border-white/10 bg-white/[0.04] p-3 text-sm leading-6">
                  {locale === "ar" ? "أشعر أن والدي يفسر اختصاري كعدم احترام." : "I feel my father reads my short replies as disrespect."}
                </div>
                <div className="ms-auto max-w-[80%] rounded-lg bg-primary-from/25 p-3 text-sm leading-6">
                  {locale === "ar" ? "لنبدأ بصياغة توضح النية قبل التفاصيل." : "Let's start with wording that explains intent before details."}
                </div>
                <input className="min-h-11 w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 outline-none placeholder:text-text-secondary" placeholder={locale === "ar" ? "اكتب ردك..." : "Write a reply..."} />
              </div>
            </Card>
            <Card>
              <h2 className="text-xl font-extrabold">{locale === "ar" ? "المواعيد القادمة" : "Upcoming appointments"}</h2>
              <div className="mt-5 space-y-3">
                {bookedSessions.map((session) => (
                  <div key={session.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <h3 className="font-extrabold">{session.userName}</h3>
                    <p className="mt-1 text-sm text-text-secondary">{session.date} · {session.time} · {session.groupName}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-5 w-full" icon={<CalendarPlus size={18} />}>{locale === "ar" ? "إضافة موعد" : "Add slot"}</Button>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {groups.map((group) => (
              <Card key={group.id}>
                <h3 className="font-extrabold">{group.name}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{group.lastInsight}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Chatbot />
    </main>
  );
}
