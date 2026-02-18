'use client'

import { Award } from 'lucide-react'

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
              <img
                src={badge.src}
                alt={`Featured on ${badge.name}`}
                width={badge.width}
                className={`h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                  badge.grayscale ? 'grayscale' : ''
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
