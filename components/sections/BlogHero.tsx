'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function BlogHero() {
    const containerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const el = containerRef.current
        if (!el) return
        el.querySelectorAll<HTMLElement>('.will-fade').forEach((node) => {
            node.classList.add('hero-fade')
        })
    }, [])

    return (
        <section
            ref={containerRef}
            style={{
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                padding: '140px 20px 80px',
                overflow: 'hidden',
            }}
        >
            {/* Radial glow — same token as Hero */}
            <div
                style={{
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -55%)',
                    background: 'radial-gradient(circle, rgba(192,40,42,0.10) 0%, rgba(192,40,42,0.03) 40%, transparent 70%)',
                    pointerEvents: 'none',
                    animation: 'glowPulse 4s ease-in-out infinite',
                    zIndex: 0,
                }}
            />

            {/* Back to home breadcrumb */}
            <div
                className="will-fade"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    marginBottom: '36px',
                }}
            >
                <Link
                    href="/"
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--color-text-low)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'color 0.3s',
                        borderBottom: '1px dashed var(--color-border-DEFAULT)',
                        paddingBottom: '2px',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-mid)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-low)')}
                >
                    ← Back to Home
                </Link>
            </div>

            {/* Eyebrow label */}
            <p
                className="will-fade"
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'var(--color-red-bright)',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                Deep Dive
            </p>

            {/* Main heading */}
            <h1
                className="will-fade"
                style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: 'clamp(48px, 5vw, 72px)',
                    lineHeight: 1.05,
                    marginBottom: '28px',
                    position: 'relative',
                    zIndex: 1,
                    maxWidth: '820px',
                }}
            >
                See how Orion{' '}
                <span style={{ color: 'var(--color-red-bright)', fontStyle: 'italic' }}>
                    actually
                </span>{' '}
                works.
            </h1>

            {/* Subtitle */}
            <p
                className="will-fade"
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--color-text-mid)',
                    lineHeight: 1.8,
                    maxWidth: '560px',
                    position: 'relative',
                    zIndex: 1,
                    marginBottom: '0',
                }}
            >
                The 15-stage pipeline. Two execution modes. MCP integration from the inside.
                <br />
                The reasons it works when nothing else does.
            </p>

            {/* Thin red divider line at the bottom */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '5%',
                    right: '5%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--color-border-DEFAULT), transparent)',
                }}
            />
        </section>
    )
}
