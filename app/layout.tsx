import type React from "react"
import type { Metadata, Viewport } from "next"
import { Permanent_Marker, Dancing_Script, Patrick_Hand } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
})
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
})
const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handwritten",
})

export const metadata: Metadata = {
  title: "Te amoooo",
  description: "A special mini-site filled with love and memories",
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

export const viewport: Viewport = {
  themeColor: "#ffc0cb",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${permanentMarker.variable} ${dancingScript.variable} ${patrickHand.variable} font-handwritten antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
