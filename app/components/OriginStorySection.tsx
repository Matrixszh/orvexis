// components/OriginStorySection.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export function OriginStorySection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.unobserve(entries[0].target); // only animate once
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh]  w-full overflow-hidden bg-black"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('./bg1.jpeg')", // put your image here (public/images/origin-bg.jpg)
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div
        className={`relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-6 py-16 md:flex-row md:items-center md:gap-16 md:px-12 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } transition-all duration-1000 ease-out`}
      >
        <div className="flex-1">
          <h2 className="text-4xl font-semibold leading-tight text-[#F2F0EF] md:text-5xl">
            This Is Where It
            <br />
            All Began To
            <br />
            Compile
          </h2>
        </div>

        <div className="mt-8 flex-1 text-sm leading-relaxed text-[#F2F0EF] md:mt-0">
          <p>
            We help AI &amp; SaaS founders turn complex ideas into clear,
            investor‑ready products and brands that users love. Built fast,
            designed to grow, and ready to ship.
          </p>
          <p className="mt-4">
            From the first line of code to launch day, every release is crafted
            to be stable, scalable, and ready for real users.
          </p>
        </div>
      </div>
    </section>
  );
}
