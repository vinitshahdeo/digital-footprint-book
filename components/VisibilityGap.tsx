'use client'

import { Eye, EyeOff, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function VisibilityGap() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <TrendingUp className="w-4 h-4" />
            The Visibility Gap
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            Hard work doesn't{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              compound
            </span>
            <br />
            unless it's visible
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Most engineers ship great work—but never publish it
          </p>
        </div>

        {/* Stats with Stacked Bar Visualization */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <EyeOff className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-black">80%</p>
                </div>
              </div>
              <p className="text-lg text-slate-700 mb-2">Engineers rely only on résumés and private code</p>
              <p className="text-sm text-slate-500">Invisible to the world, no compounding value</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-4xl font-bold text-black">20%</p>
                </div>
              </div>
              <p className="text-lg text-slate-700 mb-2">Actively showcase their work online</p>
              <p className="text-sm text-slate-500">Discoverable, credible, compounding visibility</p>
            </motion.div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <p className="text-sm font-semibold text-slate-900 mb-2">The gap is opportunity</p>
              <p className="text-sm text-slate-600">
                Same skills. Same effort. Exponentially different outcomes.
              </p>
            </div>
          </div>

          {/* Right: Stacked Bar Chart */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-slate-700">Work Done</p>
                <p className="text-sm font-semibold text-blue-600">100%</p>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-slate-700">Work Documented</p>
                <p className="text-sm font-semibold text-blue-600">40%</p>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-1000" style={{ width: '40%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-slate-700">Publicly Discoverable</p>
                <p className="text-sm font-semibold text-blue-600">20%</p>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-300 to-blue-400 rounded-full transition-all duration-1000" style={{ width: '20%' }}></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 shadow-sm mt-8">
              <p className="text-sm font-medium text-slate-700 leading-relaxed">
                This book helps you close the gap between work done and work visible.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Before / After Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 mb-6">
              <EyeOff className="w-6 h-6 text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Invisible Engineer</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex-shrink-0 mt-0.5 text-xs">✕</span>
                <span>Great work, but only your team knows</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex-shrink-0 mt-0.5 text-xs">✕</span>
                <span>Résumé gets lost in the pile</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex-shrink-0 mt-0.5 text-xs">✕</span>
                <span>Google shows nothing or outdated info</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex-shrink-0 mt-0.5 text-xs">✕</span>
                <span>Cold applications, low response rate</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 mb-6 shadow-lg shadow-blue-600/30">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Searchable Engineer</h3>
            <div className="space-y-3 text-sm text-blue-800">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-200 text-blue-700 flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span className="font-medium">Work visible across GitHub, blogs, LinkedIn</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-200 text-blue-700 flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span className="font-medium">First-page Google results you control</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-200 text-blue-700 flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span className="font-medium">Inbound messages from recruiters</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-200 text-blue-700 flex-shrink-0 mt-0.5 text-xs font-bold">✓</span>
                <span className="font-medium">Opportunities find you</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
