"use client";

import type { ElementType } from "react";
import { Cloud, Info, Moon, Server, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { SettingsCard } from "@/components/settings/settings-card";
import { Card } from "@/components/ui/card";
import { useSettings } from "@/hooks/use-lectures";

export default function SettingsPage() {
  const settings = useSettings();
  const data = settings.data;

  return (
    <div>
      <PageHeader
        eyebrow="Settings"
        title="Application readiness."
        description="Mock operational settings make backend, Cloudinary, and WhisperX integration status explicit before those systems exist."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {data ? (
          <>
            <SettingsCard item={data.cloudinary} />
            <SettingsCard item={data.backend} />
            <Card>
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.06] text-blue-100">
                  <Moon size={20} />
                </span>
                <div>
                  <p className="text-sm text-zinc-400">Theme</p>
                  <h3 className="mt-2 text-xl font-bold capitalize text-white">{data.theme}</h3>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.06] text-violet-100">
                  <Sparkles size={20} />
                </span>
                <div>
                  <p className="text-sm text-zinc-400">Future Whisper Model</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{data.whisperModel}</h3>
                </div>
              </div>
            </Card>
            <Card className="md:col-span-2">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-blue-100">
                  <Info size={20} />
                </span>
                <div>
                  <p className="text-sm text-zinc-400">Application Information</p>
                  <h3 className="text-xl font-bold text-white">Version {data.version}</h3>
                </div>
              </div>
              <div className="grid gap-3">
                {data.information.map((item) => (
                  <p key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-zinc-300">
                    {item}
                  </p>
                ))}
              </div>
            </Card>
          </>
        ) : (
          <>
            <EmptySetting icon={Cloud} />
            <EmptySetting icon={Server} />
          </>
        )}
      </div>
    </div>
  );
}

function EmptySetting({ icon: Icon }: { icon: ElementType }) {
  return (
    <Card>
      <div className="flex items-center gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.06] text-zinc-400">
          <Icon size={20} />
        </span>
        <div className="h-12 flex-1 rounded-2xl bg-white/[0.06]" />
      </div>
    </Card>
  );
}
