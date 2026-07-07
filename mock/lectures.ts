import type { AppSettings, Lecture, Statistics, Transcript } from "@/types";

export const mockLectures: Lecture[] = [
  {
    id: "lec-001",
    name: "Neural Networks and Backpropagation",
    subject: "Computer Science",
    duration: "58 min",
    uploadDate: "2026-06-26",
    status: "notes_ready",
    fileName: "neural-networks-week-08.mp3",
    fileSize: "164 MB",
    estimatedProcessingTime: "4 min",
  },
  {
    id: "lec-002",
    name: "Organic Chemistry Reaction Pathways",
    subject: "Chemistry",
    duration: "1h 12m",
    uploadDate: "2026-06-25",
    status: "processing",
    fileName: "ochem-reactions.m4a",
    fileSize: "203 MB",
    estimatedProcessingTime: "5 min",
  },
  {
    id: "lec-003",
    name: "Macroeconomics: Inflation Models",
    subject: "Economics",
    duration: "49 min",
    uploadDate: "2026-06-24",
    status: "transcript_ready",
    fileName: "macro-inflation-models.wav",
    fileSize: "121 MB",
    estimatedProcessingTime: "3 min",
  },
  {
    id: "lec-004",
    name: "Electromagnetism Field Equations",
    subject: "Physics",
    duration: "1h 04m",
    uploadDate: "2026-06-22",
    status: "completed",
    fileName: "physics-fields.mp4",
    fileSize: "412 MB",
    estimatedProcessingTime: "9 min",
  },
  {
    id: "lec-005",
    name: "Cellular Respiration and ATP Synthesis",
    subject: "Biology",
    duration: "42 min",
    uploadDate: "2026-06-20",
    status: "uploaded",
    fileName: "bio-cellular-respiration.mp3",
    fileSize: "98 MB",
    estimatedProcessingTime: "3 min",
  },
];

export const mockStatistics: Statistics = {
  lecturesIndexed: 128,
  hoursTranscribed: 94,
  notesGenerated: 312,
  revisionSets: 46,
};

export const mockTranscript: Transcript = {
  lectureId: "lec-001",
  title: "Neural Networks and Backpropagation",
  summary:
    "This lecture introduces gradient descent, chain rule intuition, loss surfaces, and how neural networks update weights during supervised learning.",
  segments: [
    {
      id: "seg-001",
      startTime: "00:00",
      endTime: "03:42",
      speaker: "Professor",
      text:
        "Today we are going to connect the intuition of gradient descent with the mechanics of backpropagation in layered neural networks.",
    },
    {
      id: "seg-002",
      startTime: "03:43",
      endTime: "08:18",
      speaker: "Professor",
      text:
        "The loss function gives us a surface, and each parameter update moves the model toward a region where the prediction error is lower.",
    },
    {
      id: "seg-003",
      startTime: "08:19",
      endTime: "15:03",
      speaker: "Student",
      text:
        "So the chain rule is how the model knows how much each earlier layer contributed to the final error?",
    },
    {
      id: "seg-004",
      startTime: "15:04",
      endTime: "24:37",
      speaker: "Professor",
      text:
        "Exactly. Backpropagation is an efficient bookkeeping system for applying the chain rule from the output layer back through every hidden layer.",
    },
  ],
  futureNotes: [
    "Explain gradient descent with a visual analogy.",
    "Extract equations for backpropagation.",
    "Generate MCQs about activation functions.",
    "Create a revision checklist for exam prep.",
  ],
};

export const mockSettings: AppSettings = {
  cloudinary: { label: "Cloudinary Status", value: "Not connected", status: "mock" },
  backend: { label: "Backend Status", value: "Mock API active", status: "mock" },
  theme: "dark",
  version: "0.1.0",
  whisperModel: "WhisperX large-v3 (future)",
  information: [
    "Frontend-only phase using typed mock services.",
    "FastAPI endpoints can replace services/mock.ts without changing page components.",
    "Upload, transcript, notes, summaries, flashcards, and chat actions are prepared as placeholders.",
  ],
};
