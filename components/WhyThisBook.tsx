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
          <h2 className="text-5xl md:text-6xl font-semibold text-black mb-4 tracking-tight">
            Not another LinkedIn guru
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
      </div>
    </section>
  )
}
