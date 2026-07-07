import { AmbientBackground } from "@/components/layout/ambient-background";
import { Navbar } from "@/components/layout/navbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <AmbientBackground />
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:px-6 lg:px-8">{children}</main>
    </div>
  );
}
