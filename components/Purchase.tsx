'use client'

import { ArrowRight } from 'lucide-react'

export default function Purchase() {
  return (
    <section id="purchase" className="relative py-24 px-6 bg-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
          Start building your footprint
        </h2>
        
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          Get the book and start making your work visible
        </p>

        {/* Clean Apple-style Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            <span>Buy on Amazon</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <a
            href="https://www.flipkart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
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
