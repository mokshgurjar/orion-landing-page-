'use client'

import { motion } from 'framer-motion'
import { TRUST_FACTS } from '@/lib/data'

// Original .trust-strip: bg-2, padding 48px 0 (no border — trust-strip is <section class="trust-strip">)
// Original section: padding 120px 0 — but trust-strip overrides with padding 48px 0
// .trust-row: flex, justify-center, align-items center, flex-wrap, gap 0
// .trust-item: flex, align-items center, gap 10px, padding 12px 32px, mono, 12px, text-mid, border-right 1px red-muted
// .trust-item:last-child: border-right none
// .star: red-bright, 12px
// Mobile: grid 2-col, trust-item border-right none, border-bottom 1px red-muted, justify-content center
//   :nth-child(2n): border-left 1px red-muted
//   :nth-child(n+5): border-bottom none

export default function TrustStrip() {
    return (
        <section className="bg-bg-2 py-[48px] [padding:48px_0]">
            <div className="w-[95%] max-w-[1400px] mx-auto overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <motion.div
                    className="flex justify-center items-center max-md:flex-wrap"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {TRUST_FACTS.map((fact, i) => (
                        <div
                            key={i}
                            className={[
                                'flex items-center gap-[10px] px-[32px] py-[12px]',
                                'font-mono text-[12px] text-text-mid whitespace-nowrap',
                                // desktop: border-right, last has none
                                i < TRUST_FACTS.length - 1
                                    ? 'border-r border-red-muted'
                                    : '',
                                // mobile overrides via max-md
                                'max-md:border-r-0 max-md:border-b max-md:border-red-muted max-md:justify-center',
                                // last item on mobile: no border-bottom
                                i === TRUST_FACTS.length - 1 ? 'max-md:border-b-0' : '',
                            ].join(' ')}
                        >
                            <span className="text-red-bright text-[12px]">✦</span>
                            {fact}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
