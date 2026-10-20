"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [initialAnimDone, setInitialAnimDone] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    if (isMobileOpen) return;

    const currentScrollY = window.scrollY;

    setIsScrolled(currentScrollY > 20);

    const heroElement = document.getElementById("home");
    const heroBottom = heroElement
      ? heroElement.offsetTop + heroElement.offsetHeight
      : 0;

    if (currentScrollY > heroBottom) {
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      }
    } else {
      setIsVisible(true);
    }

    lastScrollY.current = currentScrollY;
  }, [isMobileOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : "-100%" }}
        transition={
          initialAnimDone
            ? { duration: 0.3, ease: "easeInOut" }
            : { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
        }
        onAnimationComplete={() => {
          if (!initialAnimDone) setInitialAnimDone(true);
        }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          isScrolled
            ? "bg-white/90 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="relative h-8 w-30 sm:h-10 sm:w-36 lg:h-12 lg:w-40"
          >
            <Image
              src="/logo.png"
              alt="Slaagsnel Rijschool"
              fill
              className={`object-contain object-left transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? "text-primary hover:bg-primary/5 hover:text-secondary"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#inschrijven")}
              className={`ml-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? "bg-secondary text-white hover:bg-secondary-dark hover:shadow-lg hover:shadow-secondary/25"
                  : "bg-white/15 text-white backdrop-blur-sm border border-white/25 hover:bg-white/25"
              }`}
            >
              Inschrijven
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`relative z-50 rounded-lg p-2 transition-colors md:hidden ${
              isMobileOpen
                ? "text-primary hover:bg-primary/5"
                : isScrolled
                  ? "text-primary hover:bg-primary/5"
                  : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu openen"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Slide-in menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-72 bg-white px-6 pt-24 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    onClick={() => handleNavClick(link.href)}
                    className="rounded-lg px-4 py-3 text-left text-base font-medium text-primary transition-colors hover:bg-primary/5 hover:text-secondary"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
                  onClick={() => handleNavClick("#inschrijven")}
                  className="mt-4 rounded-full bg-secondary py-3 text-center text-base font-semibold text-white transition-colors hover:bg-secondary-dark"
                >
                  Schrijf je in!
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
