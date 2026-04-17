import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  MessageSquare,
  PhoneCall,
  Bot,
  PlugZap,
} from "lucide-react";
import { SidebarMenu } from "../components/SidebarMenu";
import { DevicePhoneMobileIcon } from "@heroicons/react/16/solid";
import RippleGrid from "@/components/RippleGrid";
import FaqAccordion from "../components/FaqAccordion";
import UIButton from "../components/UIButton";

export const metadata: Metadata = {
  title: "Services | Orvexis",
  description: "AI-powered services that automate processes, unlock insights, and help your business scale.",
};

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Product", href: "/product" },
  { label: "Contact", href: "/contact" },
];

const solutions = [
  {
  title: "Web Solutions",
  desc:
    "Build scalable and high-performance web solutions tailored to your business needs, including custom CRM, ERP, and inventory management systems designed to streamline operations, improve efficiency, and support growth.",
  icon: DevicePhoneMobileIcon,
},
  { title: "Custom Solutions",
  desc:"Develop fully tailored digital solutions to meet unique business requirements, from advanced automation tools to bespoke platforms that solve complex challenges and adapt as your business evolves.",
  icon: DevicePhoneMobileIcon,
},
  {
    title: "Custom AI Agents",
    desc: "Tailored AI solutions that automate your unique business processes end-to-end.",
    icon: Bot,
  },
  {
    title: "AI Integrations",
    desc: "Connect your favorite tools and data for seamless AI-powered workflows.",
    icon: PlugZap,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <SidebarMenu />

      <div className="relative mx-auto max-w-full pt-16 pb-16 ">
        {/* Hero */}
        <section className="relative overflow-hidden  bg-black px-6 md:px-12 pb-24 pt-24  ">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black" />
              <div className="absolute inset-0">
                <RippleGrid
                  enableRainbow={false}
                  gridColor="#130ff7"
                  rippleIntensity={0.05}
                  gridSize={10}
                  gridThickness={20}
                  fadeDistance={2}
                  vignetteStrength={2}
                  glowIntensity={1.1}
                  opacity={1}
                  gridRotation={0}
                  mouseInteraction={true}
                  mouseInteractionRadius={1}
                />
              </div>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            <div className="space-y-8 max-w-3xl">
             
              <div className="space-y-4">
                <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                  Solutions That Work. Results That Scale.
                </h1>
                <p className="text-lg leading-8 text-zinc-300">
                  We build intelligent systems that automate processes, unlock insights, and help your business grow faster.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <UIButton href="/contact" className="bg-[#130FF7] text-white border border-[#130FF7]/30 shadow-[0_0_30px_rgba(19,15,247,0.3)]">
                  Start Your Journey
                </UIButton>
                <UIButton href="#info" className="border border-white/10 bg-white/[0.04] text-white">
                  Explore Services
                </UIButton>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#b4b2ff]" strokeWidth={1.5} />
                  1,000+ Businesses Trust Us
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#b4b2ff]" strokeWidth={1.5} />
                  98% Customer Satisfaction
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#b4b2ff]" strokeWidth={1.5} />
                  40% Average Cost Savings
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Solutions */}
        <section className="py-10 px-10" id="info">
          <h2 className="mb-6 text-center text-3xl font-semibold text-white">Our Core Solutions</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border p-6 shadow-[0_18px_60px_rgba(0,0,0,0.95)] transition-transform duration-300 hover:-translate-y-0.5 backdrop-blur-2xl backdrop-saturate-150"
                style={{
                  borderColor: "rgba(19,15,247,0.25)",
                  background:
                    "linear-gradient(135deg, rgba(19,15,247,0.35), rgba(19,15,247,0.16) 35%, rgba(0,0,0,0.78) 100%)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(380px circle at 30% 20%, rgba(19,15,247,0.22) 0%, rgba(19,15,247,0.1) 35%, transparent 70%)",
                    mixBlendMode: "screen",
                  }}
                />
                <div className="relative space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#130FF7]/15 text-[#c7c6ff] ring-1 ring-white/10">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-6 text-zinc-300">{desc}</p>
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Value Panels */}
        <section className="grid px-10 gap-6 py-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,30,0.9),rgba(5,8,20,0.95))] p-6 shadow-[0_0_40px_rgba(19,15,247,0.12)]">
            <h3 className="text-2xl font-semibold text-white">What You Get</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Workflow Automation",
                "AI‑Powered Insights",
                "Seamless Integrations",
                "Secure & Scalable",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 text-zinc-200">
                  <CheckCircle2 className="h-5 w-5 text-[#b4b2ff]" strokeWidth={1.5} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,30,0.9),rgba(5,8,20,0.95))] p-6 shadow-[0_0_40px_rgba(19,15,247,0.12)]">
            <h3 className="text-2xl font-semibold text-white">Why Businesses Choose Us</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Proven Expertise",
                "Custom Solutions",
                "Fast Implementation",
                "Ongoing Support",
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 text-zinc-200">
                  <CheckCircle2 className="h-5 w-5 text-[#b4b2ff]" strokeWidth={1.5} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-10 px-10">
          <h3 className="mb-6 text-center text-2xl font-semibold text-white">How It Works</h3>
          <div className="grid gap-6 md:grid-cols-5">
            {["Discover", "Strategy", "Build", "Deploy", "Optimize"].map((step, i) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center shadow-[0_0_24px_rgba(19,15,247,0.08)]"
              >
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#130FF7]/15 text-[#c7c6ff] ring-1 ring-white/10">
                  <span className="text-sm">{i + 1}</span>
                </div>
                <p className="text-sm text-zinc-200">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ + CTA */}
        <section className="grid px-10 gap-6 py-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_40px_rgba(19,15,247,0.08)]">
            <h3 className="text-2xl font-semibold text-white">Frequently Asked Questions</h3>
            <div className="mt-4">
              <FaqAccordion
                items={[
                  {
                    q: "What services do you offer?",
                    a: "We design and build AI chatbots, voice agents, custom automation, and integrations tailored to your workflows.",
                  },
                  {
                    q: "Do you offer ongoing support?",
                    a: "Yes. We provide support and maintenance with monitoring, improvements, and SLAs on request.",
                  },
                  {
                    q: "How long does integration take?",
                    a: "Most pilots are delivered within 2–4 weeks depending on scope and data availability.",
                  },
                  {
                    q: "Can you integrate with our tools?",
                    a: "We integrate with CRMs, ticketing, analytics, and internal systems via APIs and webhooks.",
                  },
                  {
                    q: "Is my data secure?",
                    a: "We follow security best practices with encrypted transport and storage and can deploy in your cloud.",
                  },
                  {
                    q: "How do you price projects?",
                    a: "We offer fixed-scope pilots and ongoing plans. Pricing depends on complexity and usage.",
                  },
                ]}
              />
            </div>
          </div>
          <div className="rounded-[28px] border border-[#130FF7]/20 bg-[linear-gradient(90deg,rgba(19,15,247,0.2),rgba(19,15,247,0.1),rgba(255,255,255,0.03))] p-8 shadow-[0_0_50px_rgba(19,15,247,0.12)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <h3 className="text-3xl font-semibold tracking-tight text-white">Ready to Transform Your Business?</h3>
                <p className="max-w-2xl text-base leading-7 text-zinc-300">
                  Let’s build intelligent systems that save time and increase revenue.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <UIButton href="/contact" className="bg-[#130FF7] text-white border border-[#130FF7]/30 shadow-[0_0_30px_rgba(19,15,247,0.3)]">
                  Reach Out
                </UIButton>
                <UIButton href="/product" className="border border-white/10 bg-white/[0.04] text-white">
                  Explore Nexa
                </UIButton>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        
      </div>
      <footer className="px-10 border-t border-white/10 bg-black -mx-6 lg:-mx-12">
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
    </main>
  );
}
