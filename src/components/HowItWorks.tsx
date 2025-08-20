'use client'

import { motion } from 'framer-motion'

const stepsData = [
  {
    number: '1',
    title: 'Ingest',
    description: 'Connect platforms, CRMs, and trading servers; stream positions, fills, device signals.',
  },
  {
    number: '2',
    title: 'Detect',
    description: 'Models & graph identify arbitragers, cross-firm hedgers, copy clusters.',
  },
  {
    number: '3',
    title: 'Decide',
    description: 'Risk scores + playbooks recommend actions based on your thresholds.',
  },
  {
    number: '4',
    title: 'Act',
    description: 'Pause payouts, require KYC, throttle leverage, or escalate—programmatically.',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-primary-surface border-t border-b border-border">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Four steps to protected payouts</h2>
          <p className="section-subtitle">
            From integration to action in days, not months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent to-accent-green opacity-20" />

          {stepsData.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              viewport={{ once: true }}
              className="text-center relative z-10 group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-primary border-2 border-border-light rounded-full flex items-center justify-center text-3xl font-medium text-accent transition-all duration-500 group-hover:scale-125 group-hover:rotate-[360deg] group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-green group-hover:text-primary group-hover:border-transparent relative">
                {step.number}
                {/* Animated border */}
                <div className="absolute inset-[-8px] rounded-full p-0.5 bg-gradient-to-br from-accent to-accent-green opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                     style={{
                       WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                       WebkitMaskComposite: 'xor',
                       maskComposite: 'exclude'
                     }}
                />
              </div>

              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-text-secondary text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
