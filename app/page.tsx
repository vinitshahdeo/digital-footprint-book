import Hero from '@/components/Hero'
import Purchase from '@/components/Purchase'
import FeaturedOn from '@/components/FeaturedOn'
import dynamic from 'next/dynamic'

// Below-fold client components — code-split for smaller initial JS bundle
const GoogleYourself = dynamic(() => import('@/components/GoogleYourself'))
const AskAI = dynamic(() => import('@/components/AskAI'))
const VisibilityGap = dynamic(() => import('@/components/VisibilityGap'))
const CareerImpact = dynamic(() => import('@/components/CareerImpact'))
const AIFutureSection = dynamic(() => import('@/components/AIFutureSection'))
const BookIntro = dynamic(() => import('@/components/BookIntro'))
const Author = dynamic(() => import('@/components/Author'))
const BookCoverage = dynamic(() => import('@/components/BookCoverage'))
const WhyThisBook = dynamic(() => import('@/components/WhyThisBook'))
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const Searchability = dynamic(() => import('@/components/Searchability'))
const DigitalFootprintVisual = dynamic(() => import('@/components/DigitalFootprintVisual'))
const CallToAction = dynamic(() => import('@/components/CallToAction'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* 1. First Impression */}
      <Hero />

      {/* 2. Problem Zone - Hook & Pain Points */}
      <GoogleYourself />
      <AskAI />
      <VisibilityGap />
      <CareerImpact />
      <AIFutureSection />

      {/* 3. Solution Zone - The Book & Author */}
      <BookIntro />
      <Author />
      <BookCoverage />
      <WhyThisBook />

      {/* 4. Reinforcement Zone - Value & Proof */}
      <Testimonials />
      <Searchability />
      <DigitalFootprintVisual />
      <CallToAction />

      {/* 5. Conversion Zone */}
      <Purchase />
      <FeaturedOn />
      <Footer />
    </main>
  )
}
