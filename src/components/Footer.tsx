'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 bg-primary-surface border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand column */}
          <div>
            <div className="text-2xl font-medium mb-4 bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              profitGuard
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Specialized risk management for prop firms. Flag coordinated scammer rings, protect payouts for legitimate traders, and enable lighter, transparent rule sets aligned with industry leaders.
            </p>
          </div>

          {/* Product column */}
          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              <li><a href="#capabilities" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Capabilities</a></li>
              <li><a href="#how-it-works" className="text-text-secondary hover:text-text-primary text-sm transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-secondary hover:text-text-primary text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Privacy</a></li>
              <li><a href="#" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Terms</a></li>
              <li><a href="#" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Security</a></li>
              <li><a href="#" className="text-text-secondary hover:text-text-primary text-sm transition-colors">Compliance</a></li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted"
        >
          <div>© {currentYear} profitGuard. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-text-primary transition-colors">Status</a>
            <a href="#" className="hover:text-text-primary transition-colors">Support</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
