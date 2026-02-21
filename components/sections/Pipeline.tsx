'use client'

import { motion } from 'framer-motion'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import SectionTitle from '@/components/ui/SectionTitle'
import PipelineStepComponent from '@/components/ui/PipelineStep'
import { PIPELINE_STEPS } from '@/lib/data'

// Original #pipeline section: py 120px
// .pipeline-box: border 1px border, position relative, overflow hidden
// ::before: absolute top 0, left/right 0, height 2px, linear-gradient(90deg, red-deep, red-bright, red-deep)
// .pipeline-grid: grid, 5-col, no gap
// Cell borders handled in PipelineStep component

export default function Pipeline() {
    return (
        <section id="pipeline" className="py-[120px] bg-bg-2">
            <div className="w-[90%] max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7 }}
                >
                    <SectionEyebrow>Stage 01–15</SectionEyebrow>
                    <SectionTitle subtitle="Every request passes through all 15 stages, in order, without exception.">
                        The 15-stage deterministic pipeline.
                    </SectionTitle>
                </motion.div>

                {/* pipeline-box: border 1px, relative, overflow hidden, 2px top gradient line */}
                <motion.div
                    className="border border-border relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    {/* 2px gradient top line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[linear-gradient(90deg,var(--color-red-deep),var(--color-red-bright),var(--color-red-deep))]" />

                    {/* pipeline-grid: 5-col desktop, 3-col mobile */}
                    <div className="grid grid-cols-5 max-md:grid-cols-3">
                        {PIPELINE_STEPS.map((step, i) => (
                            <PipelineStepComponent key={step.num} step={step} index={i} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
