"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export function StatisticCard({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Card className="min-h-32">
        <span className="mb-5 grid h-10 w-10 place-items-center rounded-2xl bg-primary/15 text-blue-200">
          <Icon size={19} />
        </span>
        <p className="text-3xl font-extrabold text-white">{value}</p>
        <p className="mt-1 text-sm text-zinc-400">{label}</p>
      </Card>
    </motion.div>
  );
}
