import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize    = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const base =
  "inline-flex items-center justify-center font-semibold tracking-wide rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-brand text-white shadow-md hover:shadow-lg hover:brightness-110 active:scale-[.98]",
  secondary:
    "bg-navy text-white hover:bg-navy/90 active:scale-[.98]",
  outline:
    "border-2 border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white active:scale-[.98]",
  ghost:
    "text-brand-blue hover:bg-brand-blue/10 active:scale-[.98]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-sm px-6 py-3 gap-2",
  lg: "text-base px-8 py-4 gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
