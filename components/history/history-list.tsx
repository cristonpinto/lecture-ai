"use client";

import { motion } from "framer-motion";
import { LectureCard } from "@/components/cards/lecture-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Lecture } from "@/types";

export function HistoryList({ lectures, loading }: { lectures?: Lecture[]; loading: boolean }) {
  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => (
          <div key={index} className="glass rounded-3xl p-6">
            <Skeleton className="mb-8 h-8 w-32" />
            <Skeleton className="mb-3 h-5" />
            <Skeleton className="h-5 w-2/3" />
          </div>
        ))}
      </div>
    );
  }

  if (!lectures?.length) {
    return (
      <div className="glass rounded-3xl p-10 text-center">
        <h3 className="text-xl font-bold text-white">No lectures found</h3>
        <p className="mt-2 text-sm text-zinc-400">Try a different search or filter combination.</p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
    >
      {lectures.map((lecture) => (
        <motion.div key={lecture.id} variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}>
          <LectureCard lecture={lecture} />
        </motion.div>
      ))}
    </motion.div>
  );
}
