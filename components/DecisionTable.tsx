'use client'

import { X, Check } from 'lucide-react'
import { motion } from 'framer-motion'

export default function DecisionTable() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-4 tracking-tight">
            Same effort.{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Exponentially different results.
            </span>
          </h2>
          <p className="text-lg text-slate-600">Choose your path forward</p>
        </div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Without Digital Footprint */}
          <motion.div
            className="bg-white rounded-3xl p-8 border-2 border-slate-200"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <X className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Without This Book</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Cold applications to job boards</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Résumé-only approach</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Low leverage, no compounding</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Invisible to recruiters searching online</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Great work stays private</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600">Generic Google results (or none)</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 italic">Linear career growth</p>
            </div>
          </motion.div>

          {/* With Digital Footprint */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-300 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Recommended
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-blue-900">With This Book</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-900 font-medium">
                  Inbound opportunities from recruiters
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-900 font-medium">
                  Searchable, credible online presence
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-900 font-medium">Compounding visibility over time</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-900 font-medium">
                  First-page Google results you control
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-900 font-medium">
                  Work visible across GitHub, blogs, LinkedIn
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-900 font-medium">Opportunities find you</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-blue-300">
              <p className="text-sm text-blue-700 font-semibold">Exponential career growth</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg text-slate-600 mb-6">
            The choice is yours. Invest in your digital footprint today.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
