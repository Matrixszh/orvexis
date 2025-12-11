"use client"
import Image from "next/image";
import { SidebarMenu } from "./components/SidebarMenu";
import CountUp from "./components/CountUp";
import { OriginSection } from "./components/OriginSection";
import { OriginStorySection } from "./components/OriginStorySection";
import BlurText from "./components/BlurText";
import DarkVeil from "./components/DarkVeil";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 overflow-hidden">
        <SidebarMenu />
      <section className="w-full h-full">
        <DarkVeil />
      </section>
      <section className="">
        <OriginSection />
        </section>
        <OriginStorySection />
    </main>
  );
}
