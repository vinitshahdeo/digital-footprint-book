'use client'

import { Linkedin, Github, Twitter, ArrowRight, Footprints, Coffee } from 'lucide-react'
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
              <li>
                <a href="#purchase" className="text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors"></span>
                  Get e-book
                </a>
              </li>
              <li>
                <a 
                  href="https://vinitshahdeo.com/talk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors"></span>
                  Request a talk
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
              className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium block mb-6"
            >
              vinitshahdeo.com →
            </a>

            {/* Support Badge */}
            <motion.a
              href="https://www.buymeacoffee.com/vinitshahdeo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 text-sm text-slate-600 hover:text-slate-900 shadow-sm"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Coffee className="w-4 h-4" />
              <span>Buy me a coffee</span>
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8" />

        {/* Google Search CTA */}
        <div className="mb-8 text-center">
          <p className="text-xs text-slate-500 mb-3">Try it yourself:</p>
          <a
            href="https://www.google.com/search?q=Vinit+Shahdeo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 pl-4 pr-3 py-3 bg-white rounded-full border border-slate-300 hover:shadow-lg transition-all duration-200 cursor-pointer group max-w-md"
          >
            {/* Google Logo */}
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
              <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
              <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
              <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
            </svg>
            
            {/* Search Text */}
            <span className="text-sm text-slate-700 font-normal flex-1">Vinit Shahdeo</span>
            
            {/* Right Icons */}
            <div className="flex items-center gap-3">
              {/* Microphone Icon */}
              <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
              </svg>
              
              {/* Search Icon */}
              <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </div>
          </a>
          <p className="text-xs text-slate-400 mt-2 italic">See the principles in action</p>
        </div>

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
