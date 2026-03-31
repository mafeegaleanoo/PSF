import { cn } from "@/lib/utils/cn";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean; // for dark backgrounds
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  center = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      {label && (
        <p
          className={cn(
            "font-bold text-[0.68rem] tracking-[0.18em] uppercase mb-3",
            light ? "text-brand-cyan" : "text-brand-blue"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "font-black text-[clamp(1.8rem,4vw,2.6rem)] tracking-tight leading-tight mb-3",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {/* Gradient divider bar */}
      <div
        className={cn(
          "h-[3px] w-12 rounded-full bg-gradient-brand",
          center ? "mx-auto mb-6" : "mb-6"
        )}
      />
      {description && (
        <p
          className={cn(
            "text-base leading-[1.75] max-w-[600px]",
            light ? "text-muted" : "text-slate",
            center && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
