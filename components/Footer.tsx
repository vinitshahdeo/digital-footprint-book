'use client'

import { Linkedin, Github, Twitter, ArrowRight, Footprints } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/vinitshahdeo',
    label: 'Connect on LinkedIn'
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/vinitshahdeo',
    label: 'Follow on GitHub'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/Vinit_Shahdeo',
    label: 'Follow on Twitter/X'
  }
]

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/60">
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4, 
                    ease: "easeInOut" 
                  }}
                >
                  <Footprints className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Footprint
                </h3>
              </div>
              <p className="text-xs text-slate-400 ml-9">for software engineers</p>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              A practical playbook for engineers who want their work to be seen.
            </p>
            <motion.a
              href="#purchase"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get the book
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#preview" className="text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors"></span>
                  What's inside
                </a>
              </li>
              <li>
                <a href="#author" className="text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors"></span>
                  About the author
                </a>
              </li>
              <li>
                <a href="#purchase" className="text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors"></span>
                  Buy now
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <a
              href="https://vinitshahdeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              vinitshahdeo.com →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>
            © {new Date().getFullYear()} Vinit Shahdeo. All rights reserved.
          </p>
          <p className="text-slate-500 font-accent">
            Made for engineers who ship ✨
          </p>
        </div>
      </div>
    </footer>
  )
}
