import Hero from '@/components/Hero'
import BookCoverage from '@/components/BookCoverage'
import Author from '@/components/Author'
import WhyThisBook from '@/components/WhyThisBook'
import Purchase from '@/components/Purchase'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BookCoverage />
      <WhyThisBook />
      <Author />
      <Purchase />
      <Footer />
    </main>
  )
}
