"use client";

import { motion } from "motion/react";
import { Route, Award, Target, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Route,
    title: "Alle Examenroutes",
    description:
      "We oefenen alle officiële CBR examenroutes zodat je perfect voorbereid bent.",
  },
  {
    icon: Target,
    title: "Gerichte Voorbereiding",
    description:
      "We focussen op lastige punten en veelvoorkomende fouten bij het examen.",
  },
  {
    icon: Award,
    title: "Examengarantie",
    description:
      "Met onze aanpak ga je met vertrouwen het examen in. We laten je pas gaan als je er klaar voor bent.",
  },
];

export default function Examens() {
  return (
    <section id="examen" className="relative overflow-hidden bg-primary py-20 sm:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary-light/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div>
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Wij hebben alle{" "}
                <span className="text-secondary">
                  praktijk examenroutes
                </span>
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Bij Slaagsnel kennen we elke examenroute van binnen en buiten.
                Geen verrassingen op je grote dag - alleen maar vertrouwen en
                een goed gevoel.
              </p>
            </AnimatedSection>

            <div className="mt-10 space-y-6">
              {features.map((feature, index) => (
                <AnimatedSection key={feature.title} delay={index * 0.15}>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/60">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <CheckCircle2 size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Examen Actie
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-lg text-white/50 line-through">
                      €280
                    </span>
                    <span className="text-4xl font-bold text-secondary sm:text-5xl">
                      €180
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/60">
                    Bespaar €100 op je examenaanmelding
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    "CBR examenaanmelding inbegrepen",
                    "Examentraining & route oefening",
                    "Gebruik van lesauto bij examen",
                    "Persoonlijke tips van instructeur",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0 text-secondary"
                      />
                      <span className="text-sm text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("selectPakket", { detail: "examen-actie" })
                    );
                    const el = document.querySelector("#inschrijven");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-8 w-full rounded-full bg-secondary py-3.5 text-base font-semibold text-white shadow-lg shadow-secondary/30 transition-colors hover:bg-secondary-dark"
                >
                  Profiteer van de actie
                </motion.button>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-secondary/20 to-primary-light/20 blur-2xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
