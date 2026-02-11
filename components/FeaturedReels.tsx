'use client'

import { motion } from 'framer-motion'
import { Play, Instagram } from 'lucide-react'

const reels = [
  {
    url: 'https://www.instagram.com/reel/DUghCSdktd4/',
    embedUrl: 'https://www.instagram.com/reel/DUghCSdktd4/embed/',
  },
]

export default function FeaturedReels() {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section badge */}
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Play className="w-4 h-4" />
            Featured Reels
          </p>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3 tracking-tight">
            Watch &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Learn
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto">
            Quick insights on building your digital footprint as a software engineer.
          </p>
        </motion.div>

        {/* Reels Grid */}
        <motion.div
          className={`flex justify-center gap-6 flex-wrap`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {reels.map((reel, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white"
              style={{ maxWidth: 400, width: '100%' }}
            >
              <iframe
                src={reel.embedUrl}
                width="100%"
                height="520"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                allow="encrypted-media"
                className="block"
                title={`Featured Instagram Reel ${index + 1}`}
              />
            </div>
          ))}
        </motion.div>

        {/* Follow CTA */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/vinitshahdeo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-pink-600 transition-colors group"
          >
            <Instagram className="w-4 h-4 group-hover:text-pink-600 transition-colors" />
            Follow for more reels
          </a>
        </motion.div>
      </div>
    </section>
  )
}
