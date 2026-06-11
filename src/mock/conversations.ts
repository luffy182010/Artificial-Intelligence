import type { Generation } from "@/mock/user";

export type Participant = {
  name: string;
  generation: Generation;
};

export type Conversation = {
  id: string;
  title: string;
  groupId: string;
  participants: Participant[];
  excerpt: string;
  conflictLevel: "Low" | "Medium" | "High";
  createdAt: string;
};

export const conversations: Conversation[] = [
  {
    id: "c-family-weekend",
    title: "خطة نهاية الأسبوع",
    groupId: "g-family",
    participants: [
      { name: "زينة", generation: "Gen Z" },
      { name: "كريم", generation: "Gen X" },
      { name: "مها", generation: "Millennial" },
    ],
    excerpt: "كريم طلب وضوحا أكبر، وزينة شعرت أن الطلب يبدو كأنه نقد لشخصها.",
    conflictLevel: "Medium",
    createdAt: "2026-06-09",
  },
  {
    id: "c-work-launch",
    title: "موعد إطلاق الميزة",
    groupId: "g-work",
    participants: [
      { name: "نادين", generation: "Millennial" },
      { name: "يوسف", generation: "Gen Z" },
      { name: "كريم", generation: "Gen X" },
    ],
    excerpt: "الاختلاف كان حول سرعة التنفيذ مقابل الاطمئنان على التفاصيل.",
    conflictLevel: "Low",
    createdAt: "2026-06-10",
  },
];
