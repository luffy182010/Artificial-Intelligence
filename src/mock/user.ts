export type Generation = "Gen Z" | "Millennial" | "Gen X";
export type UserRole = "User" | "Therapist" | "Admin";

export type PersonalityScores = {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
};

export type MockUser = {
  id: string;
  name: string;
  email: string;
  generation: Generation;
  role: UserRole;
  avatar: string;
  personality?: PersonalityScores;
  personalityBadge?: string;
};

export const users: MockUser[] = [
  {
    id: "u-zaina",
    name: "زينة سامي",
    email: "zaina@crosstalk.local",
    generation: "Gen Z",
    role: "User",
    avatar: "ز",
    personalityBadge: "Empathic Explorer",
    personality: {
      openness: 84,
      conscientiousness: 71,
      extraversion: 58,
      agreeableness: 79,
      neuroticism: 42,
    },
  },
  {
    id: "u-lina",
    name: "لينا عادل",
    email: "lina@crosstalk.local",
    generation: "Millennial",
    role: "Therapist",
    avatar: "ل",
  },
  {
    id: "u-karim",
    name: "كريم منصور",
    email: "karim@crosstalk.local",
    generation: "Gen X",
    role: "Admin",
    avatar: "ك",
  },
];

export const currentUser = users[0];
