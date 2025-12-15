'use client'

import { Linkedin, Github, Twitter, ArrowRight } from 'lucide-react'

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
    <footer className="relative py-20 px-6 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Digital Footprint
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              A practical playbook for engineers who want their work to be seen.
            </p>
            <a
              href="#purchase"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
            >
              Get the book
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#preview" className="text-slate-600 hover:text-black transition-colors">
                  What's inside
                </a>
              </li>
              <li>
                <a href="#author" className="text-slate-600 hover:text-black transition-colors">
                  About the author
                </a>
              </li>
              <li>
                <a href="#purchase" className="text-slate-600 hover:text-black transition-colors">
                  Buy now
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4 uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href="https://vinitshahdeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-black transition-colors text-sm"
            >
              vinitshahdeo.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>
            © {new Date().getFullYear()} Vinit Shahdeo. All rights reserved.
          </p>
          <p className="text-slate-500">
            Made for engineers who ship
          </p>
        </div>
      </div>
    </footer>
  )
}
