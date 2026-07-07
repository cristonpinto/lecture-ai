export function ProgressRing({ value }: { value: number }) {
  const progress = Math.min(100, Math.max(0, value));

  return (
    <div
      className="relative grid h-36 w-36 place-items-center rounded-full shadow-glow"
      style={{
        background: `conic-gradient(from 180deg, #3B82F6 0deg, #8B5CF6 ${
          progress * 3.6
        }deg, rgba(255,255,255,0.08) ${progress * 3.6}deg)`,
      }}
    >
      <div className="absolute inset-2.5 rounded-full border border-white/10 bg-zinc-950/90" />
      <span className="relative text-2xl font-extrabold text-white">{progress}%</span>
    </div>
  );
}
