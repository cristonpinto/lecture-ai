import { CheckCircle2, Clock3, FileCheck2, Loader2, UploadCloud } from "lucide-react";
import type { LectureStatus } from "@/types";
import { cn, formatStatus } from "@/lib/utils";

const statusStyles: Record<LectureStatus, string> = {
  uploaded: "bg-white/[0.06] text-zinc-300",
  processing: "bg-accent/15 text-violet-200",
  completed: "bg-primary/15 text-blue-200",
  transcript_ready: "bg-cyan-400/15 text-cyan-100",
  notes_ready: "bg-emerald-400/15 text-emerald-100",
};

const statusIcons = {
  uploaded: UploadCloud,
  processing: Loader2,
  completed: CheckCircle2,
  transcript_ready: FileCheck2,
  notes_ready: Clock3,
} satisfies Record<LectureStatus, React.ElementType>;

export function StatusChip({ status }: { status: LectureStatus }) {
  const Icon = statusIcons[status];
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center gap-2 rounded-full border border-white/10 px-3 text-xs font-semibold",
        statusStyles[status],
      )}
    >
      <Icon size={14} className={status === "processing" ? "animate-spin" : undefined} />
      {formatStatus(status)}
    </span>
  );
}
