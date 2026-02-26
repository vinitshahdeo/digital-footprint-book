'use client'

import {
  ArrowRight,
  BookOpen,
  Eye,
  Sparkles,
  Terminal,
} from 'lucide-react'
import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const TERMINAL_LINES = [
  { prompt: '~', command: 'git log --oneline | wc -l', output: '2,847 commits' },
  { prompt: '~', command: 'grep -r "TODO" . | wc -l', output: '0 issues remaining' },
  { prompt: '~', command: 'curl -s "https://google.com/search?q=your+name"', output: '... 0 relevant results found' },
  { prompt: '~', command: 'echo "Time to build your digital footprint"', output: null },
]

const AnimatedSignature = () => (
  <motion.div
    className="relative inline-block opacity-75"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 0.7, scale: 1 }}
    transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
  >
    <Image
      src="/images/signature.png"
      alt="Vinit Shahdeo"
      width={160}
      height={48}
      className="w-32 h-auto md:w-36"
      style={{ filter: 'contrast(1.1)' }}
    />
  </motion.div>
)

const TerminalWindow = () => {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines < TERMINAL_LINES.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Terminal chrome */}
      <div className="bg-slate-800 rounded-t-lg px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
        <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
          <Terminal className="w-3 h-3" />
          career — zsh
        </span>
      </div>

      {/* Terminal body */}
      <div className="bg-slate-900 rounded-b-lg p-4 md:p-6 font-mono text-sm md:text-base min-h-[200px]">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-2"
          >
            <div className="flex items-start gap-2">
              <span className="text-green-400 shrink-0">{line.prompt} $</span>
              <span className="text-slate-200">{line.command}</span>
            </div>
            {line.output && (
              <motion.div
                className="text-slate-400 ml-6 mt-0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {line.output}
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Blinking cursor */}
        {visibleLines >= TERMINAL_LINES.length && (
          <motion.div
            className="flex items-center gap-2 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="text-green-400">~ $</span>
            <motion.span
              className="inline-block w-2 h-5 bg-green-400"
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default function HeroV5() {
  const [onlineCount, setOnlineCount] = useState(5.35)

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => {
        const increment = Math.random() * 0.0001
        const newCount = prev + increment
        return parseFloat(newCount.toFixed(4))
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-full inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Now Available – Get Your Copy!
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 leading-[1.08] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="text-slate-900">Your code speaks.</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Does the internet know about you?
          </span>
        </motion.h1>

        {/* Live Counter */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-slate-500 font-mono">
            <span className="inline-flex items-center gap-2">
              <motion.span
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              {onlineCount.toFixed(2)}B internet users worldwide
            </span>
          </p>
        </motion.div>

        {/* Terminal */}
        <TerminalWindow />

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          A practical playbook to build a strong, authentic digital presence—without feeling like a
          self-promoter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a
            href="#purchase"
            className="group px-7 py-3.5 bg-slate-900 text-white rounded-lg font-medium text-base hover:bg-slate-800 transition-all duration-250 w-full sm:w-auto"
          >
            <span className="flex items-center gap-2 justify-center">
              <BookOpen className="w-4 h-4" />
              Get the book
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-250" />
            </span>
          </a>
          <a
            href="#whats-inside"
            className="group px-7 py-3.5 text-slate-700 font-medium text-base hover:text-slate-900 transition-all duration-250 w-full sm:w-auto"
          >
            <span className="flex items-center gap-2 justify-center">
              <Eye className="w-4 h-4" />
              See what&apos;s inside
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-250" />
            </span>
          </a>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="mt-20 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <blockquote className="relative">
            <p className="text-base md:text-lg text-slate-500 italic mb-4 text-center">
              &quot;Write code for machines. Build a footprint for people.&quot;
            </p>
            <footer className="flex justify-center items-center gap-2">
              <AnimatedSignature />
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
