'use client'

import { BookOpen, Sparkles, ShoppingCart, ArrowRight, Footprints } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BookIntro() {
  return (
    <section className="py-16 md:py-28 px-6 bg-gradient-to-b from-white via-slate-50/50 to-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 mb-4 tracking-wide uppercase inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
            <BookOpen className="w-4 h-4" />
            The Solution
          </p>

          <div className="relative">
            {/* Floating Footprint Icons */}
            <motion.div
              className="absolute -left-8 md:-left-16 top-0 text-blue-500/20"
              initial={{ opacity: 0, x: -20, rotate: -15 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -10, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                x: { duration: 0.8, delay: 0.2 },
                y: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
                rotate: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
              }}
            >
              <Footprints className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>

            <motion.div
              className="absolute -right-8 md:-right-16 top-8 text-purple-500/20"
              initial={{ opacity: 0, x: 20, rotate: 15 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, 10, 0],
                rotate: [5, -5, 5],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 },
                x: { duration: 0.8, delay: 0.3 },
                y: { repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 },
                rotate: { repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 },
              }}
            >
              <Footprints className="w-10 h-10 md:w-14 md:h-14" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight leading-[1.1]">
              Introducing
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mt-2">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Digital Footprint
              </span>
            </h3>
            <p className="text-lg md:text-xl text-slate-500 mt-3 font-medium tracking-wide">
              for software engineers
            </p>

            {/* Binary representation of "Digital Footprint" */}
            <style jsx>{`
              @keyframes subtlePulse {
                0%,
                100% {
                  opacity: 0.5;
                }
                50% {
                  opacity: 0.8;
                }
              }
              .binary-pulse {
                animation: subtlePulse 4s ease-in-out infinite;
              }
            `}</style>
            <div className="font-mono text-xs md:text-sm tracking-tight mt-3 mb-6 opacity-50">
              <div className="flex justify-center gap-1.5 flex-wrap">
                <span className="text-slate-400">01000100</span>
                <span className="text-blue-500 binary-pulse">01101001</span>
                <span className="text-slate-400">01100111</span>
                <span className="text-blue-500 binary-pulse">01101001</span>
                <span className="text-slate-400">01110100</span>
                <span className="text-blue-500 binary-pulse">01100001</span>
                <span className="text-slate-400">01101100</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-6">
            A practical playbook for software engineers who want their work to be discoverable,
            credible, and career-defining
          </p>

          {/* Ask AI Buttons */}
          <div className="flex flex-col items-center">
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
              </svg>
              Ask AI about this book
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2">
              <a
                href="https://chat.openai.com/?q=Tell%20me%20about%20the%20book%20Digital%20Footprint%20for%20Software%20Engineers%20by%20Vinit%20Shahdeo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold font-mono uppercase tracking-wider border border-slate-200 rounded-lg bg-white hover:border-[#10a37f]/40 hover:shadow-[0_2px_8px_rgba(16,163,127,0.15)] transition-all duration-200 ease-out active:scale-95 select-none text-slate-600 hover:text-[#10a37f]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-[#10a37f]"
                >
                  <path
                    fill="currentColor"
                    d="M9.67 9.304V7.421c0-.158.06-.277.2-.357l3.785-2.18c.516-.297 1.13-.436 1.764-.436 2.379 0 3.885 1.844 3.885 3.806 0 .138 0 .297-.02.456l-3.924-2.3a.66.66 0 0 0-.714 0zm8.841 7.334v-4.5a.66.66 0 0 0-.357-.614L13.18 8.63l1.626-.931a.36.36 0 0 1 .396 0l3.786 2.18c1.09.634 1.824 1.982 1.824 3.29 0 1.507-.892 2.894-2.3 3.47m-10.01-3.964-1.625-.951c-.139-.08-.198-.199-.198-.357v-4.36c0-2.122 1.625-3.727 3.826-3.727a3.7 3.7 0 0 1 2.26.773l-3.906 2.26a.66.66 0 0 0-.356.614zM12 14.696l-2.33-1.308v-2.775L12 9.304l2.329 1.309v2.775zm1.496 6.026a3.7 3.7 0 0 1-2.26-.774l3.906-2.26a.66.66 0 0 0 .356-.614v-5.748l1.646.951c.138.08.198.199.198.357v4.36c0 2.122-1.645 3.728-3.845 3.728M8.8 16.302 5.013 14.12c-1.09-.634-1.824-1.982-1.824-3.29 0-1.527.912-2.894 2.32-3.47v4.52c0 .278.118.476.356.615l4.955 2.874-1.625.931a.36.36 0 0 1-.396 0m-.218 3.25c-2.24 0-3.885-1.685-3.885-3.766 0-.159.02-.317.04-.476l3.904 2.26a.66.66 0 0 0 .714 0l4.975-2.874v1.883c0 .159-.06.278-.198.357l-3.786 2.18c-.516.297-1.13.436-1.764.436m4.916 2.359c2.398 0 4.4-1.705 4.856-3.965C20.573 17.372 22 15.29 22 13.17a5.01 5.01 0 0 0-1.665-3.706c.1-.416.159-.833.159-1.249 0-2.834-2.3-4.955-4.956-4.955-.535 0-1.05.079-1.566.257a4.97 4.97 0 0 0-3.468-1.427 4.956 4.956 0 0 0-4.857 3.965C3.427 6.628 2 8.71 2 10.83c0 1.387.595 2.735 1.665 3.706a5.4 5.4 0 0 0-.159 1.249c0 2.834 2.3 4.955 4.956 4.955.535 0 1.05-.079 1.566-.257a4.97 4.97 0 0 0 3.468 1.427"
                  />
                </svg>
                ChatGPT
              </a>
              <a
                href="https://www.google.com/search?q=Tell%20me%20about%20the%20book%20Digital%20Footprint%20for%20Software%20Engineers%20by%20Vinit%20Shahdeo&udm=50"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold font-mono uppercase tracking-wider border border-slate-200 rounded-lg bg-white hover:border-[#4285f4]/40 hover:shadow-[0_2px_8px_rgba(66,133,244,0.15)] transition-all duration-200 ease-out active:scale-95 select-none text-slate-600 hover:text-[#4285f4]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-[#4285f4]"
                >
                  <g clipPath="url(#gemini_clip_bi)">
                    <path
                      fill="currentColor"
                      d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
                    />
                  </g>
                  <defs>
                    <clipPath id="gemini_clip_bi">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Gemini
              </a>
              <a
                href="https://claude.ai/new?q=Tell%20me%20about%20the%20book%20Digital%20Footprint%20for%20Software%20Engineers%20by%20Vinit%20Shahdeo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold font-mono uppercase tracking-wider border border-slate-200 rounded-lg bg-white hover:border-[#d97706]/40 hover:shadow-[0_2px_8px_rgba(217,119,6,0.15)] transition-all duration-200 ease-out active:scale-95 select-none text-slate-600 hover:text-[#d97706]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-[#d97706]"
                >
                  <g clipPath="url(#claude_clip_bi)">
                    <path
                      fill="currentColor"
                      d="m4.715 15.956 4.717-2.648.079-.23-.079-.128h-.23l-.79-.048-2.696-.073-2.337-.097-2.265-.122-.57-.121-.535-.705.055-.352.48-.322.686.061 1.517.104 2.277.157 1.652.098 2.446.255h.389l.055-.158-.134-.098-.103-.097-2.356-1.596-2.55-1.688-1.335-.972-.723-.492-.364-.46-.158-1.009.656-.722.88.06.225.061.892.686 1.906 1.476 2.49 1.833.364.304.146-.104.018-.072-.164-.274-1.354-2.446-1.445-2.49-.643-1.032-.17-.619a3 3 0 0 1-.104-.728L6.287.133 6.7 0l.996.134.419.364.619 1.415L9.736 4.14l1.554 3.03.455.898.243.832.091.255h.158V9.01l.127-1.706.237-2.095.231-2.695.079-.76.376-.91.747-.492.583.28.48.685-.067.444-.285 1.851-.56 2.903-.363 1.942h.212l.243-.243.984-1.305 1.65-2.064.73-.82.85-.904.546-.431h1.032l.759 1.129-.34 1.166-1.062 1.347-.88 1.142-1.264 1.7-.789 1.36.073.11.188-.02 2.854-.606 1.542-.28 1.84-.315.831.388.091.395-.328.807-1.967.486-2.307.461-3.436.814-.043.03.049.061 1.548.146.662.036h1.62l3.018.225.79.522.473.638-.079.485-1.214.62-1.64-.389-3.824-.91-1.312-.329h-.182v.11l1.093 1.068 2.004 1.81 2.507 2.33.127.578-.321.455-.34-.049-2.204-1.657-.85-.747-1.925-1.62h-.127v.17l.443.649 2.344 3.521.12 1.08-.17.353-.606.212-.668-.12-1.372-1.925-1.415-2.168-1.141-1.943-.14.08-.674 7.254-.316.37-.728.28-.607-.461-.322-.747.322-1.476.388-1.924.316-1.53.285-1.9.17-.632-.012-.042-.14.018-1.432 1.967-2.18 2.945-1.724 1.845-.413.164-.716-.37.066-.662.401-.589L8.17 17.57l1.44-1.882.928-1.086-.006-.158h-.055L4.138 18.56l-1.13.146-.485-.456.06-.746.231-.243 1.907-1.312z"
                    />
                  </g>
                  <defs>
                    <clipPath id="claude_clip_bi">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Claude
              </a>
              <a
                href="https://perplexity.ai/?q=Tell%20me%20about%20the%20book%20Digital%20Footprint%20for%20Software%20Engineers%20by%20Vinit%20Shahdeo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold font-mono uppercase tracking-wider border border-slate-200 rounded-lg bg-white hover:border-[#20b8cd]/40 hover:shadow-[0_2px_8px_rgba(32,184,205,0.15)] transition-all duration-200 ease-out active:scale-95 select-none text-slate-600 hover:text-[#20b8cd]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-[#20b8cd]"
                >
                  <g clipPath="url(#perplexity_clip_bi)">
                    <path
                      fill="currentColor"
                      d="M22.398 7.09h-2.31V.068l-7.51 6.354V.158h-1.155v6.196L4.49 0v7.09H1.603v10.397H4.49V24l6.932-6.36v6.201h1.155v-6.047l6.932 6.181v-6.488h2.888zm-3.466-4.531v4.53h-5.355zm-13.286.067 4.87 4.464h-4.87zM2.758 16.332V8.245h7.847L4.491 14.36v1.972zm2.888 5.04v-6.534l5.776-5.776v7.011zm12.709.025-5.777-5.15V9.061l5.777 5.776zm2.888-5.065H19.51V14.36l-6.115-6.115h7.848z"
                    />
                  </g>
                  <defs>
                    <clipPath id="perplexity_clip_bi">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </svg>
                Perplexity
              </a>
            </div>
          </div>
        </motion.div>

        {/* Book Cover and Details Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl"></div>
              <Image
                src="/images/digital-footprint-for-software-engineers-book-cover.png"
                alt="Digital Footprint for Software Engineers Book Cover"
                width={400}
                height={600}
                className="relative rounded-2xl shadow-2xl shadow-blue-500/20"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Details and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-slate-200">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 text-sm font-medium">38 Actionable Chapters</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-slate-200">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-slate-700 text-sm font-medium">
                  Real Frameworks & Examples
                </span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-slate-200">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 text-sm font-medium">Written by an Engineer</span>
              </div>
            </div>

            <p className="text-base text-slate-500 italic">
              This isn't about becoming an influencer. It's about making sure your best work doesn't
              go unnoticed.
            </p>

            {/* Who is this for */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Perfect for:</h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Engineering Students',
                  'Entry-level Engineers',
                  'SDE-1/2',
                  'Mid-level Developers',
                  'Senior Engineers',
                  'Staff Engineers',
                  'Tech Leads',
                  'Engineering Managers',
                  'Startup Founders',
                ].map((role, index) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.3 + index * 0.03 }}
                    className="px-2.5 py-1 bg-white text-slate-600 text-xs rounded-md font-medium border border-slate-200"
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Buy Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://amzn.in/d/cSNyCNl"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all duration-200 w-full sm:w-auto"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm">Buy on Amazon</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </motion.a>

              <motion.a
                href="https://www.flipkart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 w-full sm:w-auto"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm">Buy on Flipkart</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </motion.a>
            </div>

            {/* Trusted By */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pt-5 text-center"
            >
              <p className="text-xs text-slate-500 mb-2">Trusted by engineers at</p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-600">
                <span>Microsoft</span>
                <span className="text-slate-300">•</span>
                <span>Cloudflare</span>
                <span className="text-slate-300">•</span>
                <span>Postman</span>
                <span className="text-slate-300">•</span>
                <span>IBM</span>
                <span className="text-slate-300">•</span>
                <span>Atlassian</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
