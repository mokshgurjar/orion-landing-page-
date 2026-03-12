'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/lib/data'
import OrionLogo from '@/components/ui/orion-logo'

type NavLabel = typeof NAV_LINKS[number]['label'];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    // Derive active tab from current route
    const activeTab = (NAV_LINKS.find(link => link.href === pathname)?.label ?? NAV_LINKS[0].label) as NavLabel

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
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
                    style={{ color: 'var(--color-text-DEFAULT)', display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                    className="hover:text-red-bright transition-colors duration-300"
                >
                    <OrionLogo width={110} />
                </Link>

                {/* nav-links */}
                <ul className="max-md:hidden flex items-center gap-9 m-0 p-0 list-none">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeTab === link.label;
                        
                        return (
                            <li key={link.href} className="relative">
                                <Link
                                    href={link.href}
                                    className={`relative px-1 py-4 font-ui text-[12px] uppercase tracking-[0.08em] transition-colors outline-none block ${
                                        isActive ? "text-text-DEFAULT" : "text-text-mid hover:text-text-DEFAULT"
                                    }`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    {link.label}
                                    
                                    {/* The Sliding Underline */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabUnderline"
                                            className="absolute bottom-1 left-0 right-0 h-[2px] border-b-2 border-dashed border-red-bright z-10"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* nav-cta */}
                <Link
                    href="/auth"
                    className="btn-nav transition-all duration-200 ease-in-out"
                    style={{
                        fontFamily: 'var(--font-ui)',
                        fontSize: '12px',
                        padding: '8px 22px',
                        border: '1px solid var(--color-red-core)',
                        color: 'var(--color-red-bright)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        display: 'inline-block',
                        borderRadius: '100px',
                        textDecoration: 'none',
                    }}
                >
                    Stay Informed
                </Link>
            </div>
        </nav>
    )
}
