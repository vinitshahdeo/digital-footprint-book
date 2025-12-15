import Hero from '@/components/Hero'
import GoogleYourself from '@/components/GoogleYourself'
import VisibilityGap from '@/components/VisibilityGap'
import BookCoverage from '@/components/BookCoverage'
import CareerImpact from '@/components/CareerImpact'
import Searchability from '@/components/Searchability'
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
      <VisibilityGap />
      <BookCoverage />
      <CareerImpact />
      <Searchability />
      <WhyThisBook />
      <Author />
      {/* <DecisionTable /> */}
      <Purchase />
      <Footer />
    </main>
  )
}
