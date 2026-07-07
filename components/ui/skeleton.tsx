import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-shimmer rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.06),rgba(255,255,255,0.15),rgba(255,255,255,0.06))] bg-[length:220%_100%]",
        className,
      )}
    />
  );
}
