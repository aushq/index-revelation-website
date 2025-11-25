import type React from "react"
import type { Metadata } from "next"
import { Cinzel_Decorative, Cinzel } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
})

const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.indexrevelation.com"),
  title: "Index Revelation - Embark on a Magical Journey",
  description:
    "Discover Index Revelation, a western fantasy adventure filled with magic, mystery, and wonder. Download now for iOS and Android.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cinzelDecorative.variable} ${cinzel.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
