import type { SettingsStatus } from "@/types";
import { Card } from "@/components/ui/card";

export function SettingsCard({ item }: { item: SettingsStatus }) {
  const tone =
    item.status === "online"
      ? "bg-emerald-400/15 text-emerald-100"
      : item.status === "mock"
        ? "bg-blue-400/15 text-blue-100"
        : "bg-zinc-400/15 text-zinc-300";

  return (
    <Card>
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-sm text-zinc-400">{item.label}</p>
          <h3 className="mt-2 text-xl font-bold text-white">{item.value}</h3>
        </div>
        <span className={`rounded-full border border-white/10 px-3 py-1.5 text-xs font-bold uppercase ${tone}`}>
          {item.status}
        </span>
      </div>
    </Card>
  );
}
