"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { ADDRESS, PHONE_NUMBER, MAPS_IFRAME_URL } from "@/lib/constants";

export default function GoogleMaps() {
  return (
    <section id="contact" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">
            Waar vind je{" "}
            <span className="text-secondary">ons</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-light">
            Neem gerust contact met ons op of kom langs voor een kennismaking.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <AnimatedSection
            direction="left"
            delay={0.1}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-2xl border border-gray-100 bg-background-alt p-6 shadow-sm sm:p-8">
              <h3 className="text-xl font-bold text-primary">
                Contact
              </h3>
              <p className="mt-2 text-sm text-text-light">
                Heb je vragen? Neem gerust contact met ons op.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Adres</p>
                    <p className="mt-0.5 text-sm text-text-light">
                      {ADDRESS.street}
                      <br />
                      {ADDRESS.zip} {ADDRESS.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Telefoon
                    </p>
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                      className="mt-0.5 text-sm text-text-light transition-colors hover:text-secondary"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      E-mail
                    </p>
                    <a
                      href="mailto:info@slaagsnel.nl"
                      className="mt-0.5 text-sm text-text-light transition-colors hover:text-secondary"
                    >
                      info@slaagsnel.nl
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Google Maps */}
          <AnimatedSection
            direction="right"
            delay={0.2}
            className="lg:col-span-3"
          >
            <div className="h-full min-h-[350px] overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <iframe
                src={MAPS_IFRAME_URL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie Rijschool Slaagsnel"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
