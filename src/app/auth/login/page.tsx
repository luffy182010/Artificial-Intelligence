"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Mail } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { useLanguage } from "@/lib/i18n";

 export default function LoginPage() {
  const { locale } = useLanguage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="aurora" />
      <Navbar />
      <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-lg place-items-center px-4 py-10">
        <Card className="w-full animate-fade-up p-6 sm:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-extrabold">{locale === "ar" ? "مرحبا بعودتك" : "Welcome back"}</h1>
            <p className="mt-3 leading-7 text-text-secondary">
              {locale === "ar" ? "ادخل إلى مساحة الحديث التي بدأت تهدأ." : "Step back into the conversations you are helping calm."}
            </p>
          </div>
          <form className="space-y-5">
            <Input label={locale === "ar" ? "البريد الإلكتروني" : "Email"} type="email" placeholder="name@email.com" icon={<Mail size={18} />} />
            <Input label={locale === "ar" ? "كلمة المرور" : "Password"} type="password" placeholder="••••••••" icon={<Lock size={18} />} />
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <label className="flex min-h-11 items-center gap-2 text-text-secondary">
                <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/10 accent-[#7F77DD]" />
                {locale === "ar" ? "تذكرني" : "Remember me"}
              </label>
              <Link href="#" className="font-bold text-teal-to hover:text-text-primary">
                {locale === "ar" ? "نسيت كلمة المرور؟" : "Forgot password?"}
              </Link>
            </div>
            <Link href="/dashboard" className="block">
              <Button className="w-full">{locale === "ar" ? "دخول" : "Login"}</Button>
            </Link>
          </form>
          <p className="mt-6 text-center text-sm text-text-secondary">
            {locale === "ar" ? "ليس لديك حساب؟ " : "No account yet? "}
            <Link href="/auth/register" className="font-bold text-text-primary">
              {locale === "ar" ? "أنشئ حسابا" : "Create one"}
            </Link>
          </p>
        </Card>
      </section>
    </main>
  );
}
