import Image from "next/image";
import { SidebarMenu } from "./components/SidebarMenu";
import CountUp from "./components/CountUp";
import { OriginSection } from "./components/OriginSection";
import { OriginStorySection } from "./components/OriginStorySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <SidebarMenu />
      

      {/* Hero */}
      <section className="flex flex-col justify-between px-6 pb-10 pt-8 md:px-12 md:pt-12 lg:h-[calc(100vh-80px)]">
        {/* Center number + subtitle */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <CountUp
  from={0}
  to={104}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text text-9xl text-[#807E7E]"
/>

          <p className="mt-3 text-xs tracking-[0.35em] uppercase text-zinc-400">
            Not a number but a standard
          </p>
        </div>

        {/* Bottom content */}
        <div className="mt-8 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-end">
          <div>
            <h1 className="text-2xl text-zinc-900 font-semibold tracking-tight md:text-4xl">
              Developing the next generation
              <br />
              of software solutions
            </h1>
            <p className="mt-4 max-w-xl text-md leading-relaxed text-zinc-500">
              We help AI &amp; SaaS founders turn complex ideas into clear,
              investor‑ready products and brands that users love. Built fast,
              designed to grow, and ready to ship.
            </p>
          </div>

          <div className="flex gap-4 md:justify-end">
            <button className="h-16 min-w-[150px] bg-[#CCCBCA] text-[#807E7E] text-sm uppercase tracking-[0.25em]">
              Contact
            </button>
            <button className="h-16 min-w-[150px] bg-[#807E7E] text-[#F2F0EF] text-sm uppercase tracking-[0.25em] ">
              Explore
            </button>
          </div>
          
        </div>
      </section>
      <OriginSection />
      <OriginStorySection />
    </main>
  );
}
