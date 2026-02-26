'use client'

import {
  ArrowRight,
  BookOpen,
  Clapperboard,
  Eye,
  Footprints,
  Github,
  Globe,
  Instagram,
  Mail,
  Quote,
  Rocket,
  Rss,
  Sparkles,
  Twitch,
  Twitter,
  Youtube,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const FloatingIcon = ({
  Icon,
  delay,
  position,
  className = '',
}: {
  Icon: any
  delay: number
  position: { top: string; left: string }
  className?: string
}) => (
  <motion.div
    className={`absolute text-slate-200 ${className}`}
    style={{ ...position }}
    initial={{ opacity: 0 }}
    animate={{
      opacity: [0.3, 0.5, 0.3],
      y: [0, -10, 0],
    }}
    transition={{
      duration: 12,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    aria-hidden="true"
  >
    <Icon className="w-8 h-8 md:w-12 md:h-12" />
  </motion.div>
)

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
    <section className="relative lg:min-h-screen flex items-center px-6 py-16 lg:py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Corner icons — visible on all screens */}
        <FloatingIcon Icon={Github} delay={0} position={{ top: '8%', left: '10%' }} />
        <FloatingIcon Icon={Youtube} delay={1} position={{ top: '10%', left: '85%' }} />
        <FloatingIcon Icon={Rss} delay={3.5} position={{ top: '85%', left: '12%' }} />
        <FloatingIcon Icon={Mail} delay={2.8} position={{ top: '88%', left: '82%' }} />

        {/* Mid-section & edge icons — hidden on mobile to avoid overlapping content */}
        <FloatingIcon Icon={Twitter} delay={2} position={{ top: '35%', left: '5%' }} className="hidden md:block" />
        <FloatingIcon Icon={Twitch} delay={1.5} position={{ top: '60%', left: '7%' }} className="hidden md:block" />
        <FloatingIcon Icon={Instagram} delay={2.5} position={{ top: '40%', left: '90%' }} className="hidden md:block" />
        <FloatingIcon Icon={Rocket} delay={0.5} position={{ top: '55%', left: '88%' }} className="hidden md:block" />
        <FloatingIcon Icon={Clapperboard} delay={1.8} position={{ top: '25%', left: '92%' }} className="hidden md:block" />
        <FloatingIcon Icon={Globe} delay={3} position={{ top: '75%', left: '6%' }} className="hidden md:block" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Text Content */}
        <div className="text-left">
          {/* Badge */}
          <motion.div
            className="inline-block mb-6 lg:mb-8"
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
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]"
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
            className="text-lg text-slate-600 mb-8 lg:mb-10 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A practical playbook to build a strong, authentic digital presence—without feeling like a
            self-promoter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12"
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
              className="group px-7 py-3.5 text-slate-700 font-medium text-base hover:text-slate-900 transition-all duration-250 w-full sm:w-auto border border-slate-200 sm:border-transparent rounded-lg"
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
            className="relative max-w-md rounded-2xl bg-white/60 backdrop-blur-sm px-5 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-slate-900/[0.06]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {/* Quote badge */}
            <div className="absolute -top-3 -left-3 w-7 h-7 bg-blue-50 rounded-full flex items-center justify-center ring-1 ring-blue-100/50 shadow-sm">
              <Quote className="w-3.5 h-3.5 text-blue-500/50 fill-blue-200/50" />
            </div>

            {/* Background footprint decorations */}
            <Footprints className="absolute top-2.5 right-3 w-9 h-9 text-slate-100 -rotate-[20deg] select-none pointer-events-none" />
            <Footprints className="absolute bottom-1.5 right-14 w-6 h-6 text-slate-100/60 rotate-[15deg] select-none pointer-events-none" />

            <div className="relative flex items-start gap-3.5">
              <Image
                src="/images/vinit-shahdeo.jpg"
                alt="Vinit Shahdeo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm shrink-0"
              />

              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-[15px] text-slate-700 leading-relaxed italic">
                  Write code for machines. Build a footprint for people.
                </p>

                <motion.div
                  className="mt-2.5"
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
