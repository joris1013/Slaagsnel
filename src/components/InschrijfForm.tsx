"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const formSchema = z.object({
  naam: z.string().min(2, "Vul je volledige naam in"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  telefoon: z
    .string()
    .min(10, "Vul een geldig telefoonnummer in")
    .regex(/^[0-9+\-\s()]+$/, "Vul een geldig telefoonnummer in"),
  pakket: z.string().min(1, "Kies een pakket"),
  bericht: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function InschrijfForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      naam: "",
      email: "",
      telefoon: "",
      pakket: "",
      bericht: "",
    },
  });

  useEffect(() => {
    const handleSelectPakket = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setValue("pakket", customEvent.detail, { shouldValidate: true });
    };
    window.addEventListener("selectPakket", handleSelectPakket);
    return () => {
      window.removeEventListener("selectPakket", handleSelectPakket);
    };
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    setServerError("");
    try {
      const response = await fetch("/api/inschrijven", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Er ging iets mis. Probeer het opnieuw.");
      }

      setIsSubmitted(true);
      reset();
    } catch {
      setServerError(
        "Er ging iets mis bij het versturen. Probeer het opnieuw of neem contact op via WhatsApp."
      );
    }
  };

  return (
    <section className="relative bg-background-alt py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 id="inschrijven" className="scroll-mt-[16px] text-3xl font-bold text-primary sm:text-4xl">
            Schrijf je{" "}
            <span className="text-secondary">in</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-text-light">
            Klaar om te beginnen? Vul het formulier in en we nemen zo snel
            mogelijk contact met je op.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-12">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2,
                  }}
                >
                  <CheckCircle2
                    size={64}
                    className="mx-auto text-green-500"
                  />
                </motion.div>
                <h3 className="mt-4 text-2xl font-bold text-green-800">
                  Inschrijving ontvangen!
                </h3>
                <p className="mt-2 text-green-600">
                  Bedankt voor je inschrijving. We nemen zo snel mogelijk
                  contact met je op.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Nog een inschrijving
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-primary/5 sm:p-8"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Naam */}
                  <div>
                    <label
                      htmlFor="naam"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      Naam *
                    </label>
                    <input
                      id="naam"
                      type="text"
                      placeholder="Je volledige naam"
                      {...register("naam")}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-text-body outline-none transition-all placeholder:text-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/10 ${
                        errors.naam ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.naam && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.naam.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      E-mailadres *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="naam@voorbeeld.nl"
                      {...register("email")}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-text-body outline-none transition-all placeholder:text-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/10 ${
                        errors.email ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Telefoon */}
                  <div>
                    <label
                      htmlFor="telefoon"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      Telefoonnummer *
                    </label>
                    <input
                      id="telefoon"
                      type="tel"
                      placeholder="06 12345678"
                      {...register("telefoon")}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-text-body outline-none transition-all placeholder:text-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/10 ${
                        errors.telefoon ? "border-red-400" : "border-gray-200"
                      }`}
                    />
                    {errors.telefoon && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.telefoon.message}
                      </p>
                    )}
                  </div>

                  {/* Pakket */}
                  <div>
                    <label
                      htmlFor="pakket"
                      className="mb-1.5 block text-sm font-medium text-primary"
                    >
                      Gewenst pakket *
                    </label>
                    <select
                      id="pakket"
                      {...register("pakket")}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-text-body outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10 ${
                        errors.pakket ? "border-red-400" : "border-gray-200"
                      }`}
                    >
                      <option value="">Kies een pakket...</option>
                      <option value="losse-les">Losse Les - €75 / 80 min</option>
                      <option value="totaalpakket">
                        Totaalpakket - Vast bedrag
                      </option>
                      <option value="examen-actie">
                        Examen Actie - €180
                      </option>
                    </select>
                    {errors.pakket && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.pakket.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Bericht */}
                <div className="mt-6">
                  <label
                    htmlFor="bericht"
                    className="mb-1.5 block text-sm font-medium text-primary"
                  >
                    Bericht{" "}
                    <span className="font-normal text-text-light">
                      (optioneel)
                    </span>
                  </label>
                  <textarea
                    id="bericht"
                    rows={4}
                    placeholder="Heb je vragen of opmerkingen? Laat het ons weten..."
                    {...register("bericht")}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-text-body outline-none transition-all placeholder:text-text-light/50 focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>

                {/* Server error */}
                {serverError && (
                  <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                    {serverError}
                  </p>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3.5 text-base font-semibold text-white shadow-lg shadow-secondary/25 transition-colors hover:bg-secondary-dark disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Versturen...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Verstuur inschrijving
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
}
