import axios from "axios";
import * as mockApi from "@/services/mock";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "/api",
  timeout: 30_000,
});

export const lectureApi = {
  getLectures: mockApi.getLectures,
  uploadLecture: mockApi.uploadLecture,
  deleteLecture: mockApi.deleteLecture,
  getTranscript: mockApi.getTranscript,
  getStatistics: mockApi.getStatistics,
  getSettings: mockApi.getSettings,
};
