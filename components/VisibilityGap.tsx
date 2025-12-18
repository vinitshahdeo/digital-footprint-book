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
    <section className="py-28 px-6 bg-gradient-to-b from-slate-50/80 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <TrendingUp className="w-4 h-4" />
            The Visibility Gap
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Hard work doesn't{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
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
                  transition={{ duration: 0.7, type: "spring", delay: 0.2 }}
                >
                  <p className="text-8xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent leading-none mb-5">
                    <Counter value={100} duration={1.5} /><span className="text-5xl">%</span>
                  </p>
                </motion.div>
                <div className="h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-5" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Work Done</h3>
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
                  transition={{ duration: 0.7, type: "spring", delay: 0.35 }}
                >
                  <p className="text-8xl font-bold bg-gradient-to-br from-purple-500 to-purple-600 bg-clip-text text-transparent leading-none mb-5">
                    <Counter value={40} duration={1.5} /><span className="text-5xl">%</span>
                  </p>
                </motion.div>
                <div className="h-1.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-5 mx-auto" style={{ width: '40%' }} />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Documented</h3>
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
                  transition={{ duration: 0.7, type: "spring", delay: 0.5 }}
                >
                  <p className="text-8xl font-bold bg-gradient-to-br from-slate-600 to-slate-700 bg-clip-text text-transparent leading-none mb-5">
                    <Counter value={20} duration={1.5} /><span className="text-5xl">%</span>
                  </p>
                </motion.div>
                <div className="h-1.5 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full mb-5 mx-auto" style={{ width: '20%' }} />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Discoverable</h3>
                <p className="text-slate-600 leading-relaxed">
                  Actually visible and searchable online
                </p>
              </div>
            </motion.div>
          </div>

          {/* Gap Explanation */}
          <motion.div 
            className="text-center mt-14"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-xl italic font-medium text-slate-700 mb-3">
              The gap is opportunity
            </p>
            <p className="text-lg text-slate-700 font-semibold">
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
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                    <EyeOff className="w-6 h-6 text-slate-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Invisible Engineer</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex-shrink-0 text-xs">✕</span>
                    <p className="text-slate-600 text-sm">Great work, but only your team knows</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex-shrink-0 text-xs">✕</span>
                    <p className="text-slate-600 text-sm">Résumé gets lost in the pile</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex-shrink-0 text-xs">✕</span>
                    <p className="text-slate-600 text-sm">Google shows nothing or outdated info</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-500 flex-shrink-0 text-xs">✕</span>
                    <p className="text-slate-600 text-sm">Cold applications, low response rate</p>
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
                <div className="flex items-center justify-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Searchable Engineer</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex-shrink-0 text-xs font-bold">✓</span>
                    <p className="text-slate-800 font-medium text-sm">Work visible across GitHub, blogs, LinkedIn</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex-shrink-0 text-xs font-bold">✓</span>
                    <p className="text-slate-800 font-medium text-sm">First-page Google results you control</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex-shrink-0 text-xs font-bold">✓</span>
                    <p className="text-slate-800 font-medium text-sm">Inbound messages from recruiters</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex-shrink-0 text-xs font-bold">✓</span>
                    <p className="text-slate-800 font-medium text-sm">Opportunities find you</p>
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
