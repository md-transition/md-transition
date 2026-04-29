import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { sendContactEmails } from "@/lib/email";
import { sanitizeInput } from "@/lib/utils";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 requests per minute per IP

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return ip;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitKey = getRateLimitKey(request);
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Trop de requêtes. Veuillez patienter quelques minutes avant de réessayer.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": "60",
            "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
          },
        }
      );
    }

    // Parse body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Données invalides." },
        { status: 400 }
      );
    }

    // Validate with Zod
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      const errors: Record<string, string[]> = {};
      validation.error.errors.forEach((err) => {
        const key = err.path.join(".");
        if (!errors[key]) errors[key] = [];
        errors[key].push(err.message);
      });

      return NextResponse.json(
        {
          success: false,
          message: "Données de formulaire invalides.",
          errors,
        },
        { status: 422 }
      );
    }

    const data = validation.data;

    // Anti-spam: honeypot check
    if (data.honeypot && data.honeypot.length > 0) {
      // Silently succeed to not reveal honeypot
      return NextResponse.json({
        success: true,
        message: "Votre message a été envoyé avec succès.",
      });
    }

    // Sanitize inputs
    const sanitizedData = {
      ...data,
      firstName: sanitizeInput(data.firstName),
      lastName: sanitizeInput(data.lastName),
      message: sanitizeInput(data.message),
      phone: data.phone ? sanitizeInput(data.phone) : undefined,
    };

    // Send emails
    await sendContactEmails(sanitizedData);

    return NextResponse.json(
      {
        success: true,
        message:
          "Votre message a bien été envoyé. Vous recevrez une confirmation par email.",
      },
      {
        status: 200,
        headers: {
          "X-Content-Type-Options": "nosniff",
        },
      }
    );
  } catch (error) {
    console.error("[Contact API] Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer ou nous contacter directement.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
