import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const { name, email, questionType, subject, message } = formData

    // In a real application, you would integrate an email sending service here.
    // Examples: Nodemailer, Resend, SendGrid, Mailgun, etc.
    // For this demonstration, we'll just log the email content to the console.

    console.log("--- New Contact Form Submission ---")
    console.log(`From: ${name} <${email}>`)
    console.log(`Question Type: ${questionType}`)
    console.log(`Subject: ${subject || "No Subject"}`)
    console.log("Message:")
    console.log(message)
    console.log("-----------------------------------")

    // Simulate a delay for the "email sending" process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // You would typically send the email here, e.g.:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'contact@furetsjaunes-seyssins.fr',
    //   subject: `Nouveau message de ${name} (${subject})`,
    //   html: `<p><strong>De:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Type de question:</strong> ${questionType}</p><p><strong>Objet:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message}</p>`,
    // });

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 500 })
  }
}
