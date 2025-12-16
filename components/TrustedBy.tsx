'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import Image from 'next/image'

const companies = [
  { 
    name: 'Microsoft', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    width: 120,
    height: 26
  },
  { 
    name: 'Cloudflare', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png',
    width: 120,
    height: 30
  },
  { 
    name: 'Postman', 
    logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg',
    width: 110,
    height: 30
  },
  { 
    name: 'IBM', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    width: 80,
    height: 32
  },
]

export default function TrustedBy() {
  return (
    <section className="py-16 px-6 bg-white border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="w-5 h-5 text-slate-400" />
            <p className="text-sm font-semibold text-slate-500 tracking-wider uppercase">
              Trusted by engineers at
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm text-slate-500 mt-8 italic"
          >
            Join engineers from top companies building their digital footprint
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
