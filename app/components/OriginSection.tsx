// components/OriginSection.tsx
"use client";

import { useEffect, useState } from "react";

export function OriginSection() {


  return (
    <section
      className="relative flex items-center justify-center pt-16 md:pt-24 overflow-hidden"
      style={{
        // move slightly opposite to scroll for parallax feel

        backgroundColor: "#CCCBCA", // light grey similar to screenshot
      }}
    >
      <div className="text-[80px] md:text-[200px] font-semibold tracking-[0.35em] uppercase">
        <span className="text-[#807E7E]">OR</span>
        <span className="text-zinc-900">1</span>
        <span className="text-[#807E7E]">GIN</span>
      </div>
    </section>
  );
}
