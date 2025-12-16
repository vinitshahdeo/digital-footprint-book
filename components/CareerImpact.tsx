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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full font-accent">
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

        {/* Creative Timeline-style Metrics */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform -translate-x-1/2 hidden md:block" />
          
          {/* Metric 1 - 5× More visibility */}
          <motion.div
            className="relative mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left side - Number */}
              <div className="flex-1 text-center md:text-right">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                >
                  <p className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent leading-none mb-4">
                    5×
                  </p>
                </motion.div>
                <p className="text-2xl font-semibold text-slate-900 mb-2">More visibility</p>
              </div>
              
              {/* Center icon */}
              <motion.div 
                className="relative z-10 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/50 border-4 border-slate-50">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              {/* Right side - Description */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg text-slate-600 max-w-xs">
                  Engineers who blog receive <span className="font-semibold text-slate-900">5× more inbound opportunities</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Metric 2 - 3× More interviews */}
          <motion.div
            className="relative mb-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              {/* Right side - Number */}
              <div className="flex-1 text-center md:text-left">
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15, type: "spring", bounce: 0.5 }}
                >
                  <p className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent leading-none mb-4">
                    3×
                  </p>
                </motion.div>
                <p className="text-2xl font-semibold text-slate-900 mb-2">More interviews</p>
              </div>
              
              {/* Center icon */}
              <motion.div 
                className="relative z-10 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-purple-500/50 border-4 border-slate-50">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              {/* Left side - Description */}
              <div className="flex-1 text-center md:text-right">
                <p className="text-lg text-slate-600 max-w-xs md:ml-auto">
                  Open-source contributors get <span className="font-semibold text-slate-900">3× more interview calls</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Metric 3 - 14× Profile views */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left side - Number */}
              <div className="flex-1 text-center md:text-right">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.5 }}
                >
                  <p className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent leading-none mb-4">
                    14×
                  </p>
                </motion.div>
                <p className="text-2xl font-semibold text-slate-900 mb-2">Profile views</p>
              </div>
              
              {/* Center icon */}
              <motion.div 
                className="relative z-10 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/50 border-4 border-slate-50">
                  <Camera className="w-10 h-10 text-white" />
                </div>
              </motion.div>
              
              {/* Right side - Description */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg text-slate-600 max-w-xs">
                  Profiles with photos get <span className="font-semibold text-slate-900">14× more profile views</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
