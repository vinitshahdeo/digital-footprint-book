'use client'

import { Code2, Linkedin, FileText, Globe2, Users, Search, Lightbulb, Twitter, Shield, Sparkles, Briefcase, Youtube, Mic, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const topics = [
  {
    icon: Code2,
    title: 'Building a powerful GitHub profile',
    description: 'Make your repositories speak for your engineering skills',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Linkedin,
    title: 'Using LinkedIn intentionally (without cringe)',
    description: 'Professional networking that feels authentic',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: FileText,
    title: 'Writing blogs that compound over time',
    description: 'Create content that builds lasting credibility',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Globe2,
    title: 'Portfolios that actually get noticed',
    description: 'Showcase your work effectively to recruiters and peers',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Users,
    title: 'Open source, hackathons, and community signals',
    description: 'Leverage community work to amplify your presence',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Search,
    title: 'Being searchable and credible on Google',
    description: 'Own your digital identity across the web',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Twitter,
    title: 'Using social media like Twitter and Instagram',
    description: 'Strategic visibility without the noise',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Shield,
    title: 'Security and privacy online',
    description: 'Protect yourself while staying visible',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Sparkles,
    title: 'Making AI work in your favour',
    description: 'Leverage AI tools to amplify your presence',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Briefcase,
    title: 'Landing jobs using digital footprint',
    description: 'Turn your online presence into career opportunities',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Youtube,
    title: 'Creating content on YouTube',
    description: 'Video content that showcases your expertise',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Mic,
    title: 'Starting and growing podcasts',
    description: 'Build authority through audio storytelling',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Rocket,
    title: 'Launching on Product Hunt and community projects',
    description: 'Make your code speak through strategic launches',
    gradient: 'from-purple-500 to-purple-600'
  }
]

export default function BookCoverage() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Apple-style Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full font-accent">
            <Lightbulb className="w-4 h-4" />
            What You'll Learn
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-4 tracking-tight leading-[1.1]">
            Inside the{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              book
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Twelve practical chapters with frameworks you can use today
          </p>
        </div>

        {/* Apple-style Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <motion.div 
              key={index} 
              className="relative bg-white rounded-3xl p-8 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Subtle gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon with gradient background */}
              <div className="relative mb-6">
                <motion.div 
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${topic.gradient} shadow-lg shadow-blue-500/20`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <topic.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-semibold text-slate-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                  {topic.title}
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {topic.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${topic.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
