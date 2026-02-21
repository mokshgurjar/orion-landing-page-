'use client'

import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import SectionTitle from '@/components/ui/SectionTitle'
import FeatureCard from '@/components/ui/FeatureCard'
import { FEATURES } from '@/lib/data'

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export default function Features() {
    return (
        // section: py 120px
        <section id="features" className="py-[120px]">
            <div className="w-[90%] max-w-[1200px] mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={{ show: { transition: { staggerChildren: 0.08 } } }}
                >
                    <motion.div variants={item}>
                        <SectionEyebrow>Capabilities</SectionEyebrow>
                    </motion.div>
                    <motion.div variants={item}>
                        <SectionTitle subtitle="What Orion does — and what no competitor can.">
                            Not an incremental improvement.<br />
                            A different architecture.
                        </SectionTitle>
                    </motion.div>
                </motion.div>

                {/* feature-grid: 2 cols, gap 24px */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                    {FEATURES.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.7, delay: i * 0.08, ease: 'easeOut' }}
                        >
                            <FeatureCard feature={feature} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
