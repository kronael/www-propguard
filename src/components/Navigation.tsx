'use client'

import { motion } from 'framer-motion'
import NavigationLink from './NavigationLink'
import { slideInFromTop } from '@/lib/animations'
import { useScrolled } from '@/hooks/useScrolled'
import { BOOK_DEMO_URL } from '@/lib/site'

const Navigation = () => {
  const isScrolled = useScrolled(20)

  return (
    <motion.nav
      {...slideInFromTop}
      className={`fixed top-0 left-0 right-0 z-[1000] py-4 sm:py-5 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/85 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex justify-between items-center">
          <div className="text-lg sm:text-xl font-medium tracking-tight bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
            profitGuard
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavigationLink href="#problems">Problems</NavigationLink>
            <NavigationLink href="#capabilities">Capabilities</NavigationLink>
            <NavigationLink href="#how-it-works">How it Works</NavigationLink>
            <NavigationLink href="#pricing">Pricing</NavigationLink>
            <a
              href={BOOK_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
