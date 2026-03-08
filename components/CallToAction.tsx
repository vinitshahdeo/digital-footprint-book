'use client'

import { motion } from 'framer-motion'
import { Target, Sparkles, Zap, Star, Rocket, Github } from 'lucide-react'

export default function CallToAction() {
  return (
    <section
      id="bottom-line"
      className="py-16 sm:py-20 md:py-28 px-6 bg-gradient-to-b from-slate-50/80 to-white relative overflow-hidden"
    >
      {/* Subtle floating icons — hidden on mobile to prevent overlap with content */}
      <motion.div
        className="absolute top-16 left-[10%] text-blue-200 hidden md:block"
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <Sparkles className="w-6 h-6 lg:w-8 lg:h-8" />
      </motion.div>

      <motion.div
        className="absolute top-24 right-[15%] text-blue-200 hidden md:block"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        aria-hidden="true"
      >
        <Rocket className="w-5 h-5 lg:w-7 lg:h-7" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-[20%] text-blue-200 hidden md:block"
        animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        aria-hidden="true"
      >
        <Star className="w-5 h-5 lg:w-7 lg:h-7" />
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-[12%] text-blue-200 hidden md:block"
        animate={{ y: [0, 8, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        aria-hidden="true"
      >
        <Zap className="w-4 h-4 lg:w-6 lg:h-6" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {/* Section badge */}
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Target className="w-4 h-4" />
            The Bottom Line
          </p>

          {/* Main headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 mb-6 text-balance">
            Your Name Is a Brand{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              — Build It.
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-500 mb-4 font-medium max-w-2xl mx-auto">
            Be Seen. Be Heard. Be Found.
          </p>

          {/* GitHub Contribution Chart */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative max-w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {/* Fade edges to hint at scrollable overflow on mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden" />
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden" />

              <div className="flex justify-center gap-[2px] md:gap-[3px] opacity-80 w-max mx-auto px-4 md:px-0">
                {Array.from({ length: 52 }).map((_, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[2px] md:gap-[3px]">
                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                      const n = weekIndex * 7 + dayIndex
                      const seed = ((n * 31 + 17) * (n + 43) * 29) % 100
                      const level =
                        seed < 25 ? 0 : seed < 45 ? 1 : seed < 65 ? 2 : seed < 82 ? 3 : 4
                      const colors = [
                        'bg-slate-200',
                        'bg-blue-200',
                        'bg-blue-300',
                        'bg-blue-400',
                        'bg-blue-500',
                      ]
                      return (
                        <div
                          key={dayIndex}
                          className={`w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] md:w-2 md:h-2 rounded-[1px] ${colors[level]}`}
                          style={
                            level > 0
                              ? {
                                  animation: 'contribution-shimmer 5s ease-in-out infinite',
                                  animationDelay: `${weekIndex * 0.08 + dayIndex * 0.03}s`,
                                }
                              : undefined
                          }
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Profile Link — min touch target 44×44 */}
            <a
              href="https://github.com/vinitshahdeo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-500 transition-colors hover:opacity-100 min-h-[44px] min-w-[44px] px-3 justify-center"
            >
              <Github className="w-3.5 h-3.5" />
              @vinitshahdeo on GitHub
            </a>
          </div>

          {/* Motivational text */}
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            The engineers who get noticed aren&apos;t always the best coders —{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent font-medium">
              they&apos;re the ones who show up.
            </span>{' '}
            Start building your footprint today.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
