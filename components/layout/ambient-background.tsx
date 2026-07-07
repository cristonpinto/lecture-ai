"use client";

import { useMemo } from "react";

export function AmbientBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        id: index,
        left: `${(index * 29) % 100}%`,
        delay: `${(index * 1.35) % 18}s`,
        speed: `${22 + (index % 9) * 4}s`,
      })),
    [],
  );

  return (
    <>
      <div className="ambient-grid fixed inset-0 -z-20" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="absolute h-1 w-1 rounded-full bg-white/40 shadow-[0_0_18px_rgba(96,165,250,0.75)]"
            style={{
              left: particle.left,
              animation: `floatParticle ${particle.speed} linear infinite`,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>
      <style jsx global>{`
        @keyframes floatParticle {
          from {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          15%,
          80% {
            opacity: 1;
          }
          to {
            transform: translateY(-12vh) translateX(32px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
