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
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            className="bg-white rounded-2xl p-6 border border-slate-100 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 mb-3">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-4xl font-bold text-blue-600 mb-2">5×</p>
            <p className="text-sm font-medium text-black mb-1">More visibility</p>
            <p className="text-xs text-slate-500">Engineers who blog get 5× more opportunities</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 border border-slate-100 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-50 mb-3">
              <MessageSquare className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-4xl font-bold text-green-600 mb-2">3×</p>
            <p className="text-sm font-medium text-black mb-1">More interviews</p>
            <p className="text-xs text-slate-500">Open-source contributors get 3× more calls</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-6 border border-slate-100 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50 mb-3">
              <Camera className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-4xl font-bold text-purple-600 mb-2">14×</p>
            <p className="text-sm font-medium text-black mb-1">Profile views</p>
            <p className="text-xs text-slate-500">Profiles with photos get 14× more views</p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
