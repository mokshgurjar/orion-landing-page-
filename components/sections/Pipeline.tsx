'use client'

import SectionEyebrow from '@/components/ui/SectionEyebrow'
import SectionTitle from '@/components/ui/SectionTitle'
import PipelineStepComponent from '@/components/ui/PipelineStep'
import { PIPELINE_STEPS } from '@/lib/data'

export default function Pipeline() {
    return (
        <section
            id="pipeline"
            style={{ padding: '120px 0', background: 'var(--color-bg)' }}
        >
            <div style={{ width: '90%', maxWidth: '1200px', margin: '0 auto' }}>

                <SectionEyebrow>The Core Pipeline</SectionEyebrow>
                <SectionTitle subtitle="In order. No shortcuts. The pipeline is the product.">
                    Every prompt flows through all 15 stages.
                </SectionTitle>

                {/* .pipeline-box: border 1px, position relative, overflow hidden */}
                <div
                    style={{
                        border: '1px solid var(--color-border-DEFAULT)',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* .pipeline-box::before — 2px gradient top line */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            background: 'linear-gradient(90deg, var(--color-red-deep), var(--color-red-bright), var(--color-red-deep))',
                        }}
                    />

                    {/* .pipeline-grid: repeat(5, 1fr) — no gap (borders handle spacing) */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(5, 1fr)',
                        }}
                    >
                        {PIPELINE_STEPS.map((step, i) => (
                            <PipelineStepComponent
                                key={step.num}
                                step={step}
                                index={i}
                                totalSteps={PIPELINE_STEPS.length}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
