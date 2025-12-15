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
            <span className="text-black font-semibold mt-4 block font-handwriting text-2xl">
              What shows up when they search your name?
            </span>
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div 
              className="relative group text-center p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <motion.p 
                className="relative text-5xl font-bold text-blue-600 mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                70%
              </motion.p>
              <p className="relative text-sm font-medium text-slate-900 mb-1">Recruiters Google first</p>
              <p className="relative text-xs text-slate-500">before scheduling interviews</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            <motion.div 
              className="relative group text-center p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <motion.p 
                className="relative text-5xl font-bold text-blue-600 mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15, type: "spring" }}
              >
                85%
              </motion.p>
              <p className="relative text-sm font-medium text-slate-900 mb-1">Check social profiles</p>
              <p className="relative text-xs text-slate-500">GitHub & LinkedIn before résumé</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            <motion.div 
              className="relative group text-center p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <motion.p 
                className="relative text-5xl font-bold text-purple-600 mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              >
                63%
              </motion.p>
              <p className="relative text-sm font-medium text-slate-900 mb-1">Candidates rejected</p>
              <p className="relative text-xs text-slate-500">due to poor online presence</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </div>

          <motion.div 
            className="text-center py-8 px-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/60 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
