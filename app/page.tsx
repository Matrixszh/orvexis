"use client";

import { SidebarMenu } from "./components/SidebarMenu";
import DarkVeil from "./components/DarkVeil";
import { OriginSection } from "./components/OriginSection";
import SpotlightCard from "@/components/SpotlightCard";

import {
  CodeBracketIcon,
  CubeIcon,
  ChartBarIcon,
  UsersIcon,
  CloudIcon,
  PhotoIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    title: "AI Code Assistant",
    description:
      "Debug, refactor, and document complex codebases with intelligent suggestions.",
    icon: CodeBracketIcon,
  },
  {
    title: "Design System",
    description: "Ship consistent, on-brand experiences with a unified component library.",
    icon: CubeIcon,
  },
  {
    title: "Analytics Dashboard",
    description: "Track product health with real-time metrics and anomaly alerts.",
    icon: ChartBarIcon,
  },
  {
    title: "Team Collaboration",
    description: "Keep product, design, and engineering aligned in one workspace.",
    icon: UsersIcon,
  },
  {
    title: "API Gateway",
    description: "Secure, observe, and throttle backend services at the edge.",
    icon: CloudIcon,
  },
  {
    title: "Content Studio",
    description: "Plan and publish content across every channel from a single view.",
    icon: PhotoIcon,
  },
  {
    title: "Automation Flows",
    description: "Automate repetitive workflows with event-driven pipelines.",
    icon: BoltIcon,
  },
];

export default function Home() {
  return (
    <main className="bg-black text-zinc-100 overflow-hidden min-h-screen">
      <SidebarMenu />

      <section className="w-full h-full">
        <DarkVeil />
      </section>

      <section className="px-6 py-16 lg:px-12">
        <OriginSection />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, description, icon: Icon }) => (
            <SpotlightCard
              key={title}
              className="group"
              // optional: override spotlight to be even darker/brighter
              // spotlightColor="rgba(2, 8, 50, 0.7)"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div
                    className="
                      inline-flex h-11 w-11 items-center justify-center rounded-2xl
                      bg-blue-600/30 text-blue-50
                      ring-1 ring-blue-300/40
                      shadow-[0_0_32px_rgba(37,99,235,0.9)]
                      group-hover:bg-blue-500/40
                      transition-colors duration-300
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                    Module
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {description}
                  </p>
                </div>

                <button
                  className="
                    mt-1 inline-flex items-center gap-2 self-start rounded-full
                    bg-blue-700/30 px-4 py-1.5 text-xs font-medium
                    text-blue-100 ring-1 ring-blue-400/40
                    hover:bg-blue-600/45 hover:ring-blue-300/70
                    transition-all duration-300
                  "
                >
                  Open module
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,1)]" />
                </button>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>
    </main>
  );
}
