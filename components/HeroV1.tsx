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
  Play,
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

const YOUTUBE_VIDEO_ID = 'GK6TIHiov4A'

export default function HeroV1() {
  const [showVideo, setShowVideo] = useState(false)
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
    <section className="relative lg:min-h-screen flex items-center px-6 py-14 md:py-24 overflow-hidden bg-white">
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

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-12 items-center">
        {/* Left: Text Content */}
        <div className="text-left">
          {/* Badge */}
          <motion.div
            className="inline-block mb-5 lg:mb-6"
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
            className="mb-5"
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
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 tracking-tight leading-[1.1]"
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
            className="text-lg text-slate-600 mb-7 lg:mb-8 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A practical playbook to build a strong, authentic digital presence—without feeling like a
            self-promoter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-7 lg:mb-8"
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
          <div className="relative w-[270px] md:w-[290px] lg:w-[320px]">
            {/* Glow behind phone */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-100 to-slate-100 rounded-[3rem] blur-3xl opacity-60" />

            {/* Phone Frame */}
            <div className="relative bg-slate-900 rounded-[2.5rem] p-2.5 shadow-2xl shadow-slate-300/50 ring-1 ring-slate-800">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-10" />

              {/* Screen */}
              <div className="relative rounded-[2rem] overflow-hidden bg-black aspect-[9/16]">
                {showVideo ? (
                  <>
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=0&iv_load_policy=3&disablekb=1&fs=0`}
                      title="Digital Footprint for Software Engineers – Book Introduction"
                      className="absolute inset-x-0 -top-[62px] -bottom-[62px] w-full"
                      style={{ height: 'calc(100% + 124px)' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      loading="lazy"
                    />
                    {/* Gradient overlays to hide YouTube title and branding */}
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
                  </>
                ) : (
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute inset-0 w-full h-full cursor-pointer group"
                    aria-label="Play introduction video"
                  >
                    <Image
                      src="/images/digital-footprint-cover.png"
                      alt="Digital Footprint for Software Engineers – Book Cover"
                      fill
                      sizes="(max-width: 768px) 270px, (max-width: 1024px) 290px, 320px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 md:w-7 md:h-7 text-slate-900 ml-0.5" />
                      </div>
                    </div>
                  </button>
                )}
              </div>

              {/* Home Indicator */}
              <div className="mt-2 mx-auto w-24 h-1 bg-slate-600 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
