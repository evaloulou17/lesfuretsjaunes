import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Instagram } from 'lucide-react'

export default function GalleryPage() {
  const photos = [
    {
      src: "/images/gournier-salle-burgondes.png",
      alt: "Salle des Burgondes - Gournier",
      category: "Spéléologie",
      location: "Gournier",
    },
    {
      src: "/images/cave-explorer-lit.jpeg",
      alt: "Spéléologue explorant une grotte illuminée",
      category: "Spéléologie",
      location: "Vercors",
    },
    {
      src: "/images/cave-lake.jpeg",
      alt: "Lac souterrain",
      category: "Spéléologie",
      location: "Vercors",
    },
    {
      src: "/images/rappelling-cave.jpeg",
      alt: "Rappel dans une grande cavité",
      category: "Spéléologie",
      location: "Alpes",
    },
    {
      src: "/images/canyon-explorer.jpeg",
      alt: "Exploration canyon aquatique",
      category: "Canyoning",
      location: "Isère",
    },
    {
      src: "/images/ecouges-canyon.jpeg",
      alt: "Canyon des Écouges",
      category: "Canyoning",
      location: "Écouges",
    },
    {
      src: "/images/training-knot.jpeg",
      alt: "Formation technique de corde",
      category: "Formation",
      location: "Seyssins",
    },
    {
      src: "/images/cave-entrance-peace.jpeg",
      alt: "Entrée de grotte paisible",
      category: "Spéléologie",
      location: "Vercors",
    },
    {
      src: "/images/cave-light-shaft.jpeg",
      alt: "Puits de lumière souterrain",
      category: "Spéléologie",
      location: "Chartreuse",
    },
    {
      src: "/images/manhole-exit.jpeg",
      alt: "Sortie de puits",
      category: "Spéléologie",
      location: "Vercors",
    },
    {
      src: "/images/group-meeting.jpeg",
      alt: "Réunion du club",
      category: "Club",
      location: "Seyssins",
    },
    {
      src: "/images/pit-descent.jpeg",
      alt: "Descente de puits",
      category: "Spéléologie",
      location: "Vercors",
    },
    {
      src: "/images/hauts-plateaux-depollution.jpeg",
      alt: "Camp dépollution Hauts-Plateaux",
      category: "Environnement",
      location: "Vercors",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3303-LmsIKoQyOzzDbFJyQ3MOYbDz5lnYDb.jpeg",
      alt: "Spéléologue en rappel",
      category: "Spéléologie",
      location: "Vercors",
    },
    {
      src: "/images/scialet-michelier-explorer.jpeg",
      alt: "Scialet Michelier",
      category: "Spéléologie",
      location: "Vercors",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Retour</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Image
                src="/images/fjs-logo.jpg"
                alt="Les Furets Jaunes Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-white">Les Furets Jaunes</span>
            </div>
            <Link
              href="https://www.facebook.com/share/1Em9src1YL/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="hidden md:inline font-medium">Suivez-nous</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-yellow-400 text-gray-900">Galerie Photos</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nos Plus Belles <span className="text-yellow-400">Explorations</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'univers souterrain des Furets Jaunes. Découvrez nos aventures en spéléologie et canyoning à
            travers les plus beaux sites des Alpes.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          {/* Masonry-style grid inspired by Instagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square bg-gray-800 hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              >
                <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge className="mb-2 bg-yellow-400 text-gray-900">{photo.category}</Badge>
                    <p className="text-white font-semibold text-lg">{photo.location}</p>
                    <p className="text-gray-300 text-sm mt-1">{photo.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Envie de Vivre <span className="text-yellow-400">L'Aventure</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez-nous pour découvrir les merveilles souterraines des Alpes. Débutants bienvenus !
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Nous Contacter
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Les Furets Jaunes - Club Spéléologie Grenoble</p>
        </div>
      </footer>
    </div>
  )
}
