import type { PersonalityScores } from "@/mock/user";

export type BigFiveQuestion = {
  id: string;
  trait: keyof PersonalityScores;
  ar: string;
  en: string;
};

export const bigFiveQuestions: BigFiveQuestion[] = [
  { id: "q1", trait: "openness", ar: "أحب تجربة طرق جديدة لحل الخلاف.", en: "I like trying new ways to resolve disagreement." },
  { id: "q2", trait: "conscientiousness", ar: "أفضّل أن تكون التوقعات مكتوبة وواضحة.", en: "I prefer expectations to be written and clear." },
  { id: "q3", trait: "extraversion", ar: "أفكر بصوت عال عندما يكون النقاش صعبا.", en: "I think out loud when a conversation gets difficult." },
  { id: "q4", trait: "agreeableness", ar: "أحاول فهم نية الشخص قبل الحكم على كلماته.", en: "I try to understand intent before judging words." },
  { id: "q5", trait: "neuroticism", ar: "التوتر في الرسائل يؤثر علي بسرعة.", en: "Tension in messages affects me quickly." },
  { id: "q6", trait: "openness", ar: "أستطيع تغيير رأيي عندما أسمع زاوية جديدة.", en: "I can change my mind when I hear a new angle." },
  { id: "q7", trait: "conscientiousness", ar: "أتابع ما اتفقنا عليه بعد انتهاء الحديث.", en: "I follow up on what we agreed after the talk." },
  { id: "q8", trait: "extraversion", ar: "أفضل النقاش المباشر على الصمت الطويل.", en: "I prefer direct discussion over long silence." },
  { id: "q9", trait: "agreeableness", ar: "أبحث عن صيغة تحفظ كرامة الجميع.", en: "I look for wording that protects everyone's dignity." },
  { id: "q10", trait: "neuroticism", ar: "أعيد قراءة الرسائل المتوترة أكثر من مرة.", en: "I reread tense messages more than once." },
];

export const completedPersonalityResult: PersonalityScores = {
  openness: 84,
  conscientiousness: 71,
  extraversion: 58,
  agreeableness: 79,
  neuroticism: 42,
};
