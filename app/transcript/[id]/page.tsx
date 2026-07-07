"use client";

import { useParams } from "next/navigation";
import { Copy, Download, FileText, MessageSquare, Sparkles, Wand2 } from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useTranscript } from "@/hooks/use-lectures";

export default function TranscriptPage() {
  const params = useParams<{ id: string }>();
  const transcript = useTranscript(params.id);

  return (
    <div>
      <PageHeader
        eyebrow="Transcript"
        title={transcript.data?.title ?? "Lecture transcript"}
        description="Mock transcript layout with future AI notes, summary, generation, and lecture chat controls already represented."
      />
      <div className="mb-5 flex flex-wrap gap-3">
        <Button variant="secondary">
          <Copy size={17} /> Copy
        </Button>
        <Button variant="secondary">
          <Download size={17} /> Download
        </Button>
        <Button>
          <Sparkles size={17} /> Generate Notes
        </Button>
        <Button variant="secondary">
          <Wand2 size={17} /> Summarize
        </Button>
        <Button variant="secondary">
          <MessageSquare size={17} /> Chat with Lecture
        </Button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
        <Card>
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-blue-100">
              <FileText size={20} />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-white">Transcript</h2>
              <p className="text-sm text-zinc-400">Segmented with speakers and timestamps</p>
            </div>
          </div>
          {transcript.isLoading ? (
            <div className="grid gap-5">
              {Array.from({ length: 4 }, (_, index) => (
                <Skeleton key={index} className="h-20 rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid gap-4">
              {transcript.data?.segments.map((segment) => (
                <article key={segment.id} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <span className="font-semibold text-white">{segment.speaker}</span>
                    <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-zinc-400">
                      {segment.startTime} - {segment.endTime}
                    </span>
                  </div>
                  <p className="leading-7 text-zinc-300">{segment.text}</p>
                </article>
              ))}
            </div>
          )}
        </Card>

        <Card>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">Future AI Notes</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Prepared workspace</h2>
          <p className="mt-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-zinc-300">
            {transcript.data?.summary ?? "Loading summary..."}
          </p>
          <div className="mt-5 grid gap-3">
            {transcript.data?.futureNotes.map((note) => (
              <div key={note} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-zinc-300">
                {note}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
