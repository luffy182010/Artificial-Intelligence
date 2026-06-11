import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "indigo" | "teal" | "coral" | "ghost";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  indigo: "border-primary-to/40 bg-primary-from/15 text-[#D9D5FF]",
  teal: "border-teal-to/40 bg-teal-from/15 text-[#BDFBE3]",
  coral: "border-coral-to/40 bg-coral-from/15 text-[#FFD5C8]",
  ghost: "border-white/10 bg-white/[0.04] text-text-secondary",
};

export function Badge({ className, variant = "ghost", ...props }: BadgeProps) {
  return (
    <span
      className={cn("inline-flex min-h-8 items-center rounded-full border px-3 py-1 text-xs font-bold", variants[variant], className)}
      {...props}
    />
  );
}
