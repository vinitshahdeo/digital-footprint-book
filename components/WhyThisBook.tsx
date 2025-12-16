'use client'

import { CheckCircle2, Shield, Target, BookOpen, TrendingUp, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

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
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Sparkles className="w-4 h-4" />
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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="text-left group cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Simple Icon */}
              <motion.div 
                className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <reason.icon className="w-6 h-6 text-white" />
              </motion.div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section - Modern Redesign */}
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 md:p-20">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10"></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
            
            <div className="relative z-10 text-center">
              {/* Opening Quote Mark */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <svg className="w-16 h-16 mx-auto text-blue-400 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                </svg>
              </motion.div>

              <motion.p 
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Not another growth hacking guide.{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  Just honest, practical advice
                </span>{' '}
                for engineers who want their work to speak for itself.
              </motion.p>

              <motion.div 
                className="flex items-center justify-center gap-3 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400"></div>
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400"></div>
              </motion.div>

              <motion.p 
                className="text-lg text-slate-400 font-medium"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Real frameworks from real engineering experience
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
