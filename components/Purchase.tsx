'use client'

import { ArrowRight, ShoppingCart } from 'lucide-react'

export default function Purchase() {
  return (
    <section id="purchase" className="relative py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-semibold text-blue-400 mb-4 tracking-wider uppercase inline-block px-4 py-2 bg-blue-950 rounded-full">
          Ready to Start?
        </p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
          Get{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
              Digital Footprint
            </span>
          </span>{' '}
          today
        </h2>
        
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Start building your online presence and make your engineering work visible
        </p>

        {/* Clean Apple-style Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Buy on Amazon</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <a
            href="https://www.flipkart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Buy on Flipkart</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Simple Format Info */}
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
