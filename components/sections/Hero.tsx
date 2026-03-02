'use client'

import { useEffect, useRef, useState } from 'react'
import { STATS } from '@/lib/data'

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null)

    const [osName, setOsName] = useState<string | null>(null)

    // Add .hero-fade only after mount so SSR renders fully visible
    // (prevents the "blank hero" flash on first load)
    useEffect(() => {
        const el = containerRef.current
        if (!el) return
        el.querySelectorAll<HTMLElement>('.will-fade').forEach((node) => {
            node.classList.add('hero-fade')
        })

        if (typeof navigator !== 'undefined') {
            let detected = 'Unknown'
            if ('userAgentData' in navigator) {
                detected = (navigator as any).userAgentData?.platform || 'Unknown'
            }

            if (detected === 'Unknown' || !detected) {
                const ua = navigator.userAgent.toLowerCase()
                if (ua.includes('win')) detected = 'Windows'
                else if (ua.includes('mac')) detected = 'macOS'
                else if (ua.includes('linux')) detected = 'Linux'
            }
            setOsName(detected)
        }
    }, [])

    let btnText = 'DOWNLOAD FOR FREE'
    let btnHref = '/download'

    if (osName) {
        const targetOS = osName.toLowerCase()
        if (targetOS.includes('win')) {
            btnText = 'DOWNLOAD FOR WINDOWS'
        } else if (targetOS.includes('mac')) {
            btnText = 'DOWNLOAD FOR MACOS'
        } else if (targetOS.includes('linux')) {
            btnText = 'DOWNLOAD FOR LINUX'
        }
    }

    return (
        <section
            ref={containerRef}
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                padding: '120px 20px 80px',
                overflow: 'hidden',
            }}
        >
            {/* .hero-glow */}
            <div
                style={{
                    position: 'absolute',
                    width: '700px',
                    height: '700px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -55%)',
                    background: 'radial-gradient(circle, rgba(192,40,42,0.12) 0%, rgba(192,40,42,0.04) 40%, transparent 70%)',
                    pointerEvents: 'none',
                    animation: 'glowPulse 4s ease-in-out infinite',
                    zIndex: 0,
                }}
            />

            {/* h1 — will-fade gets hero-fade class after mount */}
            <h1
                className="will-fade"
                style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: 'clamp(72px, 5vw, 80px)',
                    lineHeight: 1.05,
                    marginBottom: '52px',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                Built by developers.<br />
                <span style={{ color: 'var(--color-red-bright)', fontStyle: 'italic' }}>
                    Evolved
                </span>{' '}
                by the community.
            </h1>

            {/* .hero-buttons */}
            <div
                className="will-fade"
                style={{
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    marginBottom: '90px',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* .btn-primary */}
                <a
                    id="dynamic-download-btn"
                    href={btnHref}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '16px 40px',
                        background: 'var(--color-red-core)',
                        color: 'var(--color-text-DEFAULT)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        transition: 'background 0.3s',
                        animation: 'ctaGlow 2.5s ease-in-out infinite',
                        borderRadius: '100px',
                        textDecoration: 'none',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-red-bright)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--color-red-core)')}
                >
                    <span id="btn-text">{btnText}</span>
                </a>

                {/* .btn-ghost */}
                <a
                    href="/blog"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '14px 32px',
                        border: '1px solid var(--color-red-core)',
                        color: 'var(--color-red-bright)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        transition: 'background 0.3s, color 0.3s',
                        borderRadius: '100px',
                        textDecoration: 'none',
                        background: 'transparent',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = 'var(--color-red-core)'
                        e.currentTarget.style.color = 'var(--color-text-DEFAULT)'
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--color-red-bright)'
                    }}
                >
                    See how it works →
                </a>
            </div>

            {/* .hero-stats */}
            <div
                className="will-fade"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0,
                    flexWrap: 'wrap',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--color-text-mid)',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {STATS.map((stat, i) => (
                    <span
                        key={stat.label}
                        style={{
                            padding: '0 28px',
                            borderRight: i < STATS.length - 1 ? '1px solid var(--color-red-deep)' : 'none',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {stat.value} {stat.label}
                    </span>
                ))}
            </div>
        </section>
    )
}
