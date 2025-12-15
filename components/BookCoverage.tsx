'use client'

import { Code2, Linkedin, FileText, Globe2, Users, Search } from 'lucide-react'

const topics = [
  {
    icon: Code2,
    title: 'Building a powerful GitHub profile',
    description: 'Make your repositories speak for your engineering skills',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Linkedin,
    title: 'Using LinkedIn intentionally (without cringe)',
    description: 'Professional networking that feels authentic',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: FileText,
    title: 'Writing blogs that compound over time',
    description: 'Create content that builds lasting credibility',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    icon: Globe2,
    title: 'Portfolios that actually get noticed',
    description: 'Showcase your work effectively to recruiters and peers',
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    icon: Users,
    title: 'Open source, hackathons, and community signals',
    description: 'Leverage community work to amplify your presence',
    gradient: 'from-orange-500 to-pink-500'
  },
  {
    icon: Search,
    title: 'Being searchable and credible on Google',
    description: 'Own your digital identity across the web',
    gradient: 'from-green-500 to-emerald-500'
  }
]

export default function BookCoverage() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 bg-[size:32px_32px] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              COMPREHENSIVE GUIDE
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tighter leading-[1.1]">
            What the Book Covers
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            A practical playbook for engineers who want their work to be seen
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl`} />
              <div className="absolute inset-[1px] bg-white rounded-2xl -z-10" />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${topic.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <topic.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-slate-800">
                {topic.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
