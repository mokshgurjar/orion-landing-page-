import Link from 'next/link'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

// Original .footer: border-top 1px red-deep, padding 40px 0
// .container: flex, align-items center, justify-content space-between
// .footer-logo: display font, weight 300, 22px, text
// .footer-logo span: red-bright
// .footer-links: flex, gap 28px, list-style none
// .footer-links a: mono, 11px, uppercase, tracking 0.08em, text-mid, transition color 0.3s
//   :hover: text
// .footer-copy: mono, 11px, text-low
// Mobile: container flex-col, gap 20px, text-center; links flex-wrap justify-center

const FOOTER_LINKS = [
    { label: 'Docs', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Changelog', href: '#' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '#' },
] as const

export default function Footer() {
    return (
        <footer className="relative border-t border-red-deep py-[40px] overflow-hidden">
            <div className="absolute inset-0 z-0 bg-bg opacity-70">
                <ShootingStars />
                <StarsBackground />
            </div>
            <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto flex items-center justify-between max-md:flex-col max-md:gap-[20px] max-md:text-center">
                {/* footer-logo: display, weight 300, 22px */}
                <div className="font-display font-light text-[22px] text-text-DEFAULT">
                    Orion<span className="text-red-bright">.</span>
                </div>

                {/* footer-links: gap 28px */}
                <ul className="flex gap-[28px] list-none max-md:flex-wrap max-md:justify-center">
                    {FOOTER_LINKS.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="font-mono text-[11px] uppercase tracking-[0.08em] text-text-mid transition-colors duration-300 hover:text-text-DEFAULT"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* footer-copy: mono, 11px, text-low */}
                <div className="font-mono text-[11px] text-text-low">
                    © 2026 Orion IDE
                </div>
            </div>
        </footer>
    )
}
