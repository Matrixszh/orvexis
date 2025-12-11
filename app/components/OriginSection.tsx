// components/OriginSection.tsx
"use client";

import TrueFocus from "./TrueFocus";
import { useEffect, useState } from "react";

export function OriginSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-16 md:py-24 overflow-hidden bg-black">
      <TrueFocus
        sentence="Our Story"
        manualMode={false}
        blurAmount={5}
        borderColor="white"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />

      {/* Stack heading + text under TrueFocus */}
<div className="mt-20 w-full flex justify-center">
    <div className="flex flex-row items-center gap-10 px-10 max-w-5xl">
      <h2 className="flex-shrink-0 text-4xl font-semibold leading-tight text-[#F2F0EF] md:text-5xl">
        This Is Where It
        <br />
        All Began To
        <br />
        Compile
      </h2>

  <div className="text-sm leading-relaxed text-[#F2F0EF] max-w-xl">
    <p>
      We help AI &amp; SaaS founders turn complex ideas into clear,
      investor‑ready products and brands that users love. Built fast,
      designed to grow, and ready to ship.
    </p>
    <p className="mt-4">
      From the first line of code to launch day, every release is crafted
      to be stable, scalable, and ready for real users. From the first line of code to launch day, every release is crafted
      to be stable, scalable, and ready for real users.From the first line of code to launch day, every release is crafted
      to be stable, scalable, and ready for real users.
    </p>
  </div>
    </div>
  </div>



    </section>
  );
}
