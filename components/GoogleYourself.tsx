'use client'

import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import GoogleSearchSimulator from './GoogleSearchSimulator'

export default function GoogleYourself() {
  return (
    <section className="relative py-16 md:py-28 px-6 bg-gradient-to-b from-white via-slate-50/50 to-slate-50 overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 bg-grid-slate-100 opacity-60"
        style={{
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Search className="w-4 h-4" />
            Reality Check
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ever{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Googled
            </span>{' '}
            yourself?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-2">
              Recruiters do. Hiring managers do.{' '}
              <span className="text-slate-900 font-medium">Everyone does.</span>
            </p>
            <p className="text-lg italic text-slate-500 max-w-2xl mx-auto">
              What shows up when they search your name?
            </p>
          </motion.div>

          {/* Google Search Bar */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://www.google.com/search?q=Vinit+Shahdeo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Search on Google for Vinit Shahdeo"
              className="inline-flex items-center gap-3 pl-4 pr-3 py-2.5 bg-white rounded-full border border-slate-300 shadow-sm hover:shadow-lg hover:border-slate-400 transition-all duration-200 group max-w-sm"
            >
              {/* Google Logo */}
              <svg
                className="w-4 h-4 flex-shrink-0"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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
                <svg
                  className="w-4 h-4 text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
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
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Two-Column Layout: Stats + Google Search Simulator */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column — Stats */}
          <motion.div
            className="relative p-4 md:p-6 lg:sticky lg:top-24 self-start"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative space-y-6">
              {/* Hero Stat */}
              <motion.div
                className="relative rounded-2xl border border-slate-200/80 bg-white p-8 text-center shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Subtle blue glow behind number */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-blue-100/60 blur-3xl" />
                <motion.div
                  className="relative text-8xl md:text-9xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent leading-none mb-3"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, type: 'spring', delay: 0.3 }}
                >
                  70%
                </motion.div>
                <p className="relative text-lg md:text-xl font-semibold text-slate-900 mb-1">
                  of recruiters Google you first
                </p>
                <p className="relative text-sm text-slate-500">
                  before they even schedule an interview
                </p>
              </motion.div>

              {/* Two Stats Side by Side */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="rounded-xl border border-slate-200/80 bg-white p-5 text-center shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, type: 'spring', delay: 0.3 }}
                  >
                    85%
                  </motion.div>
                  <p className="text-sm font-semibold text-slate-900 mb-0.5">
                    Check social profiles
                  </p>
                  <p className="text-slate-500 text-xs">GitHub & LinkedIn before your résumé</p>
                </motion.div>

                <motion.div
                  className="rounded-xl border border-slate-200/80 bg-white p-5 text-center shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <motion.div
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, type: 'spring', delay: 0.35 }}
                  >
                    63%
                  </motion.div>
                  <p className="text-sm font-semibold text-slate-900 mb-0.5">Candidates rejected</p>
                  <p className="text-slate-500 text-xs">due to poor online presence</p>
                </motion.div>
              </div>

              {/* Bottom CTA */}
              <motion.div
                className="pt-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-base md:text-lg italic font-medium text-slate-600 mb-1">
                  If you don&apos;t control your digital footprint,
                </p>
                <p className="text-xl md:text-2xl font-bold text-slate-900">Google will.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column — Google Search Simulator */}
          <div>
            <GoogleSearchSimulator />
          </div>
        </div>
      </div>
    </section>
  )
}
