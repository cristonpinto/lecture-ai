import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatStatus(status: string) {
  return status
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function estimateProcessingTime(fileSize: number) {
  const minutes = Math.max(2, Math.ceil(fileSize / 45_000_000));
  return `${minutes} min`;
}

export function formatFileSize(bytes: number) {
  if (bytes === 0) return "0 MB";
  const megabytes = bytes / 1_000_000;
  return `${megabytes.toFixed(megabytes > 10 ? 0 : 1)} MB`;
}
