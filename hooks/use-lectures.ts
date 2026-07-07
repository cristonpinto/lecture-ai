"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { lectureApi } from "@/services/api";
import type { LectureFilters } from "@/types";

export function useLectures(filters?: Partial<LectureFilters>) {
  return useQuery({
    queryKey: ["lectures", filters],
    queryFn: () => lectureApi.getLectures(filters),
  });
}

export function useStatistics() {
  return useQuery({
    queryKey: ["statistics"],
    queryFn: lectureApi.getStatistics,
  });
}

export function useTranscript(lectureId: string) {
  return useQuery({
    queryKey: ["transcript", lectureId],
    queryFn: () => lectureApi.getTranscript(lectureId),
  });
}

export function useSettings() {
  return useQuery({
    queryKey: ["settings"],
    queryFn: lectureApi.getSettings,
  });
}

export function useUploadLecture() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ file, subject }: { file: File; subject: string }) => lectureApi.uploadLecture(file, subject),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["lectures"] });
      void queryClient.invalidateQueries({ queryKey: ["statistics"] });
    },
  });
}
