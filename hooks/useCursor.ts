'use client'

import { useEffect, useRef, useCallback } from 'react'

export function useCursor() {
    const dotRef = useRef<HTMLDivElement>(null)
    const ringRef = useRef<HTMLDivElement>(null)
    const mouse = useRef({ x: 0, y: 0 })
    const ringPos = useRef({ x: 0, y: 0 })

    const onMouseMove = useCallback((e: MouseEvent) => {
        mouse.current.x = e.clientX
        mouse.current.y = e.clientY
        if (dotRef.current) {
            dotRef.current.style.left = `${e.clientX}px`
            dotRef.current.style.top = `${e.clientY}px`
        }
    }, [])

    useEffect(() => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches
        if (isMobile) return

        document.addEventListener('mousemove', onMouseMove)

        let animId: number
        function animateRing() {
            ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12
            ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12
            if (ringRef.current) {
                ringRef.current.style.left = `${ringPos.current.x}px`
                ringRef.current.style.top = `${ringPos.current.y}px`
            }
            animId = requestAnimationFrame(animateRing)
        }
        animId = requestAnimationFrame(animateRing)

        const interactives = document.querySelectorAll('a, button')
        const handleEnter = () => {
            dotRef.current?.classList.add('hover')
            ringRef.current?.classList.add('hover')
        }
        const handleLeave = () => {
            dotRef.current?.classList.remove('hover')
            ringRef.current?.classList.remove('hover')
        }

        interactives.forEach((el) => {
            el.addEventListener('mouseenter', handleEnter)
            el.addEventListener('mouseleave', handleLeave)
        })

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            cancelAnimationFrame(animId)
            interactives.forEach((el) => {
                el.removeEventListener('mouseenter', handleEnter)
                el.removeEventListener('mouseleave', handleLeave)
            })
        }
    }, [onMouseMove])

    return { dotRef, ringRef }
}
