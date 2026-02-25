'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/lib/data'

type NavLabel = typeof NAV_LINKS[number]['label'];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)
    const [activeTab, setActiveTab] = useState<NavLabel>(NAV_LINKS[0].label)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60)
            
            // ScrollSpy logic mapping refs to sections
            const navSections = NAV_LINKS.map(link => link.href.substring(1)).filter(Boolean); // e.g. 'features', 'pipeline', etc
            const extraSections = ['execution-modes', 'mcp'];
            const allSections = [...navSections, ...extraSections];
            
            let maxTop = -Infinity;
            let currentTab: NavLabel | null = null;

            for (const section of allSections) {
                const element = document.getElementById(section);
                if (element) {
                    // Find the section whose top is closest to the 300px threshold (without going strictly below it).
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 300 && rect.top > maxTop) {
                        maxTop = rect.top;
                        
                        // Override currentTab to 'Features' for extra sections
                        if (extraSections.includes(section)) {
                            currentTab = 'Features';
                        } else {
                            const match = NAV_LINKS.find(link => link.href === `#${section}`);
                            if (match) currentTab = match.label as NavLabel;
                        }
                    }
                }
            }
            
            // If we're at or near the very top of the page (e.g., above the feature section), lock to Home
            if (window.scrollY < 400) {
                currentTab = NAV_LINKS[0].label; // "Home"
            } else if (!currentTab) {
                currentTab = NAV_LINKS[0].label;
            }
            
            setActiveTab(prev => currentTab ? currentTab : prev);
        }

        // Add scroll listener
        window.addEventListener('scroll', handleScroll, { passive: true })
        // Trigger once on mount to set initial correct tab if loaded mid-page
        handleScroll();
        
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
                <ul className="max-md:hidden flex items-center gap-9 m-0 p-0 list-none">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeTab === link.label;
                        
                        return (
                            <li key={link.href} className="relative">
                                <Link
                                    href={link.href}
                                    onClick={() => setActiveTab(link.label)}
                                    className={`relative px-1 py-4 font-mono text-[12px] uppercase tracking-[0.08em] transition-colors outline-none block ${
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
