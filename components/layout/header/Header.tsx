"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, usePathname } from "@/i18n/routing";

import Navigation from "./Navigation";
import { LogoUnitAA } from "@/components/logo/LogoUnitAA";
import type { NavigationItem } from "@/types/header.type";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  navigation: NavigationItem[];
}

export default function Header({ navigation }: HeaderProps) {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sluit mobiel menu bij route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Main bar */}
      <div
        className={[
          "bg-[#0f1c3d] transition-shadow duration-300",
          scrolled
            ? "shadow-[0_4px_28px_rgba(10,18,40,0.32)]"
            : "",
        ].join(" ")}
      >
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-5 px-8 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Unit AA — Administratie & Advies"
            className="flex-shrink-0 transition-opacity duration-200 hover:opacity-90"
          >
            <LogoUnitAA className="h-auto w-[110px] md:w-[120px]" />
          </Link>

          {/* Desktop navigation */}
          <Navigation items={navigation} />

          {/* Desktop right */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/faq"
              className="rounded-lg px-[11px] py-[6px] text-[15px] font-medium text-white/55 transition-colors hover:text-white/85"
            >
              FAQ
            </Link>

            <LanguageSwitcher />

            <Link
              href="/contact"
              className="
                group inline-flex items-center gap-[7px]
                rounded-[10px] bg-[#3db54a]
                px-[17px] py-[9px]
                text-[15px] font-bold text-white
                transition-all duration-150
                hover:-translate-y-px hover:bg-[#30a83d]
                hover:shadow-[0_6px_18px_rgba(61,181,74,0.32)]
                active:translate-y-0 active:shadow-none
              "
            >
              Plan gratis gesprek
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-white/18 text-[11px] transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Sluit menu" : "Open menu"
            }
            aria-expanded={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen((prev) => !prev)
            }
            className="flex h-[38px] w-[38px] flex-shrink-0 flex-col items-center justify-center gap-[5px] rounded-[9px] border border-white/12 bg-white/6 lg:hidden"
          >
            <span
              className={[
                "block h-[1.5px] w-[17px] origin-center rounded-full bg-white/70 transition-transform duration-200",
                mobileMenuOpen
                  ? "translate-y-[6.5px] rotate-45"
                  : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[1.5px] w-[17px] rounded-full bg-white/70 transition-all duration-200",
                mobileMenuOpen
                  ? "scale-x-0 opacity-0"
                  : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-[1.5px] w-[17px] origin-center rounded-full bg-white/70 transition-transform duration-200",
                mobileMenuOpen
                  ? "-translate-y-[6.5px] -rotate-45"
                  : "",
              ].join(" ")}
            />
          </button>
        </div>
      </div>

      {/* Green accent line */}
      <div className="h-[2px] bg-gradient-to-r from-[#3db54a] to-[#3db54a]/8" />

      {/* Mobile menu */}
{mobileMenuOpen && (
  <div className="border-t border-white/6 bg-[#0b1630] lg:hidden">
    <div className="flex flex-col gap-1 px-[22px] pb-[22px] pt-[14px]">
      {/* Navigation items */}
      {navigation.map((item) => (
        <Link
          key={item.id}
          href={item.href as any}
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center justify-between rounded-[10px] border border-transparent px-[13px] py-[11px] text-[14px] font-medium text-white/60 transition-all hover:border-white/7 hover:bg-white/6 hover:text-white"
        >
          {item.name}
          <span className="text-[12px] opacity-40">›</span>
        </Link>
      ))}

      <Link
        href="/faq"
        onClick={() => setMobileMenuOpen(false)}
        className="flex items-center justify-between rounded-[10px] border border-transparent px-[13px] py-[11px] text-[14px] font-medium text-white/60 transition-all hover:border-white/7 hover:bg-white/6 hover:text-white"
      >
        FAQ
        <span className="text-[12px] opacity-40">›</span>
      </Link>

      <div className="mt-3">
        <LanguageSwitcher />
      </div>

      <Link
        href="/contact"
        onClick={() => setMobileMenuOpen(false)}
        className="mt-3 block rounded-[11px] bg-[#3db54a] py-[13px] text-center text-[14px] font-bold text-white transition-colors hover:bg-[#30a83d]"
      >
        Plan gratis gesprek →
      </Link>
    </div>
  </div>
)}
    </header>
  );
}