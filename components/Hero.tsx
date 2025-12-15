'use client'

import { ArrowRight, BookOpen, Eye } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [onlineCount, setOnlineCount] = useState(5.35)

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const increment = Math.random() * 0.0001
        const newCount = prev + increment
        return parseFloat(newCount.toFixed(4))
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-white">
      {/* Clean Apple-style Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

      <div className="relative max-w-5xl mx-auto text-center animate-fade-in">
        {/* Book Badge */}
        <div className="inline-block mb-6 animate-slide-up">
          <span className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full">
            New Book Available Now
          </span>
        </div>

        {/* Live Counter */}
        <div className="mb-6 animate-slide-up" style={{animationDelay: '0.05s'}}>
          <p className="text-sm md:text-base text-slate-500 font-mono">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {onlineCount.toFixed(2)}B people online right now
            </span>
          </p>
        </div>

        {/* Large Apple-style Headline with Hook */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-[1.05] tracking-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
          <span className="text-black">
            Your code speaks.
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            Does the internet know about you?
          </span>
        </h1>

        {/* Clean Subheading */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal animate-slide-up" style={{animationDelay: '0.2s'}}>
          A practical playbook to build a strong, authentic digital presence—without feeling like a self-promoter.
        </p>

        {/* Apple-style CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.3s'}}>
          <a
            href="#purchase"
            className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <span className="flex items-center gap-2 justify-center">
              <BookOpen className="w-5 h-5" />
              Get the book
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
          <a
            href="#preview"
            className="group px-8 py-4 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-all duration-300 w-full sm:w-auto"
          >
            <span className="flex items-center gap-2 justify-center">
              <Eye className="w-5 h-5" />
              See what's inside
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
