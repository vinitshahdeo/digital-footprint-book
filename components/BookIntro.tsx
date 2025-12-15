'use client'

import { BookOpen, Sparkles, ShoppingCart, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BookIntro() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-8 shadow-xl shadow-blue-500/25">
            <BookOpen className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Introducing{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Digital Footprint
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            A practical playbook for software engineers who want their work to be{' '}
            <span className="font-semibold text-slate-900">discoverable, credible, and career-defining</span>
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-slate-700 font-medium">12 Actionable Chapters</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-slate-700 font-medium">Real Frameworks & Examples</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-slate-700 font-medium">Written by an Engineer</span>
            </div>
          </div>

          <p className="text-lg text-slate-500 italic max-w-2xl mx-auto mb-12">
            This isn't about becoming an influencer. It's about making sure your best work doesn't go unnoticed.
          </p>

          {/* Buy Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Buy on Amazon</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            
            <motion.a
              href="https://www.flipkart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Buy on Flipkart</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
