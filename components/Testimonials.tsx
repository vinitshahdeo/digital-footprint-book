'use client'

import { Quote, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    quote: 'Finally, a book that treats visibility as engineering craft, not marketing theater.',
    name: 'Shreya Anand',
    role: 'Software Engineer',
    company: 'Microsoft',
    avatar: '/images/testimonials/shreya.jpg',
  },
  {
    quote:
      'The FOOTPRINT framework changed how I think about my online presence. Practical and actionable.',
    name: 'Aman Kumar',
    role: 'Site Reliability Engineer',
    company: 'Cloudflare',
    avatar: '/images/testimonials/aman.jpg',
  },
  {
    quote: 'I wish I had this when I started my career. Would have saved years of trial and error.',
    name: 'Archit Roy',
    role: 'Software Engineer',
    company: 'Bank of America',
    avatar: '/images/testimonials/archit.jpg',
  },
  {
    quote: 'No fluff, no cringe content advice. Just honest frameworks that actually work.',
    name: 'Shivam Shukla',
    role: 'Senior Software Engineer',
    company: 'IBM',
    avatar: '/images/testimonials/shivam.jpg',
  },
  {
    quote: 'The GitHub and LinkedIn chapters alone are worth it. My profile views went up 3x.',
    name: 'Anshika Verma',
    role: 'Frontend Engineer',
    company: 'Deloitte',
    avatar: '/images/testimonials/anshika.jpg',
  },
  {
    quote: "Vinit writes like an engineer, not a marketer. That's exactly what I needed.",
    name: 'Prabhat Singh Tomar',
    role: 'DevOps Engineer',
    company: 'Microsoft',
    avatar: '/images/testimonials/prabhat.jpg',
  },
  {
    quote: 'Started getting inbound opportunities within weeks of applying the strategies.',
    name: 'Jaya Singh',
    role: 'Software Engineer',
    company: 'Cognizant',
    avatar: '/images/testimonials/jaya.jpg',
  },
  {
    quote: 'The security and privacy chapter is gold. Nobody else talks about this.',
    name: 'Raghav Khandelwal',
    role: 'Senior Software Engineer',
    company: 'Oracle',
    avatar: '/images/testimonials/raghav.jpg',
  },
  {
    quote: 'Helped me build a presence that feels authentic. Recruiters now come to me.',
    name: 'Sharmishtha Dash',
    role: 'Director',
    company: 'CloudFiles',
    avatar: '/images/testimonials/sharmishtha.jpg',
  },
  {
    quote: 'The chapter on open source gave me the confidence to share my work. Game changer.',
    name: 'Ishika Kesharwani',
    role: 'Software Engineer',
    company: 'Dell',
    avatar: '/images/testimonials/ishika.jpg',
  },
  {
    quote:
      'Clear, structured advice that helped me grow my network authentically. Highly recommend.',
    name: 'Abha Himani',
    role: 'Software Engineer',
    company: 'Atlassian',
    avatar: '/images/testimonials/abha.jpg',
  },
  {
    quote: 'As a DevOps engineer, I never thought about personal branding. This book changed that.',
    name: 'Susheer Zingade',
    role: 'Senior DevOps Engineer',
    company: 'Cisco',
    avatar: '/images/testimonials/susheer.jpg',
  },
]

// Responsive hook for cards per view
function useCardsPerView() {
  const [cardsPerView, setCardsPerView] = useState(3)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
          setCardsPerView(1)
        } else if (window.innerWidth < 1024) {
          setCardsPerView(2)
        } else {
          setCardsPerView(3)
        }
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  return cardsPerView
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerView = useCardsPerView()
  const totalSlides = Math.ceil(testimonials.length / cardsPerView)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  // Reset index when cardsPerView changes to prevent out-of-bounds
  useEffect(() => {
    if (currentIndex >= totalSlides) {
      setCurrentIndex(0)
    }
  }, [totalSlides, currentIndex])

  const getCurrentCards = () => {
    const start = currentIndex * cardsPerView
    return testimonials.slice(start, start + cardsPerView)
  }

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        nextSlide()
      }
    },
    [prevSlide, nextSlide]
  )

  return (
    <section
      className="py-28 px-6 bg-gradient-to-b from-white to-slate-50/80"
      aria-label="Testimonials from engineers"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <MessageSquare className="w-4 h-4" />
            What Engineers Say
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              engineers
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From engineers at companies you know, who've applied these principles
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative"
          role="region"
          aria-label="Testimonials carousel"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Cards Grid with Animation */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {getCurrentCards().map((testimonial, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    className="relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-slate-300 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {/* Quote icon */}
                    <div className="mb-5">
                      <Quote className="w-8 h-8 text-blue-100" />
                    </div>

                    {/* Quote text */}
                    <blockquote className="mb-6">
                      <p className="text-slate-700 text-base leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>

                    {/* Author info */}
                    <div className="flex items-center gap-3">
                      {/* Avatar image */}
                      <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-500/30 flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-slate-500 truncate">
                          {testimonial.role} · {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              onClick={prevSlide}
              className="group p-3 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
            </motion.button>

            {/* Dot Indicators */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial pages">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-blue-500 to-blue-600'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to testimonial page ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="group p-3 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
            </motion.button>
          </div>

          {/* Slide Counter */}
          <p className="text-center mt-5 text-sm text-slate-500" aria-live="polite">
            {currentIndex + 1} of {totalSlides}
          </p>
        </div>
      </div>
    </section>
  )
}
