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
    <section className="py-40 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-200/15 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-indigo-200/15 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 bg-green-50 border border-green-200 rounded-full mb-6">
            <span className="text-xs font-semibold text-green-700 tracking-wide uppercase">
              Built for Engineers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
            Why This Book?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Engineering-first. No marketing fluff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-green-600 flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                {reason.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 p-12 md:p-16 border-l-4 border-white">
            <p className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-snug">
              No shortcuts. No hacks. Just proven frameworks that work.
            </p>
            <p className="text-slate-300 text-lg">
              Built for engineers who want to be known for their craft, not their content calendar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
