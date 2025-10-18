import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { site } from '@/lib/site'
import { baseMetadata } from '@/lib/seo'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = baseMetadata('/')

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {plausibleDomain && (
          <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />
        )}
      </body>
    </html>
  )
}
