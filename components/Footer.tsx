'use client'

import { Linkedin, Github, Twitter, Globe, Heart } from 'lucide-react'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/vinitshahdeo',
    label: 'Connect on LinkedIn',
    color: 'hover:bg-blue-600'
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/vinitshahdeo',
    label: 'Follow on GitHub',
    color: 'hover:bg-slate-700'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/Vinit_Shahdeo',
    label: 'Follow on Twitter/X',
    color: 'hover:bg-sky-600'
  },
  {
    name: 'Website',
    icon: Globe,
    href: 'https://vinitshahdeo.com',
    label: 'Visit Website',
    color: 'hover:bg-indigo-600'
  }
]

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-800/50 bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Footer Hook */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-xl" />
            <p className="relative text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent tracking-tight leading-snug">
              "Write code for machines.<br className="sm:hidden" /> Build a footprint for people."
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-5 mb-16">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-4 bg-slate-800 rounded-2xl ${social.color} transition-all hover:scale-110 hover:shadow-xl duration-300`}
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-10" />

        {/* Copyright */}
        <div className="text-center space-y-4">
          <p className="text-slate-400 text-base font-light">
            © {new Date().getFullYear()} Vinit Shahdeo. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-2.5 text-slate-500 text-base font-light">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>for engineers who ship</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
