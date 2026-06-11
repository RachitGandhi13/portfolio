interface SectionHeaderProps {
  number: string;
  title: string;
  onDark?: boolean;
  onRed?: boolean;
}

export default function SectionHeader({
  number,
  title,
  onDark = false,
  onRed = false,
}: SectionHeaderProps) {
  const watermarkColor = onRed
    ? "text-white/8"
    : onDark
    ? "text-white/5"
    : "text-ink/5 dark:text-cream/5";

  const titleColor = onRed
    ? "text-cream"
    : onDark
    ? "text-cream"
    : "text-ink dark:text-cream";

  return (
    <div className="relative mb-16 select-none">
      {/* Giant watermark number */}
      <div
        className={`font-display leading-none uppercase pointer-events-none ${watermarkColor}`}
        style={{ fontSize: "clamp(100px, 20vw, 260px)" }}
      >
        {number}
      </div>

      {/* Section title */}
      <div className="-mt-[0.15em] pl-1">
        <h2
          className={`font-display uppercase ${titleColor}`}
          style={{ fontSize: "clamp(40px, 6vw, 76px)" }}
        >
          {title}
        </h2>
        <div
          className={`h-[3px] w-14 mt-3 ${
            onRed ? "bg-[#C5FF00]" : "bg-[#E8300A]"
          }`}
        />
      </div>
    </div>
  );
}
