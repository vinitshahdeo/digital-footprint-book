'use client'

import { BookOpen, Sparkles, ShoppingCart, ArrowRight, Footprints } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BookIntro() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white via-slate-50/50 to-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <BookOpen className="w-4 h-4" />
            The Solution
          </p>

          <div className="relative">
            {/* Floating Footprint Icons */}
            <motion.div
              className="absolute -left-8 md:-left-16 top-0 text-blue-500/20"
              initial={{ opacity: 0, x: -20, rotate: -15 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -10, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                x: { duration: 0.8, delay: 0.2 },
                y: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
                rotate: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
              }}
            >
              <Footprints className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>

            <motion.div
              className="absolute -right-8 md:-right-16 top-8 text-purple-500/20"
              initial={{ opacity: 0, x: 20, rotate: 15 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, 10, 0],
                rotate: [5, -5, 5],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 },
                x: { duration: 0.8, delay: 0.3 },
                y: { repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 },
                rotate: { repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 },
              }}
            >
              <Footprints className="w-10 h-10 md:w-14 md:h-14" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight leading-[1.1]">
              Introducing
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mt-2">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Digital Footprint
              </span>
            </h3>
            <p className="text-lg md:text-xl text-slate-500 mt-3 font-medium tracking-wide">
              for software engineers
            </p>

            {/* Binary representation of "Digital Footprint" */}
            <style jsx>{`
              @keyframes subtlePulse {
                0%,
                100% {
                  opacity: 0.5;
                }
                50% {
                  opacity: 0.8;
                }
              }
              .binary-pulse {
                animation: subtlePulse 4s ease-in-out infinite;
              }
            `}</style>
            <div className="font-mono text-xs md:text-sm tracking-tight mt-3 mb-6 opacity-50">
              <div className="flex justify-center gap-1.5 flex-wrap">
                <span className="text-slate-400">01000100</span>
                <span className="text-blue-500 binary-pulse">01101001</span>
                <span className="text-slate-400">01100111</span>
                <span className="text-blue-500 binary-pulse">01101001</span>
                <span className="text-slate-400">01110100</span>
                <span className="text-blue-500 binary-pulse">01100001</span>
                <span className="text-slate-400">01101100</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A practical playbook for software engineers who want their work to be discoverable,
            credible, and career-defining
          </p>
        </motion.div>

        {/* Book Cover and Details Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl"></div>
              <Image
                src="/images/bookcoverr.png"
                alt="Digital Footprint for Software Engineers Book Cover"
                width={400}
                height={600}
                className="relative rounded-2xl shadow-2xl shadow-blue-500/20"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Details and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-slate-200">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 text-sm font-medium">38 Actionable Chapters</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-slate-200">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-slate-700 text-sm font-medium">
                  Real Frameworks & Examples
                </span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-slate-200">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 text-sm font-medium">Written by an Engineer</span>
              </div>
            </div>

            <p className="text-base text-slate-500 italic">
              This isn't about becoming an influencer. It's about making sure your best work doesn't
              go unnoticed.
            </p>

            {/* Who is this for */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Perfect for:</h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Engineering Students',
                  'Entry-level Engineers',
                  'SDE-1/2',
                  'Mid-level Developers',
                  'Senior Engineers',
                  'Staff Engineers',
                  'Tech Leads',
                  'Engineering Managers',
                  'Startup Founders',
                ].map((role, index) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.3 + index * 0.03 }}
                    className="px-2.5 py-1 bg-white text-slate-600 text-xs rounded-md font-medium border border-slate-200"
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Buy Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all duration-200 w-full sm:w-auto"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm">Buy on Amazon</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="https://www.flipkart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 w-full sm:w-auto"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm">Buy on Flipkart</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </motion.a>
            </div>

            {/* Trusted By */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pt-5 text-center"
            >
              <p className="text-xs text-slate-500 mb-2">Trusted by engineers at</p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-600">
                <span>Microsoft</span>
                <span className="text-slate-300">•</span>
                <span>Cloudflare</span>
                <span className="text-slate-300">•</span>
                <span>Postman</span>
                <span className="text-slate-300">•</span>
                <span>IBM</span>
                <span className="text-slate-300">•</span>
                <span>Atlassian</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
