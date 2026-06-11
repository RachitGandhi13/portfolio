const items = [
  "MERN Stack",
  "Next.js",
  "TypeScript",
  "WebRTC",
  "Solidity",
  "React.js",
  "Node.js",
  "MongoDB",
  "Socket.io",
  "PostgreSQL",
  "Express.js",
  "TailwindCSS",
];

const DOT = "✦";

interface MarqueeProps {
  bg?: string;
  text?: string;
  reversed?: boolean;
}

export default function Marquee({
  bg = "bg-[#E8300A]",
  text = "text-cream",
  reversed = false,
}: MarqueeProps) {
  const doubled = [...items, ...items];
  const animClass = reversed ? "animate-marquee-rev" : "animate-marquee";

  return (
    <div className={`overflow-hidden ${bg} py-3 shrink-0`}>
      <div className={`flex ${animClass} w-max`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`flex items-center gap-5 px-5 ${text} font-mono text-xs font-bold uppercase tracking-[0.18em] whitespace-nowrap`}
          >
            {item}
            <span className="opacity-30 text-[9px]">{DOT}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
