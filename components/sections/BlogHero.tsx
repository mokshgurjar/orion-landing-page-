'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function BlogHero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 50, damping: 15 },
        },
    }

    return (
        <section className="relative flex flex-col items-center justify-center text-center overflow-hidden w-full min-h-[60vh] pt-[160px] pb-[80px] px-6">
            {/* Atmospheric Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[800px] h-[800px] rounded-full bg-red-core/10 blur-[120px] pointer-events-none -z-10 animate-pulse-glow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[400px] h-[400px] rounded-full bg-red-bright/5 blur-[80px] pointer-events-none -z-10" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"
            >
                {/* Back to home breadcrumb */}
                <motion.div variants={itemVariants} className="mb-12">
                    <Link
                        href="/"
                        className={cn(
                            "group inline-flex items-center gap-2 px-4 py-2 rounded-full",
                            "border border-border-DEFAULT bg-bg-card",
                            "transition-all duration-300 hover:border-red-deep hover:bg-red-dim",
                            "shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                        )}
                    >
                        <ArrowLeft className="w-3.5 h-3.5 text-text-low group-hover:text-red-bright transition-colors" />
                        <span className="font-ui text-[11px] uppercase tracking-[0.2em] text-text-low group-hover:text-text-mid transition-colors mt-[1px]">
                            Back to Home
                        </span>
                    </Link>
                </motion.div>

                {/* Eyebrow label */}
                <motion.p
                    variants={itemVariants}
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-red-bright mb-6"
                >
                    Deep Dive
                </motion.p>

                {/* Main heading */}
                <motion.h1 
                    variants={itemVariants}
                    className="text-glow-red"
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
                    See how {' '}
                    <span className="text-gradient-red" style={{ fontStyle: 'italic', fontFamily: 'var(--font-display)', display: 'inline-block' }}>
                        Orion
                    </span>{' '}
                    works.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="font-ui text-[14px] text-text-mid leading-relaxed max-w-2xl text-balance"
                >
                    The 15-stage pipeline. Two execution modes. MCP integration from the inside.
                    <br className="hidden sm:block" />
                    The reasons it works when nothing else does.
                </motion.p>
            </motion.div>

            {/* Thin red divider line at the bottom */}
            <div className="absolute bottom-0 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-border-red/50 to-transparent" />
        </section>
    )
}
