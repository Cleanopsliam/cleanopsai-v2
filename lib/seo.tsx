import type { Metadata } from 'next'
import { site } from './site'

export function baseMetadata(pathname: string): Metadata {
  const url = new URL(pathname || '/', site.url)
  const title = `${site.name} — ${site.tagline}`
  const description = 'CleanOpsAI helps cleaning companies schedule smarter, pay fairly, and keep clients happy — without spreadsheets.'
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: { canonical: url.pathname },
    openGraph: {
      title, description, url: url.toString(), siteName: site.name, type: 'website',
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} Open Graph` }],
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
    keywords: [
      'cleaning business software','cleaning scheduling software','UK cleaners app',
      'job scheduling','route optimization','cleaning payroll','Jobber alternative'
    ],
    icons: { icon: '/favicon/favicon.ico', apple: '/favicon/apple-touch-icon.png' }
  }
}
