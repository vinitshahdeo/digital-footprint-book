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
import DecisionTable from '@/components/DecisionTable'
import Purchase from '@/components/Purchase'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <GoogleYourself />
      <CareerImpact />
      <VisibilityGap />
      <Searchability />
      <DigitalFootprintVisual />
      <BookIntro />
      <BookCoverage />
      <WhyThisBook />
      <Author />
      {/* <DecisionTable /> */}
      <Purchase />
      <Footer />
    </main>
  )
}
