// components/OriginSection.tsx
"use client";

import { useEffect, useState } from "react";


export function OriginSection() {


  return (
    <section
      className="relative flex items-center justify-center py-16 md:py-24 overflow-hidden"
      style={{
        // move slightly opposite to scroll for parallax feel

        backgroundColor: "black", // light grey similar to screenshot
      }}
    >

      <div className="text-[60px] pl-4 items-center md:text-[200px] font-regular tracking-[0.35em] uppercase">
        
        <span className="text-[#807E7E]">OR</span>
        <span className="text-[#807E7E]">I</span>
        <span className="text-[#807E7E]">GIN</span>
      </div>
    </section>
  );
}
