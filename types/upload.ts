import type { Lecture } from "@/types/lecture";

export interface UploadPayload {
  file: File;
  subject: string;
}

export interface UploadResult {
  lecture: Lecture;
  progress: number;
}
