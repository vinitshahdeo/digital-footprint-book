'use client'

import { ShoppingCart, BookOpen, Sparkles, ArrowRight } from 'lucide-react'

export default function Purchase() {
  return (
    <section id="purchase" className="relative py-40 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-grid-slate-700/25 bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-10 shadow-xl">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium text-white tracking-wide">Available Now</span>
        </div>

        <h2 className="text-6xl md:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-[1.05]">
          Get Your Copy Today
        </h2>
        
        <p className="text-2xl text-blue-100 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
          Start building your digital footprint and let your engineering work speak for itself
        </p>

        {/* Purchase Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-10 py-6 bg-white text-slate-900 rounded-2xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-white/20 transition-all transform hover:scale-[1.02] w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <ShoppingCart className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Buy on Amazon</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <a
            href="https://www.flipkart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-2xl font-bold text-lg hover:from-orange-700 hover:to-orange-800 shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-[1.02] w-full sm:w-auto"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Buy on Flipkart</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <a
            href="#ebook"
            className="group flex items-center gap-3 px-10 py-6 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/50 shadow-2xl transition-all transform hover:scale-[1.02] w-full sm:w-auto"
          >
            <BookOpen className="w-5 h-5" />
            <span>Get eBook</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Format Info */}
        <div className="flex flex-wrap justify-center gap-6 text-base text-blue-200 font-light">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>Paperback</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>Kindle</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span>ePub</span>
          </div>
        </div>
      </div>
    </section>
  )
}
