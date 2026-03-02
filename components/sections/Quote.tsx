'use client'

import { motion } from 'framer-motion'

// Original .quote-section: text-align center, padding 140px 20px, position relative, overflow hidden
// .quote-deco: absolute, top 50%, left 50%, translate(-50%,-60%), display font, 320px, red-muted, opacity 0.3, line-height 1
//   Mobile: 180px
// .quote-text: display font, weight 300, clamp(24px,4vw,44px), line-height 1.4, max-width 800px, margin 0 auto 32px, relative z-1, font-style italic
// .quote-attribution: mono, 12px, text-low, mb 40px, relative z-1
// btn-ghost: inline-flex, align-items center, gap 8px, padding 14px 32px, border 1px red-core, color red-bright, mono, 13px, uppercase, tracking 0.06em, pill

import SmoothDrawer from '@/components/ui/smooth-drawer'

export default function Quote() {
    return (
        <section className="text-center py-[140px] px-[20px] relative overflow-hidden">

            <motion.div
                className="relative z-[1]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8 }}
            >
                {/* quote text: display, 300, clamp(24px,4vw,44px), leading 1.4, max-w 800px, italic, mb 32px */}
                <p className="font-display font-light text-[clamp(24px,4vw,44px)] leading-[1.4] max-w-[800px] mx-auto mb-[32px] italic text-text-DEFAULT">
                    "The same input on the same codebase always produces the same output — a property no other AI code editor today can claim."
                </p>

                {/* quote attribution: mono, 12px, text-low, mb 40px */}
                <p className="font-mono text-[12px] text-text-low mb-[40px]">
                    — Production Team, Orion
                </p>

                {/* Smooth Drawer replaced standard Button */}
                <SmoothDrawer />
            </motion.div>
        </section>
    )
}
