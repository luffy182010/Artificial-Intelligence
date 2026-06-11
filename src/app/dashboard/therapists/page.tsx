"use client";

import { CalendarDays, CheckCircle2, CreditCard, Star, Wallet } from "lucide-react";
import { useState } from "react";
import { Chatbot } from "@/components/dashboard/Chatbot";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/lib/i18n";
import { approvedTherapists, type TherapistProfile } from "@/mock/therapists";

type BookingStep = "browse" | "schedule" | "payment" | "confirm";
type PaymentMethod = "Credit card" | "Vodafone Cash" | "PayPal";

const dates = ["2026-06-13", "2026-06-14", "2026-06-16", "2026-06-18", "2026-06-20"];
const times = ["16:00", "18:00", "20:30"];
const paymentMethods: PaymentMethod[] = ["Credit card", "Vodafone Cash", "PayPal"];

export default function TherapistsPage() {
  const { locale } = useLanguage();
  const [step, setStep] = useState<BookingStep>("browse");
  const [therapist, setTherapist] = useState<TherapistProfile>(approvedTherapists[0]);
  const [date, setDate] = useState(dates[0]);
  const [time, setTime] = useState(times[0]);
  const [method, setMethod] = useState<PaymentMethod>("Credit card");

  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      <div className="mx-auto flex w-full max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <section className="min-w-0 flex-1 space-y-6">
          <div>
            <Badge variant="teal">{locale === "ar" ? "حجز معالج" : "Therapist booking"}</Badge>
            <h1 className="mt-3 text-3xl font-extrabold">{locale === "ar" ? "اختر جلسة مناسبة" : "Choose a session that fits"}</h1>
            <p className="mt-2 text-text-secondary">
              {locale === "ar" ? "تصفح المعالجين المعتمدين ثم اختر الموعد والدفع التجريبي." : "Browse approved therapists, then choose a slot and mock payment method."}
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-4">
            {[
              ["browse", locale === "ar" ? "المعالج" : "Therapist"],
              ["schedule", locale === "ar" ? "الموعد" : "Schedule"],
              ["payment", locale === "ar" ? "الدفع" : "Payment"],
              ["confirm", locale === "ar" ? "التأكيد" : "Confirm"],
            ].map(([value, label]) => (
              <div key={value} className={`rounded-lg border p-3 text-center text-sm font-bold ${step === value ? "border-teal-to bg-teal-from/15 text-text-primary" : "border-white/10 bg-white/[0.03] text-text-secondary"}`}>
                {label}
              </div>
            ))}
          </div>

          {step === "browse" ? (
            <div className="grid gap-4 lg:grid-cols-3">
              {approvedTherapists.map((item) => (
                <Card key={item.id}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-xl font-extrabold">{item.name}</h2>
                      <p className="mt-1 text-sm text-text-secondary">{item.specialty}</p>
                    </div>
                    <Badge variant="teal">approved</Badge>
                  </div>
                  <p className="mt-4 min-h-16 leading-7 text-text-secondary">{item.bio}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Badge variant="ghost"><Star size={14} /> {item.rating}</Badge>
                    <Badge variant="indigo">{item.price} EGP</Badge>
                    {item.languages.map((language) => <Badge key={language} variant="ghost">{language}</Badge>)}
                  </div>
                  <Button
                    className="mt-5 w-full"
                    onClick={() => {
                      setTherapist(item);
                      setStep("schedule");
                    }}
                  >
                    {locale === "ar" ? "حجز موعد" : "Book appointment"}
                  </Button>
                </Card>
              ))}
            </div>
          ) : null}

          {step === "schedule" ? (
            <Card>
              <div className="mb-5 flex items-center gap-3">
                <CalendarDays className="text-teal-to" size={24} />
                <h2 className="text-xl font-extrabold">{locale === "ar" ? `موعد مع ${therapist.name}` : `Session with ${therapist.name}`}</h2>
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                <div>
                  <p className="mb-3 text-sm font-bold text-text-secondary">{locale === "ar" ? "اختر التاريخ" : "Choose date"}</p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {dates.map((item) => (
                      <button key={item} type="button" onClick={() => setDate(item)} className={`min-h-14 rounded-lg border px-3 font-bold ${date === item ? "border-teal-to bg-teal-from/15" : "border-white/10 bg-white/[0.03]"}`}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-sm font-bold text-text-secondary">{locale === "ar" ? "اختر الوقت" : "Choose time"}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {times.map((item) => (
                      <button key={item} type="button" onClick={() => setTime(item)} className={`min-h-14 rounded-lg border px-3 font-bold ${time === item ? "border-primary-to bg-primary-from/15" : "border-white/10 bg-white/[0.03]"}`}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <Button className="mt-6 w-full" onClick={() => setStep("payment")}>{locale === "ar" ? "متابعة للدفع" : "Continue to payment"}</Button>
            </Card>
          ) : null}

          {step === "payment" ? (
            <Card>
              <h2 className="text-xl font-extrabold">{locale === "ar" ? "طريقة الدفع" : "Payment method"}</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {paymentMethods.map((item) => (
                  <button key={item} type="button" onClick={() => setMethod(item)} className={`min-h-28 rounded-lg border p-4 text-start transition ${method === item ? "border-teal-to bg-teal-from/15" : "border-white/10 bg-white/[0.03]"}`}>
                    {item === "Credit card" ? <CreditCard className="text-teal-to" size={24} /> : <Wallet className="text-teal-to" size={24} />}
                    <span className="mt-4 block font-extrabold">{item}</span>
                    <span className="mt-2 block text-sm text-text-secondary">{locale === "ar" ? "واجهة دفع تجريبية فقط" : "Mock payment screen only"}</span>
                  </button>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <p className="font-bold">{therapist.name}</p>
                <p className="mt-1 text-sm text-text-secondary">{date} · {time} · {therapist.price} EGP</p>
              </div>
              <Button className="mt-6 w-full" onClick={() => setStep("confirm")}>{locale === "ar" ? "تأكيد الحجز" : "Confirm booking"}</Button>
            </Card>
          ) : null}

          {step === "confirm" ? (
            <Card className="text-center">
              <CheckCircle2 className="mx-auto text-teal-to" size={52} />
              <h2 className="mt-4 text-2xl font-extrabold">{locale === "ar" ? "تم تأكيد الحجز" : "Booking confirmed"}</h2>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-text-secondary">
                {locale === "ar"
                  ? `جلسة مع ${therapist.name} يوم ${date} الساعة ${time}. طريقة الدفع: ${method}.`
                  : `Session with ${therapist.name} on ${date} at ${time}. Payment method: ${method}.`}
              </p>
              <Button className="mt-6" onClick={() => setStep("browse")}>{locale === "ar" ? "حجز آخر" : "Book another"}</Button>
            </Card>
          ) : null}
        </section>
      </div>
      <Chatbot />
    </main>
  );
}
