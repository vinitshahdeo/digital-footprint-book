'use client'

import { CheckCircle2, Shield, Target, BookOpen, TrendingUp, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const reasons = [
  {
    icon: Shield,
    title: 'Written by a practicing engineer',
    description: 'Real experience, not theory',
  },
  {
    icon: Target,
    title: 'No fluff, no influencer tactics',
    description: 'Straight to the point',
  },
  {
    icon: BookOpen,
    title: 'Real examples, frameworks, and checklists',
    description: 'Actionable from day one',
  },
  {
    icon: TrendingUp,
    title: 'Focused on long-term credibility',
    description: 'Build lasting reputation',
  },
]

export default function WhyThisBook() {
  return (
    <section className="py-16 md:py-28 px-6 bg-gradient-to-b from-slate-50/80 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Sparkles className="w-4 h-4" />
            Why This Book
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Not another{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              LinkedIn
            </span>{' '}
            guru
          </h2>
          <p className="text-lg text-slate-600">Written by an engineer, for engineers</p>
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
                className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-5"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <reason.icon className="w-5 h-5 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors duration-200">
                {reason.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
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
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 md:p-16">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10"></div>

            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />

            <div className="relative z-10 text-center">
              {/* Opening Quote Mark */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <svg
                  className="w-16 h-16 mx-auto text-blue-400 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                </svg>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-6 max-w-2xl mx-auto"
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
                className="text-lg text-slate-400 font-medium mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Real frameworks from real engineering experience
              </motion.p>

              {/* Try it yourself - Google search bar */}
              <motion.div
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <a
                  href="https://www.google.com/search?q=Vinit+Shahdeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-white rounded-full border border-slate-200 hover:shadow-lg transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                      fill="#FFC107"
                    />
                    <path
                      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                      fill="#1976D2"
                    />
                  </svg>
                  <span className="text-sm text-slate-600">Vinit Shahdeo</span>
                  <div className="flex items-center gap-2 ml-4">
                    <svg
                      className="w-4 h-4 text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                  </div>
                </a>
                <p className="text-xs text-slate-500">See the principles in action</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
