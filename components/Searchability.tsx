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
            <h3 className="text-xl font-semibold text-black mb-6">The Discovery Funnel</h3>
            
            {/* Stage 1 */}
            <motion.div 
              className="bg-slate-900 rounded-xl p-5 text-white"
              initial={{ opacity: 0, width: "100%" }}
              whileInView={{ opacity: 1, width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-1">
                <Search className="w-5 h-5" />
                <p className="text-xl font-bold">1,000</p>
              </div>
              <p className="text-sm text-slate-300">Google searches</p>
            </motion.div>

            {/* Stage 2 */}
            <motion.div 
              className="bg-slate-800 rounded-xl p-5 text-white ml-6"
              initial={{ opacity: 0, width: "85%" }}
              whileInView={{ opacity: 1, width: "85%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-1">
                <MousePointer className="w-5 h-5" />
                <p className="text-xl font-bold">300</p>
              </div>
              <p className="text-sm text-slate-300">Profile clicks</p>
            </motion.div>

            {/* Stage 3 */}
            <motion.div 
              className="bg-slate-700 rounded-xl p-5 text-white ml-12"
              initial={{ opacity: 0, width: "60%" }}
              whileInView={{ opacity: 1, width: "60%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-1">
                <MessageCircle className="w-5 h-5" />
                <p className="text-xl font-bold">100</p>
              </div>
              <p className="text-sm text-slate-300">Reach outs</p>
            </motion.div>

            {/* Stage 4 */}
            <motion.div 
              className="bg-blue-600 rounded-xl p-5 text-white ml-18"
              initial={{ opacity: 0, width: "40%" }}
              whileInView={{ opacity: 1, width: "40%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-1">
                <Calendar className="w-5 h-5" />
                <p className="text-xl font-bold">10</p>
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
            <h3 className="text-xl font-semibold text-black mb-6">Signals That Matter</h3>

            <div className="space-y-2.5">
              <div className="bg-slate-900 rounded-lg p-4 text-white">
                <p className="font-medium text-sm">GitHub Activity</p>
                <p className="text-xs text-slate-300">Real code, real projects</p>
              </div>

              <div className="bg-slate-800 rounded-lg p-4 text-white">
                <p className="font-medium text-sm">LinkedIn Profile</p>
                <p className="text-xs text-slate-300">Professional presence</p>
              </div>

              <div className="bg-slate-600 rounded-lg p-4 text-white">
                <p className="font-medium text-sm">Blog Posts</p>
                <p className="text-xs text-slate-200">Thought leadership</p>
              </div>

              <div className="bg-slate-400 rounded-lg p-4 text-white">
                <p className="font-medium text-sm">Talks & Podcasts</p>
                <p className="text-xs text-slate-100">Public speaking</p>
              </div>

              <div className="bg-slate-200 rounded-lg p-4 text-slate-700">
                <p className="font-medium text-sm">Portfolio Site</p>
                <p className="text-xs text-slate-600">Showcase work</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mt-8">
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
