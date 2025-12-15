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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Apple-style Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-semibold text-black mb-4 tracking-tight">
            A playbook, not a theory book
          </h2>
          <p className="text-xl text-slate-600">
            Practical frameworks you can use starting today
          </p>
        </div>

        {/* Clean Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div key={index} className="text-left group cursor-default">
              {/* Simple Icon */}
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <topic.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
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
