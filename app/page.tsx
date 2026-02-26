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
import WhyThisBookV1 from '@/components/WhyThisBookV1'
import WhyThisBookV2 from '@/components/WhyThisBookV2'
import WhyThisBookV3 from '@/components/WhyThisBookV3'
import WhyThisBookV4 from '@/components/WhyThisBookV4'
import WhyThisBookV5 from '@/components/WhyThisBookV5'
import WhyThisBookV6 from '@/components/WhyThisBookV6'
import WhyThisBookV7 from '@/components/WhyThisBookV7'
import Testimonials from '@/components/Testimonials'
import DecisionTable from '@/components/DecisionTable'
import Purchase from '@/components/Purchase'
import CallToAction from '@/components/CallToAction'
import AskAI from '@/components/AskAI'
import AIFutureSection from '@/components/AIFutureSection'
import FeaturedReels from '@/components/FeaturedReels'
import FeaturedOn from '@/components/FeaturedOn'
import Footer from '@/components/Footer'
import HeroV1 from '@/components/HeroV1'
import HeroV2 from '@/components/HeroV2'
import HeroV3 from '@/components/HeroV3'
import HeroV4 from '@/components/HeroV4'
import HeroV5 from '@/components/HeroV5'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* 1. First Impression */}
      {/* <Hero /> */}
      <HeroV1 />
      {/* <HeroV2 />
      <HeroV3 />
      <HeroV4 />
      <HeroV5 /> */}

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
      {/* <WhyThisBook /> */}
      {/* <WhyThisBookV1 /> */}
      <WhyThisBookV2 />
      {/* <WhyThisBookV3 />
      <WhyThisBookV4 />
      <WhyThisBookV5 />
      <WhyThisBookV6 />
      <WhyThisBookV7 /> */}

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
