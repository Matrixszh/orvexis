import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Cog,
  Headphones,
  LayoutDashboard,
  Link2,
  Megaphone,
  PieChart,
  PlayCircle,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import LightRays from "@/components/LightRays";
import { SidebarMenu } from "../components/SidebarMenu";

export const metadata: Metadata = {
  title: "Product | Orvexis",
  description: "AI Copilot product page for Orvexis",
};

type IconItem = {
  title: string;
  description?: string;
  icon: LucideIcon;
};

const highlights: IconItem[] = [
  {
    title: "Fast Automation",
    description: "Automate repetitive tasks in seconds.",
    icon: Zap,
  },
  {
    title: "Smart AI Decisions",
    description: "AI models that learn and improve over time.",
    icon: BrainCircuit,
  },
  {
    title: "Multi-platform Integration",
    description: "Connect with your favorite tools seamlessly.",
    icon: Link2,
  },
  {
    title: "Real-time Insights",
    description: "Get instant insights to make better decisions.",
    icon: BarChart3,
  },
];

const capabilities = [
  {
    title: "Automate Workflows Effortlessly",
    description: "Build powerful workflows with our no-code automation engine.",
    points: ["Drag & drop automation", "AI decision-making", "Task scheduling"],
    panel: "workflow",
  },
  {
    title: "Text, Image & Voice Intelligence",
    description: "Interact with AI using text, images, and voice commands.",
    points: ["Chat & voice commands", "Image recognition", "Smart responses"],
    panel: "assistant",
  },
  {
    title: "Autonomous AI Agents",
    description: "Deploy AI agents that can think, learn, and act independently.",
    points: ["Self-learning agents", "Task execution", "Feedback loops"],
    panel: "agents",
  },
];

const useCases: IconItem[] = [
  { title: "Customer Support Automation", icon: Headphones },
  { title: "Sales AI Assistant", icon: BarChart3 },
  { title: "Marketing Optimization", icon: Megaphone },
  { title: "Data Analysis", icon: PieChart },
  { title: "Fraud Detection", icon: ShieldCheck },
  { title: "Operations Automation", icon: Cog },
];

const miniStats = [
  { label: "Total Tasks", value: "1,250", delta: "+12%" },
  { label: "Success Rate", value: "98.6%", delta: "+2.1%" },
  { label: "Time Saved", value: "320 h", delta: "+18.3%" },
  { label: "Cost Saved", value: "$24,560", delta: "+15.7%" },
];

const footerLinks = ["Home", "Services", "Work", "About", "Contact"];

function DashboardPreview() {
  return (
    <div className="rounded-[28px] border border-[#130FF7]/25 bg-[linear-gradient(180deg,rgba(10,14,30,0.98),rgba(4,7,18,0.98))] p-3 shadow-[0_0_70px_rgba(19,15,247,0.28)]">
      <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#050916]">
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <div className="flex items-center gap-2 text-sm font-medium text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#130FF7]/15 text-[#c7c6ff]">
              <Sparkles className="h-4 w-4" strokeWidth={1.5} />
            </div>
            AI Copilot
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/5 px-4 py-2 text-xs text-zinc-400 md:flex">
              <Search className="h-3.5 w-3.5" strokeWidth={1.5} />
              Search anything...
            </div>
            <Bell className="h-4 w-4 text-zinc-400" strokeWidth={1.5} />
            <div className="flex items-center gap-1">
              <div className="h-7 w-7 rounded-full bg-emerald-400/80" />
              <div className="h-7 w-7 rounded-full bg-amber-300/80" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-4 lg:grid-cols-[180px_minmax(0,1fr)]">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            <div className="space-y-2">
              {[
                { label: "Dashboard", icon: LayoutDashboard, active: true },
                { label: "Analytics", icon: BarChart3 },
                { label: "Automation", icon: Workflow },
                { label: "Agents", icon: Bot },
                { label: "Data", icon: PieChart },
                { label: "Settings", icon: Settings },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2 text-xs ${
                    item.active
                      ? "bg-[#130FF7]/15 text-white shadow-[0_0_20px_rgba(19,15,247,0.18)]"
                      : "text-zinc-400"
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {miniStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.04] p-4 shadow-[0_0_24px_rgba(59,130,246,0.08)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs text-emerald-400">{stat.delta}</p>
                  <div className="mt-3 h-10 rounded-xl bg-[linear-gradient(180deg,rgba(59,130,246,0.16),transparent)]" />
                </div>
              ))}
            </div>

            <div className="grid gap-3 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">Performance</h3>
                  <div className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    This week
                  </div>
                </div>
                <div className="relative h-40 overflow-hidden rounded-2xl bg-[linear-gradient(180deg,rgba(17,24,39,0.9),rgba(10,14,26,0.95))]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
                  <svg viewBox="0 0 400 180" className="absolute inset-0 h-full w-full">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 120 C40 70, 70 150, 110 105 S180 70, 220 95 S300 40, 340 55 S380 50, 400 45"
                      fill="none"
                      stroke="url(#lineGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                <h3 className="mb-5 text-sm font-semibold text-white">Recent Activity</h3>
                <div className="space-y-4">
                  {[
                    ["Workflow completed", "2m ago"],
                    ["Report generated", "18m ago"],
                    ["Anomaly detected", "30m ago"],
                    ["Agent deployed", "1h ago"],
                  ].map(([label, time]) => (
                    <div key={label} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.75)]" />
                        <span className="text-sm text-zinc-200">{label}</span>
                      </div>
                      <span className="text-xs text-zinc-500">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureHighlight({ title, description, icon: Icon }: IconItem) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 shadow-[0_0_30px_rgba(59,130,246,0.08)]">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#130FF7]/12 text-[#c7c6ff]">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="text-sm leading-6 text-zinc-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

function CapabilityPanel({ panel }: { panel: string }) {
  if (panel === "workflow") {
    return (
      <div className="rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(7,10,24,0.96),rgba(4,6,16,0.96))] p-4 shadow-[0_0_40px_rgba(79,70,229,0.12)]">
        <div className="rounded-[20px] border border-white/8 bg-[#060a16] p-5">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Workflow className="h-4 w-4 text-[#b4b2ff]" strokeWidth={1.5} />
              Workflow Builder
            </div>
            <div className="rounded-full bg-[#130FF7]/15 px-3 py-1 text-xs text-[#c7c6ff]">Save</div>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              "Trigger\nNew Lead",
              "AI Action\nScore Lead",
              "Send Email\nWelcome",
              "Update CRM\nAdd to Pipeline",
            ].map((item, index) => (
              <div key={item} className="relative rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                {index < 3 && (
                  <div className="absolute right-[-18px] top-1/2 hidden h-[2px] w-9 -translate-y-1/2 bg-gradient-to-r from-[#130FF7] to-transparent md:block" />
                )}
                <p className="whitespace-pre-line text-sm font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (panel === "assistant") {
    return (
      <div className="rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(7,10,24,0.96),rgba(4,6,16,0.96))] p-4 shadow-[0_0_40px_rgba(79,70,229,0.12)]">
        <div className="grid gap-4 rounded-[20px] border border-white/8 bg-[#060a16] p-5 lg:grid-cols-[140px_minmax(0,1fr)]">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
              <Bot className="h-4 w-4 text-indigo-300" strokeWidth={1.5} />
              AI Assistant
            </div>
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="h-8 rounded-xl bg-white/[0.04]" />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="ml-auto w-fit rounded-full bg-[#130FF7]/15 px-4 py-2 text-xs text-[#c7c6ff]">
              Analyze this data and summarize key insights.
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#130FF7]/15 text-[#c7c6ff]">
                <Sparkles className="h-4 w-4" strokeWidth={1.5} />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm text-zinc-300">Here are the key insights from your data:</p>
                <div className="space-y-2 text-sm text-zinc-400">
                  <p>• Revenue increased by 24% this month.</p>
                  <p>• Top-performing product: AI Copilot.</p>
                  <p>• New leads are trending in growth.</p>
                </div>
              </div>
              <div className="hidden h-24 w-28 rounded-xl bg-[linear-gradient(180deg,rgba(59,130,246,0.2),rgba(99,102,241,0.08))] md:block" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(7,10,24,0.96),rgba(4,6,16,0.96))] p-4 shadow-[0_0_40px_rgba(79,70,229,0.12)]">
      <div className="rounded-[20px] border border-white/8 bg-[#060a16] p-5">
        <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-white">
          <Bot className="h-4 w-4 text-[#b4b2ff]" strokeWidth={1.5} />
          AI Agents
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Research Agent", "Gathers information and insights"],
            ["Support Agent", "Handles customer queries and resolves issues"],
            ["Sales Agent", "Finds and qualifies leads automatically"],
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
              <h4 className="text-sm font-semibold text-white">{title}</h4>
              <p className="mt-2 text-xs leading-5 text-zinc-400">{description}</p>
              <div className="mt-4 inline-flex rounded-full bg-emerald-500/12 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-emerald-300">
                Active
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CapabilitySection({
  title,
  description,
  points,
  panel,
  reverse,
}: {
  title: string;
  description: string;
  points: string[];
  panel: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-6 ${
        reverse ? "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]" : "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
      }`}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <CapabilityPanel panel={panel} />
      </div>
      <div className={`space-y-4 rounded-[26px] border border-white/8 bg-white/[0.02] p-8 ${reverse ? "lg:order-1" : ""}`}>
        <h3 className="text-3xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="text-base leading-7 text-zinc-400">{description}</p>
        <div className="space-y-3 pt-2">
          {points.map((point) => (
            <div key={point} className="flex items-center gap-3 text-zinc-200">
              <CheckCircle2 className="h-5 w-5 text-[#b4b2ff]" strokeWidth={1.5} />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UseCaseCard({ title, icon: Icon }: IconItem) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 text-center shadow-[0_0_24px_rgba(79,70,229,0.08)]">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#130FF7]/12 text-[#c7c6ff]">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-200">{title}</p>
    </div>
  );
}

export default function ProductPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#03050c] text-white">
      <SidebarMenu />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:26px_26px] opacity-[0.08]" />

      <div className="relative mx-auto max-w-full px-6   md:px-10 lg:px-12">
        <section className="relative pb-10 pt-16">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden">
            <LightRays
              raysOrigin="top-center"
              raysColor="#130FF7"
              raysSpeed={1}
              lightSpread={0.55}
              rayLength={3}
              followMouse={true}
              mouseInfluence={0.08}
              noiseAmount={0}
              distortion={0}
              pulsating={false}
              fadeDistance={1}
              saturation={4}
            />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#03050c] via-[#03050c]/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#03050c] via-[#03050c]/85 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#03050c] via-[#03050c]/75 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#03050c] via-[#03050c]/75 to-transparent" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
                  Nexa Calling for Business Automation
                </h1>
                <p className="max-w-xl text-lg leading-8 text-zinc-300">
                  Streamline operations, boost productivity, and make smarter decisions with the power of AI.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-3 rounded-2xl bg-[#130FF7] px-6 py-4 text-sm font-medium text-white shadow-[0_0_30px_rgba(19,15,247,0.3)]">
                  Start Now
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-medium text-white">
                  <PlayCircle className="h-4 w-4" strokeWidth={1.5} />
                  Contact Us
                </button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#b4b2ff]" strokeWidth={1.5} />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#b4b2ff]" strokeWidth={1.5} />
                  14-day free trial
                </div>
              </div>
            </div>

            <DashboardPreview />
          </div>
        </section>

        <section className="grid gap-4 py-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <FeatureHighlight key={item.title} {...item} />
          ))}
        </section>

        <section className="space-y-8 py-8">
          {capabilities.map((capability, index) => (
            <CapabilitySection
              key={capability.title}
              title={capability.title}
              description={capability.description}
              points={capability.points}
              panel={capability.panel}
              reverse={index % 2 === 1}
            />
          ))}
        </section>

        <section className="py-10">
          <h2 className="mb-8 text-center text-3xl font-semibold text-white">Popular Use Cases</h2>
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {useCases.map((useCase) => (
              <UseCaseCard key={useCase.title} {...useCase} />
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className="rounded-[28px] border border-[#130FF7]/20 bg-[linear-gradient(90deg,rgba(19,15,247,0.2),rgba(19,15,247,0.1),rgba(255,255,255,0.03))] px-8 py-8 shadow-[0_0_50px_rgba(19,15,247,0.12)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <h3 className="text-3xl font-semibold tracking-tight text-white">
                  Ready to Transform Your Business with AI?
                </h3>
                <p className="max-w-2xl text-base leading-7 text-zinc-300">
                  Join thousands of companies already using AI Copilot to automate, optimize, and grow.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-3 rounded-2xl bg-[#130FF7] px-6 py-4 text-sm font-medium text-white shadow-[0_0_30px_rgba(19,15,247,0.3)]">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-medium text-white">
                  Book a Demo
                  <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-zinc-950 -mx-6 lg:-mx-12">
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
                  <a key={link} href="#" className="transition-colors duration-300 hover:text-white">
                    {link}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 lg:items-end">
                <span>Contact@orvexis.com</span>
                <span>© 2026 Orvexis. All rights reserved.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
