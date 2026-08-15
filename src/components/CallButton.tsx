import { Phone } from "lucide-react";
import { business } from "@/lib/business";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "accent" | "primary" | "outline";
  showNumber?: boolean;
};

export function CallButton({
  className,
  label = "Call for a Free Estimate",
  size = "md",
  variant = "accent",
  showNumber = true,
}: Props) {
  return (
    <a
      href={business.phoneHref}
      aria-label={`Call ${business.name} at ${business.phone} for a free estimate`}
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        variant === "accent" && "bg-accent text-accent-foreground shadow-soft hover:shadow-lift",
        variant === "primary" && "bg-primary text-primary-foreground shadow-soft hover:shadow-lift",
        variant === "outline" && "border-2 border-primary text-primary hover:bg-secondary",
        className,
      )}
    >
      <Phone className="size-5 shrink-0" aria-hidden="true" />
      <span>
        {label}
        {showNumber && <span className="hidden sm:inline"> · {business.phone}</span>}
      </span>
    </a>
  );
}
