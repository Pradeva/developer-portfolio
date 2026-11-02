'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./helper/theme-toggle";

const NAV_LINKS = [
  { href: "#about", label: "About", index: "01" },
  { href: "#experience", label: "Experience", index: "02" },
  { href: "#skills", label: "Skills", index: "03" },
  { href: "#projects", label: "Projects", index: "04" },
  { href: "#contact", label: "Contact", index: "05" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll body saat menu overlay terbuka.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-base/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
          <Link
            href="/"
            className="font-display text-xl font-bold tracking-tightest text-content"
          >
            P<span className="text-accent">F</span>Z
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-muted transition-colors hover:text-content"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-content transition-colors hover:border-accent hover:text-accent"
            >
              <FiMenu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay menu mobile fullscreen */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-base md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-xl font-bold text-content">
                P<span className="text-accent">F</span>Z
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-content hover:border-accent hover:text-accent"
              >
                <FiX size={18} />
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-8">
              {NAV_LINKS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-line py-5 group"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-accent">{item.index}</span>
                      <span className="font-display text-3xl font-semibold text-content group-hover:text-accent transition-colors">
                        {item.label}
                      </span>
                    </span>
                    <FiArrowUpRight className="text-muted group-hover:text-accent transition-colors" size={22} />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
