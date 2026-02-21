import type { Metadata } from 'next'
import { Cormorant_Garamond, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import GrainOverlay from '@/components/ui/GrainOverlay'
import CursorWrapper from '@/components/ui/CursorWrapper'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
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
      <body className={`${cormorant.variable} ${geistMono.variable} antialiased`}>
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
