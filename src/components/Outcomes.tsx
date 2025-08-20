'use client'

import { motion } from 'framer-motion'

const outcomesData = [
  { number: '40%', label: 'Lower payout leakage' },
  { number: '67%', label: 'Fewer false positives' },
  { number: '2m', label: 'Average investigation time' },
  { number: '15%', label: 'Margin improvement' },
]

const Outcomes = () => {
  return (
    <section className="py-24 bg-primary-surface">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label">Outcomes</div>
          <h2 className="section-title">Real results from real prop firms</h2>
          <p className="section-subtitle">
            Data-driven risk management that protects margins without hurting growth.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
          {outcomesData.map((outcome, index) => (
            <motion.div
              key={outcome.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl font-black text-accent mb-3">
                {outcome.number}
              </div>
              <div className="text-text-secondary text-sm">
                {outcome.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Outcomes
