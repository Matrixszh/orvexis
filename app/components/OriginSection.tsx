// components/OriginSection.tsx
"use client";

import TrueFocus from "./TrueFocus";
import { useEffect, useState } from "react";


export function OriginSection() {


  return (
    <section
      className="relative flex items-center justify-center  py-16 md:py-24 overflow-hidden"
      style={{
        // move slightly opposite to scroll for parallax feel

        backgroundColor: "black", // light grey similar to screenshot
      }}
    >
<TrueFocus 
sentence="True Focus"
manualMode={false}
blurAmount={5}
borderColor="blue"
animationDuration={2}
pauseBetweenAnimations={1}
/>
      
    </section>
  );
}
