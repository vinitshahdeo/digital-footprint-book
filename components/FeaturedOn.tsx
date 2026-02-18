'use client'

import { Award, Globe } from 'lucide-react'
import { type ReactNode } from 'react'

// JavaScript icon
const JSIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 3h18v18H3V3zm4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.79 2.53-2.42v-5.78h-1.7v5.73c0 .8-.31 1.01-.81 1.01-.5 0-.71-.33-.94-.73l-1.18.73-.44-.09zm5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.49 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z" />
  </svg>
)

const badges = [
  {
    name: 'Peerlist',
    href: 'https://peerlist.io/vinitshahdeo/project/digital-footprint-for-software-engineers',
    src: '/images/digital-footprint-badge.svg',
    width: 200,
  },
  {
    name: 'BuiltByIndies',
    href: 'https://builtbyindies.com/products/digital-footprint-for-software-engineers',
    src: 'https://images.builtbyindies.com/badges/featured-on-builtbyindies.svg',
    width: 200,
  },
  {
    name: 'Uneed',
    href: 'https://www.uneed.best/tool/digital-footprint-for-software-engineers',
    src: 'https://www.uneed.best/EMBED3.png',
    width: 200,
    grayscale: true,
  },
  {
    name: 'LaunchIgniter',
    href: 'https://launchigniter.com/product/digital-footprint-for-software-engineers-book?ref=badge-digital-footprint-for-software-engineers-book',
    src: 'https://launchigniter.com/api/badge/digital-footprint-for-software-engineers-book?theme=dark',
    width: 180,
  },
  {
    name: 'Findly Tools',
    href: 'https://findly.tools/digital-footprint-for-software-engineers-book?utm_source=digital-footprint-for-software-engineers-book',
    src: 'https://findly.tools/badges/findly-tools-badge-light.svg',
    width: 140,
  },
  {
    name: 'ToolFame',
    href: 'https://toolfame.com/item/digital-footprint-book',
    src: 'https://toolfame.com/badge-dark.svg',
    width: 160,
  },
  {
    name: 'Wired Business',
    href: 'https://wired.business',
    src: 'https://wired.business/badge0-light.svg',
    width: 200,
  },
  {
    name: 'JavaScript in Plain English',
    href: 'https://medium.com/javascript-in-plain-english/digital-footprint-for-software-engineers-1ec956c07903',
    textOnly: true,
    icon: 'js' as const,
  },
  {
    name: 'Twelve Tools',
    href: 'https://twelve.tools',
    src: 'https://twelve.tools/badge0-light.svg',
    width: 200,
  },
  {
    name: 'ufind.best',
    href: 'https://ufind.best/products/digital-footprint-for-software-engineers?utm_source=ufind.best',
    src: 'https://ufind.best/badges/ufind-best-badge-light.svg',
    width: 150,
  },
  {
    name: 'Aura++',
    href: 'https://auraplusplus.com/projects/digital-footprint-for-software-engineers',
    src: 'https://auraplusplus.com/images/badges/featured-on-light.svg',
    width: 220,
  },
  {
    name: 'Technovans',
    href: 'https://technovans.com/digital-footprint-for-software-engineers-book-by-vinit-shahdeo/',
    textOnly: true,
  },
]

export default function FeaturedOn() {
  // Duplicate badges for seamless loop
  const allBadges = [...badges, ...badges]

  return (
    <section className="py-10 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <div className="flex items-center justify-center gap-2">
          <Award className="w-4 h-4 text-slate-400" />
          <p className="text-xs font-semibold text-slate-400 tracking-widest uppercase">
            Featured on
          </p>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50/90 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {allBadges.map((badge, index) => (
            <a
              key={`${badge.name}-${index}`}
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Featured on ${badge.name}`}
              className="flex-shrink-0 mx-6 md:mx-10 flex items-center"
            >
              {badge.textOnly ? (
                <span className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-md text-sm font-medium text-slate-500 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  {badge.icon === 'js' ? (
                    <JSIcon className="w-4 h-4" />
                  ) : (
                    <Globe className="w-4 h-4" />
                  )}
                  {badge.name}
                </span>
              ) : (
                <img
                  src={badge.src}
                  alt={`Featured on ${badge.name}`}
                  width={badge.width}
                  className={`h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                    badge.grayscale ? 'grayscale' : ''
                  }`}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
