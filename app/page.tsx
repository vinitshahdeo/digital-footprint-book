import Hero from '@/components/Hero'
import GoogleYourself from '@/components/GoogleYourself'
import BookCoverage from '@/components/BookCoverage'
import Author from '@/components/Author'
import WhyThisBook from '@/components/WhyThisBook'
import Purchase from '@/components/Purchase'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <GoogleYourself />
      <BookCoverage />
      <WhyThisBook />
      <Author />
      <Purchase />
      <Footer />
    </main>
  )
}
