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
  const doubled = [...items, ...items, ...items];
  const animClass = reversed ? "animate-marquee-rev" : "animate-marquee";

  return (
    <div className={`overflow-hidden ${bg} py-4 shrink-0`}>
      <div className={`flex ${animClass} w-max`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`flex items-center gap-6 px-6 ${text} font-mono text-xs font-bold uppercase tracking-[0.22em] whitespace-nowrap`}
          >
            {item}
            <span className="opacity-25 text-[8px]">{DOT}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
