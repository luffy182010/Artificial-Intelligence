import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Locale = "ar" | "en";

export const localeMeta = {
  ar: { label: "العربية", dir: "rtl" },
  en: { label: "English", dir: "ltr" },
} as const;

export const copy = {
  ar: {
    nav: {
      home: "الرئيسية",
      login: "الدخول",
      register: "ابدأ الآن",
      dashboard: "لوحة العمل",
    },
    common: {
      product: "CrossTalk",
      tagline: "نفهم ما بين السطور بين الأجيال",
      loading: "نرتب المساحة لك...",
      empty: "لا توجد عناصر بعد",
      save: "حفظ",
      share: "مشاركة",
      submit: "إرسال للتحليل",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      name: "الاسم",
    },
    generations: {
      genz: "Gen Z",
      millennial: "Millennial",
      genx: "Gen X",
    },
  },
  en: {
    nav: {
      home: "Home",
      login: "Login",
      register: "Start",
      dashboard: "Dashboard",
    },
    common: {
      product: "CrossTalk",
      tagline: "Reading the room between generations",
      loading: "Getting your workspace ready...",
      empty: "Nothing here yet",
      save: "Save",
      share: "Share",
      submit: "Send for analysis",
      email: "Email",
      password: "Password",
      name: "Name",
    },
    generations: {
      genz: "Gen Z",
      millennial: "Millennial",
      genx: "Gen X",
    },
  },
} as const;
