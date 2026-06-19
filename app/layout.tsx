import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'
import { CustomCursor } from '@/components/custom-cursor'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Sidharv Global Private Limited | Spice & Vegetable Exporters',
  description:
    'Sidharv Global Private Limited exports premium Indian spices and farm-fresh vegetables worldwide — Red Chilli, Turmeric, Garam Masala, Coriander, Onion, Potato and more.',
  generator: 'v0.app',
  keywords: [
    'spice exporter',
    'vegetable exporter',
    'turmeric powder',
    'red chilli powder',
    'Indian spices export',
    'Sidharv Global',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased cursor-none-desktop">
        <CustomCursor />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
