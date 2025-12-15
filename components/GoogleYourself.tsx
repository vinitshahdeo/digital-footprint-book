'use client'

import { Search } from 'lucide-react'
import { motion } from 'framer-motion'

export default function GoogleYourself() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-8 hover:scale-110 transition-transform duration-300">
            <Search className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-5xl md:text-6xl font-semibold text-black mb-8 tracking-tight">
            Ever{' '}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
              Googled
            </span>{' '}
            yourself?
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Recruiters do. Hiring managers do. Everyone does.
            <br />
            <span className="text-black font-semibold mt-4 block">
              What shows up when they search your name?
            </span>
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div 
              className="text-center p-6 rounded-2xl bg-white border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-4xl font-bold text-blue-600 mb-2">70%</p>
              <p className="text-sm text-slate-600">of recruiters Google candidates before interviews</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-2xl bg-white border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p className="text-4xl font-bold text-blue-600 mb-2">85%</p>
              <p className="text-sm text-slate-600">check GitHub and LinkedIn first</p>
            </motion.div>

            <motion.div 
              className="text-center p-6 rounded-2xl bg-white border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p className="text-4xl font-bold text-blue-600 mb-2">63%</p>
              <p className="text-sm text-slate-600">reject due to poor online presence</p>
            </motion.div>
          </div>

          <motion.div 
            className="text-center py-8 px-6 rounded-2xl bg-slate-50 border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-lg text-slate-700 mb-2">
              If you don't control your digital footprint, Google will.
            </p>
            <p className="text-sm text-slate-500">
              This book shows you how to take control and make your work visible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
