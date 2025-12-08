"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Work", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export function SidebarMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <header className="flex items-center bg-zinc-950 justify-between px-6 py-6 md:px-12">
        <span className="text-white text-lg tracking-[0.25em] font-semibold uppercase">
          ORVEXIS
        </span>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase"
        >
          {/* 4-line hamburger */}
          <span className="flex flex-col gap-[3px]">
            <span className="h-[1px] w-7 bg-white" />
            <span className="h-[1px] w-7 bg-white" />
            <span className="h-[1px] w-7 bg-white" />
          </span>
          <span className="text-md text-white">Menu</span>
        </button>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Right sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-full bg-zinc-900 text-zinc-50
        transform transition-transform duration-300 ease-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="text-sm tracking-[0.25em] font-semibold uppercase">
            Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-xs tracking-[0.25em] uppercase text-zinc-400"
          >
            Close
          </button>
        </div>

        <nav className="mt-4 space-y-3 px-6 text-sm">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-2 tracking-[0.25em] uppercase text-zinc-300 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
