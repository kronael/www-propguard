export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }
}

export const fadeInRight = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

export const slideInFromTop = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
  }
}