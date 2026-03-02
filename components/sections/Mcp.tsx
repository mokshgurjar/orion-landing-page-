'use client'

import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import SectionTitle from '@/components/ui/SectionTitle'

const pillars = [
    {
        num: '01',
        label: 'UI-Driven Store',
        desc: 'Browse, search, and install MCP servers from inside the Agent tab. No config file editing for standard setups. One-click install with credential validation.',
    },
    {
        num: '02',
        label: 'Git-Scoped Config',
        desc: '.mcp.json committed to your repo so your whole team shares the same MCP servers automatically. Two scopes: project-level and global user-level. Modelled on Claude Code\'s approach.',
    },
    {
        num: '03',
        label: 'Pipeline-Integrated Dispatcher',
        desc: 'A dedicated MCP Dispatcher handles all tool calls inside the pipeline. Per-agent tool isolation — a Docs agent cannot trigger a database migration. Full audit log of every call: server, tool, input, output, latency, agent ID.',
    },
]

export default function Mcp() {
    return (
        <section id="mcp" className="py-[120px]">
            <div className="w-[90%] max-w-[1200px] mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <SectionEyebrow>MCP — Model Context Protocol</SectionEyebrow>
                    <SectionTitle subtitle="Antigravity has an MCP Store. Claude Code has .mcp.json scoping. Orion has both — plus something neither of them has.">
                        MCP isn&apos;t a config file. It&apos;s inside the pipeline.
                    </SectionTitle>
                </motion.div>

                {/* Quote block */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    style={{
                        border: '1px solid var(--color-border-DEFAULT)',
                        padding: '32px 36px',
                        margin: '0 0 80px 0',
                        background: 'var(--color-bg-card)',
                    }}
                >
                    <p
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '13px',
                            color: 'var(--color-text-DEFAULT)',
                            lineHeight: 1.8,
                            marginBottom: '0',
                        }}
                    >
                        &ldquo;MCP tool calls are formally planned in the IISG contract and user-approved before any external system is touched. Neither Antigravity nor Claude Code offers this.&rdquo;
                    </p>
                </motion.blockquote>

                {/* Three pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ border: '1px solid var(--color-border-DEFAULT)' }}>
                    {pillars.map((pillar, i) => (
                        <motion.div
                            key={pillar.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: i * 0.08 }}
                            className="group"
                            style={{
                                background: 'var(--color-bg-card)',
                                borderRight: i < pillars.length - 1 ? '1px solid var(--color-border-DEFAULT)' : 'none',
                                padding: '36px 28px',
                                transition: 'background 0.3s',
                                cursor: 'default',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-red-dim)' }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--color-bg-card)' }}
                        >
                            {/* Number */}
                            <p
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    fontWeight: 300,
                                    fontSize: '48px',
                                    color: 'var(--color-red-deep)',
                                    lineHeight: 1,
                                    marginBottom: '12px',
                                }}
                            >
                                {pillar.num}
                            </p>

                            {/* Label */}
                            <p
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '12px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-text-DEFAULT)',
                                    marginBottom: '10px',
                                }}
                            >
                                {pillar.label}
                            </p>

                            {/* Description */}
                            <p
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '11px',
                                    color: 'var(--color-text-mid)',
                                    lineHeight: 1.7,
                                }}
                            >
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
