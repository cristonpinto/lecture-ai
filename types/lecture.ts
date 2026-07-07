export type LectureStatus =
  | "uploaded"
  | "processing"
  | "completed"
  | "transcript_ready"
  | "notes_ready";

export type LectureSubject =
  | "Computer Science"
  | "Biology"
  | "Chemistry"
  | "Economics"
  | "Mathematics"
  | "Physics";

export interface Lecture {
  id: string;
  name: string;
  subject: LectureSubject;
  duration: string;
  uploadDate: string;
  status: LectureStatus;
  fileName: string;
  fileSize: string;
  estimatedProcessingTime: string;
}

export interface LectureFilters {
  query: string;
  subject: "all" | LectureSubject;
  status: "all" | LectureStatus;
  sort: "newest" | "oldest" | "duration";
}
