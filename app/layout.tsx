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
  title: 'Digital Footprint for Software Engineers | Vinit Shahdeo',
  description: 'Build a strong, authentic digital footprint using GitHub, LinkedIn, blogs, portfolios, and community work—without fake self-promotion. A practical playbook by Vinit Shahdeo.',
  keywords: 'software engineering, digital footprint, github, linkedin, portfolio, blog, open source, personal branding',
  authors: [{ name: 'Vinit Shahdeo' }],
  openGraph: {
    title: 'Digital Footprint for Software Engineers',
    description: 'Your code speaks. But what does the internet say about you?',
    type: 'website',
    images: [
      {
        url: '/images/digital-footprint-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Footprint for Software Engineers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Footprint for Software Engineers',
    description: 'Your code speaks. But what does the internet say about you?',
    images: ['/images/digital-footprint-og.jpg'],
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}