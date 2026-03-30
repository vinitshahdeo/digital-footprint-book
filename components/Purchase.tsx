import {
  ArrowRight,
  ShoppingCart,
  Check,
  BookOpen,
  TabletSmartphone,
  FileText,
  Headphones,
  Package,
} from 'lucide-react'

const benefits = [
  '38 actionable chapters',
  '11 comprehensive sections',
  '350+ pages of insights',
  'Real-world frameworks',
]

export default function Purchase() {
  return (
    <section
      id="purchase"
      className="relative py-16 sm:py-20 md:py-28 px-6 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] font-semibold text-slate-300 mb-4 inline-flex items-center gap-2 pl-1 pr-3.5 py-1 bg-white/[0.07] rounded-full border border-white/[0.12] backdrop-blur-sm">
            <span className="px-2 py-0.5 bg-blue-500 text-white text-[10px] font-mono font-bold rounded-full inline-flex items-center gap-1"><Package className="w-2.5 h-2.5" />npm i</span>
            @career/visibility
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Digital Footprint
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl text-slate-300">
              for Software Engineers
            </span>
          </h2>

          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            Get your copy today and start building your online presence
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3.5 py-1.5 bg-white/5 rounded-full border border-white/[0.12]"
              >
                <Check className="w-3.5 h-3.5 text-green-400" />
                <span className="text-sm text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 max-w-xl mx-auto">
          <a
            href="https://amzn.in/d/cSNyCNl"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-all duration-200 w-full sm:w-auto"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Buy on Amazon</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>

          <a
            href="https://dl.flipkart.com/s/6HfSBRNNNN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Buy on Flipkart"
            className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-white/5 border border-white/[0.12] text-slate-300 rounded-lg font-medium hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Buy on Flipkart</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>

        {/* Format Info */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <BookOpen className="w-4 h-4" />
            <span>Paperback</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-slate-400">
            <TabletSmartphone className="w-4 h-4" />
            <span>Kindle</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-slate-400">
            <FileText className="w-4 h-4" />
            <span>ePub</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 text-slate-500/60">
            <Headphones className="w-4 h-4" />
            <span className="italic">Audiobook coming soon</span>
          </div>
        </div>

        {/* Donation Note */}
        <div className="mt-10">
          <p className="text-[11.5px] text-slate-400 text-center leading-relaxed">
            <svg className="inline-block w-3 h-3 text-pink-400 align-[-1.5px] mr-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            Your purchase fuels hope — 100% royalties go to cancer care at{' '}
            <a href="https://tmc.gov.in/m_donation_new" target="_blank" rel="noopener noreferrer" className="text-slate-300 font-medium underline decoration-slate-500 underline-offset-2 hover:text-white transition-colors">Tata Memorial Hospital</a>, Mumbai
          </p>
        </div>
      </div>
    </section>
  )
}
