'use client'

import { Search, MousePointer, MessageCircle, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Searchability() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Search className="w-4 h-4" />
            First Impressions
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            If someone Googles you{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              today
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            First-page results shape first impressions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Funnel Diagram */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-black mb-8">The Discovery Funnel</h3>
            
            {/* Stage 1 */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white shadow-lg"
              initial={{ opacity: 0, width: "100%" }}
              whileInView={{ opacity: 1, width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Search className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold">1,000</p>
              </div>
              <p className="text-sm text-slate-300">Google searches for engineers</p>
            </motion.div>

            {/* Stage 2 */}
            <motion.div 
              className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 text-white ml-8 shadow-lg"
              initial={{ opacity: 0, width: "85%" }}
              whileInView={{ opacity: 1, width: "85%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MousePointer className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold">300</p>
              </div>
              <p className="text-sm text-slate-300">Click on profile</p>
            </motion.div>

            {/* Stage 3 */}
            <motion.div 
              className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl p-6 text-white ml-16 shadow-lg"
              initial={{ opacity: 0, width: "60%" }}
              whileInView={{ opacity: 1, width: "60%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold">100</p>
              </div>
              <p className="text-sm text-slate-300">Reach out</p>
            </motion.div>

            {/* Stage 4 */}
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white ml-24 shadow-lg shadow-blue-500/30"
              initial={{ opacity: 0, width: "40%" }}
              whileInView={{ opacity: 1, width: "40%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold">10</p>
              </div>
              <p className="text-sm text-blue-100">Interviews</p>
            </motion.div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mt-8">
              <p className="text-sm font-semibold text-slate-900 mb-2">You don't get a second first search</p>
              <p className="text-sm text-slate-600">
                Your name is your landing page. Make sure it shows the right story.
              </p>
            </div>
          </motion.div>

          {/* Heatmap-style Signals */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-black mb-8">Signals That Matter</h3>

            <div className="space-y-3">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 text-white shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">GitHub Activity</p>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Critical</span>
                </div>
                <p className="text-xs text-slate-300">Real code, real projects</p>
              </div>

              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-5 text-white shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">LinkedIn Profile</p>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Critical</span>
                </div>
                <p className="text-xs text-slate-300">Professional presence</p>
              </div>

              <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl p-5 text-white shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Blog Posts</p>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">High</span>
                </div>
                <p className="text-xs text-slate-200">Thought leadership</p>
              </div>

              <div className="bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl p-5 text-white shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Talks & Podcasts</p>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Medium</span>
                </div>
                <p className="text-xs text-slate-100">Public speaking</p>
              </div>

              <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl p-5 text-slate-700 border border-slate-300 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Portfolio Site</p>
                  <span className="px-3 py-1 bg-slate-300 rounded-full text-xs font-medium">Good</span>
                </div>
                <p className="text-xs text-slate-600">Showcase work</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mt-8">
              <h4 className="text-base font-semibold text-slate-900 mb-3">Your searchability checklist</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm">Searchable — Your name returns relevant results</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm">Credible — Links point to real work</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm">Consistent — Same identity across platforms</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <span className="text-blue-500">✓</span>
                  <span className="text-sm">Authentic — Represents who you really are</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <p className="text-center text-lg text-slate-500 mt-16 italic">
          Your footprint is a collection of signals. Make them count.
        </p>
      </div>
    </section>
  )
}
