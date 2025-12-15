'use client'

import { CheckCircle2, Shield, Target, BookOpen, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Written by a practicing engineer',
    description: 'Real experience, not theory'
  },
  {
    icon: Target,
    title: 'No fluff, no influencer tactics',
    description: 'Straight to the point'
  },
  {
    icon: BookOpen,
    title: 'Real examples, frameworks, and checklists',
    description: 'Actionable from day one'
  },
  {
    icon: TrendingUp,
    title: 'Focused on long-term credibility',
    description: 'Build lasting reputation'
  }
]

export default function WhyThisBook() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase inline-block px-4 py-2 bg-blue-50 rounded-full">
            Why This Book
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-4 tracking-tight leading-[1.1]">
            Not another{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              LinkedIn
            </span>{' '}
            guru
          </h2>
          <p className="text-xl text-slate-600">
            Written by an engineer, for engineers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-left group cursor-default">
              {/* Simple Icon */}
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-slate-50 rounded-2xl p-10 md:p-12">
            <p className="text-2xl md:text-3xl font-semibold text-black mb-4 leading-tight">
              "Not another growth hacking guide. Just honest, practical advice for engineers who want their work to speak for itself."
            </p>
            <p className="text-slate-600">
              — Real frameworks from real engineering experience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
