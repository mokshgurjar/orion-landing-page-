'use client'

import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import SectionTitle from '@/components/ui/SectionTitle'
import ValidationLayerComponent from '@/components/ui/ValidationLayer'
import { VALIDATION_LAYERS } from '@/lib/data'

// Original: py 120px
// .validation-grid: grid 3-col, gap 24px
// Mobile: grid 1-col

export default function Validation() {
    return (
        <section id="validation" className="py-[120px]">
            <div className="w-[90%] max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <SectionEyebrow>Stage 09 — Validation Gate</SectionEyebrow>
                    <SectionTitle subtitle="Most IDEs skip this entirely. Orion makes it mandatory.">
                        Six layers of proof before a file is touched.
                    </SectionTitle>
                </motion.div>

                {/* validation-grid: 3-col, gap 24px */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                    {VALIDATION_LAYERS.map((layer, i) => (
                        <motion.div
                            key={layer.num}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: i * 0.08, ease: 'easeOut' }}
                        >
                            <ValidationLayerComponent layer={layer} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
