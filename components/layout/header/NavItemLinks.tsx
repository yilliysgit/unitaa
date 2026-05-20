"use client";

import { Link, usePathname } from "@/i18n/routing";
import { motion } from "framer-motion";
import type { NavigationItem } from "@/types/header.type";

interface NavItemLinksProps {
  item: NavigationItem;
  onClick?: () => void;
}

const clean = (path: string): string =>
  (path.split(/[?#]/)[0] || "/").replace(/\/+$/, "") || "/";

const computeActive = (pathname: string, href: NavigationItem["href"]): boolean => {
  const current = clean(pathname);

  // href kan een string of een object zijn
  const hrefString =
    typeof href === "string" ? href : href.pathname;

  const target = clean(hrefString);

  if (target === "/") return current === "/";
  return current === target || current.startsWith(target + "/");
}

export default function NavItemLinks({
  item,
  onClick,
}: NavItemLinksProps) {
  const pathname = usePathname() || "/";
  const active = computeActive(pathname, item.href);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className="relative block"
    >
      <motion.div
        className="relative px-3.5 py-2.5"
        initial={false}
      >
        <span
          className={`
            relative z-10
            text-[15px]
            font-medium
            tracking-[-0.01em]
            transition-colors duration-200
            ${
              active
                ? "text-white"
                : "text-white/60 hover:text-white/90"
            }
          `}
        >
          {item.name}
        </span>

        {active && (
          <motion.div
            layoutId="activeNav"
            className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-[#3db54a]"
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 35,
            }}
          />
        )}
      </motion.div>
    </Link>
  );
}