"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";

const glowColor = "19, 15, 247";

export function NexaCallingShowcase() {
  const imageCardRef = useRef<HTMLDivElement>(null);
  const autoRafRef = useRef<number | null>(null);
  const autoAngleRef = useRef<number>(0);
  const autoActiveRef = useRef<boolean>(true);
  const resumeTimeoutRef = useRef<number | null>(null);

  const updateGlow = (clientX: number, clientY: number, intensity: number) => {
    if (!imageCardRef.current) return;

    const rect = imageCardRef.current.getBoundingClientRect();
    const relativeX = ((clientX - rect.left) / rect.width) * 100;
    const relativeY = ((clientY - rect.top) / rect.height) * 100;

    imageCardRef.current.style.setProperty("--glow-x", `${relativeX}%`);
    imageCardRef.current.style.setProperty("--glow-y", `${relativeY}%`);
    imageCardRef.current.style.setProperty("--glow-intensity", intensity.toString());
  };

  const resetGlow = () => {
    if (!imageCardRef.current) return;

    imageCardRef.current.style.setProperty("--glow-intensity", "0");
    imageCardRef.current.style.setProperty("--glow-x", "50%");
    imageCardRef.current.style.setProperty("--glow-y", "50%");
  };

  useEffect(() => {
    const tick = () => {
      if (!autoActiveRef.current || !imageCardRef.current) {
        autoRafRef.current = requestAnimationFrame(tick);
        return;
      }

      const rect = imageCardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const radius = Math.min(rect.width, rect.height) * 0.5;

      autoAngleRef.current += 0.012;
      const x = cx + radius * Math.cos(autoAngleRef.current);
      const y = cy + radius * Math.sin(autoAngleRef.current * 1.05);

      updateGlow(x, y, 1);
      autoRafRef.current = requestAnimationFrame(tick);
    };

    autoRafRef.current = requestAnimationFrame(tick);
    return () => {
      if (autoRafRef.current) cancelAnimationFrame(autoRafRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const pauseAuto = () => {
    autoActiveRef.current = false;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const scheduleResume = (delay = 1400) => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      autoActiveRef.current = true;
      resumeTimeoutRef.current = null;
    }, delay);
  };

  return (
    <section className="mx-auto mt-24 w-full max-w-[96rem] px-4 lg:px-0">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1.58fr)] lg:gap-12">
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight text-[#F2F0EF] md:text-5xl">
              Introducing NexaCalling
            </h2>
            <p className="max-w-xl text-sm leading-7 text-zinc-300 md:text-base">
              NexaCalling is a modern communication platform built to help teams manage outbound calls,
              follow-ups, and customer conversations with speed, clarity, and reliability. It brings
              smart workflows, real-time visibility, and a premium calling experience into one focused product.
            </p>
          </div>
        </div>

        <div
          ref={imageCardRef}
          className="group relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#060010] p-3 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          style={
            {
              "--glow-x": "50%",
              "--glow-y": "50%",
              "--glow-intensity": "0",
            } as CSSProperties
          }
          onPointerEnter={(event) => {
            pauseAuto();
            updateGlow(event.clientX, event.clientY, 1);
          }}
          onPointerMove={(event) => {
            pauseAuto();
            updateGlow(event.clientX, event.clientY, 1);
          }}
          onPointerDown={(event) => {
            pauseAuto();
            updateGlow(event.clientX, event.clientY, 1);
          }}
          onPointerLeave={() => {
            resetGlow();
            scheduleResume();
          }}
          onPointerUp={() => {
            resetGlow();
            scheduleResume();
          }}
          onPointerCancel={() => {
            resetGlow();
            scheduleResume();
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-[28px] p-[2px] transition-opacity duration-300"
            style={{
              background: `radial-gradient(360px circle at var(--glow-x) var(--glow-y), rgba(${glowColor}, calc(var(--glow-intensity) * 0.9)) 0%, rgba(${glowColor}, calc(var(--glow-intensity) * 0.45)) 30%, transparent 62%)`,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              mixBlendMode: "screen",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 z-10 rounded-[28px] opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(560px circle at var(--glow-x) var(--glow-y), rgba(${glowColor}, calc(var(--glow-intensity) * 0.22)) 0%, rgba(${glowColor}, calc(var(--glow-intensity) * 0.1)) 35%, transparent 72%)`,
              mixBlendMode: "screen",
            }}
          />

          <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-black">
            <Image
              src="/nexah.png"
              alt="NexaCalling product preview"
              width={1200}
              height={900}
              className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-[480px] lg:h-[60vh] lg:max-h-[760px]"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.28em] text-zinc-300">NexaCalling</p>
                <h3 className="text-2xl font-semibold text-white">Connected conversations, built for growth</h3>
              </div>
              <span className="hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-100 md:inline-flex">
                Product View
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
