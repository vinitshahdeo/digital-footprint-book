import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://digitalfootprint.vinitshahdeo.com'),
  title: 'Digital Footprint for Software Engineers | Vinit Shahdeo',
  description: 'Build a strong, authentic digital footprint using GitHub, LinkedIn, blogs, portfolios, and community work—without fake self-promotion. A practical playbook by Vinit Shahdeo.',
  keywords: 'software engineering, digital footprint, github, linkedin, portfolio, blog, open source, personal branding, career growth, developer visibility',
  authors: [{ name: 'Vinit Shahdeo', url: 'https://vinitshahdeo.com' }],
  creator: 'Vinit Shahdeo',
  publisher: 'Vinit Shahdeo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Digital Footprint for Software Engineers',
    description: 'Your code speaks. But what does the internet say about you? A practical playbook for engineers who want their work to be discoverable.',
    type: 'website',
    url: 'https://digitalfootprint.vinitshahdeo.com',
    siteName: 'Digital Footprint',
    locale: 'en_US',
    images: [
      {
        url: '/images/digital-footprint-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Footprint for Software Engineers - Book by Vinit Shahdeo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Footprint for Software Engineers',
    description: 'Your code speaks. But what does the internet say about you?',
    creator: '@Vinit_Shahdeo',
    images: ['/images/digital-footprint-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://digitalfootprint.vinitshahdeo.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}