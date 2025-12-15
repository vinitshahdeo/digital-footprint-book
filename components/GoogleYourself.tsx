'use client'

import { Search } from 'lucide-react'

export default function GoogleYourself() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-8 hover:scale-110 transition-transform duration-300">
          <Search className="w-8 h-8 text-white" />
        </div>

        {/* Headline */}
        <h2 className="text-5xl md:text-6xl font-semibold text-black mb-8 tracking-tight">
          Ever Googled yourself?
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Recruiters do. Hiring managers do. Everyone does.
          <br />
          <span className="text-black font-semibold mt-4 block">
            What shows up when they search your name?
          </span>
        </p>
      </div>
    </section>
  )
}
