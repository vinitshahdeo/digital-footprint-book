'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Globe } from 'lucide-react'

const SEARCH_QUERY = 'vinit shahdeo'
const TYPING_SPEED = 110
const PAUSE_BEFORE_RESULTS = 600

const GoogleLogo = () => (
  <svg viewBox="0 0 272 92" className="h-7 md:h-8" aria-label="Google">
    <path
      d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      fill="#EA4335"
    />
    <path
      d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
      fill="#FBBC05"
    />
    <path
      d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
      fill="#4285F4"
    />
    <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
    <path
      d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
      fill="#EA4335"
    />
    <path
      d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.01z"
      fill="#4285F4"
    />
  </svg>
)

const ResultIcon = ({ type }: { type: string }) => {
  const iconClasses = 'w-4 h-4'
  switch (type) {
    case 'portfolio':
      return (
        <div className="w-7 h-7 rounded-full bg-[#303134] flex items-center justify-center flex-shrink-0">
          <Globe className={`${iconClasses} text-blue-400`} />
        </div>
      )
    case 'github':
      return (
        <div className="w-7 h-7 rounded-full bg-[#303134] flex items-center justify-center flex-shrink-0">
          <svg className={iconClasses} viewBox="0 0 24 24" fill="#e8eaed">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
      )
    case 'twitter':
      return (
        <div className="w-7 h-7 rounded-full bg-[#303134] flex items-center justify-center flex-shrink-0">
          <svg className={iconClasses} viewBox="0 0 24 24" fill="#e8eaed">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
      )
    case 'stars':
      return (
        <div className="w-7 h-7 rounded-full bg-[#303134] flex items-center justify-center flex-shrink-0">
          <svg className={iconClasses} viewBox="0 0 24 24" fill="#e8eaed">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
      )
    case 'peerlist':
      return (
        <div className="w-7 h-7 rounded-full bg-[#303134] flex items-center justify-center flex-shrink-0">
          <svg className={iconClasses} viewBox="0 0 24 24" fill="#00aa45">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2.4a9.6 9.6 0 110 19.2 9.6 9.6 0 010-19.2zm-1.2 4.8v9.6h2.4v-3.6h1.2a3.6 3.6 0 100-7.2h-3.6zm2.4 2.4h1.2a1.2 1.2 0 110 2.4h-1.2V9.6z" />
          </svg>
        </div>
      )
    case 'blog':
      return (
        <div className="w-7 h-7 rounded-full bg-[#303134] flex items-center justify-center flex-shrink-0">
          <svg className={iconClasses} viewBox="0 0 24 24" fill="#FF6600">
            <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415a3.3 3.3 0 013.24 3.24A3.3 3.3 0 013.291 24 3.3 3.3 0 010 20.655a3.3 3.3 0 013.291-3.24zM13.2 24h-4.8c0-4.639-3.761-8.4-8.4-8.4V10.8c7.274 0 13.2 5.926 13.2 13.2z" />
          </svg>
        </div>
      )
    case 'linkedin':
      return (
        <div className="w-7 h-7 rounded-full bg-[#303134] flex items-center justify-center flex-shrink-0">
          <svg className={iconClasses} viewBox="0 0 24 24" fill="#0A66C2">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.069 0-1.144.925-2.069 2.069-2.069 1.144 0 2.069.925 2.069 2.069 0 1.143-.925 2.069-2.069 2.069zM6.814 20.452H3.861V9h2.953v11.452z" />
          </svg>
        </div>
      )
    default:
      return null
  }
}

const searchResults = [
  {
    title: 'Vinit Shahdeo — Portfolio',
    url: 'https://vinitshahdeo.com',
    displayUrl: 'vinitshahdeo.com',
    siteName: 'Vinit Shahdeo',
    description:
      'Software Engineer, open-source enthusiast, and author. He builds developer tools, mentors at Google Summer of Code, and writes about engineering career growth.',
    type: 'portfolio',
  },
  {
    title: 'vinitshahdeo (Vinit Shahdeo) · GitHub',
    url: 'https://github.com/vinitshahdeo',
    displayUrl: 'github.com › vinitshahdeo',
    siteName: 'GitHub',
    description:
      'Open-source contributor with 10K+ GitHub stars. Creator of popular repositories, Google Summer of Code mentor, and passionate about developer tools and communities.',
    type: 'github',
  },
  {
    title: 'Vinit Shahdeo - Engineering Lead @ ZZAZZ.ai',
    url: 'https://www.linkedin.com/in/vinitshahdeo',
    displayUrl: 'linkedin.com › in › vinitshahdeo',
    siteName: 'LinkedIn',
    description:
      'Engineering Leader @ ZZAZZ.ai | 3× GitHub Star | GSoC Mentor | SaaS → FinTech → AI | Ex-Novo, Ex-Postman',
    type: 'linkedin',
  },
  //   {
  //     title: 'Vinit Shahdeo (@Vinit_Shahdeo) / X',
  //     url: 'https://x.com/Vinit_Shahdeo',
  //     displayUrl: 'x.com › Vinit_Shahdeo',
  //     siteName: 'X (formerly Twitter)',
  //     description:
  //       'Software Engineer. Open Source. Author of Digital Footprint. Sharing insights on engineering, career growth, and building in public. Joined 2017.',
  //     type: 'twitter',
  //   },
  //   {
  //     title: 'Vinit Shahdeo — GitHub Stars',
  //     url: 'https://stars.github.com/profiles/vinitshahdeo',
  //     displayUrl: 'stars.github.com › profiles › vinitshahdeo',
  //     siteName: 'GitHub Stars',
  //     description:
  //       'GitHub Star recognized for impactful open-source contributions, community leadership, and dedication to helping developers worldwide.',
  //     type: 'stars',
  //   },
  //   {
  //     title: 'Vinit Shahdeo — Peerlist',
  //     url: 'https://peerlist.io/vinitshahdeo',
  //     displayUrl: 'peerlist.io › vinitshahdeo',
  //     siteName: 'Peerlist',
  //     description:
  //       'View Vinit Shahdeo\'s professional profile on Peerlist — work history, projects, recommendations, and proof of work all in one place.',
  //     type: 'peerlist',
  //   },
  //   {
  //     title: 'Vinit Shahdeo — Blog & Writing',
  //     url: 'https://vinitshahdeo.dev/blog',
  //     displayUrl: 'vinitshahdeo.dev › blog',
  //     siteName: 'vinitshahdeo.dev',
  //     description:
  //       'Articles on software engineering, open source, digital presence, and career growth. Practical insights for developers who want to stand out and get noticed.',
  //     type: 'blog',
  //   },
]

const peopleAlsoSearchFor = [
  'vinit shahdeo github',
  'vinit shahdeo postman',
  'digital footprint book',
  'vinit shahdeo open source',
  'vinit shahdeo blog',
  'github stars india',
]

const TypewriterCursor = () => (
  <motion.span
    className="inline-block w-[2px] h-5 bg-[#e8eaed] ml-[1px] align-middle"
    animate={{ opacity: [1, 0] }}
    transition={{ duration: 0.53, repeat: Infinity, repeatType: 'reverse' }}
  />
)

export default function GoogleSearchSimulator() {
  const [typedText, setTypedText] = useState('')
  const [phase, setPhase] = useState<'idle' | 'typing' | 'searching' | 'results'>('idle')
  const [visibleResults, setVisibleResults] = useState(0)
  const [showChips, setShowChips] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Trigger animation on scroll into view
  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          setPhase('typing')
        }
      },
      { threshold: 0.2 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  // Typing effect
  useEffect(() => {
    if (phase !== 'typing') return

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < SEARCH_QUERY.length) {
        setTypedText(SEARCH_QUERY.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => setPhase('searching'), PAUSE_BEFORE_RESULTS)
      }
    }, TYPING_SPEED)

    return () => clearInterval(interval)
  }, [phase])

  // Searching -> Results
  useEffect(() => {
    if (phase !== 'searching') return
    const timeout = setTimeout(() => setPhase('results'), 900)
    return () => clearTimeout(timeout)
  }, [phase])

  // Stagger results then show chips
  useEffect(() => {
    if (phase !== 'results') return

    let count = 0
    const interval = setInterval(() => {
      count++
      setVisibleResults(count)
      if (count >= searchResults.length) {
        clearInterval(interval)
        setTimeout(() => setShowChips(true), 400)
      }
    }, 180)

    return () => clearInterval(interval)
  }, [phase])

  const dotColors = ['bg-[#4285F4]', 'bg-[#EA4335]', 'bg-[#FBBC05]', 'bg-[#34A853]']

  return (
    <motion.div
      ref={containerRef}
      className="w-full"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className="rounded-xl border border-slate-700/40 bg-[#202124] shadow-xl shadow-black/20 overflow-hidden">
        {/* Browser Tab Bar */}
        <div className="bg-[#292a2d] border-b border-[#3c4043] px-4 py-2.5 flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ed6a5e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f5bf4f]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#62c554]" />
          </div>

          {/* URL Bar */}
          <div className="flex-1 flex items-center gap-2 bg-[#35363a] rounded-full px-3 py-1 border border-[#3c4043]/60 text-xs">
            <svg
              className="w-3 h-3 text-[#9aa0a6] flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="text-[#9aa0a6] truncate">
              google.com/search?q=
              <span className="text-[#e8eaed]">{typedText.replace(/ /g, '+')}</span>
            </span>
          </div>
        </div>

        {/* Google Search Page — Dark */}
        <div className="p-4 md:p-5 min-h-[500px] bg-[#202124]">
          {/* Logo + Search Bar */}
          <div className="mb-4">
            <div className="mb-4">
              <GoogleLogo />
            </div>

            {/* Search Input */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-[#5f6368] bg-[#303134] max-w-xl transition-colors">
              <Search className="w-3.5 h-3.5 text-[#9aa0a6] flex-shrink-0" />
              <div className="flex-1 text-sm text-[#e8eaed] font-normal flex items-center min-h-[20px]">
                {typedText}
                {(phase === 'typing' || phase === 'idle') && <TypewriterCursor />}
              </div>
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"
                  fill="#4285F4"
                />
                <path
                  d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"
                  fill="#34A853"
                />
              </svg>
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 192 192" fill="none" aria-hidden="true">
                <circle cx="96" cy="96" r="70" stroke="#4285F4" strokeWidth="16" fill="none" />
                <circle cx="96" cy="96" r="28" fill="#34A853" />
                <path
                  d="M96 26a70 70 0 0170 70"
                  stroke="#EA4335"
                  strokeWidth="16"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M26 96a70 70 0 0070-70"
                  stroke="#FBBC05"
                  strokeWidth="16"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-5 mt-3 border-b border-[#3c4043] pb-2 text-xs">
              <span className="text-[#8ab4f8] border-b-[3px] border-[#8ab4f8] pb-2 font-medium flex items-center gap-1">
                <Search className="w-3 h-3" />
                All
              </span>
              <span className="text-[#969ba1] pb-2 cursor-default">Images</span>
              <span className="text-[#969ba1] pb-2 cursor-default">News</span>
              <span className="text-[#969ba1] pb-2 cursor-default hidden sm:inline">Videos</span>
              <span className="text-[#969ba1] pb-2 cursor-default hidden sm:inline">Maps</span>
            </div>
          </div>

          {/* Loading — Google-colored dots */}
          <AnimatePresence>
            {phase === 'searching' && (
              <motion.div
                className="flex flex-col items-center justify-center py-8 gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex gap-2">
                  {dotColors.map((color, i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 rounded-full ${color}`}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>
                <p className="text-xs text-[#9aa0a6]">Searching...</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Count */}
          {phase === 'results' && (
            <motion.p
              className="text-[11px] text-[#9aa0a6] mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              About 2,34,000 results (0.42 seconds)
            </motion.p>
          )}
          {/* Search Results */}
          <div className="space-y-0.5">
            {phase === 'results' &&
              searchResults.map((result, index) => (
                <AnimatePresence key={index}>
                  {visibleResults > index && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <div className="group relative rounded-lg px-3 py-2.5 -mx-1 transition-colors duration-200 hover:bg-[#303134]/60 cursor-pointer">
                        {/* Favicon + site info */}
                        <div className="flex items-center gap-2 mb-0.5">
                          <ResultIcon type={result.type} />
                          <div className="flex flex-col min-w-0">
                            <span className="text-xs text-[#e8eaed] leading-tight truncate">
                              {result.siteName}
                            </span>
                            <span className="text-[11px] text-[#969ba1] truncate">
                              {result.displayUrl}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-[#8ab4f8] text-[15px] leading-snug font-normal group-hover:underline decoration-[#8ab4f8]/40 underline-offset-2 mb-0.5">
                          {result.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-[#bdc1c6] leading-relaxed line-clamp-2">
                          {result.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
          </div>

          {/* People Also Search For */}
          <AnimatePresence>
            {showChips && (
              <motion.div
                className="mt-6 pt-4 border-t border-[#3c4043]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <p className="text-xs font-medium text-[#e8eaed] mb-2.5">People also search for</p>
                <div className="flex flex-wrap gap-1.5">
                  {peopleAlsoSearchFor.map((chip, i) => (
                    <motion.span
                      key={chip}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#303134] border border-[#5f6368]/50 text-xs text-[#8ab4f8] hover:bg-[#3c4043] transition-colors cursor-pointer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                    >
                      <Search className="w-2.5 h-2.5 text-[#9aa0a6]" />
                      {chip}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Idle state — empty results area (natural browser look) */}
        </div>
      </div>
    </motion.div>
  )
}
