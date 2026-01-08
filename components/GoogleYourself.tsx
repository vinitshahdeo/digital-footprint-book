'use client'

import { Search } from 'lucide-react'
import { motion } from 'framer-motion'

export default function GoogleYourself() {
  return (
    <section className="py-16 md:py-28 px-6 bg-gradient-to-b from-white via-slate-50/50 to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Search className="w-4 h-4" />
            Reality Check
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Ever{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Googled
            </span>{' '}
            yourself?
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Recruiters do. Hiring managers do. Everyone does.
          </p>
          <p className="text-lg italic text-slate-600 max-w-2xl mx-auto mb-8">
            What shows up when they search your name?
          </p>

          {/* Google Search Bar */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="https://www.google.com/search?q=Vinit+Shahdeo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 pl-4 pr-3 py-2.5 bg-white rounded-full border border-slate-300 hover:shadow-lg hover:border-slate-400 transition-all duration-200 group max-w-sm"
            >
              {/* Google Logo */}
              <svg
                className="w-4 h-4 flex-shrink-0"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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

              {/* Search Text */}
              <span className="text-sm text-slate-700 font-normal flex-1 text-left">
                Vinit Shahdeo
              </span>

              {/* Right Icons */}
              <div className="flex items-center gap-2.5">
                {/* Microphone Icon */}
                <svg
                  className="w-4 h-4 text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>

                {/* Search Icon */}
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
          </motion.div>
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
                  transition={{ duration: 0.7, type: 'spring', delay: 0.3 }}
                >
                  <div className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent leading-none">
                    70%
                  </div>
                </motion.div>
                <div>
                  <p className="text-xl md:text-2xl font-semibold text-slate-900 mb-1">
                    of recruiters Google you first
                  </p>
                  <p className="text-base text-slate-600">before they even schedule an interview</p>
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
                    className="text-6xl font-bold bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent mb-3"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, type: 'spring', delay: 0.5 }}
                  >
                    85%
                  </motion.div>
                  <p className="text-lg font-semibold text-slate-900 mb-1">Check social profiles</p>
                  <p className="text-slate-600 text-sm">GitHub & LinkedIn before your résumé</p>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.div
                    className="text-6xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent mb-3"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, type: 'spring', delay: 0.6 }}
                  >
                    63%
                  </motion.div>
                  <p className="text-lg font-semibold text-slate-900 mb-1">Candidates rejected</p>
                  <p className="text-slate-600 text-sm">due to poor online presence</p>
                </motion.div>
              </div>

              {/* Bottom CTA */}
              <motion.div
                className="pt-10 text-center"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <p className="text-lg md:text-xl italic font-medium text-slate-700 mb-2">
                  If you don't control your digital footprint,
                </p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">Google will.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
