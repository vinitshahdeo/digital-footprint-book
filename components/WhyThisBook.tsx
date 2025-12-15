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
    <section className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              BUILT FOR ENGINEERS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tighter leading-[1.1]">
            Why This Book?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Engineering-first. No marketing fluff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-green-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-slate-600">
                {reason.description}
              </p>
              
              {/* Checkmark */}
              <CheckCircle2 className="absolute top-8 right-8 w-6 h-6 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-2xl shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl" />
            <div className="relative">
              <svg className="w-12 h-12 text-blue-500/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                No shortcuts. No hacks. Just proven frameworks that work.
              </p>
              <p className="text-slate-300 text-lg">
                Built for engineers who want to be known for their craft, not their content calendar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
