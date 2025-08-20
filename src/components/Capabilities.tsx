'use client'

import { motion } from 'framer-motion'

const capabilitiesData = [
  {
    number: '01',
    title: 'Abuse detection graph',
    description: 'Entity resolution across emails/devices/IPs/behavior → ring detection.',
  },
  {
    number: '02',
    title: 'Strategy fingerprinting',
    description: 'Model trade sequences to spot hedgers, news spikers, copier herds.',
  },
  {
    number: '03',
    title: 'Cross-firm intelligence',
    description: 'Consortium-grade signals (privacy-preserving) to catch inter-firm patterns.',
  },
  {
    number: '04',
    title: 'Real-time risk scoring',
    description: 'Per-trade and per-account risk scoring with thresholds you control.',
  },
  {
    number: '05',
    title: 'Decision playbooks',
    description: 'One-click actions: review, throttle, pause payout, escalate.',
  },
]

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 bg-primary border-b border-border relative">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label">Core Capabilities</div>
          <h2 className="section-title">Detection that scales with your sophistication</h2>
          <p className="section-subtitle">
            From entity resolution to real-time scoring, we catch what others miss.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-10 mt-16">
          {capabilitiesData.map((capability, index) => (
            <motion.div
              key={capability.number}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-medium bg-gradient-to-br from-accent to-accent-green bg-clip-text text-transparent mb-4 font-mono">
                {capability.number}
              </div>

              <h3 className="text-lg font-semibold mb-3 leading-tight">{capability.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
