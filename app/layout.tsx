import type { Metadata } from 'next'
import { DM_Sans, Andada_Pro } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const andadaPro = Andada_Pro({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${andadaPro.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}