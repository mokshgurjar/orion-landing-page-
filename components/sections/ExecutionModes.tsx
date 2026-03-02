'use client'

import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import SectionTitle from '@/components/ui/SectionTitle'

const planningFeatures = [
    'Intent Interpreter → IISG Contract',
    '6 Parallel Agents with MCP access',
    '6-Layer Validation Gate',
    'Atomic Checkpoint + Rollback Engine',
    'Full audit log of every decision',
]

const fastFeatures = [
    'Intent → Stack Resolve → Context',
    'Single Agent (Haiku / GPT-4o mini)',
    'Syntax + Type validation only',
    'Git diff snapshot for lightweight undo',
    'MCP tools remain available',
]

export default function ExecutionModes() {
    return (
        <section id="execution-modes" className="py-[120px]">
            <div className="w-[90%] max-w-[1200px] mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <SectionEyebrow>Execution Modes</SectionEyebrow>
                    <SectionTitle subtitle="A permanent toggle. Orion never auto-switches.">
                        You choose how Orion runs.
                    </SectionTitle>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">

                    {/* Planning Mode Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, delay: 0.08 }}
                        style={{
                            border: '1px solid var(--color-border-DEFAULT)',
                            background: 'var(--color-bg-card)',
                            padding: '32px',
                        }}
                    >
                        {/* Card header row */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '24px',
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--color-text-mid)',
                                        marginBottom: '4px',
                                    }}
                                >
                                    Planning Mode
                                </p>
                                <p
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '11px',
                                        color: 'var(--color-text-low)',
                                    }}
                                >
                                    Default
                                </p>
                            </div>
                            <span
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '11px',
                                    color: 'var(--color-text-mid)',
                                    border: '1px solid var(--color-border-DEFAULT)',
                                    padding: '4px 10px',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                45-60 sec
                            </span>
                        </div>

                        {/* Title */}
                        <h3
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 300,
                                fontSize: 'clamp(22px, 3vw, 32px)',
                                lineHeight: 1.2,
                                color: 'var(--color-text-DEFAULT)',
                                marginBottom: '16px',
                            }}
                        >
                            Every safeguard. Full power.
                        </h3>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '12px',
                                color: 'var(--color-text-mid)',
                                lineHeight: 1.7,
                                marginBottom: '28px',
                            }}
                        >
                            All 15 pipeline stages. IISG contracts generated and user-reviewed
                            before any code is written. Six agents execute in parallel with full
                            MCP tool access. All 6 validation layers run. Full atomic checkpoint
                            created. For features, refactors, and anything where correctness
                            matters more than speed.
                        </p>

                        {/* Feature list */}
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {planningFeatures.map((f) => (
                                <li
                                    key={f}
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '12px',
                                        color: 'var(--color-text-mid)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                    }}
                                >
                                    <span style={{ color: 'var(--color-red-bright)', flexShrink: 0 }}>✦</span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Fast Mode Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, delay: 0.16 }}
                        style={{
                            border: '1px solid var(--color-border-DEFAULT)',
                            background: 'var(--color-bg-card)',
                            padding: '32px',
                        }}
                    >
                        {/* Card header row */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '24px',
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '11px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-text-mid)',
                                }}
                            >
                                Fast Mode
                            </p>
                            <span
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '11px',
                                    color: 'var(--color-text-mid)',
                                    border: '1px solid var(--color-border-DEFAULT)',
                                    padding: '4px 10px',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                4-10 sec
                            </span>
                        </div>

                        {/* Title */}
                        <h3
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontWeight: 300,
                                fontSize: 'clamp(22px, 3vw, 32px)',
                                lineHeight: 1.2,
                                color: 'var(--color-text-DEFAULT)',
                                marginBottom: '16px',
                            }}
                        >
                            Speed over ceremony.
                        </h3>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '12px',
                                color: 'var(--color-text-mid)',
                                lineHeight: 1.7,
                                marginBottom: '28px',
                            }}
                        >
                            A condensed 6-stage pipeline with a lighter model (Claude Haiku or
                            GPT-4o mini). Skips IISG, parallel agents, and four validation
                            layers. MCP tools remain available. No plan preview — executes
                            immediately. Git diff snapshot saved for lightweight undo. For quick
                            edits where speed matters.
                        </p>

                        {/* Feature list */}
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {fastFeatures.map((f) => (
                                <li
                                    key={f}
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '12px',
                                        color: 'var(--color-text-mid)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                    }}
                                >
                                    <span style={{ color: 'var(--color-red-bright)', flexShrink: 0 }}>✦</span>
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
