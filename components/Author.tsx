'use client'

import { ExternalLink, Award, Users, Code, User } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const achievements = [
  { icon: Code, label: 'Engineering Leader' },
  { icon: Award, label: 'GitHub Star' },
  { icon: Users, label: 'Open Source Mentor' },
]

export default function Author() {
  return (
    <section className="py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Clean Author Image */}
          <motion.div
            className="flex justify-center md:justify-end order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="relative w-72 h-72 lg:w-80 lg:h-80 bg-slate-200 rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <Image
                  src="/images/vinit-shahdeo.jpg"
                  alt="Vinit Shahdeo"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </motion.div>

              {/* Animated border accent */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-500 rounded-2xl opacity-0"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>
          </motion.div>

          {/* Clean Author Bio */}
          <div className="order-1 md:order-2">
            <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 rounded-full">
              <User className="w-3.5 h-3.5" />
              About the Author
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-5 tracking-tight leading-[1.1]">
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
