'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Github,
  Linkedin,
  FileText,
  Video,
  MessageCircle,
  Globe,
  Code,
  Users,
  Network,
  Star,
  TrendingUp,
  Heart,
  Package,
  Twitter,
} from 'lucide-react'

/**
 * Orbital nodes — placed on two concentric rings around the center.
 *
 * `angle` is in degrees (0 = top, clockwise).
 * `ring` determines which orbit circle the node sits on.
 */
/**
 * `pulseDelay` staggers the pulse ring so they fire one-by-one around the orbit.
 * Total cycle = 12s, each node gets a 1.5s window.
 */
const orbitNodes = [
  // Inner ring (ring 1) — primary platforms
  {
    icon: Github,
    label: 'GitHub',
    bg: 'bg-slate-800',
    ring: 1,
    angle: 0,
    delay: 0.1,
    pulseDelay: 0,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    bg: 'bg-blue-600',
    ring: 1,
    angle: 90,
    delay: 0.2,
    pulseDelay: 1.5,
  },
  {
    icon: FileText,
    label: 'Blog Posts',
    bg: 'bg-indigo-600',
    ring: 1,
    angle: 180,
    delay: 0.3,
    pulseDelay: 3.0,
  },
  {
    icon: Video,
    label: 'Talks',
    bg: 'bg-purple-600',
    ring: 1,
    angle: 270,
    delay: 0.4,
    pulseDelay: 4.5,
  },

  // Outer ring (ring 2) — secondary channels
  {
    icon: MessageCircle,
    label: 'Social',
    bg: 'bg-sky-500',
    ring: 2,
    angle: 45,
    delay: 0.5,
    pulseDelay: 6.0,
  },
  {
    icon: Globe,
    label: 'Portfolio',
    bg: 'bg-slate-700',
    ring: 2,
    angle: 135,
    delay: 0.6,
    pulseDelay: 7.5,
  },
  {
    icon: Code,
    label: 'Open Source',
    bg: 'bg-emerald-600',
    ring: 2,
    angle: 225,
    delay: 0.7,
    pulseDelay: 9.0,
  },
  {
    icon: Users,
    label: 'Community',
    bg: 'bg-violet-600',
    ring: 2,
    angle: 315,
    delay: 0.8,
    pulseDelay: 10.5,
  },
]

// Responsive orbit radii (px).
const RING_1_RADIUS = 105
const RING_2_RADIUS = 170
const RING_1_RADIUS_MD = 160
const RING_2_RADIUS_MD = 260

const activityFeed = [
  {
    id: 1,
    platform: 'GitHub',
    icon: Github,
    activity: 'committed to',
    target: 'digital-footprint repo',
    iconColor: 'text-slate-700',
    bgColor: 'bg-slate-100',
    timeAgo: '2m ago',
  },
  {
    id: 2,
    platform: 'Twitter',
    icon: Twitter,
    activity: 'tweeted about',
    target: 'building in public',
    iconColor: 'text-sky-600',
    bgColor: 'bg-sky-50',
    timeAgo: '15m ago',
  },
  {
    id: 3,
    platform: 'Substack',
    icon: FileText,
    activity: 'published',
    target: 'Engineering Career Growth',
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
    timeAgo: '1h ago',
  },
  {
    id: 4,
    platform: 'NPM',
    icon: Package,
    activity: 'published',
    target: '@vinitshahdeo/cli-toolkit',
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',
    timeAgo: '3h ago',
  },
  {
    id: 5,
    platform: 'Instagram',
    icon: Heart,
    activity: 'reel reached',
    target: '1M views',
    iconColor: 'text-pink-600',
    bgColor: 'bg-pink-50',
    timeAgo: '5h ago',
  },
  {
    id: 6,
    platform: 'LinkedIn',
    icon: Linkedin,
    activity: 'wrote article on',
    target: 'Software Architecture',
    iconColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    timeAgo: '8h ago',
  },
  {
    id: 7,
    platform: 'Conference',
    icon: Video,
    activity: 'spoke at',
    target: 'DevConf 2026',
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    timeAgo: '1d ago',
  },
]

/**
 * Convert polar coordinates (angle + radius) to Cartesian translate values.
 * Angle 0 = top (12 o'clock), increases clockwise.
 */
function polarToXY(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius }
}

export default function DigitalFootprintVisual() {
  return (
    <section className="py-16 md:py-28 px-6 bg-gradient-to-b from-slate-50/70 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <Network className="w-4 h-4" />
            Your Ecosystem
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Your Digital{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Footprint
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Every piece contributes to your online presence—working together to tell your story
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          {/* Orbital Map */}
          <div className="relative flex items-center justify-center min-h-[420px] md:min-h-[620px]">
            {/* Orbit rings — slowly rotating in opposite directions */}
            <motion.div
              className="absolute rounded-full border border-dashed border-blue-300/50 w-[210px] h-[210px] md:w-[320px] md:h-[320px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute rounded-full border border-dashed border-blue-200/60 w-[340px] h-[340px] md:w-[520px] md:h-[520px]"
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
            />

            {/* Center — Profile */}
            <motion.div
              className="relative z-10"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-[3px] bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/15">
                <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                  <Image
                    src="/images/vinit-shahdeo.jpg"
                    alt="Vinit Shahdeo"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 to-transparent pt-6 pb-1.5">
                    <span className="text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase block text-center">
                      You
                    </span>
                  </div>
                </div>
              </div>

              {/* Pulsing rings — two staggered ripples */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400/40"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-purple-400/30"
                animate={{ scale: [1, 1.7], opacity: [0.4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 1.25 }}
              />

              {/* Soft glow pulse behind the image */}
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/10 blur-md -z-10"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Orbital Nodes — mobile */}
            {orbitNodes.map((node, i) => {
              const r = node.ring === 1 ? RING_1_RADIUS : RING_2_RADIUS
              const { x, y } = polarToXY(node.angle, r)
              return (
                <div
                  key={`m-${i}`}
                  className="absolute z-10 md:hidden"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <motion.div
                    className="group relative flex flex-col items-center"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: node.delay,
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <div className="relative">
                      <motion.div
                        className={`relative z-10 w-11 h-11 rounded-full ${node.bg} flex items-center justify-center shadow-md ring-2 ring-white`}
                        whileHover={{ scale: 1.12, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <node.icon className="w-5 h-5 text-white" />
                      </motion.div>

                      {/* Pulse ring — fires once per cycle, staggered per node */}
                      <motion.div
                        className={`absolute inset-0 rounded-full ${node.bg} opacity-0`}
                        animate={{ scale: [1, 2.2], opacity: [0.35, 0] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          repeatDelay: 10.8,
                          delay: node.pulseDelay,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                    <span className="mt-1.5 text-[10px] font-medium text-slate-600 bg-white/90 px-2 py-0.5 rounded-full shadow-sm border border-slate-100 whitespace-nowrap">
                      {node.label}
                    </span>
                  </motion.div>
                </div>
              )
            })}

            {/* Orbital Nodes — desktop */}
            {orbitNodes.map((node, i) => {
              const r = node.ring === 1 ? RING_1_RADIUS_MD : RING_2_RADIUS_MD
              const { x, y } = polarToXY(node.angle, r)
              return (
                <div
                  key={`d-${i}`}
                  className="absolute z-10 hidden md:block"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <motion.div
                    className="group relative flex flex-col items-center cursor-pointer"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: node.delay,
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <div className="relative">
                      <motion.div
                        className={`relative z-10 w-14 h-14 rounded-full ${node.bg} flex items-center justify-center shadow-md ring-[3px] ring-white`}
                        whileHover={{ scale: 1.12, y: -3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <node.icon className="w-6 h-6 text-white" />
                      </motion.div>

                      {/* Pulse ring — fires once per cycle, staggered per node */}
                      <motion.div
                        className={`absolute inset-0 rounded-full ${node.bg} opacity-0`}
                        animate={{ scale: [1, 2.4], opacity: [0.35, 0] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          repeatDelay: 10.8,
                          delay: node.pulseDelay,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                    <span className="mt-2 text-xs font-medium text-slate-700 bg-white/90 px-2.5 py-1 rounded-full shadow-sm border border-slate-100 whitespace-nowrap group-hover:bg-white group-hover:shadow-md transition-all duration-200">
                      {node.label}
                    </span>
                  </motion.div>
                </div>
              )
            })}
          </div>

          {/* Activity Feed */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-slate-900">Live Activity</h3>
                    <p className="text-xs text-slate-500">Signals building your footprint</p>
                  </div>
                </div>
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Feed items */}
              <div className="divide-y divide-slate-50">
                {activityFeed.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="px-5 py-3.5 hover:bg-slate-50/70 transition-colors duration-150 group"
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`${item.bgColor} rounded-lg p-2 shrink-0 group-hover:scale-105 transition-transform duration-150`}
                      >
                        <item.icon className={`w-3.5 h-3.5 ${item.iconColor}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-800 leading-snug">
                          <span className="font-semibold">vinitshahdeo</span>{' '}
                          <span className="text-slate-500">{item.activity}</span>{' '}
                          <span className="font-medium text-slate-800">{item.target}</span>
                        </p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-[11px] text-slate-400">{item.platform}</span>
                          <span className="text-[11px] text-slate-300">&middot;</span>
                          <span className="text-[11px] text-slate-400">{item.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <Star className="w-3 h-3 text-amber-500" />
                  Each signal amplifies your presence
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Build your digital footprint strategically—each element amplifies the others
          </p>
        </motion.div>
      </div>

      {/* Background blurs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
    </section>
  )
}
