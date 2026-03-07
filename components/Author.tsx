'use client'

import { ExternalLink, User } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Author() {
  return (
    <section className="py-16 md:py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Editorial Author Image */}
          <motion.div
            className="flex justify-center md:justify-end order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative">
              {/* Offset decorative frame */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border border-slate-300 rounded-lg"
                initial={{ opacity: 0, x: 10, y: 10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              />

              {/* Accent line */}
              <motion.div
                className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
              />

              {/* Main image */}
              <motion.div
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-lg overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-slate-200/60"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <Image
                  src="/images/vinit-shahdeo.jpg"
                  alt="Vinit Shahdeo"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />

                {/* Subtle gradient overlay for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          {/* Clean Author Bio */}
          <div className="order-1 md:order-2">
            <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
              <User className="w-3.5 h-3.5" />
              About the Author
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Vinit{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Shahdeo
              </span>
            </h2>

            <div className="space-y-5 text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                A software engineer and engineering leader who has worked across developer
                platforms, fintech, AI-driven products, and large-scale distributed systems.
              </p>

              <p>
                As a <span className="font-semibold text-black">GitHub Star</span> and open-source
                mentor, he's helped thousands of engineers build visibility through code, content,
                and community.
              </p>

              <p className="text-black font-semibold">
                This book shares the exact playbook he used to build his digital footprint.
              </p>

              <p className="text-sm text-slate-500 italic pt-2 border-t border-slate-200">
                Try it yourself: Google "Vinit Shahdeo" to see the principles in action
              </p>
            </div>

            <a
              href="https://vinitshahdeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:text-blue-700 transition-all duration-200 group"
            >
              Learn more about Vinit
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
