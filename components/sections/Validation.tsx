'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
    Code2,
    Binary,
    ShieldCheck,
    Gauge,
    Zap,
    Variable,
    CheckCircle2,
    ChevronRight,
} from 'lucide-react'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import SectionTitle from '@/components/ui/SectionTitle'

const easeOut: [number, number, number, number] = [0, 0, 0.2, 1]

interface Step {
    id: number
    title: string
    description: string
    icon: React.ReactNode
}

const steps: Step[] = [
    { id: 1, title: 'Syntax Check', description: 'Ensure parse-level correctness for every target language.', icon: <Code2 size={22} strokeWidth={2.5} /> },
    { id: 2, title: 'Type Resolution', description: 'Perform full static type resolution and inference checks.', icon: <Variable size={22} strokeWidth={2.5} /> },
    { id: 3, title: 'Security Scan', description: 'Detect OWASP-aligned vulnerability patterns.', icon: <ShieldCheck size={22} strokeWidth={2.5} /> },
    { id: 4, title: 'Performance Bench', description: 'Conduct complexity and regression benchmarking on every diff.', icon: <Gauge size={22} strokeWidth={2.5} /> },
    { id: 5, title: 'Integration Check', description: 'Verify cross-module contract and interface compatibility.', icon: <Zap size={22} strokeWidth={2.5} /> },
    { id: 6, title: 'Formal Proof', description: 'Mathematically prove that output satisfies HSG contracts.', icon: <Binary size={22} strokeWidth={2.5} /> },
]

/* ─── Single Isometric Stair (SVG) ─── */
function IsometricStair({ active }: { active: boolean }) {
    return (
        <svg
            width="200"
            height="120"
            viewBox="0 0 200 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-700 overflow-visible"
        >
            {/* Outer Box Body (Left & Right) */}
            <path
                d="M 20,50 L 20,65 L 100,105 L 100,90 Z"
                fill={active ? '#1e0a0a' : '#080303'}
                stroke="none"
                className="transition-all duration-700"
            />
            <path
                d="M 180,50 L 180,65 L 100,105 L 100,90 Z"
                fill={active ? '#2a0e0e' : '#0c0505'}
                stroke="none"
                className="transition-all duration-700"
            />
            {/* Bottom "V" Outline */}
            <path
                d="M 20,65 L 100,105 L 180,65"
                fill="none"
                stroke={active ? '#a31f1f' : '#1a1414'}
                strokeWidth="1"
                strokeLinejoin="round"
                className="transition-all duration-700"
            />

            {/* Inner Walls — gradient on upper face when inactive, dark when active */}
            <path
                d="M 100,22 L 156,50 L 156,62 L 100,34 Z"
                fill={active ? '#1e0a0a' : 'url(#sideWallRight)'}
                className="transition-all duration-700"
            />
            <path
                d="M 100,22 L 44,50 L 44,62 L 100,34 Z"
                fill={active ? '#2a0e0e' : 'url(#sideWallLeft)'}
                className="transition-all duration-700"
            />

            {/* Inset Floor */}
            <path
                d="M 100,34 L 156,62 L 100,84 L 44,62 Z"
                fill={active ? '#FF4D4D' : '#120505'}
                fillOpacity={active ? '0.45' : '1'}
                stroke="none"
                className="transition-all duration-700"
                clipPath="url(#insetClip)"
            />

            {/* Inner Floor Back Edges */}
            <path
                d="M 44,62 L 100,34 L 156,62"
                fill="none"
                stroke={active ? '#ff4d4d' : 'rgba(42,20,20,0)'}
                strokeWidth="1"
                strokeLinejoin="round"
                className="transition-all duration-700"
            />

            {/* Top Rim */}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 100,10 L 180,50 L 100,90 L 20,50 Z M 100,22 L 44,50 L 100,78 L 156,50 Z"
                fill={active ? '#3d1212' : '#110707'}
                stroke={active ? '#ff4d4d' : 'rgba(192,40,42,0.3)'}
                strokeWidth="1.2"
                strokeLinejoin="round"
                className="transition-all duration-700"
            />

            <defs>
                <clipPath id="insetClip">
                    <path d="M 100,10 L 180,50 L 100,90 L 20,50 Z" />
                </clipPath>
                <linearGradient id="stairGlowActive" x1="48" y1="38" x2="152" y2="86">
                    <stop offset="0%" stopColor="#ff4d4d" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#c0282a" stopOpacity="0" />
                </linearGradient>

                {/* Right inner wall gradient — fully vivid, deep red to warm maroon */}
                <linearGradient id="sideWallRight" x1="156" y1="62" x2="100" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#c0282a" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#5a1010" stopOpacity="0.4" />
                </linearGradient>

                {/* Left inner wall gradient — fully vivid, warm orange-red to deep red */}
                <linearGradient id="sideWallLeft" x1="44" y1="62" x2="100" y2="22" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#d44020" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#6a1a10" stopOpacity="0.4" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default function Validation() {
    const [activeStep, setActiveStep] = useState(0)

    // Auto-cycle through steps with delay
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    // Display steps in ascending order (1 at top, 6 at bottom)
    const displaySteps = [...steps]

    return (
        <section style={{ padding: '120px 0', background: 'var(--color-bg)' }}>
            <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: easeOut }}
                >
                    <SectionEyebrow>Stage 09 — Validation Gate</SectionEyebrow>
                    <SectionTitle subtitle="Most IDEs skip this entirely. In Planning Mode, Orion makes it mandatory.">
                        Six layers of proof before a file is touched.
                    </SectionTitle>
                </motion.div>

                {/* Staircase — ascending from top to bottom (1 to 6) */}
                <div className="relative mt-24 flex flex-col items-center gap-10 md:gap-8">
                    {displaySteps.map((step, index) => {
                        const originalIndex = step.id - 1
                        const isActive = activeStep === originalIndex
                        const isLeft = step.id % 2 === 0

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.6, delay: index * 0.12, ease: easeOut }}
                                className="relative flex flex-col md:flex-row md:items-center md:justify-center w-full max-w-4xl gap-6 md:gap-0"
                                onMouseEnter={() => setActiveStep(originalIndex)}
                            >
                                {/* Platform & Icon (Center) */}
                                <div className="relative shrink-0 z-10 mx-auto scale-100 md:scale-110 transition-transform duration-700">
                                    <div className="relative">
                                        <IsometricStair active={isActive} />

                                        {/* Icon lying flat on the isometric floor (3D tilt to match tile perspective) */}
                                        <div
                                            className={`absolute top-1/2 left-1/2 -translate-x-1/2 z-20 transition-all duration-700
                                                ${isActive
                                                    ? 'text-text scale-110 -translate-y-[45%]'
                                                    : 'text-text-mid scale-90 -translate-y-[62%]'
                                                }`}
                                            style={{
                                                perspective: '120px',
                                                filter: isActive ? 'drop-shadow(0 0 12px rgba(255, 77, 77, 0.8))' : 'none'
                                            }}
                                        >
                                            <div style={{
                                                transform: isActive
                                                    ? 'rotateX(50deg) rotateZ(35deg) translateZ(18px)'
                                                    : 'rotateX(50deg) rotateZ(35deg) translateZ(0px)',
                                                transformStyle: 'preserve-3d',
                                                transition: 'transform 0.7s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                {step.icon}
                                            </div>
                                        </div>

                                        {/* Active glow underneath */}
                                        {isActive && (
                                            <div
                                                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-40 h-10 rounded-full blur-2xl z-0"
                                                style={{ background: 'rgba(192,40,42,0.35)' }}
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Text — below tile on mobile, absolute side on md+ */}
                                <div className={`
                                    w-full px-6
                                    md:absolute md:top-1/2 md:-translate-y-1/2 md:px-0 md:w-64 lg:w-80
                                    ${isLeft ? 'md:right-1/2 md:mr-32 lg:mr-48' : 'md:left-1/2 md:ml-32 lg:ml-48'}
                                `}>
                                    <div className={`flex items-start gap-4 ${isLeft ? 'md:flex-row-reverse md:text-right' : 'flex-row text-left'}`}>
                                        {/* Numbered circle */}
                                        <div
                                            className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center font-mono text-base font-bold transition-all duration-700
                                                ${isActive
                                                    ? 'bg-red-core border-red-core text-text shadow-[0_0_24px_rgba(192,40,42,0.6)] scale-110'
                                                    : 'bg-transparent border-[#4a1f1f] text-text-low scale-100'
                                                }`}
                                        >
                                            {step.id}
                                        </div>
                                        <div className="pt-1 md:pt-2">
                                            <h3
                                                className={`font-mono text-sm uppercase tracking-[0.14em] mb-2 transition-colors duration-700
                                                    ${isActive ? 'text-text font-bold' : 'text-text-mid'}`}
                                            >
                                                {step.title}
                                            </h3>
                                            <p
                                                className={`font-mono text-xs leading-relaxed transition-colors duration-700
                                                    ${isActive ? 'text-text-mid' : 'text-text-low'}`}
                                            >
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Background decorative grid */}
                <div
                    className="absolute inset-0 -z-10 pointer-events-none opacity-[0.05]"
                    style={{
                        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent)',
                    }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                'linear-gradient(to right, rgba(192,40,42,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(192,40,42,0.1) 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                        }}
                    />
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: easeOut }}
                    className="mt-24 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bg-card border border-[#2a1414] text-text-mid font-mono text-[11px] uppercase tracking-[0.12em] hover:text-text transition-colors cursor-pointer group">
                        <CheckCircle2 className="w-4 h-4 text-red-core" />
                        <span>Deployment Ready — Pipeline Verified</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
