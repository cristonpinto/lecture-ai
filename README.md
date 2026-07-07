# Lecture AI Frontend

Production-ready frontend for Lecture AI, a modern AI-powered lecture transcription and study-notes platform. This phase is frontend-only and runs entirely on typed mock services.

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Folder Structure

- `app/` - Next.js App Router pages and global providers.
- `components/` - Reusable UI, layout, upload, history, settings, and card components.
- `hooks/` - React Query hooks for API access.
- `services/` - Stable API facade and mock endpoint implementations.
- `types/` - Shared TypeScript domain models.
- `mock/` - Fake data used by the current frontend-only phase.
- `constants/`, `lib/`, `utils/`, `styles/`, `public/` - Shared support code and styling.

## Development

```bash
npm run dev
npm run type-check
npm run lint
npm run build
```

The app uses Next.js 15, TypeScript, TailwindCSS, shadcn-style primitives, Framer Motion, React Query, Axios, React Hook Form, Lucide icons, and Zod.

## Architecture

Components import data through `services/api.ts` and React Query hooks only. The mock implementation lives in `services/mock.ts`, so pages and components do not need to know whether data comes from fake data or real FastAPI endpoints.

## Future Backend Integration

Replace the function implementations exported by `services/api.ts` with Axios calls to FastAPI endpoints. Keep the existing TypeScript interfaces in `types/` as the frontend contract, or update them alongside backend response schemas.

## Future Whisper Integration

The upload flow already captures accepted lecture file types and displays duration, file size, upload progress, and estimated processing time. When WhisperX is available, wire `uploadLecture()`, `getTranscript()`, and future note-generation actions to backend jobs.

## Roadmap

- FastAPI upload endpoint integration.
- Cloudinary or object-storage upload adapter.
- WhisperX transcription job tracking.
- AI notes, summaries, flashcards, MCQs, and lecture chat endpoints.
- Authentication and user-specific lecture libraries.
