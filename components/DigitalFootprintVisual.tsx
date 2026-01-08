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

const footprintElements = [
  {
    icon: Github,
    label: 'GitHub',
    color: 'from-slate-600 to-slate-700',
    position: { top: '5%', left: '25%' },
    delay: 0.1,
    id: 'github',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    color: 'from-blue-600 to-blue-700',
    position: { top: '5%', right: '25%' },
    delay: 0.2,
    id: 'linkedin',
  },
  {
    icon: FileText,
    label: 'Blog Posts',
    color: 'from-blue-500 to-purple-600',
    position: { top: '25%', left: '5%' },
    delay: 0.3,
    id: 'blog',
  },
  {
    icon: Video,
    label: 'Talks',
    color: 'from-purple-500 to-purple-700',
    position: { top: '25%', right: '5%' },
    delay: 0.4,
    id: 'talks',
  },
  {
    icon: MessageCircle,
    label: 'Social Media',
    color: 'from-blue-400 to-blue-600',
    position: { bottom: '5%', left: '25%' },
    delay: 0.5,
    id: 'social',
  },
  {
    icon: Globe,
    label: 'Portfolio',
    color: 'from-slate-700 to-slate-800',
    position: { bottom: '5%', right: '25%' },
    delay: 0.6,
    id: 'portfolio',
  },
  {
    icon: Code,
    label: 'Open Source',
    color: 'from-slate-500 to-slate-700',
    position: { bottom: '25%', left: '5%' },
    delay: 0.7,
    id: 'opensource',
  },
  {
    icon: Users,
    label: 'Community',
    color: 'from-purple-600 to-purple-700',
    position: { bottom: '25%', right: '5%' },
    delay: 0.8,
    id: 'community',
  },
]

// Activity feed showcasing signals that build digital footprint
const activityFeed = [
  {
    id: 1,
    platform: 'GitHub',
    icon: Github,
    activity: 'committed to',
    target: 'digital-footprint repo',
    color: 'from-slate-600 to-slate-800',
    iconColor: 'text-slate-700',
    bgColor: 'bg-slate-50',
    timeAgo: '2m ago',
    delay: 0.2,
  },
  {
    id: 2,
    platform: 'Twitter',
    icon: Twitter,
    activity: 'tweeted about',
    target: 'building in public',
    color: 'from-blue-400 to-blue-600',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    timeAgo: '15m ago',
    delay: 0.4,
  },
  {
    id: 3,
    platform: 'Substack',
    icon: FileText,
    activity: 'published',
    target: 'Engineering Career Growth',
    color: 'from-orange-400 to-orange-600',
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
    timeAgo: '1h ago',
    delay: 0.6,
  },
  {
    id: 4,
    platform: 'NPM',
    icon: Package,
    activity: 'published',
    target: '@vinitshahdeo/cli-toolkit',
    color: 'from-red-400 to-red-600',
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',
    timeAgo: '3h ago',
    delay: 0.8,
  },
  {
    id: 5,
    platform: 'Instagram',
    icon: Heart,
    activity: 'reel reached',
    target: '1M views',
    color: 'from-pink-400 to-pink-600',
    iconColor: 'text-pink-600',
    bgColor: 'bg-pink-50',
    timeAgo: '5h ago',
    delay: 1.0,
  },
  {
    id: 6,
    platform: 'LinkedIn',
    icon: Linkedin,
    activity: 'wrote article on',
    target: 'Software Architecture',
    color: 'from-blue-500 to-blue-700',
    iconColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    timeAgo: '8h ago',
    delay: 1.2,
  },
  {
    id: 7,
    platform: 'Conference',
    icon: Video,
    activity: 'spoke at',
    target: 'DevConf 2026',
    color: 'from-purple-400 to-purple-600',
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    timeAgo: '1d ago',
    delay: 1.4,
  },
]

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

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
          {/* Visual Doodle Map */}
          <div className="relative h-[600px] md:h-[700px]">
            {/* Center Circle - "You" */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              <div className="relative">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl relative z-10 overflow-hidden p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white relative">
                    <Image
                      src="/images/vinit-shahdeo.jpg"
                      alt="Vinit Shahdeo"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      priority
                    />
                    {/* Subtle overlay label */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent pt-8 pb-2">
                      <span className="text-white text-sm md:text-base font-semibold tracking-wide block text-center">
                        YOU
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ripple effect - multiple rings */}
                {[0, 1].map((delay) => (
                  <motion.div
                    key={delay}
                    className="absolute inset-0 rounded-full border-2 border-blue-400"
                    animate={{
                      scale: [1, 1.4],
                      opacity: [0.4, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: delay * 2,
                      ease: 'easeOut',
                    }}
                  />
                ))}

                {/* Glowing pulse effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-500/15 blur-lg"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.15, 0.25, 0.15],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>

            {/* Connecting Lines (SVG) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="#cbd5e1" />
                </marker>
                {/* Gradient for lines */}
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {footprintElements.map((element, index) => {
                const startX = '50%'
                const startY = '50%'
                const endX = element.position.left || element.position.right
                const endY = element.position.top || element.position.bottom

                return (
                  <g key={index}>
                    {/* Main connection line */}
                    <motion.path
                      d={`M ${startX} ${startY} Q ${startX} ${endY}, ${endX} ${endY}`}
                      stroke="url(#lineGradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8,8"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.6 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: element.delay }}
                    />

                    {/* Animated traveling dot */}
                    <motion.circle
                      r="4"
                      fill="#3b82f6"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 1, 1, 0],
                        offsetDistance: ['0%', '100%'],
                      }}
                      transition={{
                        duration: 3,
                        delay: element.delay + 1,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: 'easeInOut',
                      }}
                    >
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        begin={`${element.delay + 1}s`}
                      >
                        <mpath href={`#path-${index}`} />
                      </animateMotion>
                    </motion.circle>

                    {/* Hidden path for motion */}
                    <path
                      id={`path-${index}`}
                      d={`M ${startX} ${startY} Q ${startX} ${endY}, ${endX} ${endY}`}
                      fill="none"
                      stroke="none"
                    />
                  </g>
                )
              })}
            </svg>

            {/* Footprint Elements */}
            {footprintElements.map((element, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={element.position}
                initial={{ scale: 0, opacity: 0, rotate: -180 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: element.delay,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                <div className="relative group cursor-pointer">
                  {/* Pulsing outer ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${element.color} opacity-0 group-hover:opacity-10 blur-lg`}
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: element.delay,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Doodle circle background */}
                  <div
                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${element.color} flex items-center justify-center shadow-md border-3 border-white group-hover:shadow-lg transition-all duration-200`}
                  >
                    <element.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />

                    {/* Small pulsing dot indicator */}
                    <motion.div
                      className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white"
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: element.delay,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  {/* Label */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs md:text-sm font-medium text-slate-700 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200">
                      {element.label}
                    </span>
                  </div>

                  {/* Doodle underline effect */}
                  <motion.svg
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100"
                    width="80"
                    height="4"
                    initial={{ pathLength: 0 }}
                    whileHover={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.path
                      d="M 5 2 Q 40 1, 75 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-blue-500"
                    />
                  </motion.svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Activity Feed */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
                <div className="flex items-center gap-2 text-white">
                  <TrendingUp className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Live Activity</h3>
                </div>
                <p className="text-blue-100 text-sm mt-1">Signals building your footprint</p>
              </div>

              <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
                {activityFeed.map((item) => (
                  <motion.div
                    key={item.id}
                    className="p-4 hover:bg-slate-50 transition-colors duration-200 cursor-pointer group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.delay }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`${item.bgColor} rounded-lg p-2 shrink-0 group-hover:scale-110 transition-transform duration-200`}
                      >
                        <item.icon className={`w-4 h-4 ${item.iconColor}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-900">
                          <span className="font-semibold">vinitshahdeo</span>{' '}
                          <span className="text-slate-600">{item.activity}</span>{' '}
                          <span className="font-medium text-slate-900">{item.target}</span>
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-500">{item.platform}</span>
                          <span className="text-xs text-slate-400">•</span>
                          <span className="text-xs text-slate-500">{item.timeAgo}</span>
                        </div>
                      </div>

                      {/* Pulse indicator */}
                      <motion.div
                        className="w-2 h-2 rounded-full bg-green-400 shrink-0 mt-1"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: item.delay,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                <p className="text-xs text-slate-600 text-center">
                  <Star className="w-3 h-3 inline mr-1 text-yellow-500" />
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
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Build your digital footprint strategically—each element amplifies the others
          </p>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-30" />
    </section>
  )
}
