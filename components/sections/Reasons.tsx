'use client'

import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import SectionTitle from '@/components/ui/SectionTitle'

// Original .reasons-grid: grid 3-col, gap 60px
// Mobile: grid 1-col, gap 48px
// .reason-num: display font, weight 300, 64px, red-deep, line-height 1, mb 16px
// .reason-title: display font, weight 400, 22px, mb 12px, text
// .reason-desc: 12px, text-mid, line-height 1.8

const REASONS = [
    {
        num: '01',
        title: 'Non-determinism is a defect.',
        desc: "Run the same prompt on the same codebase twice in any other AI editor. You'll get two different results. That makes testing, auditing, and trusting AI output impossible. Orion's pipeline is mathematically deterministic.",
    },
    {
        num: '02',
        title: 'Suggestions are not safety nets.',
        desc: "AI linters suggest. Orion enforces. Six independent validation layers — Syntax, Type, Security, Performance, Integration, Formal — must all pass before any file is written. One failure blocks the entire change.",
    },
    {
        num: '03',
        title: 'Undo is not rollback.',
        desc: "Ctrl+Z can't undo a cross-file refactor that corrupted shared state. Orion's Atomic Executor applies changes as immutable transactions. Every checkpoint is a complete, restorable snapshot.",
    },
]

export default function Reasons() {
    return (
        <section className="py-[120px] bg-bg-2">
            <div className="w-[90%] max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <SectionEyebrow>Why this exists</SectionEyebrow>
                    <SectionTitle subtitle="Three problems that every AI code editor ignores.">
                        We didn&apos;t build Orion to compete.<br />
                        We built it because the category is broken.
                    </SectionTitle>
                </motion.div>

                {/* reasons-grid: 3-col desktop, 1-col mobile, gap 60px/48px */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px] md:gap-[60px]">
                    {REASONS.map((reason, i) => (
                        <motion.div
                            key={reason.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
                        >
                            {/* reason-num: display, weight 300, 64px, red-deep, leading 1, mb 16px */}
                            <div className="font-display font-light text-[64px] text-red-deep leading-none mb-[16px]">
                                {reason.num}
                            </div>
                            {/* reason-title: display, weight 400, 22px, mb 12px */}
                            <h3 className="font-display font-[400] text-[22px] mb-[12px] text-text-DEFAULT">
                                {reason.title}
                            </h3>
                            {/* reason-desc: 12px, text-mid, leading 1.8 */}
                            <p className="text-[12px] text-text-mid leading-[1.8]">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
