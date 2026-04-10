"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setOpen((s) => ({ ...s, [i]: !s[i] }));
  const maxClass = "max-h-64 md:max-h-72";

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((it, i) => {
        const isOpen = !!open[i];
        return (
          <div
            key={it.q}
            className="overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] transition-colors duration-300 hover:border-[#130FF7]/35 hover:bg-white/[0.05]"
          >
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-sm text-zinc-200"
            >
              <span>{it.q}</span>
              <ChevronDown
                className={`h-4 w-4 text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                strokeWidth={1.5}
              />
            </button>
            <div
              className={`px-5 text-sm text-zinc-400 transition-all duration-300 ease-out overflow-hidden ${
                isOpen ? `${maxClass} opacity-100 translate-y-0 pb-4` : "max-h-0 opacity-0 -translate-y-1 pb-0"
              }`}
            >
              <div className="leading-6">{it.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
