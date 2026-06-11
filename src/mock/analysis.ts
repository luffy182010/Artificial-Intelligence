export type RiskLevel = "Low" | "Medium" | "High";

export type AnalysisResult = {
  id: string;
  conversationId: string;
  title: string;
  gapScore: number;
  risk: RiskLevel;
  breakdown: {
    clarity: number;
    empathy: number;
    pace: number;
    assumptions: number;
  };
  advice: string;
  actions: string[];
  notes: string;
};

export const analysisResults: AnalysisResult[] = [
  {
    id: "a-family-weekend",
    conversationId: "c-family-weekend",
    title: "خطة نهاية الأسبوع",
    gapScore: 68,
    risk: "Medium",
    breakdown: {
      clarity: 54,
      empathy: 72,
      pace: 61,
      assumptions: 48,
    },
    advice:
      "ابدؤوا بسؤال واحد بسيط: ما الشيء الذي يحتاجه كل شخص كي يشعر أن رأيه مسموع؟ الجملة الهادئة هنا أهم من الوصول لحل سريع.",
    actions: [
      "اكتبوا المسؤوليات بدل تبادلها شفهيا وقت التوتر.",
      "استخدموا سؤالا مفتوحا قبل الرد على الاعتراض.",
      "اتفقوا على وقت قصير للمراجعة بدل ترك النقاش مفتوحا.",
    ],
    notes: "الجلسة القادمة يمكن أن تركز على الفرق بين طلب الوضوح والشعور بالتحكم.",
  },
  {
    id: "a-work-launch",
    conversationId: "c-work-launch",
    title: "موعد إطلاق الميزة",
    gapScore: 38,
    risk: "Low",
    breakdown: {
      clarity: 78,
      empathy: 81,
      pace: 69,
      assumptions: 74,
    },
    advice:
      "النقاش صحي عموما. أفضل خطوة هي تحويل الحماس والحرص إلى قائمة قرارات قصيرة يعرفها الجميع قبل الاجتماع التالي.",
    actions: [
      "حددوا ما يجب إنجازه اليوم وما يمكن تأجيله.",
      "اجعلوا المخاطر مرئية بجانب كل قرار.",
      "أرسلوا ملخصا بثلاث نقاط بعد كل اجتماع.",
    ],
    notes: "الفريق يحتاج طقسا ثابتا لتثبيت القرارات، لا تدخلا علاجيا عميقا.",
  },
];
