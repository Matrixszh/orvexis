import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";
import LightRays from "@/components/LightRays";
import { SidebarMenu } from "../components/SidebarMenu";

export const metadata: Metadata = {
  title: "Contact | Orvexis",
  description: "Contact Orvexis to discuss your next product, automation, or software project.",
};

type ContactCard = {
  title: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

const contactCards: ContactCard[] = [
  {
    title: "Address",
    value: "123 AI Avenue, Suite 400",
    detail: "San Francisco, CA 94105 USA",
    icon: MapPin,
  },
  {
    title: "Phone",
    value: "+1 (415) 123-4567",
    detail: "Mon - Fri, 9AM - 6PM PT",
    icon: Phone,
  },
  {
    title: "Email",
    value: "hello@orvexis.com",
    detail: "We reply within 24 hours",
    icon: Mail,
  },
  {
    title: "Website",
    value: "www.orvexis.com",
    detail: "Learn more about us",
    icon: Globe,
  },
];

const faqItems = [
  "What services do you offer?",
  "Do you offer ongoing support?",
  "How long does integration take?",
  "Can you work with our existing tools?",
  "Is my data secure?",
  "Can you explain your pricing model?",
];

const footerLinks = ["Home", "Services", "Work", "About", "Contact"];

function ContactInfoCard({ title, value, detail, icon: Icon }: ContactCard) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 shadow-[0_0_30px_rgba(19,15,247,0.08)]">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#130FF7]/12 text-[#c7c6ff]">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="text-sm font-medium text-zinc-200">{value}</p>
          <p className="text-sm text-zinc-400">{detail}</p>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#03050c] text-white">
      <SidebarMenu />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:26px_26px] opacity-[0.08]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 md:px-10 lg:px-12">
        <section className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(3,5,12,0.96),rgba(5,8,20,0.96))] px-6 pb-8 pt-20 shadow-[0_0_60px_rgba(19,15,247,0.08)] md:px-8 lg:px-10">
          <div className="pointer-events-none absolute inset-0">
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
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#03050c] via-[#03050c]/75 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#03050c] via-[#03050c]/80 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#03050c] via-[#03050c]/70 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#03050c] via-[#03050c]/70 to-transparent" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-[#130FF7]/20 bg-[#130FF7]/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#c7c6ff]">
                Contact Us
              </div>
              <div className="space-y-4">
                <h1 className="max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-7xl">
                  Let’s Build Something Intelligent Together
                </h1>
                <p className="max-w-xl text-lg leading-8 text-zinc-300">
                  Have a project or idea? Reach out and let’s bring AI, automation, and premium product thinking into your business.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-[#130FF7]/20 bg-[linear-gradient(180deg,rgba(8,12,30,0.9),rgba(6,9,22,0.95))] p-4 shadow-[0_0_60px_rgba(19,15,247,0.16)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(19,15,247,0.24),transparent_25%),radial-gradient(circle_at_35%_70%,rgba(255,255,255,0.08),transparent_18%)]" />
              <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-[22px] border border-white/8 bg-[#050916]">
                <div className="absolute h-[320px] w-[320px] rounded-full border border-[#130FF7]/25 bg-[radial-gradient(circle,rgba(19,15,247,0.18),transparent_62%)] shadow-[0_0_80px_rgba(19,15,247,0.2)]" />
                <div className="absolute h-[280px] w-[280px] rounded-full border border-white/8 opacity-70" />
                <div className="absolute h-[220px] w-[220px] rounded-full border border-[#130FF7]/20 opacity-80" />
                <div className="absolute h-[160px] w-[160px] rounded-full border border-white/10 opacity-60" />
                <div className="absolute inset-0">
                  <svg viewBox="0 0 600 320" className="h-full w-full opacity-80">
                    <path
                      d="M20 220 C120 120, 160 260, 270 170 S420 40, 580 140"
                      fill="none"
                      stroke="rgba(19,15,247,0.95)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M40 120 C150 60, 220 200, 340 110 S480 30, 560 90"
                      fill="none"
                      stroke="rgba(173,170,255,0.7)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M70 260 C170 200, 250 280, 360 200 S500 120, 560 180"
                      fill="none"
                      stroke="rgba(255,255,255,0.35)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {[
                  "left-[15%] top-[35%]",
                  "left-[30%] top-[58%]",
                  "left-[54%] top-[24%]",
                  "left-[72%] top-[42%]",
                  "left-[82%] top-[18%]",
                ].map((position) => (
                  <div
                    key={position}
                    className={`absolute ${position} h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 py-6 md:grid-cols-2 xl:grid-cols-4">
          {contactCards.map((card) => (
            <ContactInfoCard key={card.title} {...card} />
          ))}
        </section>

        <section className="grid gap-6 py-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="rounded-[28px] border border-white/8 bg-white/[0.03] p-7 shadow-[0_0_40px_rgba(19,15,247,0.08)]">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-white">Send Us a Message</h2>
              <p className="max-w-xl text-base leading-7 text-zinc-400">
                We’d love to hear about your project. Fill out the form and our team will get back to you soon.
              </p>
            </div>
            <div className="mt-8 space-y-5">
              {[
                { label: "Full Name", placeholder: "Enter your name" },
                { label: "Email Address", placeholder: "Enter your email" },
                { label: "Company", placeholder: "Enter your company" },
              ].map((field) => (
                <label key={field.label} className="block space-y-2">
                  <span className="text-sm font-medium text-zinc-200">{field.label}</span>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="h-14 w-full rounded-2xl border border-white/8 bg-[#060a16] px-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-zinc-500 focus:border-[#130FF7]/50"
                  />
                </label>
              ))}
              <label className="block space-y-2">
                <span className="text-sm font-medium text-zinc-200">Message</span>
                <textarea
                  placeholder="Tell us about your project or how we can help..."
                  rows={5}
                  className="w-full rounded-2xl border border-white/8 bg-[#060a16] px-4 py-4 text-sm text-white outline-none transition-colors duration-300 placeholder:text-zinc-500 focus:border-[#130FF7]/50"
                />
              </label>
              <button className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#130FF7] px-6 py-4 text-sm font-medium text-white shadow-[0_0_30px_rgba(19,15,247,0.25)]">
                <Send className="h-4 w-4" strokeWidth={1.5} />
                Send Message
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.03] shadow-[0_0_40px_rgba(19,15,247,0.08)]">
              <div className="relative h-[260px] border-b border-white/8 bg-[linear-gradient(180deg,rgba(8,12,30,0.92),rgba(5,8,20,0.96))]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
                <div className="absolute left-[18%] top-[26%] h-2 w-2 rounded-full bg-white/60" />
                <div className="absolute left-[45%] top-[56%] h-2 w-2 rounded-full bg-white/60" />
                <div className="absolute left-[70%] top-[36%] h-2 w-2 rounded-full bg-white/60" />
                <div className="absolute left-[60%] top-[44%] flex h-14 w-14 items-center justify-center rounded-full bg-[#130FF7] text-white shadow-[0_0_30px_rgba(19,15,247,0.4)]">
                  <MapPin className="h-6 w-6" strokeWidth={1.8} />
                </div>
              </div>
              <div className="grid gap-5 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-white">Our Location</h3>
                  <p className="text-base leading-7 text-zinc-300">
                    123 AI Avenue, Suite 400
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
                <button className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#130FF7] px-5 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(19,15,247,0.25)]">
                  Get Directions
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-white/[0.03] p-7 shadow-[0_0_40px_rgba(19,15,247,0.08)]">
              <h3 className="text-2xl font-semibold text-white">Why Choose Us?</h3>
              <div className="mt-5 space-y-4">
                {[
                  "AI experts with proven experience",
                  "Custom solutions for your business",
                  "Fast response and clear communication",
                  "Secure and scalable implementations",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 text-zinc-200">
                    <CheckCircle2 className="h-5 w-5 text-[#b4b2ff]" strokeWidth={1.5} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold text-white">Frequently Asked Questions</h2>
            <p className="mt-3 text-base text-zinc-400">Find answers to common questions.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <button
                key={item}
                className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 text-left text-sm text-zinc-200 transition-colors duration-300 hover:border-[#130FF7]/35 hover:bg-white/[0.05]"
              >
                <span>{item}</span>
                <ChevronDown className="h-4 w-4 text-zinc-400" strokeWidth={1.5} />
              </button>
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className="rounded-[28px] border border-[#130FF7]/20 bg-[linear-gradient(90deg,rgba(19,15,247,0.2),rgba(19,15,247,0.1),rgba(255,255,255,0.03))] px-8 py-8 shadow-[0_0_50px_rgba(19,15,247,0.12)]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-3">
                <h3 className="text-3xl font-semibold tracking-tight text-white">Still Have Questions? Let’s Talk</h3>
                <p className="max-w-2xl text-base leading-7 text-zinc-300">
                  Schedule a call with our team and let’s discuss your project.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-3 rounded-2xl bg-[#130FF7] px-6 py-4 text-sm font-medium text-white shadow-[0_0_30px_rgba(19,15,247,0.3)]">
                  Schedule Call
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-medium text-white">
                  Contact Sales
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
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
