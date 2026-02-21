'use client'

import { motion } from 'framer-motion'
import { STATS } from '@/lib/data'

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
}

export default function Hero() {
    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center text-center relative px-5 pt-[120px] pb-[80px] overflow-hidden"
            variants={container}
            initial="hidden"
            animate="show"
        >
            {/* Red glow bloom — original: 700x700, translate(-50%, -55%), radial-gradient */}
            <div className="absolute w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] bg-[radial-gradient(circle,rgba(192,40,42,0.12)_0%,rgba(192,40,42,0.04)_40%,transparent_70%)] pointer-events-none animate-glow-pulse z-0" />

            {/* h1 — original: clamp(72px,5vw,80px), weight 300, line-height 1.05, mb 52px */}
            <motion.h1
                variants={item}
                className="font-display font-light text-[clamp(72px,5vw,80px)] leading-[1.05] mb-[52px] relative z-[1] max-md:text-[clamp(40px,10vw,72px)]"
            >
                Built by developers.<br />
                <span className="text-red-bright italic">Evolved</span> by the community.
            </motion.h1>

            {/* Buttons — original: gap 16px, mb 24px */}
            <motion.div
                variants={item}
                className="flex gap-[16px] justify-center flex-wrap mb-[24px] relative z-[1]"
            >
                {/* btn-primary: padding 14px 32px, bg red-core, 13px, uppercase, tracking 0.06em, pill, ctaGlow animation */}
                <a href="#download" className="inline-flex items-center gap-2 px-[32px] py-[14px] bg-red-core text-text-DEFAULT font-mono text-[13px] uppercase tracking-[0.06em] rounded-full transition-colors duration-300 animate-pulse-glow hover:bg-red-bright">
                    ↓ Download for Free
                </a>
                {/* btn-ghost: padding 14px 32px, border 1px red-core, color red-bright, pill */}
                <a href="#features" className="inline-flex items-center gap-2 px-[32px] py-[14px] border border-red-core text-red-bright font-mono text-[13px] uppercase tracking-[0.06em] rounded-full transition-all duration-300 hover:bg-red-core hover:text-text-DEFAULT">
                    See how it works →
                </a>
            </motion.div>

            {/* Version — original: 11px, text-low, mb 80px */}
            <motion.p
                variants={item}
                className="font-mono text-[11px] text-text-low mb-[80px] relative z-[1]"
            >
                {process.env.NEXT_PUBLIC_APP_VERSION || 'v2.0.1'} · Free forever · macOS · Windows · Linux
            </motion.p>

            {/* Stats — original: 12px, text-mid, stat padding 0 28px, border-right red-deep */}
            <motion.div
                variants={item}
                className="flex items-center justify-center flex-wrap font-mono text-[12px] text-text-mid relative z-[1] max-md:flex-col max-md:gap-[8px]"
            >
                {STATS.map((stat, i) => (
                    <span
                        key={stat.label}
                        className={`px-[28px] whitespace-nowrap ${i < STATS.length - 1
                            ? 'border-r border-red-deep max-md:border-r-0 max-md:border-b max-md:border-red-deep max-md:pb-[8px]'
                            : ''
                            }`}
                    >
                        {stat.value} {stat.label}
                    </span>
                ))}
            </motion.div>
        </motion.section>
    )
}
