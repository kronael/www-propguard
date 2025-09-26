'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqData = [
  {
    question: 'Will this block legit traders?',
    answer: 'We target coordinated scammer rings—not legitimate traders. Explainable scores and approvals keep decisions transparent and support lighter rule sets.',
  },
  {
    question: 'Do you support my stack?',
    answer: 'Yes—standard APIs, webhooks, and flat-file/S3/BigQuery imports. We integrate with all major platforms.',
  },
  {
    question: 'How fast to value?',
    answer: 'First insights in days; full rollout in weeks. Our team handles the heavy lifting.',
  },
  {
    question: 'What about data privacy?',
    answer: 'All data is encrypted at rest and in transit. We support on-premise deployments and strict data retention policies.',
  },
  {
    question: 'How does pricing work?',
    answer: 'Pricing is based on trading volume and features needed. We offer transparent, value-based pricing with no hidden fees.',
  },
]

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="faq" className="py-24 bg-primary-surface">
      <div className="section-container">
        <div className="section-header">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Questions we hear from risk teams</h2>
        </div>

        <div className="max-w-3xl mx-auto mt-16 space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-primary-surface-light/50 transition-colors"
              >
                <span className="text-lg font-bold pr-4">{item.question}</span>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="w-5 h-5 text-accent" />
                  ) : (
                    <Plus className="w-5 h-5 text-accent" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-text-secondary">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
