'use client'

import { motion } from 'framer-motion'

// Original .quote-section: text-align center, padding 140px 20px, position relative, overflow hidden
// .quote-deco: absolute, top 50%, left 50%, translate(-50%,-60%), display font, 320px, red-muted, opacity 0.3, line-height 1
//   Mobile: 180px
// .quote-text: display font, weight 300, clamp(24px,4vw,44px), line-height 1.4, max-width 800px, margin 0 auto 32px, relative z-1, font-style italic
// .quote-attribution: mono, 12px, text-low, mb 40px, relative z-1
// btn-ghost: inline-flex, align-items center, gap 8px, padding 14px 32px, border 1px red-core, color red-bright, mono, 13px, uppercase, tracking 0.06em, pill

export default function Quote() {
    return (
        <section className="text-center py-[140px] px-[20px] relative overflow-hidden">
            {/* decorative quote mark */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] font-display text-[320px] max-md:text-[180px] text-red-muted opacity-30 leading-none pointer-events-none select-none"
                aria-hidden="true"
            >
                &ldquo;
            </div>

            <motion.div
                className="relative z-[1]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8 }}
            >
                {/* quote text: display, 300, clamp(24px,4vw,44px), leading 1.4, max-w 800px, italic, mb 32px */}
                <p className="font-display font-light text-[clamp(24px,4vw,44px)] leading-[1.4] max-w-[800px] mx-auto mb-[32px] italic text-text-DEFAULT">
                    The first tool that doesn&apos;t ask me to trust the AI blind.
                    I can see every decision. I can roll back anything. That&apos;s not a feature — that&apos;s engineering.
                </p>

                {/* quote attribution: mono, 12px, text-low, mb 40px */}
                <p className="font-mono text-[12px] text-text-low mb-[40px]">
                    — Early access developer, YC W25
                </p>

                {/* btn-ghost: inline-flex, gap 8px, padding 14px 32px, border 1px red-core, red-bright, mono, 13px, uppercase, tracking 0.06em, pill */}
                <a
                    href="#download"
                    className="inline-flex items-center gap-[8px] px-[32px] py-[14px] border border-red-core text-red-bright font-mono text-[13px] uppercase tracking-[0.06em] rounded-full transition-all duration-300 hover:bg-red-core hover:text-text-DEFAULT"
                >
                    Get early access →
                </a>
            </motion.div>
        </section>
    )
}
