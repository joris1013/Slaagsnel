"use client";

import { motion } from "motion/react";
import {
  PiggyBank,
  Clock,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const usps = [
  {
    icon: PiggyBank,
    title: "Betaalbaar",
    description:
      "Kwalitatieve rijlessen voor een eerlijke prijs. Geen verborgen kosten, gewoon transparant.",
  },
  {
    icon: Clock,
    title: "80 Minuten Lessen",
    description:
      "Langere lessen zodat je sneller leert. Meer oefentijd betekent sneller je rijbewijs.",
  },
  {
    icon: MapPin,
    title: "Alle Examenroutes",
    description:
      "We kennen alle praktijk examenroutes van binnen en buiten. Geen verrassingen op je examendag.",
  },
  {
    icon: ShieldCheck,
    title: "Vaste Prijs",
    description:
      "Eén vast bedrag tot aan je rijbewijs. Geen onverwachte extra kosten, je weet waar je aan toe bent.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
};

export default function USPs() {
  return (
    <section id="voordelen" className="relative bg-background-alt py-20 sm:py-28">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Waarom{" "}
            <span className="text-secondary">Slaagsnel</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            Bij Slaagsnel krijg je meer dan alleen rijlessen. We zorgen ervoor
            dat jij met vertrouwen en op je gemak je rijbewijs haalt.
          </p>
        </AnimatedSection>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {usps.map((usp) => (
            <motion.div
              key={usp.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-secondary/10 group-hover:text-secondary">
                <usp.icon size={28} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {usp.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-light">
                {usp.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
