'use client'

import { motion, useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import SmoothDrawer from '@/components/ui/smooth-drawer'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import OrionConstellation from '@/components/ui/orion-constellation'

const QUOTE = 'The same input on the same codebase always produces the same output \u2014 a property no other AI code editor today can claim.'

export default function Quote() {
    const [isConstellationSettled, setIsConstellationSettled] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    return (
        <section ref={containerRef} className="py-24 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.9, ease: [0, 0, 0.2, 1], delay: 0.1 }}
                    className="relative"
                >
                    {/* ── Pipeline-style card ── */}
                    <div
                        className="relative rounded-[3rem] border border-white/[0.08] bg-black/55 backdrop-blur-md overflow-hidden px-10 pt-16 pb-1 text-center"
                        style={{ boxShadow: '0 0 100px rgba(0,0,0,0.8), inset 0 0 80px rgba(0,0,0,0.5)' }}
                    >
                        <OrionConstellation 
                            onSettled={() => setIsConstellationSettled(true)} 
                            startTrigger={isInView}
                        />

                        {/* Faint grid texture */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
                                backgroundSize: '48px 48px',
                                opacity: 0.015,
                            }}
                            aria-hidden="true"
                        />

                        {/* Corner bracket — top-left */}
                        <div className="absolute top-8 left-8 pointer-events-none" aria-hidden="true" style={{ opacity: 0.35 }}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M36 1.5 H13 A11.5 11.5 0 0 0 1.5 13 V36" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        {/* Corner bracket — bottom-right */}
                        <div className="absolute bottom-8 right-8 pointer-events-none" aria-hidden="true" style={{ opacity: 0.35 }}>
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M0 34.5 H23 A11.5 11.5 0 0 0 34.5 23 V0" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>

                        {/* Quote text */}
                        <TextGenerateEffect
                            words={QUOTE}
                            className="mb-10"
                            filter={true}
                            duration={1.2}
                            startTrigger={isConstellationSettled}
                            style={{
                                fontFamily: 'var(--font-tenor), serif',
                                fontWeight: 400,
                                fontSize: 'clamp(20px, 2.8vw, 36px)',
                                lineHeight: 1.65,
                                letterSpacing: '0.025em',
                                color: '#e2ddd6',
                            }}
                        />

                        {/* Attribution */}
                        <motion.div
                            className="flex items-center justify-center gap-4 mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isConstellationSettled ? 1 : 0 }}
                            transition={{ delay: 0.8, duration: 1.2 }}
                        >
                            <span style={{ display: 'block', width: '28px', height: '1px', background: '#c0392b', flexShrink: 0 }} />
                            <span
                                style={{
                                    fontFamily: 'var(--font-space-mono), monospace',
                                    fontSize: '9px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.22em',
                                    color: '#4a4040',
                                }}
                            >
                                Production Team, Orion
                            </span>
                        </motion.div>

                    </div>
                </motion.div>

                {/* CTA — separate, below the card */}
                <motion.div
                    className="flex justify-center mt-24"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.7, duration: 0.6 }}
                >
                    <SmoothDrawer />
                </motion.div>
            </div>
        </section>
    )
}
