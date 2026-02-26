'use client'

import { ArrowRight, BookOpen } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const AnimatedSignature = () => (
  <motion.div
    className="relative inline-block opacity-75"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 0.7, scale: 1 }}
    transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
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

export default function HeroV4() {
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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-white">
      {/* Minimal gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50/50" />

      <div className="relative max-w-6xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Ultra-large headline — no badge, no icons, just type */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold leading-[1.02] tracking-tighter mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-slate-900 block">Your code</span>
          <span className="text-slate-900 block">speaks.</span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl text-slate-400 font-light tracking-tight mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Does the internet know about you?
        </motion.p>

        {/* Single line description */}
        <motion.p
          className="text-base md:text-lg text-slate-500 mb-16 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A practical playbook to build a strong, authentic digital presence—without feeling like a
          self-promoter.
        </motion.p>

        {/* Single prominent CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a
            href="#purchase"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-lg hover:bg-slate-800 transition-all duration-250"
          >
            <BookOpen className="w-5 h-5" />
            Get the book
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-250" />
          </a>
        </motion.div>

        {/* Bottom section: counter + quote */}
        <div className="mt-24 flex flex-col items-center gap-10">
          {/* Live counter */}
          <motion.p
            className="text-sm text-slate-400 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="inline-flex items-center gap-2">
              <motion.span
                className="w-1.5 h-1.5 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              {onlineCount.toFixed(2)}B internet users worldwide
            </span>
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <p className="text-base text-slate-400 italic mb-3 text-center">
              &quot;Write code for machines. Build a footprint for people.&quot;
            </p>
            <footer className="flex justify-center">
              <AnimatedSignature />
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
