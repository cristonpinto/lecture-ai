"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, FileAudio, UploadCloud } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ProgressRing } from "@/components/common/progress-ring";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { acceptedFileTypes } from "@/constants/features";
import { useUploadLecture } from "@/hooks/use-lectures";
import { estimateProcessingTime, formatFileSize } from "@/lib/utils";
import type { Lecture } from "@/types";

const uploadSchema = z.object({
  subject: z.string().min(2, "Choose a subject"),
});

type UploadForm = z.infer<typeof uploadSchema>;

export function UploadZone() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploadedLecture, setUploadedLecture] = useState<Lecture | null>(null);
  const uploadLecture = useUploadLecture();
  const form = useForm<UploadForm>({
    resolver: zodResolver(uploadSchema),
    defaultValues: { subject: "Computer Science" },
  });

  function pickFile(nextFile: File | undefined) {
    if (!nextFile) return;
    setFile(nextFile);
    setUploadedLecture(null);
    setProgress(12);
  }

  async function submit(values: UploadForm) {
    if (!file) return;
    setProgress(28);
    const timer = window.setInterval(() => {
      setProgress((current) => Math.min(94, current + 9));
    }, 260);

    const result = await uploadLecture.mutateAsync({ file, subject: values.subject });
    window.clearInterval(timer);
    setProgress(result.progress);
    setUploadedLecture(result.lecture);
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.35fr_0.85fr]">
      <motion.form
        onSubmit={form.handleSubmit(submit)}
        className="glass relative grid min-h-[420px] place-items-center overflow-hidden rounded-3xl p-6 text-center"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          pickFile(event.dataTransfer.files[0]);
        }}
      >
        <div className="absolute inset-px rounded-3xl border border-blue-400/20 shadow-[inset_0_0_70px_rgba(59,130,246,0.08)]" />
        <input
          ref={inputRef}
          className="hidden"
          type="file"
          accept={acceptedFileTypes.join(",")}
          onChange={(event) => pickFile(event.target.files?.[0])}
        />
        <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6">
          <motion.div
            className="grid h-24 w-24 place-items-center rounded-3xl border border-white/10 bg-gradient-to-br from-primary/25 to-accent/25 shadow-glow"
            animate={{ y: [0, -8, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <UploadCloud size={38} />
          </motion.div>
          <div>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">Upload your lecture recording</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-zinc-400">
              Drag in MP3, M4A, WAV, or MP4 files. Lecture AI will simulate upload, processing, and completion while the backend is being built.
            </p>
          </div>
          <div className="grid w-full max-w-xl gap-3 md:grid-cols-[1fr_auto]">
            <Select {...form.register("subject")} aria-label="Subject">
              <option>Computer Science</option>
              <option>Biology</option>
              <option>Chemistry</option>
              <option>Economics</option>
              <option>Mathematics</option>
              <option>Physics</option>
            </Select>
            <Button type="button" variant="secondary" onClick={() => inputRef.current?.click()}>
              <FileAudio size={18} />
              Choose File
            </Button>
          </div>
          <Button type="submit" size="lg" disabled={!file || uploadLecture.isPending}>
            <UploadCloud size={18} />
            {uploadLecture.isPending ? "Uploading..." : "Start Upload"}
          </Button>
        </div>
      </motion.form>

      <Card className="flex min-h-[420px] flex-col justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">Processing</p>
          <h3 className="mt-2 text-2xl font-bold text-white">Lecture intake status</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-400">Mock metadata mirrors the future backend response shape.</p>
        </div>
        <div className="my-8 grid place-items-center">
          {uploadedLecture ? (
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="grid place-items-center gap-3">
              <span className="grid h-28 w-28 place-items-center rounded-full bg-emerald-400/15 text-emerald-100 shadow-glow">
                <CheckCircle2 size={46} />
              </span>
              <p className="font-semibold text-emerald-100">Upload completed</p>
            </motion.div>
          ) : (
            <ProgressRing value={progress} />
          )}
        </div>
        <div className="grid gap-3 text-sm">
          <Meta label="File Name" value={file?.name ?? "No file selected"} />
          <Meta label="Duration" value={uploadedLecture?.duration ?? (file ? "Estimating..." : "-")} />
          <Meta label="Size" value={file ? formatFileSize(file.size) : "-"} />
          <Meta label="Estimated Processing" value={file ? estimateProcessingTime(file.size) : "-"} />
          {uploadedLecture ? <Input readOnly value={`Created lecture: ${uploadedLecture.name}`} /> : null}
        </div>
      </Card>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 text-zinc-400">
      <span>{label}</span>
      <strong className="text-right font-semibold text-white">{value}</strong>
    </div>
  );
}
