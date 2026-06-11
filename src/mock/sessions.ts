export type BookedSession = {
  id: string;
  therapistId: string;
  therapistName: string;
  userName: string;
  groupName: string;
  date: string;
  time: string;
  method: "Credit card" | "Vodafone Cash" | "PayPal";
  status: "confirmed" | "upcoming";
};

export const bookedSessions: BookedSession[] = [
  {
    id: "s-001",
    therapistId: "t-lina",
    therapistName: "لينا عادل",
    userName: "زينة سامي",
    groupName: "بيت آل سامي",
    date: "2026-06-13",
    time: "18:00",
    method: "Credit card",
    status: "upcoming",
  },
  {
    id: "s-002",
    therapistId: "t-mariam",
    therapistName: "مريم ناصر",
    userName: "يوسف نادر",
    groupName: "فريق المنتج",
    date: "2026-06-16",
    time: "20:30",
    method: "Vodafone Cash",
    status: "confirmed",
  },
];
