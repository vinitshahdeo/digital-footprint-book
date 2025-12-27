'use client'

import {
  ArrowRight,
  ShoppingCart,
  Rocket,
  Check,
  BookOpen,
  TabletSmartphone,
  FileText,
  Headphones,
} from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  '38 actionable chapters',
  '11 comprehensive sections',
  '350+ pages of insights',
  'Real-world frameworks',
]

export default function Purchase() {
  return (
    <section
      id="purchase"
      className="relative py-28 px-6 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-400 mb-6 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <Rocket className="w-4 h-4" />
            Ready to Start?
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Digital Footprint
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-slate-300">
              for Software Engineers
            </span>
          </h2>

          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Get your copy today and start building your online presence
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-white/5 rounded-full border border-white/10"
              >
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span className="text-sm text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 max-w-xl mx-auto">
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-all duration-200 w-full sm:w-auto"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Buy on Amazon</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>

          <a
            href="https://www.flipkart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-200 w-full sm:w-auto"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Buy on Flipkart</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Format Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <BookOpen className="w-4 h-4" />
            <span>Paperback</span>
          </div>
          <span className="text-slate-600">•</span>
          <div className="flex items-center gap-2 text-slate-400">
            <TabletSmartphone className="w-4 h-4" />
            <span>Kindle</span>
          </div>
          <span className="text-slate-600">•</span>
          <div className="flex items-center gap-2 text-slate-400">
            <FileText className="w-4 h-4" />
            <span>ePub</span>
          </div>
          <span className="text-slate-600">•</span>
          <div className="flex items-center gap-2 text-slate-500/60">
            <Headphones className="w-4 h-4" />
            <span className="italic">Audiobook coming soon</span>
          </div>
        </div>
      </div>
    </section>
  )
}
