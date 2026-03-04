'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Eye, Puzzle, Lightbulb, Building, ClipboardList,
    BookOpen, Users, Network, ShieldCheck, Timer,
    Atom, HardDrive, Brain, Wrench, History, Database,
} from 'lucide-react'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import SectionTitle from '@/components/ui/SectionTitle'

const easeOut: [number, number, number, number] = [0, 0, 0.2, 1]

const pipelineNodes = [
    { id: 1, title: 'Intent Interpreter', desc: 'Understands the prompt\'s core meaning', color: '#facc15', icon: Eye },
    { id: 2, title: 'Stack Resolver', desc: 'Identifies necessary components', color: '#fb923c', icon: Puzzle },
    { id: 3, title: 'IISG Generator', desc: 'Creates the initial structured plan', color: '#f87171', icon: Lightbulb },
    { id: 4, title: 'Architect', desc: 'Designs the high-level system structure', color: '#f472b6', icon: Building },
    { id: 5, title: 'Planner', desc: 'Outlines every execution step', color: '#c084fc', icon: ClipboardList },
    { id: 6, title: 'Context Curator', desc: 'Gathers all relevant context', color: '#818cf8', icon: BookOpen },
    { id: 7, title: 'Parallel Roles', desc: 'Distributes tasks across agents', color: '#67e8f9', icon: Users },
    { id: 8, title: 'Integrator', desc: 'Merges parallel outputs into one', color: '#4ade80', icon: Network },
    { id: 9, title: 'Validation Gate', desc: 'Six-layer proof before files are touched', color: '#34d399', icon: ShieldCheck },
    { id: 10, title: 'Checkpoint Manager', desc: 'Monitors pipeline health and progress', color: '#d1d5db', icon: Timer },
    { id: 11, title: 'Atomic Executor', desc: 'Executes changes in minimal safe units', color: '#f1f5f9', icon: Atom },
    { id: 12, title: 'Memory & Logging', desc: 'Persists all data and events', color: '#94a3b8', icon: HardDrive },
    { id: 13, title: 'Pattern Recognition', desc: 'Identifies failure trends across runs', color: '#94a3b8', icon: Brain },
    { id: 14, title: 'Failure Analysis', desc: 'Root-cause investigation on errors', color: '#ef4444', icon: Wrench },
    { id: 15, title: 'Rollback Engine', desc: 'Reverts to last verified good state', color: '#f97316', icon: History },
]

// Stable, deterministic "star" positions inside the card
const bgStars = Array.from({ length: 55 }).map((_, i) => ({
    id: i,
    top: `${((i * 137.5) % 100).toFixed(2)}%`,
    left: `${((i * 97.3) % 100).toFixed(2)}%`,
    size: (i % 3) + 1,
    delay: (i % 5) * 0.5,
}))

export default function Pipeline() {
    const [hoveredNode, setHoveredNode] = useState<number | null>(null)
    const [activeNode, setActiveNode] = useState<number>(1)

    // Auto-cycle the active pulse
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveNode(prev => (prev % pipelineNodes.length) + 1)
        }, 1800)
        return () => clearInterval(timer)
    }, [])

    const radius = 260 // Distance of nodes from center

    return (
        <section id="pipeline" className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Phase */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: easeOut }}
                >
                    <SectionEyebrow>The Core Pipeline</SectionEyebrow>
                    <SectionTitle
                        subtitle="In order. No shortcuts. The pipeline is the product."
                    >
                        Every Planning Mode prompt flows through all 15 stages.
                    </SectionTitle>
                </motion.div>

                {/* Orbital Visualization Phase */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
                    className="relative mt-20 flex items-center justify-center -mb-8"
                >
                    <motion.div
                        className="relative flex items-center justify-center pointer-events-none"
                        style={{ width: '100%', maxWidth: 1100, height: 650 }}
                        animate={{ y: [-8, 8, -8] }}
                        transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
                    >
                        <div className="absolute inset-0 pointer-events-auto">
                            {/* Card background */}
                            <div
                                className="absolute inset-0 rounded-[3rem] border border-white/8 bg-black/55 backdrop-blur-md"
                                style={{ boxShadow: '0 0 100px rgba(0,0,0,0.8), inset 0 0 80px rgba(0,0,0,0.5)' }}
                            />

                            {/* Inside Star field */}
                            <div className="absolute inset-0 rounded-[3rem] overflow-hidden">
                                {bgStars.map(star => (
                                    <motion.div
                                        key={star.id}
                                        className="absolute rounded-full bg-white"
                                        style={{ top: star.top, left: star.left, width: star.size, height: star.size }}
                                        animate={{ opacity: [0.08, 0.5, 0.08] }}
                                        transition={{ duration: 4 + star.delay, delay: star.delay, repeat: Infinity }}
                                    />
                                ))}
                            </div>

                            {/* Background Orbital track rings */}
                            <div
                                className="absolute rounded-full border border-white/[0.05] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{ width: radius * 2, height: radius * 2 }}
                            />
                            <div
                                className="absolute rounded-full border border-white/[0.02] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{ width: radius * 2 + 60, height: radius * 2 + 60 }}
                            />

                            {/* Rotating dashed ring accent */}
                            <motion.div
                                className="absolute rounded-full pointer-events-none left-1/2 top-1/2"
                                style={{
                                    width: radius * 2,
                                    height: radius * 2,
                                    marginLeft: -radius,
                                    marginTop: -radius,
                                    border: '1px dashed rgba(255,255,255,0.04)',
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 100, ease: 'linear', repeat: Infinity }}
                            />

                            {/* Central Orion Database Core */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center gap-2">
                                {/* Outer radar pulse ring */}
                                <motion.div
                                    className="absolute rounded-full border border-red-900/20"
                                    style={{ width: 140, height: 140 }}
                                    animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.8, 0.4] }}
                                    transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
                                />
                                <div
                                    className="w-[72px] h-[72px] rounded-full border border-red-900/50 bg-black/80 flex items-center justify-center"
                                    style={{ boxShadow: '0 0 50px rgba(192,40,42,0.3), inset 0 0 20px rgba(0,0,0,0.8)' }}
                                >
                                    <Database size={28} strokeWidth={1.2} className="text-red-500" />
                                </div>
                                <span className="text-[9px] tracking-[0.3em] uppercase text-white/25 font-mono mt-1 w-max">
                                    Orion Core
                                </span>
                            </div>

                            {/* The 15 Orbital Nodes */}
                            {pipelineNodes.map((node, index) => {
                                // Math for circular placement
                                const angle = (index / pipelineNodes.length) * 2 * Math.PI - Math.PI / 2
                                const x = Math.cos(angle) * radius
                                const y = Math.sin(angle) * radius

                                const isRight = x >= -0.1
                                const Icon = node.icon
                                const isHov = hoveredNode === node.id
                                const isAct = activeNode === node.id
                                const lit = isHov || isAct

                                return (
                                    <motion.div
                                        key={node.id}
                                        className={`absolute cursor-pointer transition-all duration-300 ${lit ? 'z-50' : 'z-20'}`}
                                        style={{
                                            left: `calc(50% + ${x}px)`,
                                            top: `calc(50% + ${y}px)`,
                                            marginLeft: '-20px', // Exact center offsets
                                            marginTop: '-20px',  // Exact center offsets
                                            width: '40px',
                                            height: '40px'
                                        }}
                                        onHoverStart={() => setHoveredNode(node.id)}
                                        onHoverEnd={() => setHoveredNode(null)}
                                    >
                                        {/* Node Icon Circle Button */}
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center rounded-full border bg-[#080808] backdrop-blur-sm"
                                            style={{
                                                borderColor: lit ? node.color : 'rgba(255,255,255,0.1)',
                                                color: node.color,
                                                boxShadow: lit
                                                    ? `0 0 18px ${node.color}50, 0 0 50px ${node.color}18`
                                                    : 'none',
                                                transition: 'border-color 0.4s, box-shadow 0.4s',
                                            }}
                                            animate={isAct ? { scale: [1, 1.12, 1] } : { scale: 1 }}
                                            transition={{ duration: 0.7 }}
                                        >
                                            <Icon size={16} strokeWidth={2} />

                                            {/* ID Badge circle (01, 02...) */}
                                            <div
                                                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-mono font-bold bg-black border"
                                                style={{
                                                    borderColor: lit ? node.color : 'rgba(255,255,255,0.15)',
                                                    color: lit ? node.color : 'rgba(255,255,255,0.3)',
                                                    transition: 'color 0.4s, border-color 0.4s',
                                                }}
                                            >
                                                {node.id}
                                            </div>

                                            {/* Active fast-pulse ring */}
                                            {isAct && (
                                                <motion.div
                                                    className="absolute inset-0 rounded-full pointer-events-none"
                                                    style={{ border: `1px solid ${node.color}` }}
                                                    animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                                                    transition={{ duration: 1.3, repeat: Infinity }}
                                                />
                                            )}
                                        </motion.div>

                                        {/* Hover Details Tooltip */}
                                        <AnimatePresence>
                                            {lit && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: isRight ? -6 : 6, scale: 0.94 }}
                                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.94 }}
                                                    transition={{ duration: 0.18 }}
                                                    className={`absolute top-1/2 -translate-y-1/2 w-48 pointer-events-none z-30 ${isRight ? 'left-full ml-4' : 'right-full mr-4 text-right'}`}
                                                >
                                                    <div
                                                        className="px-3 py-2.5 rounded-xl border bg-black/95 backdrop-blur-md shadow-2xl"
                                                        style={{ borderColor: `${node.color}30` }}
                                                    >
                                                        <p
                                                            className="text-[10px] font-bold tracking-wider font-mono uppercase"
                                                            style={{ color: node.color }}
                                                        >
                                                            {String(node.id).padStart(2, '0')} — {node.title}
                                                        </p>
                                                        <p className="text-[10px] text-white/40 mt-1 leading-relaxed font-mono">
                                                            {node.desc}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
