'use client'

import { Eye, EyeOff, TrendingUp, ChevronRight } from 'lucide-react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Counter({ value, duration = 1 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.min(Math.floor(latest), value).toString()
      }
    })
  }, [springValue, value])

  return <span ref={ref}>0</span>
}

const stages = [
  {
    value: 100,
    label: 'Work Done',
    description: 'Great engineers shipping quality code every day',
    gradient: 'from-blue-500 to-blue-600',
    barWidth: '100%',
    delay: 0.2,
  },
  {
    value: 40,
    label: 'Documented',
    description: 'Creating internal docs, READMEs, and notes',
    gradient: 'from-purple-500 to-purple-600',
    barWidth: '40%',
    delay: 0.35,
  },
  {
    value: 20,
    label: 'Discoverable',
    description: 'Actually visible and searchable online',
    gradient: 'from-slate-600 to-slate-700',
    barWidth: '20%',
    delay: 0.5,
  },
]

const invisiblePoints = [
  'Great work, but only your team knows',
  'Résumé gets lost in the pile',
  'Google shows nothing or outdated info',
  'Cold applications, low response rate',
]

const searchablePoints = [
  'Work visible across GitHub, blogs, LinkedIn',
  'First-page Google results you control',
  'Inbound messages from recruiters',
  'Opportunities find you',
]

export default function VisibilityGap() {
  return (
    <section className="py-16 md:py-28 px-6 bg-gradient-to-b from-slate-50/80 to-white">
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

        {/* Step Flow with Connectors */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-0 items-start">
            {stages.map((stage, i) => (
              <div key={stage.label} className="contents">
                {/* Connector arrow (between columns) */}
                {i > 0 && (
                  <div className="hidden md:flex items-center justify-center self-center px-2 -mt-6">
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: stage.delay }}
                    >
                      <ChevronRight className="w-6 h-6 text-slate-300" />
                    </motion.div>
                  </div>
                )}

                <motion.div
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stage.delay - 0.2 }}
                >
                  <div className="text-center rounded-2xl p-6 transition-colors duration-300 group-hover:bg-slate-50/80">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, type: 'spring', delay: stage.delay }}
                    >
                      <p
                        className={`text-8xl font-bold bg-gradient-to-br ${stage.gradient} bg-clip-text text-transparent leading-none mb-5`}
                      >
                        <Counter value={stage.value} duration={1.5} />
                        <span className="text-5xl">%</span>
                      </p>
                    </motion.div>
                    <div
                      className={`h-1.5 bg-gradient-to-r ${stage.gradient} rounded-full mb-5 mx-auto transition-all duration-500`}
                      style={{ width: stage.barWidth }}
                    />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{stage.label}</h3>
                    <p className="text-slate-600 leading-relaxed">{stage.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* 80% Highlight Banner */}
          <motion.div
            className="mt-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-10 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-blue-500/5 pointer-events-none" />
            <div className="relative">
              <motion.p
                className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-none mb-4"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: 'spring', delay: 0.8 }}
              >
                <Counter value={80} duration={1.5} />%
              </motion.p>
              <p className="text-lg md:text-xl text-white font-semibold mb-2">
                of your work stays invisible
              </p>
              <p className="text-slate-400 text-sm md:text-base">
                Same skills. Same effort.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                  Exponentially different outcomes.
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Before/After Comparison */}
        <div className="max-w-5xl mx-auto">
          <div className="relative grid md:grid-cols-2 gap-6">
            {/* VS divider (desktop) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <span className="w-10 h-10 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shadow-lg ring-4 ring-white">
                VS
              </span>
            </div>

            {/* Invisible Engineer */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-7"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center">
                  <EyeOff className="w-5 h-5 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Invisible Engineer</h3>
              </div>
              <div className="space-y-3">
                {invisiblePoints.map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex-shrink-0 text-xs">
                      ✕
                    </span>
                    <p className="text-slate-600 text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Searchable Engineer */}
            <motion.div
              className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/50 to-purple-50/30 p-7"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Searchable Engineer
                </h3>
              </div>
              <div className="space-y-3">
                {searchablePoints.map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex-shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    <p className="text-slate-800 font-medium text-sm">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
