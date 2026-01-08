'use client'

import { motion } from 'framer-motion'
import { Bot, ExternalLink } from 'lucide-react'

export default function AIFutureSection() {
  const geminiUrl = `https://gemini.google.com/app?text=${encodeURIComponent('Who is Vinit Shahdeo?')}`

  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge - consistent with Purchase section */}
          <p className="text-sm font-medium text-blue-400 mb-6 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <Bot className="w-4 h-4" />
            The Future of Hiring
          </p>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            AI Will Find You—{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              If You&apos;re Discoverable
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed">
            The next wave of hiring won&apos;t start with a job application. It&apos;ll start with an AI
            agent researching candidates online. Make sure it finds the right story about you.
          </p>

          {/* CTA Section - consistent spacing */}
          <div className="space-y-6">
            <p className="text-slate-300 text-base">
              See for yourself—ask AI about the author of this book
            </p>

            {/* Gradient border button */}
            <a
              href={geminiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center hover:scale-[1.02] transition-transform duration-200"
            >
              {/* Gradient border wrapper with glow on hover */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 p-[2px] group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-shadow duration-200">
                <span className="block h-full w-full rounded-full bg-slate-900" />
              </span>
              
              {/* Content */}
              <span className="relative inline-flex items-center gap-2.5 px-7 py-3.5 text-white font-medium">
                {/* AI Sparkle Icon - two 4-pointed stars */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 2L11.5 7.5L17 9L11.5 10.5L10 16L8.5 10.5L3 9L8.5 7.5L10 2Z" />
                  <path d="M18 12L19 15L22 16L19 17L18 20L17 17L14 16L17 15L18 12Z" />
                </svg>
                <span>Ask AI</span>
                <span className="text-white/60 font-normal">about Vinit Shahdeo</span>
                <ExternalLink className="w-4 h-4 text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
            </a>

            <p className="text-xs text-slate-500">Opens Google Gemini with a pre-filled prompt</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
