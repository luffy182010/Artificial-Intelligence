"use client";

import { InputHTMLAttributes, ReactNode, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  icon?: ReactNode;
};

export function Input({ className, label, error, icon, type, ...props }: InputProps) {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <label className="block space-y-2">
      <span className="text-sm font-bold text-text-primary">{label}</span>
      <span
        className={cn(
          "flex min-h-11 items-center gap-2 rounded-lg border bg-white/[0.04] px-3 transition focus-within:border-primary-to",
          error ? "border-coral-from" : "border-white/10",
        )}
      >
        {icon ? <span className="text-text-secondary">{icon}</span> : null}
        <input
          className={cn("w-full bg-transparent py-2 text-text-primary outline-none placeholder:text-text-secondary", className)}
          type={isPassword && visible ? "text" : type}
          {...props}
        />
        {isPassword ? (
          <button
            type="button"
            aria-label={visible ? "Hide password" : "Show password"}
            className="grid min-h-10 min-w-10 place-items-center rounded-md text-text-secondary hover:text-text-primary"
            onClick={() => setVisible((current) => !current)}
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        ) : null}
      </span>
      {error ? <span className="text-xs font-bold text-coral-to">{error}</span> : null}
    </label>
  );
}
