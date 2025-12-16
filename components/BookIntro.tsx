'use client'

import { BookOpen, Sparkles, ShoppingCart, ArrowRight, Footprints } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BookIntro() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full font-accent">
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
              transition={{ duration: 0.8, delay: 0.2 }}
              animate={{ 
                y: [0, -10, 0],
                rotate: [-5, 5, -5]
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
            >
              <Footprints className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
            
            <motion.div
              className="absolute -right-8 md:-right-16 top-8 text-purple-500/20"
              initial={{ opacity: 0, x: 20, rotate: 15 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              animate={{ 
                y: [0, 10, 0],
                rotate: [5, -5, 5]
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 },
                rotate: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }
              }}
            >
              <Footprints className="w-10 h-10 md:w-14 md:h-14" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight leading-[1.1]">
              Introducing{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Digital Footprint
              </span>
            </h2>
            <p className="text-sm text-slate-400 mt-2 mb-6">for software engineers</p>
          </div>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A practical playbook for software engineers who want their work to be discoverable, credible, and career-defining
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
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl"></div>
              <Image
                src="/images/book-cover.png"
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
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-medium">12 Actionable Chapters</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-slate-700 font-medium">Real Frameworks & Examples</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-medium">Written by an Engineer</span>
              </div>
            </div>

            <p className="text-lg text-slate-500 italic">
              This isn't about becoming an influencer. It's about making sure your best work doesn't go unnoticed.
            </p>

            {/* Buy Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Buy on Amazon</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              
              <motion.a
                href="https://www.flipkart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Buy on Flipkart</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
