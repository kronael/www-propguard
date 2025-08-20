'use client'

import { motion } from 'framer-motion'

const pricingData = [
  {
    tier: 'For Small Firms',
    name: 'Starter',
    features: [
      'Essential detection models',
      'Basic dashboards',
      'Email alerts',
      'Monthly reports',
    ],
    buttonText: 'Get Pricing',
    buttonStyle: 'btn-secondary',
    featured: false,
  },
  {
    tier: 'For Growing Firms',
    name: 'Growth',
    features: [
      'Advanced models & graph detection',
      'Real-time dashboards',
      'API access & webhooks',
      'Automation playbooks',
      'Priority support',
    ],
    buttonText: 'Get Pricing',
    buttonStyle: 'btn-primary',
    featured: true,
  },
  {
    tier: 'For Large Firms',
    name: 'Enterprise',
    features: [
      'Custom connectors',
      'SSO & advanced security',
      'Dedicated success manager',
      'Custom models & rules',
      'SLA guarantees',
    ],
    buttonText: 'Contact Sales',
    buttonStyle: 'btn-secondary',
    featured: false,
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-primary">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Value-based pricing that scales with you</h2>
          <p className="section-subtitle">Start small, scale as you grow. No hidden fees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              viewport={{ once: true }}
              className={`bg-primary-surface border rounded-xl p-10 relative ${
                plan.featured
                  ? 'border-accent scale-105 shadow-[0_20px_60px_rgba(0,245,255,0.1)]'
                  : 'border-border'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent to-accent-green text-black text-xs font-bold px-4 py-2 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
                {plan.tier}
              </div>

              <div className="text-3xl font-black mb-8">{plan.name}</div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="py-3 border-b border-border text-text-secondary text-sm last:border-b-0"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#" className={`btn ${plan.buttonStyle} w-full text-center block`}>
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
