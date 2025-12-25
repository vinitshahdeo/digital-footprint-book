'use client'

import { ArrowRight, BookOpen, Eye, Github, Twitter, Clapperboard, Instagram, Youtube, Rocket, Globe, Mail, Twitch, Rss, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const FloatingIcon = ({ Icon, delay, position }: { Icon: any, delay: number, position: { top: string, left: string } }) => (
  <motion.div
    className="absolute text-slate-200"
    style={{ ...position }}
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.20, 0.35, 0.20],
      y: [0, -10, 0],
    }}
    transition={{
      duration: 12,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Icon className="w-8 h-8 md:w-12 md:h-12" />
  </motion.div>
)

const AnimatedSignature = () => {
  return (
    <motion.div 
      className="relative inline-block opacity-75"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 0.70, scale: 1 }}
      transition={{ 
        duration: 1, 
        delay: 1,
        ease: "easeOut"
      }}
    >
      <Image
        src="/images/signature.png"
        alt="Vinit Shahdeo"
        width={160}
        height={48}
        className="w-32 h-auto md:w-36"
        style={{ filter: 'contrast(1.1)' }}
      />
    </motion.div>
  )
}

export default function Hero() {
  const [onlineCount, setOnlineCount] = useState(5.35)

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const increment = Math.random() * 0.0001
        const newCount = prev + increment
        return parseFloat(newCount.toFixed(4))
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-white">
      {/* Clean Apple-style Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Icons */}
        <FloatingIcon Icon={Github} delay={0} position={{ top: '8%', left: '10%' }} />
        <FloatingIcon Icon={Youtube} delay={1} position={{ top: '10%', left: '85%' }} />
        
        {/* Middle Left */}
        <FloatingIcon Icon={Twitter} delay={2} position={{ top: '35%', left: '5%' }} />
        <FloatingIcon Icon={Twitch} delay={1.5} position={{ top: '60%', left: '7%' }} />
        
        {/* Middle Right */}
        <FloatingIcon Icon={Instagram} delay={2.5} position={{ top: '40%', left: '90%' }} />
        <FloatingIcon Icon={Rocket} delay={0.5} position={{ top: '55%', left: '88%' }} />
        
        {/* Bottom Icons */}
        <FloatingIcon Icon={Rss} delay={3.5} position={{ top: '85%', left: '12%' }} />
        <FloatingIcon Icon={Mail} delay={2.8} position={{ top: '88%', left: '82%' }} />
        
        {/* Additional Balance */}
        <FloatingIcon Icon={Clapperboard} delay={1.8} position={{ top: '25%', left: '92%' }} />
        <FloatingIcon Icon={Globe} delay={3} position={{ top: '75%', left: '6%' }} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center animate-fade-in">
        {/* Book Badge */}
        <motion.div 
          className="inline-block mb-10"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-full inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles className="w-4 h-4" />
            Now Available – Get Your Copy!
          </motion.span>
        </motion.div>

        {/* Live Counter */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm md:text-base text-slate-500 font-mono">
            <span className="inline-flex items-center gap-2">
              <motion.span 
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              {onlineCount.toFixed(2)}B internet users worldwide
            </span>
          </p>
        </motion.div>

        {/* Large Apple-style Headline with Hook */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-[1.08] tracking-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
          <span className="text-slate-900">
            Your code speaks.
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Does the internet know about you?
          </span>
        </h1>

        {/* Clean Subheading */}
        <p className="text-lg md:text-xl text-slate-600 mb-14 max-w-2xl mx-auto leading-relaxed font-normal animate-slide-up" style={{animationDelay: '0.2s'}}>
          A practical playbook to build a strong, authentic digital presence—without feeling like a self-promoter.
        </p>

        {/* Apple-style CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.3s'}}>
          <a
            href="#purchase"
            className="group px-7 py-3.5 bg-slate-900 text-white rounded-lg font-medium text-base hover:bg-slate-800 transition-all duration-250 w-full sm:w-auto"
          >
            <span className="flex items-center gap-2 justify-center">
              <BookOpen className="w-4 h-4" />
              Get the book
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-250" />
            </span>
          </a>
          <a
            href="#whats-inside"
            className="group px-7 py-3.5 text-slate-700 font-medium text-base hover:text-slate-900 transition-all duration-250 w-full sm:w-auto"
          >
            <span className="flex items-center gap-2 justify-center">
              <Eye className="w-4 h-4" />
              See what's inside
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-250" />
            </span>
          </a>
        </div>

        {/* Quote */}
        <motion.div 
          className="mt-20 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <blockquote className="relative">
            <p className="text-base md:text-lg text-slate-500 italic mb-4 text-center">
              "Write code for machines. Build a footprint for people."
            </p>
            <footer className="flex justify-center items-center gap-2">
              <AnimatedSignature />
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
