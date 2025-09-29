import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mountain,
  Users,
  Calendar,
  Mail,
  Facebook,
  MapPin,
  Shield,
  Waves,
  Star,
  ChevronRight,
  Menu,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContactFormDialog } from "@/components/contact-form-dialog"

export default function FuretsJaunesWebsite() {
  const newsItems = [
    {
      date: "Annuel",
      title: "Camps Dépollution Hauts-Plateaux - Protection Environnement",
      description:
        "Cette sortie annuelle sert à protéger notre réserve et prospecter les potentielles grottes du coin. Un engagement écologique pour préserver les sites souterrains des Hauts-Plateaux du Vercors et nous permettre de faire de la prospection, explorer de nouvelles grottes.",
      participants: "Sortie annuelle",
      image: "/images/hauts-plateaux-depollution.jpeg",
      alt: "Camp dépollution Hauts-Plateaux - Spéléologues protégeant la réserve naturelle du Vercors, paysage de montagne avec cabane et forêts de pins",
      badge: "Nouveau",
      linkText: "Voir la vidéo",
      linkHref: "https://www.facebook.com/reel/1278369720685161",
    },
    {
      date: "29 Juin 2025",
      title: "Canyon des Écouges 2 - Sortie Canyoning Isère",
      description:
        "Une sortie mémorable aux Écouges avec Andrea, Marie, Florian et Mael ! Un canyon ludique, des paysages magnifiques et une ambiance conviviale, malgré quelques petites péripéties. Un grand merci à Andrea pour les superbes photos !",
      participants: "4 participants",
      image: "/images/ecouges-canyon.jpeg",
      alt: "Canyoning aux Écouges - Personnes descendant en rappel une cascade dans le canyon des Écouges, photo par Andrea",
      badge: "Nouveau",
      linkText: "Voir les photos",
      linkHref: "#",
    },
    {
      date: "7 Octobre 2023",
      title: "Gouffre du Gros Gadeau - Spéléologie Vercors",
      description:
        "Une exploration technique au Gros Gadeau, marquée par des défis d'équipement et la découverte de la faune souterraine. La journée s'est conclue par une formation improvisée et une fondue conviviale, renforçant les liens du club.",
      participants: "4 participants",
      image: "/images/training-knot.jpeg",
      alt: "Formation spéléologie - Deux spéléologues en formation, apprenant les techniques de corde en extérieur, photo par Eva Lourau",
      badge: null,
      linkText: "Voir les photos",
      linkHref: "#",
    },
    {
      date: "25 Janvier 2024",
      title: "Scialet Michelier - Initiation Spéléologie Débutant",
      description:
        "Une sortie d'initiation réussie au Scialet Michelier, malgré un vent fort. L'équipe a progressé efficacement dans la cavité humide, explorant la salle Sophie avant de déséquiper et de ressortir en fin d'après-midi.",
      participants: "5 participants",
      image: "/images/scialet-michelier-explorer.jpeg",
      alt: "Initiation spéléologie - Spéléologue débutant dans une grotte avec des formations rocheuses et des stalactites, photo par Eva Lourau",
      badge: null,
      linkText: "Voir les photos",
      linkHref: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/fjs-logo.jpg"
                alt="Les Furets Jaunes - Club Spéléologie Grenoble Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="flex items-baseline space-x-1">
                <span className="text-xl font-bold text-gray-900">Les Furets Jaunes</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="#home" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Accueil
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Le Club
              </Link>
              <Link href="#activities" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Activités
              </Link>
              <Link href="#join" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Nous Rejoindre
              </Link>
              <Link href="#news" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Actualités
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-yellow-600 transition-colors">
                Contact
              </Link>
            </div>

            <Button className="md:hidden" variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-gray-900/60 z-10"></div>
        <Image
          src="/images/cave-explorer-lit.jpeg"
          alt="Spéléologie Grenoble - Spéléologue explorant une grotte illuminée dans les Alpes, photo par Eva Lourau"
          fill
          className="object-cover"
          priority
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-yellow-400 text-gray-900 hover:bg-yellow-500">
              Club de Spéléologie • Seyssins • Proche Grenoble
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Les Furets<span className="text-yellow-400"> Jaunes</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Explorez les profondeurs des Alpes françaises avec notre club de spéléologie passionné. Découvrez un monde
              souterrain extraordinaire dans une ambiance conviviale et sécurisée.{" "}
              <strong>Basé à Seyssins, proche de Grenoble</strong>, nous explorons les grottes de l'Isère, du Vercors et
              de Chartreuse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ContactFormDialog />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-400 text-gray-900">Notre Histoire</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">À Propos du Club</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une histoire riche de plus de 60 ans d'exploration souterraine dans les Alpes françaises. Club de
              spéléologie basé à Seyssins, proche de Grenoble.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-800 rounded-2xl p-8 text-gray-300 leading-relaxed">
              <p className="mb-6">
                Au départ, les FJS, c'étaient avant tout le{" "}
                <strong className="text-yellow-400">Foyer des Jeunes de Seyssins</strong>. C'est en{" "}
                <strong className="text-yellow-400">1964</strong> que des jeunes du foyer découvrent la spéléologie,
                notamment sous la conduite de Jo Berger. Le virus a pris et, les deux années suivantes, d'autres sorties
                ont lieu au sein de la section spéléo du Foyer des Jeunes.
              </p>

              <p className="mb-6">
                En <strong className="text-yellow-400">1968</strong>, sept seyssinois adhèrent à la Fédération Française
                de Spéléologie et de nouveaux trous sont explorés, essentiellement dans le Nord Vercors. Le{" "}
                <strong className="text-yellow-400">puits Saint Bruno</strong> est une des premières cavités explorées
                par les Furets. À cette époque il reste beaucoup de trous "évidents" à trouver ; la première est sous
                les pieds de nos jeunes seyssinois.
              </p>

              <p className="mb-6">
                En <strong className="text-yellow-400">1973</strong>, les jeunes du foyer participent activement à
                l'interclub BERGER 73 avec le Groupe Spéléo Montagne, le Spéléo Club de Vizille et le Spéléo Groupe
                Sassenageois. De cette époque, deux personnes sont encore actives au sein du club. Tant d'années après,
                c'est un sacré palmarès !
              </p>

              <p className="mb-6">
                <strong className="text-yellow-400">1976</strong> est une année charnière. Vu le développement de
                l'activité, les spéléos locaux se séparent du Foyer des Jeunes pour se constituer en association. Ils
                conservent le sigle FJS puisque le matériel est marqué à ce nom. C'est ainsi que l'extension{" "}
                <strong className="text-yellow-400">Furets Jaunes de Seyssins</strong> est née.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Notre Esprit</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-3 h-3 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Convivialité</h4>
                    <p className="text-gray-300">Une ambiance chaleureuse où chacun trouve sa place</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-3 h-3 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Sécurité</h4>
                    <p className="text-gray-300">Formation rigoureuse et respect des protocoles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mountain className="w-3 h-3 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Aventure</h4>
                    <p className="text-gray-300">Découverte de sites exceptionnels dans les Alpes et plus loin</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/group-meeting.jpeg"
                alt="Club spéléologie Grenoble - Groupe de membres du club de spéléologie en réunion, entourés de matériel, photo par Eva Lourau"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">60+</div>
                  <div className="text-sm text-gray-700">Années spéléo</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-white">1964</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Découverte spéléologie Grenoble</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-white">1968</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Adhésion Fédération Française Spéléologie</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-white">1973</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Interclub BERGER 73</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-white">1976</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">Naissance Furets Jaunes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">Nos Disciplines</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Activités</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Du débutant à l'exploration pure, découvrez nos différentes activités souterraines dans les plus beaux
              sites des Alpes françaises. Spéléologie et canyoning dans l'Isère, proche de Grenoble.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/rappelling-cave.jpeg"
                  alt="Spéléologie Grenoble - Spéléologue descendant en rappel dans une grande cavité souterraine, éclairé par un faisceau lumineux, photo par Eva Lourau"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-400 text-gray-900">Spéléologie Grenoble</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mountain className="w-5 h-5 mr-2 text-yellow-600" />
                  Spéléologie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Exploration des grottes et réseaux souterrains aux alentours de Grenoble et plus loin.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Initiation et perfectionnement</li>
                  <li>• Techniques de progression</li>
                  <li>• Exploration de nouveaux réseaux (Vercors, Chartreuse et ailleurs)</li>
                  <li>• Camps spéléos prospection et exploration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/images/canyon-explorer.jpeg"
                  alt="Canyoning Grenoble - Personne explorant un canyon aquatique avec des parois rocheuses et de l'eau verte, photo par Eva Lourau"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-400 text-white">Canyoning Alpes</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Waves className="w-5 h-5 mr-2 text-yellow-600" />
                  Canyoning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Descente de canyons aquatiques dans les gorges alpines pour une aventure rafraîchissante.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Rappels sur corde en canyon</li>
                  <li>• Sauts et toboggans naturels</li>
                  <li>• Nage en eaux vives</li>
                  <li>• Camp canyon annuel (Sierra de Guara, Corse)</li>
                </ul>
                <a
                  href="https://www.youtube.com/watch?v=dyDWDVD6xIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                >
                  Voir la vidéo du camp 2023
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-400 text-gray-900">Rejoignez-nous</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">Comment Nous Rejoindre</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Que vous soyez débutant ou expérimenté, nous vous accueillons avec plaisir dans notre communauté de
              passionnés de spéléologie.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Débuter la Spéléologie à Grenoble</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Premier Contact</h4>
                    <p className="text-gray-300">
                      Contactez-nous par email ou venez nous rencontrer lors d'une réunion jeudi soir
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Sortie Découverte</h4>
                    <p className="text-gray-300">
                      Participez à une sortie d'initiation spéléologie pour découvrir l'activité
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 text-gray-900 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Adhésion Club</h4>
                    <p className="text-gray-300">
                      Remplissez le dossier d'inscription et rejoignez officiellement le club spéléo
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3303-LmsIKoQyOzzDbFJyQ3MOYbDz5lnYDb.jpeg"
                alt="Initiation spéléologie Grenoble - Spéléologue débutant en combinaison jaune descendant en rappel dans une grande cavité souterraine, photo par Eva Lourau"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">Actualités</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Dernières Explorations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos récentes sorties spéléologie et canyoning dans les Alpes. Revivez nos plus belles aventures
              souterraines près de Grenoble.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                  {item.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-400 text-gray-900">{item.badge}</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {item.participants}
                    </div>
                    {item.linkHref && (
                      <a
                        href={item.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                      >
                        {item.linkText}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-800">Contact</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nous Contacter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une question ? Envie de nous rejoindre ? N'hésitez pas à nous contacter, nous serons ravis de vous
              accueillir dans notre club de spéléologie !
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email Club Spéléo</h4>
                      <p className="text-gray-600">lesfuretsjaunes@gmail.com</p>
                    </div>
                  </div>

                  <Link
                    href="https://www.facebook.com/share/1Em9src1YL/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Facebook className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Facebook</h4>
                      <p className="text-gray-600">Les Furets Jaunes Seyssins</p>
                      <p className="text-sm text-gray-500">Suivez nos sorties spéléo</p>
                    </div>
                  </Link>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Localisation</h4>
                      <p className="text-gray-600">Seyssins, Isère (38)</p>
                      <p className="text-sm text-gray-500">Proche de Grenoble</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Pascal Groseil</h4>
                      <p className="text-gray-600">Président du Club</p>
                      <p className="text-sm text-gray-500">+33 7 64 88 09 58</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Pierre Lefebvre</h4>
                      <p className="text-gray-600">Trésorier</p>
                      <p className="text-sm text-gray-500">+33 6 07 94 74 17</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Réunions Club</h4>
                      <p className="text-gray-600">Jeudis 20h30</p>
                      <Link
                        href="https://maps.app.goo.gl/B3LmxkjJrX61vuGi6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-yellow-600 transition-colors flex items-center gap-1"
                      >
                        <MapPin className="w-3 h-3" />
                        CCAS de Seyssins
                      </Link>
                      <p className="text-xs text-gray-400 mt-1">40 Rue de la Liberté, 38180 Seyssins</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Débuter ou continuer votre pratique de la spéléologie vers Grenoble ?
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Venez nous rencontrer lors d'une réunion ou contactez-nous pour participer à une sortie découverte !
                </p>
                <ContactFormDialog />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/fjs-logo.jpg"
                  alt="Les Furets Jaunes - Club Spéléologie Grenoble Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="flex items-baseline space-x-1">
                  <span className="text-xl font-bold">Les Furets Jaunes</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Club de spéléologie explorant les merveilles souterraines des Alpes françaises depuis 1964. Basé à
                Seyssins, proche de Grenoble, nous explorons les grottes de l'Isère.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#home" className="hover:text-yellow-400 transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-yellow-400 transition-colors">
                    Le Club
                  </Link>
                </li>
                <li>
                  <Link href="#activities" className="hover:text-yellow-400 transition-colors">
                    Activités
                  </Link>
                </li>
                <li>
                  <Link href="#join" className="hover:text-yellow-400 transition-colors">
                    Nous Rejoindre
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Activités Spéléo</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Spéléologie Grenoble</li>
                <li>Canyoning Isère</li>
                <li>Initiation Débutant</li>
                <li>Formation Spéléo</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>lesfuretsjaunes@gmail.com</li>
                <li>Pascal G. +33 7 64 88 09 58</li>
                <li>Réunions : Jeudis 20h30</li>
                <li>CCAS de Seyssins</li>
                <li>40 Rue de la Liberté, 38180 Seyssins</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Les Furets Jaunes - Club Spéléologie Grenoble. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
