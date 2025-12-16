'use client'

import { Linkedin, Github, Twitter, ArrowRight, Footprints, Coffee, ShoppingCart } from 'lucide-react'
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
    <footer className="relative py-16 px-6 bg-gradient-to-b from-white via-slate-50/50 to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10">
          {/* Brand Section */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
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
                  <Footprints className="w-5 h-5 text-blue-600" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    Digital Footprint
                  </h3>
                  <p className="text-xs text-slate-500">for software engineers</p>
                </div>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              A practical playbook for engineers who want their work to be seen.
            </p>
            <motion.a
              href="#purchase"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group text-sm w-fit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingCart className="w-4 h-4" />
              Get the book
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </div>

          {/* Google Search Section */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Try it yourself
            </h4>
            <a
              href="https://www.google.com/search?q=Vinit+Shahdeo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 pl-3.5 pr-3 py-2.5 bg-white rounded-full border border-slate-300 hover:shadow-lg hover:border-blue-400 transition-all duration-200 group w-full max-w-sm"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
              </svg>
              <span className="text-sm text-slate-700 font-normal flex-1 text-left">Vinit Shahdeo</span>
              <svg className="w-4 h-4 text-blue-500 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </a>
            <p className="text-xs text-slate-500 leading-relaxed">
              See the principles in action
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#preview" className="text-sm text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors"></span>
                  What's inside
                </a>
              </li>
              <li>
                <a href="#author" className="text-sm text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors"></span>
                  About the author
                </a>
              </li>
              <li>
                <a href="#purchase" className="text-sm text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors"></span>
                  Buy now
                </a>
              </li>
              <li>
                <a href="#purchase" className="text-sm text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors"></span>
                  Get e-book
                </a>
              </li>
              <li>
                <a 
                  href="https://vinitshahdeo.com/talk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors"></span>
                  Request a talk
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Connect
            </h4>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white border border-slate-200 rounded-lg hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
              <a
                href="https://vinitshahdeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium flex items-center gap-1 group w-fit"
              >
                vinitshahdeo.com
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <motion.a
                href="https://www.buymeacoffee.com/vinitshahdeo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 text-sm text-slate-600 hover:text-blue-700 shadow-sm hover:shadow-md w-fit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Coffee className="w-4 h-4" />
                <span>Buy me a coffee</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Vinit Shahdeo. All rights reserved.
          </p>
          <p className="text-slate-400">
            Made for engineers who ship ✨
          </p>
        </div>
      </div>
    </footer>
  )
}
