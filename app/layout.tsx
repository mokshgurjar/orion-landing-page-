import type { Metadata } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono, Tenor_Sans, Space_Mono } from 'next/font/google'
import Script from 'next/script'
import GrainOverlay from '@/components/ui/GrainOverlay'
import CursorWrapper from '@/components/ui/CursorWrapper'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const tenorSans = Tenor_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-tenor',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Orion — The World's First Deterministic AI Code Editor",
  description:
    "Orion: Code that is always the same. The world's first deterministic AI code editor. Same prompt, same codebase, same output — always.",
  openGraph: {
    title: "Orion — The World's First Deterministic AI Code Editor",
    description:
      'Same prompt, same codebase, same output — always. The world\'s first deterministic AI code editor.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orion — Deterministic AI Code Editor',
    description: 'Same prompt, same codebase, same output — always.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} ${tenorSans.variable} ${spaceMono.variable} antialiased`}>
        <GrainOverlay />
        <CursorWrapper />
        {children}
        {plausibleDomain && (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
