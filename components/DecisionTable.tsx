'use client'

import { motion } from 'framer-motion'

export default function DecisionTable() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Two narratives side by side */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* Before — muted side */}
          <motion.div
            className="bg-white md:rounded-l-2xl md:rounded-r-none rounded-t-2xl md:rounded-t-none md:rounded-tl-2xl p-8 sm:p-10 md:p-12 border border-slate-200 md:border-r-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">
              Without this book
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 leading-snug">
              You write great code. <span className="text-slate-400">Nobody knows.</span> You apply
              to 50 jobs. <span className="text-slate-400">Silence.</span> You Google yourself.{' '}
              <span className="text-slate-400">Nothing.</span>
            </p>
            <p className="mt-6 text-sm text-slate-400">Your career grows one resume at a time.</p>
          </motion.div>

          {/* After — vivid side */}
          <motion.div
            className="bg-slate-900 md:rounded-r-2xl md:rounded-l-none rounded-b-2xl md:rounded-b-none md:rounded-br-2xl p-8 sm:p-10 md:p-12 border border-slate-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xs font-medium text-blue-400 uppercase tracking-widest mb-6">
              With this book
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-500 leading-snug">
              You write great code. <span className="text-white">The world sees it.</span>{' '}
              Recruiters find you.{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                You pick the best offer.
              </span>{' '}
              You Google yourself. <span className="text-white">Page one, your story.</span>
            </p>
            <p className="mt-6 text-sm text-blue-400/80">
              Your career compounds with every signal you put out.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
