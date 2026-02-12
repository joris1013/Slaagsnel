import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendInschrijvingEmail } from "@/lib/email";

const schema = z.object({
  naam: z.string().min(2),
  email: z.string().email(),
  telefoon: z.string().min(10),
  pakket: z.string().min(1),
  bericht: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    await sendInschrijvingEmail(data);

    return NextResponse.json(
      { message: "Inschrijving succesvol ontvangen" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Ongeldige gegevens", errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Inschrijving error:", error);
    return NextResponse.json(
      { message: "Er ging iets mis bij het versturen" },
      { status: 500 }
    );
  }
}
