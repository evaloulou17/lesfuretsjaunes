import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Les Furets Jaunes - Club de Spéléologie Seyssins | Proche Grenoble Isère",
  description:
    "Club de spéléologie Les Furets Jaunes à Seyssins, proche de Grenoble. Spéléologie et canyoning dans l'Isère depuis 1964. Explorez les grottes du Vercors et de Chartreuse.",
  keywords:
    "spéléologie Seyssins, club spéléo proche Grenoble, spéléologie Isère, grottes Vercors, canyoning Isère, Les Furets Jaunes, spéléo Chartreuse",
  authors: [{ name: "Les Furets Jaunes" }],
  creator: "Les Furets Jaunes",
  publisher: "Les Furets Jaunes",
  robots: "index, follow",
  openGraph: {
    title: "Les Furets Jaunes - Club Spéléologie Seyssins",
    description: "Club de spéléologie Les Furets Jaunes à Seyssins, proche de Grenoble.",
    url: "https://lesfuretsjaunes.fr",
    siteName: "Les Furets Jaunes",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Les Furets Jaunes - Club Spéléologie Seyssins",
    description: "Club de spéléologie Les Furets Jaunes à Seyssins, proche de Grenoble.",
  },
  alternates: {
    canonical: "https://lesfuretsjaunes.fr",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="canonical" href="https://lesfuretsjaunes.fr" />
        <meta name="geo.region" content="FR-38" />
        <meta name="geo.placename" content="Grenoble, Seyssins" />
        <meta name="geo.position" content="45.1667;5.7" />
        <meta name="ICBM" content="45.1667, 5.7" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
