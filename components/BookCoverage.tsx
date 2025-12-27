'use client'

import {
  Code2,
  Linkedin,
  FileText,
  Users,
  Search,
  Lightbulb,
  Twitter,
  Shield,
  Sparkles,
  Briefcase,
  Youtube,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const topics = [
  {
    icon: Lightbulb,
    title: 'The 3C Model: Code, Content & Community',
    description: 'The foundational framework for building your digital presence',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Code2,
    title: 'GitHub Mastery',
    description: 'Advanced practices to craft a standout profile and make your code shine',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Strategies for Engineers',
    description: 'From essentials to advanced tactics for professional networking',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Twitter,
    title: 'Mastering Twitter & Social Platforms',
    description: 'Crack the code to going viral as a developer',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Youtube,
    title: 'Visual Content & Video',
    description: 'YouTube, Instagram Reels, and short-form magic for engineers',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: FileText,
    title: 'Blogging, Newsletters & Portfolios',
    description: 'Technical writing, developer portfolios, and growing your audience',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    title: 'Community & Open Source',
    description: 'Hackathons, mentorship, and structured programs to grow influence',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: Rocket,
    title: 'The FOOTPRINT Framework',
    description: 'Your blueprint to a stellar digital presence with tools & playbooks',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Search,
    title: 'SEO & Google Visibility',
    description: 'Be unmissable — show up when people search for you',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: Shield,
    title: 'Security, Privacy & Digital Hygiene',
    description: 'Protect yourself while building a healthy online presence',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Sparkles,
    title: 'AI & Your Digital Footprint',
    description: 'How AI impacts and helps you build your online presence',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: Briefcase,
    title: 'Landing Jobs with Strong Presence',
    description: 'Turn your digital footprint into career opportunities',
    gradient: 'from-blue-500 to-blue-600',
  },
]

export default function BookCoverage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cardsPerView = 3
  const totalSlides = Math.ceil(topics.length / cardsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const getCurrentCards = () => {
    const start = currentIndex * cardsPerView
    return topics.slice(start, start + cardsPerView)
  }

  return (
    <section id="whats-inside" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Apple-style Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Lightbulb className="w-4 h-4" />
            What You'll Learn
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Inside the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              book
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            38 actionable chapters across 11 sections with frameworks you can use today
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Cards Grid with Animation */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {getCurrentCards().map((topic, index) => (
                  <motion.div
                    key={currentIndex * cardsPerView + index}
                    className="relative bg-white rounded-2xl p-7 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group cursor-default overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    {/* Subtle gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Icon with gradient background */}
                    <div className="relative mb-5">
                      <motion.div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${topic.gradient}`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      >
                        <topic.icon className="w-6 h-6 text-white" strokeWidth={2} />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{topic.description}</p>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${topic.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              onClick={prevSlide}
              className="group p-3 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
            </motion.button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="group p-3 rounded-full bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
            </motion.button>
          </div>

          {/* Slide Counter */}
          <p className="text-center mt-5 text-sm text-slate-500">
            {currentIndex + 1} of {totalSlides}
          </p>
        </div>
      </div>
    </section>
  )
}
