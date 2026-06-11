import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  glass?: boolean;
};

export function Card({ className, glass = true, ...props }: CardProps) {
  return <div className={cn("rounded-lg p-5", glass ? "glass" : "bg-surface", className)} {...props} />;
}
