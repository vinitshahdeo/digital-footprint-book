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
  metadataBase: new URL('https://digital-footprint-book.vercel.app'),
  title: 'Digital Footprint for Software Engineers | Vinit Shahdeo',
  description:
    'Build a strong, authentic digital footprint using GitHub, LinkedIn, blogs, portfolios, and community work—without fake self-promotion. A practical playbook by Vinit Shahdeo.',
  keywords:
    'software engineering, digital footprint, github, linkedin, portfolio, blog, open source, personal branding, career growth, developer visibility',
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
    description:
      'Your code speaks. But what does the internet say about you? A practical playbook for engineers who want their work to be discoverable.',
    type: 'website',
    url: 'https://digital-footprint-book.vercel.app',
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
    canonical: 'https://digital-footprint-book.vercel.app',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // Book Schema
    {
      '@type': 'Book',
      '@id': 'https://digital-footprint-book.vercel.app/#book',
      name: 'Digital Footprint for Software Engineers',
      description:
        'Build a strong, authentic digital footprint using GitHub, LinkedIn, blogs, portfolios, and community work—without fake self-promotion.',
      isbn: '978-93-7197-527-8',
      numberOfPages: 350,
      bookFormat: 'https://schema.org/Paperback',
      inLanguage: 'en',
      author: {
        '@type': 'Person',
        '@id': 'https://digital-footprint-book.vercel.app/#author',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Notion Press',
      },
      image: 'https://digital-footprint-book.vercel.app/images/digital-footprint-og.jpg',
      url: 'https://digital-footprint-book.vercel.app',
      offers: [
        {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'INR',
          seller: {
            '@type': 'Organization',
            name: 'Amazon',
          },
          url: 'https://www.amazon.in/dp/B0DT384MJ9',
        },
        {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'INR',
          seller: {
            '@type': 'Organization',
            name: 'Flipkart',
          },
          url: 'https://www.flipkart.com',
        },
      ],
    },
    // Author Schema
    {
      '@type': 'Person',
      '@id': 'https://digital-footprint-book.vercel.app/#author',
      name: 'Vinit Shahdeo',
      url: 'https://vinitshahdeo.com',
      sameAs: [
        'https://twitter.com/Vinit_Shahdeo',
        'https://linkedin.com/in/vinitshahdeo',
        'https://github.com/vinitshahdeo',
        'https://vinitshahdeo.substack.com',
      ],
      jobTitle: 'Software Engineer',
      description:
        'Software Engineer and author helping developers build authentic digital presence.',
      image: 'https://vinitshahdeo.com/images/vinit-shahdeo.jpg',
    },
    // WebSite Schema
    {
      '@type': 'WebSite',
      '@id': 'https://digital-footprint-book.vercel.app/#website',
      url: 'https://digital-footprint-book.vercel.app',
      name: 'Digital Footprint for Software Engineers',
      description: 'A practical playbook for engineers who want their work to be discoverable.',
      publisher: {
        '@type': 'Person',
        '@id': 'https://digital-footprint-book.vercel.app/#author',
      },
      inLanguage: 'en',
    },
    // WebPage Schema
    {
      '@type': 'WebPage',
      '@id': 'https://digital-footprint-book.vercel.app/#webpage',
      url: 'https://digital-footprint-book.vercel.app',
      name: 'Digital Footprint for Software Engineers | Vinit Shahdeo',
      isPartOf: {
        '@id': 'https://digital-footprint-book.vercel.app/#website',
      },
      about: {
        '@id': 'https://digital-footprint-book.vercel.app/#book',
      },
      description:
        'Build a strong, authentic digital footprint using GitHub, LinkedIn, blogs, portfolios, and community work.',
      inLanguage: 'en',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
