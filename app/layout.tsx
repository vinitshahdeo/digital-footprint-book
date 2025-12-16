import type { Metadata } from 'next'
import { Inter, Playfair_Display, Caveat, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '600', '700'],
  preload: true,
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['600', '700'],
  preload: false,
})

const caveat = Caveat({ 
  subsets: ['latin'],
  variable: '--font-handwriting',
  display: 'swap',
  weight: ['400'],
  preload: false,
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
  weight: ['600'],
  preload: false,
})

export const metadata: Metadata = {
  title: 'Digital Footprint for Software Engineers | Vinit Shahdeo',
  description: 'Build a strong, authentic digital footprint using GitHub, LinkedIn, blogs, portfolios, and community work—without fake self-promotion. A practical playbook by Vinit Shahdeo.',
  keywords: 'software engineering, digital footprint, github, linkedin, portfolio, blog, open source, personal branding',
  authors: [{ name: 'Vinit Shahdeo' }],
  openGraph: {
    title: 'Digital Footprint for Software Engineers',
    description: 'Your code speaks. But what does the internet say about you?',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${caveat.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}