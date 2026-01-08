'use client'

import { motion } from 'framer-motion'
import { Bot, Sparkles, ExternalLink } from 'lucide-react'

export default function AIFutureSection() {
  const geminiUrl = `https://gemini.google.com/app?text=${encodeURIComponent('Who is Vinit Shahdeo?')}`

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge - matched sizing with other sections */}
          <p className="text-xs font-medium text-blue-300 mb-6 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/30 rounded-full">
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

            <a
              href={geminiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              Ask AI
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>

            <p className="text-xs text-slate-500">Opens Google Gemini with a pre-filled prompt</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
