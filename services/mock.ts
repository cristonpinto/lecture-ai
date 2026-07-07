import { mockLectures, mockSettings, mockStatistics, mockTranscript } from "@/mock/lectures";
import type { AppSettings, Lecture, LectureFilters, LectureSubject, Statistics, Transcript, UploadResult } from "@/types";
import { estimateProcessingTime, formatFileSize } from "@/lib/utils";

const delay = (milliseconds = 420) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });

export async function getLectures(filters?: Partial<LectureFilters>): Promise<Lecture[]> {
  await delay();
  let lectures = [...mockLectures];

  if (filters?.query) {
    const query = filters.query.toLowerCase();
    lectures = lectures.filter(
      (lecture) =>
        lecture.name.toLowerCase().includes(query) ||
        lecture.subject.toLowerCase().includes(query) ||
        lecture.fileName.toLowerCase().includes(query),
    );
  }

  if (filters?.subject && filters.subject !== "all") {
    lectures = lectures.filter((lecture) => lecture.subject === filters.subject);
  }

  if (filters?.status && filters.status !== "all") {
    lectures = lectures.filter((lecture) => lecture.status === filters.status);
  }

  if (filters?.sort === "oldest") {
    lectures.sort((a, b) => a.uploadDate.localeCompare(b.uploadDate));
  } else {
    lectures.sort((a, b) => b.uploadDate.localeCompare(a.uploadDate));
  }

  return lectures;
}

export async function uploadLecture(file: File, subject: string): Promise<UploadResult> {
  await delay(900);
  const lectureSubject: LectureSubject = isLectureSubject(subject) ? subject : "Computer Science";
  const lecture: Lecture = {
    id: `lec-${Date.now()}`,
    name: file.name.replace(/\.[^/.]+$/, "").replaceAll("-", " "),
    subject: lectureSubject,
    duration: "52 min",
    uploadDate: new Date().toISOString().slice(0, 10),
    status: "completed",
    fileName: file.name,
    fileSize: formatFileSize(file.size),
    estimatedProcessingTime: estimateProcessingTime(file.size),
  };

  return { lecture, progress: 100 };
}

function isLectureSubject(value: string): value is LectureSubject {
  return ["Computer Science", "Biology", "Chemistry", "Economics", "Mathematics", "Physics"].includes(value);
}

export async function deleteLecture(lectureId: string): Promise<{ ok: true }> {
  void lectureId;
  await delay(300);
  return { ok: true };
}

export async function getTranscript(lectureId: string): Promise<Transcript> {
  void lectureId;
  await delay();
  return mockTranscript;
}

export async function getStatistics(): Promise<Statistics> {
  await delay();
  return mockStatistics;
}

export async function getSettings(): Promise<AppSettings> {
  await delay();
  return mockSettings;
}
