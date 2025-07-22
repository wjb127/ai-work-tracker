'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function CountUp({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '', 
  className = '' 
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (inView && !hasStarted.current) {
      hasStarted.current = true
      const start = Date.now()
      const startValue = 0
      const endValue = end

      const updateCount = () => {
        const now = Date.now()
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const current = startValue + (endValue - startValue) * easeOutQuart
        
        // Handle decimal places
        const formattedCurrent = Number.isInteger(endValue) 
          ? Math.floor(current)
          : Math.round(current * 10) / 10
        
        setCount(formattedCurrent)
        
        if (progress < 1) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(endValue)
        }
      }
      
      requestAnimationFrame(updateCount)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString('ko-KR')}{suffix}
    </span>
  )
}