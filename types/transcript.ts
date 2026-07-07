export interface TranscriptSegment {
  id: string;
  startTime: string;
  endTime: string;
  speaker: string;
  text: string;
}

export interface Transcript {
  lectureId: string;
  title: string;
  summary: string;
  segments: TranscriptSegment[];
  futureNotes: string[];
}
