'use client'

import {
  ArrowRight,
  BookOpen,
  Eye,
  Sparkles,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroV1() {
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
    <section className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text Content */}
        <div className="text-left">
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

          {/* Live Counter */}
          <motion.div
            className="mb-6"
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

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-[1.08] tracking-tight"
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

          {/* Subheading */}
          <motion.p
            className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A practical playbook to build a strong, authentic digital presence—without feeling like a
            self-promoter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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

          {/* Author Quote */}
          <motion.div
            className="relative max-w-md rounded-2xl bg-white/60 backdrop-blur-sm px-5 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-slate-900/[0.04]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {/* Background quote mark */}
            <span className="absolute top-2.5 right-4 text-[72px] leading-none font-serif text-slate-100 select-none pointer-events-none">
              &rdquo;
            </span>

            <div className="relative flex items-center gap-3.5">
              <Image
                src="/images/vinit-shahdeo.jpg"
                alt="Vinit Shahdeo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm shrink-0"
              />

              <div className="min-w-0 flex-1">
                <p className="text-[15px] text-slate-700 leading-relaxed">
                  &ldquo;Write code for machines. Build a footprint for people.&rdquo;
                </p>

                <motion.div
                  className="mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
                >
                  <Image
                    src="/images/signature.png"
                    alt="Vinit Shahdeo"
                    width={88}
                    height={26}
                    className="w-[72px] h-auto"
                    style={{ filter: 'contrast(1.1)' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Book Cover */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40, rotateY: -8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="relative">
            {/* Glow effect behind book */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-100 to-slate-100 rounded-3xl blur-3xl opacity-60" />

            {/* Elegant frame */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-100 via-white to-slate-100 p-4 shadow-xl shadow-slate-200/40 border border-slate-200/60">
              {/* Inner accent border */}
              <div className="rounded-xl bg-gradient-to-br from-slate-200/40 via-blue-100/20 to-slate-200/40 p-[1px]">
                <Image
                  src="/images/digital-footprint-cover.png"
                  alt="Digital Footprint for Software Engineers book cover"
                  width={420}
                  height={560}
                  className="relative rounded-xl w-72 md:w-80 lg:w-96 h-auto"
                  priority
                />
              </div>

              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-slate-300/50 rounded-tl-lg" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-slate-300/50 rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-slate-300/50 rounded-bl-lg" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-slate-300/50 rounded-br-lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
