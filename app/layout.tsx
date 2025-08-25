import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "A Casa da Mata - Fresh Wedding com um toque da Toscana",
  description: "Um refúgio encantador para casamentos e eventos corporativos.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
