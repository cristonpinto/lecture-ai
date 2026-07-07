"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { navigationItems } from "@/constants/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-4 z-40 mx-auto max-w-7xl px-4"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="glass flex min-h-16 items-center justify-between rounded-3xl px-3">
        <Link href="/" className="flex items-center gap-3 pl-1">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-glow">
            <Sparkles size={19} />
          </span>
          <span className="font-bold text-white">Lecture AI</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-white",
                  active && "bg-white/[0.08] text-white",
                )}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="icon" aria-label="Theme toggle">
            <Moon size={17} />
          </Button>
          <Button
            className="md:hidden"
            variant="secondary"
            size="icon"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </nav>

      {open ? (
        <motion.div
          className="glass mt-3 grid gap-2 rounded-3xl p-3 md:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center gap-3 rounded-2xl px-3 text-sm font-medium text-zinc-200 hover:bg-white/[0.06]"
              >
                <Icon size={17} />
                {item.label}
              </Link>
            );
          })}
        </motion.div>
      ) : null}
    </motion.header>
  );
}
