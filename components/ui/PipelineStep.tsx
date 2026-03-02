'use client'

import { useState } from 'react'
import type { PipelineStep } from '@/types'

interface PipelineStepProps {
    step: PipelineStep
    index: number
    totalSteps?: number
}

export default function PipelineStepComponent({
    step,
    index,
    totalSteps = 15,
}: PipelineStepProps) {
    const [hovered, setHovered] = useState(false)

    // .pipeline-cell:nth-child(5n) → border-right: none
    const isLastInDesktopRow = (index + 1) % 5 === 0
    // .pipeline-cell:nth-child(n+11) → border-bottom: none (last row of 3 in 5-col = items 11–15)
    const isLastDesktopRow = index >= totalSteps - 5

    return (
        <div
            style={{
                padding: '24px 20px',
                borderRight: isLastInDesktopRow ? 'none' : '1px solid var(--color-border-DEFAULT)',
                borderBottom: isLastDesktopRow ? 'none' : '1px solid var(--color-border-DEFAULT)',
                transition: 'background 0.3s',
                background: hovered ? 'var(--color-red-dim)' : 'transparent',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* .pipeline-step-num: mono, 10px, red-deep, mb 6px */}
            <div
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--color-red-deep)',
                    marginBottom: '6px',
                }}
            >
                {step.num}
            </div>

            {/* .pipeline-step-name: mono, 11px, text */}
            <div
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--color-text-DEFAULT)',
                }}
            >
                {step.name}
            </div>
        </div>
    )
}
