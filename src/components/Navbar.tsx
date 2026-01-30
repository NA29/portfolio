"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cleanContent } from "@/data/portfolio";
import { cn } from "@/lib/utils"; // We need to create this util or just use template literals

// Simple utility if we don't have the lib/utils one yet
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const { navbar } = cleanContent;

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between gap-4 rounded-full border-[2px] border-[#7d7d7d2b] bg-[#d3d3d357] backdrop-blur-[10px] px-6 h-[55px] min-w-[50vw] max-w-[1000px] shadow-none">
        {/* Logo Section */}
        <Link href="/" className="flex-shrink-0">
            <img src="/signature-final.png" alt="Nathan Audegond Signature" className="h-8 w-auto hover:opacity-80 transition-opacity" />
        </Link>

        {/* Links Section */}
        <div className="flex items-center gap-1">
            {navbar.map((item) => {
            const isActive = pathname === item.path;
            return (
                <Link
                key={item.path}
                href={item.path}
                className={classNames(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full",
                    isActive ? "text-[#1a1a1a]" : "text-[#1a1a1a]/60 hover:text-[#1a1a1a]"
                )}
                >
                <span className="relative z-10">{item.name}</span>
                </Link>
            );
            })}
        </div>
      </nav>
    </div>
  );
}
