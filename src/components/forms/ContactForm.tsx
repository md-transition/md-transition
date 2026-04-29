"use client";

import { useState } from "react";
import { useForm, type UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { PaperPlaneTilt, CheckCircle, WarningCircle, CircleNotch } from "@phosphor-icons/react";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";
import { cn } from "@/lib/utils";

const serviceOptions = [
  { value: "", label: "Sélectionnez votre besoin..." },
  { value: "administration", label: "Gestion Administrative" },
  { value: "finance", label: "Accompagnement Financier" },
  { value: "digital", label: "Transformation Digitale" },
  { value: "coaching", label: "Coaching Entrepreneurial" },
  { value: "transition", label: "Management de Transition" },
  { value: "autre", label: "Autre" },
];

interface InputFieldProps {
  label: string;
  name: keyof ContactFormSchema;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  register: UseFormRegister<ContactFormSchema>;
}

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  required,
  error,
  register,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-navy">
        {label}
        {required && <span className="text-orange ml-1">*</span>}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={cn(
          "w-full px-4 py-3 rounded-xl border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200",
          "focus:ring-2 focus:ring-orange/30 focus:border-orange",
          error
            ? "border-red-400 bg-red-50 focus:ring-red-200 focus:border-red-400"
            : "border-gray-200 bg-white hover:border-gray-300"
        )}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5 text-red-500 text-xs"
          >
            <WarningCircle size={12} weight="fill" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: undefined,
      message: "",
      consent: false,
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    try {
      setSubmitStatus("loading");
      setErrorMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Une erreur est survenue");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Une erreur inattendue est survenue. Veuillez réessayer."
      );
    }
  };

  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-12 px-6"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} weight="fill" className="text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-navy mb-3">
          Message envoyé avec succès !
        </h3>
        <p className="text-text-gray leading-relaxed mb-6 max-w-md">
          Merci pour votre message. Vous allez recevoir un email de confirmation
          et je vous répondrai dans les plus brefs délais.
        </p>
        <button
          onClick={() => setSubmitStatus("idle")}
          className="text-orange font-semibold hover:text-orange-600 transition-colors underline-offset-2 hover:underline"
        >
          Envoyer un autre message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Honeypot field - hidden from users */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          label="Prénom"
          name="firstName"
          placeholder="Jean"
          required
          error={errors.firstName?.message}
          register={register}
        />
        <InputField
          label="Nom"
          name="lastName"
          placeholder="Dupont"
          required
          error={errors.lastName?.message}
          register={register}
        />
      </div>

      {/* Email */}
      <InputField
        label="Adresse email"
        name="email"
        type="email"
        placeholder="jean.dupont@exemple.fr"
        required
        error={errors.email?.message}
        register={register}
      />

      {/* Phone */}
      <InputField
        label="Téléphone"
        name="phone"
        type="tel"
        placeholder="06 00 00 00 00 (optionnel)"
        error={errors.phone?.message}
        register={register}
      />

      {/* Service Type */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="serviceType" className="text-sm font-semibold text-navy">
          Type de besoin <span className="text-orange">*</span>
        </label>
        <select
          id="serviceType"
          {...register("serviceType")}
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 appearance-none bg-no-repeat",
            "focus:ring-2 focus:ring-orange/30 focus:border-orange cursor-pointer",
            errors.serviceType
              ? "border-red-400 bg-red-50 text-gray-800 focus:ring-red-200 focus:border-red-400"
              : "border-gray-200 bg-white text-gray-800 hover:border-gray-300"
          )}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: "right 12px center",
            backgroundSize: "20px",
            paddingRight: "40px",
          }}
        >
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
        <AnimatePresence>
          {errors.serviceType && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-1.5 text-red-500 text-xs"
            >
              <WarningCircle size={12} weight="fill" />
              {errors.serviceType.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-navy">
          Votre message <span className="text-orange">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Décrivez votre situation, vos besoins, vos questions..."
          {...register("message")}
          className={cn(
            "w-full px-4 py-3 rounded-xl border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 resize-none",
            "focus:ring-2 focus:ring-orange/30 focus:border-orange",
            errors.message
              ? "border-red-400 bg-red-50 focus:ring-red-200 focus:border-red-400"
              : "border-gray-200 bg-white hover:border-gray-300"
          )}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-1.5 text-red-500 text-xs"
            >
              <WarningCircle size={12} weight="fill" />
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* RGPD Consent */}
      <div className="flex flex-col gap-1.5">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            {...register("consent")}
            className={cn(
              "mt-0.5 w-5 h-5 rounded border-2 cursor-pointer flex-shrink-0",
              "accent-orange",
              errors.consent ? "border-red-400" : "border-gray-300"
            )}
          />
          <span className="text-sm text-text-gray leading-relaxed group-hover:text-gray-700 transition-colors">
            J&apos;accepte que mes données personnelles soient utilisées pour traiter ma
            demande, conformément à la{" "}
            <a
              href="/politique-confidentialite"
              className="text-orange hover:text-orange-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              politique de confidentialité
            </a>
            . <span className="text-orange">*</span>
          </span>
        </label>
        <AnimatePresence>
          {errors.consent && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="flex items-center gap-1.5 text-red-500 text-xs ml-8"
            >
              <WarningCircle size={12} weight="fill" />
              {errors.consent.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Global error */}
      <AnimatePresence>
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
          >
            <WarningCircle size={18} weight="fill" className="flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-0.5">Erreur lors de l&apos;envoi</p>
              <p className="text-red-600">{errorMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || submitStatus === "loading"}
        className={cn(
          "w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-base transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-orange/50 focus:ring-offset-2",
          isSubmitting || submitStatus === "loading"
            ? "bg-navy/50 text-white cursor-not-allowed"
            : "bg-navy text-white hover:bg-navy-700 hover:shadow-navy hover:-translate-y-0.5 active:translate-y-0 shadow-navy-sm"
        )}
      >
        {isSubmitting || submitStatus === "loading" ? (
          <>
            <CircleNotch size={18} weight="bold" className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <PaperPlaneTilt size={18} weight="fill" />
            Envoyer mon message
          </>
        )}
      </button>

      <p className="text-xs text-text-gray text-center">
        Les champs marqués d&apos;un <span className="text-orange">*</span> sont
        obligatoires. Vos données ne seront jamais partagées avec des tiers.
      </p>
    </form>
  );
}
