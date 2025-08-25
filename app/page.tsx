"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Instagram, MessageCircle } from "lucide-react"

const images = [
  "/pictures/1.jpg",
  "/pictures/2.jpg",
  "/pictures/3.jpg",
  "/pictures/4.jpg",
  "/pictures/5.jpg",
  "/pictures/6.jpg",
  "/pictures/7.jpg",
]

export default function ACasaDaMata() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <section
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <article className="flex flex-col space-y-8">
            <header className="flex flex-row items-end gap-4">
              <img
                src="logo.jpg"
                alt="Logo da Casa da Mata"
                className="w-40 h-40 object-contain"
              />
              <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-foreground">
                A Casa da Mata
              </h1>
            </header>

            <div className="flex-1 flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h2 className="font-serif text-4xl leading-tight text-foreground">
                  Fresh Wedding com um toque{" "}
                  <span className="text-primary">da Toscana</span> em meio à natureza.
                </h2>

                <p className="font-serif text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  Um refúgio encantador para casamentos e eventos corporativos.
                </p>

                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Por Mônica Rio Verde
                </p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Site em construção. Em breve novidades!
                </p>
              </div>

              <div className="space-y-4">
                <p className="font-sans text-sm text-foreground">
                  Entre em contato para saber mais.
                </p>

                <nav className="flex flex-col sm:flex-row gap-4" aria-label="Redes sociais">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-medium px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                  >
                    <a
                      href="https://www.instagram.com/acasadamata/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <Instagram className="w-6 h-6" />
                      Instagram
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-secondary bg-secondary hover:bg-secondary/90 text-secondary-foreground font-sans font-medium px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                  >
                    <a
                      href="https://wa.me/5511988697187?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20casa%20da%20mata..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <MessageCircle className="w-6 h-6" />
                      WhatsApp
                    </a>
                  </Button>
                </nav>
              </div>
            </div>
          </article>

          <aside className="relative text-center">
            <figure className="relative w-full max-w-[420px] h-[750px] md:max-w-[360px] md:h-[640px] lg:max-w-[480px] lg:h-[853px] rounded-2xl overflow-hidden shadow-2xl mx-auto">
              <img
                src={images[currentImage] || "/placeholder.svg"}
                alt="Galeria de fotos da Casa da Mata"
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />

              {/* Botões de navegação */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? "bg-white shadow-lg"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </figure>
            <span className="text-xs text-[#b5b5b5]">Fotos ilustrativas</span>
          </aside>
        </section>
      </div>
</main>
  )
}
