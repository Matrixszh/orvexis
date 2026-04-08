"use client";

import { useMemo } from "react";
import TargetCursor from "@/components/TargetCursor";

function isDesktopLike(): boolean {
  if (typeof window === "undefined") return false;
  const fine = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
  const touchPoints = navigator.maxTouchPoints ?? 0;
  return fine && touchPoints === 0;
}

export default function CursorGate() {
  const enable = useMemo(() => isDesktopLike(), []);
  if (!enable) return null;
  return (
    <TargetCursor
      targetSelector="a, button, [role='button'], input, textarea, select, .cursor-target"
      spinDuration={2}
      hideDefaultCursor
      parallaxOn
      hoverDuration={0.2}
    />
  );
}
