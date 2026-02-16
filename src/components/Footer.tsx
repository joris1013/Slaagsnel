"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  ArrowUp,
  Clock,
  Car,
} from "lucide-react";
import { PHONE_NUMBER, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import AnimatedSection from "./AnimatedSection";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      {/* Decorative gradient top border */}
      <div className="h-1 bg-gradient-to-r from-secondary via-secondary-light to-secondary" />

      {/* CTA Banner */}
      <div className="relative border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-light/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-sm sm:flex-row sm:px-10 sm:py-10">
              <div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Klaar om te starten?
                </h3>
                <p className="mt-2 max-w-md text-white/60">
                  Schrijf je vandaag nog in en profiteer van onze examen actie.
                  Wij helpen je snel en veilig aan je rijbewijs!
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick("#inschrijven")}
                  className="whitespace-nowrap rounded-full bg-secondary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-secondary/30 transition-colors hover:bg-secondary-dark"
                >
                  Schrijf je in
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-center text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                >
                  WhatsApp ons
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Logo & description - wider column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="relative h-12 w-48">
              <Image
                src="/logo.png"
                alt="Slaagsnel"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Betaalbare en kwalitatieve rijlessen. Snel, betrouwbaar en
              persoonlijk op weg naar je rijbewijs.
            </p>

            {/* Quick highlights */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <Clock size={14} className="text-secondary" />
                </div>
                <span className="text-sm text-white/50">80 minuten per les</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <Car size={14} className="text-secondary" />
                </div>
                <span className="text-sm text-white/50">Alle examenroutes</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Navigatie
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-white/50 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Pakketten */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Pakketten
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <button
                  onClick={() => handleNavClick("#prijzen")}
                  className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-secondary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary/50 transition-colors group-hover:bg-secondary" />
                  Losse Les - €75 / 80 min
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#prijzen")}
                  className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-secondary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary/50 transition-colors group-hover:bg-secondary" />
                  Totaalpakket - Vast bedrag
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("#prijzen")}
                  className="group flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-secondary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary/50 transition-colors group-hover:bg-secondary" />
                  Examen Actie - €180
                  <span className="rounded-full bg-secondary/20 px-1.5 py-0.5 text-[10px] font-semibold text-secondary">
                    ACTIE
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact
            </h4>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="group flex items-center gap-3 transition-colors"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-secondary/20">
                    <Phone size={15} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40">Bel ons</p>
                    <p className="text-sm font-medium text-white/70 transition-colors group-hover:text-secondary">
                      {PHONE_NUMBER}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@slaagsnel.nl"
                  className="group flex items-center gap-3 transition-colors"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-secondary/20">
                    <Mail size={15} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40">E-mail</p>
                    <p className="text-sm font-medium text-white/70 transition-colors group-hover:text-secondary">
                      info@slaagsnel.nl
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Rijschool Slaagsnel. Alle rechten
            voorbehouden.
          </p>

          {/* Back to top */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/50 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80"
          >
            <ArrowUp size={14} />
            Terug naar boven
          </motion.button>
        </div>
      </div>

      {/* Extra padding on mobile for WhatsApp button */}
      <div className="h-16 sm:h-0" />
    </footer>
  );
}
