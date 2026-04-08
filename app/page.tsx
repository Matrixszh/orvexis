"use client";

import Image from "next/image";
import Link from "next/link";
import { SidebarMenu } from "./components/SidebarMenu";
import DarkVeil from "./components/DarkVeil";
import DotGrid from "@/components/DotGrid";
import { OriginSection } from "./components/OriginSection";
import { NexaCallingShowcase } from "./components/NexaCallingShowcase";
import SpotlightCard from "@/components/SpotlightCard";

import {
  CodeBracketIcon,
  CubeIcon,
  ChartBarIcon,
  UsersIcon,
  CloudIcon,
  PhotoIcon,
  BoltIcon,
  SparklesIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import MagicBento from "@/components/MagicBento";

const cards = [
  {
    title: "Web Application Development",
    description:
      "Design and develop secure, scalable web applications aligned with your organization’s strategic objectives.",
    icon: CodeBracketIcon,
  },
  {
    title: "Mobile Application Development",
    description:
      "Build robust Android and iOS applications that deliver reliable performance and seamless user experiences.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "Custom Software Solutions",
    description:
      "Address complex business requirements with tailor-made software solutions engineered for scalability and reliability.",
    icon: CubeIcon,
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <main className="bg-black text-zinc-100 overflow-hidden min-h-screen">
      <SidebarMenu />

      <section className="w-full h-full">
        <DarkVeil />
      </section>

      <section className="px-6 pt-16 lg:px-12">
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

        <div className="mt-24">
          <NexaCallingShowcase />
          <div className="mt-10">
            <MagicBento
              textAutoHide={true}
              enableStars
              enableSpotlight
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect
              spotlightRadius={400}
              particleCount={30}
              glowColor="19, 15, 247"
              disableAnimations={false}
            />
          </div>
        </div>

        <div className="relative mt-20 h-[600px] overflow-hidden bg-black -mx-6 lg:-mx-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[1080px] w-[100vw] max-w-full">
              <DotGrid
                dotSize={6}
                gap={46}
                baseColor="#130ff7"
                activeColor="#ffffff"
                proximity={150}
                speedTrigger={190}
                shockRadius={200}
                shockStrength={13}
                maxSpeed={5000}
                resistance={750}
                returnDuration={1.5}
              />
            </div>
          </div>
          <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">
            <div className="max-w-full space-y-6">
              <p className="text-xl font-medium text-white/90 md:text-6xl">
                Want to test the product? 
              </p>
              <p className="text-lg font-light text-white/90 md:text-xl">
                Contact us and experience NexaCalling in action.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-16">
                <button className="inline-flex min-w-[150px] items-center justify-center rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-100">
                  View More
                </button>
                <button className="inline-flex min-w-[150px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
                  Contact
                </button>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-black via-black/70 to-transparent" />
        </div>

        <footer className=" border-t border-white/10 bg-black -mx-6 lg:-mx-12">
          <div className="flex flex-col gap-10 px-6 py-10 md:px-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <Image src="/ologo.png" alt="Orvexis" width={176} height={44} className="h-10 w-auto object-contain" />
              <p className="max-w-xl text-sm leading-7 text-zinc-400">
                Building launch-ready digital products, communication systems, and premium software
                experiences that scale with modern teams.
              </p>
            </div>

            <div className="flex flex-col gap-6 lg:items-end">
              <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.25em] text-zinc-400">
                {footerLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="transition-colors duration-300 hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 lg:items-end">
                <span>Contact@orvexis.com</span>
                <span>© 2026 Orvexis. All rights reserved.</span>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
