"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, ChevronRight } from "lucide-react"

export function ContactFormDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    questionType: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionStatus(null)

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionStatus("error")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmissionStatus("success")
        // Reset form fields
        setFormData({
          name: "",
          email: "",
          questionType: "",
          subject: "",
          message: "",
        })
        // Close dialog after 2 seconds
        setTimeout(() => {
          setIsOpen(false)
          setSubmissionStatus(null)
        }, 2000)
      } else {
        setSubmissionStatus("error")
        console.error("Server error:", data.message)
      }
    } catch (error) {
      setSubmissionStatus("error")
      console.error("Network or unexpected error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
          Rejoindre l'aventure
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Contactez-nous</DialogTitle>
          <DialogDescription className="text-gray-600">
            Remplissez le formulaire ci-dessous pour nous envoyer un message.
          </DialogDescription>
        </DialogHeader>

        <div className="mb-4 p-3 bg-yellow-50 rounded-md text-gray-800 text-sm">
          <p className="font-semibold mb-1">Tout le monde est le bienvenu !</p>
          <p>
            Venez nous rencontrer à notre réunion hebdomadaire tous les jeudis à 20h30 au CCAS de Seyssins. Vous pouvez
            également contacter Pascal Groseil, Président du Club, au +33 7 64 88 09 58.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Votre nom (obligatoire)</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="focus-visible:ring-yellow-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Votre adresse de messagerie (obligatoire)</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="focus-visible:ring-yellow-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="questionType">Choisissez une question dans la liste</Label>
            <Select value={formData.questionType} onValueChange={(value) => handleInputChange("questionType", value)}>
              <SelectTrigger id="questionType" className="focus-visible:ring-yellow-500">
                <SelectValue placeholder="Sélectionnez un type de question" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">Question générale</SelectItem>
                <SelectItem value="cavities">Question sur les cavités</SelectItem>
                <SelectItem value="membership">Question sur l'adhésion</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="subject">Objet</Label>
            <Input
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className="focus-visible:ring-yellow-500"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Votre message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
              className="min-h-[100px] focus-visible:ring-yellow-500"
            />
          </div>

          {submissionStatus === "success" && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-700 text-sm font-medium">✅ Votre message a été envoyé avec succès !</p>
              <p className="text-green-600 text-xs mt-1">Nous vous répondrons rapidement.</p>
            </div>
          )}

          {submissionStatus === "error" && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700 text-sm font-medium">❌ Une erreur est survenue.</p>
              <p className="text-red-600 text-xs mt-1">Veuillez réessayer ou nous contacter directement.</p>
            </div>
          )}

          <Button type="submit" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer le message"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
