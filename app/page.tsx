import Hero from '@/components/Hero'
import GoogleYourself from '@/components/GoogleYourself'
import VisibilityGap from '@/components/VisibilityGap'
import BookCoverage from '@/components/BookCoverage'
import CareerImpact from '@/components/CareerImpact'
import Searchability from '@/components/Searchability'
import DigitalFootprintVisual from '@/components/DigitalFootprintVisual'
import BookIntro from '@/components/BookIntro'
import Author from '@/components/Author'
import WhyThisBook from '@/components/WhyThisBook'
import Testimonials from '@/components/Testimonials'
import DecisionTable from '@/components/DecisionTable'
import Purchase from '@/components/Purchase'
import CallToAction from '@/components/CallToAction'
import AIFutureSection from '@/components/AIFutureSection'
import FeaturedReels from '@/components/FeaturedReels'
import FeaturedOn from '@/components/FeaturedOn'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* 1. First Impression */}
      <Hero />

      {/* 2. Problem Zone - Hook & Pain Points */}
      <GoogleYourself />
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
      {/* <FeaturedReels /> */}
      <Searchability />
      <DigitalFootprintVisual />
      <CallToAction />
      {/* <FeaturedOn /> */}

      {/* 5. Conversion Zone */}
      {/* <DecisionTable /> */}
      <Purchase />
      <FeaturedOn />
      <Footer />
    </main>
  )
}
