'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import IconCard from './IconCard'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { PROBLEMS_DATA } from '@/lib/constants'

const Problems = () => {
  return (
    <section id="problems" className="py-24 bg-primary-surface border-t border-b border-border relative">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-slide-glow" />

      <div className="section-container">
        <SectionHeader
          label="Problems We Solve"
          title="Hidden abuse is killing your margins"
          subtitle="Every day, sophisticated rings exploit your rules while legit traders get caught in the crossfire."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {PROBLEMS_DATA.map((problem, index) => (
            <motion.div
              key={problem.title}
              variants={staggerItem}
            >
              <IconCard {...problem} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Problems
