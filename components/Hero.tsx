'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-grid-slate-200/50 bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full mb-8 shadow-sm">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-slate-700">A Practical Playbook for Engineers</span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-[1.05] tracking-tighter">
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Your code speaks.
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            But what does the
            <br className="hidden sm:block" /> internet say about you?
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Build a strong, authentic digital footprint using GitHub, LinkedIn, blogs, 
          and community work—<span className="font-semibold text-slate-900">without fake self-promotion</span>.
        </p>

        {/* Book Cover Preview */}
        <div className="mb-16 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative inline-block bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1 rounded-2xl shadow-2xl">
            <div className="bg-white p-8 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <div className="w-2 h-2 rounded-full bg-indigo-600" />
                <div className="w-2 h-2 rounded-full bg-purple-600" />
              </div>
              <h2 className="font-serif text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-3">
                Digital Footprint
              </h2>
              <p className="text-slate-600 mb-6 text-lg">for Software Engineers</p>
              <div className="border-t border-slate-200 pt-4">
                <p className="text-sm text-slate-500 font-medium">Vinit Shahdeo</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="#purchase"
            className="group relative px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2 justify-center">
              Buy on Amazon
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#purchase"
            className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105 w-full sm:w-auto"
          >
            <span className="flex items-center gap-2 justify-center">
              Buy on Flipkart
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#purchase"
            className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-900 border-2 border-slate-300 rounded-xl font-semibold text-lg hover:bg-white hover:border-slate-400 transition-all shadow hover:shadow-lg w-full sm:w-auto"
          >
            <span className="flex items-center gap-2 justify-center">
              Get eBook
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

        {/* Secondary CTA */}
        <a
          href="#preview"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors group"
        >
          Preview the Book
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  )
}
