import type { Generation } from "@/mock/user";

export type GroupType = "Family" | "Work" | "School";

export type Group = {
  id: string;
  name: string;
  type: GroupType;
  members: number;
  generations: Generation[];
  lastInsight: string;
  health: "Calm" | "Needs care" | "Tense";
};

export const groups: Group[] = [
  {
    id: "g-family",
    name: "بيت آل سامي",
    type: "Family",
    members: 5,
    generations: ["Gen Z", "Millennial", "Gen X"],
    lastInsight: "الاختلاف الأكبر يظهر عند الحديث عن المسؤوليات اليومية.",
    health: "Needs care",
  },
  {
    id: "g-work",
    name: "فريق المنتج",
    type: "Work",
    members: 8,
    generations: ["Gen Z", "Millennial", "Gen X"],
    lastInsight: "الفريق يستجيب أفضل عندما تكون التوقعات مكتوبة ومختصرة.",
    health: "Calm",
  },
  {
    id: "g-school",
    name: "مجلس الصف",
    type: "School",
    members: 12,
    generations: ["Gen Z", "Millennial", "Gen X"],
    lastInsight: "الأهل والطلاب يحتاجون لغة مشتركة حول المواعيد والضغط الدراسي.",
    health: "Calm",
  },
];
