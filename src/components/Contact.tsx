"use client";

import { Phone, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { PHONE_NUMBER } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Neem <span className="text-secondary">contact</span> op
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            Heb je vragen? Neem gerust contact met ons op.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-12 flex justify-center">
          <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-background-alt p-6 shadow-sm transition-all hover:border-secondary/20 hover:shadow-md sm:p-8"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-secondary/10 group-hover:text-secondary">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Telefoon</p>
                <p className="mt-0.5 text-sm text-text-light transition-colors group-hover:text-secondary">
                  {PHONE_NUMBER}
                </p>
              </div>
            </a>

            <a
              href="mailto:F.Sadloe1@outlook.com"
              className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-background-alt p-6 shadow-sm transition-all hover:border-secondary/20 hover:shadow-md sm:p-8"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary transition-colors group-hover:bg-secondary/10 group-hover:text-secondary">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">E-mail</p>
                <p className="mt-0.5 text-sm text-text-light transition-colors group-hover:text-secondary">
                  F.Sadloe1@outlook.com
                </p>
              </div>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
