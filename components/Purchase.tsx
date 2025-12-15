'use client'

import { ArrowRight, ShoppingCart, Rocket, Check } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  'Instant digital download',
  '12 comprehensive chapters',
  'Real-world frameworks',
  'Lifetime access'
]

export default function Purchase() {
  return (
    <section id="purchase" className="relative py-32 px-6 bg-gradient-to-b from-slate-900 to-black">
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 mb-6 tracking-wider uppercase inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 font-accent">
            <Rocket className="w-4 h-4" />
            Ready to Start?
          </p>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Digital Footprint
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl">
              for Software Engineers
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Get your copy today and start building your online presence
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10"
              >
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-2xl mx-auto">
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 w-full sm:w-auto"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Buy on Amazon</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <a
            href="https://www.flipkart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 hover:border-white/30 transition-all duration-300 w-full sm:w-auto"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Buy on Flipkart</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Format Info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          <span>Paperback</span>
          <span>•</span>
          <span>Kindle</span>
          <span>•</span>
          <span>ePub</span>
        </div>
      </div>
    </section>
  )
}
