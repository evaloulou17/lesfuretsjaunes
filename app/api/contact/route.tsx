import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  console.log("=== DEBUT API CONTACT ===")

  try {
    const formData = await request.json()
    const { name, email, questionType, subject, message } = formData

    console.log("Données reçues:", { name, email, questionType, subject })
    console.log("Clé API présente:", !!process.env.RESEND_API_KEY)
    console.log("Clé API (premiers chars):", process.env.RESEND_API_KEY?.substring(0, 5))

    // Vérifier que la clé API est présente
    if (!process.env.RESEND_API_KEY) {
      console.error("ERREUR: RESEND_API_KEY manquante")
      return NextResponse.json({ success: false, message: "Configuration email manquante" }, { status: 500 })
    }

    console.log("Initialisation Resend...")
    const resend = new Resend(process.env.RESEND_API_KEY)

    console.log("Tentative d'envoi email...")
    const emailResult = await resend.emails.send({
      from: "noreply@resend.dev",
      to: "lesfuretsjaunes@gmail.com",
      replyTo: email,
      subject: `Nouveau message de ${name} - ${subject || "Sans objet"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b;">Nouveau message depuis le site Les Furets Jaunes</h2>
          <p><strong>De :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Type :</strong> ${questionType || "Non spécifié"}</p>
          <p><strong>Objet :</strong> ${subject || "Sans objet"}</p>
          <p><strong>Message :</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    })

    console.log("Email envoyé avec succès:", emailResult)
    console.log("ID email:", emailResult.data?.id)

    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("=== ERREUR COMPLETE ===")
    console.error("Type d'erreur:", error?.constructor?.name)
    console.error("Message d'erreur:", error?.message)
    console.error("Stack trace:", error?.stack)
    console.error("Erreur complète:", error)

    return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 500 })
  }
}
