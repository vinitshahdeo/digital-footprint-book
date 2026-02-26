'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe } from 'lucide-react'

const QUESTION = 'Who is Vinit Shahdeo?'
const TYPING_SPEED = 90
const THINKING_DURATION = 1200
const STREAMING_SPEED = 18

type Phase = 'idle' | 'typing-question' | 'thinking' | 'streaming-answer' | 'done'

const TABS = ['chatgpt', 'gemini', 'claude', 'perplexity'] as const
type Tab = (typeof TABS)[number]

const RESPONSES: Record<Tab, string> = {
  chatgpt: `Vinit Shahdeo is a software engineer and open-source advocate based in India, currently working as an Engineering Lead. He is recognized as a GitHub Star — a distinction awarded by GitHub to developers who have made significant contributions to the open-source community.\n\nWith over 10,000 stars on his GitHub projects, Vinit is known for building developer tools and mentoring at Google Summer of Code (GSoC). He is also the author of "Digital Footprint," a book that helps software engineers build an authentic and discoverable online presence.`,
  gemini: `Vinit Shahdeo is an Engineering Lead and a recognized open-source contributor from India. He has been awarded the GitHub Star title for his impact on the developer community, with his projects earning over 10,000 stars on GitHub.\n\nHe has mentored for Google Summer of Code and previously worked at companies like Postman. Vinit is also the author of "Digital Footprint For Software Engineers" a guide for software engineers on building a strong and discoverable online presence.`,
  claude: `Vinit Shahdeo is a software engineer based in India who currently serves as an Engineering Lead. He's well known in the open-source community, having earned the GitHub Star recognition for his contributions — his projects have accumulated over 10,000 stars.\n\nBeyond code, Vinit has mentored for Google Summer of Code and authored "Digital Footprint For Software Engineers", a book aimed at helping software engineers craft a meaningful and discoverable presence online.`,
  perplexity: `Vinit Shahdeo is an Engineering Lead and prominent open-source contributor based in India. He holds the GitHub Star title, recognizing his significant impact on the developer ecosystem, with 10,000+ stars across his projects.\n\nVinit has served as a Google Summer of Code mentor and has worked at companies including Postman. He authored "Digital Footprint For Software Engineers" a practical guide for engineers looking to build a strong online presence.`,
}

const sources = [
  { label: 'github.com', type: 'github' },
  { label: 'linkedin.com', type: 'linkedin' },
  { label: 'vinitshahdeo.com', type: 'globe' },
]

const SourceIcon = ({ type }: { type: string }) => {
  const cls = 'w-3 h-3'
  switch (type) {
    case 'github':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="#8e8ea0">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="#8e8ea0">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433c-1.144 0-2.069-.926-2.069-2.069 0-1.144.925-2.069 2.069-2.069 1.144 0 2.069.925 2.069 2.069 0 1.143-.925 2.069-2.069 2.069zM6.814 20.452H3.861V9h2.953v11.452z" />
        </svg>
      )
    default:
      return <Globe className={`${cls} text-[#8e8ea0]`} />
  }
}

// --- Brand Icons ---

const ChatGPTIcon = ({ size = 16, fill = 'white' }: { size?: number; fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24">
    <path fill={fill} d="M9.67 9.304V7.421c0-.158.06-.277.2-.357l3.785-2.18c.516-.297 1.13-.436 1.764-.436 2.379 0 3.885 1.844 3.885 3.806 0 .138 0 .297-.02.456l-3.924-2.3a.66.66 0 0 0-.714 0zm8.841 7.334v-4.5a.66.66 0 0 0-.357-.614L13.18 8.63l1.626-.931a.36.36 0 0 1 .396 0l3.786 2.18c1.09.634 1.824 1.982 1.824 3.29 0 1.507-.892 2.894-2.3 3.47m-10.01-3.964-1.625-.951c-.139-.08-.198-.199-.198-.357v-4.36c0-2.122 1.625-3.727 3.826-3.727a3.7 3.7 0 0 1 2.26.773l-3.906 2.26a.66.66 0 0 0-.356.614zM12 14.696l-2.33-1.308v-2.775L12 9.304l2.329 1.309v2.775zm1.496 6.026a3.7 3.7 0 0 1-2.26-.774l3.906-2.26a.66.66 0 0 0 .356-.614v-5.748l1.646.951c.138.08.198.199.198.357v4.36c0 2.122-1.645 3.728-3.845 3.728M8.8 16.302 5.013 14.12c-1.09-.634-1.824-1.982-1.824-3.29 0-1.527.912-2.894 2.32-3.47v4.52c0 .278.118.476.356.615l4.955 2.874-1.625.931a.36.36 0 0 1-.396 0m-.218 3.25c-2.24 0-3.885-1.685-3.885-3.766 0-.159.02-.317.04-.476l3.904 2.26a.66.66 0 0 0 .714 0l4.975-2.874v1.883c0 .159-.06.278-.198.357l-3.786 2.18c-.516.297-1.13.436-1.764.436m4.916 2.359c2.398 0 4.4-1.705 4.856-3.965C20.573 17.372 22 15.29 22 13.17a5.01 5.01 0 0 0-1.665-3.706c.1-.416.159-.833.159-1.249 0-2.834-2.3-4.955-4.956-4.955-.535 0-1.05.079-1.566.257a4.97 4.97 0 0 0-3.468-1.427 4.956 4.956 0 0 0-4.857 3.965C3.427 6.628 2 8.71 2 10.83c0 1.387.595 2.735 1.665 3.706a5.4 5.4 0 0 0-.159 1.249c0 2.834 2.3 4.955 4.956 4.955.535 0 1.05-.079 1.566-.257a4.97 4.97 0 0 0 3.468 1.427" />
  </svg>
)

const GeminiIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24">
    <g clipPath="url(#gemini_sim_clip)">
      <path fill="url(#gemini_sim_grad)" d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" />
    </g>
    <defs>
      <linearGradient id="gemini_sim_grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1A73E8" />
        <stop offset="1" stopColor="#886FBF" />
      </linearGradient>
      <clipPath id="gemini_sim_clip"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath>
    </defs>
  </svg>
)

const ClaudeIcon = ({ size = 16, fill = '#d97706' }: { size?: number; fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24">
    <g clipPath="url(#claude_sim_clip)">
      <path fill={fill} d="m4.715 15.956 4.717-2.648.079-.23-.079-.128h-.23l-.79-.048-2.696-.073-2.337-.097-2.265-.122-.57-.121-.535-.705.055-.352.48-.322.686.061 1.517.104 2.277.157 1.652.098 2.446.255h.389l.055-.158-.134-.098-.103-.097-2.356-1.596-2.55-1.688-1.335-.972-.723-.492-.364-.46-.158-1.009.656-.722.88.06.225.061.892.686 1.906 1.476 2.49 1.833.364.304.146-.104.018-.072-.164-.274-1.354-2.446-1.445-2.49-.643-1.032-.17-.619a3 3 0 0 1-.104-.728L6.287.133 6.7 0l.996.134.419.364.619 1.415L9.736 4.14l1.554 3.03.455.898.243.832.091.255h.158V9.01l.127-1.706.237-2.095.231-2.695.079-.76.376-.91.747-.492.583.28.48.685-.067.444-.285 1.851-.56 2.903-.363 1.942h.212l.243-.243.984-1.305 1.65-2.064.73-.82.85-.904.546-.431h1.032l.759 1.129-.34 1.166-1.062 1.347-.88 1.142-1.264 1.7-.789 1.36.073.11.188-.02 2.854-.606 1.542-.28 1.84-.315.831.388.091.395-.328.807-1.967.486-2.307.461-3.436.814-.043.03.049.061 1.548.146.662.036h1.62l3.018.225.79.522.473.638-.079.485-1.214.62-1.64-.389-3.824-.91-1.312-.329h-.182v.11l1.093 1.068 2.004 1.81 2.507 2.33.127.578-.321.455-.34-.049-2.204-1.657-.85-.747-1.925-1.62h-.127v.17l.443.649 2.344 3.521.12 1.08-.17.353-.606.212-.668-.12-1.372-1.925-1.415-2.168-1.141-1.943-.14.08-.674 7.254-.316.37-.728.28-.607-.461-.322-.747.322-1.476.388-1.924.316-1.53.285-1.9.17-.632-.012-.042-.14.018-1.432 1.967-2.18 2.945-1.724 1.845-.413.164-.716-.37.066-.662.401-.589L8.17 17.57l1.44-1.882.928-1.086-.006-.158h-.055L4.138 18.56l-1.13.146-.485-.456.06-.746.231-.243 1.907-1.312z" />
    </g>
    <defs><clipPath id="claude_sim_clip"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs>
  </svg>
)

const PerplexityIcon = ({ size = 16, fill = '#20b8cd' }: { size?: number; fill?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24">
    <g clipPath="url(#pplx_sim_clip)">
      <path fill={fill} d="M22.398 7.09h-2.31V.068l-7.51 6.354V.158h-1.155v6.196L4.49 0v7.09H1.603v10.397H4.49V24l6.932-6.36v6.201h1.155v-6.047l6.932 6.181v-6.488h2.888zm-3.466-4.531v4.53h-5.355zm-13.286.067 4.87 4.464h-4.87zM2.758 16.332V8.245h7.847L4.491 14.36v1.972zm2.888 5.04v-6.534l5.776-5.776v7.011zm12.709.025-5.777-5.15V9.061l5.777 5.776zm2.888-5.065H19.51V14.36l-6.115-6.115h7.848z" />
    </g>
    <defs><clipPath id="pplx_sim_clip"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs>
  </svg>
)

// --- Tab configuration ---

interface TabConfig {
  label: string
  model: string
  url: string
  placeholder: string
  disclaimer: string
  dark: boolean
  accentBg: string
  icon: React.ReactNode
  tabIcon: (active: boolean, dark: boolean) => React.ReactNode
  dotColors: string[]
}

const TAB_CONFIG: Record<Tab, TabConfig> = {
  chatgpt: {
    label: 'ChatGPT',
    model: '4o',
    url: 'chatgpt.com',
    placeholder: 'Message ChatGPT',
    disclaimer: 'ChatGPT can make mistakes. Check important info.',
    dark: true,
    accentBg: 'bg-[#10a37f]',
    icon: <ChatGPTIcon size={14} />,
    tabIcon: (active, dark) => <ChatGPTIcon size={12} fill={active ? (dark ? '#e8eaed' : '#334155') : '#9aa0a6'} />,
    dotColors: ['#9b9b9b', '#9b9b9b', '#9b9b9b'],
  },
  gemini: {
    label: 'Gemini',
    model: '2.0 Flash',
    url: 'gemini.google.com',
    placeholder: 'Ask Gemini',
    disclaimer: 'Gemini can make mistakes. Check important info.',
    dark: true,
    accentBg: 'bg-[#303134]',
    icon: <GeminiIcon size={14} />,
    tabIcon: () => <GeminiIcon size={12} />,
    dotColors: ['#1A73E8', '#886FBF', '#D93025'],
  },
  claude: {
    label: 'Claude',
    model: 'Sonnet 4',
    url: 'claude.ai',
    placeholder: 'Message Claude',
    disclaimer: 'Claude can make mistakes. Please double-check responses.',
    dark: true,
    accentBg: 'bg-[#d97706]',
    icon: <ClaudeIcon size={14} fill="white" />,
    tabIcon: (active, dark) => <ClaudeIcon size={12} fill={active ? (dark ? '#e8eaed' : '#334155') : '#9aa0a6'} />,
    dotColors: ['#d97706', '#d97706', '#d97706'],
  },
  perplexity: {
    label: 'Perplexity',
    model: 'Pro',
    url: 'perplexity.ai',
    placeholder: 'Ask anything...',
    disclaimer: 'Perplexity can make mistakes. Verify important info.',
    dark: true,
    accentBg: 'bg-[#303134]',
    icon: <PerplexityIcon size={14} fill="#20b8cd" />,
    tabIcon: (active, dark) => <PerplexityIcon size={12} fill={active ? (dark ? '#e8eaed' : '#334155') : '#9aa0a6'} />,
    dotColors: ['#20b8cd', '#20b8cd', '#20b8cd'],
  },
}

// --- Shared sub-components ---

const TypewriterCursor = ({ dark = true }: { dark?: boolean }) => (
  <motion.span
    className={`inline-block w-[2px] h-4 ml-[1px] align-middle ${dark ? 'bg-[#ececf1]' : 'bg-slate-400'}`}
    animate={{ opacity: [1, 0] }}
    transition={{ duration: 0.53, repeat: Infinity, repeatType: 'reverse' }}
  />
)

const ThinkingDots = ({ colors }: { colors: string[] }) => (
  <motion.div
    className="flex items-center gap-1.5 px-1 py-2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
  >
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: colors[i] }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}
  </motion.div>
)

// --- Animation hook ---

function useAIChatAnimation(response: string, onDone?: () => void) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [typedQuestion, setTypedQuestion] = useState('')
  const [streamedAnswer, setStreamedAnswer] = useState('')
  const [showSources, setShowSources] = useState(false)
  const messagesRef = useRef<HTMLDivElement>(null)

  const start = useCallback(() => {
    setPhase('idle')
    setTypedQuestion('')
    setStreamedAnswer('')
    setShowSources(false)
    setTimeout(() => setPhase('typing-question'), 50)
  }, [])

  useEffect(() => {
    if (phase !== 'typing-question') return
    let idx = 0
    const interval = setInterval(() => {
      if (idx < QUESTION.length) {
        setTypedQuestion(QUESTION.slice(0, idx + 1))
        idx++
      } else {
        clearInterval(interval)
        setTimeout(() => setPhase('thinking'), 400)
      }
    }, TYPING_SPEED)
    return () => clearInterval(interval)
  }, [phase])

  useEffect(() => {
    if (phase !== 'thinking') return
    const t = setTimeout(() => setPhase('streaming-answer'), THINKING_DURATION)
    return () => clearTimeout(t)
  }, [phase])

  useEffect(() => {
    if (phase !== 'streaming-answer') return
    let idx = 0
    const interval = setInterval(() => {
      if (idx < response.length) {
        setStreamedAnswer(response.slice(0, idx + 1))
        idx++
      } else {
        clearInterval(interval)
        setPhase('done')
        setTimeout(() => setShowSources(true), 500)
        setTimeout(() => onDone?.(), 1500)
      }
    }, STREAMING_SPEED)
    return () => clearInterval(interval)
  }, [phase, response, onDone])

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [streamedAnswer, phase])

  return { phase, typedQuestion, streamedAnswer, showSources, messagesRef, start }
}

// --- Main component ---

export default function AIChatSimulator() {
  const [activeTab, setActiveTab] = useState<Tab>('chatgpt')
  const [hasAnimated, setHasAnimated] = useState(false)
  const [played, setPlayed] = useState<Set<Tab>>(new Set())
  const containerRef = useRef<HTMLDivElement>(null)

  const advanceTo = useCallback((next: Tab) => {
    setActiveTab(next)
  }, [])

  const chatgpt = useAIChatAnimation(RESPONSES.chatgpt, useCallback(() => advanceTo('gemini'), [advanceTo]))
  const gemini = useAIChatAnimation(RESPONSES.gemini, useCallback(() => advanceTo('claude'), [advanceTo]))
  const claude = useAIChatAnimation(RESPONSES.claude, useCallback(() => advanceTo('perplexity'), [advanceTo]))
  const perplexity = useAIChatAnimation(RESPONSES.perplexity)

  const animations: Record<Tab, ReturnType<typeof useAIChatAnimation>> = {
    chatgpt, gemini, claude, perplexity,
  }

  // Start chatgpt on scroll into view
  useEffect(() => {
    if (hasAnimated) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          chatgpt.start()
          setPlayed(new Set<Tab>(['chatgpt']))
        }
      },
      { threshold: 0.2 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [hasAnimated, chatgpt.start])

  // Start animation when a new tab becomes active
  useEffect(() => {
    if (!played.has(activeTab)) {
      setPlayed((prev) => new Set(prev).add(activeTab))
      animations[activeTab].start()
    }
  }, [activeTab]) // eslint-disable-line react-hooks/exhaustive-deps

  const active = animations[activeTab]
  const cfg = TAB_CONFIG[activeTab]
  const isDark = cfg.dark

  return (
    <motion.div
      ref={containerRef}
      className="w-full"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className={`rounded-xl border shadow-xl overflow-hidden transition-colors duration-300 ${isDark ? 'border-slate-700/40 bg-[#212121] shadow-black/20' : 'border-slate-200 bg-white shadow-slate-200/50'}`}>
        {/* Browser Tab Bar */}
        <div className={`border-b px-4 py-2 flex items-center gap-3 transition-colors duration-300 ${isDark ? 'bg-[#292a2d] border-[#3c4043]' : 'bg-[#dee1e6] border-[#c4c7cc]'}`}>
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ed6a5e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f5bf4f]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#62c554]" />
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-0.5 ml-1 overflow-x-auto">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg text-xs font-medium transition-colors whitespace-nowrap ${
                  activeTab === t
                    ? isDark
                      ? 'bg-[#212121] text-[#e8eaed]'
                      : 'bg-white text-slate-800'
                    : isDark
                      ? 'text-[#9aa0a6] hover:text-[#c4c7cc] hover:bg-[#35363a]'
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="w-3.5 h-3.5 flex items-center justify-center">
                  {TAB_CONFIG[t].tabIcon(activeTab === t, isDark)}
                </span>
                <span className="hidden sm:inline">{TAB_CONFIG[t].label}</span>
              </button>
            ))}
          </div>

          <div className="flex-1" />

          {/* URL Bar */}
          <div className={`hidden sm:flex items-center gap-2 rounded-full px-3 py-1 text-xs max-w-[200px] ${isDark ? 'bg-[#35363a] border border-[#3c4043]/60' : 'bg-white border border-slate-200'}`}>
            <svg
              className={`w-3 h-3 flex-shrink-0 ${isDark ? 'text-[#9aa0a6]' : 'text-slate-400'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className={`truncate ${isDark ? 'text-[#9aa0a6]' : 'text-slate-500'}`}>{cfg.url}</span>
          </div>
        </div>

        {/* Chat UI */}
        <div
          className="h-[540px] flex flex-col"
          role="img"
          aria-label={`Simulated ${cfg.label} conversation asking Who is Vinit Shahdeo`}
        >
          <div className="flex-1 flex flex-col min-w-0 min-h-0">
            {/* Top bar */}
            <div className={`flex items-center px-4 py-2.5 border-b transition-colors duration-300 ${isDark ? 'border-[#2f2f2f]' : 'border-slate-100'}`}>
              <div className="flex items-center gap-1.5">
                {(activeTab === 'gemini' || activeTab === 'perplexity') && TAB_CONFIG[activeTab].tabIcon(true, isDark)}
                <span className={`text-sm font-medium ${isDark ? 'text-[#ececf1]' : 'text-slate-800'}`}>{cfg.label}</span>
              </div>
              <span className={`text-[10px] ml-1.5 px-1.5 py-0.5 rounded ${isDark ? 'text-[#8e8ea0] bg-[#2f2f2f]' : 'text-slate-500 bg-slate-100'}`}>{cfg.model}</span>
            </div>

            {/* Messages area */}
            <div ref={active.messagesRef} className="flex-1 overflow-y-auto px-4 md:px-6 py-4 space-y-4 min-h-0">
              {/* User message */}
              {(active.phase === 'thinking' || active.phase === 'streaming-answer' || active.phase === 'done') && (
                <motion.div
                  key={`${activeTab}-user`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="flex justify-end">
                    <div className={`rounded-2xl px-4 py-2.5 max-w-[80%] ${isDark ? 'bg-[#2f2f2f]' : 'bg-slate-100'}`}>
                      <p className={`text-sm ${isDark ? 'text-[#ececf1]' : 'text-slate-800'}`}>{QUESTION}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Thinking indicator */}
              <AnimatePresence>
                {active.phase === 'thinking' && (
                  <motion.div
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${cfg.accentBg}`}>
                      {cfg.icon}
                    </div>
                    <ThinkingDots colors={cfg.dotColors} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* AI response */}
              {(active.phase === 'streaming-answer' || active.phase === 'done') && (
                <motion.div
                  key={`${activeTab}-response`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${cfg.accentBg}`}>
                      {cfg.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm leading-relaxed whitespace-pre-line ${isDark ? 'text-[#d1d5db]' : 'text-slate-700'}`}>
                        {active.streamedAnswer}
                        {active.phase === 'streaming-answer' && <TypewriterCursor dark={isDark} />}
                      </p>

                      {/* Source chips */}
                      <AnimatePresence>
                        {active.showSources && (
                          <motion.div
                            className="flex flex-wrap gap-1.5 mt-3"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            {sources.map((source, i) => (
                              <motion.span
                                key={source.label}
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs ${isDark ? 'bg-[#2f2f2f] border border-[#3f3f3f] text-[#8e8ea0]' : 'bg-slate-100 border border-slate-200 text-slate-500'}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: i * 0.1 }}
                              >
                                <SourceIcon type={source.type} />
                                {source.label}
                              </motion.span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}

              <div />
            </div>

            {/* Input bar */}
            <div className="px-4 md:px-6 pb-3 pt-2">
              <div className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border ${isDark ? 'border-[#3f3f3f] bg-[#2f2f2f]' : 'border-slate-200 bg-slate-50'}`}>
                <div className="flex-1 text-sm min-h-[20px] flex items-center">
                  {active.phase === 'idle' && (
                    <>
                      <span className={isDark ? 'text-[#8e8ea0]' : 'text-slate-400'}>{cfg.placeholder}</span>
                      <TypewriterCursor dark={isDark} />
                    </>
                  )}
                  {active.phase === 'typing-question' && (
                    <>
                      <span className={isDark ? 'text-[#ececf1]' : 'text-slate-800'}>{active.typedQuestion}</span>
                      <TypewriterCursor dark={isDark} />
                    </>
                  )}
                  {active.phase !== 'idle' && active.phase !== 'typing-question' && (
                    <span className={isDark ? 'text-[#8e8ea0]' : 'text-slate-400'}>{cfg.placeholder}</span>
                  )}
                </div>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    active.typedQuestion.length > 0 && active.phase === 'typing-question'
                      ? isDark ? 'bg-white' : 'bg-slate-800'
                      : isDark ? 'bg-[#3f3f3f]' : 'bg-slate-200'
                  }`}
                >
                  <svg
                    className={`w-3.5 h-3.5 ${
                      active.typedQuestion.length > 0 && active.phase === 'typing-question'
                        ? isDark ? 'text-[#212121]' : 'text-white'
                        : isDark ? 'text-[#8e8ea0]' : 'text-slate-400'
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </div>
              </div>
              <p className={`text-[10px] text-center mt-2 ${isDark ? 'text-[#8e8ea0]' : 'text-slate-400'}`}>
                {cfg.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
