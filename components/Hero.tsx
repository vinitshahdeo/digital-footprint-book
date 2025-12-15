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
        <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-full mb-10 shadow-sm hover:shadow-md transition-shadow">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-medium text-slate-700 tracking-wide">A Practical Playbook for Engineers</span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-10 leading-[1.05] tracking-tighter">
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            Your code speaks.
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            But what does the internet say about you?
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
          Build a strong, authentic digital footprint using GitHub, LinkedIn, blogs, 
          and community work—<span className="font-medium text-slate-900">without fake self-promotion</span>.
        </p>

        {/* Book Cover Preview */}
        {/* Book Cover Preview */}
        <div className="mb-20 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="relative inline-block bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-1.5 rounded-3xl shadow-2xl">
            <div className="bg-white p-10 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-purple-600" />
              </div>
              <h2 className="font-serif text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4 tracking-tight">
                Digital Footprint
              </h2>
              <p className="text-slate-600 mb-8 text-xl font-light">for Software Engineers</p>
              <div className="border-t border-slate-200 pt-5">
                <p className="text-sm text-slate-500 font-medium tracking-wide">VINIT SHAHDEO</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href="#purchase"
            className="group relative px-10 py-5 bg-slate-900 text-white rounded-2xl font-semibold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2.5 justify-center">
              Buy on Amazon
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
          <a
            href="#purchase"
            className="group px-10 py-5 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-2xl font-semibold text-lg hover:from-orange-700 hover:to-orange-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02] w-full sm:w-auto"
          >
            <span className="flex items-center gap-2.5 justify-center">
              Buy on Flipkart
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
          <a
            href="#purchase"
            className="group px-10 py-5 bg-white/90 backdrop-blur-sm text-slate-900 border-2 border-slate-200 rounded-2xl font-semibold text-lg hover:bg-white hover:border-slate-300 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            <span className="flex items-center gap-2.5 justify-center">
              Get eBook
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
        </div>

        {/* Secondary CTA */}
        <a
          href="#preview"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium transition-colors group"
        >
          Preview the Book
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  )
}
