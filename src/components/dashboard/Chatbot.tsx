"use client";

import { FormEvent, useState } from "react";
import { Bot, Send, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n";

type Message = {
  from: "bot" | "user";
  text: string;
};

export function Chatbot() {
  const { locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text:
        locale === "ar"
          ? "أهلا، أستطيع اقتراح صياغة أهدأ أو خطوة صغيرة قبل الحديث القادم."
          : "Hi, I can suggest calmer wording or a small next step before your next conversation.",
    },
  ]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem("message") as HTMLInputElement;
    const value = input.value.trim();
    if (!value) return;
    input.value = "";
    setMessages((current) => [
      ...current,
      { from: "user", text: value },
      {
        from: "bot",
        text:
          locale === "ar"
            ? "جرّب أن تبدأ بجملة: أريد أفهم قصدك قبل أن أرد. هذا يخفف الدفاعية بسرعة."
            : "Try starting with: I want to understand what you mean before I answer. It lowers defensiveness quickly.",
      },
    ]);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-20 end-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary-from to-teal-to text-white shadow-glow transition hover:scale-105 md:bottom-6"
        aria-label="Open chatbot"
      >
        <Bot size={24} />
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm sm:bg-transparent">
          <aside className="ms-auto flex h-full w-full max-w-md flex-col border-white/10 bg-surface p-4 shadow-glow sm:m-4 sm:h-[calc(100%-2rem)] sm:rounded-lg sm:border">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary-from to-teal-to">
                  <Bot size={20} />
                </span>
                <div>
                  <h2 className="font-extrabold">{locale === "ar" ? "مساعد CrossTalk" : "CrossTalk assistant"}</h2>
                  <p className="text-xs text-text-secondary">{locale === "ar" ? "نصائح تواصل سريعة" : "Quick communication tips"}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid min-h-11 min-w-11 place-items-center rounded-lg bg-white/[0.04] text-text-secondary hover:text-text-primary"
                aria-label="Close chatbot"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto py-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.from}-${index}`}
                  className={`max-w-[82%] rounded-lg border border-white/10 p-3 text-sm leading-6 ${
                    message.from === "bot" ? "me-auto bg-white/[0.05] text-text-primary" : "ms-auto bg-primary-from/30 text-white"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <form onSubmit={submit} className="flex gap-2 border-t border-white/10 pt-4">
              <input
                name="message"
                className="min-h-11 min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-text-primary outline-none placeholder:text-text-secondary focus:border-primary-to"
                placeholder={locale === "ar" ? "اكتب سؤالك..." : "Ask for a tip..."}
              />
              <Button type="submit" icon={<Send size={18} />}>
                {locale === "ar" ? "إرسال" : "Send"}
              </Button>
            </form>
          </aside>
        </div>
      ) : null}
    </>
  );
}
