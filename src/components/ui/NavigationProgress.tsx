"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // Start bar on link click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      // Only same-site navigation (internal links starting with /)
      if (!href.startsWith("/") || href === pathname) return;

      clear();
      setVisible(true);
      setWidth(20);
      timerRef.current = setTimeout(() => setWidth(60), 200);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // Complete bar when route finishes loading
  useEffect(() => {
    clear();
    setWidth(100);
    timerRef.current = setTimeout(() => {
      setVisible(false);
      setWidth(0);
    }, 350);

    return clear;
  }, [pathname]);

  if (!visible && width === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[9999] h-[3px] bg-orange-400 pointer-events-none"
      style={{
        width: `${width}%`,
        opacity: visible ? 1 : 0,
        transition: width === 100
          ? "width 0.25s ease-out, opacity 0.35s ease-out 0.25s"
          : "width 0.4s ease-out",
      }}
    />
  );
}
