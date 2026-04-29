"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Accueil",  href: "/" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact",  href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_1px_12px_rgba(30,19,64,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/40 rounded-lg"
          >
            <Image
                src="/logo.png"
                alt="MD Transition"
                width={1435}
                height={716}
                className="h-9 lg:h-11 w-auto object-contain"
                priority
              />
          </Link>

          {/* ── Navigation desktop ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-[13.5px] font-medium rounded-lg transition-colors duration-150",
                    active
                      ? "text-navy"
                      : "text-slate-500 hover:text-navy hover:bg-slate-50"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-orange" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── CTA desktop ── */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-1.5 bg-orange text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-xl shadow-orange-sm hover:bg-orange-700 hover:-translate-y-px hover:shadow-orange transition-all duration-200"
            >
              Prendre RDV
            </Link>
          </div>

          {/* ── Burger mobile ── */}
          <button
            onClick={() => setIsOpen(v => !v)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl text-navy hover:bg-slate-100 transition-colors"
          >
            <span className={cn(
              "absolute transition-all duration-150",
              isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
            )}>
              <ListIcon size={21} weight="bold" />
            </span>
            <span className={cn(
              "absolute transition-all duration-150",
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
            )}>
              <XIcon size={21} weight="bold" />
            </span>
          </button>
        </div>
      </div>

      {/* ── Menu mobile ── */}
      <div
        className={cn(
          "lg:hidden overflow-hidden bg-white transition-[max-height,opacity] duration-200 ease-out",
          isOpen ? "max-h-[400px] opacity-100 border-t border-slate-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium transition-all min-h-[48px]",
                pathname === link.href
                  ? "bg-orange/10 text-navy font-semibold border-l-[3px] border-orange"
                  : "text-slate-600 hover:bg-slate-50 hover:text-navy"
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-2 pb-1">
            <Link
              href="/rendez-vous"
              className="flex items-center justify-center bg-orange text-white px-5 py-3.5 rounded-xl font-bold text-[15px] hover:bg-orange-700 transition-all min-h-[48px] shadow-orange-sm"
            >
              Prendre RDV
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
