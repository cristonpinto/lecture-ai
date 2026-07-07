"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export function FeatureCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Card className="h-full">
        <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/25 text-blue-100">
          <Icon size={21} />
        </span>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>
      </Card>
    </motion.div>
  );
}
