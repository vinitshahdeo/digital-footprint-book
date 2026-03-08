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
import { useEffect, useRef, useState } from 'react'
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
  const [currentTime, setCurrentTime] = useState('')
  const counterRef = useRef<HTMLSpanElement>(null)

  // Direct DOM mutation to avoid re-rendering the entire Hero every 2s
  useEffect(() => {
    let count = 5.35
    const interval = setInterval(() => {
      count = parseFloat((count + Math.random() * 0.002).toFixed(4))
      if (counterRef.current) {
        counterRef.current.textContent = `${count.toFixed(2)}B internet users worldwide`
      }
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }))
    }
    updateClock()
    const timer = setInterval(updateClock, 60_000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative lg:min-h-screen flex items-center px-6 py-14 md:py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Corner icons — hidden on very small screens, visible from sm+ */}
        <FloatingIcon Icon={Github} delay={0} position={{ top: '8%', left: '10%' }} className="hidden sm:block" />
        <FloatingIcon Icon={Youtube} delay={1} position={{ top: '10%', left: '85%' }} className="hidden sm:block" />
        <FloatingIcon Icon={Rss} delay={3.5} position={{ top: '85%', left: '12%' }} className="hidden sm:block" />
        <FloatingIcon Icon={Mail} delay={2.8} position={{ top: '88%', left: '82%' }} className="hidden sm:block" />

        {/* Mid-section & edge icons — hidden on mobile to avoid overlapping content */}
        <FloatingIcon
          Icon={Twitter}
          delay={2}
          position={{ top: '35%', left: '5%' }}
          className="hidden md:block"
        />
        <FloatingIcon
          Icon={Twitch}
          delay={1.5}
          position={{ top: '60%', left: '7%' }}
          className="hidden md:block"
        />
        <FloatingIcon
          Icon={Instagram}
          delay={2.5}
          position={{ top: '40%', left: '90%' }}
          className="hidden md:block"
        />
        <FloatingIcon
          Icon={Rocket}
          delay={0.5}
          position={{ top: '55%', left: '88%' }}
          className="hidden md:block"
        />
        <FloatingIcon
          Icon={Clapperboard}
          delay={1.8}
          position={{ top: '25%', left: '92%' }}
          className="hidden md:block"
        />
        <FloatingIcon
          Icon={Globe}
          delay={3}
          position={{ top: '75%', left: '6%' }}
          className="hidden md:block"
        />
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
                <span ref={counterRef}>5.35B internet users worldwide</span>
              </span>
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-5"
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
            A practical playbook to build a strong, authentic digital presence—without feeling like
            a self-promoter.
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
              className="group px-7 py-3.5 bg-slate-900 text-white rounded-lg font-medium text-base hover:bg-slate-800 transition-all duration-200 w-full sm:w-auto"
            >
              <span className="flex items-center gap-2 justify-center">
                <BookOpen className="w-4 h-4" />
                Get the book
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
            </a>
            <a
              href="#whats-inside"
              className="group px-7 py-3.5 text-slate-700 font-medium text-base hover:text-slate-900 transition-all duration-200 w-full sm:w-auto border border-slate-200 sm:border-transparent rounded-lg"
            >
              <span className="flex items-center gap-2 justify-center">
                <Eye className="w-4 h-4" />
                See what&apos;s inside
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </span>
            </a>
          </motion.div>

          {/* Author Quote */}
          <motion.div
            className="relative max-w-md"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-white via-white to-slate-50/80 backdrop-blur-sm px-6 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] ring-1 ring-slate-900/[0.05]">
              {/* Quote badge */}
              <div className="absolute -top-3 -left-3 w-7 h-7 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center shadow-sm ring-1 ring-blue-100">
                <Quote className="w-3.5 h-3.5 text-blue-400 fill-blue-200/60" />
              </div>

              {/* Background footprint decorations */}
              <Footprints
                className="absolute top-3 right-4 w-8 h-8 text-slate-100 -rotate-[20deg] select-none pointer-events-none"
                aria-hidden="true"
              />
              <Footprints
                className="absolute bottom-2 right-16 w-5 h-5 text-slate-100/50 rotate-[15deg] select-none pointer-events-none"
                aria-hidden="true"
              />

              {/* Quote text */}
              <p className="relative text-[15px] text-slate-700 leading-relaxed italic">
                &ldquo;Write code for machines. Build a footprint for people.&rdquo;
              </p>

              {/* Divider */}
              <div className="my-3.5 h-px bg-gradient-to-r from-slate-200/80 via-slate-200/40 to-transparent" />

              {/* Author attribution */}
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-500/30 shrink-0">
                  <Image
                    src="/images/vinit-shahdeo.jpg"
                    alt="Vinit Shahdeo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover scale-[1.15]"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-slate-900 leading-tight">
                    Vinit Shahdeo
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Author &amp; GitHub Star</p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.55 }}
                  transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
                >
                  <Image
                    src="/images/signature.png"
                    alt="Vinit Shahdeo's signature"
                    width={88}
                    height={26}
                    className="w-[68px] h-auto"
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
          <div className="relative w-[260px] md:w-[280px] lg:w-[300px]">
            {/* Ambient glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-blue-200/40 via-indigo-100/30 to-slate-100/40 rounded-[4rem] blur-3xl" />

            {/* Phone chassis */}
            <div className="relative">
              {/* Side buttons – left (silent switch + volume) */}
              <div className="absolute -left-[1.5px] top-[72px] w-[3px] h-[14px] bg-slate-700 rounded-l-sm" />
              <div className="absolute -left-[1.5px] top-[100px] w-[3px] h-[28px] bg-slate-700 rounded-l-sm" />
              <div className="absolute -left-[1.5px] top-[136px] w-[3px] h-[28px] bg-slate-700 rounded-l-sm" />
              {/* Side button – right (power) */}
              <div className="absolute -right-[1.5px] top-[112px] w-[3px] h-[36px] bg-slate-700 rounded-r-sm" />

              {/* Frame body */}
              <div className="relative bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 rounded-[2.8rem] p-[7px] shadow-[0_8px_40px_rgba(15,23,42,0.25),0_2px_12px_rgba(15,23,42,0.15)] ring-1 ring-white/[0.08]">
                {/* Inner bezel ring */}
                <div className="relative rounded-[2.4rem] ring-1 ring-black/40 overflow-hidden">
                  {/* Screen */}
                  <div className="relative bg-black aspect-[9/19.5]">
                    {/* Status bar */}
                    <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 pt-3 pb-1 pointer-events-none">
                      <span className="text-[10px] font-semibold text-white/90 tracking-tight">
                        {currentTime || '9:41'}
                      </span>
                      <div className="flex items-center gap-1">
                        {/* Signal bars */}
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          className="text-white/90"
                          fill="currentColor"
                        >
                          <rect x="0" y="7" width="2.5" height="3" rx="0.5" />
                          <rect x="3.5" y="5" width="2.5" height="5" rx="0.5" />
                          <rect x="7" y="2.5" width="2.5" height="7.5" rx="0.5" />
                          <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" />
                        </svg>
                        {/* Battery */}
                        <svg
                          width="22"
                          height="10"
                          viewBox="0 0 22 10"
                          className="text-white/90 ml-0.5"
                        >
                          <rect
                            x="0"
                            y="0.5"
                            width="18"
                            height="9"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1"
                            fill="none"
                          />
                          <rect x="1.5" y="2" width="12" height="6" rx="1" fill="currentColor" />
                          <rect
                            x="18.5"
                            y="3"
                            width="2"
                            height="4"
                            rx="0.5"
                            fill="currentColor"
                            opacity="0.4"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Dynamic Island */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-[84px] h-[22px] bg-black rounded-full flex items-center justify-end pr-[7px]">
                      <div className="w-[8px] h-[8px] rounded-full bg-slate-800 ring-1 ring-slate-700/50" />
                    </div>

                    {/* Video / Thumbnail area – clipped to 9:16 centered within the taller screen */}
                    <div className="absolute inset-x-0 top-0 bottom-0 flex items-center">
                      <div className="relative w-full aspect-[9/16] mx-auto overflow-hidden">
                        {showVideo ? (
                          <>
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&rel=0&modestbranding=1&showinfo=0&controls=0&iv_load_policy=3&disablekb=1&fs=0`}
                              title="Digital Footprint for Software Engineers – Book Introduction"
                              className="absolute inset-x-0 -top-[62px] -bottom-[62px] w-full"
                              style={{ height: 'calc(100% + 124px)' }}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              loading="lazy"
                            />
                            {/* Soft fade overlays to mask YouTube chrome */}
                            <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black via-black/60 to-transparent z-10 pointer-events-none" />
                            <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />
                          </>
                        ) : (
                          <button
                            onClick={() => setShowVideo(true)}
                            className="absolute inset-0 w-full h-full cursor-pointer group"
                            aria-label="Play introduction video"
                          >
                            <Image
                              src="/images/digital-footprint-cover.jpg"
                              alt="Digital Footprint for Software Engineers – Book Cover"
                              fill
                              sizes="(max-width: 768px) 260px, (max-width: 1024px) 280px, 300px"
                              className="object-cover"
                              priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20 group-hover:from-black/50 group-hover:via-black/20 group-hover:to-black/30 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                              <motion.div
                                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-300"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                              >
                                <Play className="w-6 h-6 md:w-7 md:h-7 text-slate-900 ml-0.5 fill-slate-900" />
                              </motion.div>
                              {/* Tooltip below play button */}
                              <motion.div
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium rounded-full whitespace-nowrap"
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: [0, 1, 1, 0], y: [-4, 0, 0, 4] }}
                                transition={{
                                  delay: 1.4,
                                  duration: 3,
                                  repeat: Infinity,
                                  repeatDelay: 2,
                                  ease: 'easeInOut',
                                }}
                              >
                                Tap to watch intro
                              </motion.div>
                            </div>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Screen reflection / glare */}
                    <div
                      className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, transparent 55%)',
                      }}
                    />

                    {/* Home indicator */}
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-20 w-[100px] h-[4px] bg-white/30 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
