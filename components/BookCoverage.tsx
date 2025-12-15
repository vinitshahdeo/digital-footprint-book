'use client'

import { Code2, Linkedin, FileText, Globe2, Users, Search, Lightbulb, Twitter, Shield, Sparkles, Briefcase, Youtube, Mic, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

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
  },
  {
    icon: Twitter,
    title: 'Using social media like Twitter and Instagram',
    description: 'Strategic visibility without the noise',
    gradient: 'from-sky-500 to-blue-500'
  },
  {
    icon: Shield,
    title: 'Security and privacy online',
    description: 'Protect yourself while staying visible',
    gradient: 'from-red-500 to-orange-500'
  },
  {
    icon: Sparkles,
    title: 'Making AI work in your favour',
    description: 'Leverage AI tools to amplify your presence',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Briefcase,
    title: 'Landing jobs using digital footprint',
    description: 'Turn your online presence into career opportunities',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Youtube,
    title: 'Creating content on YouTube',
    description: 'Video content that showcases your expertise',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: Mic,
    title: 'Starting and growing podcasts',
    description: 'Build authority through audio storytelling',
    gradient: 'from-indigo-500 to-violet-500'
  },
  {
    icon: Rocket,
    title: 'Launching on Product Hunt and community projects',
    description: 'Make your code speak through strategic launches',
    gradient: 'from-amber-500 to-orange-500'
  }
]

export default function BookCoverage() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Apple-style Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
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

        {/* Clean Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <motion.div 
              key={index} 
              className="text-left group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Simple Icon */}
              <motion.div 
                className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <topic.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {topic.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
