export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  serviceType: ServiceType;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export type ServiceType =
  | "administration"
  | "finance"
  | "digital"
  | "coaching"
  | "autre";

export interface ApiResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
