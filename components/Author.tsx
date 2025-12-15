'use client'

import { ExternalLink, Award, Users, Code } from 'lucide-react'
import Image from 'next/image'

const achievements = [
  { icon: Code, label: 'Engineering Leader' },
  { icon: Award, label: 'GitHub Star' },
  { icon: Users, label: 'Open Source Mentor' }
]

export default function Author() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Clean Author Image */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-slate-200 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <Image
                src="/images/vinit-shahdeo.png"
                alt="Vinit Shahdeo"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Clean Author Bio */}
          <div className="order-1 md:order-2">
            <p className="text-sm font-semibold text-blue-600 mb-4 tracking-wider uppercase inline-block px-4 py-2 bg-blue-50 rounded-full">
              About the Author
            </p>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6 tracking-tight leading-[1.1]">
              Vinit{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Shahdeo
              </span>
            </h2>
            
            <div className="space-y-5 text-lg text-slate-600 leading-relaxed mb-8">
              <p>
                Engineering leader at Postman with experience building developer platforms, fintech products, and large-scale distributed systems.
              </p>
              
              <p>
                As a <span className="font-semibold text-black">GitHub Star</span>, he's helped thousands of engineers build credibility online—not through growth hacks, but through consistent, authentic work.
              </p>
              
              <p className="text-black font-semibold">
                This book shares the exact playbook he used to build his digital footprint.
              </p>
              
              <p className="text-sm text-slate-500 italic pt-2 border-t border-slate-200">
                Try it yourself: Google "Vinit Shahdeo" to see the principles in action
              </p>
            </div>

            <a
              href="https://vinitshahdeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 group"
            >
              Learn more
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
