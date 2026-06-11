export type TherapistStatus = "approved" | "pending" | "rejected";

export type TherapistProfile = {
  id: string;
  name: string;
  email: string;
  specialty: string;
  rating: number;
  price: number;
  status: TherapistStatus;
  certificate: string;
  bio: string;
  languages: string[];
};

export const approvedTherapists: TherapistProfile[] = [
  {
    id: "t-lina",
    name: "لينا عادل",
    email: "lina@crosstalk.local",
    specialty: "Family communication",
    rating: 4.9,
    price: 650,
    status: "approved",
    certificate: "lina-family-communication.pdf",
    bio: "Helps families turn tense everyday talks into clearer agreements.",
    languages: ["Arabic", "English"],
  },
  {
    id: "t-mariam",
    name: "مريم ناصر",
    email: "mariam@crosstalk.local",
    specialty: "Workplace mediation",
    rating: 4.8,
    price: 720,
    status: "approved",
    certificate: "mariam-workplace-mediation.pdf",
    bio: "Works with mixed-generation teams on feedback, pace, and decision clarity.",
    languages: ["Arabic", "English"],
  },
  {
    id: "t-omar",
    name: "عمر فؤاد",
    email: "omar@crosstalk.local",
    specialty: "School counseling",
    rating: 4.7,
    price: 580,
    status: "approved",
    certificate: "omar-school-counseling.png",
    bio: "Supports students, parents, and teachers during difficult conversations.",
    languages: ["Arabic"],
  },
];

export const pendingTherapistRequests: TherapistProfile[] = [
  {
    id: "t-salma",
    name: "سلمى حاتم",
    email: "salma@crosstalk.local",
    specialty: "Teen counseling",
    rating: 0,
    price: 540,
    status: "pending",
    certificate: "salma-teen-counseling.pdf",
    bio: "Applying to support Gen Z family conversations.",
    languages: ["Arabic", "English"],
  },
  {
    id: "t-hassan",
    name: "حسن نبيل",
    email: "hassan@crosstalk.local",
    specialty: "Organizational psychology",
    rating: 0,
    price: 800,
    status: "pending",
    certificate: "hassan-org-psychology.jpg",
    bio: "Applying to work with leadership and team conflict cases.",
    languages: ["Arabic"],
  },
];
