'use client'

import { motion } from 'framer-motion'
import { Target, Sparkles, Zap, Star, Rocket, Github } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-28 px-6 bg-white relative overflow-hidden">
      {/* Subtle floating icons */}
      <motion.div
        className="absolute top-16 left-[10%] text-blue-200"
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      
      <motion.div
        className="absolute top-24 right-[15%] text-blue-200"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Rocket className="w-5 h-5" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-[20%] text-blue-200"
        animate={{ y: [0, -6, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Star className="w-5 h-5" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-24 right-[12%] text-blue-200"
        animate={{ y: [0, 8, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Zap className="w-4 h-4" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section badge */}
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Target className="w-4 h-4" />
            The Bottom Line
          </p>
          
          {/* Main headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-4 tracking-tight leading-[1.1]">
            Your Name Is a Brand{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
               — Build It.
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-500 mb-6 font-medium">
            Be Seen. Be Heard. Be Found.
          </p>
          
          {/* GitHub Contribution Chart Only */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative">
              {/* GitHub Icon overlaid */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="bg-white rounded-full p-1.5 md:p-2 shadow-sm">
                  <Github className="w-5 h-5 md:w-6 md:h-6 text-slate-400" />
                </div>
              </div>
              
              <div className="flex justify-center gap-[2px] md:gap-[3px] opacity-60">
                {Array.from({ length: 52 }).map((_, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[2px] md:gap-[3px]">
                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                      const n = weekIndex * 7 + dayIndex;
                      const seed = ((n * 31 + 17) * (n + 43) * 29) % 100;
                      const level = seed < 25 ? 0 : seed < 45 ? 1 : seed < 65 ? 2 : seed < 82 ? 3 : 4;
                      const colors = [
                        'bg-slate-200',
                        'bg-blue-200',
                        'bg-blue-300',
                        'bg-blue-400',
                        'bg-blue-500',
                      ];
                      return (
                        <div
                          key={dayIndex}
                          className={`w-[5px] h-[5px] md:w-2 md:h-2 rounded-[1px] ${colors[level]}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Subtle GitHub link */}
            <a 
              href="https://github.com/vinitshahdeo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 text-xs text-slate-400 hover:text-blue-500 transition-colors"
            >
              View @vinitshahdeo on GitHub →
            </a>
          </div>
          
          {/* Motivational text */}
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            The engineers who get noticed aren't always the best coders — they're the ones who show up. Start building your footprint today.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
