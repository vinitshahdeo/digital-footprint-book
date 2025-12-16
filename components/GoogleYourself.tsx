'use client'

import { Search } from 'lucide-react'
import { motion } from 'framer-motion'

export default function GoogleYourself() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full font-accent">
            <Search className="w-4 h-4" />
            Reality Check
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Ever{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Googled
            </span>{' '}
            yourself?
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Recruiters do. Hiring managers do. Everyone does.
          </p>
          <p className="text-xl font-handwriting text-blue-600 max-w-2xl mx-auto">
            What shows up when they search your name?
          </p>
        </div>

        {/* Stats - Modern Split Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Large Statement with Integrated Stats */}
          <motion.div 
            className="relative p-12 md:p-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="relative space-y-12">
              {/* First Stat */}
              <motion.div 
                className="flex flex-col items-center gap-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
                >
                  <div className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent leading-none">
                    70%
                  </div>
                </motion.div>
                <div>
                  <p className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">
                    of recruiters Google you first
                  </p>
                  <p className="text-lg text-slate-600">
                    before they even schedule an interview
                  </p>
                </div>
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

              {/* Second & Third Stats - Side by Side */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <motion.div 
                    className="text-7xl font-bold bg-gradient-to-br from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", delay: 0.5 }}
                  >
                    85%
                  </motion.div>
                  <p className="text-xl font-semibold text-slate-900 mb-1">
                    Check social profiles
                  </p>
                  <p className="text-slate-600">
                    GitHub & LinkedIn before your résumé
                  </p>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div 
                    className="text-7xl font-bold bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: "spring", delay: 0.6 }}
                  >
                    63%
                  </motion.div>
                  <p className="text-xl font-semibold text-slate-900 mb-1">
                    Candidates rejected
                  </p>
                  <p className="text-slate-600">
                    due to poor online presence
                  </p>
                </motion.div>
              </div>

              {/* Bottom CTA */}
              <motion.div 
                className="pt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <p className="text-2xl md:text-3xl font-handwriting text-blue-600 mb-3">
                  If you don't control your digital footprint,
                </p>
                <p className="text-3xl md:text-4xl font-bold text-slate-900">
                  Google will.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
