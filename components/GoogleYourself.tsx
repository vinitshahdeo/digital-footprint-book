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
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              className="group text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <p className="text-5xl font-bold text-blue-600 mb-4">70%</p>
              <p className="text-sm font-medium text-slate-900 mb-1">Recruiters Google first</p>
              <p className="text-xs text-slate-500">before scheduling interviews</p>
            </motion.div>

            <motion.div 
              className="group text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -4 }}
            >
              <p className="text-5xl font-bold text-blue-600 mb-4">85%</p>
              <p className="text-sm font-medium text-slate-900 mb-1">Check social profiles</p>
              <p className="text-xs text-slate-500">GitHub & LinkedIn before résumé</p>
            </motion.div>

            <motion.div 
              className="group text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <p className="text-5xl font-bold text-red-600 mb-4">63%</p>
              <p className="text-sm font-medium text-slate-900 mb-1">Candidates rejected</p>
              <p className="text-xs text-slate-500">due to poor online presence</p>
            </motion.div>
          </div>

          <motion.div 
            className="text-center py-8 px-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-base font-medium text-slate-900 mb-2">
              If you don't control your digital footprint, Google will.
            </p>
            <p className="text-sm text-slate-600">
              This book shows you exactly how to take control.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
