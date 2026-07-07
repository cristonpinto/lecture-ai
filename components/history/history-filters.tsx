"use client";

import { Search } from "lucide-react";
import type { LectureFilters } from "@/types";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export function HistoryFilters({
  filters,
  onChange,
}: {
  filters: LectureFilters;
  onChange: (filters: LectureFilters) => void;
}) {
  return (
    <div className="glass mb-6 grid gap-3 rounded-3xl p-3 md:grid-cols-[1fr_auto_auto_auto]">
      <label className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={17} />
        <Input
          className="pl-11"
          placeholder="Search lectures, subjects, files..."
          value={filters.query}
          onChange={(event) => onChange({ ...filters, query: event.target.value })}
        />
      </label>
      <Select value={filters.subject} onChange={(event) => onChange({ ...filters, subject: event.target.value as LectureFilters["subject"] })}>
        <option value="all">All Subjects</option>
        <option>Computer Science</option>
        <option>Biology</option>
        <option>Chemistry</option>
        <option>Economics</option>
        <option>Mathematics</option>
        <option>Physics</option>
      </Select>
      <Select value={filters.status} onChange={(event) => onChange({ ...filters, status: event.target.value as LectureFilters["status"] })}>
        <option value="all">All Statuses</option>
        <option value="uploaded">Uploaded</option>
        <option value="processing">Processing</option>
        <option value="completed">Completed</option>
        <option value="transcript_ready">Transcript Ready</option>
        <option value="notes_ready">Notes Ready</option>
      </Select>
      <Select value={filters.sort} onChange={(event) => onChange({ ...filters, sort: event.target.value as LectureFilters["sort"] })}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="duration">Duration</option>
      </Select>
    </div>
  );
}
