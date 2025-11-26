import { GoogleAnalytics } from "@/components/ga"
import type { Metadata } from "next"
import { Alegreya, Cinzel_Decorative } from "next/font/google"
import type React from "react"
import "./globals.css"

const alegreya = Alegreya({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
})

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.index-revelation.com"),
  title: "Index Revelation - Embark on a Magical Journey",
  description:
    "Discover Index Revelation, a western fantasy adventure filled with magic, mystery, and wonder. Download now for iOS and Android.",
  icons: {
    // icon: [
    //   {
    //     url: "/icon-light-32x32.png",
    //     media: "(prefers-color-scheme: light)",
    //   },
    //   {
    //     url: "/icon-dark-32x32.png",
    //     media: "(prefers-color-scheme: dark)",
    //   },
    //   {
    //     url: "/icon.svg",
    //     type: "image/svg+xml",
    //   },
    // ],
    // apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${alegreya.variable} ${cinzelDecorative.variable} font-sans antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-2EN60VB2T3" />
      </body>
    </html>
  )
}
