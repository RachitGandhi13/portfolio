interface BarcodeProps {
  className?: string;
}

export default function Barcode({ className = "" }: BarcodeProps) {
  const bars = [
    2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1,
    1, 2, 1, 2, 3, 1, 1, 2, 1, 3,
  ];

  const rects: { x: number; w: number; tall: boolean }[] = [];
  let x = 0;
  bars.forEach((w, i) => {
    rects.push({ x, w, tall: i % 6 === 0 });
    x += w + 1;
  });

  return (
    <svg
      viewBox={`0 0 ${x} 36`}
      className={className}
      aria-hidden
      preserveAspectRatio="none"
    >
      {rects.map((r, i) => (
        <rect
          key={i}
          x={r.x}
          y={r.tall ? 0 : 3}
          width={r.w}
          height={r.tall ? 36 : 30}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
