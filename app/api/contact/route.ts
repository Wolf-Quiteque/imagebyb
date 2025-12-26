import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const ContactSchema = z
  .object({
    firstName: z.string().trim().min(1),
    lastName: z.string().trim().min(1),
    email: z.string().trim().email(),
    phone: z.string().trim().min(1),
    serviceType: z.string().trim().min(1),
    eventDate: z.string().trim().min(1),
    weddingVenue: z.string().optional().nullable(),
    weddingGuestCount: z.string().optional().nullable(),
    couplesBudget: z.string().optional().nullable(),
    couplestheme: z.string().optional().nullable(),
    eventsType: z.string().optional().nullable(),
    otherDetails: z.string().optional().nullable(),
    additionalNotes: z.string().optional().nullable(),
  })
  .passthrough()

function requiredEnv(name: string) {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env var: ${name}`)
  return v
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = ContactSchema.parse(body)

    const host = requiredEnv("SMTP_HOST")
    const port = Number(process.env.SMTP_PORT || 587)
    const user = requiredEnv("SMTP_USER")
    const pass = requiredEnv("SMTP_PASS")

    const to = process.env.CONTACT_TO || "Bilalgilbert@imagerybyb.com"
    const from = process.env.CONTACT_FROM || user

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const subject = `New Inquiry: ${data.serviceType} (${data.firstName} ${data.lastName})`

    const lines: string[] = [
      `Name: ${data.firstName} ${data.lastName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.serviceType}`,
      `Event date: ${data.eventDate}`,
    ]

    if (data.weddingVenue) lines.push(`Wedding venue: ${data.weddingVenue}`)
    if (data.weddingGuestCount) lines.push(`Wedding guest count: ${data.weddingGuestCount}`)
    if (data.couplesBudget) lines.push(`Couple's budget: ${data.couplesBudget}`)
    if (data.couplestheme) lines.push(`Couple's theme/vibe: ${data.couplestheme}`)
    if (data.eventsType) lines.push(`Event type: ${data.eventsType}`)
    if (data.otherDetails) lines.push(`Other details: ${data.otherDetails}`)
    if (data.additionalNotes) lines.push(`Additional notes: ${data.additionalNotes}`)

    const text = lines.join("\n")

    await transporter.sendMail({
      to,
      from,
      subject,
      text,
      replyTo: data.email,
    })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    const msg = typeof err?.message === "string" ? err.message : "Failed to send"
    // Avoid leaking sensitive info
    const safe = msg.includes("Missing env var") ? msg : "Failed to send. Please try again."
    return new NextResponse(safe, { status: 400 })
  }
}
