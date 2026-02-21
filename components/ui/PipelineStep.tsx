import type { PipelineStep } from '@/types'

// Original .pipeline-cell: padding 24px 20px, border-right 1px border, border-bottom 1px border, transition bg 0.3s
// :nth-child(5n): border-right none
// :nth-child(n+11): border-bottom none
// :hover: bg red-dim
// .pipeline-step-num: mono, 10px, red-deep, mb 6px
// .pipeline-step-name: mono, 11px, text

interface PipelineStepProps {
    step: PipelineStep
    index: number
}

export default function PipelineStepComponent({ step, index }: PipelineStepProps) {
    // 15 steps in 5-col grid = 3 rows. Last row = steps 11-15 (index 10-14)
    const isLastInRow5 = (index + 1) % 5 === 0
    const isLastInRow3 = (index + 1) % 3 === 0
    const isInLastRow = index >= 10

    return (
        <div
            className={[
                'p-[24px_20px] transition-[background] duration-300 hover:bg-red-dim border-b border-border',
                isLastInRow5 ? 'border-r-0' : 'border-r border-border',
                isInLastRow ? 'border-b-0' : '',
                // mobile: 3-col, override 5th-col rule, apply 3rd-col rule
                'max-md:border-r max-md:border-border',
                isLastInRow3 ? 'max-md:border-r-0' : '',
            ].join(' ')}
        >
            <div className="font-mono text-[10px] text-red-deep mb-[6px]">
                {step.num}
            </div>
            <div className="font-mono text-[11px] text-text-DEFAULT">
                {step.name}
            </div>
        </div>
    )
}
