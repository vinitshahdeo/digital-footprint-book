'use client'

import {
  ArrowRight,
  BookOpen,
  Eye,
  Sparkles,
} from 'lucide-react'
import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const PLATFORMS = [
  { text: 'GitHub', color: 'from-gray-600 to-gray-800' },
  { text: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
  { text: 'Twitter', color: 'from-sky-400 to-sky-600' },
  { text: 'Stack Overflow', color: 'from-orange-500 to-orange-700' },
  { text: 'Dev.to', color: 'from-indigo-500 to-indigo-700' },
  { text: 'the internet', color: 'from-purple-500 to-pink-500' },
]

const AnimatedSignature = () => (
  <motion.div
    className="relative inline-block opacity-75"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 0.7, scale: 1 }}
    transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
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

const TypewriterText = ({ text, color }: { text: string; color: string }) => (
  <motion.span
    className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {text}
  </motion.span>
)

export default function HeroV3() {
  const [onlineCount, setOnlineCount] = useState(5.35)
  const [currentPlatform, setCurrentPlatform] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => {
        const increment = Math.random() * 0.0001
        const newCount = prev + increment
        return parseFloat(newCount.toFixed(4))
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const currentWord = PLATFORMS[currentPlatform].text

  const handleTyping = useCallback(() => {
    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1))
      } else {
        setTimeout(() => setIsDeleting(true), 2000)
        return
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(currentWord.slice(0, displayText.length - 1))
      } else {
        setIsDeleting(false)
        setCurrentPlatform((prev) => (prev + 1) % PLATFORMS.length)
        return
      }
    }
  }, [displayText, isDeleting, currentWord])

  useEffect(() => {
    const speed = isDeleting ? 50 : 100
    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [handleTyping, isDeleting])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          className="inline-block mb-10"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-full inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Now Available – Get Your Copy!
          </span>
        </motion.div>

        {/* Typewriter Section */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-xl md:text-2xl text-slate-500 font-medium mb-4">
            Build your presence on
          </p>
          <div className="h-16 md:h-20 flex items-center justify-center">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <AnimatePresence mode="wait">
                <TypewriterText
                  key={currentPlatform}
                  text={displayText}
                  color={PLATFORMS[currentPlatform].color}
                />
              </AnimatePresence>
              <motion.span
                className="inline-block w-[3px] h-10 md:h-12 bg-slate-400 ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              />
            </span>
          </div>
        </motion.div>

        {/* Live Counter */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-slate-500 font-mono">
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

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-[1.08] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-slate-900">Your code speaks.</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Does the internet know about you?
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-slate-600 mb-14 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          A practical playbook to build a strong, authentic digital presence—without feeling like a
          self-promoter.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
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
              See what&apos;s inside
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-250" />
            </span>
          </a>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="mt-20 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <blockquote className="relative">
            <p className="text-base md:text-lg text-slate-500 italic mb-4 text-center">
              &quot;Write code for machines. Build a footprint for people.&quot;
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
