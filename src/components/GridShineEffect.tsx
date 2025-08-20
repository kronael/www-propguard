'use client'

import { useEffect } from 'react'

/**
 * Grid shine effect component that creates dynamic lighting on scroll and mouse movement
 * - Scroll shine: Large area with dynamic movement patterns
 * - Mouse shine: Precise cursor-following spotlight
 * - Both effects respond to velocity for intensity variation
 */
const GridShineEffect = () => {
  useEffect(() => {
    // State management
    let scrollTimeout: NodeJS.Timeout
    let mouseTimeout: NodeJS.Timeout
    let isScrolling = false
    let isMouseActive = false

    // Velocity tracking
    let lastScrollY = 0
    let lastMouseX = 0
    let lastMouseY = 0
    let lastTime = Date.now()

    const updateCSSProperty = (property: string, value: string) => {
      document.documentElement.style.setProperty(property, value)
    }

    const calculateScrollPosition = (scrollProgress: number) => {
      // Dynamic pulse position with complex movement patterns
      const pulseX = 5 + (scrollProgress * 90) +
                     Math.sin(scrollProgress * Math.PI * 3.5) * 30 +
                     Math.cos(scrollProgress * Math.PI * 1.9) * 25 +
                     Math.sin(scrollProgress * Math.PI * 5.2) * 12

      const pulseY = 5 + (scrollProgress * 90) +
                     Math.cos(scrollProgress * Math.PI * 4.2) * 35 +
                     Math.sin(scrollProgress * Math.PI * 2.7) * 28 +
                     Math.cos(scrollProgress * Math.PI * 6.1) * 15

      return { x: Math.round(pulseX), y: Math.round(pulseY) }
    }

    const handleScroll = () => {
      const currentTime = Date.now()
      const deltaTime = Math.max(currentTime - lastTime, 1)

      if (!isScrolling) {
        document.body.classList.add('scrolling')
        document.documentElement.classList.add('scrolling')
        isScrolling = true
      }

      // Calculate scroll metrics
      const scrollY = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = Math.min(scrollY / Math.max(documentHeight, 1), 1)

      // Calculate velocity-based intensity
      const scrollVelocity = Math.abs(scrollY - lastScrollY) / deltaTime
      const scrollIntensity = Math.min(0.2 + (scrollVelocity * 0.3), 0.5)

      // Update position and intensity
      const { x, y } = calculateScrollPosition(scrollProgress)
      updateCSSProperty('--pulse-x', `${x}%`)
      updateCSSProperty('--pulse-y', `${y}%`)
      updateCSSProperty('--scroll-intensity', scrollIntensity.toString())

      // Ensure mouse position is available during scroll
      if (!document.documentElement.style.getPropertyValue('--mouse-x')) {
        updateCSSProperty('--mouse-x', '50%')
        updateCSSProperty('--mouse-y', '50%')
      }

      // Update tracking variables
      lastScrollY = scrollY
      lastTime = currentTime

      // Reset scroll state after delay
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        // Add fade-out class for faster transition
        document.body.classList.add('scroll-fade-out')
        document.body.classList.remove('scrolling')
        document.documentElement.classList.remove('scrolling')
        isScrolling = false

        // Remove fade-out class after transition completes
        setTimeout(() => {
          document.body.classList.remove('scroll-fade-out')
        }, 50)
      }, 200)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now()
      const deltaTime = Math.max(currentTime - lastTime, 1)

      if (!isMouseActive) {
        document.documentElement.classList.add('mouse-active')
        isMouseActive = true
      }

      // Calculate mouse position as percentage
      const mouseX = (e.clientX / window.innerWidth) * 100
      const mouseY = (e.clientY / window.innerHeight) * 100

      // Calculate velocity-based intensity
      const mouseDeltaX = Math.abs(mouseX - lastMouseX)
      const mouseDeltaY = Math.abs(mouseY - lastMouseY)
      const mouseVelocity = Math.sqrt(mouseDeltaX * mouseDeltaX + mouseDeltaY * mouseDeltaY) / deltaTime
      const mouseIntensity = Math.min(0.35 + (mouseVelocity * 0.25), 0.6)

      // Update position and intensity
      updateCSSProperty('--mouse-x', `${Math.round(mouseX)}%`)
      updateCSSProperty('--mouse-y', `${Math.round(mouseY)}%`)
      updateCSSProperty('--mouse-intensity', mouseIntensity.toString())

      // Update tracking variables
      lastMouseX = mouseX
      lastMouseY = mouseY
      lastTime = currentTime

      // Reset mouse state after delay
      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        // Add fade-out class for linear transition
        document.documentElement.classList.add('mouse-fade-out')
        document.documentElement.classList.remove('mouse-active')
        isMouseActive = false

        // Remove fade-out class after transition completes
        setTimeout(() => {
          document.documentElement.classList.remove('mouse-fade-out')
        }, 500)
      }, 300)
    }

    // Initialize CSS custom properties
    const initializeProperties = () => {
      updateCSSProperty('--pulse-x', '50%')
      updateCSSProperty('--pulse-y', '50%')
      updateCSSProperty('--mouse-x', '50%')
      updateCSSProperty('--mouse-y', '50%')
      updateCSSProperty('--scroll-intensity', '0.3')
      updateCSSProperty('--mouse-intensity', '0.35')
    }

    // Setup
    initializeProperties()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(scrollTimeout)
      clearTimeout(mouseTimeout)
      document.body.classList.remove('scrolling', 'scroll-fade-out')
      document.documentElement.classList.remove('scrolling', 'mouse-active', 'mouse-fade-out')
    }
  }, [])

  return null
}

export default GridShineEffect
