import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "teal" | "danger";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-gradient-to-r from-primary-from to-primary-to text-white shadow-glow hover:brightness-110",
  ghost: "border border-white/10 bg-white/[0.04] text-text-primary hover:bg-white/[0.08]",
  teal: "bg-gradient-to-r from-teal-from to-teal-to text-[#061510] shadow-teal hover:brightness-110",
  danger: "bg-gradient-to-r from-coral-from to-coral-to text-white hover:brightness-110",
};

export function Button({ className, variant = "primary", icon, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
