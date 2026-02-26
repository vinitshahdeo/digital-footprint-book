'use client'

import { Bot } from 'lucide-react'
import AIChatSimulator from './AIChatSimulator'

export default function AskAI() {
  return (
    <section className="py-16 md:py-28 px-6 bg-gradient-to-b from-slate-50 via-slate-100/50 to-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Bot className="w-4 h-4" />
            The AI Test
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Ever{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              asked AI
            </span>{' '}
            about yourself?
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-3">
            AI agents are already researching candidates. What will they find about you?
          </p>
        </div>

        {/* Tabbed AI Simulator */}
        <AIChatSimulator />
      </div>
    </section>
  )
}
