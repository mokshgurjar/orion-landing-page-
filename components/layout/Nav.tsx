'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_LINKS } from '@/lib/data'

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '18px 0',
                transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
                borderBottom: scrolled ? '1px solid var(--color-border-DEFAULT)' : '1px solid transparent',
                background: scrolled ? 'rgba(8, 4, 4, 0.7)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
            }}
        >
            <div
                style={{
                    width: '90%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {/* nav-logo */}
                <Link
                    href="#"
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 300,
                        fontSize: '26px',
                        color: 'var(--color-text-DEFAULT)',
                        letterSpacing: '0.02em',
                        textDecoration: 'none',
                    }}
                >
                    Orion<span style={{ color: 'var(--color-red-bright)' }}>.</span>
                </Link>

                {/* nav-links */}
                <ul
                    style={{
                        display: 'flex',
                        gap: '36px',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                    }}
                    className="max-md:hidden"
                >
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '12px',
                                    color: 'var(--color-text-mid)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                    transition: 'color 0.3s',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-text-DEFAULT)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-mid)')}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* nav-cta */}
                <Link
                    href="#download"
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        padding: '8px 22px',
                        border: '1px solid var(--color-red-core)',
                        color: 'var(--color-red-bright)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        transition: 'background 0.3s, color 0.3s',
                        display: 'inline-block',
                        borderRadius: '100px',
                        textDecoration: 'none',
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
                    Download Free
                </Link>
            </div>
        </nav>
    )
}
