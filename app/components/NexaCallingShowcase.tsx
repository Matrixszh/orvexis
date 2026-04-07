"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";

const glowColor = "19, 15, 247";

export function NexaCallingShowcase() {
  const imageCardRef = useRef<HTMLDivElement>(null);

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
          onPointerEnter={(event) => updateGlow(event.clientX, event.clientY, 1)}
          onPointerMove={(event) => updateGlow(event.clientX, event.clientY, 1)}
          onPointerDown={(event) => updateGlow(event.clientX, event.clientY, 1)}
          onPointerLeave={resetGlow}
          onPointerUp={resetGlow}
          onPointerCancel={resetGlow}
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-[28px] p-[2px] transition-opacity duration-300"
            style={{
              background: `radial-gradient(360px circle at var(--glow-x) var(--glow-y), rgba(${glowColor}, calc(var(--glow-intensity) * 0.9)) 0%, rgba(${glowColor}, calc(var(--glow-intensity) * 0.45)) 30%, transparent 62%)`,
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
            }}
          />

          <div
            className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(520px circle at var(--glow-x) var(--glow-y), rgba(${glowColor}, calc(var(--glow-intensity) * 0.18)) 0%, rgba(${glowColor}, calc(var(--glow-intensity) * 0.08)) 35%, transparent 68%)`,
            }}
          />

          <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-black">
            <Image
              src="/bg1.jpeg"
              alt="NexaCalling product preview"
              width={1200}
              height={900}
              className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-[480px] lg:h-[72vh] lg:max-h-[760px]"
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
