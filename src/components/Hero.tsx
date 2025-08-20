'use client'

import { motion } from 'framer-motion'
import { fadeInUp, fadeInRight, scaleIn } from '@/lib/animations'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 sm:pt-30 pb-12 sm:pb-20 px-4 sm:px-0 bg-gradient-to-b from-primary via-primary to-primary relative">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-accent-green/[0.05] to-transparent rounded-full blur-3xl" />

      <div className="section-container">
        <motion.div
          {...fadeInUp}
          className="max-w-4xl w-full"
        >
          {/* Badge */}
          <motion.div
            {...scaleIn}
            transition={{ ...scaleIn.transition, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/5 border border-accent/20 rounded-full text-xs sm:text-xs font-semibold text-accent tracking-wider uppercase mb-6 sm:mb-8 relative overflow-hidden animate-glow-pulse"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-[10px] sm:text-xs">Live Analytics</span>
            {/* Shimmer effect */}
            <div className="absolute top-1/2 -left-full w-full h-full bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-shimmer" />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fadeInRight}
            transition={{ ...fadeInRight.transition, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight sm:leading-none tracking-tight mb-6 sm:mb-8 bg-gradient-to-r from-white via-accent to-accent-green bg-clip-text text-transparent"
          >
            Outsourced risk management—<br className="hidden sm:block" /><span className="sm:hidden"> </span>built for prop firms.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            className="text-lg sm:text-xl leading-relaxed text-text-secondary max-w-3xl mb-8 sm:mb-12"
          >
            Flag arbitragers, cross-firm hedgers, and coordinated rings. Protect payouts, keep legit traders happy, and grow margins with data-driven decisions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center"
          >
            <a href="#book-demo" className="btn btn-primary">
              Book a Demo →
            </a>
            <a href="#how-it-works" className="btn btn-secondary">
              See How It Works
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
