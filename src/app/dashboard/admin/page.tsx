"use client";

import { Check, FileText, ShieldAlert, Users, X } from "lucide-react";
import { Chatbot } from "@/components/dashboard/Chatbot";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/lib/i18n";
import { approvedTherapists, pendingTherapistRequests } from "@/mock/therapists";
import { users } from "@/mock/user";

export default function AdminPage() {
  const { locale } = useLanguage();
  const normalUsers = users.filter((user) => user.role === "User");
  const adminTherapists = users.filter((user) => user.role === "Therapist");

  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <div className="mx-auto flex w-full max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <section className="min-w-0 flex-1 space-y-6">
          <div>
            <Badge variant="coral">{locale === "ar" ? "إدارة النظام" : "System admin"}</Badge>
            <h1 className="mt-3 text-3xl font-extrabold">{locale === "ar" ? "طلبات ومستخدمون وإحصاءات" : "Requests, users, and stats"}</h1>
            <p className="mt-2 text-text-secondary">
              {locale === "ar" ? "كل البيانات هنا تجريبية، بدون أي اتصال حقيقي." : "All data here is mock-only, with no real API calls."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              [Users, users.length, locale === "ar" ? "كل الحسابات" : "All accounts", "teal"],
              [ShieldAlert, pendingTherapistRequests.length, locale === "ar" ? "طلبات معلقة" : "Pending requests", "coral"],
              [FileText, approvedTherapists.length, locale === "ar" ? "معالجون معتمدون" : "Approved therapists", "indigo"],
              [Check, 2, locale === "ar" ? "جلسات محجوزة" : "Booked sessions", "teal"],
            ].map(([Icon, value, label, variant]) => {
              const TypedIcon = Icon as typeof Users;
              return (
                <Card key={String(label)}>
                  <TypedIcon className="text-teal-to" size={24} />
                  <p className="mt-5 text-3xl font-extrabold">{String(value)}</p>
                  <Badge className="mt-3" variant={variant as "teal" | "coral" | "indigo"}>{String(label)}</Badge>
                </Card>
              );
            })}
          </div>

          <Card>
            <h2 className="mb-5 text-xl font-extrabold">{locale === "ar" ? "طلبات المعالجين المعلقة" : "Pending therapist requests"}</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              {pendingTherapistRequests.map((request) => (
                <div key={request.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-extrabold">{request.name}</h3>
                      <p className="mt-1 text-sm text-text-secondary">{request.specialty} · {request.email}</p>
                    </div>
                    <Badge variant="coral">{request.status}</Badge>
                  </div>
                  <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-background/40 p-3 text-sm text-text-secondary">
                    <FileText size={18} />
                    {request.certificate}
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <Button variant="teal" icon={<Check size={18} />}>{locale === "ar" ? "موافقة" : "Approve"}</Button>
                    <Button variant="danger" icon={<X size={18} />}>{locale === "ar" ? "رفض" : "Reject"}</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-5 lg:grid-cols-2">
            <Card>
              <h2 className="mb-5 text-xl font-extrabold">{locale === "ar" ? "كل المستخدمين" : "All users"}</h2>
              <div className="space-y-3">
                {normalUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <div>
                      <h3 className="font-extrabold">{user.name}</h3>
                      <p className="text-sm text-text-secondary">{user.email}</p>
                    </div>
                    <Badge variant="ghost">{user.generation}</Badge>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <h2 className="mb-5 text-xl font-extrabold">{locale === "ar" ? "كل المعالجين" : "All therapists"}</h2>
              <div className="space-y-3">
                {[...adminTherapists, ...approvedTherapists.map((therapist) => ({ id: therapist.id, name: therapist.name, email: therapist.email, generation: "Millennial" }))].map((therapist) => (
                  <div key={therapist.id} className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <div>
                      <h3 className="font-extrabold">{therapist.name}</h3>
                      <p className="text-sm text-text-secondary">{therapist.email}</p>
                    </div>
                    <Badge variant="teal">approved</Badge>
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
