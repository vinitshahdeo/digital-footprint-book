'use client'

import { Eye, EyeOff, TrendingUp } from 'lucide-react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Counter({ value, duration = 1 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString()
      }
    })
  }, [springValue])

  return <span ref={ref}>0</span>
}

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

        {/* Modern Step Flow */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* 100% - Work Done */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-4">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
                >
                  <p className="text-9xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent leading-none mb-6">
                    <Counter value={100} duration={1.5} /><span className="text-6xl">%</span>
                  </p>
                </motion.div>
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Work Done</h3>
                <p className="text-slate-600 leading-relaxed">
                  Great engineers shipping quality code every day
                </p>
              </div>
            </motion.div>

            {/* 40% - Work Documented */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="text-center mb-4">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", delay: 0.35 }}
                >
                  <p className="text-9xl font-bold bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent leading-none mb-6">
                    <Counter value={40} duration={1.5} /><span className="text-6xl">%</span>
                  </p>
                </motion.div>
                <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-6 mx-auto" style={{ width: '40%' }} />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Documented</h3>
                <p className="text-slate-600 leading-relaxed">
                  Creating internal docs, READMEs, and notes
                </p>
              </div>
            </motion.div>

            {/* 20% - Publicly Discoverable */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center mb-4">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", delay: 0.5 }}
                >
                  <p className="text-9xl font-bold bg-gradient-to-br from-slate-700 to-slate-800 bg-clip-text text-transparent leading-none mb-6">
                    <Counter value={20} duration={1.5} /><span className="text-6xl">%</span>
                  </p>
                </motion.div>
                <div className="h-2 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full mb-6 mx-auto" style={{ width: '20%' }} />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Discoverable</h3>
                <p className="text-slate-600 leading-relaxed">
                  Actually visible and searchable online
                </p>
              </div>
            </motion.div>
          </div>

          {/* Gap Explanation */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-3xl font-handwriting text-blue-600 mb-4">
              The gap is opportunity
            </p>
            <p className="text-xl text-slate-700 font-semibold">
              Same skills. Same effort.{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Exponentially different outcomes.
              </span>
            </p>
          </motion.div>
        </div>

        {/* Before/After Comparison - Split Design */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Invisible Engineer */}
              <motion.div
                className="relative p-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center">
                    <EyeOff className="w-7 h-7 text-slate-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Invisible Engineer</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex-shrink-0 text-sm">✕</span>
                    <p className="text-slate-700">Great work, but only your team knows</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex-shrink-0 text-sm">✕</span>
                    <p className="text-slate-700">Résumé gets lost in the pile</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex-shrink-0 text-sm">✕</span>
                    <p className="text-slate-700">Google shows nothing or outdated info</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex-shrink-0 text-sm">✕</span>
                    <p className="text-slate-700">Cold applications, low response rate</p>
                  </div>
                </div>
              </motion.div>

              {/* Searchable Engineer */}
              <motion.div
                className="relative p-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Searchable Engineer</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex-shrink-0 text-sm font-bold">✓</span>
                    <p className="text-slate-900 font-medium">Work visible across GitHub, blogs, LinkedIn</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex-shrink-0 text-sm font-bold">✓</span>
                    <p className="text-slate-900 font-medium">First-page Google results you control</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex-shrink-0 text-sm font-bold">✓</span>
                    <p className="text-slate-900 font-medium">Inbound messages from recruiters</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex-shrink-0 text-sm font-bold">✓</span>
                    <p className="text-slate-900 font-medium">Opportunities find you</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
