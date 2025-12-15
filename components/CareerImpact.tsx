'use client'

import { TrendingUp, MessageSquare, Zap, Camera } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CareerImpact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Zap className="w-4 h-4" />
            Career Acceleration
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
            The same skills.{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Different outcomes.
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Industry data shows the compounding effect of visibility
          </p>
        </div>

        {/* Icon Metric Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 mb-4 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <p className="text-5xl font-bold bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3">5×</p>
            <p className="text-base font-semibold text-slate-900 mb-2">More visibility</p>
            <p className="text-sm text-slate-600 leading-relaxed">Engineers who blog receive 5× more inbound opportunities</p>
          </motion.div>

          <motion.div
            className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 mb-4 shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-shadow">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <p className="text-5xl font-bold bg-gradient-to-br from-green-600 to-green-700 bg-clip-text text-transparent mb-3">3×</p>
            <p className="text-base font-semibold text-slate-900 mb-2">More interviews</p>
            <p className="text-sm text-slate-600 leading-relaxed">Open-source contributors get 3× more interview calls</p>
          </motion.div>

          <motion.div
            className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all duration-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 mb-4 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <p className="text-5xl font-bold bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent mb-3">14×</p>
            <p className="text-base font-semibold text-slate-900 mb-2">Profile views</p>
            <p className="text-sm text-slate-600 leading-relaxed">Profiles with photos get 14× more profile views</p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
