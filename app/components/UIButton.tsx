"use client";

import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

export default function UIButton({ href, className = "", children }: Props) {
  const base =
    "inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-[0.25em] font-medium rounded-none transition-all duration-300 hover:scale-[1.02]";
  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    );
  }
  return <button className={`${base} ${className}`}>{children}</button>;
}
