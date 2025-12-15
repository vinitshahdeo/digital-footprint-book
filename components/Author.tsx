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
    <section className="py-40 px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Author Image */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative group">
              {/* Animated gradient ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 blur-lg animate-pulse" />
              
              <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/vinitshahdeo.png"
                  alt="Vinit Shahdeo"
                  width={450}
                  height={450}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="order-1 md:order-2">
            <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full mb-8">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
                MEET THE AUTHOR
              </span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-serif font-bold text-slate-900 mb-10 tracking-tighter leading-[1.05]">
              Vinit Shahdeo
            </h2>
            
            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 px-5 py-2.5 bg-white border border-slate-200/80 rounded-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <achievement.icon className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-700">{achievement.label}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-6 text-xl text-slate-700 leading-relaxed mb-10 font-light">
              <p>
                A software engineer and engineering leader who has worked across 
                <span className="font-medium text-slate-900"> developer platforms, fintech, and large-scale distributed systems</span>.
              </p>
              
              <p>
                As a <span className="font-medium text-slate-900">GitHub Star</span> and open-source mentor, 
                he has helped <span className="font-medium text-slate-900">thousands of engineers</span> build 
                visibility through code, content, and community.
              </p>
              
              <p className="text-slate-600 italic border-l-4 border-blue-500 pl-6 py-2">
                This book distills real-world learnings into a practical playbook for engineers 
                who want their work to be seen.
              </p>
            </div>

            <a
              href="https://vinitshahdeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl group"
            >
              Learn more about Vinit
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
