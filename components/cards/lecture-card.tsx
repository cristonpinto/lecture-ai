"use client";

import Link from "next/link";
import { Calendar, Clock3, LockKeyhole } from "lucide-react";
import { motion } from "framer-motion";
import type { Lecture } from "@/types";
import { Card } from "@/components/ui/card";
import { StatusChip } from "@/components/common/status-chip";
import { Skeleton } from "@/components/ui/skeleton";

export function LectureCard({ lecture }: { lecture: Lecture }) {
  return (
    <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Link href={`/transcript/${lecture.id}`} aria-label={`Open ${lecture.name}`}>
        <Card className="min-h-56 transition hover:border-white/20">
          <div className="mb-7 flex items-start justify-between gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-semibold text-zinc-300">
              {lecture.subject}
            </span>
            <StatusChip status={lecture.status} />
          </div>
          <h3 className="text-lg font-bold leading-tight text-white">{lecture.name}</h3>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} /> {lecture.uploadDate}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={14} /> {lecture.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <LockKeyhole size={14} /> Private
            </span>
          </div>
          <div className="mt-7 grid gap-2">
            <Skeleton className="h-2.5" />
            <Skeleton className="h-2.5 w-3/5" />
          </div>
        </Card>
      </Link>
    </motion.article>
  );
}
