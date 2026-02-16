"use client";

import { motion } from "motion/react";
import { Check, Star, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const plans = [
  {
    title: "Losse Les",
    value: "losse-les",
    price: "€75",
    period: "per les",
    description: "Probeer vrijblijvend een les",
    features: [
      "80 minuten per les",
      "Flexibel inplannen",
      "Ervaren instructeur",
      "Persoonlijke begeleiding",
    ],
    highlighted: false,
    icon: null,
  },
  {
    title: "Totaalpakket",
    value: "totaalpakket",
    price: "Vast bedrag",
    period: "tot je rijbewijs",
    description: "Alles-in-1 tot aan je rijbewijs",
    features: [
      "Lessen van 80 minuten",
      "Tot aan je rijbewijs",
      "Alle examenroutes",
      "Geen verborgen kosten",
      "Theorie ondersteuning",
      "Voortgangsrapportage",
    ],
    highlighted: true,
    icon: Star,
  },
  {
    title: "Examen Actie",
    value: "examen-actie",
    price: "€180",
    originalPrice: "€280",
    period: "eenmalig",
    description: "Aanmelden voor het praktijkexamen",
    features: [
      "CBR examenaanmelding",
      "Examentraining inbegrepen",
      "Alle examenroutes geoefend",
      "Inclusief gebruik lesauto",
    ],
    highlighted: false,
    icon: Zap,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
};

export default function Prijzen() {
  const handleSelectPlan = (pakketValue: string) => {
    window.dispatchEvent(
      new CustomEvent("selectPakket", { detail: pakketValue })
    );
    const element = document.querySelector("#inschrijven");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="prijzen" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Onze{" "}
            <span className="text-secondary">Prijzen</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            Transparante prijzen, geen verrassingen. Kies het pakket dat bij jou
            past.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className={`relative flex flex-col overflow-hidden rounded-2xl border-2 transition-shadow duration-300 ${
                plan.highlighted
                  ? "border-secondary bg-gradient-to-b from-secondary/5 to-white shadow-xl shadow-secondary/10 p-7 sm:p-10 lg:scale-110 z-10"
                  : "border-gray-100 bg-white shadow-sm hover:shadow-lg hover:shadow-primary/5 p-6 sm:p-8"
              }`}
            >
              {/* Highlighted badge */}
              {plan.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="rounded-bl-xl bg-secondary px-4 py-1.5 text-xs font-semibold text-white">
                    Meest gekozen
                  </div>
                </div>
              )}

              {/* Action badge */}
              {plan.originalPrice && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                  <Zap size={12} />
                  ACTIE - Bespaar {parseInt(plan.originalPrice.replace("€", "")) - parseInt(plan.price.replace("€", ""))} euro!
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-primary">{plan.title}</h3>
              <p className="mt-1 text-sm text-text-light">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6 mb-6">
                <div className="flex items-baseline gap-2">
                  {plan.originalPrice && (
                    <span className="text-xl text-text-light line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>
                <span className="text-sm text-text-light">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-secondary" : "text-primary"
                      }`}
                    />
                    <span className="text-sm text-text-body">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelectPlan(plan.value)}
                className={`mt-auto w-full rounded-full py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-secondary/25"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                Kies dit pakket
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
