"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Archive, AudioLines, Brain, FileText, MessageSquare, NotebookTabs, Sparkles, UploadCloud, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/cards/feature-card";
import { StatisticCard } from "@/components/cards/statistic-card";
import { LectureCard } from "@/components/cards/lecture-card";
import { featureBadges } from "@/constants/features";
import { useLectures, useStatistics } from "@/hooks/use-lectures";

export default function DashboardPage() {
  const lectures = useLectures({ sort: "newest" });
  const statistics = useStatistics();

  return (
    <div className="space-y-16">
      <section className="relative grid min-h-[680px] place-items-center text-center">
        <motion.div
          className="relative z-10 flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-zinc-300">
            <Sparkles size={16} /> Private AI lecture workspace
          </span>
          <h1 className="max-w-5xl text-balance text-5xl font-extrabold leading-[0.93] text-white md:text-7xl lg:text-8xl">
            Transform University Lectures{" "}
            <span className="bg-gradient-to-r from-white via-blue-100 to-violet-300 bg-clip-text text-transparent">
              Into Intelligent Study Notes
            </span>
          </h1>
          <p className="max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            Upload lectures. Generate transcripts. Create AI notes. Prepare flashcards, MCQs, and exam revision workflows from one premium frontend.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/upload">
                <UploadCloud size={18} />
                Upload Lecture
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/history">View History</Link>
            </Button>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {featureBadges.map((badge, index) => (
            <motion.span
              key={badge}
              className="glass absolute rounded-full px-4 py-2 text-sm font-medium text-zinc-200"
              style={{
                left: `${8 + ((index * 19) % 78)}%`,
                top: `${15 + ((index * 23) % 66)}%`,
              }}
              animate={{ y: [0, index % 2 ? -12 : 12, 0], x: [0, index % 3 ? 8 : -8, 0] }}
              transition={{ duration: 6 + index * 0.55, repeat: Infinity, ease: "easeInOut" }}
            >
              {badge}
            </motion.span>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">Command Center</p>
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">Useful, not dashboard-heavy.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-400">Cards, status signals, and quick actions keep the product calm while still feeling powerful.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatisticCard label="Lectures indexed" value={String(statistics.data?.lecturesIndexed ?? "128")} icon={Archive} />
          <StatisticCard label="Hours transcribed" value={`${statistics.data?.hoursTranscribed ?? 94}h`} icon={AudioLines} />
          <StatisticCard label="Notes generated" value={String(statistics.data?.notesGenerated ?? "312")} icon={NotebookTabs} />
          <StatisticCard label="Revision sets" value={String(statistics.data?.revisionSets ?? "46")} icon={Brain} />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <FeatureCard icon={FileText} title="Transcript Ready" description="Transcript pages are designed around readable segments, timestamps, copy, and download actions." />
        <FeatureCard icon={Zap} title="AI Study Tools" description="Summaries, notes, flashcards, MCQs, and lecture chat are represented as real placeholders for backend wiring." />
        <FeatureCard icon={MessageSquare} title="Future Lecture Chat" description="The architecture isolates UI from service calls so later chat endpoints can drop into the same patterns." />
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">Recent Lectures</p>
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">Latest uploads</h2>
          </div>
          <Button asChild variant="secondary">
            <Link href="/history">All History</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {(lectures.data ?? []).slice(0, 3).map((lecture) => (
            <LectureCard key={lecture.id} lecture={lecture} />
          ))}
        </div>
      </section>
    </div>
  );
}
