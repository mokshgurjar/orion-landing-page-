'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface LazySectionProps {
  children: React.ReactNode
  fallback: React.ReactNode
}

export default function LazySection({ children, fallback }: LazySectionProps) {
  // Use framer-motion's useInView to quickly evaluate mounting context
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // margin controls how early the item mounts.
  const isInView = useInView(ref, { margin: "400px 0px 400px 0px" })

  useEffect(() => {
    if (isInView && !mounted) {
      setMounted(true)
    }
    // We intentionally do not setMounted(false) when scrolled away 
    // to prevent the "pop-in" effect from resetting.
  }, [isInView, mounted])

  return (
    <div ref={ref}>
      {mounted ? children : fallback}
    </div>
  )
}
