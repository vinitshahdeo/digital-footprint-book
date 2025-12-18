'use client'

import { Code2, Linkedin, FileText, Globe2, Users, Search, Lightbulb, Twitter, Shield, Sparkles, Briefcase, Youtube, Mic, Rocket, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const topics = [
  {
    icon: Code2,
    title: 'Building a powerful GitHub profile',
    description: 'Make your repositories speak for your engineering skills',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Linkedin,
    title: 'Using LinkedIn intentionally (without cringe)',
    description: 'Professional networking that feels authentic',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: FileText,
    title: 'Writing blogs that compound over time',
    description: 'Create content that builds lasting credibility',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Globe2,
    title: 'Portfolios that actually get noticed',
    description: 'Showcase your work effectively to recruiters and peers',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Users,
    title: 'Open source, hackathons, and community signals',
    description: 'Leverage community work to amplify your presence',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Search,
    title: 'Being searchable and credible on Google',
    description: 'Own your digital identity across the web',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Twitter,
    title: 'Using social media like Twitter and Instagram',
    description: 'Strategic visibility without the noise',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Shield,
    title: 'Security and privacy online',
    description: 'Protect yourself while staying visible',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Sparkles,
    title: 'Making AI work in your favour',
    description: 'Leverage AI tools to amplify your presence',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Briefcase,
    title: 'Landing jobs using digital footprint',
    description: 'Turn your online presence into career opportunities',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Youtube,
    title: 'Creating content on YouTube',
    description: 'Video content that showcases your expertise',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Mic,
    title: 'Starting and growing podcasts',
    description: 'Build authority through audio storytelling',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Rocket,
    title: 'Launching on Product Hunt and community projects',
    description: 'Make your code speak through strategic launches',
    gradient: 'from-purple-500 to-purple-600'
  }
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
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Apple-style Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full font-accent">
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
            Twelve practical chapters with frameworks you can use today
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
                    <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Icon with gradient background */}
                      <div className="relative mb-5">
                        <motion.div 
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${topic.gradient}`}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <topic.icon className="w-6 h-6 text-white" strokeWidth={2} />
                        </motion.div>
                      </div>
                    
                    {/* Content */}
                      <div className="relative">
                        <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-200">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {topic.description}
                        </p>
                      </div>

                    {/* Bottom accent line */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${topic.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
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
