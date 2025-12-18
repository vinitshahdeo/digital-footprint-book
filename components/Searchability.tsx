'use client'

import { Search, MousePointer, MessageCircle, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Searchability() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Search className="w-4 h-4" />
            First Impressions
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            If someone Googles you{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              today
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            What do they find? First-page results shape first impressions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Funnel Diagram */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">The Discovery Funnel</h3>
            
            <div className="relative space-y-3">
              {/* Funnel connecting lines */}
              <div className="absolute left-0 top-16 bottom-16 w-full pointer-events-none">
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 0 L 400 300 L 0 300 Z" fill="url(#funnelGradient)" opacity="0.3" />
                </svg>
              </div>

              {/* Stage 1 - Widest */}
              <motion.div 
                className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 text-white shadow-md w-full mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <Search className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">1,000</p>
                      <p className="text-xs text-slate-300">Google searches</p>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">100%</div>
                </div>
              </motion.div>

              {/* Stage 2 */}
              <motion.div 
                className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-5 text-white shadow-md w-[85%] mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <MousePointer className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">300</p>
                      <p className="text-xs text-slate-300">Click profile</p>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">30%</div>
                </div>
              </motion.div>

              {/* Stage 3 */}
              <motion.div 
                className="relative bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl p-5 text-white shadow-md w-[65%] mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">100</p>
                      <p className="text-xs text-slate-300">Reach out</p>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">10%</div>
                </div>
              </motion.div>

              {/* Stage 4 - Narrowest */}
              <motion.div 
                className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-5 text-white shadow-md shadow-blue-500/20 w-[45%] mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">10</p>
                      <p className="text-xs text-blue-100">Interviews</p>
                    </div>
                  </div>
                  <div className="text-xs text-blue-200">1%</div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 mt-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ y: -2 }}
            >
              <p className="text-base font-semibold text-slate-900 mb-2">You don't get a second first search</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your name is your landing page. Make sure it shows the right story.
              </p>
            </motion.div>
          </motion.div>

          {/* Heatmap-style Signals */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Signals That Matter</h3>

            <div className="space-y-3">
              <motion.div 
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 text-white shadow-md cursor-default"
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 }}
                whileHover={{ x: 3 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">GitHub Activity</p>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Critical</span>
                </div>
                <p className="text-xs text-slate-300">Real code, real projects</p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-5 text-white shadow-lg shadow-slate-800/30 cursor-default"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                whileHover={{ x: 5, boxShadow: "0 15px 35px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">LinkedIn Profile</p>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Critical</span>
                </div>
                <p className="text-xs text-slate-300">Professional presence</p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl p-5 text-white shadow-md shadow-slate-700/20 cursor-default"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ x: 5, boxShadow: "0 12px 30px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Blog Posts</p>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">High</span>
                </div>
                <p className="text-xs text-slate-200">Thought leadership</p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl p-5 text-white shadow-md shadow-slate-500/15 cursor-default"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                whileHover={{ x: 5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Talks & Podcasts</p>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Medium</span>
                </div>
                <p className="text-xs text-slate-100">Public speaking</p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-xl p-5 text-slate-700 border border-slate-300 shadow-sm cursor-default"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ x: 5, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">Portfolio Site</p>
                  <span className="px-3 py-1 bg-slate-300 rounded-full text-xs font-medium">Good</span>
                </div>
                <p className="text-xs text-slate-600">Showcase work</p>
              </motion.div>
            </div>

            <motion.div 
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-sm mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -2, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)" }}
            >
              <h4 className="text-lg font-bold text-slate-900 mb-5">Your searchability checklist</h4>
              <ul className="space-y-3.5">
                <motion.li 
                  className="flex items-center gap-3 text-slate-600"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span className="text-sm leading-relaxed"><span className="font-semibold text-slate-900">Searchable</span> — Your name returns relevant results</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3 text-slate-600"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span className="text-sm leading-relaxed"><span className="font-semibold text-slate-900">Credible</span> — Links point to real work</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3 text-slate-600"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span className="text-sm leading-relaxed"><span className="font-semibold text-slate-900">Consistent</span> — Same identity across platforms</span>
                </motion.li>
                <motion.li 
                  className="flex items-center gap-3 text-slate-600"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span className="text-sm leading-relaxed"><span className="font-semibold text-slate-900">Authentic</span> — Represents who you really are</span>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <motion.p 
          className="text-center text-lg text-slate-500 mt-16 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Your footprint is a collection of signals. Make them count.
        </motion.p>
      </div>
    </section>
  )
}
