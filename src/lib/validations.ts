import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom est trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le prénom ne peut contenir que des lettres"),
  lastName: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom est trop long")
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, "Le nom ne peut contenir que des lettres"),
  email: z
    .string()
    .email("Veuillez saisir une adresse email valide")
    .max(100, "L'email est trop long"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\+\-\(\)\.]{8,20}$/.test(val),
      "Veuillez saisir un numéro de téléphone valide"
    ),
  serviceType: z.enum(
    ["administration", "finance", "digital", "coaching", "transition", "autre"],
    {
      errorMap: () => ({ message: "Veuillez sélectionner un type de besoin" }),
    }
  ),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message ne peut pas dépasser 2000 caractères"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
