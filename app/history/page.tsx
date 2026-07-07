"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/page-header";
import { HistoryFilters } from "@/components/history/history-filters";
import { HistoryList } from "@/components/history/history-list";
import { useLectures } from "@/hooks/use-lectures";
import type { LectureFilters } from "@/types";

const defaultFilters: LectureFilters = {
  query: "",
  subject: "all",
  status: "all",
  sort: "newest",
};

export default function HistoryPage() {
  const [filters, setFilters] = useState<LectureFilters>(defaultFilters);
  const lectures = useLectures(filters);

  return (
    <div>
      <PageHeader
        eyebrow="History"
        title="Lecture library without tables."
        description="Search, filter, and sort mock lecture cards. The data source is already isolated behind the API service layer."
      />
      <HistoryFilters filters={filters} onChange={setFilters} />
      <HistoryList lectures={lectures.data} loading={lectures.isLoading} />
    </div>
  );
}
