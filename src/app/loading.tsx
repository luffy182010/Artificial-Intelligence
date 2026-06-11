import { MessageCircle } from "lucide-react";

export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-4">
      <div className="text-center">
        <span className="mx-auto grid h-14 w-14 animate-soft-pulse place-items-center rounded-lg bg-gradient-to-br from-primary-from to-teal-to">
          <MessageCircle size={26} />
        </span>
        <p className="mt-4 font-bold text-text-secondary">CrossTalk</p>
      </div>
    </main>
  );
}
